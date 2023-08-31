const notyf = new Notyf();

$(function() {
  imagePreview();  
});

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
      var left_off = 10;
      if ($this.offset().top > 1200) {
        outerh = outerh * 4;
      } else {
        outerh = outerh * 3;
      }

      if ($this.offset().left > 1500) {
        left_off = 700;
      } else {
        left_off = 10;
      }
      // console.log($this.offset().top)
      // console.log(outerh)

      // console.log($this.offset().left)


      var top = $this.offset().top - outerh;
      var left = $this.offset().left - left_off;
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

$(document).ready(function () {
    //將input name名稱為ch_datepicker創建datepicker初始化 region
    $("input[datepicker='ch_datepicker']").each(function () {
      var this_id = $(this).attr("id");
      // console.log(this_id)
      datepicker_create(this_id);
    });
    //endregion
});

window.c_allow_status_arr = new Array();

$.ajax({
  url: "database/find_data_overtime.php",
  type: "POST",
  dataType: "JSON",
  // data: {
  //   year: vo_year,
  // },
  async: false, //啟用同步請求
  success: function (data) {
    var cssString = "";
    // console.log(data)
    $.each(data, function (index, value) {
      // var update_date = value.Update_date != "0000-00-00" ? value.Update_date : "";

      var supervise_sign_arr = datatable_sign_show('supervise', value.Supervise, value.Supervise_signature, value.Supervise_sign_time, value.Supervise_sign_msg);

      var checker_sign_arr = datatable_sign_show('checker', value.Checker, value.Checker_signature, value.Checker_sign_time, value.Checker_sign_msg);

      var director_sign_arr = datatable_sign_show('director', value.Director, value.Director_signature, value.Director_sign_time, value.Director_sign_msg);

      var c_allow_status = "";
      c_allow_status = value.Allow_status;

      c_allow_status_arr.push(c_allow_status);

      cssString +=
        '<tr id="' +
        value.Id +
        '" resume_id="'+value.Resume_id+'">' +
        '<td style="text-align:center">' +
        '<select name="c_allow_status" id="c_allow_status'+value.Id+'"><option value="審核中">審核中</option></select>' +
        "</td>" +
        '<td style="text-align:center">' +
        value.Resume_name +
        "</td>" +
        '<td style="text-align:center">' +
        value.Overtime_date +
        "</td>" +
        '<td style="text-align:center">' +
        value.Reason +
        "</td>" +
        '<td style="text-align:center">' +
        value.Overtime_hours +
        "</td>" +
        '<td style="text-align:center">' +
        value.Free_date +
        "</td>" +
        '<td style="text-align:center">' +
        value.Free_hours +
        "</td>" +
        '<td style="text-align:center">' +
        value.Allow_status +
        "</td>" +
        '<td style="text-align:center">' +
        director_sign_arr[0] +
        director_sign_arr[1] +
        "</td>" +
        '<td style="text-align:center">' +
        supervise_sign_arr[0] +
        supervise_sign_arr[1] +
        "</td>" +
        '<td style="text-align:center">' +
        checker_sign_arr[0] +
        checker_sign_arr[1] +
        "</td>" +
        '<td style="text-align:center">' +
          '<a href="overtime_detail.php?overtime_id='+value.Id+'&resume_id='+value.Resume_id+'" style="text-decoration: underline;color:black;">查看</a>' +
        "</td>" +
        "</tr>";

        $("#name").append(
            '<option value="' + value.Resume_name + '">' + value.Resume_name + "</option>"
        );
         
        $("#allow_status").append(
        '<option value="' + value.Allow_status + '">' + value.Allow_status + "</option>"
        );

        $("#call_view").append(cssString);

        $("[id='c_allow_status"+value.Id+"']").append('<option value="核准">核准</option>');
        $("[id='c_allow_status"+value.Id+"']").append('<option value="不核准">不核准</option>');
        $("[id='c_allow_status"+value.Id+"']").append('<option value="取消">取消</option>');

        $("[id='c_allow_status"+value.Id+"']").val(c_allow_status);

    });

    //找出所有查詢表格下拉式選單，將內容排序、加上"所有查詢"、去除重複值
    var filter_select = $("select.filter");

    $.each(filter_select, function (i, v) {
      var this_id = $(this).attr("id");

      if (this_id != undefined) {
        //option小到大排序
        $("#" + this_id + " option")
          .sort(function (a, b) {
            var aText = $(a).text().toUpperCase();
            var bText = $(b).text().toUpperCase();
            // if (aText > bText) return 1;
            // if (aText < bText) return -1;
            // return 0;

            return aText - bText;
          })
          .appendTo("#" + this_id + "");

        //最前面新增"所有"選像
        $("#" + this_id + "").prepend(
          "<option value='' selected='selected'>所有</option>"
        );

        $("#" + this_id + "")
          .children()
          .each(function () {
            // text = $(this).text();
            // if (
            //   $("select#" + this_id + " option:contains(" + text + ")").length >
            //   1
            // ) {
            //   $(
            //     "select#" + this_id + " option:contains(" + text + "):gt(0)"
            //   ).remove();
            // }

            $(this).siblings('[value="' + this.value + '"]').remove();
            //    console.log(text)
          });
      }
    });

    //印出表格
    // $("#call_view").html(cssString);

    //點擊table tr 進入詳細頁面
    // $(".table-hover tbody").on("click", "tr", function () {
    //   window.location.href =
    //     "overtime_detail.php?overtime_id=" +
    //     $(this).attr("id") +
    //     "&resume_id=" + $(this).attr("resume_id");
    // });
  },

  error: function (e) {
    console.log(e);
  },
});

//endregion



// 顯示簽核相關欄位 region
function datatable_sign_show(signer_type ,signer, sign_path, sign_time, sign_msg) {
  var sign_arr = [];

  var sign_stus = "";
  var sign_css_str = "";
  var type_name = "";

  switch (signer_type) {
    case "supervise":
      type_name = "執行長";
      break;
    // case "leader":
    //   type_name = "組長";
    //   break;
    case "director":
      type_name = "主管";
      break;
    case "checker":
      type_name = "查核者";
      break;
  }

  if (sign_msg == "") {
    sign_stus = "目前尚無留言內容";
  } else {
    sign_stus =
      "留言時間：" +
      sign_time +
      "，留言內容：" +
      sign_msg;
  }

  if (sign_path != "") {
    var supervise_sign_file_val = sign_path.replace(
      "../signature/",
      "./signature/"
    );
    sign_css_str +=
      '<a src="' +
      supervise_sign_file_val +
      '" style="color:blue;display: block;" target="_blank" alt="' +
      sign_stus +
      '" data-bs-toggle="tooltip" data-bs-placement="left" title="' +
      sign_stus +
      '">'+type_name+'已簽章<img style="vertical-align:middle;" class="apreview" width="25px" title="' +
      sign_stus +
      '" src="' +
      supervise_sign_file_val +
      '"></a>';
  }

  if (sign_css_str == "") {
    sign_css_str = '<i style="color:gray;">待簽核</i>';
  }

  sign_arr.push(signer);
  sign_arr.push(sign_css_str);

  return sign_arr;
}
// endregion

// 審核選項(第一個欄位)功能 region
$("[name='c_allow_status']").on("change", function () {
  
    var id = $(this).attr("id");
    var this_val = $("#" + id).prop("value");
    var this_index = parseInt(id.split("c_allow_status")[1]);
  
    // console.log(c_allow_status_arr)
  
    // console.log(id)
    // console.log(this_val)
    // console.log(this_index)
  
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
            update_allow_status(this_index, this_val);
          }
        },
        function (dismiss) {
          if (dismiss == "cancel") {
  
            $("#" + id).val(c_allow_status_arr[this_index - 1]);
  
            swal({
              title: "已取消",
              type: "success",
            });
          }
        }
      )
      .catch(swal.noop);
  });
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
              "overtime.php";
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


// 簽章圖片、留言、時間懸浮顯示region
// 設定移到該img元素的parent元素，觸發懸浮框圖片效果
// 要觸發該事件的圖片需 設定title、src、width，class設為apreview
this.imagePreview = function () {
  // 圖片距離鼠標的位置
  this.xOffset = -800;
  this.yOffset = -10;

  //hover([over,]out)
  //over:鼠標移到元素上所觸發的函數
  //out:鼠標移出元素所觸發的函數

  //鼠標圖片內容懸浮的事件
  $(".apreview")
    .parent()
    .hover(
      function (e) {
        this.t = $(this).children().attr("title"); //顯示在圖片下的標題
        $(this).children().attr("title", ""); //將title設定為空值，不讓文字懸浮提示
        this.imgSr = $(this).children().attr("src"); //圖片的連結
        this.c = this.t != "" ? "<br/>" + this.t : "";
        $("body").append(
          "<p class='preview'><img src='" +
            this.imgSr +
            "' alt='Image preview' width='800' height='200' />" +
            this.c +
            "</p>"
        );
        $(".preview")
          .css("top", e.pageY + yOffset + "px")
          .css("left", e.pageX + xOffset + "px")
          .fadeIn("fast");
      },
      function () {
        $(this).children().attr("title", this.t); //恢復title
        $(".preview").remove();
      }
    );

  //鼠標移動的事件，讓圖片隨著移動
  $(".apreview")
    .parent()
    .mousemove(function (e) {
      $(".preview")
        .css("top", e.pageY - yOffset + "px")
        .css("left", e.pageX + xOffset + "px");
    });
};
//endregion

//設定table搜尋框重整後自動填入文字region

//table設定region
var $table = $("#tab_all").DataTable({
  ordering: true,
  info: true,
  paging: true,
  lengthChange: false,
  pageLength: 10,
  pagingType: "simple_numbers",
  searching: true,
  dom:
    "<'col-sm-12'tr>" +
    "<'col-sm-6'<'text-left'i>><'col-sm-6'<'text-right'p>>" +
    "<'col-sm-12'<'text-left'B>>",
  language: {
    sZeroRecords: "没有匹配结果",
    sInfo: "顯示 _START_ 到 _END_ 筆資料，總共有 _TOTAL_ 筆資料",
    sInfoEmpty: "目前共有 0 筆紀錄",
    sInfoFiltered: "(由 _MAX_ 筆資料结果過濾)",
    fnInfoCallback: function (oSettings, iStart, iEnd, iMax, iTotal, sPre) {
      $("#count_people").text("人次：" + iTotal);
      return sPre;
    },
    paginate: {
      previous: "‹上一頁",
      next: "下一頁›",
    },
    aria: {
      paginate: {
        previous: "Previous",
        next: "Next",
      },
    },
  },
  buttons: [
    {
      extend: "excelHtml5",
      title: "快樂聯盟加班紀錄總表",
      text: "匯出Excel",
    },
  ],
});

//範圍搜尋region
function parseTime(t) {
  var d = new Date();
  var time = t.match(/(\d+)(?::(\d\d))?\s*(p?)/);
  d.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
  d.setMinutes(parseInt(time[2]) || 0);
  return d;
}

var date_range = function (settings, data, dataIndex) {
  var min_date = parseInt(Date.parse($("#min_date").val()), 10);
  var max_date = parseInt(Date.parse($("#max_date").val()), 10);
  var date = parseInt(Date.parse(data[0])) || 0; // use data for the date column
  if (
    (isNaN(min_date) && isNaN(max_date)) ||
    (isNaN(min_date) && date <= max_date) ||
    (min_date <= date && isNaN(max_date)) ||
    (min_date <= date && date <= max_date)
  ) {
    return true;
  }
  return false;
};

var overtime_date_range = (function( settings, data, dataIndex ) {
    var min_date = parseInt(Date.parse( trans_to_EN($('#overtime_date_start').val())), 10 );
    var max_date = parseInt(Date.parse( trans_to_EN($('#overtime_date_end').val())), 10 );
    var date = parseInt(Date.parse( trans_to_EN(data[2]) )) || 0; // use data for the date column
    if ( ( isNaN( min_date ) && isNaN( max_date ) ) ||
         ( isNaN( min_date ) && date <= max_date ) ||
         ( min_date <= date   && isNaN( max_date ) ) ||
         ( min_date <= date   && date <= max_date ) )
    {
        return true;
    }
    return false;
});

var time_range = function (settings, data, dataIndex) {
  // var min_time = parseInt(Date.parse( $('#min_time').val()), 10 );
  // var max_time = parseInt(Date.parse( $('#max_time').val()), 10 );
  // var time = parseInt(Date.parse( data[2] )) || 0; // use data for the date column
  var min_time = $("#min_time").val();
  var max_time = $("#max_time").val();
  switch (min_time) {
    case "00:00":
      min_time = "12:00";
      break;
    case "12:00":
      min_time = "24:00";
      break;
    default:
      min_time = min_time;
      break;
  }

  switch (max_time) {
    case "00:00":
      max_time = "12:00";
      break;
    case "12:00":
      max_time = "24:00";
      break;
    default:
      max_time = max_time;
      break;
  }

  const [hours_i, minutes_i] = min_time.split(":");
  const [hours_x, minutes_x] = max_time.split(":");
  const [hours_filter, minutes_filter] = data[2].split(":") || 0;
  const totalSeconds_min = +hours_i * 60 * 60 + +minutes_i * 60;
  const totalSeconds_max = +hours_x * 60 * 60 + +minutes_x * 60;
  const totalSeconds_time = +hours_filter * 60 * 60 + +minutes_filter * 60 || 0;

  if (
    (isNaN(totalSeconds_min) && isNaN(totalSeconds_max)) ||
    (isNaN(totalSeconds_min) && totalSeconds_time <= totalSeconds_max) ||
    (totalSeconds_min <= totalSeconds_time && isNaN(totalSeconds_max)) ||
    (totalSeconds_min <= totalSeconds_time &&
      totalSeconds_time <= totalSeconds_max)
  ) {
    return true;
  }
  return false;
};

//endregion

//預設總人數人次region
$("#count_people").text("人次：" + $table.column(0).data().count());
$("#count_people2").text("，人數：" + $table.column(0).data().unique().count());
//endregion

//額外設定select
$("select.filter").on("change", function () {
  var rel = $(this).attr("rel");
  if (this.value != "") {
    //格式：.serch(該欄位值, 是否啟用正則表達式匹配, 是否關閉智能查詢, 是否開啟不區分大小寫)
    //須完全匹配option的value值 設定option.value 使用正則符號匹配，ex:"^" + this.value+ "$"
    //前端注意option value內有特殊字元須加入轉義字 ex:H+梅 positive => H\+梅 positive
    $table
      .columns(rel)
      .search("^" + this.value + "$", true, false, true)
      .draw();
  } else {
    $table.columns(rel).search(this.value).draw();
  }
});
$("#min, #max").keyup(function () {
  $.fn.dataTable.ext.search.push(age_range);
  $table.draw();
});

$('#overtime_date_start, #overtime_date_end').on('change', function() {
    //    console.log($('#min_date').val())
    $.fn.dataTable.ext.search.push(overtime_date_range);
    $table.draw();
}); 

$("#min_time, #max_time").on("change", function () {
  //    console.log($('#min_date').val())
  $.fn.dataTable.ext.search.push(time_range);
  $table.draw();
});

$table.on("draw", function () {
  $("#count_people2").text(
    "，人數：" + $table.column(0, { page: "current" }).data().unique().count()
  );
});

$("input.filter").on("keyup change", function () {
  //    console.log(this.value);
  var rel = $(this).attr("rel");
  //    console.log(rel);

  $table.columns(rel).search(this.value).draw();
});

//endregion

//匯出EXCEL按鈕CSS設定 region
$(".buttons-excel").each(function () {
  $(this).removeClass("dt-button").addClass("btn btn-default");
});
//endregion