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
  // $("#" + selector_id).datepicker("setDate", "today");
};
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

      if(value.Resigned_date == null)
      {
        var resigned_date = "-";
      }
      else
      {
        var resigned_date = value.Resigned_date;
      }
    
      cssString +=
        '<tr id="' + value.Id + '">' +
          '<td style="text-align:center">' +
            value.Name +
          '</td>' +
          '<td style="text-align:center">' +
            value.Entry_date +
          '</td>' +
          // '<td style="text-align:center">' +
          //  value.Entry_date.split("年")[0] +
          // '</td>' +
          // '<td style="text-align:center">' +
          //   value.Entry_date.split("年")[1].split("月")[0] +
          // '</td>' +
          '<td style="text-align:center">' +
            value.On_or_off +
          '</td>' +
          '<td style="text-align:center">' +
            resigned_date +
          '</td>' +
          '<td style="text-align:center">' +
            file_showing_format_trans(value.Resume_datas_date, 1) +
          '</td>' +
          '<td style="text-align:center">' +
            file_showing_format_trans(value.Employment_contract_date, 0) +
          '</td>' +
          '<td style="text-align:center">' +
            file_showing_format_trans(value.NDA_file_date, 1) +
          '</td>' +
          '<td style="text-align:center">' +
            file_showing_format_trans(value.Diploma_date, 1) +
          '</td>' +
          '<td style="text-align:center">' +
            file_showing_format_trans(value.PA_file_date, 0) +
          '</td>' +
        '</tr>';

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
      window.location.href = "resume_detail_v2.php?id=" + $(this).attr("id") + "";
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
  "ordering": true,
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


  // var entry_year_range = (
  //   function( settings, data, dataIndex ) {
  //       var min_date = parseInt($('#entry_min_year').val());
  //       var max_date = parseInt($('#entry_max_year').val());
  //       var date = parseInt(data[2]) || 0; // use data for the date column
  //       // console.log(date)
  //       if ( ( isNaN( min_date ) && isNaN( max_date ) ) ||
  //            ( isNaN( min_date ) && date <= max_date ) ||
  //            ( min_date <= date   && isNaN( max_date ) ) ||
  //            ( min_date <= date   && date <= max_date ) )
  //       {
  //           return true;
  //       }
  //       return false;
  //   });

  //   var entry_month_range = (
  //     function( settings, data, dataIndex ) {
  //         var min_date = parseInt($('#entry_min_month').val());
  //         var max_date = parseInt($('#entry_max_month').val());
  //         var date = parseInt(data[3]) || 0; // use data for the date column
  //         // console.log(date)
  //         if ( ( isNaN( min_date ) && isNaN( max_date ) ) ||
  //              ( isNaN( min_date ) && date <= max_date ) ||
  //              ( min_date <= date   && isNaN( max_date ) ) ||
  //              ( min_date <= date   && date <= max_date ) )
  //         {
  //             return true;
  //         }
  //         return false;
  //     });

    var entry_date_range = (
      function( settings, data, dataIndex ) {
          var min_date = parseInt(Date.parse( split_date($('#entry_min').val())), 10 );
          var max_date = parseInt(Date.parse( split_date($('#entry_max').val())), 10 );
          var date = parseInt(Date.parse( split_date(data[1]) )) || 0; // use data for the date column
          // console.log(date)
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

// $('#entry_min_year, #entry_max_year').on('change', function() {
//   //    console.log($('#entry_min_year').val())
//     $.fn.dataTable.ext.search.push(entry_year_range);
//     $table.draw();
//   } ); 

// $('#entry_min_month, #entry_max_month').on('change', function() {
//   //    console.log($('#entry_min_month').val())
//     $.fn.dataTable.ext.search.push(entry_month_range);
//     $table.draw();
//   } ); 

$('#entry_min, #entry_max').on('change', function() {
//    console.log($('#entry_min').val())
  $.fn.dataTable.ext.search.push(entry_date_range);
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