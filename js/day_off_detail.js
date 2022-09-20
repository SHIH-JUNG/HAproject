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

day_id = getUrlVars()["day_id"];
day_name = getUrlVars()["name"];

supervise_msg_arr = [];
job_agent_msg_arr = [];

//抓發文表region
$(document).ready(function () {
  $.ajax({
    url: "database/find_day_off_data_detail.php",
    data: {
      day_id: day_id,
      name: day_name,
    },
    type: "POST",
    dataType: "JSON",
    async: false,
    success: function (data) {
      // console.log(data);

      $.each(data, function (index, value) {
        // $("#vo_id").html(value.vo_id);
        var supervise_sign_file_val = value.Supervise_signature.replace(
          "../signature/",
          ""
        );
        var job_agent_sign_file_val = value.Job_agent_signature.replace(
          "../signature/",
          ""
        );

        $("#name").val(value.Name);
        $("#reason").val(value.Reason);
        $("#overtime_date").val(check_sql_date_format(value.Overtime_date));
        $("#hours").val(value.Hours);
        $("#makeup_date").val(check_sql_date_format(value.Makeup_date));
        $("#makeup_hours").val(value.Makeup_hours);
        // $("#supervise").val(value.Supervise);
        // $("#job_agent").val(value.Job_agent);

        $("#create_date").val(check_sql_date_format(value.Create_date));
        $("#create_name").val(value.Create_name);
        $("#update_date").val(check_sql_date_format(value.Update_date));
        $("#update_name").val(value.Update_name);

        $("#supervise_signature_simg").text("點擊顯示簽名圖片");
        $("#supervise_signature_simg").attr(
          "href",
          "./signature/" + supervise_sign_file_val
        );

        $("#job_agent_signature_simg").text("點擊顯示簽名圖片");
        $("#job_agent_signature_simg").attr(
          "href",
          "./signature/" + job_agent_sign_file_val
        );

        supervise_msg_arr.push(value.Supervise_sign_msg);
        supervise_msg_arr.push(value.Supervise_sign_time);

        job_agent_msg_arr.push(value.Job_agent_sign_msg);
        job_agent_msg_arr.push(value.Job_agent_sign_time);
      });
    },
    error: function (e) {
      console.log(e);
    },
  });

  $(".day_question").attr("disabled", true);

  //jsignature插件初始化 region
  jsignature_initialization("supervise");
  jsignature_initialization("job_agent");
  //endregion

  //隱藏jsignature畫布區域 region
  $("#supervise_signature_area").hide();
  $("#job_agent_signature_area").hide();
  $("#social_worker_signature_area").hide();

  //將name名稱為ch_datepicker創建datepicker初始化 region
  $("[name='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion

  $('a[data-toggle="pill"]').on("shown.bs.tab", function (e) {
    if ($(e.target).attr("id") == "home-tab") {
      $("#all_data").show();
    }
  });

  //手動新增按鈕點擊跳出模態框
  $("#myModal").on("shown.bs.modal", function () {
    $("#trans_to_opencase").trigger("focus");
  });
});
//endregion

sign_msg_model = function (sign_type_name) {
  //手動新增按鈕點擊跳出模態框
  $("#myModal").on("shown.bs.modal", function () {
    $("#" + sign_type_name).trigger("focus");
  });

  // console.log(social_worker_msg_arr)
  // console.log(supervise_msg_arr)

  switch (sign_type_name) {
    case "supervise":
      var type_name = "督導";
      $(".sign_msg").text(supervise_msg_arr[0]);
      $(".sign_msg_time").val(supervise_msg_arr[1]);
      break;

    case "social_worker":
      var type_name = "社工員";
      $(".sign_msg").text(social_worker_msg_arr[0]);
      $(".sign_msg_time").val(social_worker_msg_arr[1]);
      break;
  }

  $(".sign_msg_td_name").text(type_name + "簽名留言內容");
};

//jsignature插件初始化 region
function jsignature_initialization(init_name) {
  var $sigdiv = $("#" + init_name + "_signature");
  $sigdiv.jSignature({ UndoButton: true }); // 初始化jSignature插件-属性用","隔开
  // $sigdiv.jSignature({'decor-color':'red'}); // 初始化jSignature插件-设置横线颜色
  // $sigdiv.jSignature({'lineWidth':"6"});// 初始化jSignature插件-设置横线粗细
  // $sigdiv.jSignature({"decor-color":"transparent"});// 初始化jSignature插件-去掉横线
  // $sigdiv.jSignature({'UndoButton':true});// 初始化jSignature插件-撤销功能
  // $sigdiv.jSignature({'height': 100, 'width': 200}); // 初始化jSignature插件-设置书写范围(大小)

  $("#" + init_name + "_signature").bind("change", function (e) {
    var datapair = $sigdiv.jSignature("getData", "image");
    $("#" + init_name + "_images").attr(
      "src",
      "data:" + datapair[0] + "," + datapair[1]
    );
  });

  $("#" + init_name + "_signature_submit").click(function () {
    var ajax_url = "database/update_day_off_data_detail_signature.php";

    var src_data = $("#" + init_name + "_images").attr("src");
    // console.log(src);
    if (src_data) {
      $.ajax({
        type: "post",
        url: ajax_url,
        data: {
          day_id: day_id,
          src_data: src_data,
          sign_msg: $("#" + init_name + "_signature_msg").val(),
          sign_type: init_name,
        },
        async: false,
        success: function (data) {
          // console.log(data);
          if (data) {
            swal({
              title: "送出簽名成功！",
              type: "success",
            }).then(function () {
              location.reload();
            });
          } else {
            swal({
              title: "生成簽名圖片失敗！請聯絡負責單位",
              type: "error",
            });
          }
        },
      });
    } else {
      alert("簽名圖片檔不能為空！");
      return false;
    }
  });
  $("#" + init_name + "_reset").click(function () {
    $("#" + init_name + "_signature").jSignature("reset"); //重置画布，可以进行重新作画
    $("#" + init_name + "_images").attr("src", "");
  });
}
//endregion

//按督導簽名，顯示簽名畫布 region
$("#supervise_signature_btn").on("click", function () {
  $("#supervise_signature_area").show();
  $("#collapseTwo").hide();
});
//endregion

//在簽名畫布區域按取消，返回詳細資料，並自動滾動卷軸至最頂部 region
show_main_panel = function () {
  $("#supervise_signature_area").hide();
  $("#social_worker_signature_area").hide();
  $("#collapseTwo").show();
  // $('html, body').scrollTop(0);
};
//endregion

//更新發文個案表基本資料region
$("#day_update").on("click", function () {
  var day_id = getUrlVars()["day_id"];

  var stau = false;

  if (check_updat_day_off_data() != "") {
    stau = false;
  } else {
    stau = true;
  }
  console.log(stau);

  if (!stau) {
    swal({
      title: check_updat_day_off_data(),
      type: "error",
    });
  } else {
    $.ajax({
      url: "database/update_day_off_data_detail.php",
      data: {
        day_id: day_id,
        name: $("#name").val(),
        reason: $("#reason").val(),
        overtime_date: trans_to_EN($("#overtime_date").val()),
        hours: $("#hours").val(),
        makeup_date: trans_to_EN($("#makeup_date").val()),
        makeup_hours: $("#makeup_hours").val(),
        create_date: trans_to_EN($("#update_date").val()),
        create_name: $("#update_name").val(),
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
function check_updat_day_off_data() {
  var errorstr = "";

  if (reason == null) {
    errorstr += "未填寫理由!\r\n";
  }
  if (overtime_date == null) {
    errorstr += "未填寫加班日期!\r\n";
  }
  if (hours == null) {
    errorstr += "未填寫時數!\r\n";
  }
  if (makeup_date == null) {
    errorstr += "未填寫補修日期!\r\n";
  }
  if (makeup_hours == null) {
    errorstr += "未填寫補修時數!\r\n";
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
function day_edit() {
  $(".day_question").attr("disabled", false);
  $("#edit_div").attr("hidden", true);
  $("#save_div").attr("hidden", false);
}
function day_cancel() {
  $(".day_question").attr("disabled", true);
  $("#edit_div").attr("hidden", false);
  $("#save_div").attr("hidden", true);
}
//endregion

//進入預覽WORD頁面region
$("#preview_word").on("click", function () {
  var day_id = getUrlVars()["day_id"];
  //    console.log(id);
  location.href = "preview_word.php?day_id=" + day_id + "";
});

$("#preview_word2").on("click", function () {
  var day_id = getUrlVars()["day_id"];
  //    console.log(id);
  location.href = "preview_word2.php?day_id=" + day_id + "";
});
//endregion