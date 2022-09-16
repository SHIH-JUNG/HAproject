//datepicker創建 region
datepicker_create = function (selector_id) {
  if (selector_id == "birth") {
    $("#" + selector_id).datepicker({
      changeYear: true,
      changeMonth: true,
      currentText: "今天",
      dateFormat: "R.mm.dd",
      showButtonPanel: true,
      yearRange: "-109:+0",
      onClose: function (dateText) {
        console.log($("#" + selector_id).val());
        console.log(trans_to_EN(dateText));
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
  } else {
    $("#" + selector_id).datepicker({
      changeYear: true,
      changeMonth: true,
      currentText: "今天",
      dateFormat: "R.mm.dd",
      showButtonPanel: true,
      minDate: new Date(new Date().getFullYear(), new Date().getMonth() - 3, 1),
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
  //將input name名稱為ch_datepicker創建datepicker初始化 region
  $("input[name='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion
});

//新增來文紀錄region
$("#res_add_new").on("click", function () {
  var stau = false;
  var fd = new FormData();

  //獲取File Object
  var files = $('[name="customFile1"]').prop("files");
  console.log(typeof files);
  console.log(files);
  // Check file selected or not
  if (files != undefined) {
    if (files.length != 0) {
      for (var i = 0; i < files.length; i++) {
        fd.append("file", files[i]);
        console.log(files[i]);
      }
    } else {
      fd.append("file_name1", $("#customFile1").attr("value"));
    }
  }

  var files2 = $('[name="customFile2"]').prop("files");
  console.log(typeof files2);
  console.log(files2);
  // Check file selected or not
  if (files2 != undefined) {
    if (files2.length != 0) {
      for (var i = 0; i < files2.length; i++) {
        fd.append("file2", files2[i]);
        console.log(files2[i]);
      }
    } else {
      fd.append("file_name2", $("#customFile2").attr("value"));
    }
  }

  var files3 = $('[name="customFile3"]').prop("files");
  console.log(typeof files3);
  console.log(files3);
  // Check file selected or not
  if (files3 != undefined) {
    if (files3.length != 0) {
      for (var i = 0; i < files3.length; i++) {
        fd.append("file3", files3[i]);
        console.log(files3[i]);
      }
    } else {
      fd.append("file_name3", $("#customFile3").attr("value"));
    }
  }

  var files4 = $('[name="customFile4"]').prop("files");
  console.log(typeof files4);
  console.log(files4);
  // Check file selected or not
  if (files4 != undefined) {
    if (files4.length != 0) {
      for (var i = 0; i < files4.length; i++) {
        fd.append("file4", files4[i]);
        console.log(files4[i]);
      }
    } else {
      fd.append("file_name4", $("#customFile4").attr("value"));
    }
  }

  fd.append("name", $("#name").val());
  fd.append("upload_date", $("#upload_date").val());
  fd.append("entry_date", $("#entry_date").val());
  fd.append("on_or_off", $("#on_or_off").val());
  fd.append("file1_check", $("#file1_check").val());
  fd.append("file2_check", $("#file2_check").val());
  fd.append("file3_check", $("#file3_check").val());
  fd.append("file4_check", $("#file4_check").val());

  if (check_add_resume_data() != "") {
    stau = false;
  } else {
    stau = true;
  }
  console.log(stau);

  if (!stau) {
    swal({
      title: check_add_resume_data(),
      type: "error",
    });
  } else {
    $.ajax({
      url: "database/add_new_resume.php",
      type: "POST",
      data: {
        //   // Id: $("#id").val(),
        Name: $("#name").val(),
        Upload_date: trans_to_EN($("#upload_date").val()),
        Entry_date: trans_to_EN($("#entry_date").val()),
        On_or_off: $("on_or_off").val(),
        File1_check: $("file1_check").val(),
        File2_check: $("file2_check").val(),
        File3_check: $("file3_check").val(),
        File4_check: $("file4_check").val(),
        //   // Create_date: trans_to_EN($("#create_date").val()),
        //   // Create_name: $("#create_name").val(),
        //   // Update_date: trans_to_EN($("#update_date").val()),
        //   // Update_name: $("#update_name").val(),
      },
      //            dataType: "JSON",
      data: fd,
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
            window.location.replace("resume.php");
          });
        } else {
          swal({
            type: "error",
            title: "新增失敗!請聯絡負責人",
            allowOutsideClick: false, //不可點背景關閉
          }).then(function () {
            window.location.replace("resume.php");
          });
        }
      },
      error: function (e) {
        alert("系統錯誤!");
        console.log(e);
      },
    });
  }
});
//endregion

//檢查來文紀錄的必填欄位region
function check_add_resume_data() {
  var name = $("#name").val();
  var upload_date = $("#upload_date").val();
  var entry_date = $("#entry_date").val();

  var errorstr = "";

  if (name == null) {
    errorstr += "未填寫姓名!\r\n";
  }
  if (upload_date == null) {
    errorstr += "未填寫上傳日期!\r\n";
  }
  if (entry_date == null) {
    errorstr += "未填寫入職日!\r\n";
  }

  if (errorstr == "") {
    if (name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫姓名!\r\n";
    }
    if (upload_date.replace(/\s*/g, "") == "") {
      errorstr += "未填寫上傳日期!\r\n";
    }
    if (entry_date.replace(/\s*/g, "") == "") {
      errorstr += "未填寫入職日!\r\n";
    }
  }

  return errorstr;
}
//endregion
