//抓所有電話詢戒表region
$.ajax({
  url: "database/find_data_published.php",
  type: "POST",
  dataType: "JSON",
  async: false, //啟用同步請求
  success: function (data) {
    var cssString = "";
    console.log(data);
    for (var index in data.id) {
      // ID = data.Id[index].split("、");
      cssString +=
        '<tr id="' +
        data.id[index] +
        '">' +
        '<td style="text-align:center">' +
        data.id[index] +
        "</td>" +
        '<td style="text-align:center">' +
        data.date_publish[index] +
        "</td>" +
        '<td style="text-align:center">' +
        data.unit[index] +
        "</td>" +
        '<td style="text-align:center">' +
        data.num_publish[index] +
        "</td>" +
        '<td style="text-align:center">' +
        data.subject[index] +
        "</td>" +
        "</tr>";
    }

    //印出表格
    $("#call_view").html(cssString);

    //點擊table tr 進入詳細頁面
    // $(".table-hover tbody").on("click", "tr", function () {
    //   window.location.href =
    //     "screening_detail.php?screening_id=" + $(this).attr("id") + "";
    // });
  },

  error: function (e) {
    console.log(e);
  },
});

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
      title: "快樂聯盟預約篩檢總表",
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
  var date = parseInt(Date.parse(data[1])) || 0; // use data for the date column
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
$("#min_date, #max_date").on("change", function () {
  //    console.log($('#min_date').val())
  $.fn.dataTable.ext.search.push(date_range);
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
