//抓所有電話詢戒表region
$.ajax({
  url: "database/find_data_received.php",
  type: "POST",
  dataType: "JSON",
  async: false, //啟用同步請求
  success: function (data) {
    var cssString = "";
    // console.log(data);
    $.each(data, function (index, value) {
      cssString +=
        '<tr id="' +
        value.Id +
        '">' +
        '<td style="text-align:center">' +
        value.Num_receive +
        "</td>" +
        '<td style="text-align:center">' +
        value.Date_come +
        "</td>" +
        '<td style="text-align:center">' +
        value.Unit_come +
        "</td>" +
        '<td style="text-align:center">' +
        value.Words_receive +
        "</td>" +
        '<td style="text-align:center">' +
        value.Subject +
        "</td>" +
        "</tr>";

      // $("#id").append(
      //   '<option value="' + value.Id + '">' + value.Id + "</option>"
      // );

      $("#num_receive").append(
        '<option value="' +
          value.Num_receive +
          '">' +
          value.Num_receive +
          "</option>"
      );

      $("#date_come").append(
        '<option value="' +
          value.Date_come +
          '">' +
          value.Date_come +
          "</option>"
      );
      $("#unit_come").append(
        '<option value="' +
          value.Unit_come +
          '">' +
          value.Unit_come +
          "</option>"
      );
      $("#words_receive").append(
        '<option value="' +
          value.Words_receive +
          '">' +
          value.Words_receive +
          "</option>"
      );
      $("#subject").append(
        '<option value="' + value.Subject + '">' + value.Subject + "</option>"
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
        "received_detail.php?received_id=" + $(this).attr("id") + "";
    });
  },

  error: function (e) {
    console.log(e);
  },
});
//endregion

// 行政管理，收文(抓取簽核資料)
$.ajax({
  url: "database/sign_off.php",
  type: "POST",
  dataType: "JSON",
  async: false, //啟用同步請求
  success: function (data) {
    // console.log(data);
    var cssString = "";
    for (var index in data.id) {
      cssString +=
        '<tr id="' +
        data.id[index] +
        '">' +
        "<td></td>" +
        '<td style="text-align:center">' +
        data.id[index] +
        "</td>" +
        '<td style="text-align:center">' +
        data.info_name[index] +
        "</td>" +
        '<td style="text-align:center">' +
        data.submitter[index] +
        "</td>" +
        '<td style="text-align:center">' +
        data.submit_date[index] +
        "</td>" +
        '<td style="text-align:center">' +
        data.read_date[index] +
        "</td>" +
        '<td style="text-align:center">' +
        data.audit_date[index] +
        "</td>" +
        '<td style="text-align:center">' +
        data.state[index] +
        "</td>" +
        "</tr>";
      //印出表格
      //最前面新增"所有"選像
      //點擊table tr 進入詳細頁面
      // $(".table-hover tbody").on("click", "tr", function () {
      //   window.location.href =
      //     "received_detail.php?received_id=" + $(this).attr("id") + "";
      // });

      $("#received_all").html(cssString);
    }
  },

  error: function (data) {
    console.log("fail");
  },
});
//endregion

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
//endregion

//預設總人數人次region
// $("#count_people").text("人次：" + $table.column(0).data().count());
// $("#count_people2").text("，人數：" + $table.column(0).data().unique().count());
//endregion

// $("select.filter").on("change", function () {
//   var rel = $(this).attr("rel");
//   $table.columns(rel).search(this.value).draw();
// });
// $("#min, #max").keyup(function () {
//   $.fn.dataTable.ext.search.push(age_range);
//   $table.draw();
// });
// $("#min_date, #max_date").on("change", function () {
//   //    console.log($('#min_date').val())
//   $.fn.dataTable.ext.search.push(date_range);
//   $table.draw();
// });

// $table.on("draw", function () {
//   $("#count_people2").text(
//     "，人數：" + $table.column(0, { page: "current" }).data().unique().count()
//   );
// });

// $("input.filter").on("keyup change", function () {
//   //    console.log(this.value);
//   var rel = $(this).attr("rel");
//   //    console.log(rel);

//   $table.columns(rel).search(this.value).draw();
// });
// //$('#min, #max').keyup( function() {
// //    $table.draw();
// //} );
// //endregion

// //匯出EXCEL按鈕CSS設定 region
// $(".buttons-excel").each(function () {
//   $(this).removeClass("dt-button").addClass("btn btn-default");
// });
//endregion
