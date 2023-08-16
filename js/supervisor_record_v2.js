const notyf = new Notyf();

$(function() {
  imagePreview();  
});

//datepicker創建 region
datepicker_create = function (selector_id) {
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
      var left = $this.offset().left * 0.86;
      setTimeout(function () {
        cal.css({
          top: top,
          left: left,
        });
      }, 10);
    },
  });
};
//endregion

$(document).ready(function () {
  //將datepicker屬性名稱為ch_datepicker創建datepicker初始化 region
  $("[datepicker='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion
});

//將日期轉為民國年格式111.03.07 region
trans_to_Tw = function (endate) {
  var strAry = endate.split("-");

  if (parseInt(strAry[0]) > 1911) {
    strAry[0] = parseInt(strAry[0]) - 1911;
  }

  return strAry[0] + "年" + strAry[1] + "月" + strAry[2] + "日";
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

//endregion

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

var sr_year = getUrlVars()["year"];

//團督記錄表格region
$.ajax({
  url: "database/find_data_supervisor_record_v2.php",
  type: "POST",
  dataType: "JSON",
  data: {
    year: sr_year,
  },
  async: false, //啟用同步請求
  success: function (data) {
    // console.log(data);
    var cssString = "";

    $.each(data, function (index, value) {
      if (value.file_path == "") {
        cssString +=
          '<tr id="' +
          value.Id +
          '" sr_id="' +
          value.Id +
          '" rec_type="fillin">';

        var record_content_json = JSON.parse("[" + value.record_content + "]");
        // console.log(record_content_json)
        $.each(record_content_json[0], function (i, datan) {
          if (datan.name == "meeting_date") {
            cssString +=
              '<td style="text-align:center">' + datan.value + "</td>";
          } else if (datan.name == "title_name") {
            cssString +=
              '<td style="text-align:center">' + datan.value + "</td>";
          } else {
            return;
          }
        });
      } else {
        cssString +=
          '<tr id="' +
          value.Id +
          '" sr_id="' +
          value.Id +
          '" rec_type="upload">';

        var upload_content_json = JSON.parse(
          "[" + value.upload_content.replace('"[', "[").replace(']"', "]") + "]"
        );
        // console.log(upload_content_json)
        $.each(upload_content_json[0], function (i, datan) {
          if (datan.name == "upload_rec_date") {
            cssString +=
              '<td style="text-align:center">' + datan.value + "</td>";
          } else if (datan.name == "upload_title_name") {
            cssString +=
              '<td style="text-align:center">' + datan.value + "</td>";
          } else {
            return;
          }
        });
      }

      var director_sign_arr = datatable_sign_show('director', value.Director, value.Director_signature, value.Director_sign_time, value.Director_sign_msg);
      var supervise_sign_arr = datatable_sign_show('supervise', value.Supervise, value.Supervise_signature, value.Supervise_sign_time, value.Supervise_sign_msg);




      cssString += '<td style="text-align:center">' + director_sign_arr[0]+director_sign_arr[1] + '</td>';
      cssString += '<td style="text-align:center">' + supervise_sign_arr[0]+supervise_sign_arr[1] + '</td>';
      cssString += '</tr>';
    });
    

    //印出表格
    $("#call_view").html(cssString);

    //點擊table tr 進入詳細頁面
    $(".table-hover tbody").on("click", "tr", function () {
      window.location.href =
        "supervisor_record_detail_v2.php?year=" +
        sr_year +
        "&id=" +
        $(this).attr("id") +
        "&sr_id=" +
        $(this).attr("sr_id") +
        "&rec_type=" +
        $(this).attr("rec_type") +
        "";
    });
  },

  error: function (e) {
    console.log(e);
    notyf.alert('伺服器錯誤,無法載入');
  },
});

//endregion


function datatable_sign_show(signer_type ,signer, sign_path, sign_time, sign_msg) {
  var sign_arr = [];

  var sign_stus = "";
  var sign_css_str = "";
  var type_name = "";

  switch (signer_type) {
    case "supervise":
      type_name = "督導";
      break;
    case "job_agent":
      type_name = "職務代理人";
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
      "../supervisor_record/signature/",
      "./supervisor_record/signature/"
    );
    sign_css_str +=
      '<a src="' +
      supervise_sign_file_val +
      '" style="color:blue;" target="_blank" alt="' +
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
  $(".apreview").parent().hover(function (e) {
      this.t = $(this).children().attr("title");//顯示在圖片下的標題
      $(this).children().attr("title", "");    //將title設定為空值，不讓文字懸浮提示
      this.imgSr = $(this).children().attr("src");//圖片的連結
      this.c = (this.t != "") ? "<br/>" + this.t : "";
      $("body").append("<p class='preview'><img src='" + this.imgSr + "' alt='Image preview' width='800' height='200' />" + this.c + "</p>");
      $(".preview")
          .css("top", (e.pageY + yOffset) + "px")
          .css("left", (e.pageX + xOffset) + "px")
          .fadeIn("fast");
  },
  function () {
      $(this).children().attr("title", this.t);//恢復title
      $(".preview").remove();
  });


  //鼠標移動的事件，讓圖片隨著移動
  $(".apreview").parent().mousemove(function (e) {  
      $(".preview")
          .css("top", (e.pageY - yOffset) + "px")
          .css("left", (e.pageX + xOffset) + "px");
  });
};
//endregion


//設定table搜尋框重整後自動填入文字region

//table設定region
var $table = $("#tab_all").DataTable({
  ordering: false,
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
      title: "快樂聯盟監團督記錄總表",
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

var birth_date_range = function (settings, data, dataIndex) {
  var min_date = parseInt(
    Date.parse(trans_to_EN($("#birth_min_date").val())),
    10
  );
  var max_date = parseInt(
    Date.parse(trans_to_EN($("#birth_max_date").val())),
    10
  );
  var date = parseInt(Date.parse(trans_to_EN(data[4]))) || 0; // use data for the date column
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

$("#birth_min_date, #birth_max_date").on("change", function () {
  //    console.log($('#min_date').val())
  $.fn.dataTable.ext.search.push(birth_date_range);
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
