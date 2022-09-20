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

program_id = getUrlVars()["program_id"];
// re_year = getUrlVars()["year"];

//抓發文表region
$(document).ready(function () {
  $.ajax({
    url: "database/find_program_plan_data_detail.php",
    data: {
      program_id: program_id,
    },
    type: "POST",
    dataType: "JSON",
    async: false,
    success: function (data) {
      // console.log(data);

      $.each(data, function (index, value) {
        $("#year").val(value.Year);
        $("#date").val(check_sql_date_format(value.Date));
        $("#plan_name").val(value.Plan_name);

        $("#create_date").val(check_sql_date_format(value.Create_date));
        $("#create_name").val(value.Create_name);
        $("#update_date").val(check_sql_date_format(value.Update_date));
        $("#update_name").val(value.Update_name);
      });
    },
    error: function (e) {
      console.log(e);
    },
  });

  $(".program_question").attr("disabled", true);

  // //手動新增按鈕點擊跳出模態框
  // $("#myModal").on("shown.bs.modal", function () {
  //   $("#add_time_all_btn").trigger("focus");
  // });

  // $.ajax({
  //   url: "database/find_volunteer_hours_record.php",
  //   data: {
  //     vo_id: vo_id,
  //     Year: $("#year").val(),
  //     Name: $("#name").val(),
  //   },
  //   type: "POST",
  //   dataType: "JSON",
  //   async: false,
  //   success: function (data) {
  //     var cssString = "";
  //     // console.log(data);

  //     $.each(data, function (index, value) {
  //       cssString +=
  //         '<tr id="' +
  //         value.Id +
  //         '">' +
  //         '<td style="text-align:center">' +
  //         value.Add_hours +
  //         "</td>" +
  //         '<td style="text-align:center">' +
  //         value.Remark +
  //         "</td>" +
  //         '<td style="text-align:center">' +
  //         value.Create_name +
  //         "</td>" +
  //         '<td style="text-align:center">' +
  //         value.Create_date +
  //         "</td>" +
  //         "</tr>";

  //       //印出表格
  //       $("#call_record_view").html(cssString);
  //     });
  //   },
  //   error: function (e) {
  //     console.log(e);
  //   },
  // });
});

//更新發文個案表基本資料region
$("#program_update").on("click", function () {
  var program_id = getUrlVars()["program_id"];

  var stau = false;

  if (check_updat_program_act_data() != "") {
    stau = false;
  } else {
    stau = true;
  }
  console.log(stau);

  if (!stau) {
    swal({
      title: check_updat_program_act_data(),
      type: "error",
    });
  } else {
    $.ajax({
      url: "database/update_program_plan_data_detail.php",
      data: {
        program_id: program_id,
        Year: $("#year").val(),
        Date: $("#date").val(),
        Plan_name: $("#plan_name").val(),
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
function check_updat_program_act_data() {
  var year = $("#year").val();
  var date = $("#date").val();
  var plan_name = $("#plan_name").val();

  var errorstr = "";

  if (errorstr == "") {
    if (year == null || year.replace(/\s*/g, "") == "") {
      errorstr += "未填寫年度!\r\n";
    }
    if (date == null || date.replace(/\s*/g, "") == "") {
      errorstr += "未填寫日期!\r\n";
    }
    if (plan_name == null || plan_name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫計畫名稱!\r\n";
    }
  }

  return errorstr;
}
//endregion

// add_hours = function () {
//   var add_hours = $("#add_hours").val();

//   if (add_hours == null || add_hours.replace(/\s*/g, "") == "") {
//     swal({
//       title: "未輸入新增的時數!\r\n",
//       type: "error",
//     });
//   } else {
//     $.ajax({
//       url: "database/add_volunteer_hours_record.php",
//       data: {
//         vo_id: vo_id,
//         Year: $("#year").val(),
//         Name: $("#name").val(),
//         Add_hours: $("#add_hours").val(),
//         Remark: $("#add_hours_remark").val(),
//       },
//       type: "POST",
//       dataType: "JSON",
//       success: function (data) {
//         if (data == 1) {
//           swal({
//             title: "新增成功！",
//             type: "success",
//           }).then(function () {
//             location.reload();
//           });
//         } else {
//           swal({
//             title: "新增失敗！請聯絡負責單位",
//             type: "error",
//           });
//         }
//       },
//       error: function (e) {
//         swal({
//           title: "新增失敗！請聯絡負責單位",
//           type: "error",
//         });
//         console.log(e);
//       },
//     });
//   }
// };

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
function program_edit() {
  $(".program_question").attr("disabled", false);
  $("#edit_div").attr("hidden", true);
  $("#save_div").attr("hidden", false);
}
function program_cancel() {
  $(".program_question").attr("disabled", true);
  $("#edit_div").attr("hidden", false);
  $("#save_div").attr("hidden", true);
}
//endregion

//進入預覽WORD頁面region
$("#preview_word").on("click", function () {
  var program_id = getUrlVars()["program_id"];
  //    console.log(id);
  location.href = "preview_word.php?program_id=" + program_id + "";
});

$("#preview_word2").on("click", function () {
  var program_id = getUrlVars()["program_id"];
  //    console.log(id);
  location.href = "preview_word2.php?program_id=" + program_id + "";
});
//endregion
