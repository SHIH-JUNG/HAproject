
//將日期轉為民國年格式111.03.07 region
trans_to_Tw = function (endate) 
{
  var strAry = endate.split(".");

  if (parseInt(strAry[0]) > 1911) {
    strAry[0] = parseInt(strAry[0]) - 1911;
  }

  return strAry.join(".");
};
//endregion

//將日期轉為西元年格式2022-03-07(mysql date格式) region
trans_to_EN = function (endate) 
{
  var strAry = endate.split(".");

  if (parseInt(strAry[0]) < 1911) {
    strAry[0] = parseInt(strAry[0]) + 1911;
  }

  return strAry.join("-");
};
//endregion

$(document).ready(function () {
  
  // 依據單據類型顯示表單 region
  $("input[type=radio][name=form_class]").on('change',function(){
    select_form_class(this.value);
  });
  
  //預設選擇日記帳
  select_form_class(2);
  //endregion

  // 請款人選項連動在職人員 region
  // $.ajax({
  //   type:'POST',
  //   url:'database/find_check_user.php',
  //   dataType: "JSON",
  //   async: false,//啟用同步請求
  //   success: function (data) {
  //       // console.log('test',data)
  //       for (var index in data.Id) {
  //           $("[id*=payee]").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
  //       }
  //   },
  // });
  //endregion

  window.invoice_year_arr = [];
  window.invoice_month_arr = [];

  $("[invoice_arr='year']").each(function(){

    var this_id = $(this).attr("id");
    invoice_year_arr.push(this_id);
  });

  $.each(invoice_year_arr,function(i,v){
    load_invoice_year_optios(v);
  });
  
  $("[invoice_arr='month']").each(function(){

    var this_id = $(this).attr("id");
    invoice_month_arr.push(this_id);
  });

  $.each(invoice_month_arr,function(i,v){
    load_invoice_month_optios(v);
  });

});

load_invoice_year_optios = function(id_arr_val) 
{
  var currentYear = new Date().getFullYear() - 1911;

  var min_range = currentYear - 15;

  var max_range = currentYear + 5;

  console.log(min_range, max_range)

  $("[id='"+id_arr_val+"']").append('<option value=""  disabled selected>請選擇年度</option>');

  for (i = max_range; i >= min_range; i--) {
    $("[id='"+id_arr_val+"']").append('<option value="'+i+'">'+i+'</option>');
  }

}

load_invoice_month_optios = function(id_arr_val) 
{  
  $("[id='"+id_arr_val+"']").append('<option value=""  disabled selected>請選擇年度</option>');

  for (i = 1; i <= 12; i++) {
    $("[id='"+id_arr_val+"']").append('<option value="'+i+'">'+i+'</option>');
  }

  
}


// function test1() {
    
//   var form_class = $("[name='form_class']:checked").val();
//   console.log(form_class)
// }

//宣告存入 file Object的空陣列
window.file_name = [];

// 顯示檔名 region
$("input[type='file']").change(function (event) {

   
  // console.log(event.target.files)
  // console.log(event.target.files.length)

  //獲取 file name名稱
  var name = $(this).attr("name");

  var file_names_str = "";

  // 顯示檔名
  $.each(event.target.files, function(key,val) {

    
    file_names_str += "檔案" + (key + 1) + "名稱：" + val.name + "<br/>";

    //若檔案類型為圖片則創建img元素
    var index = val.name.lastIndexOf(".");

    if(isAssetTypeAnImage(val.name.substr(index+1)))
    {
      file_names_str += '<img id="' + name + 'pre_img' + key + '" src=""/>';
    }

    // if(event.target.files.length > 1)
    // {
    //   file_names_str += '<hr/>';
    // }

    // file_names_str += '<br/>';

  });

  //若檔案類型為圖片則顯示圖片
  $.each(event.target.files, function(key,val) {
    var index = val.name.lastIndexOf(".");

    if(isAssetTypeAnImage(val.name.substr(index+1)))
    {
      const fr = new FileReader();
      fr.onload = function (e) {
        $('#' + name + 'pre_img' + key).attr('src', e.target.result);//读取的结果放入圖片
      };

      fr.readAsDataURL(event.target.files[key]);
    }
  });

  //預覽上傳檔名(圖片)
  $("#" + name).html(file_names_str);

});
// endregion


// 檢查檔案類型是否為圖片 region
function isAssetTypeAnImage(ext) {
  return [
  'png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].
  indexOf(ext.toLowerCase()) !== -1;
}
// endregion



// 新增零用金資料 region
$("#rec_add_new").on("click", function () {
    //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
    $("input, textarea").each(function () {
      if ($(this).attr("type") != "file") {
        $(this).val(jQuery.trim($(this).val()));
      }
    });

    var form_class = $("[name='form_class']:checked").val();

    // var submit_data = {};

    //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
    $("input, textarea").each(function () {
      if ($(this).attr("type") != "file") {
        $(this).val(jQuery.trim($(this).val()));
      }
    });

    var form_data = new FormData();

    var submit_trans_href = "";

    switch (form_class) {
      case "0":
        submit_trans_href = "accounting_record_cash_v2.php?year=" + $("#invoice_year2").val()

        $("[name='customFile2']").each(function(index, element) {
          var arc_files = $(this).prop("files");
          // console.log(arc_files.length)
          
          if (arc_files != undefined) {
            if (arc_files.length != 0) 
            {
              for (var i = 0; i < arc_files.length; i++) {
                // console.log(arc_files[i])
                form_data.append("arc_files[]", arc_files[i]);
              }
            }
          }
        });

        form_data.append("Invoice_year", $("#invoice_year2").val());
        form_data.append("Invoice_month", $("#invoice_month2").val());
        form_data.append("Form_class", "兒少單據");
        form_data.append("Invoice_type", $("#invoice_type2").val());
        form_data.append("Amount", $("#amount2").val());
        form_data.append("Remark", $("#remark2").val());

        // submit_data = {}
        // submit_data={
        //   Invoice_year:$("#invoice_year2").val(),
        //   Invoice_month:$("#invoice_month2").val(),
        //   Form_class:"兒少單據",
        //   Invoice_type:$("#invoice_type2").val(),
        //   Amount:$("#amount2").val(),
        //   Remark:$("#remark2").val(),
        // };

        break;
      case "1":
        
        submit_trans_href = "accounting_record_cash_v2.php?year=" + $("#invoice_year").val()

        $("[name='customFile1']").each(function(index, element) {
          var arc_files = $(this).prop("files");
          // console.log(arc_files.length)
          
          if (arc_files != undefined) {
            if (arc_files.length != 0) 
            {
              for (var i = 0; i < arc_files.length; i++) {
                // console.log(arc_files[i])
                form_data.append("arc_files[]", arc_files[i]);
              }
            }
          }
        });

        form_data.append("Invoice_year", $("#invoice_year").val());
        form_data.append("Invoice_month", $("#invoice_month").val());
        form_data.append("Form_class", "轉帳");
        form_data.append("Invoice_type", $("#invoice_type").val());
        form_data.append("Amount", $("#amount").val());
        form_data.append("Remark", $("#remark").val());

        // submit_data = {}
        // submit_data={
        //   Invoice_year:$("#invoice_year").val(),
        //   Invoice_month:$("#invoice_month").val(),
        //   Form_class:"轉帳",
        //   Invoice_type:$("#invoice_type").val(),
        //   Amount:$("#amount").val(),
        //   Remark:$("#remark").val(),
        // };
      break;
      case "2":

        submit_trans_href = "accounting_record_cash_v2.php?year=" + $("#invoice_year").val()

        $("[name='customFile1']").each(function(index, element) {
          var arc_files = $(this).prop("files");
          // console.log(arc_files.length)
          
          if (arc_files != undefined) {
            if (arc_files.length != 0) 
            {
              for (var i = 0; i < arc_files.length; i++) {
                // console.log(arc_files[i])
                form_data.append("arc_files[]", arc_files[i]);
              }
            }
          }
        });

        form_data.append("Invoice_year", $("#invoice_year").val());
        form_data.append("Invoice_month", $("#invoice_month").val());
        form_data.append("Form_class", "日記帳");
        form_data.append("Invoice_type", $("#invoice_type").val());
        form_data.append("Amount", $("#amount").val());
        form_data.append("Remark", $("#remark").val());

        // submit_data = {}
        // submit_data={
        //   Invoice_year:$("#invoice_year").val(),
        //   Invoice_month:$("#invoice_month").val(),
        //   Form_class:"日記帳",
        //   Invoice_type:$("#invoice_type").val(),
        //   Amount:$("#amount").val(),
        //   Remark:$("#remark").val(),
        // };
        break;
    }
  
    for (var pair of form_data.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

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
        url: "database/add_new_accounting_record_cash_v2.php",
        type: "POST",
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        async: true,
        // data: submit_data,
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
                "accounting_record_cash_v2.php?year=" + $("#invoice_year").val();
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
          swal({
            type: "error",
            title: "新增失敗!請聯絡負責人",
            allowOutsideClick: false, //不可點背景關閉
          });
          console.log(e);
        },
      });
    }
  });
  //endregion


  //檢查必填欄位region
function check_add_rec_data(form_class) {

    var invoice_year = $("#invoice_year").val();
    var invoice_month = $("#invoice_month").val();
    var invoice_type = $("#invoice_type").val();
    var amount = $("#amount").val();
   
    var invoice_year2 = $("#invoice_year2").val();
    var invoice_month2 = $("#invoice_month2").val();
    var invoice_type2 = $("#invoice_type2").val();
    var amount2 = $("#amount2").val();

    var customFile1 = $("[name*=customFile1]").prop("files").length;
    var customFile2 = $("[name*=customFile2]").prop("files").length;

     var errorstr = "";
    
     if(form_class=="1" || form_class=="2")
     {
      if (invoice_year == null) {
          errorstr += "未填寫年度!\r\n";
      }
      if (invoice_month == null) {
          errorstr += "未填寫月份!\r\n";
      }
      if (invoice_type == null) {
          errorstr += "未選擇收入或支出!\r\n";
      }
      if (amount == null) {
          errorstr += "未填寫金額!\r\n";
      }
      
      if(customFile1 == 0) {
        errorstr += "未上傳會計零用金檔案!\r\n";
      }
      if (errorstr == "") {
          if (invoice_year.replace(/\s*/g, "") == "") {
              errorstr += "未填寫年度!\r\n";
          }
          if (invoice_month.replace(/\s*/g, "") == "") {
          errorstr += "未填寫月份!\r\n";
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
      if (invoice_year2 == null) {
        errorstr += "未填寫年度!\r\n";
      }
      if (invoice_month2 == null) {
          errorstr += "未填寫月份!\r\n";
      }
      if (invoice_type2 == null) {
          errorstr += "未選擇收入或支出!\r\n";
      }
      if (amount2 == null) {
          errorstr += "未填寫金額!\r\n";
      }
      if(customFile2 == 0) {
        errorstr += "未上傳會計零用金檔案!\r\n";
      }
      if (errorstr == "") {
          if (invoice_year2.replace(/\s*/g, "") == "") {
              errorstr += "未填寫年度!\r\n";
          }
          if (invoice_month2.replace(/\s*/g, "") == "") {
            errorstr += "未填寫月份!\r\n";
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

