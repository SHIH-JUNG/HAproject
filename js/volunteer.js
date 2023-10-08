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


//檢查SQL撈出來的日期格式region
check_sql_date_format = function (date) {
  if (date == "0000-00-00") {
    date = "";
  } else {
    date = trans_to_Tw(date);
  }

  return date;
};


$.ajax({
  url: "database/find_data_volunteer.php",
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

      // var social_worker_sign_arr = datatable_sign_show('social_worker', value.Social_worker, value.Social_worker_signature, value.Social_worker_sign_time, value.Social_worker_sign_msg);

      var director_sign_arr = datatable_sign_show('director', value.Director, value.Director_signature, value.Director_sign_time, value.Director_sign_msg);


      cssString +=
        '<tr id="' +
        value.Id +
        '">' +
        '<td style="text-align:center">' +
        value.Year +
        "</td>" +
        '<td style="text-align:center">' +
        value.Name +
        "</td>" +
        '<td style="text-align:center">' +
        value.Gender +
        "</td>" +
        '<td style="text-align:center">' +
        value.Serv_time_1 +
        "</td>" +
        '<td style="text-align:center">' +
        value.Expertise +
        "</td>" +
        '<td style="text-align:center">' +
        value.Vgroup +
        "</td>" +
        '<td style="text-align:center">' +
        value.Time_all +
        "</td>" +
        '<td style="text-align:center">' +
        value.Serv_award +
        "</td>" +
        '<td style="text-align:center">' +
        value.Social_worker +
        "</td>" +
        '<td style="text-align:center">' +
        director_sign_arr[0] +
        director_sign_arr[1] +
        "</td>" +
        '<td style="text-align:center">' +
        supervise_sign_arr[0] +
        supervise_sign_arr[1] +
        "</td>" +
        "</tr>";

      $("#year").append(
        '<option value="' + value.Year + '">' + value.Year + "</option>"
      );

      $("#name").append(
        '<option value="' + value.Name + '">' + value.Name + "</option>"
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
            // if(aText>bText) return 1;
            // if(aText<bText) return -1;
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
            //text = $(this).text();
            //if (
            //  $("select#" + this_id + " option:contains(" + text + ")").length >
            //  1
            //) {
            //  $(
            //    "select#" + this_id + " option:contains(" + text + "):gt(0)"
            //  ).remove();
            //}
             $(this).siblings('[value="' + this.value + '"]').remove();
            //    console.log(text)
          });
      }
    });

    //印出表格
    $("#call_view").html(cssString);

    //點擊table tr 進入詳細頁面
    $(".table-hover tbody").on("click", "tr", function () {
      window.location.href =
        "volunteer_detail.php?vo_id=" +
        $(this).attr("id") +
        // "&year=" +
        // vo_year +
        "";
    });
  },

  error: function (e) {
    // console.log(e);
    notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
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
    case "social_worker":
      type_name = "志工督導";
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
      // $("#count_people").text("人次：" + iTotal);
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
      title: "快樂聯盟-"+$(".breadcrumb li").last().text()+"",
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
  var hours = parseInt(data[6]) || 0; // use data for the date column
  
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
  // $(".count_people").text("人次：" + $table.column(0).data().count());
  // $(".count_people2").text("，人數：" + $table.column(0).data().unique().count());
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
