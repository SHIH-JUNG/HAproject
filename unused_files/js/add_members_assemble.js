const notyf = new Notyf();

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



test1 = function () {
  console.log("test1");
  var meeting_date_year_split = $("#meeting_date").val().split("年");
  console.log(meeting_date_year_split[0]);
  var upload_rec_date_year_split = $("#upload_rec_date").val().split("年");
  console.log(upload_rec_date_year_split[0]);
};

// 民國年轉換日期格式yyyy-dd-mm region
function split_date(date) {
  return parseInt(date.split("年")[0])+1911+"-"+date.split("年")[1].split("月")[0]+"-"+date.split("年")[1].split("月")[1].split("日")[0]; 
}
//endregion

//新增會議記錄region
$("#rec_add_new").on("click", function () {
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
    if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
    }
  });

  var form = $("#form_a").serializeArray();

  $.each(form, function (seq, element) {

    var inputs_type = $("[name='"+element.name+"']").prop("tagName");

    if(inputs_type == "TEXTAREA")
    {
      element.value = element.value.replace(/\r\n/g, ";;");
    }
  });

  var meeting_date_year_split = $("#meeting_date").val().split("年");
  var title = '會員大會記錄簽核：'+$("#title_name").val();
  // console.log(form)

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
    $.ajax({
      url: "database/add_new_members_assemble.php",
      type: "POST",
      data: {
        record_content: form,
        year: meeting_date_year_split[0],
        title:title,
        rec_type:'fillin',
        signer:$("#supervise").val(),
        rec_date_time:split_date($("#meeting_date").val())+" "+$("#meeting_time").val(),
      },
      //            dataType: "JSON",
      success: function (data) {
        // console.log(data);
        if (data == 1) {
          swal({
            type: "success",
            title: "新增成功!",
            allowOutsideClick: false, //不可點背景關閉
          }).then(function () {
            window.location.href =
              "members_assemble.php?year=" + meeting_date_year_split[0];
          });
        } else {
          swal({
            type: "error",
            title: "新增失敗！請聯絡網站維護人員",
            allowOutsideClick: false, //不可點背景關閉
          });
        }
      },
      error: function () {
        swal({
          type: "error",
          title: "新增失敗！請聯絡網站維護人員",
          allowOutsideClick: false, //不可點背景關閉
        });
      },
    });
  }
});
//endregion

//宣告存入 file Object的空陣列
var file_name = [];

//選擇檔案的動作region
$("input[name*='customFile']").change(function (event) {
  //獲取 檔名.檔案格式
  var filePath = $(this).val().split("\\");
  //獲取 file name名稱
  var name = $(this).attr("name");
  //獲取檔案格式
  var filetype = filePath[filePath.length - 1].split(".");
  var ext = filetype[filetype.length - 1];
  // console.log(ext)

  //file_name中name值 重複次數
  var repeat_num = 0;
  //file_name中name值 重複的索引值
  var repeat_index;

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

  //查看 file_name 中是否已有重複元素
  $.each(file_name, function (i, obj) {
    if (obj.name == name) {
      repeat_num++;
      repeat_index = i;
    } else {
      repeat_num = 0;
    }
  });
  // console.log(repeat_num);

  //如果file_name中未找到相同name值，則新加入一筆資料至file_name
  //否則，找到相對應索引repeat_index name值，更新該value值
  if (repeat_num == 0) {
    file_name.push({ name: name, value: filePath[filePath.length - 1] });
  } else {
    file_name[repeat_index]["value"] = filePath[filePath.length - 1];
  }

  // console.log(file_name)
});
//endregion

//檢查是否為圖片檔region
function isAssetTypeAnImage(ext) {
  return (
    ["png", "jpg", "jpeg", "bmp", "gif", "webp", "psd", "svg", "tiff"].indexOf(
      ext.toLowerCase()
    ) !== -1
  );
}
//endregion

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
      url: "database/members_assemble_file_check.php",
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
              "../members_assemble/upload/",
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
        notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
      },
    });
  });
  return exist_info;
}
//endregion

//檢查檔案重複，並上傳會議記錄 region
$("#rec_add_new_upload").on("click", function () {
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
    if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
    }
  });

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

//上傳會議記錄ajax資料格式 region
function submit_form_data_upload() {
  var form_data = new FormData();
  var form = $("#form_b").serializeArray();

  $.each(form, function (seq, element) {

    var inputs_type = $("[name='"+element.name+"']").prop("tagName");

    if(inputs_type == "TEXTAREA")
    {
      element.value = element.value.replace(/\r\n/g, ";;");
    }
  });

  var customfile = $('[type="file"]').prop("files");

  // console.log(customfile)

  if (file_name.length == 0) {
    var input_files_len = $('[type="file"]');
    var inputs_files_value = $('[type="file"]').attr("value");
    var inputs_files_name = $('[type="file"]').attr("name");

    if (inputs_files_value != undefined) {
      for (var i = 0; i < input_files_len.length; i++) {
        file_name.push({ name: inputs_files_name, value: inputs_files_value });
      }
    }

    form = form.concat(file_name);
  } else {
    form = form.concat(file_name);
  }

  if (customfile != undefined) {
    if (customfile.length != 0) {
      for (var i = 0; i < customfile.length; i++) {
        form_data.append("file4", customfile[i]);
        // console.log(customfile[i])
      }
    } else {
      //載入量表『無重新上傳檔案』情況下按儲存，則加入File_name供後端程式判斷
      form_data.append("File_name", $('[type="file"]').attr("value"));
    }
  }

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

  $.ajax({
    url: "database/add_new_upload_members_assemble.php",
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
            "members_assemble.php?year=" + upload_rec_date_year_split[0];
        });
      } else {
        swal({
          type: "error",
          title: "新增失敗！請聯絡網站維護人員",
          allowOutsideClick: false, //不可點背景關閉
        });
      }
    },
    error: function (e) {
      swal({
        type: "error",
        title: "新增失敗！請聯絡網站維護人員",
        allowOutsideClick: false, //不可點背景關閉
      });
      console.log(e);
    },
  });
}
//endregion

//檢查會議記錄的必填欄位region
function check_add_rec_data() {
  var title_name = $("#title_name").val();
  var ceo_name = $("#ceo_name").val();
  var attendees = $("#attendees").val();
  var absent = $("#absent").val();
  var record = $("#record").val();
  var meeting_date = $("#meeting_date").val();
  var meeting_time = $("#meeting_time").val();
  var place = $("#place").val();
  var discuss = $("#discuss").val();
  var motion = $("#motion").val();
  var supervise = $("#supervise").val();

  var errorstr = "";
  
  if (title_name == null) {
    errorstr += "未填寫會員大會記錄標題!\r\n";
  }
  if (ceo_name == null) {
    errorstr += "未填寫主席!\r\n";
  }
  if (attendees == null) {
    errorstr += "未填寫出席人員!\r\n";
  }
  if (absent == null) {
    errorstr += "未填寫請假人員!\r\n";
  }
  if (record == null) {
    errorstr += "未填寫紀錄者!\r\n";
  }
  if (meeting_date == null) {
    errorstr += "未填寫會議日期!\r\n";
  }
  if (meeting_time == null) {
    errorstr += "未填寫會議時間!\r\n";
  }
  if (place == null) {
    errorstr += "未填寫會議地點!\r\n";
  }
  if (discuss == null) {
    errorstr += "未填寫提案討論內容!\r\n";
  }
  if (motion == null) {
    errorstr += "未填寫臨時動議內容	!\r\n";
  }
  if (supervise == null) {
    errorstr += "未選擇督導!\r\n";
  }
  if (errorstr == "") {
    if (title_name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫會員大會記錄標題!\r\n";
    }
    if (ceo_name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫主席!\r\n";
    }
    if (attendees.replace(/\s*/g, "") == "") {
      errorstr += "未填寫出席人員!\r\n";
    }
    if (absent.replace(/\s*/g, "") == "") {
      errorstr += "未填寫請假人員!\r\n";
    }
    if (record.replace(/\s*/g, "") == "") {
      errorstr += "未填寫紀錄者!\r\n";
    }
    if (meeting_date.replace(/\s*/g, "") == "") {
      errorstr += "未填寫會議日期!\r\n";
    }
    if (meeting_time.replace(/\s*/g, "") == "") {
      errorstr += "未填寫會議時間!\r\n";
    }
    if (place.replace(/\s*/g, "") == "") {
      errorstr += "未填寫會議地點!\r\n";
    }
    if (discuss.replace(/\s*/g, "") == "") {
      errorstr += "未填寫提案討論內容!\r\n";
    }
    if (motion.replace(/\s*/g, "") == "") {
      errorstr += "未填寫臨時動議內容	!\r\n";
    }
    if (supervise.replace(/\s*/g, "") == "") {
      errorstr += "未選擇督導!\r\n";
    }
  }

  return errorstr;
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

// 禁止所有輸入框輸入 反斜線符號\ region
$("input, textarea").on("input", function() {
  return $(this).val($(this).val().replace(/\\/g,''));
});
//endregion