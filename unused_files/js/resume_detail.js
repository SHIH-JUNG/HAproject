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
  if (selector_id.includes("birth")) {
    $("#" + selector_id).datepicker({
      changeYear: true,
      changeMonth: true,
      currentText: "今天",
      dateFormat: "R.mm.dd",
      showButtonPanel: true,
      yearRange: "-109:+0",
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
  } else {
    $("#" + selector_id).datepicker({
      changeYear: true,
      changeMonth: true,
      currentText: "今天",
      dateFormat: "R.mm.dd",
      showButtonPanel: true,
      // minDate: new Date(new Date().getFullYear() - 10, 0, 1),
      // maxDate: new Date(new Date().getFullYear() + 10, 11, 31),
      yearRange: "-15:+5",
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
  var strAry = endate.split("-");

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

//檢查SQL撈出來的日期格式region
check_sql_date_format = function (date) {
  if (date == "0000-00-00") {
    date = "";
  } else {
    date = trans_to_Tw(date);
  }

  return date;
};

var res_id = getUrlVars()["res_id"];
var res_name = getUrlVars()["name"];

//抓履歷表紀錄表region
$(document).ready(function () {
  $.ajax({
    url: "database/find_resume_data_detail.php",
    data: {
      res_id: res_id,
      name: res_name,
    },
    type: "POST",
    dataType: "JSON",
    success: function (data) {
      // console.log(data);
      $.each(data, function (index, value) {
        $("#id").val(value.Id);
        $("#name").val(value.Name);
        $("#upload_date").val(check_sql_date_format(value.Upload_date));
        $("#entry_date").val(check_sql_date_format(value.Entry_date));
        $("#on_or_off").val(value.On_or_off);
        $("#file1_check").val(value.File1_check);
        $("#file2_check").val(value.File2_check);
        $("#file3_check").val(value.File3_check);
        $("#file4_check").val(value.File4_check);
        $("#create_date").val(check_sql_date_format(value.Create_date));
        $("#create_name").val(value.Create_name);
        $("#update_date").val(check_sql_date_format(value.Update_date));
        $("#update_name").val(value.Update_name);

        var file_val = value.CustomFile1.replace("../resume/", "./resume/");
        var file_val2 = value.CustomFile2.replace("../resume/", "./resume/");
        var file_val3 = value.CustomFile3.replace("../resume/", "./resume/");
        var file_val4 = value.CustomFile4.replace("../resume/", "./resume/");

        $("input[name='customFile1']").attr("value", file_val);
        $("input[name='customFile2']").attr("value", file_val2);
        $("input[name='customFile3']").attr("value", file_val3);
        $("input[name='customFile4']").attr("value", file_val4);

        var file_html =
          '<a name="customFile1_div' +
          '_a" href="' +
          file_val +
          '" style="text-decoration:none;color:blue;" target="_blank">' +
          file_val +
          '<br/><img style="vertical-align:middle;" width="auto" src="' +
          file_val +
          '"></a>';
        $("#customFile1_div").html(file_html);

        var file_html2 =
          '<a name="customFile2_div' +
          '_a" href="' +
          file_val2 +
          '" style="text-decoration:none;color:blue;" target="_blank">' +
          file_val2 +
          '<br/><img style="vertical-align:middle;" width="auto" src="' +
          file_val2 +
          '"></a>';
        $("#customFile2_div").html(file_html2);

        var file_html3 =
          '<a name="customFile3_div' +
          '_a" href="' +
          file_val3 +
          '" style="text-decoration:none;color:blue;" target="_blank">' +
          file_val3 +
          '<br/><img style="vertical-align:middle;" width="auto" src="' +
          file_val3 +
          '"></a>';
        $("#customFile3_div").html(file_html3);

        var file_html4 =
          '<a name="customFile4_div' +
          '_a" href="' +
          file_val4 +
          '" style="text-decoration:none;color:blue;" target="_blank">' +
          file_val4 +
          '<br/><img style="vertical-align:middle;" width="auto" src="' +
          file_val4 +
          '"></a>';
        $("#customFile4_div").html(file_html4);
      });
    },
    error: function (e) {
      console.log(e);
    },
  });
  $(".res_question").attr("disabled", true);

  //將name名稱為ch_datepicker創建datepicker初始化 region
  $("[name='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion
});

//endregion

//更新發文個案表基本資料region
$("#res_update").on("click", function () {
  var res_id = getUrlVars()["res_id"];

  var stau = false;

  if (check_updat_resume_data() != "") {
    stau = false;
  } else {
    stau = true;
  }
  console.log(stau);

  if (!stau) {
    swal({
      title: check_updat_resume_data(),
      type: "error",
    });
  } else {
    $.ajax({
      url: "database/update_resume_data_detail.php",
      data: {
        res_id: res_id,
        name: $("#name").val(),
        upload_date: trans_to_EN($("#upload_date").val()),
        entry_date: trans_to_EN($("#entry_date").val()),
        on_or_off: $("#on_or_off").val(),
        file1_check: $("#file1_check").val(),
        file2_check: $("#file2_check").val(),
        file3_check: $("#file3_check").val(),
        file4_check: $("#file4_check").val(),
        create_date: trans_to_EN($("#create_date").val()),
        create_name: $("#create_name").val(),
        update_date: trans_to_EN($("#update_date").val()),
        update_name: $("#update_name").val(),
      },
      type: "POST",
      dataType: "JSON",
      success: function (data) {
        if (data == 1) {
          swal({
            title: "修改成功！",
            type: "success",
          }).then(function () {
            location.reload();
          });
        } else {
          swal({
            title: "修改失敗！請聯絡網站維護人員",
            type: "error",
          });
        }
      },
      error: function (e) {
        console.log(e);
      },
    });
  }
});

//結案個案表(update)的必填欄位 region
function check_updat_resume_data() {
  var upload_date = $("#upload_date").val();
  var resume_reason_checkbox = $("input[name='resume_reason']:checked").length;
  var resume_reason_other = $("#resume_reason_other").val();

  var errorstr = "";

  if (name == null) {
    errorstr += "未填寫姓名!\r\n";
  }
  if (upload_date == null) {
    errorstr += "未填寫上傳日期!\r\n";
  }
  if (entry_date == null) {
    errorstr += "未填寫入職日期!\r\n";
  }

  return errorstr;
}
//endregion

//呼叫user方法region
function append_user() {
  $.ajax({
    type: "POST",
    url: "database/find_check_user.php",
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
      // console.log('test',data)
      for (var index in data.Id) {
        $("#user").append(
          '<option value="' +
            data.Name[index] +
            '">' +
            data.Name[index] +
            "</option>"
        );
      }
    },
  });
}
//endregion

//取消重整region
function cancel() {
  location.reload();
}
//endregion

//結案個案總表格鎖定控制region
function res_edit() {
  $(".res_question").attr("disabled", false);
  $("#edit_div").attr("hidden", true);
  $("#save_div").attr("hidden", false);
}
function res_cancel() {
  $(".res_question").attr("disabled", true);
  $("#edit_div").attr("hidden", false);
  $("#save_div").attr("hidden", true);
}
//endregion

//進入預覽WORD頁面region
$("#preview_word").on("click", function () {
  var res_id = getUrlVars()["res_id"];
  //    console.log(id);
  location.href = "preview_word.php?res_id=" + res_id + "";
});

$("#preview_word2").on("click", function () {
  var res_id = getUrlVars()["res_id"];
  //    console.log(id);
  location.href = "preview_word2.php?res_id=" + res_id + "";
});
//endregion

// //宣告存入 file Object的空陣列
// var file_name = [];

// //選擇檔案的動作region
// $("input[name*='customFile1']").change(function (event) {
//   //獲取 檔名.檔案格式
//   var filePath = $(this).val().split("\\");
//   //獲取 file name名稱
//   var name = $(this).attr("name");
//   //獲取檔案格式
//   var filetype = filePath[filePath.length - 1].split(".");
//   var ext = filetype[filetype.length - 1];
//   // console.log(ext)

//   //file_name中name值 重複次數
//   var repeat_num = 0;
//   //file_name中name值 重複的索引值
//   var repeat_index;

//   //創建臨時檔案連結
//   // var tmppath = URL.createObjectURL(event.target.files[0]);

//   //若檔案為圖片格式，則顯示圖片，否則不顯示圖片
//   if (isAssetTypeAnImage(ext.toLowerCase())) {
//     $("#" + name + "_img")
//       .fadeIn("fast")
//       .attr("src", URL.createObjectURL(event.target.files[0]));
//   } else {
//     $("#" + name + "_img").css("display", "none");
//   }

//   //預覽上傳檔名
//   $("#" + name).html("檔名：" + filePath[filePath.length - 1]);

//   //查看 file_name 中是否已有重複元素
//   $.each(file_name, function (i, obj) {
//     if (obj.name == name) {
//       repeat_num++;
//       repeat_index = i;
//     } else {
//       repeat_num = 0;
//     }
//   });
//   // console.log(repeat_num);

//   //如果file_name中未找到相同name值，則新加入一筆資料至file_name
//   //否則，找到相對應索引repeat_index name值，更新該value值
//   if (repeat_num == 0) {
//     file_name.push({ name: name, value: filePath[filePath.length - 1] });
//   } else {
//     file_name[repeat_index]["value"] = filePath[filePath.length - 1];
//   }

//   // console.log(file_name)
// });
// //endregion

// //檢查是否為圖片檔region
// function isAssetTypeAnImage(ext) {
//   return (
//     ["png", "jpg", "jpeg", "bmp", "gif", "webp", "psd", "svg", "tiff"].indexOf(
//       ext.toLowerCase()
//     ) !== -1
//   );
// }
// //endregion

// //檢查檔名是否重複，提示使用者region
// function check_file_exist() {
//   var check_file_value = $('input[type="file"]').prop("files");
//   var warning_str = "";
//   var file_arr = [];
//   var file_n = "";
//   var exist_info = [];

//   for (var i = 0; i < check_file_value.length; i++) {
//     file_arr.push(check_file_value[i]["name"]);
//   }
//   $.each(file_arr, function (index, value) {
//     $.ajax({
//       url: "database/resume_file_check.php",
//       data: {
//         file_name: value,
//       },
//       type: "POST",
//       dataType: "JSON",
//       async: false,
//       success: function (data) {
//         //  console.log(data)
//         if (data != "") {
//           $.each(data, function (index, value) {
//             file_n = data[index].file_path.replace("../resume/upload/", "");

//             warning_str += "已有重複檔案名稱：\n" + file_n;

//             exist_info.push([file_n, warning_str]);
//           });
//         } else {
//           warning_str = "";
//         }
//       },
//       error: function (e) {
//         console.log(e);
//       },
//     });
//   });
//   return exist_info;
// }
// //endregion

// //檢查檔案重複，並更新上傳會議記錄 region
// function rec_update_upload() {
//   //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
//   $("input, textarea").each(function () {
//     if ($(this).attr("type") != "file") {
//       $(this).val(jQuery.trim($(this).val()));
//     }
//   });

//   //判斷該量表是否含有 input[type="file"] 類型資料
//   if ($('input[type="file"]').length != 0) {
//     var exist_arr = check_file_exist();

//     console.log(exist_arr);
//     //如果上傳的檔案檔名重複則提示使用者
//     if (exist_arr.length != 0) {
//       swal({
//         title: exist_arr[0][1],
//         text: "選擇『確認送出』覆蓋現有檔案，或是按『取消』更改檔名",
//         type: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#DD6B55",
//         confirmButtonText: "確認送出",
//         cancelButtonText: "取消",
//         showConfirmButton: true,
//         showCancelButton: true,
//       })
//         .then(
//           function (result) {
//             if (result) {
//               submit_form_data_upload();
//             }
//           },
//           function (dismiss) {
//             if (dismiss == "cancel") {
//               swal({
//                 title: "已取消，建議請更改檔名",
//                 type: "success",
//               });
//             }
//           }
//         )
//         .catch(swal.noop);
//     } else {
//       submit_form_data_upload();
//     }
//   } else {
//     submit_form_data_upload();
//   }
// }
// //endregion

// //更新上傳會議記錄ajax資料格式 region
// function submit_form_data_upload() {
//   var form_data = new FormData();
//   var form = $("#form_a").serializeArray();
//   var customfile = $('[type="file"]').prop("files");

//   var upload_rec_date_year_split = $("#upload_rec_date").val().split("年");

//   // console.log(customfile)

//   if (file_name.length == 0) {
//     var input_files_len = $('[type="file"]');
//     var inputs_files_value = $('[type="file"]').attr("value");
//     var inputs_files_name = $('[type="file"]').attr("name");

//     if (inputs_files_value != undefined) {
//       for (var i = 0; i < input_files_len.length; i++) {
//         file_name.push({ name: inputs_files_name, value: inputs_files_value });
//       }
//     }

//     form = form.concat(file_name);
//   } else {
//     form = form.concat(file_name);
//   }

//   if (customfile != undefined) {
//     if (customfile.length != 0) {
//       for (var i = 0; i < customfile.length; i++) {
//         form_data.append("file4", customfile[i]);
//         // console.log(customfile[i])
//       }
//     } else {
//       //載入量表『無重新上傳檔案』情況下按儲存，則加入File_name供後端程式判斷
//       form_data.append("File_name", $('[type="file"]').attr("value"));
//     }
//   }

//   form_data.append("res_id", res_id);
//   // form_data.append("year", upload_rec_date_year_split[0]);
//   form_data.append("upload_content", JSON.stringify(form));

//   for (var pair of form_data.entries()) {
//     console.log(pair[0] + ", " + pair[1]);
//   }

//   $.ajax({
//     url: "database/update_upload_resume_off_data_detail.php",
//     type: "POST",
//     data: form_data,
//     contentType: false,
//     cache: false,
//     processData: false,
//     async: true,
//     success: function (data) {
//       console.log(data);
//       if (data == 1) {
//         swal({
//           type: "success",
//           title: "新增成功!",
//           allowOutsideClick: false, //不可點背景關閉
//         }).then(function () {
//           window.location.href =
//             "resume_off_detail.php?name=" +
//             upload_rec_date_year_split[0] +
//             "&id=" +
//             id +
//             "&res_id=" +
//             sr_id +
//             "";
//         });
//       } else {
//         swal({
//           type: "error",
//           title: "新增失敗！請聯絡網站維護人員",
//           allowOutsideClick: false, //不可點背景關閉
//         });
//       }
//     },
//     error: function (e) {
//       alert("系統錯誤!");
//       console.log(e);
//     },
//   });
// }
// //endregion
