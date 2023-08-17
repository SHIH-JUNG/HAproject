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

//datepicker創建 region
datepicker_create = function (selector_id) {
    $("#" + selector_id).datepicker({
      changeYear: true,
      changeMonth: true,
      currentText: "今天",
      dateFormat: "R/mm/dd",
      showButtonPanel: true,
      minDate: new Date(
        new Date().getFullYear() - 2,
        new Date().getMonth() - 3,
        1
      ),
      maxDate: new Date(new Date().getFullYear() + 3, 11, 31),
      onClose: function (dateText) {
        // console.log($('#'+selector_id).val());
        // console.log(trans_to_EN(dateText));
      },
      beforeShow: function (input, inst) {
        var $this = $(this);
        var cal = inst.dpDiv;
        var outerh = $this.outerHeight();
        if ($this.offset().top > 1200) {
          outerh = outerh * 4;
        } else {
          outerh = outerh * 3;
        }
        // console.log($this.offset().top)
        // console.log(outerh)
  
        var top = $this.offset().top - outerh;

        if($this.offset().left < 460)
        {
            var left = $this.offset().left - 50;
        }
        else
        {
            var left = $this.offset().left - 450;
        }
        setTimeout(function () {
          cal.css({
            top: top,
            left: left,
          });
        }, 10);
      },
    });
    // $("#" + selector_id).datepicker("setDate", "today");
  };
  //endregion
  
  //將日期轉為民國年格式111.03.07 region
  trans_to_Tw = function (endate) {
    var strAry = endate.split(".");
  
    if (parseInt(strAry[0]) > 1911) {
      strAry[0] = parseInt(strAry[0]) - 1911;
    }
  
    return strAry.join(".");
  };
  //endregion
  
  //將日期轉為西元年格式2022-03-07(mysql date格式) region
  trans_to_EN = function (endate) {
    var strAry = endate.split(".");
  
    if (parseInt(strAry[0]) < 1911) {
      strAry[0] = parseInt(strAry[0]) + 1911;
    }
  
    return strAry.join("-");
};
//endregion

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
          // console.log(data);
          var cssStr = "";
          
          $.each(data, function (index, value) {
            var invoice_type_str="";
            var payee = "";

            switch (value.Invoice_type) {
                case "收入":
                    invoice_type_str = '<td style="text-align:center">' + '<input value="'+value.Amount+'" type="text">' + '</td>' +
                    '<td style="text-align:center">'+'<input value="" type="text">'+'</td>' ;
                    break;
                case "支出":
                    invoice_type_str = '<td style="text-align:center">'+'<input value="" type="text">'+'</td>' +
                    '<td style="text-align:center">' + '<input value="'+value.Amount+'" type="text">' + '</td>' ;
                    break;
                default:
                    invoice_type_str = '<td style="text-align:center">' + '<input value="'+value.Amount+'" type="text">' + '</td>' +
                    '<td style="text-align:center">'+'<input value="" type="text">'+'</td>' ;
                    break;
            }


            // console.log(value.Form_class)
            if(value.Form_class=="轉帳")
            {
                cssStr = ""; 
                payee = value.Payee;

                cssStr = '<tr id="tr'+value.Id+'">' +
                '<td style="text-align:center">' + '<input name="tr_update" id="tr_update'+value.Id+'" i_type="'+value.Form_class+'" style="zoom: 1.5" value="'+value.Id+'" type="checkbox">' + '</td>' +
                '<td style="text-align:center">' + '<input value="'+value.Invoice_date+'" type="text" id="invoice_date'+value.Id+'" datepicker="ch_datepicker">' + '</td>' +
                '<td style="text-align:center">' + '<input value="'+value.Invoice_seq+'" type="text">' + '</td>' +
                '<td style="text-align:center">' + '<input value="'+value.Invoice_content+'" type="text">' + '</td>' +
                invoice_type_str+
                '<td style="text-align:center">' + '<input value="'+value.Withdrawal_date +'" type="text" id="withdrawal_date'+value.Id+'" datepicker="ch_datepicker">'+ '</td>' +
                // '<td style="text-align:center">' + '<input value="'+value.Payee+'" type="text">' + '</td>' +
                '<td style="text-align:center">' + '<select name="payee" id="payee'+value.Id+'"><option value="">無</option></select>' + '</td>' +
                '<td style="text-align:center">' + '<input value="'+value.Record_date+'" type="text" id="record_date'+value.Id+'" datepicker="ch_datepicker">' + '</td>' +
                '<td style="text-align:center">' + '<input value="'+value.Remark+'" type="text">' + '</td>' +
                '</tr>';

                $("#transfer_tbody").append(cssStr);
            }
            else if(value.Form_class=="日記帳")
            {
                cssStr = ""; 
                payee = value.Payee;

                cssStr = '<tr id="tr'+value.Id+'">' +
                '<td style="text-align:center">' + '<input name="tr_update" id="tr_update'+value.Id+'" i_type="'+value.Form_class+'" style="zoom: 1.5" value="'+value.Id+'" type="checkbox">' + '</td>' +
                '<td style="text-align:center">' + '<input value="'+value.Invoice_date+'" type="text" id="invoice_date'+value.Id+'" datepicker="ch_datepicker">' + '</td>' +
                '<td style="text-align:center">' + '<input value="'+value.Invoice_seq+'" type="text">' + '</td>' +
                '<td style="text-align:center">' + '<input value="'+value.Invoice_content+'" type="text">' + '</td>' +
                invoice_type_str+
                '<td style="text-align:center">' + '<input value="'+value.Withdrawal_date +'" type="text" id="withdrawal_date'+value.Id+'" datepicker="ch_datepicker">'+ '</td>' +
                // '<td style="text-align:center">' + '<input value="'+value.Payee+'" type="text">' + '</td>' +
                '<td style="text-align:center">' + '<select name="payee" id="payee'+value.Id+'"><option value="">無</option></select>' + '</td>' +
                '<td style="text-align:center">' + '<input value="'+value.Record_date+'" type="text" id="record_date'+value.Id+'" datepicker="ch_datepicker">' + '</td>' +
                '<td style="text-align:center">' + '<input value="'+value.Remark+'" type="text">' + '</td>' +
                '</tr>';

                $("#tbody_"+value.Month).append(cssStr);
            }
            else if(value.Form_class=="兒少單據")
            {
                cssStr = '<tr id="tr'+value.Id+'">' +
                '<td style="text-align:center">' + '<input name="tr_update" id="tr_update'+value.Id+'" i_type="'+value.Form_class+'" style="zoom: 1.5" value="'+value.Id+'" type="checkbox">' + '</td>' +
                '<td style="text-align:center">' + '<input value="'+value.Invoice_date+'" type="text" id="invoice_date'+value.Id+'" datepicker="ch_datepicker">' + '</td>' +
                '<td style="text-align:center">' + '<input value="'+value.Invoice_class+'" type="text">' + '</td>' +
                '<td style="text-align:center">' + '<input value="'+value.Invoice_content+'" type="text">' + '</td>' +
                invoice_type_str+
                '<td style="text-align:center">' + '<input value="'+value.Upload_date +'" type="text" id="upload_date'+value.Id+'" datepicker="ch_datepicker">'+ '</td>' +
                '<td style="text-align:center">' + '<input value="'+value.Record_date+'" type="text" id="record_date'+value.Id+'" datepicker="ch_datepicker">' + '</td>' +
                '<td style="text-align:center">' + '<input value="'+value.Remark+'" type="text">' + '</td>' +
                '</tr>';
                
                $("#ct_invoice_tbody").append(cssStr);
            }
              // 請款人選項連動在職人員 region
              $.ajax({
                type:'POST',
                url:'database/find_check_user.php',
                dataType: "JSON",
                async: false,//啟用同步請求
                success: function (data) {
                    // console.log('test',data)
                    for (var index in data.Id) {
                        $("[id*=payee]").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                    }
                },
              });
              //endregion           
              // console.log(payee)

              $("#payee"+value.Id).val(payee);
          });


          $("input[name='tr_update']").each(function(index) {
            $(this).on("click", function(){
                // For the mammal value
                var mammalKey = $(this).attr('value'); 
                $("input[name*='tr_update']").prop('checked',false);
                $("#tr_update"+mammalKey).prop('checked',true);
            });
          });

              //將input datepicker屬性名稱為ch_datepicker創建datepicker初始化 region
            $("input[datepicker='ch_datepicker']").each(function () {
                var this_id = $(this).attr("id");
                datepicker_create(this_id);
            });
            //endregion

        },
        error: function (e) {
          swal({
            type: "error",
            title: "系統錯誤!請聯絡負責人",
            allowOutsideClick: false, //不可點背景關閉
          }).then(function () {
            history.back();
          });
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
                '<td style="text-align:center"></td>' +
                '<td style="text-align:center"></td>' +
                '<td style="text-align:center"></td>' +
                '<td style="text-align:center"><span style="color:red;">上期結餘</span></td>' +
                '<td style="text-align:center">' + value.Last_pb + '</td>' +
                '<td style="text-align:center"></td>' +
                '<td style="text-align:center"></td>' +
                '<td style="text-align:center"><span> </span></td>' +
                '<td style="text-align:center"><span> </span></td>' +
                '<td style="text-align:center"><span> </span></td>' +
                '</tr>';

            $("#tbody_"+value.Month).prepend(cssStr_bylastpb);
          });
          
          $.each(data, function (index, value) {

            cssStr_bysum = '<tr id="tr'+value.Year+'_'+value.Month+'" class="balance_tab">' +
                '<td style="text-align:center"><span style="color:red;">合計</span></td>' +
                '<td style="text-align:center"><span> </span></td>' +
                '<td style="text-align:center"><span> </span></td>' +
                '<td style="text-align:center"><span> </span></td>' +
                '<td style="text-align:center">' + value.Income_sum + '</td>' +
                '<td style="text-align:center">' + value.Cost_sum + '</td>' +
                '<td style="text-align:center">' + value.This_pb + '</td>' +
                '<td style="text-align:center"><span> </span></td>' +
                '<td style="text-align:center"><span> </span></td>' +
                '<td style="text-align:center"><span> </span></td>' +
                '</tr>';

            $("#tbody_"+value.Month).after(cssStr_bysum);
          });



        },
        error: function (e) {
          swal({
            type: "error",
            title: "系統錯誤!請聯絡負責人",
            allowOutsideClick: false, //不可點背景關閉
          }).then(function () {
            history.back();
          });
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


