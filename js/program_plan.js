//datepicker創建 region
datepicker_create = function(selector_id) {

  if(selector_id.includes("birth"))
  {
      $('#'+selector_id).datepicker({
          changeYear: true,
          changeMonth: true,
          currentText: "今天",
          dateFormat:"R.mm.dd",
          showButtonPanel: true,
          yearRange: "-109:+0",
          onClose: function(dateText) {
              // console.log($('#'+selector_id).val());
              // console.log(trans_to_EN(dateText));
          }
          ,beforeShow: function(input, inst) {
              var $this = $(this);
              var cal = inst.dpDiv;
              var outerh = $this.outerHeight();
              if($this.offset().top>1200)
              {
                  outerh = outerh*4;
              }
              else
              {
                  outerh = outerh*3;
              }
              // console.log($this.offset().top)
              // console.log(outerh)
  
  
              var top = $this.offset().top - outerh;
              var left = $this.offset().left*0.9;
              setTimeout(function() {
                  cal.css({
                      'top': top,
                      'left': left
                  });
              }, 10);
          }
      });
  }
  else
  {
      $('#'+selector_id).datepicker({
          changeYear: true,
          changeMonth: true,
          currentText: "今天",
          dateFormat:"R.mm.dd",
          showButtonPanel: true,
          yearRange: "-12:+5",
          onClose: function(dateText) {
              // console.log($('#'+selector_id).val());
              // console.log(trans_to_EN(dateText));
          }
          ,beforeShow: function(input, inst) {
              var $this = $(this);
              var cal = inst.dpDiv;
              var outerh = $this.outerHeight();
              if($this.offset().top>1200)
              {
                  outerh = outerh*4;
              }
              else
              {
                  outerh = outerh*3;
              }
              // console.log($this.offset().top)
              // console.log(outerh)
  
  
              var top = $this.offset().top - outerh;
              var left = $this.offset().left*0.86;
              setTimeout(function() {
                  cal.css({
                      'top': top,
                      'left': left
                  });
              }, 10);
          }
      });
  }
}
//endregion

// 民國年轉換日期格式yyyy-dd-mm region
function split_date(date) {
  return parseInt(date.split("年")[0])+1911+"-"+date.split("年")[1].split("月")[0]+"-"+date.split("年")[1].split("月")[1].split("日")[0]; 
}
//endregion

$(document).ready(function () {
  //將input name名稱為ch_datepicker創建datepicker初始化 region
  $("input[name='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion
  
});

// 轉換4個檔案的上傳日期，判斷今年是否已上傳檔案 region
file_showing_format_trans = function(files_date, file_type) {

  var today = new Date();

  var this_year = today.getFullYear();

  var file_staus = "-";

  // console.log(files_date)

  if(files_date!=null)
  {
    var files_date_year = files_date.split("-")[0] || 0;

    if(file_type == 0)
    {
      if(files_date == "0000-00-00" || parseInt(files_date_year) < this_year)
      {
        file_staus = "否";
      }
      else if(parseInt(files_date_year) == this_year)
      {
        file_staus = "是";
      }
    }
    else if(file_type==1)
    {
      if(files_date == "0000-00-00")
      {
        file_staus = "否";
      }
      else
      {
        file_staus = "是";
      }
    }
    
  }
  else
  {
    file_staus = "否";
  }

  // console.log(file_staus)

  return file_staus;
}
//endregion

//將日期轉為西元年格式2022-03-07(mysql date格式) region
trans_to_EN = function (endate) {
  var return_str = "";

  if(endate!="")
  {
      var strAry1 = endate.split("年");
      var strAry2 = strAry1[1].split("月");
      var strAry3 = strAry2[1].split("日");

      return_str = (parseInt(strAry1[0]) + 1911) + "-" + strAry2[0] + "-" + strAry3[0];
  }
  else
  {
      return_str = "";
  }
  

  return return_str;
};
//endregion

//將日期轉為民國年格式111年03月07日 region
trans_to_Tw = function (endate) {
  var return_str = "";
  if(endate!="")
  {
      var strAry = endate.split("-");

      if (parseInt(strAry[0]) > 1911) {
        strAry[0] = parseInt(strAry[0]) - 1911;
      }

      return_str = strAry[0]+"年"+strAry[1]+"月"+strAry[2]+"日";
  }
  else
  {
      return_str = "";
  }
  
  return return_str;
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

//團督記錄表格region
// var vo_year = getUrlVars()["year"];

$.ajax({
  url: "database/find_data_program_plan.php",
  type: "POST",
  dataType: "JSON",
  async: false, //啟用同步請求
  success: function (data) {
    var cssString = "";

    $.each(data, function (index, value) {
      cssString +=
        '<tr id="' +
        value.Id +
        '">' +
        '<td style="text-align:center">' +
        value.Date +
        "</td>" +
        '<td style="text-align:center">' +
        value.Plan_name +
        "</td>" +
        '<td style="text-align:center">' +
        value.Plan_from +
        "</td>" +
        '<td style="text-align:center">' +
        value.Fund +
        "</td>" +
        '<td style="text-align:center">' +
          file_showing_format_trans(value.Proposal_date, 1) +
        '</td>' +
        '<td style="text-align:center">' +
          file_showing_format_trans(value.Interim_date, 1) +
        '</td>' +
        '<td style="text-align:center">' +
          file_showing_format_trans(value.Achieve_date, 1) +
        '</td>' +
        '<td style="text-align:center">' +
          file_showing_format_trans(value.Other_date, 1) +
        '</td>' +
        "</tr>";
    });

    //印出表格
    $("#call_view").html(cssString);

    //點擊table tr 進入詳細頁面
    $(".table-hover tbody").on("click", "tr", function () {
      window.location.href =
        "program_plan_detail.php?program_id=" +
        $(this).attr("id") +
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
var $table = $('#tab_all').DataTable({
  "ordering": false,
  "info": true,
  "paging": true,
  "lengthChange": false,
  "pageLength": 10,
  "pagingType": "simple_numbers",
  "searching": true,
  "dom":
      "<'col-sm-12'tr>"+
      "<'col-sm-6'<'text-left'i>><'col-sm-6'<'text-right'p>>"+
      "<'col-sm-12'<'text-left'B>>",
  language: {

      "sZeroRecords": "没有匹配结果",
      "sInfo": "顯示 _START_ 到 _END_ 筆資料，總共有 _TOTAL_ 筆資料",
      "sInfoEmpty": "目前共有 0 筆紀錄",
      "sInfoFiltered": "(由 _MAX_ 筆資料结果過濾)",
      "fnInfoCallback": function (oSettings, iStart, iEnd, iMax, iTotal, sPre) {
          $("#count_people").text("人次："+iTotal);
          return sPre
      },
      paginate: {
          previous: '‹上一頁',
          next:     '下一頁›'
      },
      aria: {
          paginate: {
              previous: 'Previous',
              next:     'Next'
          }
      }
  },
  buttons: [
      {
          extend: 'excelHtml5',
          title: '快樂聯盟員工履歷一覽表',
          text:'匯出Excel'
      },
  ]
});



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
//     //格式：.serch(該欄位值, 是否啟用正則表達式匹配, 是否關閉智能查詢, 是否開啟不區分大小寫)
//     //須完全匹配option的value值 設定option.value 使用正則符號匹配，ex:"^" + this.value+ "$"
//     //前端注意option value內有特殊字元須加入轉義字 ex:H+梅 positive => H\+梅 positive
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
  $.fn.dataTable.ext.search.push(hours_range);
  $table.draw();
});

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
