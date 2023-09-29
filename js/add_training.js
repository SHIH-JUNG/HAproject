//datepicker創建 region
datepicker_create = function (selector_id) {
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
};
//endregion

$(document).ready(function () {
  //將input name名稱為ch_datepicker創建datepicker初始化 region
  $("input[name='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion

    load_face_time_picker('tr_start_time_h');
    load_face_time_picker('tr_end_time_h');

    $("#hours").val(0);
});

function submit_form() {
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
  if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
  }
  });

  var form_data = new FormData();
  // var training_date_year_split = $("#training_date").val().split(".");
  // var year = training_date_year_split[0];

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

  // form_data.append("Name", $("#name").val());
  form_data.append("Training_date", $("#training_date").val());
  form_data.append("Training_start_time", $('#tr_start_time_h').val() + ":" + $('#tr_start_time_m').val() + ":00");
  form_data.append("Training_end_time", $('#tr_end_time_h').val() + ":" + $('#tr_end_time_m').val() + ":00");
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
              "training.php";
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

//計算訓練時數 region
hours_diff = function(start, end) 
{

  var diff_str = "";
  var diff_num = 0;

  start = start.split(":");
  end = end.split(":");
  
  var startDate = new Date(0, 0, 0, start[0], start[1], 0);
  var endDate = new Date(0, 0, 0, end[0], end[1], 0);
  var diff = endDate.getTime() - startDate.getTime();
  if(endDate.getTime() > startDate.getTime())
  {
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);
  
    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0)
    {
      hours = hours + 24;
    }

    diff_str = (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;

    diff_num = parseInt(diff_str.split(":")[0]) + parseFloat((parseInt(diff_str.split(":")[1]) / 60).toFixed(1));
  }

  

  return diff_num;
}
// endregion

//監聽 當日期欄位有變化時，重新計算時數 region
$("[picker='tr_datetime']").on('change',function(){
    var start_time = $('#tr_start_time_h').val() + ":" + $('#tr_start_time_m').val() + ":00";
    var end_time = $('#tr_end_time_h').val() + ":" + $('#tr_end_time_m').val() + ":00";
    var time_diff = hours_diff(start_time, end_time);

    $("#hours").val(time_diff);
  });
// endregion

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

      if (check_add_training_data() != "") {
        stau = false;
      } else {
        stau = true;
      }

      if (!stau) {
        swal({
          title: check_add_training_data(),
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
  // var name = $("#name").val();
  var training_date = $("#training_date").val();
  var training_name = $("#training_name").val();
  var hours = $("#hours").val();
  var place = $("#place").val();

  var errorstr = "";

  // if (name == null) {
  //   errorstr += "未填寫員工姓名	!\r\n";
  // }
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
    // if (name.replace(/\s*/g, "") == "") {
    //   errorstr += "未填寫員工姓名!\r\n";
    // }
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

// 載入時間選項 region
load_face_time_picker = function(element_id) {
  for (let index = 8; index <= 18; index++) {
      $("#" + element_id).append('<option value="'+LeadingZero(index, 2)+'">'+LeadingZero(index, 2)+'</option>');
  }
}
//endregion

// 字串補零 region
function LeadingZero( code, dataLength){
  var str = Array(10).join('0') + code;
  return str.slice(0 - dataLength)
}
//endregion