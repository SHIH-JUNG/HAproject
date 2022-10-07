// 打卡紀錄顯示 region
$.ajax({
    url: "database/find_data_individual_login_records.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {

        // console.log(data)

        var cssString = "";
        $.each(data,function(index,value){

            var timestamp_arr = split_timestamp(value.Login_timestamp);

            cssString += 
            '<tr cr_one_id="'+value.Id+'">' +
                '<td style="text-align:center">' + timestamp_arr[0] + '</td>' +
                '<td style="text-align:center">' + timestamp_arr[1] + '</td>' +
                '<td style="text-align:center">' + value.Login_coordinate + '</td>' +
                '<td style="text-align:center">'+'<a style="text-decoration: underline;color:#337ab7;" href="https://www.google.com/maps/search/?api=1&query='+value.Login_coordinate+'" target="_blank">查看(另開新頁Google Map)</a>'+'</td>' +
            '</tr>';

            $(".login_name").text("員工姓名："+value.Login_name);
            $(".login_account").text("帳號："+value.Login_account);
        });

        $("#individual_login_records").html(cssString);
    },
    error: function (e) {
        notyf.alert('伺服器錯誤,無法載入');
    }
});
//endregion


// 出勤紀錄顯示 region
$.ajax({
    url: "database/find_data_individual_login_records.php",
    data:{
        mode:1,
    },
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {

        console.log(data)

        var cssString = "";
        $.each(data,function(index,value){

            var timestamp_arr = split_timestamp(value.Login_timestamp);
            var year_month_split_arr = split_year_month(value.Login_timestamp);

            cssString += 
            '<tr cr_one_id="'+index+'">' +
                '<td style="text-align:center">' + year_month_split_arr[0] + '</td>' +
                '<td style="text-align:center">' + year_month_split_arr[1] + '</td>' +
                '<td style="text-align:center">' + value.count + '</td>' +
                '<td style="text-align:center">' + timestamp_arr[0] + '  ' + timestamp_arr[1] + '</td>' +
            '</tr>';

            $(".login_name").text("員工姓名："+value.Login_name);
            $(".login_account").text("帳號："+value.Login_account);
        });

        $("#individual_absent_records").html(cssString);
    },
    error: function (e) {
        notyf.alert('伺服器錯誤,無法載入');
    }
});
//endregion


function split_timestamp(timestamp) {
    var date = timestamp.split(" ")[0];
    var time = timestamp.split(" ")[1];

    return new Array(trans_to_Tw(date), time);
}

function split_year_month(timestamp) {
    var year = parseInt(timestamp.split(" ")[0].split("-")[0]) - 1911;
    var month = parseInt(timestamp.split(" ")[0].split("-")[1]);

    return new Array(year, month);
}

//將日期轉為民國年格式111-03-07 region
function trans_to_Tw(endate) {
    var strAry = endate.split("-");
  
    if (parseInt(strAry[0]) > 1911) {
      strAry[0] = parseInt(strAry[0]) - 1911;
    }
  
    return strAry.join("-");
};
//endregion


























//設定table搜尋框重整後自動填入文字 region

//table設定region
var $table_1 = $("[name='tab_all_1']").DataTable({
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
            title: '快樂聯盟員工打卡紀錄表',
            text:'匯出Excel'
        },
    ]
});



var $table = $("[name='tab_all_2']").DataTable({
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
            title: '快樂聯盟員工出勤紀錄表',
            text:'匯出Excel'
        },
    ]
});

//範圍搜尋region
function parseTime( t ) {
    var d = new Date();
    var time = t.match( /(\d+)(?::(\d\d))?\s*(p?)/ );
    d.setHours( parseInt( time[1]) + (time[3] ? 12 : 0) );
    d.setMinutes( parseInt( time[2]) || 0 );
    return d;
 }


//預設總人數人次region
$(".count_people").text("人次："+$table.column(0).data().count());
$(".count_people2").text("，人數："+$table.column(0).data().unique().count());
//endregion

//額外設定select
$('select.filter').on('change', function () {
    var rel = $(this).attr("rel");
    if(this.value!="")
    {
        //格式：.serch(該欄位值, 是否啟用正則表達式匹配, 是否關閉智能查詢, 是否開啟不區分大小寫)
        //須完全匹配option的value值 設定option.value 使用正則符號匹配，ex:"^" + this.value+ "$"
        //前端注意option value內有特殊字元須加入轉義字 ex:H+梅 positive => H\+梅 positive
        $table.columns(rel).search("^" + this.value+ "$", true, false, true).draw();
    }
    else
    {
        $table.columns(rel).search(this.value).draw();
    }
    
});

$('input.filter').on('keyup change', function () {
    //    console.log(this.value);
    var rel = $(this).attr("rel");
    //    console.log(rel);
    
    $table.columns(rel).search(this.value).draw();
});
//endregion


$table.on('draw', function () {
    $(".count_people2").text("，人數："+$table.column(0, {page:'current'} ).data().unique().count());
});

//匯出EXCEL按鈕CSS設定 region
$('.buttons-excel').each(function() { 
    $(this).removeClass('dt-button').addClass('btn btn-default') ;
}) 
//endregion