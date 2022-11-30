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

//檢查SQL撈出來的日期格式region
check_sql_date_format = function (date) {
  if (date == "0000-00-00") {
    date = "";
  } else {
    date = trans_to_Tw(date);
  }

  return date;
};
test1 = function () {
  console.log("test1");
  var overtime_date_year_split = $("#overtime_date").val().split(".");
  console.log(overtime_date_year_split[0]);
  // var upload_rec_date_year_split = $("#upload_rec_date").val().split("年");
  // console.log(upload_rec_date_year_split[0]);
};

//新增來文紀錄region
$("#day_off_add_new").on("click", function () {
  var stau = false;

  var day_off_name = $("#name").val();

  if (check_add_day_off_data() != "") {
    stau = false;
  } else {
    stau = true;
  }
  console.log(stau);

  if (!stau) {
    swal({
      title: check_add_day_off_data(),
      type: "error",
    });
  } else {
    $.ajax({
      url: "database/add_new_day_off.php",
      type: "POST",
      data: {
        // Id: $("#id").val(),
        Name: $("#name").val(),
        Overtime_date: trans_to_EN($("#overtime_date").val()),
        Reason: $("#reason").val(),
        Hours: $("#hours").val(),
        Makeup_date: trans_to_EN($("#makeup_date").val()),
        Makeup_hours: $("#makeup_hours").val(),
        // Create_date: $("#create_date").val(),
        // Create_name: $("#create_name").val(),
        // Update_date: $("#update_date").val(),
        // Update_name: $("#update_name").val(),
      },
      //            dataType: "JSON",
      success: function (data) {
        console.log(data);
        if (data == 1) {
          swal({
            type: "success",
            title: "新增成功!",
            allowOutsideClick: false, //不可點背景關閉
          }).then(function () {
            window.location.replace("day_off.php");
          });
        } else {
          swal({
            type: "error",
            title: "新增失敗!請聯絡負責人",
            allowOutsideClick: false, //不可點背景關閉
          }).then(function () {
            window.location.replace("day_off.php");
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
function check_add_day_off_data() {
  var name = $("#name").val();
  var overtime_date = $("#overtime_date").val();
  var reason = $("#reason").val();
  var hours = $("#hours").val();
  var makeup_date = $("#makeup_date").val();
  var makeup_hours = $("#makeup_hours").val();

  var errorstr = "";

  if (name == null) {
    errorstr += "未填寫姓名!\r\n";
  }
  if (overtime_date == null) {
    errorstr += "未填寫請假日期!\r\n";
  }
  if (reason == null) {
    errorstr += "未填寫請假事由!\r\n";
  }
  if (hours == null) {
    errorstr += "未填寫請假時數!\r\n";
  }
  if (makeup_date == null) {
    errorstr += "未填寫補修日期!\r\n";
  }
  if (makeup_hours == null) {
    errorstr += "未填寫補修時數!\r\n";
  }

  if (errorstr == "") {
    if (overtime_date.replace(/\s*/g, "") == "") {
      errorstr += "未填寫請假日期!\r\n";
    }
    if (reason.replace(/\s*/g, "") == "") {
      errorstr += "未填寫請假事由!\r\n";
    }
    if (hours.replace(/\s*/g, "") == "") {
      errorstr += "未填寫請假時數!\r\n";
    }
    if (makeup_date.replace(/\s*/g, "") == "") {
      errorstr += "未填寫補修日期!\r\n";
    }
    if (makeup_hours.replace(/\s*/g, "") == "") {
      errorstr += "未填寫補修時數!\r\n";
    }
  }

  return errorstr;
}
//endregion

// // 呼叫user方法region
// $.ajax({
//   type: "POST",
//   url: "database/find_check_user.php",
//   dataType: "JSON",
//   async: false, //啟用同步請求
//   success: function (data) {
//     for (var index in data.Id) {
//       $(".user").append(
//         '<option value="' +
//           data.Name[index] +
//           '">' +
//           data.Name[index] +
//           "</option>"
//       );
//     }
//   },
//   error: function (e) {
//     console.log(e);
//   },
// });

//endregion
