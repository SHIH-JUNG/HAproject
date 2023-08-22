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


$('#menu_tab_nav li a, .breadcrumb li span a').on('click',function() {
  localStorage.removeItem('activeTab');
});
//endregion

$(document).ready(function () {


    // 顯示各期零用金紀錄、兒少單據、轉帳資料 region
    $.ajax({
        url: "database/find_accounting_record_cash_v2.php",
        data: {
          year: arc_year,
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
          console.log(data);
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

            console.log(cssStr)

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
          });


          $("input[name='tr_update']").each(function(index) {
            $(this).on("click", function(){
                // For the mammal value
                var mammalKey = $(this).attr('value'); 
                $("input[name*='tr_update']").prop('checked',false);
                $("#tr_update"+mammalKey).prop('checked',true);
            });
          });

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

      // 顯示各期零用金紀錄、兒少單據、轉帳資料之餘額總計 region
      $.ajax({
        url: "database/find_accounting_record_cash_balance_v2.php",
        data: {
          year: arc_year,
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
          console.log(data);
          var cssStr_bylastpb = "";
          var cssStr_bysum = "";

          $.each(data, function (index, value) {

            cssStr_bylastpb = '<tr id="tr'+value.Year+'_'+value.Month+'_lastpb">' +
                '<td style="text-align:center"><span style="color:red;">上期結餘</span></td>' +
                '<td style="text-align:center">' + value.Last_pb + '</td>' +
                '<td style="text-align:center"></td>' +
                '<td style="text-align:center"></td>' +
                '<td style="text-align:center"></td>' +
                '<td style="text-align:center"></td>' +
                '<td style="text-align:center"></td>' +
                '</tr>';

            $("#tbody_"+value.Month).prepend(cssStr_bylastpb);
          });
          
          $.each(data, function (index, value) {

            cssStr_bysum = '<tr id="tr'+value.Year+'_'+value.Month+'" class="balance_tab">' +
                '<td style="text-align:center"><span style="color:red;">合計</span></td>' +
                '<td style="text-align:center">' + value.Income_sum + '</td>' +
                '<td style="text-align:center">' + value.Cost_sum + '</td>' +
                '<td style="text-align:center">' + value.This_pb + '</td>' +
                '<td style="text-align:center"></td>' +
                '<td style="text-align:center"></td>' +
                '<td style="text-align:center"></td>' +
                '</tr>';

            $("#tbody_"+value.Month).after(cssStr_bysum);
          });



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

      tab_toggle();
});





update_arc = function() {
    var check_id = $("input[name='tr_update']:checked").attr("value");
    var i_type = $("input[name='tr_update']:checked").attr("i_type");
    var answer = [];
    var submitdata = {};
    answer.push(i_type);

    $("#tr"+check_id+" td  > *").each(function(index) {
        answer.push($(this).val());
    });
    console.log(answer);

    var invoice_date_year_split = answer[2].split("\/");

    if(answer[5]=="" && answer[6]!="")
   {
    var amount = answer[6];
    var invoice_type = "支出";
   }
   else if(answer[6]=="" && answer[5]!="")
   {
    var amount = answer[5];
    var invoice_type = "收入";
   }

   if(i_type=="兒少單據")
   {
    submitdata={
      Id:answer[1],
      o_year:arc_year,
      year:invoice_date_year_split[0],
      month:invoice_date_year_split[1],
      Form_class:answer[0],
      Invoice_date:answer[2],
      Invoice_class:answer[3],
      Invoice_content:answer[4],
      Invoice_type:invoice_type,
      Amount:amount,
      Upload_date:answer[7],
      Record_date:answer[8],
      Remark:answer[9],
    };
   }
   else
   {
    submitdata={
      Id:answer[1],
      o_year:arc_year,
      year:invoice_date_year_split[0],
      month:invoice_date_year_split[1],
      Form_class:answer[0],
      Invoice_date:answer[2],
      Invoice_seq:answer[3],
      Invoice_content:answer[4],
      Invoice_type:invoice_type,
      Amount:amount,
      Withdrawal_date:answer[7],
      Payee:answer[8],
      Record_date:answer[9],
      Remark:answer[10],
    };
   }

   console.log(submitdata);

    $.ajax({
        url: "database/update_accounting_record_cash_data_v2.php",
        type: "POST",
        data: submitdata,
        //            dataType: "JSON",
        success: function (data) {
          console.log(data);
          if (data == 1) {
            swal({
              type: "success",
              title: "更新成功!",
              allowOutsideClick: false, //不可點背景關閉
            }).then(function () {
                location.reload();
            });
          } else {
            swal({
              type: "error",
              title: "更新失敗!請聯絡負責人",
              allowOutsideClick: false, //不可點背景關閉
            });
          }
        },
        error: function () {
          swal({
            type: "error",
            title: "更新失敗!請聯絡負責人",
            allowOutsideClick: false, //不可點背景關閉
          });
        },
      });
}


