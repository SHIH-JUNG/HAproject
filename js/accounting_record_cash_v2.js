//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

var arc_year = getUrlVars()["year"];
var i_type = decodeURIComponent(getUrlVars()["i_type"]);
var arc_month = getUrlVars()["arc_month"];

// page reload時保持上次的頁籤狀態 region
function tab_toggle() {
  $('a[data-toggle="pill"]').on('show.bs.tab', function(e) {
      localStorage.setItem('activeTab', $(e.target).attr('href'));
  });
  var activeTab = localStorage.getItem('activeTab');
  if(activeTab){
      $('#myTab a[href="' + activeTab + '"]').tab('show');
  }
}


$('#menu_tab_nav li a, .breadcrumb li, .brand-img').on('click',function() {
  localStorage.removeItem('activeTab');
});
//endregion

back_arc_page = function() {
  window.location.href = "accounting_record_cash_yearlist_v2.php";
}

window.month_list = [];

$(document).ready(function () {

    // 顯示各期零用金紀錄、兒少單據、轉帳資料 region
    $.ajax({
        url: "database/find_accounting_record_cash_v2.php",
        data: {
          year: arc_year,
        },
        type: "POST",
        dataType: "JSON",
        async: false,
        success: function (data) {
          // console.log(data);
          var cssStr = "";
          
          $.each(data, function (index, value) {
            var invoice_type_str="";

            switch (value.Invoice_type) {
                case "收入":
                    invoice_type_str = '<td style="text-align:center">' + value.Amount + '</td>' +
                    '<td style="text-align:center">' + '</td>' ;
                    break;
                case "支出":
                    invoice_type_str = '<td style="text-align:center">' + '</td>' +
                    '<td style="text-align:center">' + value.Amount + '</td>' ;
                    break;
            }

            //customFile 顯示資料處理 region
            var customFile_arr = value.Files_path.replace("\[", "").replace("\]", "").replace(/\"/g, "").split(",");

            window.customFile_input_val_arr = [];
    
            var customFile_htmlstr = "";
            
            if(value.Files_path != "")
            {
              $.each(customFile_arr, function (i, val) {
    
                var arc_file_path = val.replace("../", "./");
                var arc_file_name = val.split("/");
    
                var arc_file_val = arc_file_name[arc_file_name.length - 1];
    
                customFile_input_val_arr.push(val);
                    
                customFile_htmlstr +=
                  '<span>檔案' + (i + 1) + '：</span><a id="val_arr'+i+'" href="' + arc_file_path + '" style="text-decoration:none;color:blue;" target="_blank">'
                  + arc_file_val
                  + '</a><br/><br/>';
                
              });
            }

            cssStr = ""; 

            cssStr = '<tr id="tr'+value.Id+'">' +
            '<td style="text-align:center"></td>' +
            invoice_type_str+
            '<td style="text-align:center">' + customFile_htmlstr + '</td>' +
            '<td style="text-align:center">' + value.Create_date + '</td>' +
            '<td style="text-align:center">' + value.Remark + '</td>' +
            '<td style="text-align:center">' + 
            '<a href="accounting_record_cash_detail_v2.php?year='+value.Year+'&month='+value.Month+'&arc_id='+value.Id+'&i_type='+value.Form_class+'" style="text-decoration: underline;color:black;">查看</a>' +
            '</td>' +
            '</tr>';

            // console.log(cssStr)

            if(value.Form_class=="轉帳")
            {
                $("#transfer_tbody").append(cssStr);
            }
            else if(value.Form_class=="日記帳")
            {
                $("#tbody_"+value.Month).append(cssStr);
            }
            else if(value.Form_class=="兒少單據")
            {
                $("#ct_invoice_tbody").append(cssStr);
            }

            month_list.push(value.Month);

          });

          
          
          if(month_list.length > 0)
          {
              //option小到大排序
              month_list.sort(function(a,b){
                  var aText = $(a).text().toUpperCase();
                  var bText = $(b).text().toUpperCase();
                  // if(aText>bText) return 1;
                  // if(aText<bText) return -1;
                  // return 0;

                  return aText - bText;
              })

              month_list = month_list.filter(function(elem, index, self) {
                return index === self.indexOf(elem);
              })
          }
        

        //  console.log(month_list)

        },
        error: function (e) {
          swal({
            type: "error",
            title: "系統錯誤!請聯絡負責人",
            allowOutsideClick: false, //不可點背景關閉
          })
          // .then(function () {
          //   history.back();
          // });
        },
      });
      //endregion
      
      window.balance_arr = [];


      $.each(month_list, function (i, month_num) {
        // 顯示各期零用金紀錄資料之餘額總計 region
  
        var total_last_pb = 0;

        var this_month_datas = load_month_balance_num(month_num);
        // console.log(this_month_datas)
        
        if(i == 0)
        {
          total_last_pb = 0;
        }
        else
        {
          total_last_pb = balance_arr[i-1]["value"][2];
        }    
        
        var new_total_this_pb = Number(this_month_datas[0]) - Number(this_month_datas[1]) + Number(total_last_pb);
        
        balance_arr.push({month:month_num,value:[this_month_datas[0], this_month_datas[1], new_total_this_pb]});

        //endregion
      });

      // console.log(balance_arr)

      $.each(month_list, function (i, month_num) {

        var cssStr_bylastpb = "";
        var cssStr_bysum = "";
        var last_pb_str = "";
        if(i == 0)
        {
          last_pb_str = "0";
        }
        else
        {
          last_pb_str = balance_arr[i-1]["value"][2];
        }

        cssStr_bylastpb = '<tr id="tr'+balance_arr[i]["year"]+'_'+month_num+'_lastpb">' +
              '<td style="text-align:center"><span style="color:red;">上期結餘</span></td>' +
              '<td style="text-align:center">' + last_pb_str + '</td>' +
              '<td style="text-align:center"></td>' +
              '<td style="text-align:center"></td>' +
              '<td style="text-align:center"></td>' +
              '<td style="text-align:center"></td>' +
              '<td style="text-align:center"></td>' +
              '</tr>';

        $("#tbody_"+month_num).prepend(cssStr_bylastpb);

        cssStr_bysum = '<tr id="tr'+balance_arr[i]["year"]+'_'+month_num+'" class="balance_tab">' +
        '<td style="text-align:center"><span style="color:red;">合計</span></td>' +
        '<td style="text-align:center">' + balance_arr[i]["value"][0] + '</td>' +
        '<td style="text-align:center">' + balance_arr[i]["value"][1] + '</td>' +
        '<td style="text-align:center">' + balance_arr[i]["value"][2] + '</td>' +
        '<td style="text-align:center"></td>' +
        '<td style="text-align:center"></td>' +
        '<td style="text-align:center"></td>' +
        '</tr>';

        $("#tbody_"+month_num).after(cssStr_bysum);
      });

    if(i_type !== undefined)
    {
      switch (i_type) {
        case "兒少單據":
            $('#myTab a[href="#type0"]').tab('show');
            break;

        case "轉帳":
            $('#myTab a[href="#type1"]').tab('show');
            break;

        case "日記帳":
            $('#myTab a[href="#type2_' + arc_month + '"]').tab('show');
            break;
      }
        
    }
    else
    {
        tab_toggle();
    }
});


load_month_balance_num = function(month_num) {

  var balance_arr = [];

  // 顯示各期零用金紀錄、兒少單據、轉帳資料之餘額總計 region
  $.ajax({
    url: "database/find_accounting_record_cash_balance_v2.php",
    data: {
      year: arc_year,
      month: month_num,
    },
    type: "POST",
    dataType: "JSON",
    async: false,
    success: function (data) {
      // console.log(data); 
      
      var total_year_i = 0;
      var total_year_c = 0;

      $.each(data, function (index, value) {
        // 根據Invoice_type計算 今年的收入、支出
        switch (value.Invoice_type) {
          case "收入":
            total_year_i += Number(value.Amount);
            break;
          
          case "支出":
            total_year_c += Number(value.Amount);
            break;
        }
      });

      balance_arr.push(total_year_i);
      balance_arr.push(total_year_c);
      // console.log(balance_arr)
    },
    error: function (e) {
      swal({
        type: "error",
        title: "系統錯誤!請聯絡負責人",
        allowOutsideClick: false, //不可點背景關閉
      })
      // .then(function () {
      //   history.back();
      // });
    },
  });
  //endregion

  return balance_arr;
}


