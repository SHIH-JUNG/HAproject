//抓所有四階段表region
$.ajax({
    url: "database/find_month_check.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        var TimeNow= new Date();
        var today = TimeNow.getFullYear()+"-"+('0'+(TimeNow.getMonth()+1)).substr(-2)+"-"+('0'+TimeNow.getDate()).substr(-2);
        var cssString = "";
        for (var index in data.name) {
            if(data.open_id[index] != "699"){
                if(Date.parse(today,10) < Date.parse(data.stage1[index])){
                    var fstage = "第一階段";
                }else if(Date.parse(today,10) < Date.parse(data.stage2[index])){
                    var fstage = "第二階段";
                }else if(Date.parse(today,10) < Date.parse(data.stage3[index])){
                    var fstage = "第三階段";
                }else{
                    var fstage = "第四階段";
                }
                cssString += 
                        '<tr>' +
                            '<td>' +data.open_id[index]+ '</td>' +
                            '<td>' + data.house[index] + '</td>' +
                            '<td>' + data.name[index] + '</td>' +
                            '<td>' + data.age[index] + '</td>' +
                            '<td>' + data.enter_date[index] + '</td>' +
                            '<td>' + fstage + '</td>' +
                            '<td>' + data.treatment[index] + '</td>' +
                            '<td>' + data.interactive[index] + '</td>' +
                            '<td>'+data.call_phone[index]+'</td>' +
                        '</tr>'
                $("#open_id").append('<option value="'+data.open_id[index]+'">'+data.open_id[index]+'</option>');
            }
        } 
        $("#check").html(cssString);
    },
    error: function (e) {
            alert('伺服器錯誤,無法載入' + e);
     }
});
//endregion

//table設定region
var $table = $('#tab_check').DataTable({
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
            title: '沐恩四階段總表',
            text:'匯出Excel'
        },
    ]
});
//範圍搜尋region
var age_range =(
    function( settings, data, dataIndex) {
//        $("#count").text($table.column(0).data().unique().count())
        var min = parseInt( $('#min').val(), 10 );
        var max = parseInt( $('#max').val(), 10 );
        var name = data[0];
        var age = parseFloat( data[3] ) || 0; // use data for the age column
//       console.log(data[5])
        if ( ( isNaN( min ) && isNaN( max ) ) ||
             ( isNaN( min ) && age <= max ) ||
             ( min <= age   && isNaN( max ) ) ||
             ( min <= age   && age <= max ) )
        {
//            $("#count_people2").text("人數："+$table.search());
            return true;
        }        
        return false;
    });

var date_range = (
    function( settings, data, dataIndex) {
        var min_date = parseInt(Date.parse( $('#min_date').val()), 10 );
        var max_date = parseInt(Date.parse( $('#max_date').val()), 10 );
        var date = parseInt(Date.parse( data[4] )) || 0; // use data for the date column        
        if ( ( isNaN( min_date ) && isNaN( max_date ) ) ||
             ( isNaN( min_date ) && date <= max_date ) ||
             ( min_date <= date   && isNaN( max_date ) ) ||
             ( min_date <= date   && date <= max_date ) )
        {            
            return true;
        }
        return false;
    });
//
//var people_count = (
//    function( settings, data, dataIndex ) {
//        var name = data[2] || 0; // use data for the name column
////        console.log(dt.rows().count())
////        if ()
////        {
////            console.log()
////        }
//    });
////endregion
//
//
$('select.filter').on('change', function () {
    var rel = $(this).attr("rel");    
    $table.columns(rel).search(this.value).draw();     
});

//預設總人數人次region
$("#count_people").text("人次："+$table.column(0).data().count());
$("#count_people2").text("，人數："+$table.column(0).data().unique().count());
//endregion

$('#min, #max').keyup( function() {        
    $.fn.dataTable.ext.search.push(age_range);    
    $table.draw();
}); 

$('#min_date, #max_date').on('change', function() {
    $.fn.dataTable.ext.search.push(date_range);
    $table.draw();
}); 

$table.on('draw', function () {
    $("#count_people2").text("，人數："+$table.column(0, {page:'current'} ).data().unique().count());
});

$('input.filter').on('keyup change', function () {
    var rel = $(this).attr("rel");
    $table.columns(rel).search(this.value).draw();

});
//endregion

//匯出EXCEL按鈕CSS設定 region
$('.buttons-excel').each(function() { 
    $(this).removeClass('dt-button').addClass('btn btn-default') ;
}) 
//endregion
