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

pu_id = getUrlVars()["pu_id"];
pu_year = getUrlVars()["year"];

supervise_msg_arr = [];

//抓發文表region
$(document).ready(function () {
  $.ajax({
    url: "database/find_published_data_detail.php",
    data: {
      pu_id: pu_id,
      year: pu_year,
    },
    type: "POST",
    dataType: "JSON",
    async: false,
    success: function (data) {
      // console.log(data);

      $.each(data, function (index, value) {
        // $("#pu_id").html(value.pu_id);
        var supervise_sign_file_val = value.Supervise_signature.replace(
          "../signature/",
          ""
        );
        $("#year").val(value.Year);
        $("#title_name").val(value.Title_name);

        $("#published_date").val(check_sql_date_format(value.Published_date));
        $("#subject").val(value.Subject);
        $("#unit").val(value.Unit);
        $("#num_publish").val(value.Num_publish);

        $("#create_date").val(check_sql_date_format(value.Create_date));
        $("#create_name").val(value.Create_name);
        $("#update_date").val(check_sql_date_format(value.Update_date));
        $("#update_name").val(value.Update_name);

        $("#supervise").val(value.Supervise);

        $("#supervise_signature_simg").text("點擊顯示簽名圖片");
        $("#supervise_signature_simg").attr(
          "href",
          "./signature/" + supervise_sign_file_val
        );

        supervise_msg_arr.push(value.Supervise_sign_msg);
        supervise_msg_arr.push(value.Supervise_sign_time);
      });
    },
    error: function (e) {
      console.log(e);
    },
  });

  $(".pu_question").attr("disabled", true);

  //jsignature插件初始化 region
  jsignature_initialization("supervise");
  //endregion

  //隱藏jsignature畫布區域 region
  $("#supervise_signature_area").hide();
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
    var ajax_url = "database/update_published_data_detail_signature.php";

    var src_data = $("#" + init_name + "_images").attr("src");
    // console.log(src);
    if (src_data) {
      $.ajax({
        type: "post",
        url: ajax_url,
        data: {
          pu_id: pu_id,
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
$("#pu_update").on("click", function () {
  var pu_id = getUrlVars()["pu_id"];

  var stau = false;

  if (check_updat_published_data() != "") {
    stau = false;
  } else {
    stau = true;
  }
  console.log(stau);

  if (!stau) {
    swal({
      title: check_updat_published_data(),
      type: "error",
    });
  } else {
    $.ajax({
      url: "database/update_published_data_detail.php",
      data: {
        pu_id: pu_id,
        year: $("#year").val(),
        title_name: $("#title_name").val(),
        published_date: trans_to_EN($("#published_date").val()),
        subject: $("#subject").val(),
        unit: $("#unit").val(),
        num_publish: $("#num_publish").val(),
        create_date: trans_to_EN($("#create_date").val()),
        create_name: $("#create_name").val(),
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
function check_updat_published_data() {
  var published_date = $("#published_date").val();
  var published_reason_checkbox = $(
    "input[name='published_reason']:checked"
  ).length;
  var published_reason_other = $("#published_reason_other").val();

  var errorstr = "";

  if (year == null) {
    errorstr += "未填寫年度!\r\n";
  }
  if (title_name == null) {
    errorstr += "未填寫發文標題!\r\n";
  }
  if (published_date == null) {
    errorstr += "未填寫發文日期!\r\n";
  }
  if (subject == null) {
    errorstr += "未填寫主旨!\r\n";
  }
  if (unit == null) {
    errorstr += "未填寫受文單位!\r\n";
  }
  if (num_publish == null) {
    errorstr += "未填寫發文字號!\r\n";
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
function pu_edit() {
  $(".pu_question").attr("disabled", false);
  $("#edit_div").attr("hidden", true);
  $("#save_div").attr("hidden", false);
}
function pu_cancel() {
  $(".pu_question").attr("disabled", true);
  $("#edit_div").attr("hidden", false);
  $("#save_div").attr("hidden", true);
}
//endregion

//進入預覽WORD頁面region
$("#preview_word").on("click", function () {
  var pu_id = getUrlVars()["pu_id"];
  //    console.log(id);
  location.href = "preview_word.php?pu_id=" + pu_id + "";
});

$("#preview_word2").on("click", function () {
  var pu_id = getUrlVars()["pu_id"];
  //    console.log(id);
  location.href = "preview_word2.php?pu_id=" + pu_id + "";
});
//endregion
