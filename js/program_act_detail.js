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

//抓方案活動表region
$(document).ready(function () {
  $.ajax({
    url: "database/find_program_act_data_detail.php",
    data: {
      program_id: program_id,
      // year: re_year,
    },
    type: "POST",
    dataType: "JSON",
    async: false,
    success: function (data) {
      // console.log(data);

      $.each(data, function (index, value) {
        // $("#year").val(value.Year);
        $("#date").val(check_sql_date_format(value.Date));

        $("#activity_name").val(value.Activity_name);
        $("#activity_category").val(value.Activity_category);
        if(value.Person.includes("其他")){
          var funds=value.Person.split('-')
          $("#person").val(funds[0]);
          $("#other_person").val(funds[1]);
        }
        else{
          $("#person").val(value.Person);
          document.getElementById('other_person').type = 'hidden';
        }
        $("#location").val(value.Location);
        $("#service").val(value.Service);

        $("#cost").val(value.Cost);
        $("#number").val(value.Number);
        $("#lecturer").val(value.Lecturer);

        $("#create_date").val(check_sql_date_format(value.Create_date));
        $("#create_name").val(value.Create_name);
        $("#update_date").val(check_sql_date_format(value.Update_date));
        $("#update_name").val(value.Update_name);

        var program_act_file_path = value.Upload_path.replace("../", "./");
        program_act_file_name = value.Upload_name;
        var a_element_content = '<a href="'+program_act_file_path+'" style="text-decoration:none;color:blue;" target="_blank">'
        +program_act_file_name
        +'</a><br/><br/>';

        $("#upload").html(a_element_content);
      });
    },
    error: function (e) {
      // console.log(e);
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
      url: "database/program_act_file_check.php",
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
              "../program_act/",
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
        // console.log(e);
        notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
      },
    });
  });
  return exist_info;
}
//endregion

//更新發文個案表基本資料region
// $("#program_update").on("click", function () {
//   var program_id = getUrlVars()["program_id"];

//   var stau = false;

//   if (check_updat_program_act_data() != "") {
//     stau = false;
//   } else {
//     stau = true;
//   }
//   console.log(stau);

//   if (!stau) {
//     swal({
//       title: check_updat_program_act_data(),
//       type: "error",
//     });
//   } else {
//     $.ajax({
//       url: "database/update_program_act_data_detail.php",
//       data: {
//         program_id: program_id,
//         // Year: $("#year").val(),
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
//       type: "POST",
//       dataType: "JSON",
//       success: function (data) {
//         if (data == 1) {
//           swal({
//             title: "修改成功！",
//             type: "success",
//           }).then(function () {
//             location.reload();
//           });
//         } else {
//           swal({
//             title: "修改失敗！請聯絡網站維護人員",
//             type: "error",
//           });
//         }
//       },
//       error: function (e) {
//         console.log(e);
//       },
//     });
//   }
// });

//更新方案活動資料 region
$("#program_update").on("click", function () {
  var pu_id = getUrlVars()["program_id"];

  var stau = false;

  if (check_updat_program_act_data() != "") {
    stau = false;
  } else {
    stau = true;
  }
  // console.log(stau);

  if (!stau) {
    swal({
      title: check_updat_program_act_data(),
      type: "error",
    });
  } else {
    var exist_arr = check_file_exist();
      if(exist_arr.length != 0)
      {
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
      }
      else
      {
        submit_form();
      }
  }
});

function submit_form() {

  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
    if ($(this).attr("type") != "file") {
        $(this).val(jQuery.trim($(this).val()));
    }
    });
  
    var form_data = new FormData();


    $("input[type='file']").each(function(index, element) {
        var program_act_files = $(this).prop("files");

        if (program_act_files != undefined) {
          if (program_act_files.length != 0) {
            for (var i = 0; i < program_act_files.length; i++) {
              form_data.append("program_act_files"+index, program_act_files[i]);
              // console.log(program_act_files[i])
            }
          } 
        }
    });

    var personChick="";
    if($("#person").val()=="其他"){
      personChick = "其他-"+$("#other_person").val();
    }
    else{
      personChick = $("#person").val();
    }
    // console.log(personChick);
    form_data.append("program_id", program_id);
    form_data.append("Year", $("#year").val());
    form_data.append("Date", $("#date").val());
    form_data.append("Activity_name", $("#activity_name").val());
    form_data.append("Activity_category",$("#activity_category").val());
    form_data.append("Person", personChick);
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
    url: "database/update_program_act_data_detail.php",
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
      // console.log(e);
    },
  });
}

//(update)檢查必填欄位 region
function check_updat_program_act_data() {
  // var year = $("#year").val();
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

  if (errorstr == "") {
    // if (year == null || year.replace(/\s*/g, "") == "") {
    //   errorstr += "未填寫年度!\r\n";
    // }
    if (date == null || date.replace(/\s*/g, "") == "") {
      errorstr += "未填寫日期!\r\n";
    }
    if (activity_name == null || activity_name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫活動名稱!\r\n";
    }
    if (activity_category == null || activity_category.replace(/\s*/g, "") == "") {
      errorstr += "未填寫活動類別!\r\n";
    }
    if (person == null || person.replace(/\s*/g, "") == "") {
      errorstr += "未填寫對象!\r\n";
    }
    if (location == null || location.replace(/\s*/g, "") == "") {
      errorstr += "未填寫地點!\r\n";
    }
    if (service == null || service.replace(/\s*/g, "") == "") {
      errorstr += "未填寫服務內容!\r\n";
    }
    if (cost == null || cost.replace(/\s*/g, "") == "") {
      errorstr += "未填寫執行費用!\r\n";
    }
    if (number == null || number.replace(/\s*/g, "") == "") {
      errorstr += "未填寫人數!\r\n";
    }
    if (lecturer == null || lecturer.replace(/\s*/g, "") == "") {
      errorstr += "未填寫講師!\r\n";
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
//             title: "新增失敗！請聯絡網站維護人員",
//             type: "error",
//           });
//         }
//       },
//       error: function (e) {
//         swal({
//           title: "新增失敗！請聯絡網站維護人員",
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

//詳細表格鎖定控制region
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

const selectElement = document.querySelector("#person");

selectElement.addEventListener("change", (event) => {
  var result = document.querySelector("#other_person");
  // console.log(event.target.value);
  if(event.target.value == "其他"){
    result.type = "text";
  }
  else{
    result.type = "hidden";
  }
});