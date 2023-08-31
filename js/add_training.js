//datepicker創建 region
datepicker_create = function (selector_id) {
  if (selector_id == "birth") {
    $("#" + selector_id).datepicker({
      changeYear: true,
      changeMonth: true,
      currentText: "今天",
      dateFormat: "R年mm月dd日",
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
      dateFormat: "R年mm月dd日",
      showButtonPanel: true,
      // minDate: new Date(new Date().getFullYear(), new Date().getMonth() - 3, 1),
      // maxDate: new Date(new Date().getFullYear() + 3, 11, 31),
      yearRange: "-6:+5",
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

function submit_form() {
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
  if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
  }
  });

  var form_data = new FormData();
  var training_date_year_split = $("#training_date").val().split(".");
  var year = training_date_year_split[0];

  $("input[type='file']").each(function(index, element) {
      var training_file = $(this).prop("files");

      if (training_file != undefined) {
        if (training_file.length != 0) {
          for (var i = 0; i < training_file.length; i++) {
            form_data.append("training_file"+index, training_file[i]);
            // console.log(training_file[i])
          }
        } 
      }
  });

  form_data.append("Name", $("#name").val());
  form_data.append("Training_date", $("#training_date").val());
  form_data.append("Training_name", $("#training_name").val());
  form_data.append("Hours",$("#hours").val());
  form_data.append("Place",$("#place").val());
  form_data.append("Remark",$("#remark").val());

  $.ajax({
      url: "database/add_new_training.php",
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
              "training.php?year=" + year;
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
      url: "database/training_file_check.php",
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
              "../training/",
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

//檢查必填欄位 region
function check_null_data() {
  var errorstr = "以下為必填欄位，不能為空值!\r\n";

  $(".fillin_need").each(function(index,element){

    var check_element = $(this).parent("td").siblings("td").children()[0];
    var check_element_name = $(this).parent("td").text();

    console.log($(check_element))
    console.log($(check_element).val())

    var check_element_tagname = $(check_element).prop("tagName");
    var check_element_type = $(check_element).attr("type");

    if(check_element_tagname == "INPUT" && check_element_type=="file")
    {
      var file_len = $(check_element).prop("files").length;

      if(file_len == 0)
      {
        errorstr += check_element_name.replace("※", "") + "\r\n";
      }
    }
    else if(check_element_tagname == "INPUT" && check_element_type=="radio")
    {
      var check_element_children_name = $(this).parent("td").siblings("td").children().attr("name");

      if($('[name="'+check_element_children_name+'"]:checked').length==0)
      {
        errorstr += check_element_name.replace("※", "") + "\r\n";
      }
    }
    else
    {
      if($(check_element).val() == null || $(check_element).val().replace(/\s*/g, "") == "")
      {
        errorstr += check_element_name.replace("※", "") + "\r\n";
      }
    }    
  });

  return errorstr;
}
//endregion

// //新增在職訓練紀錄region
$("#tra_add_new").on("click", function () {
   
  //判斷該量表是否含有 input[type="file"] 類型資料
  if ($('input[type="file"]').length != 0) {
    var exist_arr = check_file_exist();

    // console.log(exist_arr);
    //如果上傳的檔案檔名重複則提示使用者
    if (exist_arr.length != 0) {
      // console.log(exist_arr[0][1]);
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
              submit_form();
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

      if (check_null_data() != "以下為必填欄位，不能為空值!\r\n") {
        stau = false;
      } else {
        stau = true;
      }

      if (!stau) {
        swal({
          title: check_null_data(),
          type: "error",
        });
      } else {
        submit_form();
      }
    }
  } else {
    return false;
  }
});
//endregion

//檢查在職訓練紀錄的必填欄位region
function check_add_training_data() {
  var name = $("#name").val();
  var training_date = $("#training_date").val();
  var training_name = $("#training_name").val();
  var hours = $("#hours").val();
  var place = $("#place").val();

  var errorstr = "";

  if (name == null) {
    errorstr += "未填寫員工姓名	!\r\n";
  }
  if (training_date == null) {
    errorstr += "未填寫在職訓練日期!\r\n";
  }
  if (training_name == null) {
    errorstr += "未填寫在職訓練標題!\r\n";
  }
  if (hours == null) {
    errorstr += "未填寫時數!\r\n";
  }
  if (place == null) {
    errorstr += "未填寫在職訓練地點!\r\n";
  }

  if (errorstr == "") {
    if (name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫員工姓名!\r\n";
    }
    if (training_date.replace(/\s*/g, "") == "") {
      errorstr += "未填寫在職訓練日期!\r\n";
    }
    if (training_name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫在職訓練標題!\r\n";
    }
    if (training_name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫時數!\r\n";
    }
    if (place.replace(/\s*/g, "") == "") {
      errorstr += "未填寫在職訓練地點!\r\n";
    }
  }

  return errorstr;
}
//endregion

// 呼叫user方法region
$.ajax({
  type: "POST",
  url: "database/find_check_user.php",
  dataType: "JSON",
  async: false, //啟用同步請求
  success: function (data) {
    for (var index in data.Id) {
      $(".user").append(
        '<option value="' +
          data.Name[index] +
          '">' +
          data.Name[index] +
          "</option>"
      );
    }
  },
  error: function (e) {
    console.log(e);
  },
});

//endregion
