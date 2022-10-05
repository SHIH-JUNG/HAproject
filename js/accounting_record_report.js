
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

var arr_year = getUrlVars()["year"];


//檢查SQL撈出來的日期格式region
check_sql_date_format = function (date) {
    if (date == "0000-00-00") {
      date = "";
    } else {
      date = trans_to_Tw(date);
    }
  
    return date;
};

//將日期轉為民國年格式111年03月07日 region
trans_to_Tw = function (endate) {
    var strAry = endate.split("\/");
  
    return strAry[0] + "年" + strAry[1] + "月" + strAry[2] + "日";
};
//endregion

$(document).ready(function () {

});


// 顯示各期零用金紀錄、兒少單據、轉帳資料 region
$.ajax({
    url: "database/find_accounting_record_report.php",
    data: {
      year: arr_year,
    },
    type: "POST",
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
      console.log(data);
      var cssString = "";
      
      $.each(data, function (index, value) {

        var report_type_num = "";

        switch (value.Report_type) {
            case "月報表":
                report_type_num = 1;
                break;
        
            case "季報表":
                report_type_num = 2;
                break;

            case "上半年報表":
                report_type_num = 3;
                break;

            case "下半年報表":
                report_type_num = 4;
                break;
        
            case "年報表":
                report_type_num = 5;
                break;
                
            case "現金報表":
                report_type_num = 6;
                break;

            case "記帳士報表":
                report_type_num = 7;
                break;
        }

        var report_file_path = value.Report_path.replace("../", "./");
        var report_file_name = value.Report_name;


        cssString = '<tr id="tr'+value.Id+'">' +
        '<td style="text-align:center">' + value.Report_title + '</td>' +
        '<td style="text-align:center">' + trans_to_Tw(value.Report_date) + '</td>' +
        '<td style="text-align:center">' + '<a href="'+report_file_path+'" style="text-decoration:none;color:blue;" target="_blank">'
        +report_file_name
        +'</a>' + '</td>' +
        '<td style="text-align:center">' + '<a href="accounting_record_report_detail?id='+value.Id+'" style="text-decoration: underline;color:black;">查看詳細資料</a>' + '</td>' +
        '</tr>';
        
        //印出表格
        $("#call_view_"+report_type_num).append(cssString);
      });

    },
    error: function (e) {
      swal({
        type: "error",
        title: "系統錯誤!請聯絡負責人",
        allowOutsideClick: false, //不可點背景關閉
      })
    //   .then(function () {
    //     history.back();
    //   });
    },
});
//endregion





//設定table搜尋框重整後自動填入文字region

//table設定region
var $table = $("[name='tab_all']").DataTable({
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
        title: "快樂聯盟會計報表紀錄",
        text: "匯出Excel",
      },
    ],
  });

  
  //預設總人數人次region
  $(".count_people").text("人次：" + $table.column(0).data().count());
  $(".count_people2").text("，人數：" + $table.column(0).data().unique().count());
  //endregion
  
  
  $table.on("draw", function () {
    $(".count_people2").text(
      "，人數：" + $table.column(0, { page: "current" }).data().unique().count()
    );
  });
  
  //endregion
  
  //匯出EXCEL按鈕CSS設定 region
  $(".buttons-excel").each(function () {
    $(this).removeClass("dt-button").addClass("btn btn-default");
  });
  //endregion