//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//抓所有離園一覽表region
$.ajax({
    url: "database/find_end.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        var cssString = "";
        for (var index in data.name) {
//            console.log(data.id[index])
            cssString += 
                    '<tr face_id='+data.face_id[index]+' open_id='+data.open_id[index]+' name='+data.name[index]+' addition='+data.main_addition[index]+' house='+data.house[index]+' leave_date='+data.leave_date[index]+' end_id="'+data.end_id[index]+'" four_id ="'+data.four_id[index]+'" face_num="'+data.face_num[index]+'">' +
                        '<td>' + data.face_id[index] + '</td>' +
                        '<td>' + data.open_id[index] + '</td>' +
                        '<td>' + data.house[index] + '</td>' +
                        '<td>' + data.name[index] + '</td>' +
                        '<td>' + data.leave_date[index] + '</td>' +
                        '<td>' + data.leave_stage[index] + '</td>' +
                        '<td>' + data.main_addition[index] + '</td>' +
                        '<td>' + data.end_status[index] + '</td>' +
                    '</tr>'
            $("#face_id").append('<option value="'+data.face_id[index]+'">'+data.face_id[index]+'</option>');
            $("#open_id").append('<option value="'+data.open_id[index]+'">'+data.open_id[index]+'</option>');
        } 
        $("#end").html(cssString);
            //點擊table tr 進入詳細頁面
            $(".table-hover tbody").on("click","tr",function () {
//                console.log($(this).attr("class"));
                window.location.href = 'close.php?face_id='+$(this).attr("face_id")+'&open_id='+$(this).attr("open_id")+'&name='+$(this).attr("name")+'&addition='+$(this).attr("addition")+'&house='+$(this).attr("house")+'&leave_date='+$(this).attr("leave_date")+'&end_id='+$(this).attr("end_id")+'&four_id='+$(this).attr("four_id")+'&face_num='+$(this).attr("face_num")+'';
            });
    },
    error: function (e) {
            notyf.alert('伺服器錯誤,無法載入' + e);
     }
});
//endregion

//表格設定region
var $table = $('#tab_end').DataTable({
    "ordering": false,
    "info": true,
    "paging": true,
//    "className":"cell-border",
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
            title: '沐恩會談總表',
            text:'匯出Excel'
        },
    ]
});


//範圍搜尋region
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

var people_count = (
    function( settings, data, dataIndex ) {
        var name = data[2] || 0; // use data for the name column
//        console.log(dt.rows().count())
//        if ()
//        {
//            console.log()
//        }
    });
//endregion


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