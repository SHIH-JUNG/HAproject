//取得url id值region
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
}
//endregion

const notyf = new Notyf();

var resume_id = getUrlVars()["id"];

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
  // $("#" + selector_id).datepicker("setDate", "today");
};
//endregion

// 民國年轉換日期格式yyyy-dd-mm region
function split_date(date) {
  return parseInt(date.split("年")[0]) + 1911 + "-" + date.split("年")[1].split("月")[0] + "-" + date.split("年")[1].split("月")[1].split("日")[0];
}
//endregion

// 計算年資 (今天-到職日) region
let DateDifference = function (date1, date2) { // date1 和 date2 是 2016-06-18 格式
  // console.log(date1)
  // console.log(date2)
  let strDate, oDate1, oDate2, result
  strDate = date1.split("-");
  oDate1 = new Date(strDate[1] + '-' + strDate[2] + '-' + strDate[0]);
  strDate = date2.split("-");
  oDate2 = new Date(strDate[1] + '-' + strDate[2] + '-' + strDate[0]);
  result = parseFloat(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24 / 365).toFixed(2); // 把相差的毫秒數轉換為天數
  return result;
};
//endregion

//將日期轉為民國年格式111年03月07日 region
trans_to_Tw = function (endate) {

  var strDate = endate.split(" ");
  var strAry = strDate[0].split("-");

  if (parseInt(strAry[0]) > 1911) {
    strAry[0] = parseInt(strAry[0]) - 1911;
  }

  return strAry[0] + "年" + strAry[1] + "月" + strAry[2] + "日";
};
//endregion

window.file_year_arr = new Array();

window.the_day = new Date();

window.this_year = the_day.getFullYear() - 1911;

// 存放檔案名稱
window.file_name = [];

//網頁載入 region
$(document).ready(function () {

  if(resume_id == '')
  {
    swal({
      type: "error",
      title: "當前使用者帳號未創建履歷表檔案",
      text: "請先創建您的履歷表檔案資料",
      allowOutsideClick: false, //不可點背景關閉
    }).then(function () {
      // window.history.go(-1);
      window.location.href = 'add_resume.php';
    });
  }

  //將input name名稱為ch_datepicker創建datepicker初始化 region
  $("input[name='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion

  tab_toggle();

  load_files();

  load_resume_datas();

  $("#update_hours").val(0); 

  calculate_annual_hours_diff();

  load_remain_hours();
});

calculate_annual_hours_diff = function () {
  var origin_hours = $("#update_origin_hours").attr("origin_num");

  var diff_hours = $("#update_hours").val();

  var updated_hours = (parseFloat(origin_hours) + parseFloat(diff_hours)).toFixed(1);

  if (isNaN(updated_hours)) {
    $("#update_hours_hit").html("請輸入合法數字");
  }
  else {
    $("#update_hours_hit").html("");
    $("#update_origin_hours").val(updated_hours);
  }
}

$('#update_hours').on('keyup', function () {
  calculate_annual_hours_diff();
});

function load_files() {
  $.ajax({
    url: "database/find_resume_forms_data_detail.php",
    data: {
      Resume_id: resume_id,
    },
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
      // console.log(data)

      if (data.length == 0) {
        file_year_arr.push(this_year);
      }
      else {
        $.each(data, function (index, value) {
          file_year_arr.push(value.File_year);
          // file_year_arr.push(value.Year);
        });
      }

      // 從小到大排序
      // file_year_arr.sort((a, b) => a - b)
      // 從大到小排序
      file_year_arr.sort((a, b) => b - a)
    },
    error: function (e) {
      notyf.alert('伺服器錯誤,無法載入');
      console.log(e)
    }
  });


  // console.log(file_year_arr)

  // console.log(file_year_arr[0])
  // console.log(file_year_arr[file_year_arr.length - 1])

  window.file_year_min = parseInt(file_year_arr[file_year_arr.length - 1]);
  // window.file_year_max = parseInt(file_year_arr[file_year_arr.length - 1]);

  var count = this_year - file_year_min;
  var tab_str = "";

  // console.log(count);

  for (var i = 0; i <= count; i++) {
    tab_str += '<tr id="' + (this_year - i) + '">'
      + '<td>' + (this_year - i) + '</td>'

      + '<td>'
      + '<div class="col-sm-8">'
      + '<div class="text-left">'
      + '<input name="employment_contract_' + (this_year - i) + '" type="file" class="resume_forms_question' + (this_year - i) + ' form-control"/>'
      + '<br/>'
      + '<div id="employment_contract_' + (this_year - i) + '"></div>'
      + '</div>'
      + '</div>'
      + '</td>'

      + '<td>'
      + '<div class="col-sm-8">'
      + '<div class="text-left">'
      + '<input name="PA_file_' + (this_year - i) + '" type="file" class="resume_forms_question' + (this_year - i) + ' form-control"/>'
      + '<br/>'
      + '<div id="PA_file_' + (this_year - i) + '"></div>'
      + '</div>'
      + '</div>'
      + '</td>'

      + '<td>' + '<textarea style="height:150px;width:100%;resize: none;font-size: 20px;" name="remark_' + (this_year - i) + '" class="resume_forms_question' + (this_year - i) + '" placeholder="備註"></textarea>' + '</td>'
      + '<td>'
      + '<div id="edit_div' + (this_year - i) + '">'
      + '<button style="font-size:20px" id="resume_forms_edit' + (this_year - i) + '" class="btn btn-default" onclick="resume_forms_edit(' + (this_year - i) + ');">編輯</button>'
      + '</div>'
      + '<div id="save_div' + (this_year - i) + '" hidden>'
      + '<button style="font-size:20px" onclick="update_row(' + (this_year - i) + ')" class="btn btn-default">修改</button><br/><br/>'
      + '<button style="font-size:20px" id="resume_forms_cancel' + (this_year - i) + '" class="btn btn-default" onclick="resume_forms_cancel(' + (this_year - i) + ');">取消</button>'
      + '</div>'
      + '</td>'
      + '</tr>';


  }

  $("#all_files").html(tab_str);

  $('[class^=resume_forms_question]').attr('disabled', true);
}

function load_resume_datas() {
  $.ajax({
    url: "database/find_resume_user_data_detail.php",
    data: {
      Resume_id: resume_id,
    },
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
      // console.log(data)

      $.each(data, function (index, value) {
        $("#account").text(value.Account);
        // $("#user_name").val(value.Name);
        $("#user_name").text(value.Name);
        $("#email").val(value.Email);
        $("#entry_date").val(value.Entry_date);

        $("#seniority_num").val(value.Seniority);
        // $("#annual_hours").val(value.Annual_hours);
        // $("#leave_hours").val(value.Leave_hours);
        // $("#overtime_hours").val(value.Overtime_hours);
        // $("#comp_hours").val(value.Comp_hours);

        $("#update_origin_hours").val(value.Annual_hours);
        $("#update_origin_hours").attr("origin_num", value.Annual_hours)

        $("#resigned_date").val(value.Resigned_date);
        $("#on_or_off").val(value.On_or_off);
        $("#remark").val(value.Remark);

        var employee_name = value.Name || "---";
        var entry_date = value.Entry_date || "---年--月--日";

        $(".employee_name").text(employee_name);
        $(".entry_date").text(entry_date);
      });



    },
    error: function (e) {
      notyf.alert('伺服器錯誤,無法載入');
      console.log(e)
    }
  });

  $.ajax({
    url: "database/find_resume_forms_data_detail.php",
    data: {
      Resume_id: resume_id,
    },
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
      // console.log(data.length)

      var this_year_file_upload_num = 0;
      var recently_upload_date = "---年--月--日";

      $.each(data, function (index, value) {

        if (parseInt(value.File_year) == this_year) {
          this_year_file_upload_num += 1;
        }

        if (index == (data.length - 1)) {
          recently_upload_date = trans_to_Tw(value.Update_date);
        }


        switch (value.File_type) {
          // 履歷表檔案
          case "file_A":
            var file_a_arr = value.File_path.replace("\[", "").replace("\]", "").replace(/\"/g, "").split(",");

            // console.log(file_a_arr)

            window.file_a_input_val_arr = [];

            var file_a_htmlstr = "";

            $.each(file_a_arr, function (i, val) {

              var resume_file_path = val.replace("../", "./");
              var resume_file_name = val.split("/");

              var resume_file_val = resume_file_name[resume_file_name.length - 1];

              file_a_input_val_arr.push(val);

              file_a_htmlstr += '<input class="resume_question" style="zoom: 1.5" class="form-check-input" type="radio" name="file_a_check" forms_sql_id="' + value.Id + '" value="' + i + '">'
                + '<span>檔案' + (i + 1) + '：</span><a id="val_arr'+i+'" href="' + resume_file_path + '" style="text-decoration:none;color:blue;" target="_blank">'
                + resume_file_val
                + '</a><br/><br/>';
            });

            file_a_htmlstr += '<br/>'
              + '<button class="resume_question" style="color:red;margin-right:3em;margin-bottom:.5em;" type="button" onclick="selectFiles_delete();">刪除</button>'
              + '<div>※點選上面要刪除的檔案</div>'
              + '<br/><hr style="border:3px dashed blue; height:1px">'
              + '<button class="resume_question" style="color:blue;" type="button" onclick="selectFiles_insert();">新增檔案+</button><br/><div id="selected-files"><span style="color:red;">上傳檔案清單預覽：</span><br/></div>';

            // $("[name='resume_file']").attr("value", file_a_input_val_arr);

            // console.log(file_a_input_val_arr)

            $("#resume_file").html(file_a_htmlstr);

            break;
          // 雇傭契約
          case "file_B":
            var resume_file_path = value.File_path.replace("../", "./");
            var resume_file_name = value.File_path.split("/");
            $("[name='employment_contract_" + value.File_year + "']").attr("value", resume_file_name[resume_file_name.length - 1]);
            $("#employment_contract_" + value.File_year + "").html(
              '<a href="' + resume_file_path + '" style="text-decoration:none;color:blue;" target="_blank">'
              + resume_file_name[resume_file_name.length - 1]
              + '</a>');
            $("[name='remark_" + value.File_year + "']").val(value.Remark);
            break;
          // 保密契約
          case "file_C":
            var resume_file_path = value.File_path.replace("../", "./");
            var resume_file_name = value.File_path.split("/");
            $("[name='nda_file']").attr("value", resume_file_name[resume_file_name.length - 1]);
            $("#nda_file").html(
              '<a href="' + resume_file_path + '" style="text-decoration:none;color:blue;" target="_blank">'
              + resume_file_name[resume_file_name.length - 1]
              + '</a>');
            break;
          // 畢業證書
          case "file_D":
            var resume_file_path = value.File_path.replace("../", "./");
            var resume_file_name = value.File_path.split("/");
            $("[name='diploma_file']").attr("value", resume_file_name[resume_file_name.length - 1]);
            $("#diploma_file").html(
              '<a href="' + resume_file_path + '" style="text-decoration:none;color:blue;" target="_blank">'
              + resume_file_name[resume_file_name.length - 1]
              + '</a>');
            break;
          // 考績檔案
          case "file_E":
            var resume_file_path = value.File_path.replace("../", "./");
            var resume_file_name = value.File_path.split("/");
            $("[name='PA_file_" + value.File_year + "']").attr("value", resume_file_name[resume_file_name.length - 1]);
            $("#PA_file_" + value.File_year + "").html(
              '<a href="' + resume_file_path + '" style="text-decoration:none;color:blue;" target="_blank">'
              + resume_file_name[resume_file_name.length - 1]
              + '</a>');
            $("[name='remark_" + value.File_year + "']").val(value.Remark);
            break;
        }

      });

      if(!$("#resume_file").html())
      {
        $("#resume_file").html(
              '<div>※目前無檔案</div>'
              + '<br/><hr style="border:3px dashed blue; height:1px">'
              + '<button class="resume_question" style="color:blue;" type="button" onclick="selectFiles_insert();">新增檔案+</button><br/><div id="selected-files"><span style="color:red;">上傳檔案清單預覽：</span><br/></div>'
        );
      }

      $(".this_year_file_upload_num").text(this_year_file_upload_num);
      $(".recently_upload_date").text(recently_upload_date);
    },
    error: function (e) {
      notyf.alert('伺服器錯誤,無法載入');
      console.log(e)
    }
  });


  $(".resume_question").attr("disabled", true);
}

// 查詢當前帳號登入者的今年度特休/請假/加班/可請假時數 region
load_remain_hours = function () {

  window.annual_hours = 0;
  window.comp_hours = 0;
  window.leave_hours = 0;
  window.remain_hours = 0;

  $.ajax({
    url: "database/find_resume_hours.php",
    data: {
      Resume_id: resume_id,
    },
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {

      // console.log(data)

      $.each(data, function (index, value) {


        switch (value.Type) {
          case "Annual_default":
            annual_hours += Number(value.Annual_default);
            break;

          case "Annual_hours":
            annual_hours += Number(value.Change_num);
            break;

          case "Comp_hours":
            comp_hours += Number(value.Change_num);
            break;

          case "Leave":
            leave_hours += Number(value.Change_num);
            break;
        }
      });
      // console.log(annual_hours)
      // console.log(comp_hours)
      // console.log(leave_hours)

      annual_hours = parseFloat(annual_hours).toFixed(1);
      comp_hours = parseFloat(comp_hours).toFixed(1);
      leave_hours = parseFloat(leave_hours).toFixed(1);

      remain_hours = parseFloat(parseFloat(annual_hours) + parseFloat(comp_hours) - parseFloat(leave_hours)).toFixed(1);

      $("#annual_hours").val(annual_hours);
      $("#leave_hours").val(leave_hours);
      $("#overtime_hours").val(comp_hours);
      $("#comp_hours").val(remain_hours);

    },
    error: function (e) {
      notyf.alert('伺服器錯誤,無法載入');
      console.log(e)
    }
  });



}
// endregion


resume_update = function () {

  var stau = false;

  if (check_updat_resume_user_data() != "") {
    stau = false;
  } else {
    stau = true;
  }

  if (!stau) {
    swal({
      title: check_updat_resume_user_data(),
      type: "error",
    });
  } else {

    //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
    $("input, textarea").each(function () {
      if ($(this).attr("type") != "file") {
        $(this).val(jQuery.trim($(this).val()));
      }
    });
    var form_data = new FormData();

    // var entry_date_year_split = $("#entry_date").val().split("年");
    var file_year = parseInt(new Date().getFullYear()) - 1911;

    // console.log(file_name)

    var get_resume_files = get_files_name_value();

    // var no_file_arr = [];

    var seniority_num = parseFloat(DateDifference(moment().format('YYYY-MM-DD'), split_date($("#entry_date").val())));

    var annual_default_hours = 0;

    // console.log( typeof seniority_num)
    // console.log(seniority_num)

    // 依據年資算出特休天數 region
    $.ajax({
      url: "database/find_leave_rule_table.php",
      type: "POST",
      dataType: "JSON",
      async: false,
      success: function (data) {
        // console.log(data);

        var leave_rule_arr = data[0].Rule_table_json.replace("\[", "").replace("\]", "").split(",");

        $.each(leave_rule_arr, function (index, value) {

          // 預設未滿六個月特休為0天
          if (seniority_num < 0.5) {
            annual_default_hours = 0.0;
          }
          else if (parseInt(seniority_num) == index) {
            num = value.replace("\"", "").replace("\"", "");

            annual_default_hours = parseFloat(num).toFixed(1);
          }

        });
      },
      error: function (e) {
        swal({
          type: "error",
          title: "系統錯誤!請聯絡負責人",
          allowOutsideClick: false, //不可點背景關閉
        }).then(function () {
          history.back();
        });
      },
    });
    //endregion

    // 將特休天數轉為時數單位
    annual_default_hours = parseFloat(annual_default_hours * 8).toFixed(1);

    $("input.resume_question[type='file']").each(function (index, element) {
      var resume_files = $(this).prop("files");

      console.log(resume_files.length)

      if (resume_files != undefined) {
        if (resume_files.length != 0) {
          for (var i = 0; i < resume_files.length; i++) {

            form_data.append("resume_files" + (index + 1 ), resume_files[i]);

            console.log(resume_files[i])
          }
        } else {
          //載入量表『無重新上傳檔案』情況下按儲存，則加入File_name供後端程式判斷
          form_data.append("File_name", JSON.stringify(get_resume_files));
        }
      }
    });

    console.log(selectedFiles)

    for (var a = 0; a < selectedFiles.length; a++) {
      form_data.append("resume_files0[]", selectedFiles[a]);
    }



    // 未選擇檔案的file陣列no_file_arr加入File_name變數供後端程式判斷
    // form_data.append("File_name", JSON.stringify(no_file_arr));

    form_data.append("Resume_id", resume_id);
    form_data.append("Account", $("#account").text());
    form_data.append("Name", $("#user_name").text());
    form_data.append("Email", $("#email").val());
    form_data.append("Entry_date", $("#entry_date").val());
    form_data.append("Resigned_date", $("#resigned_date").val());
    form_data.append("On_or_off", $("#on_or_off").val());
    form_data.append("Seniority", seniority_num);
    form_data.append("Annual_hours", annual_default_hours);
    form_data.append("Remark", $("#remark").val());
    form_data.append("File_year", file_year);

    // 預覽傳到後端的資料詳細內容
    for (var pair of form_data.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }


    $.ajax({
        url: "database/update_resume_user_data_detail.php",
        type: "POST",
        //   data: {
        //     Resume_id:resume_id,
        //   },
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
            title: "更新成功!",
            allowOutsideClick: false, //不可點背景關閉
          }).then(function () {
            window.location.href =
              "resume_detail_v2.php?"+
              "&id=" +
              resume_id +
              "";
          });
        } else {
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
}

function check_updat_resume_user_data() {
  // var user_name = $("#user_name").val();
  var entry_date = $("#entry_date").val();
  var on_or_off = $("#on_or_off").val();
  var resigned_date = $("#resigned_date").val();

  var errorstr = "";


  // if (user_name == null) {
  //   errorstr += "未填寫員工姓名!\r\n";
  // }
  if (entry_date == null) {
    errorstr += "未填寫入職日!\r\n";
  }
  if (on_or_off == "否") {
    if (resigned_date == null || resigned_date.replace(/\s*/g, "") == "") {
      errorstr += "在職狀態為否時，需填寫離職日期!\r\n";
    }
  }
  if (errorstr == "") {
    // if (user_name.replace(/\s*/g, "") == "") {
    //   errorstr += "未填寫員工姓名!\r\n";
    // }
    if (entry_date.replace(/\s*/g, "") == "") {
      errorstr += "未填寫入職日!\r\n";
    }
  }

  return errorstr;
}

update_row = function (row_year) {
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
    if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
    }
  });
  var form_data = new FormData();

  $("input.resume_forms_question" + row_year + "[type='file']").each(function (index, element) {
    var resume_forms_files = $(this).prop("files");

    if (resume_forms_files != undefined) {
      if (resume_forms_files.length != 0) {
        for (var i = 0; i < resume_forms_files.length; i++) {
          form_data.append("resume_forms_files" + index, resume_forms_files[i]);
          // console.log(resume_forms_files[i])
        }
      }
    }
  });

  form_data.append("Resume_id", resume_id);
  form_data.append("Account", $("#account").text());
  form_data.append("Name", $("#user_name").text());

  form_data.append("Remark", $("[name='remark_" + row_year + "']").val());
  form_data.append("File_year", row_year);


  // for (var pair of form_data.entries()) {
  //   console.log(pair[0] + ", " + pair[1]);
  // }


  $.ajax({
    url: "database/update_resume_forms_data_detail.php",
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
          title: "更新成功!",
          allowOutsideClick: false, //不可點背景關閉
        }).then(function () {
          window.location.href =
            "resume_detail_v2.php?" +
            "&id=" +
            resume_id +
            "";
        });
      } else {
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
get_files_name_value = function () {

  file_name = [];
  $("input[type='file']").each(function () {



    // //獲取 檔名.檔案格式
    // var filePath = $(this).val().split("\\");

    //獲取 file name名稱
    var name = $(this).attr("name");

    // file_name.push({ name: name, value: filePath[filePath.length - 1] });

    if ($(this).context.files.length == 1) {
      file_name.push({ name: name, value: $(this).context.files[0].name });
    }
    else {
      var files_arr = [];

      $.each($(this).context.files, function (key, val) {

        files_arr.push(val.name);

      });

      file_name.push({ name: name, value: files_arr });
    }


  });

  //  console.log(file_name)

  return file_name;
}
// endregion

update_annual_hours = function () {

  if (authority_level >= 2) {

  }
  else {
    swal({
      title: '您沒有權限執行此動作',
      text: "請洽管理員獲取對應權限",
      type: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      allowOutsideClick: false, //不可點背景關閉
      confirmButtonText: '確認'
    })
  }

}


//預約表格鎖定控制region
function resume_forms_edit(id) {
  $('.resume_forms_question' + id + '').attr('disabled', false);
  $('#edit_div' + id + '').attr('hidden', true);
  $('#save_div' + id + '').attr('hidden', false);

};
function resume_forms_cancel(id) {
  $('.resume_forms_question' + id + '').attr('disabled', true);
  $('#edit_div' + id + '').attr('hidden', false);
  $('#save_div' + id + '').attr('hidden', true);
};
//endregion

//篩檢總表格鎖定控制region
function resume_edit() {
  $('.resume_question').attr('disabled', false);
  $('#edit_div').attr('hidden', true);
  $('#save_div').attr('hidden', false);
};
function resume_cancel() {
  $('.resume_question').attr('disabled', true);
  $('#edit_div').attr('hidden', false);
  $('#save_div').attr('hidden', true);
};
//endregion



// 刪除履歷表檔案內容 多檔案上傳 region
selectFiles_delete = function () {


  if ($("[name='file_a_check']:checked").length > 0) {
    console.log($("#val_arr" + $("[name='file_a_check']:checked").attr("value")))
    swal({
      title: "是否刪除該檔案？\n" + "檔名："+ $("#val_arr" + $("[name='file_a_check']:checked").attr("value")).text(),
      text: "確認刪除後將無法復原操作",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "確認",
      cancelButtonText: "取消",
      showConfirmButton: true,
      showCancelButton: true
    }).then(function (result) {
      if (result) {
        var file_a_sql_id = $("[name='file_a_check']:checked").attr("forms_sql_id");
        var file_a_val = $("[name='file_a_check']:checked").attr("value");

        // console.log(file_a_input_val_arr)

        var r_file_a = file_a_input_val_arr.splice(parseInt(file_a_val), 1);

        console.log(file_a_input_val_arr)
        console.log(r_file_a)

        $.ajax({
          url: "database/delete_resume_file_a.php",
          type: "POST",
          data: {
            Form_sql_id: file_a_sql_id,
            Resume_id: resume_id,
            File_a_arr: file_a_input_val_arr,
            File_a_delete_index: file_a_val,
            Remove_file_a: r_file_a[0],
          },
          // dataType: "JSON",
          success: function (data) {
            console.log(data);
            if (data == 1) {
              swal({
                type: "success",
                title: "刪除檔案成功!",
                allowOutsideClick: false, //不可點背景關閉
              }).then(function () {
                location.reload();
              });
            }

          },
          error: function (e) {
            console.log(e)
            swal({
              type: "error",
              title: "刪除檔案失敗!請聯絡負責人",
              allowOutsideClick: false, //不可點背景關閉
            });
          },
        });

      }
    }, function (dismiss) {
      if (dismiss == 'cancel') {
        swal({
          title: '已取消',
          type: 'success',
        })
      }
    }).catch(swal.noop)
  }
  else {
    swal({
      type: 'warning',
      title: '請選取要刪除的檔案!',
      allowOutsideClick: false //不可點背景關閉
    })
  }


}
//endregion

window.selectedFiles = [];
window.selectedFiles_str = "";

selectFiles_insert = function () {


  if(selectedFiles.length==0)
  {
    selected_files();
  }
  else
  {
      swal({
        title: "已經有選擇檔案，是否清空當前檔案清單，重新選取？",
        text: "目前檔案清單："+selectedFiles_str,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "確認",
        cancelButtonText: "取消",
        showConfirmButton: true,
        showCancelButton: true
      }).then(function (result) {
        if (result) {
          selected_files();
        }
      }, function (dismiss) {
        if (dismiss == 'cancel') {
          swal({
            title: '已取消',
            type: 'success',
          })
        }
      }).catch(swal.noop)
  }
    
}


selected_files = function() {
  selectedFiles = [];
  selectedFiles_str = "";
  var html = '<span style="color:red;">上傳檔案清單預覽：</span><br/>';

  $("#selected-files").html(html);

  $.FileDialog({
    "accept": "*",
    "drag_message": "將檔案拖曳至此處新增",
    "title": "載入檔案",
  }).on("files.bs.filedialog", function (event) {
    for (var a = 0; a < event.files.length; a++) {
      selectedFiles.push(event.files[a]);

      // console.log(event.files[a])

      if(a == 0)
      {
        selectedFiles_str += event.files[a].name;
      }
      else
      {
        selectedFiles_str += "," + event.files[a].name;
      }

      html += '<span style="color:red;" value="' + event.files[a].name + '">' + event.files[a].name + '</span><br/>';
    }
    $("#selected-files").html(html);
  });
}

// page reload時保持上次的頁籤狀態 region
function tab_toggle() {
  $('a[data-toggle="pill"]').on('show.bs.tab', function(e) {
      localStorage.setItem('activeTab', $(e.target).attr('href'));
  });
  var activeTab = localStorage.getItem('activeTab');
  if(activeTab){
      $('#myTab a[href="' + activeTab + '"]').tab('show');
  }
}

$('#menu_tab_nav li a, .breadcrumb li, .brand-img').on('click',function() {
  localStorage.removeItem('activeTab');
});