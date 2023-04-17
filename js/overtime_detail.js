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
  $("#" + selector_id).datepicker({
    changeYear: true,
    changeMonth: true,
    currentText: "今天",
    dateFormat: "R.mm.dd",
    showButtonPanel: true,
    // minDate: new Date(
    //   new Date().getFullYear() - 2,
    //   new Date().getMonth() - 3,
    //   1
    // ),
    // maxDate: new Date(new Date().getFullYear() + 3, 11, 31),
    yearRange: "-12:+5",
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
  // $("#leave_date").datepicker("setDate", "today");
};
//endregion


overtime_id = getUrlVars()["overtime_id"];
resume_id = getUrlVars()["resume_id"];

supervise_msg_arr = [];
job_agent_msg_arr = [];

//抓發文表region
$(document).ready(function () {

  // 載入全部user至下拉式選單
  append_user();

  $.ajax({
    url: "database/find_overtime_data_detail.php",
    data: {
      Overtime_id: overtime_id,
      Resume_id: resume_id,
    },
    type: "POST",
    dataType: "JSON",
    async: false,
    success: function (data) {
      // console.log(data);

      $.each(data, function (index, value) {
        // $("#overtime_id").html(value.overtime_id);

        var supervise_sign_file_val = value.Supervise_signature.replace(
          "../signature/",
          ""
        );
        var job_agent_sign_file_val = value.Job_agent_signature.replace(
          "../signature/",
          ""
        );

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

  $(".ot_question").attr("disabled", true);

  if(user_name == $("#supervise").val())
  {
    $("#allow_status").attr("disabled", false);
    $("#submit_area").show();
  }
  else
  {
    $("#allow_status").attr("disabled", true);
    $("#submit_area").hide();
  }

  //手動新增按鈕點擊跳出模態框
  $("#myModal").on("shown.bs.modal", function () {
    $("#add_time_all_btn").trigger("focus");
  });

  //jsignature插件初始化 region
  jsignature_initialization();
  //endregion

  //隱藏jsignature畫布區域 region
  $("#signature_area").hide();
  //endregion

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

});

sign_msg_model = function (sign_type_name) {
  //手動新增按鈕點擊跳出模態框
  $("#myModal2").on("shown.bs.modal", function () {
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

    case "job_agent":
      var type_name = "職務代理人";
      $(".sign_msg").text(job_agent_msg_arr[0]);
      $(".sign_msg_time").val(job_agent_msg_arr[1]);
      break;
  }

  $(".sign_msg_td_name").text(type_name + "簽名留言內容");
};

//jsignature插件初始化 region
function jsignature_initialization() {
  var $sigdiv = $("#signature_div");
  $sigdiv.jSignature({ UndoButton: true }); // 初始化jSignature插件-属性用","隔开
  // $sigdiv.jSignature({'decor-color':'red'}); // 初始化jSignature插件-设置横线颜色
  // $sigdiv.jSignature({'lineWidth':"6"});// 初始化jSignature插件-设置横线粗细
  // $sigdiv.jSignature({"decor-color":"transparent"});// 初始化jSignature插件-去掉横线
  // $sigdiv.jSignature({'UndoButton':true});// 初始化jSignature插件-撤销功能
  // $sigdiv.jSignature({'height': 100, 'width': 200}); // 初始化jSignature插件-设置书写范围(大小)

  // 同步更新畫布中的簽名圖片和簽名檔案格式 region
  $("#signature_div").bind("change", function (e) {
    var datapair = $sigdiv.jSignature("getData", "image");
    $("#signature_images").attr(
      "src",
      "data:" + datapair[0] + "," + datapair[1]
    );
  });
  //endregion

  //重設繪製簽名 region
  $("#signature_reset").click(function () {
    $("#signature_div").jSignature("reset"); //重置画布，可以进行重新作画
    $("#signature_images").attr("src", "");
  });
  //endregion
}
//endregion

// 儲存該簽名 region
signature_submit = function(this_btn) {

  // 獲取簽名類型(督導、組長、主管)
  var sign_type = $(this_btn).attr("board_name");

  // console.log(sign_type);

  var ajax_url = "database/update_overtime_data_detail_signature.php";

  var src_data = $("#signature_images").attr("src");
  // console.log(src);

  // 判斷有無簽名圖片，若有送出簽名並儲存檔案
  if (src_data) {
    // console.log("submit_sign");
    $.ajax({
      type: "post",
      url: ajax_url,
      data: {
        day_id: day_id,
        src_data: src_data,
        sign_msg: $("#signature_msg").val(),
        sign_type: sign_type,
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
}
//endregion

//按簽名 按紐，顯示簽名畫布 隱藏其他詳細資料 region
signature_btn_click = function(sign_board_name) {

  var type_name = "";

  switch (sign_board_name) {
    case "supervise":
      type_name = "督導";
      break;

    case "job_agent":
      type_name = "職務代理人";
      
      break;
  }

  $("#signature_h4").text(type_name + "簽名");
  $("#signature_title_td").text(type_name);
  $("#signature_msg_td").text(type_name);
  $("#sign_submit_btn").attr("board_name", sign_board_name);

  $("#signature_area").show();
  $("#collapseTwo").hide();
}
//endregion

//在簽名畫布區域按取消，返回詳細資料，並自動滾動卷軸至最頂部 region
show_main_panel = function () {
  $("#signature_area").hide();
  $("#collapseTwo").show();
  // $('html, body').scrollTop(0);
};
//endregion


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
function overtime_edit() {
  $(".ot_question").attr("disabled", false);
  $("#edit_div").attr("hidden", true);
  $("#save_div").attr("hidden", false);
}
function overtime_cancel() {
  $(".ot_question").attr("disabled", true);
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
