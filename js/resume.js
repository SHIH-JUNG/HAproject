$(document).ready(function () {

  
});

// 轉換4個檔案的上傳日期，判斷今年是否已上傳檔案 region
file_showing_format_trans = function(files_date) {

  var today = new Date();

  var this_year = today.getFullYear();

  var file_staus = "-";

  var files_date_year = files_date.split("-")[0] || 0;

  

  if(files_date == "0000-00-00" || parseInt(files_date_year) < this_year)
  {
    file_staus = "否";
  }
  else if(parseInt(files_date_year) == this_year)
  {
    file_staus = "是";
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


// 員工履歷一覽表 region
$.ajax({
  url: "database/find_data_resume.php",
  type: "POST",
  dataType: "JSON",
  async: false, //啟用同步請求
  success: function (data) {
    console.log(data)
    var cssString = "";

    $.each(data, function (index, value) {

      var on_or_off = "";
      on_or_off = value.On_or_off == '0' ? '否' : '是';

      cssString +=
        '<tr id="' + value.Id + '">' +
          '<td style="text-align:center">' +
            value.Name +
          '</td>' +
          '<td style="text-align:center">' +
            trans_to_Tw(value.Entry_date) +
          '</td>' +
          '<td style="text-align:center">' +
           (parseInt(value.Entry_date.split("-")[0]) - 1911) +
          '</td>' +
          '<td style="text-align:center">' +
            value.Entry_date.split("-")[1] +
          '</td>' +
          '<td style="text-align:center">' +
            on_or_off +
          '</td>' +
          '<td style="text-align:center">' +
            file_showing_format_trans(value.Employment_contract_date) +
          '</td>' +
          '<td style="text-align:center">' +
            file_showing_format_trans(value.NDA_file_date) +
          '</td>' +
          '<td style="text-align:center">' +
            file_showing_format_trans(value.Diploma_date) +
          '</td>' +
          '<td style="text-align:center">' +
            file_showing_format_trans(value.PA_file_date) +
          '</td>' +
        '</tr>';
    });

    //印出表格
    $("#call_view").html(cssString);

    //點擊table tr 進入詳細頁面
    $(".table-hover tbody").on("click", "tr", function () {
      window.location.href = "resume_detail_v2.php?id=" + $(this).attr("id") + "";
    });
  },

  error: function (e) {
    console.log(e);
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

var date_range = (
  function( settings, data, dataIndex ) {
      var min_date = parseInt(Date.parse( $('#min_date').val()), 10 );
      var max_date = parseInt(Date.parse( $('#max_date').val()), 10 );
      var date = parseInt(Date.parse( data[2] )) || 0; // use data for the date column
      // console.log($('#min_date').val())
      if ( ( isNaN( min_date ) && isNaN( max_date ) ) ||
           ( isNaN( min_date ) && date <= max_date ) ||
           ( min_date <= date   && isNaN( max_date ) ) ||
           ( min_date <= date   && date <= max_date ) )
      {
          return true;
      }
      return false;
  });
//endregion

//預設總人數人次region
$("#count_people").text("人次："+$table.column(0).data().count());
$("#count_people2").text("，人數："+$table.column(0).data().unique().count());
//endregion

$('select.filter').on('change', function () {
  var rel = $(this).attr("rel");
  $table.columns(rel).search(this.value).draw();

});
$('#min, #max').keyup( function() {
  $.fn.dataTable.ext.search.push(age_range);
  $table.draw();
} ); 
$('#min_date, #max_date').on('change', function() {
//    console.log($('#min_date').val())
  $.fn.dataTable.ext.search.push(date_range);
  $table.draw();
} ); 

$table.on('draw', function () {
  $("#count_people2").text("，人數："+$table.column(0, {page:'current'} ).data().unique().count());
});

$('input.filter').on('keyup change', function () {
//    console.log(this.value);
  var rel = $(this).attr("rel");
//    console.log(rel);

  $table.columns(rel).search(this.value).draw();

});

//匯出EXCEL按鈕CSS設定 region
$('.buttons-excel').each(function() { 
  $(this).removeClass('dt-button').addClass('btn btn-default') ;
}) 
//endregion