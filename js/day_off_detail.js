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
    dateFormat: "R年mm月dd日",
    showButtonPanel: true,
    // minDate: new Date(
    //   new Date().getFullYear() - 2,
    //   new Date().getMonth() - 3,
    //   1
    // ),
    // maxDate: new Date(new Date().getFullYear() + 3, 11, 31),
    yearRange: "-15:+2",
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

// 民國年轉換日期格式yyyy-dd-mm region
function split_date(date) {
  return parseInt(date.split("年")[0])+1911+"-"+date.split("年")[1].split("月")[0]+"-"+date.split("年")[1].split("月")[1].split("日")[0]; 
}
//endregion

day_off_id = getUrlVars()["day_off_id"];
resume_id = getUrlVars()["resume_id"];

supervise_msg_arr = [];
job_agent_msg_arr = [];

window.r_annual_hours = 0;
window.r_comp_hours = 0;
window.u_annual_hours = 0;
window.u_comp_hours = 0;
window.o_get_overtime_hours = 0;

window.origin_hours_arr = [];

//抓發文表region
$(document).ready(function () {

  // 載入全部user至下拉式選單
  append_user();

  $.ajax({
    url: "database/find_day_off_data_detail.php",
    data: {
      Day_off_id: day_off_id,
      Resume_id: resume_id,
    },
    type: "POST",
    dataType: "JSON",
    async: false,
    success: function (data) {
      console.log(data);

      $.each(data, function (index, value) {
    
        var day_off_type_val = "";
        var day_off_type_other_val = "";

        if(value.Day_off_type.includes("其它"))
        {
          day_off_type_val = value.Day_off_type.split("::")[0];
          day_off_type_other_val = value.Day_off_type.split("::")[1];

          $("input[name='day_off_type_other']").val(day_off_type_other_val);
        }
        else
        {
          day_off_type_val = value.Day_off_type;
        }
        $("input[name='day_off_type'][value='"+day_off_type_val+"']").attr('checked',true);


        var file_val_sp_arr = value.Other_files.split("\/");
        var file_val = file_val_sp_arr[file_val_sp_arr.length - 1];
        var file_val_a = value.Other_files.replace("\.\.", "");
        //該input value寫入"檔案.檔名"
        $("input[name='day_off_files']").attr("value",file_val)
        //檔案連結與圖片string
        var file_html = '<a name="day_off_files_a" href=".'+file_val_a+'" style="text-decoration:none;color:blue;" target="_blank">'+file_val+'<br/></a>';
        $("#day_off_files").html(file_html);


       
        $("#reason").val(value.Reason);


        $("#overtime_date_start").val(value.Overtime_date_start.split("_")[0]);
        $("#overtime_time_start").val(value.Overtime_date_start.split("_")[1]);
        $("#overtime_date_end").val(value.Overtime_date_end.split("_")[0]);
        $("#overtime_time_end").val(value.Overtime_date_end.split("_")[1]);

        $("#allow_status").val(value.Allow_status);
        window.o_allow_status = value.Allow_status;

        r_comp_hours = value.Remain_comp_hours;
        r_annual_hours =  value.Remain_annual_hours;
        u_comp_hours = value.Used_comp_hours;
        u_annual_hours = value.Used_annual_hours;
        o_get_overtime_hours = value.Hours;
        origin_hours_arr.push(r_comp_hours);
        origin_hours_arr.push(r_annual_hours);
        origin_hours_arr.push(u_comp_hours);
        origin_hours_arr.push(u_annual_hours);

        // $("#create_date").val(check_sql_date_format(value.Create_date));
        // $("#create_name").val(value.Create_name);
        // $("#update_date").val(check_sql_date_format(value.Update_date));
        // $("#update_name").val(value.Update_name);

        $("#supervise").val(value.Supervise);
        $("#job_agent").val(value.Job_agent);

        var supervise_sign_file_val = value.Supervise_signature.replace(
          "../signature/",
          ""
        );

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
        

        supervise_msg_arr.push(value.Supervise_sign_msg);
        supervise_msg_arr.push(value.Supervise_sign_time);
        

        var job_agent_sign_file_val = value.Job_agent_signature.replace(
          "../signature/",
          ""
        );

        $("#job_agent_signature_simg").text("點擊顯示簽名圖片");
        
        if(job_agent_sign_file_val=="")
        {
          $("#job_agent_signature_simg").attr("onclick", "javascript:swal({title: '未簽名',type: 'error',}); return false;")
        }
        else
        {
          $("#job_agent_signature_simg").attr(
            "href",
            "./signature/" + job_agent_sign_file_val
          );
        }
        

        job_agent_msg_arr.push(value.Job_agent_sign_msg);
        job_agent_msg_arr.push(value.Job_agent_sign_time);
      });
    },
    error: function (e) {
      console.log(e);
    },
  });

  $(".day_question").attr("disabled", true);

  // console.log(user_name)

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
  $('#myModal').on('shown.bs.modal', function () {
    $('#add_time_all_btn').trigger('focus');
  });

  //jsignature插件初始化 region
  jsignature_initialization();
  //endregion

  //隱藏jsignature畫布區域 region
  $("#signature_area").hide();
  //endregion

  
  //將input name名稱為ch_datepicker創建datepicker初始化 region
  $("input[name='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion

  //顯示剩餘可補休的時數
  load_remain_hours();

  $('a[data-toggle="pill"]').on("shown.bs.tab", function (e) {
    if ($(e.target).attr("id") == "home-tab") {
      $("#all_data").show();
    }
  });

});
//endregion

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

  var ajax_url = "database/update_day_off_data_detail_signature.php";

  var src_data = $("#signature_images").attr("src");
  // console.log(src);

  // 判斷有無簽名圖片，若有送出簽名並儲存檔案
  if (src_data) {
    // console.log("submit_sign");
    $.ajax({
      type: "post",
      url: ajax_url,
      data: {
        day_off_id: day_off_id,
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


// 網頁載入時，查詢當前帳號登入者的可使用的補/特休時數 region
load_remain_hours = function() {

  var load_remain_hours_str = "";

  console.log(r_comp_hours);
  console.log(r_annual_hours);

  load_remain_hours_str = '<br/><br/>剩餘補休時數： ' + parseFloat(r_comp_hours).toFixed(1) + '<br/>' + 
  '剩餘特休時數： '+ parseFloat(r_annual_hours).toFixed(1) + '<br/><br/>' + 
  '已使用的補休時數： ' + parseFloat(u_comp_hours).toFixed(1) + '<br/>' + 
   '已使用的特休時數：： ' + parseFloat(u_annual_hours).toFixed(1) + '<br/><br/>';

  $("#overtime_hours_hit").html(load_remain_hours_str);


  if(o_get_overtime_hours - 24.0 >= 0)
  {
    var days_num = parseInt(o_get_overtime_hours / 24);
    var hours_num = parseInt(o_get_overtime_hours % 24);
    $("#overtime_hours_count").html("請假時數：共" + days_num + "日" + hours_num + "時");
  }
  else
  {
    $("#overtime_hours_count").html("請假時數：共0日" + o_get_overtime_hours + "時");
  }

}
// endregion

// 計算已使用及剩餘補/特休時數 region
function count_use_remain_hours(overtime_hours) {
  var use_annual_hours = 0;
  var use_comp_hours = 0;

  var remain_annual_hours = 0;
  var remain_comp_hours = 0;

  var count_hours_arr = new Array();

  if(parseFloat(overtime_hours) - parseFloat(r_comp_hours) >= 0)
  {
    use_comp_hours = parseFloat(r_comp_hours).toFixed(1);
    use_annual_hours = parseFloat(parseFloat(overtime_hours) - parseFloat(r_comp_hours)).toFixed(1);

    remain_comp_hours = parseFloat(parseFloat(r_comp_hours) - parseFloat(use_comp_hours)).toFixed(1);
    remain_annual_hours = parseFloat(parseFloat(r_annual_hours) - parseFloat(use_annual_hours)).toFixed(1);

  }
  else if(parseFloat(overtime_hours) - parseFloat(r_comp_hours) < 0)
  {
    use_comp_hours = parseFloat(overtime_hours).toFixed(1);
    use_annual_hours = 0.0;

    remain_comp_hours = parseFloat(r_comp_hours).toFixed(1);
    remain_annual_hours = parseFloat(r_annual_hours).toFixed(1);
  }

  count_hours_arr.push(remain_comp_hours);
  count_hours_arr.push(remain_annual_hours);
  count_hours_arr.push(use_comp_hours);
  count_hours_arr.push(use_annual_hours);

  // console.log(count_hours_arr);
  return count_hours_arr;
}
// endregion

// 計算請假時數 region
function Overtime_GetDateDiff(startTime, endTime, diffType) {
  //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式 
  startTime = startTime.replace(/\-/g, "/");
  endTime = endTime.replace(/\-/g, "/");

  //将计算间隔类性字符转换为小写
  diffType = diffType.toLowerCase();
  var sTime = new Date(startTime);      //开始时间
  var eTime = new Date(endTime);  //结束时间
  //作为除数的数字
  var divNum = 1;
  switch (diffType) {
      case "second":
          divNum = 1000;
          break;
      case "minute":
          divNum = 1000 * 60;
          break;
      case "hour":
          divNum = 1000 * 3600;
          break;
      case "day":
          divNum = 1000 * 3600 * 24;
          break;
      default:
          break;
  }
  return parseFloat((eTime.getTime() - sTime.getTime()) / parseInt(divNum)).toFixed(1);
}
//endregion

// 根據請假日期計算已使用及剩餘時數 region
update_remain_hours = function() {

  var overtime_date_start = $("#overtime_date_start").val();
  var overtime_date_end = $("#overtime_date_end").val();
  var overtime_time_start = $("#overtime_time_start").val();
  var overtime_time_end = $("#overtime_time_end").val();

  var overtime_start_format = split_date(overtime_date_start) + " " + overtime_time_start;
  var overtime_end_format = split_date(overtime_date_end) + " " + overtime_time_end;

  window.get_overtime_hours = Overtime_GetDateDiff(overtime_start_format, overtime_end_format, "hour");

  var total_remain_hours = parseFloat(parseFloat(r_annual_hours) + parseFloat(r_comp_hours)).toFixed(1);

  // console.log(parseFloat(get_overtime_hours).toFixed(1))
  // console.log(total_remain_hours)
  // console.log(get_overtime_hours)

  console.log(overtime_start_format);
  console.log(overtime_end_format)

  if(get_overtime_hours > 0)
  {
    if(parseFloat(total_remain_hours - get_overtime_hours).toFixed(1) >= 0)
    {
      var update_remain_hours_str = "";

      window.use_remain_hours_arr = count_use_remain_hours(parseFloat(get_overtime_hours).toFixed(1));

      // console.log(use_remain_hours_arr[0])
      // console.log(use_remain_hours_arr[1])
      // console.log(use_remain_hours_arr[2])
      // console.log(use_remain_hours_arr[3])

      update_remain_hours_str = '<br/><br/>剩餘補休時數： ' + use_remain_hours_arr[0] + '<br/>' + 
      '剩餘特休時數： '+ use_remain_hours_arr[1] + '<br/><br/>' + 
      '已使用的補休時數： ' + use_remain_hours_arr[2] + '<br/>' + 
       '已使用的特休時數： ' + use_remain_hours_arr[3] + '<br/><br/>';

      $("#overtime_hours_hit").html(update_remain_hours_str);

      var overtime_hours_show = parseFloat(get_overtime_hours).toFixed(1);

      if(overtime_hours_show - 24.0 >= 0)
      {
        var days_num = parseInt(overtime_hours_show / 24);
        var hours_num = parseInt(overtime_hours_show % 24);
        $("#overtime_hours_count").html("請假時數：共" + days_num + "日" + hours_num + "時");
      }
      else
      {
        $("#overtime_hours_count").html("請假時數：共0日" + overtime_hours_show + "時");
      }
    }
    else
    {
      swal({
        title: "使用的請假時數不可超過剩餘的補/特休時數",
        text: "請假時數請小於" + total_remain_hours + "小時",
        type: "warning",
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "確認",
        showConfirmButton: true,
      })
    }
  }
  else
  {
    // swal({
    //   title: "請假結束日期不可小於開始日期",
    //   type: "warning",
    //   confirmButtonColor: "#DD6B55",
    //   confirmButtonText: "確認",
    //   showConfirmButton: true,
    // })
  }
  
}
// endregion

//監聽 請假日期欄位值變化，計算請假時數 region
$("input[overtime*='overtime']").change( function(event) {
  update_remain_hours();
});
// endregion

//修改請假紀錄 region
$("#day_update").on("click", function () {
  var stau = false;

  if (check_day_off_data() != "以下為必填欄位，不能為空值!\r\n") {
    stau = false;
  } else {
    stau = true;
  }
  // console.log(stau);

  if (!stau) {
    swal({
      title: check_day_off_data(),
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

  var rec_year = $("#overtime_date_start").val().split("年")[0];

  console.log(timenow);
  console.log(rec_year);

  var form_data = new FormData();

  $("input[type='file']").each(function(index, element) {
      var day_off_file = $(this).prop("files");

      if (day_off_file != undefined) {
        if (day_off_file.length != 0) {
          for (var i = 0; i < day_off_file.length; i++) {
            form_data.append("day_off_file"+index, day_off_file[i]);
            // console.log(day_off_file[i])
          }
        } 
      }
  });

  // form_data.append("Resume_id", );
  // form_data.append("Resume_name", );
  form_data.append("Rec_year", rec_year);
  form_data.append("Fillin_date", timenow);

  form_data.append("Day_off_type", deal_type($("[name='day_off_type']:checked").val()));
  form_data.append("Reason", $("#reason").val());

  form_data.append("Overtime_date_start",$("#overtime_date_start").val() + "_" + $("#overtime_time_start").val());
  form_data.append("Overtime_date_end",$("#overtime_date_end").val() + "_" + $("#overtime_time_end").val());
  form_data.append("Overtime_hours", get_overtime_hours);
  // form_data.append("Makeup_date_desc", );


  form_data.append("Remain_comp_hours", use_remain_hours_arr[0]);
  form_data.append("Remain_annual_hours", use_remain_hours_arr[1]);
  form_data.append("Used_comp_hours", use_remain_hours_arr[2]);
  form_data.append("Used_annual_hours", use_remain_hours_arr[3]);


  form_data.append("Supervise",$("#supervise").val());
  form_data.append("Job_agent",$("#job_agent").val());

  // 預覽傳到後端的資料詳細內容
  // for (var pair of form_data.entries()) {
  //   console.log(pair[0] + ", " + pair[1]);
  // }


  $.ajax({
      url: "database/add_new_day_off.php",
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
              "day_off.php";
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
          update_allow_status(day_off_id, this_val);
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
update_allow_status = function(day_off_id_str, allow_status_str) {
  
  $.ajax({
    url: "database/update_day_off_data_allow_status.php",
    type: "POST",
      data: {
        Day_off_id:day_off_id_str,
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
            "day_off_detail.php?" + 
            "day_off_id=" + day_off_id +
            "&resume_id=" + resume_id;
        });
      } 
      else if(data.includes("noallow"))
      {
        swal({
          type: 'error',
          title: '您無權限修改該筆請假紀錄',
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
revoke_day_off = function() {

  swal({
    title: "確定要撤銷該請假申請？\t\n按下『確認』後將刪除該筆請假紀錄，並且無法復原",
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
          revoke_day_off_submit();
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
revoke_day_off_submit = function() {
  $.ajax({
    url: "database/delete_day_off_data_detail.php",
    type: "POST",
      data: {
        Day_off_id:day_off_id,
        Resume_id:resume_id,
      },
    // dataType: "JSON", // 若要傳回字串 如：noallow，不可設定為json格式
    success: function (data) {
      console.log(data);
      if (data == 1) 
      {
        swal({
          type: "success",
          title: "撤銷請假紀錄成功!",
          allowOutsideClick: false, //不可點背景關閉
        }).then(function () {
          window.location.href =
            "day_off.php";
        });
      } 
      else if(data.includes("noallow"))
      {
        swal({
          type: 'error',
          title: '您無權限刪除該筆請假紀錄',
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
          title: "撤銷請假紀錄失敗!請聯絡負責人",
          allowOutsideClick: false, //不可點背景關閉
        });
      }
    },
    error: function (e) {
      console.log(e)
      swal({
          type: "error",
          title: "撤銷請假紀錄失敗!請聯絡負責人",
          allowOutsideClick: false, //不可點背景關閉
      });
    },
  });
}
// endregion

//檢查必填欄位 region
function check_day_off_data() {
  var errorstr = "以下為必填欄位，不能為空值!\r\n";

  $(".fillin_need").each(function(index,element){

    var check_element = $(this).parent("td").siblings("td").children()[0];
    var check_element_name = $(this).parent("td").text();

    // console.log($(check_element).val())

    var check_element_tagname = $(check_element).prop("tagName");
    var check_element_type = $(check_element).attr("type");

    if(check_element_tagname == "INPUT" && check_element_type=="file")
    {
      var file_len = $(check_element).prop("files").length;

      if(file_len == 0)
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

// 處理假別字串 region
deal_type = function(day_off_type) {

  var type_str = "";

  if(day_off_type == "其它")
  {
    type_str = day_off_type + "::" + $("[name='day_off_type_other']").val();
  }
  else
  {
    type_str = day_off_type;
  }

  return type_str;
}
// endregion

// 顯示檔名 region
$("input[type='file']").change(function (event) {
  //獲取 檔名.檔案格式
  var filePath = $(this).val().split("\\");
  //獲取 file name名稱
  var name = $(this).attr("name");

  //創建臨時檔案連結
  // var tmppath = URL.createObjectURL(event.target.files[0]);

  //預覽上傳檔名
  $("#" + name).html("檔名：" + filePath[filePath.length - 1]);

});
// endregion

// 獲取檔案的檔名、值 region
get_files_name_value = function() {

  file_name = [];
  $("input[type='file']").each(function() {
    //獲取 檔名.檔案格式
    var filePath = $(this).val().split("\\");
    //獲取 file name名稱
    var name = $(this).attr("name");
    
    file_name.push({ name: name, value: filePath[filePath.length - 1] });
 });

 return file_name;
}
// endregion

//呼叫user方法region
function append_user(){             
  $.ajax({
      type:'POST',
      url:'database/find_check_user.php',
      dataType: "JSON",
      async: false,//啟用同步請求
      success: function (data) {
          // console.log('test',data)
          for (var index in data.Id) {
            $("#job_agent").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            $("#supervise").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
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
  var day_off_id = getUrlVars()["day_off_id"];
  //    console.log(id);
  location.href = "preview_word.php?day_off_id=" + day_off_id + "";
});

$("#preview_word2").on("click", function () {
  var day_off_id = getUrlVars()["day_off_id"];
  //    console.log(id);
  location.href = "preview_word2.php?day_off_id=" + day_off_id + "";
});
//endregion
