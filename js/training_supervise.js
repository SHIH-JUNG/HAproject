const notyf = new Notyf();

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

$(document).ready(function () {

    //將name名稱為ch_datepicker創建datepicker初始化 region
    $("[name='ch_datepicker']").each(function(){

        var this_id = $(this).attr("id");
        datepicker_create(this_id);
    });
    //endregion
}); 

window.cumulation_hours = 0;

//載入在職訓練紀錄 region
$.ajax({
  url: "database/find_data_training.php",
  data:{
    authority_num:1,
  },
  type: "POST",
  dataType: "JSON",
  async: false, //啟用同步請求
  success: function (data) {
    var cssString = "";
    // console.log(data);

    cumulation_hours = 0;


    $.each(data, function (index, value) {
      var isUpload = '未上傳';
      // var cert_isUpload = '未上傳';

      if(value.Upload_name != ""){
        isUpload = '已上傳';
      }


      cumulation_hours += parseFloat(value.Hours);

      cssString +=
      '<tr training_id="'+value.Id+'" acc_id="'+value.Account_id+'">' +
      '<td style="text-align:center">' + value.Training_date.split("年")[0] + "</td>" +
        '<td style="text-align:center">' + value.Training_date + "</td>" +
        '<td style="text-align:center">'+ value.Name + "</td>" +
        '<td style="text-align:center">' + value.Training_start_time.split(":")[0] + ":" + value.Training_start_time.split(":")[1] + 
        "至" + value.Training_end_time.split(":")[0] + ":" + value.Training_end_time.split(":")[1] + "</td>" +
        '<td style="text-align:center">' + value.Training_name + "</td>" +
        '<td style="text-align:center">' + parseFloat(value.Hours).toFixed(1) + "</td>" +
        '<td style="text-align:center">' + value.Place + "</td>" +
        '<td style="text-align:center">' + isUpload + "</td>" +
        '<td style="text-align:center">' + 
          '<a class="update_btn" data-toggle="modal" training_id="'+value.Id+'" acc_id="'+value.Account_id+'" style="text-decoration: underline;color:black;">查看</a>' + 
        '</td>'
        "</tr>";

        $("#training_year").append('<option value="'+value.Training_date.split("年")[0]+'">'+value.Training_date.split("年")[0]+'</option>');

        $("#training_id").append('<option value="'+value.Id+'">'+value.Id+'</option>');
        
        $("#name").append(
          '<option value="' + value.Name + '">' + value.Name + "</option>"
        );

        $("#place").append(
          '<option value="' + value.Place + '">' + value.Place + "</option>"
        );

        $("#training_name").append(
          '<option value="' + value.Training_name + '">' + value.Training_name + "</option>"
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

    //綁定onclick事件
    // $(".update_btn").attr("onclick","show_modal(this);");

    //點擊table tr 進入詳細頁面
    // $(".table-hover tbody").on("click", "tr", function () {
    //   window.location.href = 'training_detail.php?training_id='+$(this).attr("training_id")+'&acc_id='+$(this).attr("acc_id")+'';
    // });

    //點擊table tr 進入詳細頁面
    $(".update_btn").on("click", function () {
      window.location.href = 'training.php?training_id='+$(this).attr("training_id")+'&acc_id='+$(this).attr("acc_id")+'';
    });
  },
  error: function (e) {
    console.log(e);
  },
});
//endregion


// 民國年轉換日期格式yyyy-dd-mm region
function split_date(date) {
  var transed_date ="";
  
  if(date=="")
  {
    transed_date = formatDate(new Date());
  }
  else
  {
    transed_date = parseInt(date.split("年")[0])+1911+"-"+date.split("年")[1].split("月")[0]+"-"+date.split("年")[1].split("月")[1].split("日")[0];
  }

  return transed_date; 
}
//endregion

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
        extend: 'excelHtml5',
        title: "快樂聯盟-"+$(".breadcrumb li").last().text()+"",
        text:'匯出Excel'
    },
]
});

//範圍搜尋region
function parseTime(t) {
  var d = new Date();
  var time = t.match(/(\d+)(?::(\d\d))?\s*(p?)/);
  d.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
  d.setMinutes(parseInt(time[2]) || 0);
  return d;
}

var tr_date_range = (function( settings, data, dataIndex ) {
  var min_date = parseInt(Date.parse( split_date($('#tr_min_date').val())), 10 );
  var max_date = parseInt(Date.parse( split_date($('#tr_max_date').val())), 10 );
  var date = parseInt(Date.parse( split_date(data[1]) )) || 0; // use data for the date column
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

$("#tr_min_date, #tr_max_date").on("change", function () {
  $.fn.dataTable.ext.search.push(tr_date_range);
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
