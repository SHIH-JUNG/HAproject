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

vo_id = getUrlVars()["vo_id"];
// re_year = getUrlVars()["year"];

//抓發文表region
$(document).ready(function () {
  $.ajax({
    url: "database/find_volunteer_data_detail.php",
    data: {
      vo_id: vo_id,
      // year: re_year,
    },
    type: "POST",
    dataType: "JSON",
    async: false,
    success: function (data) {
      // console.log(data);

      $.each(data, function (index, value) {
        // $("#vo_id").html(value.vo_id);

        $("#year").val(value.Year);
        $("#name").val(value.Name);

        $("#serv_type").val(value.Serv_type);
        $("#serv_time").val(value.Serv_time);
        $("#time_all").val(value.Time_all);
        $("#rece_hours").val(value.Rece_hours);

        $("#serv_award").val(value.Serv_award);
        $("#honor_card").val(value.Honor_card);

        $("#create_date").val(value.Create_date != "0000-00-00 00:00:00" ? value.Create_date : "");
        $("#create_name").val(value.Create_name);
        $("#update_date").val(value.Update_date != "0000-00-00 00:00:00" ? value.Update_date : "");
        $("#update_name").val(value.Update_name);
      });
    },
    error: function (e) {
      console.log(e);
      notyf.alert('伺服器錯誤,無法載入');
    },
  });

  $(".vo_question").attr("disabled", true);

  //手動新增按鈕點擊跳出模態框
  $('#myModal').on('shown.bs.modal', function () {
    $('#add_time_all_btn').trigger('focus');
  });

  $.ajax({
    url: "database/find_volunteer_hours_record.php",
    data: {
      vo_id: vo_id,
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
      notyf.alert('伺服器錯誤,無法載入');
    },
  });

});

//更新發文個案表基本資料region
$("#vo_update").on("click", function () {
  var vo_id = getUrlVars()["vo_id"];

  var stau = false;

  if (check_updat_volunteer_data() != "") {
    stau = false;
  } else {
    stau = true;
  }
  console.log(stau);

  if (!stau) {
    swal({
      title: check_updat_volunteer_data(),
      type: "error",
    });
  } else {
    $.ajax({
      url: "database/update_volunteer_data_detail.php",
      data: {
        vo_id: vo_id,
        Year: $("#year").val(),
        Name: $("#name").val(),
        Serv_type: $("#serv_type").val(),
        Serv_time: $("#serv_time").val(),
        Time_all: $("#time_all").val(),
        Rece_hours: $("#rece_hours").val(),
        Serv_award: $("#serv_award").val(),
        Honor_card: $("#honor_card").val(),
      },
      type: "POST",
      dataType: "JSON",
      success: function (data) {
        if (data == 1) {
          swal({
            title: "更新成功！",
            type: "success",
          }).then(function () {
            location.reload();
          });
        } else {
          swal({
            title: "更新失敗！請聯絡負責單位",
            type: "error",
          });
        }
      },
      error: function (e) {
        console.log(e);
        swal({
          title: "更新失敗！請聯絡負責單位",
          type: "error",
        });
      },
    });
  }
});

//結案個案表(update)的必填欄位 region
function check_updat_volunteer_data() {

  var year = $("#year").val();
  var name = $("#name").val();
  var serv_type = $("#serv_type").val();
  var serv_time = $("#serv_time").val();
  var rece_hours = $("#rece_hours").val();
  var serv_award = $("#serv_award").val();
  var honor_card = $("#honor_card").val();
  var time_all = $("#time_all").val();

  var errorstr = "";

  if (errorstr == "") {
      if (year == null || year.replace(/\s*/g, "") == '') {
        errorstr += "未填寫年度!\r\n";
      }
      if (name == null || name.replace(/\s*/g, "") == '') {
        errorstr += "未填寫姓名!\r\n";
      }
      if (serv_type == null || serv_type.replace(/\s*/g, "") == '') {
        errorstr += "未選擇服務項目!\r\n";
      }
      if (serv_time == null || serv_time.replace(/\s*/g, "") == '') {
        errorstr += "未選擇服務時間!\r\n";
      }
      if (rece_hours == null || rece_hours.replace(/\s*/g, "") == '') {
        errorstr += "未選擇是否領取時數條!\r\n";
      }
      if (serv_award == null || serv_award.replace(/\s*/g, "") == '') {
        errorstr += "未選擇是否領取服務獎狀!\r\n";
      }
      if (honor_card == null || honor_card.replace(/\s*/g, "") == '') {
        errorstr += "未選擇是否持有志工榮譽卡!\r\n";
      }
      if (time_all == null || time_all.replace(/\s*/g, "") == '') {
        errorstr += "未填寫目前服務時數!\r\n";
      }
  }

  return errorstr;
}
//endregion

add_hours = function() {

  var add_hours = $("#add_hours").val();

  if (add_hours == null || add_hours.replace(/\s*/g, "") == '') {
    swal({
      title: "未輸入新增的時數!\r\n",
      type: "error",
    });
  }
  else
  {
    $.ajax({
      url: "database/add_volunteer_hours_record.php",
      data: {
        vo_id: vo_id,
        Year: $("#year").val(),
        Name: $("#name").val(),
        Add_hours:$("#add_hours").val(),
        Remark:$("#add_hours_remark").val(),
      },
      type: "POST",
      dataType: "JSON",
      success: function (data) {
        if (data == 1) {
          swal({
            title: "新增時數成功！",
            type: "success",
          }).then(function () {
            location.reload();
          });
        } else {
          swal({
            title: "新增時數失敗！請聯絡負責單位",
            type: "error",
          });
        }
      },
      error: function (e) {
        swal({
          title: "新增時數失敗！請聯絡負責單位",
          type: "error",
        });
        console.log(e);
      },
    });
  }


}


// //呼叫user方法region
// function append_user() {
//   $.ajax({
//     type: "POST",
//     url: "database/find_check_user.php",
//     dataType: "JSON",
//     async: false, //啟用同步請求
//     success: function (data) {
//       // console.log('test',data)
//       for (var index in data.Id) {
//         $("#user").append(
//           '<option value="' +
//             data.Name[index] +
//             '">' +
//             data.Name[index] +
//             "</option>"
//         );
//       }
//     },
//   });
// }
// //endregion

//取消重整region
function cancel() {
  location.reload();
}
//endregion

//結案個案總表格鎖定控制region
function vo_edit() {
  $(".vo_question").attr("disabled", false);
  $("#edit_div").attr("hidden", true);
  $("#save_div").attr("hidden", false);
}
function vo_cancel() {
  $(".vo_question").attr("disabled", true);
  $("#edit_div").attr("hidden", false);
  $("#save_div").attr("hidden", true);
}
//endregion

//進入預覽WORD頁面region
$("#preview_word").on("click", function () {
  var vo_id = getUrlVars()["vo_id"];
  //    console.log(id);
  location.href = "preview_word.php?vo_id=" + vo_id + "";
});

$("#preview_word2").on("click", function () {
  var vo_id = getUrlVars()["vo_id"];
  //    console.log(id);
  location.href = "preview_word2.php?vo_id=" + vo_id + "";
});
//endregion
