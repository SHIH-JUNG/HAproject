const notyf = new Notyf();

//取得url id值region
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      vars[key] = value;
    }
  );
  return vars;
}
//endregion

//datepicker創建 region
datepicker_create = function (selector_id) {
  $("#" + selector_id).datepicker({
    changeYear: true,
    changeMonth: true,
    currentText: "今天",
    dateFormat: "R年mm月dd日",
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
      if ($this.offset().top > 1500) 
      {
        outerh = outerh * 8;
      }
      else if ($this.offset().top > 1200 && $this.offset().top < 1500) 
      {
          outerh = outerh * 4;
      }
      else 
      {
        outerh = outerh * 3;
      }
      console.log($this.offset().top)
      console.log(outerh)

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
  $("#" + selector_id).datepicker("setDate", "today");
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

  $.ajax({
      type:'POST',
      url:'database/find_check_user.php',
      dataType: "JSON",
      async: false,//啟用同步請求
      success: function (data) {
          // console.log('test',data)
          for (var index in data.Id) {
              $("[id*=supervise]").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
          }
      },
    });
});

//新增會議記錄region
$("#rec_add_new").on("click", function () {
   
  //判斷該量表是否含有 input[type="file"] 類型資料
  if ($('input[type="file"]').length != 0) {
    var exist_arr = check_file_exist();

    console.log(exist_arr);
    //如果上傳的檔案檔名重複則提示使用者
    if (exist_arr.length != 0) {
      swal({
        title: exist_arr[0][1],
        text: "選擇『確認送出』覆蓋現有檔案，或是按『取消』更改檔名",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "確認送出",
        cancelButtonText: "取消",
        showConfirmButton: true,
        showCancelButton: true,
      })
        .then(
          function (result) {
            if (result) {
              submit_form_data_upload();
            }
          },
          function (dismiss) {
            if (dismiss == "cancel") {
              swal({
                title: "已取消，建議請更改檔名",
                type: "success",
              });
            }
          }
        )
        .catch(swal.noop);
    } else {
      var stau = false;

      if (check_add_rec_data_upload() != "") {
        stau = false;
      } else {
        stau = true;
      }

      if (!stau) {
        swal({
          title: check_add_rec_data_upload(),
          type: "error",
        });
      } else {
        submit_form_data_upload();
      }
    }
  } else {
    return false;
  }
});
//endregion


//新增會議記錄region
submit_form_data_upload = function() {
  
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
    if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
    }
  });

  var form_data = new FormData();

  var get_resume_files = get_files_name_value();

  $("input[type='file']").each(function(index, element) {
    var resume_files = $(this).prop("files");
    // console.log(resume_files.length)
    
    if (resume_files != undefined) {
      if (resume_files.length != 0) {
        for (var i = 0; i < resume_files.length; i++) {
          form_data.append("resume_files"+index, resume_files[i]);
          // console.log(resume_files[i])
        }
      } else {
        //載入量表『無重新上傳檔案』情況下按儲存，則加入File_name供後端程式判斷
        form_data.append("File_name", JSON.stringify(get_resume_files));
      }
    }
  });

  var upload_rec_date_year_split = $("#upload_rec_date").val().split("年");

  form_data.append("year", upload_rec_date_year_split[0]);
  form_data.append("upload_content", JSON.stringify(form));
  form_data.append("title", '會員大會記錄簽核：'+$("#upload_title_name").val());
  form_data.append("rec_type", 'upload');
  form_data.append("signer", $("#upload_rec_supervise").val());
  form_data.append("rec_date_time", split_date($("#upload_rec_date").val())+" 00:00");
  
  for (var pair of form_data.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }

  // $.ajax({
  //   url: "database/add_new_upload_volunteer_meeting.php",
  //   type: "POST",
  //   data: form_data,
  //   contentType: false,
  //   cache: false,
  //   processData: false,
  //   async: true,
  //   success: function (data) {
  //     console.log(data);
  //     if (data == 1) {
  //       swal({
  //         type: "success",
  //         title: "新增成功!",
  //         allowOutsideClick: false, //不可點背景關閉
  //       }).then(function () {
  //         window.location.href =
  //           "volunteer_meeting.php?year=" + upload_rec_date_year_split[0];
  //       });
  //     } else {
  //       swal({
  //         type: "error",
  //         title: "新增失敗!請聯絡負責人",
  //         allowOutsideClick: false, //不可點背景關閉
  //       });
  //     }
  //   },
  //   error: function (e) {
  //     swal({
  //       type: "error",
  //       title: "新增失敗!請聯絡負責人",
  //       allowOutsideClick: false, //不可點背景關閉
  //     });
  //     console.log(e);
  //   },
  // });
}
//endregion


//檢查會議記錄的必填欄位 upload region
function check_add_rec_data_upload() {
  var upload_title_name = $("#upload_title_name").val();
  var customFile = $("[name*=customFile]").prop("files").length;
  var upload_rec_supervise = $("#upload_rec_supervise").val();

  var errorstr = "";

  if(upload_title_name == null) {
    errorstr += "未填寫會議記錄標題!\r\n";
  }
  if(customFile == 0) {
    errorstr += "未上傳會議記錄檔案!\r\n";
  }
  if (upload_rec_supervise == null) {
    errorstr += "未選擇督導!\r\n";
  }
  if (errorstr == "") {
    if(upload_title_name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫會議記錄標題!\r\n";
    }
    if (upload_rec_supervise.replace(/\s*/g, "") == "") {
      errorstr += "未選擇督導!\r\n";
    }
  }

  return errorstr;
}
//endregion


// 顯示檔名 region
$("input[type='file']").change(function (event) {
  //獲取 檔名.檔案格式
  var filePath = $(this).val().split("\\");
  //獲取 file name名稱
  var name = $(this).attr("name");

  //創建臨時檔案連結
  // var tmppath = URL.createObjectURL(event.target.files[0]);

    //若檔案為圖片格式，則顯示圖片，否則不顯示圖片
    if (isAssetTypeAnImage(ext.toLowerCase())) {
      $("#" + name + "_img")
        .fadeIn("fast")
        .attr("src", URL.createObjectURL(event.target.files[0]));
    } else {
      $("#" + name + "_img").css("display", "none");
    }

  //預覽上傳檔名
  $("#" + name).html("檔名：" + filePath[filePath.length - 1]);

});
// endregion



// 獲取檔案的檔名、值 region
get_files_name_value = function() {

  file_name = [];
  $("input[type='file']").each(function() {
    //獲取 檔名.檔案格式
    var filePath = $(this).val().split("\\");
    //獲取 file name名稱
    var name = $(this).attr("name");
    
    file_name.push({ name: name, value: filePath[filePath.length - 1] });
 });

 return file_name;
}
// endregion


//檢查檔名是否重複，提示使用者region
function check_file_exist() {
  var check_file_value = $('input[type="file"]').prop("files");
  var warning_str = "";
  var file_arr = [];
  var file_n = "";
  var exist_info = [];

  for (var i = 0; i < check_file_value.length; i++) {
    file_arr.push(check_file_value[i]["name"]);
  }
  $.each(file_arr, function (index, value) {
    $.ajax({
      url: "database/volunteer_meeting_file_check.php",
      data: {
        file_name: value,
      },
      type: "POST",
      dataType: "JSON",
      async: false,
      success: function (data) {
        //  console.log(data)
        if (data != "") {
          $.each(data, function (index, value) {
            file_n = data[index].file_path.replace(
              "../volunteer_meeting/upload/",
              ""
            );

            warning_str += "已有重複檔案名稱：\n" + file_n;

            exist_info.push([file_n, warning_str]);
          });
        } else {
          warning_str = "";
        }
      },
      error: function (e) {
        console.log(e);
        notyf.alert('伺服器錯誤,無法載入');
      },
    });
  });
  return exist_info;
}
//endregion