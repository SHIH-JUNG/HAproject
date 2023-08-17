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
    yearRange: "-15:+5",
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

director_msg_arr = [];
supervise_msg_arr = [];
checker_msg_arr = [];

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


        $("#overtime_date").val(value.Overtime_date);
        $("#reason").val(value.Reason);
        $("#overtime_hours").val(value.Overtime_hours);

        $("#free_date").val(value.Free_date);
        $("#free_hours").val(value.Free_hours);

        $("#allow_status").val(value.Allow_status);
        window.o_allow_status = value.Allow_status;

        $("#director").val(value.Director);
        $("#supervise").val(value.Supervise);
        $("#checker").val(value.Checker);

        var director_sign_file_val = value.Director_signature.replace(
          "../signature/",
          ""
        );

        var supervise_sign_file_val = value.Supervise_signature.replace(
          "../signature/",
          ""
        );
        var checker_sign_file_val = value.Checker_signature.replace(
          "../signature/",
          ""
        );

        $("#director_signature_simg").text("點擊顯示簽名圖片");
        
        if(director_sign_file_val=="")
        {
          $("#director_signature_simg").attr("onclick", "javascript:swal({title: '未簽名',type: 'error',}); return false;")
        }
        else
        {
          $("#director_signature_simg").attr(
            "href",
            "./signature/" + director_sign_file_val
          );
        }

        $("#supervise_signature_simg").text("點擊顯示簽名圖片");
        
        if(supervise_sign_file_val=="")
        {
          $("#supervise_signature_simg").attr("onclick", "javascript:swal({title: '未簽名',type: 'error',}); return false;")
        }
        else
        {
          $("#supervise_signature_simg").attr(
            "href",
            "./signature/" + supervise_sign_file_val
          );
        }

        
        $("#checker_signature_simg").text("點擊顯示簽名圖片");
        
        if(checker_sign_file_val=="")
        {
          $("#checker_signature_simg").attr("onclick", "javascript:swal({title: '未簽名',type: 'error',}); return false;")
        }
        else
        {
          $("#checker_signature_simg").attr(
            "href",
            "./signature/" + checker_sign_file_val
          );
        }


        director_msg_arr.push(value.Director_sign_msg);
        director_msg_arr.push(value.Director_sign_time);

        supervise_msg_arr.push(value.Supervise_sign_msg);
        supervise_msg_arr.push(value.Supervise_sign_time);

        checker_msg_arr.push(value.Checker_sign_msg);
        checker_msg_arr.push(value.Checker_sign_time);
      });
    },
    error: function (e) {
      console.log(e);
    },
  });

  $(".ot_question").attr("disabled", true);

  if(user_name == $("#supervise").val() || user_name == $("#director").val())
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

//計算寫入資料庫的加班/補休時數 region
compute_hours = function() {
  //加班時數
  window.n_overtime_hours = 0;
  //補休時數
  window.n_free_hours = 0;
  //剩餘加班時數(加班-補休)
  window.r_overtime_hours = 0;

  var overtime_hours = $("#overtime_hours").val();
  var free_date = $("#free_date").val();
  var free_hours = $("#free_hours").val();

  n_overtime_hours = parseFloat(overtime_hours).toFixed(1);
  n_free_hours = parseFloat(getNum(parseFloat(free_hours))).toFixed(1);

  if(free_date == "")
  {
    r_overtime_hours = parseFloat(n_overtime_hours).toFixed(1);
  }
  else
  {
    r_overtime_hours = parseFloat(n_overtime_hours - n_free_hours).toFixed(1);
  }
  // console.log(n_overtime_hours)
  // console.log(n_free_hours)
  // console.log(r_overtime_hours)
}
// endregion

//監聽 加班/補休日期欄位值變化，計算加班/補休時數 region
$("input[overtime_date*='overtime_date']").change( function(event) {
compute_hours();
});
// endregion

function getNum(val) {
  if (isNaN(val)) {
    return 0;
  }
  return val;
}

sign_msg_model = function (sign_type_name) {
  //手動新增按鈕點擊跳出模態框
  $("#myModal2").on("shown.bs.modal", function () {
    $("#" + sign_type_name).trigger("focus");
  });

  // console.log(social_worker_msg_arr)
  // console.log(supervise_msg_arr)

  switch (sign_type_name) {
    case "director":
      var type_name = "主管";
      $(".sign_msg").text(director_msg_arr[0]);
      $(".sign_msg_time").val(director_msg_arr[1]);
      break;

    case "supervise":
      var type_name = "執行長";
      $(".sign_msg").text(supervise_msg_arr[0]);
      $(".sign_msg_time").val(supervise_msg_arr[1]);
      break;

    case "checker":
      var type_name = "查核者";
      $(".sign_msg").text(checker_msg_arr[0]);
      $(".sign_msg_time").val(checker_msg_arr[1]);
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
        overtime_id: overtime_id,
        src_data: src_data,
        sign_msg: $("#signature_msg").val(),
        sign_type: sign_type,
        sign_name:$("#"+sign_type+"").val(),
      },
      async: false,
      success: function (data) {
        // console.log(data);
        if (data == 1) 
        {
          swal({
          title: "送出簽名成功！",
          type: "success",
          }).then(function () {
          location.reload();
          });
        }
        else if(data.includes("noallowsign"))
        {
          swal({
              type: 'error',
              title: '您無權限簽核此欄位',
              text: '當前登入的帳號名稱與簽核欄位名稱不符',
              allowOutsideClick: false //不可點背景關閉
          });
        }
        else 
        {
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
    case "director":
      type_name = "主管";
      break;

    case "supervise":
      type_name = "執行長";
      break;


    case "checker":
      type_name = "查核者";
      
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


//修改加班紀錄 region
$("#overtime_update").on("click", function () {
  var stau = false;

  if (check_overtime_data() != "以下為必填欄位，不能為空值!\r\n") {
    stau = false;
  } else {
    stau = true;
  }
  // console.log(stau);

  if (!stau) {
    swal({
      title: check_overtime_data(),
      type: "error",
    });
  } else {
    submit_form();
  }
});
//endregion

// 處理送出的值 region
function submit_form() {
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
  if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
  }
  });

  //Time Now
  var timenow = moment().format('YYYY-MM-DD');

  var rec_year = $("#overtime_date").val().split("年")[0];

  console.log(timenow);
  console.log(rec_year);

  var form_data = new FormData();


  // form_data.append("Resume_id", );
  // form_data.append("Resume_name", );
  form_data.append("Rec_year", rec_year);
  form_data.append("Fillin_date", timenow);

  form_data.append("Overtime_date", $("#overtime_date").val());
  form_data.append("Reason", $("#reason").val());

  form_data.append("Overtime_hours", n_overtime_hours);
  form_data.append("Free_date", $("#free_date").val());
  form_data.append("Free_hours", n_free_hours);


  form_data.append("Director",$("#director").val());
  form_data.append("Supervise",$("#supervise").val());
  form_data.append("Checker",$("#checker").val());

  form_data.append("N_Overtime_hours", r_overtime_hours);


  // 預覽傳到後端的資料詳細內容
  // for (var pair of form_data.entries()) {
  //   console.log(pair[0] + ", " + pair[1]);
  // }


  $.ajax({
      url: "database/add_new_overtime.php",
      type: "POST",
      data: form_data,
      contentType: false,
      cache: false,
      processData: false,
      async: true,
      success: function (data) {
        console.log(data);
        if (data == 1) {
          swal({
            type: "success",
            title: "新增成功!",
            allowOutsideClick: false, //不可點背景關閉
          }).then(function () {
            window.location.href =
              "overtime.php";
          });
        } else {
          swal({
            type: "error",
            title: "新增失敗!請聯絡負責人",
            allowOutsideClick: false, //不可點背景關閉
          });
        }
      },
      error: function (e) {
          console.log(e)
          swal({
              type: "error",
              title: "新增失敗!請聯絡負責人",
              allowOutsideClick: false, //不可點背景關閉
          });
      },
    });
}
// endregion

// 送出 region
submit_data = function() {

  var this_val = $("#allow_status").val();

  swal({
    title: "將審核狀態改變至" + this_val,
    text: "按下『確認』後將無法復原上次操作，確定要送出？",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "確認",
    cancelButtonText: "取消",
    showConfirmButton: true,
    showCancelButton: true,
  })
    .then(
      function (result) {
        if (result) {
          update_allow_status(overtime_id, this_val);
        }
      },
      function (dismiss) {
        if (dismiss == "cancel") {

          $("#allow_status").val(o_allow_status);

          swal({
            title: "已取消",
            type: "success",
          });
        }
      }
    )
    .catch(swal.noop);
}
// endregion

// 資料庫 審核狀態修改功能 region
update_allow_status = function(overtime_id_str, allow_status_str) {
  
  $.ajax({
    url: "database/update_overtime_data_allow_status.php",
    type: "POST",
      data: {
        Overtime_id:overtime_id_str,
        Allow_status:allow_status_str,
      },
    // dataType: "JSON", // 若要傳回字串 如：noallow，不可設定為json格式
    success: function (data) {
      console.log(data);
      if (data == 1) 
      {
        swal({
          type: "success",
          title: "更新成功!",
          allowOutsideClick: false, //不可點背景關閉
        }).then(function () {
          window.location.href =
            "overtime_detail.php?" + 
            "overtime_id=" + overtime_id +
            "&resume_id=" + resume_id;
        });
      } 
      else if(data.includes("noallow"))
      {
        swal({
          type: 'error',
          title: '您無權限修改該筆加班紀錄',
          text: '當前登入的帳號名稱與主管名稱不符',
          allowOutsideClick: false //不可點背景關閉
        });
      }
      else 
      {
        swal({
          type: "error",
          title: "更新失敗!請聯絡負責人",
          allowOutsideClick: false, //不可點背景關閉
        });
      }
    },
    error: function (e) {
      console.log(e)
      swal({
          type: "error",
          title: "更新失敗!請聯絡負責人",
          allowOutsideClick: false, //不可點背景關閉
      });
    },
  });
}
// endregion

// 撤銷請假申請 region
revoke_overtime = function() {

  swal({
    title: "確定要撤銷該請假申請？\t\n按下『確認』後將刪除該筆加班紀錄，並且無法復原",
    text: "審核狀態不可為'核准'",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "確認",
    cancelButtonText: "取消",
    showConfirmButton: true,
    showCancelButton: true,
  })
    .then(
      function (result) {
        if (result) {
          revoke_overtime_submit();
        }
      },
      function (dismiss) {
        if (dismiss == "cancel") {

          swal({
            title: "已取消",
            type: "success",
          });
        }
      }
    )
    .catch(swal.noop);
}
// endregion

// 撤銷請假申請 資料庫 region
revoke_overtime_submit = function() {
  $.ajax({
    url: "database/delete_overtime_data_detail.php",
    type: "POST",
      data: {
        Overtime_id:overtime_id,
        Resume_id:resume_id,
      },
    // dataType: "JSON", // 若要傳回字串 如：noallow，不可設定為json格式
    success: function (data) {
      console.log(data);
      if (data == 1) 
      {
        swal({
          type: "success",
          title: "撤銷加班紀錄成功!",
          allowOutsideClick: false, //不可點背景關閉
        }).then(function () {
          window.location.href =
            "overtime.php";
        });
      } 
      else if(data.includes("noallow"))
      {
        swal({
          type: 'error',
          title: '您無權限刪除該筆加班紀錄',
          // text: '當前登入的帳號名稱與主管名稱不符',
          allowOutsideClick: false //不可點背景關閉
        });
      }
      else if(data.includes("reject"))
      {
        swal({
          type: 'error',
          title: '審核狀態不可為"核准"',
          text: '請將審核狀態改為"取消"或"不核准"',
          allowOutsideClick: false //不可點背景關閉
        });
      }
      else 
      {
        swal({
          type: "error",
          title: "撤銷加班紀錄失敗!請聯絡負責人",
          allowOutsideClick: false, //不可點背景關閉
        });
      }
    },
    error: function (e) {
      console.log(e)
      swal({
          type: "error",
          title: "撤銷加班紀錄失敗!請聯絡負責人",
          allowOutsideClick: false, //不可點背景關閉
      });
    },
  });
}
// endregion

//檢查必填欄位 region
function check_overtime_data() {
  var errorstr = "以下為必填欄位，不能為空值!\r\n";

  $(".fillin_need").each(function(index,element){

    var check_element = $(this).parent("td").siblings("td").children()[0];
    var check_element_name = $(this).parent("td").text();

    console.log($(check_element))
    console.log($(check_element).val())

    var check_element_tagname = $(check_element).prop("tagName");
    var check_element_type = $(check_element).attr("type");

    console.log(check_element_tagname)    
    if(check_element_tagname == "INPUT" && check_element_type=="file")
    {
      var file_len = $(check_element).prop("files").length;

      if(file_len == 0)
      {
        errorstr += check_element_name.replace("※", "") + "\r\n";
      }
    }
    else if(check_element_tagname == "INPUT" && check_element_type=="radio")
    {
      var check_element_children_name = $(this).parent("td").siblings("td").children().attr("name");

      if($('[name="'+check_element_children_name+'"]:checked').length==0)
      {
        errorstr += check_element_name.replace("※", "") + "\r\n";
      }
    }
    else if(check_element_tagname == "DIV")
    {
      var n_check_element = $(this).parent("td").siblings("td").children().children()[0];

      if($(n_check_element).val() == null || $(n_check_element).val().replace(/\s*/g, "") == "")
      {
        errorstr += check_element_name.replace("※", "") + "\r\n";
      }
    }
    else
    {
      if($(check_element).val() == null || $(check_element).val().replace(/\s*/g, "") == "")
      {
        errorstr += check_element_name.replace("※", "") + "\r\n";
      }
    }
    
  });

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
        $("#checker").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
        $("#supervise").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
        $("#director").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
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
