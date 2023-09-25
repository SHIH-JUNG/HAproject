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

// 民國年轉換日期格式yyyy-dd-mm region
function split_date(date) {
  // console.log(date)
  return parseInt(date.split("年")[0])+1911+"-"+date.split("年")[1].split("月")[0]+"-"+date.split("年")[1].split("月")[1].split("日")[0]; 
}
//endregion

// 載入時間選擇器 region
load_datepicker = function() {
  //將input name名稱為ch_datepicker創建datepicker初始化 region
  $("input[name='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion
}
//endregion

$(document).ready(function () {
  
  load_datepicker();

  // 載入全部user至下拉式選單
  append_user();

  //顯示剩餘可補休的時數
  load_remain_hours();

  // console.log("剩餘補休時數："+r_comp_hours);
  // console.log("剩餘特休時數： "+r_annual_hours);
});

// 重製請假日期欄位及清空時數計算 region
reset_count_hours = function() {

  $("#overtime_date_start").val('');
  $("#overtime_date_end").val('');
  $("#overtime_time_start_h").val('8');
  $("#overtime_time_start_m").val('00');
  $("#overtime_time_end_h").val('8');
  $("#overtime_time_end_m").val('00');

  load_remain_hours();

}
//endregion

// 網頁載入時，查詢當前帳號登入者的可使用的補/特休時數 region
load_remain_hours = function() {

  //剩餘補休
  window.r_comp_hours = 0;
  //剩餘特休
  window.r_annual_hours = 0;
  //已用補休
  window.u_comp_hours = 0;
  //已用特休
  window.u_annual_hours = 0;
  //今年請假時數
  window.leave_hours = 0;
  //存放資料庫原始現有剩餘/已用 特/補休時數
  window.o_use_remain_hours_arr = [];

  var load_remain_hours_str = "";

    $.ajax({
      url: "database/find_day_off_remain_hours.php",
      type: "POST",
      dataType: "JSON",
      async: false,//啟用同步請求
      success: function (data) {
        
        // console.log(data)

        $.each(data, function (index, value) {

          // 根據type計算 今年的可用補休、可用特休、已請假時數
          switch (value.Type) {
            case "Annual_default":
              r_annual_hours = Number(value.Annual_default) + r_annual_hours;
              break;
          
            case "Annual_hours":
              r_annual_hours = Number(value.Change_num) + r_annual_hours;
              break;

            case "Comp_hours":
              r_comp_hours = Number(value.Change_num) + r_comp_hours;
              break;
            case "Leave":
              leave_hours = Number(value.Change_num) + leave_hours;
              break;
          }

        });

      },
      error:function(e){
          notyf.alert('伺服器錯誤,無法載入');
          console.log(e)
      }
  });

  // 統計今年總請假時數
  o_use_remain_hours_arr = count_use_remain_hours(parseFloat(leave_hours).toFixed(1), true);

  // console.log("lh:"+leave_hours)
  // console.log(o_use_remain_hours_arr[0])
  // console.log(o_use_remain_hours_arr[1])
  // console.log(o_use_remain_hours_arr[2])
  // console.log(o_use_remain_hours_arr[3])

  load_remain_hours_str = '<br/><br/>剩餘補休時數： ' + parseFloat(o_use_remain_hours_arr[0]).toFixed(1) + '<br/>' + 
  '剩餘特休時數： '+ parseFloat(o_use_remain_hours_arr[1]).toFixed(1) + '<br/><br/>' + 
  '已使用的補休時數： 0.0<br/>' + 
  '已使用的特休時數： 0.0<br/><br/>';
  // '已使用的補休時數： '+ parseFloat(o_use_remain_hours_arr[2]).toFixed(1) + '<br/>' + 
  //  '已使用的特休時數：： '+ parseFloat(o_use_remain_hours_arr[3]).toFixed(1) + '<br/><br/>';

  // 剩餘/已用 特/補休時數 顯示在網頁上提示
  $("#overtime_hours_hit").html(load_remain_hours_str);

}
// endregion

// 計算已使用及剩餘補/特休時數 region
function count_use_remain_hours(overtime_hours, isfirst) {

  var rch = 0;
  var rah = 0;

  // 判斷是否為 初次載入網頁計算true、觸發更改請假日期欄位自動計算false
  if(isfirst)
  {
    rch = r_comp_hours;
    rah = r_annual_hours;
  }
  else
  {
    // 若為請假日期欄位觸發自動計算方式，則使用第一次載入網頁已計算的值
    rch = o_use_remain_hours_arr[0];
    rah = o_use_remain_hours_arr[1];
  }

  var use_annual_hours = 0;
  var use_comp_hours = 0;

  var remain_annual_hours = 0;
  var remain_comp_hours = 0;

  var count_hours_arr = new Array();

  // 請假時數大於等於剩餘補休時數，剩餘補休時數會用完，需要使用到剩餘特休時數
  if(parseFloat(overtime_hours) - parseFloat(rch) >= 0)
  {
    use_comp_hours = parseFloat(rch).toFixed(1);
    use_annual_hours = parseFloat(parseFloat(overtime_hours) - parseFloat(rch)).toFixed(1);

    remain_comp_hours = parseFloat(parseFloat(rch) - parseFloat(use_comp_hours)).toFixed(1);
    remain_annual_hours = parseFloat(parseFloat(rah) - parseFloat(use_annual_hours)).toFixed(1);

  }// 請假時數小於剩餘補休時數，先扣除剩餘補休時數，剩餘特休時數不扣除
  else if(parseFloat(overtime_hours) - parseFloat(rch) < 0)
  {
    use_comp_hours = parseFloat(overtime_hours).toFixed(1);
    use_annual_hours = 0.0;

    remain_comp_hours = parseFloat(parseFloat(rch) - parseFloat(use_comp_hours)).toFixed(1);
    remain_annual_hours = parseFloat(rah).toFixed(1);
  }

  //存放計算變動的 剩餘/已用 特/補休時數
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
update_remain_hours = function(get_overtime_hours) {

  var get_disposal_type = $("[name='disposal_type']:checked").val();

  var total_remain_hours = parseFloat(parseFloat(r_annual_hours) + parseFloat(r_comp_hours)).toFixed(1);

  // console.log(parseFloat(get_overtime_hours).toFixed(1))
  // console.log(total_remain_hours)
  // console.log(get_overtime_hours)

  // console.log(overtime_start_format);
  // console.log(overtime_end_format);
  if(get_disposal_type == "扣時數") //扣薪處理，顯示特休/補休時數，請假時數
  {
    if(get_overtime_hours > 0)
    {
      // 判斷請假時數是否大於當前剩餘的特/補休時數，大於則無法請假跳出提示
      if(parseFloat(total_remain_hours - get_overtime_hours).toFixed(1) >= 0)
      {
  
        var update_remain_hours_str = "";
  
        // 獲取扣完請假時數後的 剩餘/已用 特/補休時數
        window.use_remain_hours_arr = count_use_remain_hours(parseFloat(get_overtime_hours).toFixed(1), false);
  
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
  }
  else //除了扣薪的其他處理，只顯示請假時數
  {
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

  // else if(get_overtime_hours > 8)
  // {
  //   swal({
  //     title: "使用的請假時數不可超過一天的時數",
  //     type: "warning",
  //     confirmButtonColor: "#DD6B55",
  //     confirmButtonText: "確認",
  //     showConfirmButton: true,
  //   })
  // }
  // else
  // {
  //   swal({
  //     title: "請假結束日期不可小於開始日期",
  //     type: "warning",
  //     confirmButtonColor: "#DD6B55",
  //     confirmButtonText: "確認",
  //     showConfirmButton: true,
  //   })
  // }
  
}
// endregion

//檢查SQL撈出來的日期格式 region
check_sql_date_format = function (date) {
  if (date == "0000-00-00") {
    date = "";
  } else {
    date = trans_to_Tw(date);
  }

  return date;
};
// endregion

//監聽 根據選擇 扣時數、扣薪、不做處理，顯示前端輸入框內容和時數計算設定 region
$("[name='disposal_type']").on('change',function(){
  reset_count_hours();
});
// endregion


//監聽 根據選擇 半天、整天、多天假，顯示前端輸入框內容 region
$("[name='hours_type']").on('change',function(){
  var this_val = this.value;

  var horus_type_count_html_str = '';

  switch (this_val) {
    case "半天假":
      horus_type_count_html_str = 
      '<input id="overtime_date_start" name="ch_datepicker" type="text" overtime="overtime">&emsp;&emsp;' +
      // '<input style="margin-left: 1em;" id="overtime_time_start"  type="time" overtime="overtime">&emsp;至&emsp;' +
      // '<input style="margin-left: 1em;" id="overtime_time_end"  type="time" overtime="overtime">&emsp;止' +
      '<select id="overtime_time_start_h" overtime="overtime"></select>：' +
      '<select id="overtime_time_start_m" overtime="overtime">' +
      '<option value="00">00</option>' +
      '<option value="30">30</option>' +
      '</select>&emsp;至&emsp;' +
      '<select id="overtime_time_end_h" overtime="overtime"></select>：' +
      '<select id="overtime_time_end_m" overtime="overtime">' +
      '<option value="00">00</option>' +
      '<option value="30">30</option>' +
      '</select>&emsp;止' +
      '<button style="margin:.5em;margin-left:1em;color:blue;" type="button" onclick="reset_count_hours();">重製</button>' +
      '<br/><br/>';
      break;
  
    case "整天假":
      horus_type_count_html_str = 
      '<input id="overtime_date_start" name="ch_datepicker" type="text" overtime="overtime">' +
      '<br/><br/>';
      break;

    case "多天假":
      horus_type_count_html_str = 
      '自&emsp;<input id="overtime_date_start" name="ch_datepicker" type="text" overtime="overtime">&emsp;&emsp;' +
      // '<input style="margin-left: 1em;" id="overtime_time_start"  type="time" overtime="overtime"><br/><br/>至&emsp;' +
      '<select id="overtime_time_start_h" overtime="overtime"></select>：' +
      '<select id="overtime_time_start_m" overtime="overtime">' +
      '<option value="00">00</option>' +
      '<option value="30">30</option>' +
      '</select><br/>至&emsp;' +
      
      '<input id="overtime_date_end" name="ch_datepicker" type="text" overtime="overtime">&emsp;&emsp;' +
      // '<input style="margin-left: 1em;" id="overtime_time_end"  type="time" overtime="overtime">&emsp;止' +
      '<select id="overtime_time_end_h" overtime="overtime"></select>：' +
      '<select id="overtime_time_end_m" overtime="overtime">' +
      '<option value="00">00</option>' +
      '<option value="30">30</option>' +
      '</select>&emsp;止' +

      '<button style="margin:.5em;margin-left:1em;color:blue;" type="button" onclick="reset_count_hours();">重製</button>' +
      '<br/><br/>';
      break;
  }

  $("#horus_type_count_area").html(horus_type_count_html_str);
  
  // 重新載入日期、時間選擇器
  load_datepicker();
  load_time_picker();
});
// endregion

//監聽 請假日期欄位值變化，計算請假時數 region
$(document).on('change', "[overtime*='overtime']",function(){
// $("[overtime*='overtime']").change( function() {

  var get_hours_type = $("[name='hours_type']:checked").val();

  window.overtime_date_arr = [];

  //獲取 請假日期 四個時間欄位的值
  var overtime_date_start = '';
  var overtime_date_end = '';
  var overtime_time_start = '';
  var overtime_time_end = '';

  switch (get_hours_type) {
    case "半天假":
      overtime_date_start = $("#overtime_date_start").val();
      overtime_date_end = overtime_date_start;
      overtime_time_start = $("#overtime_time_start_h").val() + ":" + $("#overtime_time_start_m").val();
      overtime_time_end = $("#overtime_time_end_h").val() + ":" + $("#overtime_time_end_m").val();
      
      break;
  
    case "整天假":
      overtime_date_start = $("#overtime_date_start").val();
      overtime_date_end = overtime_date_start;
      overtime_time_start = '8:30';
      overtime_time_end = '17:30';
      break;

    case "多天假":
        overtime_date_start = $("#overtime_date_start").val();
        overtime_date_end = $("#overtime_date_end").val();
        overtime_time_start = $("#overtime_time_start_h").val() + ":" + $("#overtime_time_start_m").val();
        overtime_time_end = $("#overtime_time_end_h").val() + ":" + $("#overtime_time_end_m").val();
      
      break;
  }

  overtime_date_arr.push(overtime_date_start)
  overtime_date_arr.push(overtime_date_end)
  overtime_date_arr.push(overtime_time_start)
  overtime_date_arr.push(overtime_time_end)

    
  var overtime_start_format = split_date(overtime_date_start) + " " + overtime_time_start;
  var overtime_end_format = split_date(overtime_date_end) + " " + overtime_time_end;

  // console.log(overtime_start_format)
  // console.log(overtime_end_format)

  // 根據請假欄位計算總請假時數
  // window.get_overtime_hours = Overtime_GetDateDiff(overtime_start_format, overtime_end_format, "hour");
  window.get_overtime_hours = getHour(overtime_start_format, overtime_end_format);

  update_remain_hours(get_overtime_hours);
  // console.log(get_overtime_hours);
});
// endregion

load_time_picker = function() {
  var work_hs = 8;
  var work_he = 17;

  for (var i = work_hs; i <= work_he; i++)
  {
    $("#overtime_time_start_h").append('<option value="'+i+'">'+i+'</option>');
    $("#overtime_time_end_h").append('<option value="'+i+'">'+i+'</option>');
  }
}

//新增請假紀錄 region
$("#day_off_add_new").on("click", function () {
  var stau = false;

  // console.log(check_day_off_data())

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
    swal({
      title: "選擇『確認送出』後，將無法再修改資料",
      text: "請再次確認欄位是否皆填寫無誤",
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
            // console.log(check_day_off_status());
            // 若已經有請假申請審核中，則不能請假
            if(check_day_off_status())
            {
              swal({
                title: "目前還有請假申請審核中，時數尚未實際認列",
                type: "warning",
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "確認",
                showConfirmButton: true,
              })
            }
            else
            {
              submit_form();
            }
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
});
//endregion

check_day_off_status = function() {

  var status = true;

  $.ajax({
    url: "database/find_data_day_off.php",
    data:{
      find_allow_status:true,
    },
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        
      // console.log(data)

      if(data.length == 0)
      {
        status = false;
      }
      else
      {
        status = true;
      }
      
    },
    error:function(e){
        notyf.alert('伺服器錯誤,無法載入');
        console.log(e)
    }
  });

  return status;
}


// 處理送出的值 region
function submit_form() {
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
  if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
  }
  });

  var get_disposal_type = $("[name='disposal_type']:checked").val();

  //Time Now
  var timenow = moment().format('YYYY-MM-DD');

  var rec_year = $("#overtime_date_start").val().split("年")[0];

  // console.log(timenow);
  // console.log(rec_year);

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
  form_data.append("Disposal_type", $("[name='disposal_type']:checked").val());
  form_data.append("Hours_type", $("[name='hours_type']:checked").val());

  // form_data.append("Overtime_date_start",$("#overtime_date_start").val() + "_" + $("#overtime_time_start").val());
  // form_data.append("Overtime_date_end",$("#overtime_date_end").val() + "_" + $("#overtime_time_end").val());
  form_data.append("Overtime_date_start", overtime_date_arr[0] + "_" + overtime_date_arr[2]);
  form_data.append("Overtime_date_end", overtime_date_arr[1] + "_" + overtime_date_arr[3]);
  form_data.append("Overtime_hours", get_overtime_hours);
  // form_data.append("Makeup_date_desc", );

  if(get_disposal_type == "扣時數")
  {
    form_data.append("Remain_comp_hours", use_remain_hours_arr[0]);
    form_data.append("Remain_annual_hours", use_remain_hours_arr[1]);
    form_data.append("Used_comp_hours", use_remain_hours_arr[2]);
    form_data.append("Used_annual_hours", use_remain_hours_arr[3]);
  }
  else
  {
    form_data.append("Remain_comp_hours", o_use_remain_hours_arr[0]);
    form_data.append("Remain_annual_hours", o_use_remain_hours_arr[1]);
    form_data.append("Used_comp_hours", parseFloat(0).toFixed(1));
    form_data.append("Used_annual_hours", parseFloat(0).toFixed(1));
  }

  form_data.append("Job_agent",$("#job_agent").val());
  form_data.append("Director",$("#director").val());
  form_data.append("Supervise",$("#supervise").val());


  form_data.append("title", '請假單簽核：' + user_name + " " + deal_type($("[name='day_off_type']:checked").val()));
  form_data.append("signer", $("#job_agent").val() + "、" + $("#director").val() + "、" + $("#supervise").val());
  form_data.append("rec_date_time", timenow +" 00:00");

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
        // console.log(data);
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

//檢查必填欄位 region
function check_day_off_data() {
  var errorstr = "以下為必填欄位，不能為空值!\r\n";

  $(".fillin_need").each(function(index,element){

    var check_element = $(this).parent("td").siblings("td").children()[0];
    var check_element_name = $(this).parent("td").text();

    // console.log($(check_element))
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
    else if(check_element_tagname == "INPUT" && check_element_type=="radio")
    {
      var check_element_children_name = $(this).parent("td").siblings("td").children().attr("name");

      if($('[name="'+check_element_children_name+'"]:checked').length==0)
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
            $("#director").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
          }
      },
  });
}
//endregion
