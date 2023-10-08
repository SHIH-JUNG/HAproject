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
        // console.log($("#" + selector_id).val());
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
  var strAry = endate.split("-");

  if (parseInt(strAry[0]) > 1911) {
    strAry[0] = parseInt(strAry[0]) - 1911;
  }

  return strAry.join("-");
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

//新增方案行動region
// $("#program_act_add_new").on("click", function () {
//   var stau = false;

//   // var program_act_date_year_split = $("#create_date").val().split("年");
//   var create_date = trans_to_Tw(new Date().toISOString().slice(0, 10));
//   var sign_date =
//     create_date.split("-")[0] +
//     "年" +
//     create_date.split("-")[1] +
//     "月" +
//     create_date.split("-")[2] +
//     "日";

//   if (check_add_program_act_data() != "") {
//     stau = false;
//   } else {
//     stau = true;
//   }
//   console.log(stau);

//   if (!stau) {
//     swal({
//       title: check_add_program_act_data(),
//       type: "error",
//     });
//   } else {
//     $.ajax({
//       url: "database/add_new_program_act.php",
//       type: "POST",
//       data: {
//         // Year: program_act_date_year_split[0],
//         // Year: create_date.split("-")[0],
//         Date: $("#date").val(),
//         Activity_name: $("#activity_name").val(),
//         Activity_category: $("#activity_category").val(),
//         Person: $("#person").val(),
//         Location: $("#location").val(),
//         Service: $("#service").val(),
//         Cost: $("#cost").val(),
//         Number: $("#number").val(),
//         Lecturer: $("#lecturer").val(),
//       },
//       //            dataType: "JSON",
//       success: function (data) {
//         console.log(data);
//         if (data == 1) {
//           swal({
//             type: "success",
//             title: "新增成功!",
//             allowOutsideClick: false, //不可點背景關閉
//           }).then(function () {
//             // window.location.replace("program_act_yearlist.php");
//             window.location.replace("program_act.php");
//           });
//         } else {
//           swal({
//             type: "error",
//             title: "新增失敗！請聯絡網站維護人員",
//             allowOutsideClick: false, //不可點背景關閉
//           }).then(function () {
//             // window.location.replace("program_act_yearlist.php");
//             window.location.replace("program_act.php");
//           });
//         }
//       },
//       error: function (e) {
//         alert("系統錯誤!");
//         console.log(e);
//       },
//     });
//   }
// });
//endregion

function submit_form() {
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
  if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
  }
  });

  var form_data = new FormData();
  // var program_act_date_year_split = $("#program_act_date").val().split(".");
  // var year = program_act_date_year_split[0];

  $("input[type='file']").each(function(index, element) {
      var program_act_file = $(this).prop("files");

      if (program_act_file != undefined) {
        if (program_act_file.length != 0) {
          for (var i = 0; i < program_act_file.length; i++) {
            form_data.append("program_act_file"+index, program_act_file[i]);
            // console.log(program_act_file[i])
          }
        } 
      }
  });

  form_data.append("Date", $("#date").val());
  form_data.append("Activity_name", $("#activity_name").val());
  form_data.append("Activity_category", $("#activity_category").val());
  form_data.append("Person",$("#person").val());
  form_data.append("Location",$("#location").val());
  form_data.append("Service",$("#service").val());
  form_data.append("Cost",$("#cost").val());
  form_data.append("Number",$("#number").val());
  form_data.append("Lecturer",$("#lecturer").val());

  // 預覽傳到後端的資料詳細內容
  // for (var pair of form_data.entries()) {
  //   console.log(pair[0] + ", " + pair[1]);
  // }


  $.ajax({
      url: "database/add_new_program_act.php",
      type: "POST",
      data: form_data,
      contentType: false,
      cache: false,
      processData: false,
      async: true,
      success: function (data) {
        // console.log(data);
        if (data == 1) {
          swal({
            type: "success",
            title: "新增成功!",
            allowOutsideClick: false, //不可點背景關閉
          }).then(function () {
            window.location.href =
              "program_act.php?";
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
          // console.log(e);
          swal({
              type: "error",
              title: "新增失敗！請聯絡網站維護人員",
              allowOutsideClick: false, //不可點背景關閉
          });
      },
    });
}

//檢查必填欄位region
function check_add_program_act_data() {
  //   var year = $("#year").val();
  var date = $("#date").val();
  var activity_name = $("#activity_name").val();
  var activity_category = $("#activity_category").val();
  var person = $("#person").val();
  var location = $("#location").val();
  var service = $("#service").val();
  var cost = $("#cost").val();
  var number = $("#number").val();
  var lecturer = $("#lecturer").val();

  var errorstr = "";

  //   if (year == null) {
  //     errorstr += "未填寫年度!\r\n";
  //   }
  if (date == null) {
    errorstr += "未填寫日期!\r\n";
  }
  if (activity_name == null) {
    errorstr += "未填寫活動名稱!\r\n";
  }
  if (activity_category == null) {
    errorstr += "未填寫活動類別!\r\n";
  }
  if (person == null) {
    errorstr += "未填寫對象!\r\n";
  }
  if (location == null) {
    errorstr += "未填寫地點!\r\n";
  }
  if (service == null) {
    errorstr += "未填寫服務內容!\r\n";
  }
  if (cost == null) {
    errorstr += "未填寫執行費用!\r\n";
  }
  if (number == null) {
    errorstr += "未填寫人數!\r\n";
  }
  if (lecturer == null) {
    errorstr += "未填寫講師!\r\n";
  }

  if (errorstr == "") {
    // if (year.replace(/\s*/g, "") == "") {
    //   errorstr += "未填寫年度!\r\n";
    // }
    if (date.replace(/\s*/g, "") == "") {
      errorstr += "未填寫日期!\r\n";
    }
    if (activity_name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫活動名稱!\r\n";
    }
    if (activity_category.replace(/\s*/g, "") == "") {
      errorstr += "未填寫活動類別!\r\n";
    }
    if (person.replace(/\s*/g, "") == "") {
      errorstr += "未填寫對象!\r\n";
    }
    if (location.replace(/\s*/g, "") == "") {
      errorstr += "未填寫地點!\r\n";
    }
    if (service.replace(/\s*/g, "") == "") {
      errorstr += "未填寫服務內容!\r\n";
    }
    if (cost.replace(/\s*/g, "") == "") {
      errorstr += "未填寫執行費用!\r\n";
    }
    if (number.replace(/\s*/g, "") == "") {
      errorstr += "未填寫人數!\r\n";
    }
    if (lecturer.replace(/\s*/g, "") == "") {
      errorstr += "未填寫講師!\r\n";
    }
  }

  return errorstr;
}
//endregion

//呼叫user方法region
// $.ajax({
//     type:'POST',
//     url:'database/find_check_user.php',
//     dataType: "JSON",
//     async: false,//啟用同步請求
//     success: function (data) {
//         for (var index in data.Id) {
//             $(".user").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
//         }
//     },
//     error:function(e){
//         console.log(e);
//     }
// });

//endregion
