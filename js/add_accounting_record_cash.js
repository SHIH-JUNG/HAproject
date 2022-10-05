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
        var left = $this.offset().left - 10;
        setTimeout(function () {
          cal.css({
            top: top,
            left: left,
          });
        }, 10);
      },
    });
    if(selector_id!="withdrawal_date")
    {
      $("#" + selector_id).datepicker("setDate", "today");
    }
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

$(document).ready(function () {
    //將input datepicker屬性名稱為ch_datepicker創建datepicker初始化 region
    $("input[datepicker='ch_datepicker']").each(function () {
      var this_id = $(this).attr("id");
      datepicker_create(this_id);
    });
    //endregion

  // 依據單據類型顯示表單 region
    $("input[type=radio][name=form_class]").on('change',function(){
      select_form_class(this.value);
  });
  select_form_class(2);
  //endregion

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

});

function test1() {
    
  var form_class = $("[name='form_class']:checked").val();
  console.log(form_class)
}


// 新增零用金資料 region
$("#rec_add_new").on("click", function () {
    //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
    $("input, textarea").each(function () {
      if ($(this).attr("type") != "file") {
        $(this).val(jQuery.trim($(this).val()));
      }
    });

    var form_class = $("[name='form_class']:checked").val();

    var submit_data = {};

    var invoice_date_year_split;

    switch (form_class) {
      case "0":

        invoice_date_year_split = $("#invoice_date2").val().split("\/");
        submit_data = {}
        submit_data={
          year:invoice_date_year_split[0],
          month:invoice_date_year_split[1],
          Form_class:"兒少單據",
          Invoice_date:$("#invoice_date2").val(),
          Invoice_class:$("#invoice_class").val(),
          Invoice_content:$("#invoice_content2").val(),
          Invoice_type:$("#invoice_type2").val(),
          Amount:$("#amount2").val(),
          Upload_date:$("#upload_date").val(),
          Record_date:$("#record_date2").val(),
          Remark:$("#remark2").val(),
        };

        break;
      case "1":

        invoice_date_year_split = $("#invoice_date").val().split("\/");
        submit_data = {}
        submit_data={
          year:invoice_date_year_split[0],
          month:invoice_date_year_split[1],
          Form_class:"轉帳",
          Invoice_date:$("#invoice_date").val(),
          Invoice_seq:$("#invoice_seq").val(),
          Invoice_content:$("#invoice_content").val(),
          Invoice_type:$("#invoice_type").val(),
          Amount:$("#amount").val(),
          Withdrawal_date:$("#withdrawal_date").val(),
          Payee:$("#payee").val(),
          Record_date:$("#record_date").val(),
          Remark:$("#remark").val(),
        };
      break;
      case "2":

        invoice_date_year_split = $("#invoice_date").val().split("\/");
        submit_data = {}
        submit_data={
          year:invoice_date_year_split[0],
          month:invoice_date_year_split[1],
          Form_class:"日記帳",
          Invoice_date:$("#invoice_date").val(),
          Invoice_seq:$("#invoice_seq").val(),
          Invoice_content:$("#invoice_content").val(),
          Invoice_type:$("#invoice_type").val(),
          Amount:$("#amount").val(),
          Withdrawal_date:$("#withdrawal_date").val(),
          Payee:$("#payee").val(),
          Record_date:$("#record_date").val(),
          Remark:$("#remark").val(),
        };
        break;
      default:
        var invoice_date_year_split = $("#invoice_date").val().split("\/");
        submit_data={
          year:invoice_date_year_split[0],
          month:invoice_date_year_split[1],
          Form_class:"日記帳",
          Invoice_date:$("#invoice_date").val(),
          Invoice_seq:$("#invoice_seq").val(),
          Invoice_content:$("#invoice_content").val(),
          Invoice_type:$("#invoice_type").val(),
          Amount:$("#amount").val(),
          Withdrawal_date:$("#withdrawal_date").val(),
          Payee:$("#payee").val(),
          Record_date:$("#record_date").val(),
          Remark:$("#remark").val(),
        };
        break;
    }

    // console.log(invoice_date_year_split[0])
  
    var stau = false;
  
    if (check_add_rec_data(form_class) != "") {
      stau = false;
    } else {
      stau = true;
    }
  
    if (!stau) {
      swal({
        title: check_add_rec_data(form_class),
        type: "error",
      });
    } else {
      $.ajax({
        url: "database/add_new_accounting_record_cash.php",
        type: "POST",
        data: submit_data,
        //            dataType: "JSON",
        success: function (data) {
          console.log(data);
          if (data == 1) {
            swal({
              type: "success",
              title: "新增成功!",
              allowOutsideClick: false, //不可點背景關閉
            }).then(function () {
              window.location.href =
                "accounting_record_cash.php?year=" + invoice_date_year_split[0];
            });
          } else {
            swal({
              type: "error",
              title: "新增失敗!請聯絡負責人",
              allowOutsideClick: false, //不可點背景關閉
            });
          }
        },
        error: function (e) {
          console.log("系統錯誤!"+e);
        },
      });
    }
  });
  //endregion


  //檢查必填欄位region
function check_add_rec_data(form_class) {

    var invoice_date = $("#invoice_date").val();
    // var invoice_seq = $("#invoice_seq").val();
    var invoice_content = $("#invoice_content").val();
    var invoice_type = $("#invoice_type").val();
    var amount = $("#amount").val();
    // var withdrawal_date = $("#withdrawal_date").val();
    // var payee = $("#payee").val();
    // var record_date = $("#record_date").val();
   
    var invoice_date2 = $("#invoice_date2").val();
    var invoice_class = $("#invoice_class").val();
    var invoice_content2 = $("#invoice_content2").val();
    var invoice_type2 = $("#invoice_type2").val();
    var amount2 = $("#amount2").val();

    
     var errorstr = "";
    
     if(form_class=="1" || form_class=="2")
     {
      if (invoice_date == null) {
          errorstr += "未填寫憑證日期!\r\n";
      }
      if (invoice_content == null) {
          errorstr += "未填寫內容!\r\n";
      }
      if (invoice_type == null) {
          errorstr += "未選擇收入或支出!\r\n";
      }
      if (amount == null) {
          errorstr += "未填寫金額!\r\n";
      }
      if (errorstr == "") {
          if (invoice_date.replace(/\s*/g, "") == "") {
              errorstr += "未填寫憑證日期!\r\n";
          }
          if (invoice_content.replace(/\s*/g, "") == "") {
          errorstr += "未填寫內容!\r\n";
          }
          if (invoice_type.replace(/\s*/g, "") == "") {
          errorstr += "未選擇收入或支出!\r\n";
          }
          if (amount.replace(/\s*/g, "") == "") {
          errorstr += "未填寫金額!\r\n";
          }
      }
     }
    
     if(form_class=="0")
     {
      if (invoice_date2 == null) {
          errorstr += "未填寫單據日期!\r\n";
      }
      if (invoice_class == null) {
        errorstr += "未填寫單據類別!\r\n";
      }
      if (invoice_content2 == null) {
          errorstr += "未填寫內容!\r\n";
      }
      if (invoice_type2 == null) {
          errorstr += "未選擇收入或支出!\r\n";
      }
      if (amount2 == null) {
          errorstr += "未填寫金額!\r\n";
      }
      if (errorstr == "") {
          if (invoice_date2.replace(/\s*/g, "") == "") {
              errorstr += "未填寫單據日期!\r\n";
          }
          if (invoice_class.replace(/\s*/g, "") == "") {
            errorstr += "未填寫單據類別!\r\n";
          }
          if (invoice_content2.replace(/\s*/g, "") == "") {
          errorstr += "未填寫內容!\r\n";
          }
          if (invoice_type2.replace(/\s*/g, "") == "") {
          errorstr += "未選擇收入或支出!\r\n";
          }
          if (amount2.replace(/\s*/g, "") == "") {
          errorstr += "未填寫金額!\r\n";
          }
      }
     }
   
     return errorstr;
   }
   //endregion

   //根據radio值新增電訪/面訪紀錄的表單
function select_form_class(option)
{
    // console.log(option);
    switch(option)
    {
        case '0':
            $("#form_class1").hide();
            $("#form_class2").show();
            break;
        case '1':
            $("#form_title").text("新增轉帳資料");
            $("#form_class1").show();
            $("#form_class2").hide();
            break;
        case '2':
          $("#form_title").text("新增零用金資料");
          $("#form_class1").show();
          $("#form_class2").hide();
          break;
        default:
            $("#form_class1").show();
            $("#form_class2").hide();
            break;
    }
}