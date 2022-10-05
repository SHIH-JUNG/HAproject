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


$(document).ready(function () {
    //將input datepicker屬性名稱為ch_datepicker創建datepicker初始化 region
    $("input[datepicker='ch_datepicker']").each(function () {
      var this_id = $(this).attr("id");
      datepicker_create(this_id);
    });
    //endregion

});

function test1() {
    //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
    $("input, textarea").each(function () {
        if ($(this).attr("type") != "file") {
            $(this).val(jQuery.trim($(this).val()));
        }
        });
      
        var form_data = new FormData();
    
        var report_year = $("#report_date").val().split("\/")[0];
    
    
        $("input[type='file']").each(function(index, element) {
            var report_files = $(this).prop("files");
    
            if (report_files != undefined) {
              if (report_files.length != 0) {
                for (var i = 0; i < report_files.length; i++) {
                  form_data.append("report_files"+index, report_files[i]);
                  // console.log(report_files[i])
                }
              } 
            }
        });
    
        form_data.append("Report_type", $("#report_type").val());
        form_data.append("Report_title", $("#report_title").val());
        form_data.append("Report_date", $("#report_date").val());
        form_data.append("Remark",$("#remark").val());
        form_data.append("Report_year", report_year);
    
        // 預覽傳到後端的資料詳細內容
        for (var pair of form_data.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }
}


// 新增零用金資料 region
$("#rec_add_new").on("click", function () {
    var stau = false;
  
    if (check_add_rec_data() != "") {
      stau = false;
    } else {
      stau = true;
    }
  
    if (!stau) {
      swal({
        title: check_add_rec_data(),
        type: "error",
      });
    } else {
        submit_form();
    }
});
//endregion

function submit_form() {
    //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
    $("input, textarea").each(function () {
    if ($(this).attr("type") != "file") {
        $(this).val(jQuery.trim($(this).val()));
    }
    });
  
    var form_data = new FormData();

    var report_year = $("#report_date").val().split("\/")[0];


    $("input[type='file']").each(function(index, element) {
        var report_files = $(this).prop("files");

        if (report_files != undefined) {
          if (report_files.length != 0) {
            for (var i = 0; i < report_files.length; i++) {
              form_data.append("report_files"+index, report_files[i]);
              // console.log(report_files[i])
            }
          } 
        }
    });

    form_data.append("Report_type", $("#report_type").val());
    form_data.append("Report_title", $("#report_title").val());
    form_data.append("Report_date", $("#report_date").val());
    form_data.append("Remark",$("#remark").val());
    form_data.append("Report_year", report_year);

    // 預覽傳到後端的資料詳細內容
    // for (var pair of form_data.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }


    $.ajax({
        url: "database/add_new_accounting_record_report.php",
        type: "POST",
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        async: true,
        success: function (data) {
          console.log(data);
          if (data == 1) {
            swal({
              type: "success",
              title: "新增成功!",
              allowOutsideClick: false, //不可點背景關閉
            }).then(function () {
              window.location.href =
                "accounting_record_report.php?year=" + report_year;
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
            console.log(e)
            swal({
                type: "error",
                title: "新增失敗!請聯絡負責人",
                allowOutsideClick: false, //不可點背景關閉
            });
        },
      });
}


  //檢查必填欄位region
function check_add_rec_data() {

    var report_type = $("#report_type").val();
    var report_upload = $("[name='report_upload']").val();
    var report_title = $("#report_title").val();
    var report_date = $("#report_date").val();
   
    
     var errorstr = "";
    

      if (report_type == null) {
          errorstr += "未選擇報表類型!\r\n";
      }
      if (report_title == null) {
        errorstr += "未填寫檔案標題!\r\n";
      }
      if (report_date == null) {
          errorstr += "未填寫檔案日期!\r\n";
      }
      if (report_upload == null) {
          errorstr += "未選擇上傳的檔案!\r\n";
      }
      if (errorstr == "") {
          if (report_type.replace(/\s*/g, "") == "") {
              errorstr += "未選擇報表類型!\r\n";
          }
          if (report_title.replace(/\s*/g, "") == "") {
            errorstr += "未填寫檔案標題!\r\n";
          }
          if (report_date.replace(/\s*/g, "") == "") {
          errorstr += "未填寫檔案日期!\r\n";
          }
          if (report_upload.replace(/\s*/g, "") == "") {
          errorstr += "未選擇上傳的檔案!\r\n";
          }
      }
   
     return errorstr;
}
//endregion

// 檔案標題、檔案日期
window.report_file_title = "";
window.report_file_date = "";

// 顯示檔名 region
$("input[type='file']").change(function (event) {
    //獲取 檔名.檔案格式
    var filePath = $(this).val().split("\\");
    //獲取 file name名稱
    var name = $(this).attr("name");
  
    //創建臨時檔案連結
    // var tmppath = URL.createObjectURL(event.target.files[0]);
  
    //預覽上傳檔名
    $("#" + name).html("檔名：" + filePath[filePath.length - 1]);

    // 獲取檔案名稱，格式ex：資產負債表_1110101.pdf
    var file_val = filePath[filePath.length - 1];
    // 獲取檔案標題
    report_file_title = file_val.split("_")[0];
    // 獲取檔案日期
    report_file_date = trans_file_date(file_val.split("_")[1].split(".")[0]);
    
    // 寫入 檔案標題、檔案日期
    $("#report_title").val(report_file_title);
    $("#report_date").val(report_file_date);
});
// endregion

// 轉換檔名的日期，ex：1101122 -> 110/11/22
function trans_file_date(file_format) {
    var year = file_format.substr(0, 3);
    var month = file_format.substr(3, 2);
    var date = file_format.substr(5, 2);

    return year + "/" + month + "/" + date;
}
