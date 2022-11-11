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
    yearRange: "-9:+5",
    onClose: function (dateText) {
      // console.log($('#'+selector_id).val());
      // console.log(trans_to_EN(dateText));
    },
    beforeShow: function (input, inst) {
      var $this = $(this);
      var cal = inst.dpDiv;
      var outerh = $this.outerHeight();
      if ($this.offset().top > 1500) 
      {
        outerh = outerh * 8;
      }
      else if ($this.offset().top > 1200 && $this.offset().top < 1500) 
      {
          outerh = outerh * 4;
      }
      else 
      {
        outerh = outerh * 3;
      }
      console.log($this.offset().top)
      console.log(outerh)

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
  $("#" + selector_id).datepicker("setDate", "today");
};
//endregion
  
// 民國年轉換日期格式yyyy-dd-mm region
function split_date(date) {
  return parseInt(date.split("年")[0])+1911+"-"+date.split("年")[1].split("月")[0]+"-"+date.split("年")[1].split("月")[1].split("日")[0]; 
}
//endregion

$(document).ready(function () {
    //將input datepicker屬性名稱為ch_datepicker創建datepicker初始化 region
    $("input[datepicker='ch_datepicker']").each(function () {
      var this_id = $(this).attr("id");
      datepicker_create(this_id);
    });
    //endregion
    
  });


  $.ajax({
    url: "database/find_data_volunteer_meeting.php",
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
          value.Meeting_date.split("年")[0] +
          "</td>" +
          '<td style="text-align:center">' +
          value.Title_name +
          "</td>" +
          '<td style="text-align:center">' +
          value.Meeting_date +
          "</td>" +
          '<td style="text-align:center">' +
          value.Meeting_time_start +
          "</td>" +
          '<td style="text-align:center">' +
          value.Actual_attendence +
          "</td>" +
          '<td style="text-align:center">' +
          value.Absence +
          "</td>" +
          '<td style="text-align:center">' +
          value.Next_meeting_date +
          "</td>" +
          "</tr>";
  
        $("#year").append(
          '<option value="' + value.Meeting_date.split("年")[0] + '">' + value.Meeting_date.split("年")[0] + "</option>"
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
          "volunteer_meeting_detail.php?vom_id=" +
          $(this).attr("id") +
          // "&year=" +
          // vo_year +
          "";
      });
    },
  
    error: function (e) {
      console.log(e);
      notyf.alert('伺服器錯誤,無法載入');
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