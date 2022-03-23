var address_arr = [];
var new_address_arr = [];

//抓所有電話諮詢紀錄region
$.ajax({
  url: "database/find_data_received.php",
  type: "POST",
  dataType: "JSON",
  async: false, //啟用同步請求
  success: function (data) {
    console.log(data);
    var cssString = "";
    var local_str = "";
    var consult_date = "";
    for (var index in data.id) {
      cssString +=
        //                        '<a href="phone_detail(原版).php?id='+ data.id[index] + '><tr>' +
        '<tr id="' +
        data.id[index] +
        '">' +
        '<td style="text-align:center">' +
        data.id[index] +
        "</td>" +
        '<td style="text-align:center">' +
        data.date_come[index] +
        "</td>" +
        '<td style="text-align:center">' +
        data.unit_come[index] +
        "</td>" +
        '<td style="text-align:center">' +
        data.words_receive[index] +
        "</td>" +
        '<td style="text-align:center">' +
        data.subject[index] +
        "</td>" +
        '<td style="text-align:center">' +
        data.num_receive[index] +
        "</td>" +
        "</tr>";
    }
    //印出表格
    $("#call_view").html(cssString);

    // //點擊table tr 進入詳細頁面
    // $(".table-hover tbody").on("click", "tr", function () {
    //   window.location.href =
    //     "phone_detail_v2.php?phone_id=" + $(this).attr("id") + "";
    // });
    // console.log(index);
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
      $("#received_all").html(cssString);
    }
  },

  error: function (data) {
    console.log("fail");
  },
});
//endregion

//預設總人數人次region
$("#count_people").text("人次：" + $table.column(0).data().count());
$("#count_people2").text("，人數：" + $table.column(0).data().unique().count());
//endregion

$("select.filter").on("change", function () {
  var rel = $(this).attr("rel");
  $table.columns(rel).search(this.value).draw();
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
//$('#min, #max').keyup( function() {
//    $table.draw();
//} );
//endregion

//匯出EXCEL按鈕CSS設定 region
$(".buttons-excel").each(function () {
  $(this).removeClass("dt-button").addClass("btn btn-default");
});
//endregion
