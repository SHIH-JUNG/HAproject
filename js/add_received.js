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
$("#re_add_new").on("click", function () {
  var stau = false;

  var received_date_year_split = $("#received_date").val().split(".");

  if (check_add_received_data() != "") {
    stau = false;
  } else {
    stau = true;
  }
  console.log(stau);

  if (!stau) {
    swal({
      title: check_add_received_data(),
      type: "error",
    });
  } else {
    $.ajax({
      url: "database/add_new_received.php",
      type: "POST",
      data: {
        // Id: $("#id").val(),
        Year: received_date_year_split[0],
        Title_name: $("#title_name").val(),
        Received_date: trans_to_EN($("#received_date").val()),
        Subject: $("#subject").val(),
        Unit: $("#unit").val(),
        Num_receive: $("#num_receive").val(),
        // Create_date: trans_to_EN($("#create_date").val()),
        // Create_name: $("#create_name").val(),
        // Update_date: trans_to_EN($("#update_date").val()),
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
            window.location.replace("received_yearlist.php");
          });
        } else {
          swal({
            type: "error",
            title: "新增失敗!請聯絡負責人",
            allowOutsideClick: false, //不可點背景關閉
          }).then(function () {
            window.location.replace("received_yearlist.php");
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
function check_add_received_data() {
  var title_name = $("#title_name").val();
  var received_date = $("#received_date").val();
  var unit = $("#unit").val();
  var num_receive = $("#num_receive").val();
  var subject = $("#subject").val();

  var errorstr = "";

  if (title_name == null) {
    errorstr += "未填寫來文記錄標題!\r\n";
  }
  if (received_date == null) {
    errorstr += "未填寫來文日期!\r\n";
  }
  if (unit == null) {
    errorstr += "未填寫受文單位!\r\n";
  }
  if (num_receive == null) {
    errorstr += "未填寫來文字號!\r\n";
  }
  if (subject == null) {
    errorstr += "未填寫主旨!\r\n";
  }

  if (errorstr == "") {
    if (title_name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫來文記錄標題!\r\n";
    }
    if (received_date.replace(/\s*/g, "") == "") {
      errorstr += "未填寫來文日期!\r\n";
    }
    if (unit.replace(/\s*/g, "") == "") {
      errorstr += "未填寫受文單位!\r\n";
    }
    if (num_receive.replace(/\s*/g, "") == "") {
      errorstr += "未填寫來文字號!\r\n";
    }
    if (subject.replace(/\s*/g, "") == "") {
      errorstr += "未填寫主旨!\r\n";
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
