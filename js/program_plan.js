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

//團督記錄表格region
// var vo_year = getUrlVars()["year"];

$.ajax({
  url: "database/find_data_program_plan.php",
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
      cssString +=
        '<tr id="' +
        value.Id +
        '">' +
        '<td style="text-align:center">' +
        value.Year +
        "</td>" +
        '<td style="text-align:center">' +
        value.Date +
        "</td>" +
        '<td style="text-align:center">' +
        value.Plan_name +
        "</td>" +
        // '<td style="text-align:center">' +
        // value.Person +
        // "</td>" +
        // '<td style="text-align:center">' +
        // value.Loaction +
        // "</td>" +
        // '<td style="text-align:center">' +
        // value.Service +
        // "</td>" +
        // '<td style="text-align:center">' +
        // value.Cost +
        // "</td>" +
        // '<td style="text-align:center">' +
        // value.Number +
        // "</td>" +
        // '<td style="text-align:center">' +
        // value.Lecturer +
        // "</td>" +
        // '<td style="text-align:center">' +
        // value.Create_date +
        // "</td>" +
        // '<td style="text-align:center">' +
        // value.Create_name +
        // "</td>" +
        // '<td style="text-align:center">' +
        // value.Update_date +
        // "</td>" +
        // '<td style="text-align:center">' +
        // value.Update_name +
        // "</td>" +
        "</tr>";

      $("#year").append(
        '<option value="' + value.Year + '">' + value.Year + "</option>"
      );

      $("#date").append(
        '<option value="' + value.Date + '">' + value.Date + "</option>"
      );
      $("#plan_name").append(
        '<option value="' +
          value.Plan_name +
          '">' +
          value.Plan_name +
          "</option>"
      );

      //   $("#person").append(
      //     '<option value="' + value.Person + '">' + value.Person + "</option>"
      //   );
      //   $("#loaction").append(
      //     '<option value="' + value.Loaction + '">' + value.Loaction + "</option>"
      //   );
      //   $("#service").append(
      //     '<option value="' + value.Service + '">' + value.Service + "</option>"
      //   );
      //   $("#cost").append(
      //     '<option value="' + value.Cost + '">' + value.Cost + "</option>"
      //   );
      //   $("#number").append(
      //     '<option value="' + value.Number + '">' + value.Number + "</option>"
      //   );
      //   $("#lecturer").append(
      //     '<option value="' + value.Lecturer + '">' + value.Lecturer + "</option>"
      //   );
      $("#create_date").append(
        '<option value="' +
          value.Create_date +
          '">' +
          value.Create_date +
          "</option>"
      );
      $("#create_name").append(
        '<option value="' +
          value.Create_name +
          '">' +
          value.Create_name +
          "</option>"
      );
      $("#update_date").append(
        '<option value="' +
          value.Update_date +
          '">' +
          value.Update_date +
          "</option>"
      );
      $("#update_name").append(
        '<option value="' +
          value.Update_name +
          '">' +
          value.Update_name +
          "</option>"
      );
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
            if (aText > bText) return 1;
            if (aText < bText) return -1;
            return 0;
          })
          .appendTo("#" + this_id + "");

        //最前面新增"所有"選像
        $("#" + this_id + "").prepend(
          "<option value='' selected='selected'>所有</option>"
        );

        $("#" + this_id + "")
          .children()
          .each(function () {
            text = $(this).text();
            if (
              $("select#" + this_id + " option:contains(" + text + ")").length >
              1
            ) {
              $(
                "select#" + this_id + " option:contains(" + text + "):gt(0)"
              ).remove();
            }
            //    console.log(text)
          });
      }
    });

    //印出表格
    $("#call_view").html(cssString);

    //點擊table tr 進入詳細頁面
    $(".table-hover tbody").on("click", "tr", function () {
      window.location.href =
        "program_plan_detail.php?program_id=" +
        $(this).attr("id") +
        // "&year=" +
        // vo_year +
        "";
    });
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
      title: "快樂聯盟向日葵家園每日生活輔導紀錄表",
      text: "匯出Excel",
    },
  ],
});

//範圍搜尋region
// function parseTime(t) {
//   var d = new Date();
//   var time = t.match(/(\d+)(?::(\d\d))?\s*(p?)/);
//   d.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
//   d.setMinutes(parseInt(time[2]) || 0);
//   return d;
// }

// var date_range = function (settings, data, dataIndex) {
//   var min_date = parseInt(Date.parse($("#min_date").val()), 10);
//   var max_date = parseInt(Date.parse($("#max_date").val()), 10);
//   var date = parseInt(Date.parse(data[0])) || 0; // use data for the date column
//   if (
//     (isNaN(min_date) && isNaN(max_date)) ||
//     (isNaN(min_date) && date <= max_date) ||
//     (min_date <= date && isNaN(max_date)) ||
//     (min_date <= date && date <= max_date)
//   ) {
//     return true;
//   }
//   return false;
// };

var hours_range = function (settings, data, dataIndex) {
  var min_time_all = parseInt($("#min_time_all").val(), 10);
  var max_time_all = parseInt($("#max_time_all").val(), 10);
  var hours = parseInt(data[4]) || 0; // use data for the date column

  if (
    (isNaN(min_time_all) && isNaN(max_time_all)) ||
    (isNaN(min_time_all) && hours <= max_time_all) ||
    (min_time_all <= hours && isNaN(max_time_all)) ||
    (min_time_all <= hours && hours <= max_time_all)
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
// $("select.filter").on("change", function () {
//   var rel = $(this).attr("rel");
//   if (this.value != "") {
//     //格式：.serch(該欄位值, 是否啟用正則表達式匹配, 是否關閉智能查詢, 是否開啟不區分大小寫)
//     //須完全匹配option的value值 設定option.value 使用正則符號匹配，ex:"^" + this.value+ "$"
//     //前端注意option value內有特殊字元須加入轉義字 ex:H+梅 positive => H\+梅 positive
//     $table
//       .columns(rel)
//       .search("^" + this.value + "$", true, false, true)
//       .draw();
//   } else {
//     $table.columns(rel).search(this.value).draw();
//   }
// });
// $("#min, #max").keyup(function () {
//   $.fn.dataTable.ext.search.push(age_range);
//   $table.draw();
// });
// $("#min_date, #max_date").on("change", function () {
//   //    console.log($('#min_date').val())
//   $.fn.dataTable.ext.search.push(hours_range);
//   $table.draw();
// });

$("#min_time_all, #max_time_all").keyup(function () {
  $.fn.dataTable.ext.search.push(hours_range);
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
