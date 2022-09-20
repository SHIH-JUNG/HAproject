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
      minDate: new Date(new Date().getFullYear() - 10, 0, 1),
      maxDate: new Date(new Date().getFullYear() + 10, 11, 31),
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

overtime_id = getUrlVars()["overtime_id"];
// re_year = getUrlVars()["year"];

//抓發文表region
$(document).ready(function () {
  $.ajax({
    url: "database/find_overtime_data_detail.php",
    data: {
      overtime_id: overtime_id,
      // year: re_year,
    },
    type: "POST",
    dataType: "JSON",
    async: false,
    success: function (data) {
      // console.log(data);

      $.each(data, function (index, value) {
        // $("#overtime_id").html(value.overtime_id);

        $("#year").val(value.Year);
        $("#name").val(value.Name);

        $("#overtime_date").val(value.Overtime_date);
        $("#free_date").val(value.Free_date);
        $("#overtime_time").val(value.Overtime_time);
        $("#free_time").val(value.Free_time);

        $("#create_date").val(
          value.Create_date != "0000-00-00 00:00:00" ? value.Create_date : ""
        );
        $("#create_name").val(value.Create_name);
        $("#update_date").val(
          value.Update_date != "0000-00-00 00:00:00" ? value.Update_date : ""
        );
        $("#update_name").val(value.Update_name);
      });
    },
    error: function (e) {
      console.log(e);
    },
  });

  $(".overtime_question").attr("disabled", true);

  //手動新增按鈕點擊跳出模態框
  $("#myModal").on("shown.bs.modal", function () {
    $("#add_time_all_btn").trigger("focus");
  });

  $.ajax({
    url: "database/find_overtime_hours_record.php",
    data: {
      overtime_id: overtime_id,
      Year: $("#year").val(),
      Name: $("#name").val(),
    },
    type: "POST",
    dataType: "JSON",
    async: false,
    success: function (data) {
      var cssString = "";
      // console.log(data);

      $.each(data, function (index, value) {
        cssString +=
          '<tr id="' +
          value.Id +
          '">' +
          '<td style="text-align:center">' +
          value.Add_hours +
          "</td>" +
          '<td style="text-align:center">' +
          value.Remark +
          "</td>" +
          '<td style="text-align:center">' +
          value.Create_name +
          "</td>" +
          '<td style="text-align:center">' +
          value.Create_date +
          "</td>" +
          "</tr>";

        //印出表格
        $("#call_record_view").html(cssString);
      });
    },
    error: function (e) {
      console.log(e);
    },
  });
});

//更新發文個案表基本資料region
$("#overtime_update").on("click", function () {
  var overtime_id = getUrlVars()["overtime_id"];

  var stau = false;

  if (check_updat_overtime_data() != "") {
    stau = false;
  } else {
    stau = true;
  }
  console.log(stau);

  if (!stau) {
    swal({
      title: check_updat_overtime_data(),
      type: "error",
    });
  } else {
    $.ajax({
      url: "database/update_overtime_data_detail.php",
      data: {
        overtime_id: overtime_id,
        Year: $("#year").val(),
        Name: $("#name").val(),
        Overtime_date: $("#overtime_date").val(),
        Free_date: $("#free_date").val(),
        Overtime_time: $("#overtime_time").val(),
        Free_time: $("#free_time").val(),
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
            title: "修改失敗！請聯絡負責單位",
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
function check_updat_overtime_data() {
  var year = $("#year").val();
  var name = $("#name").val();
  var overtime_date = $("#overtime_date").val();
  var free_date = $("#free_date").val();
  var overtime_time = $("#overtime_time").val();
  var free_time = $("#free_time").val();

  var errorstr = "";

  if (errorstr == "") {
    if (year == null || year.replace(/\s*/g, "") == "") {
      errorstr += "未填寫年度!\r\n";
    }
    if (name == null || name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫姓名!\r\n";
    }
    if (overtime_date == null || overtime_date.replace(/\s*/g, "") == "") {
      errorstr += "未填寫加班日期!\r\n";
    }
    if (free_date == null || free_date.replace(/\s*/g, "") == "") {
      errorstr += "未填寫補修日期!\r\n";
    }
    if (overtime_time == null || overtime_time.replace(/\s*/g, "") == "") {
      errorstr += "未填寫加班時數!\r\n";
    }
    if (free_time == null || free_time.replace(/\s*/g, "") == "") {
      errorstr += "未填寫補修時數!\r\n";
    }
  }

  return errorstr;
}
//endregion

add_hours = function () {
  var add_hours = $("#add_hours").val();

  if (add_hours == null || add_hours.replace(/\s*/g, "") == "") {
    swal({
      title: "未輸入新增的時數!\r\n",
      type: "error",
    });
  } else {
    $.ajax({
      url: "database/add_overtime_hours_record.php",
      data: {
        overtime_id: overtime_id,
        Year: $("#year").val(),
        Name: $("#name").val(),
        Add_hours: $("#add_hours").val(),
        Remark: $("#add_hours_remark").val(),
      },
      type: "POST",
      dataType: "JSON",
      success: function (data) {
        if (data == 1) {
          swal({
            title: "新增成功！",
            type: "success",
          }).then(function () {
            location.reload();
          });
        } else {
          swal({
            title: "新增失敗！請聯絡負責單位",
            type: "error",
          });
        }
      },
      error: function (e) {
        swal({
          title: "新增失敗！請聯絡負責單位",
          type: "error",
        });
        console.log(e);
      },
    });
  }
};

//取消重整region
function cancel() {
  location.reload();
}
//endregion

//結案個案總表格鎖定控制region
function overtime_edit() {
  $(".overtime_question").attr("disabled", false);
  $("#edit_div").attr("hidden", true);
  $("#save_div").attr("hidden", false);
}
function overtime_cancel() {
  $(".overtime_question").attr("disabled", true);
  $("#edit_div").attr("hidden", false);
  $("#save_div").attr("hidden", true);
}
//endregion

//進入預覽WORD頁面region
$("#preview_word").on("click", function () {
  var overtime_id = getUrlVars()["overtime_id"];
  //    console.log(id);
  location.href = "preview_word.php?overtime_id=" + overtime_id + "";
});

$("#preview_word2").on("click", function () {
  var overtime_id = getUrlVars()["overtime_id"];
  //    console.log(id);
  location.href = "preview_word2.php?overtime_id=" + overtime_id + "";
});
//endregion
