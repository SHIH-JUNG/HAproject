//抓所有自他評統計表region
    $.ajax({
        url: "database/find_daily_statistic_a.php",
        type: "POST",
        dataType: "JSON",
        async: false, //啟用同步請求
        success: function (data) {
            var cssString = "";
            for (var index in data.face_id) {
//                var checkface_id = 
//                if(data.face_id[index] == data.face_id[index])
                cssString += 
                    '<tr>' +
                        '<td>'+data.face_id[index]+'</td>' +
                        '<td>'+data.name[index]+'</td> ' +
                        '<td>'+data.write_date[index]+'</td>' +
                        '<td>'+data.type[index]+'</td>' +
                        '<td>'+data.number[index]+'</td>' +
                        '<td style="background-color:#FFBD9D">'+data.a1[index]+'</td>' +
                        '<td style="background-color:#FFBD9D">'+data.a2[index]+'</td>' +
                        '<td style="background-color:#FFBD9D">'+data.a3[index]+'</td>' +
                        '<td style="background-color:#66B3FF">'+data.b1[index]+'</td>' +
                        '<td style="background-color:#66B3FF">'+data.b2[index]+'</td>' +
                        '<td style="background-color:#66B3FF">'+data.b3[index]+'</td>' +
                        '<td style="background-color:#66B3FF">'+data.b4[index]+'</td>' +
                        '<td style="background-color:#66B3FF">'+data.b5[index]+'</td>' +
                        '<td style="background-color:#66B3FF">'+data.b6[index]+'</td>' +
                        '<td style="background-color:#66B3FF">'+data.b7[index]+'</td>' +
                        '<td style="background-color:#66B3FF">'+data.b8[index]+'</td>' +
                        '<td style="background-color:#FFE66F">'+data.c1[index]+'</td>' +
                        '<td style="background-color:#FFE66F">'+data.c2[index]+'</td>' +
                        '<td style="background-color:#FFE66F">'+data.c3[index]+'</td>' +
                        '<td style="background-color:#FFE66F">'+data.c4[index]+'</td>' +
                        '<td style="background-color:#FFE66F">'+data.c5[index]+'</td>' +
                        '<td style="background-color:#FFE66F">'+data.c6[index]+'</td>' +
                        '<td style="background-color:#FFE66F">'+data.c7[index]+'</td>' +
                        '<td style="background-color:#93FF93">'+data.d1[index]+'</td>' +
                        '<td style="background-color:#93FF93">'+data.d2[index]+'</td>' +
                        '<td style="background-color:#93FF93">'+data.d3[index]+'</td>' +
                        '<td style="background-color:#93FF93">'+data.d4[index]+'</td>' +
                        '<td style="background-color:#93FF93">'+data.d5[index]+'</td>' +
                        '<td style="background-color:#93FF93">'+data.d6[index]+'</td>' +
                        '<td style="background-color:#93FF93">'+data.d7[index]+'</td>' +
                        '<td>'+data.a_total[index]+'</td>' +
                        '<td style="background-color:#FFBD9D">'+data.a_avage[index]+'</td>' +
                        '<td>'+data.b_total[index]+'</td>' +
                        '<td style="background-color:#66B3FF">'+data.b_avage[index]+'</td>' +
                        '<td>'+data.c_total[index]+'</td>' +
                        '<td style="background-color:#FFE66F">'+data.c_avage[index]+'</td>' +
                        '<td>'+data.d_total[index]+'</td>' +
                        '<td style="background-color:#93FF93">'+data.d_avage[index]+'</td>' +
                        '<td>'+data.all_total[index]+'</td>' +
                        '<td style="background-color:#8E8E8E">'+data.all_avage[index]+'</td>' +
                        '<td>'+data.percentile[index]+'</td>' +
                    '</tr>'
            $("#face_id").append('<option value="'+data.face_id[index]+'">'+data.face_id[index]+'</option>');
            }
            $('select[id="face_id"] option').each(function() {
                text = $(this).text();
                if($("select option:contains("+text+")").length > 1)
                    $("select option:contains("+text+"):gt(0)").remove();
            });
            //印出表格
            $("#a_tboy").html(cssString);
        },
        error: function (e) {
            console.log(e);
        }
    });
//endregion

//table設定region
$(document).ready(function () {
    var $table = $('#tab_daily').DataTable({
        "ordering": false,
        "info": false,
        "paging": false,
        "lengthChange": false,
        "pagingType": "simple_numbers",
        "searching": true,
        "dom": "<'col-sm-12'tr>" +
            "<'col-sm-6'<'text-left'i>><'col-sm-6'<'text-right'p>>" +
            "<'col-sm-12'<'text-left'B>>",
        "scrollY": "500px",
        "scrollX": true,
        "scrollCollapse": true,
        "fixedColumns": {
            "leftColumns": 5
        },
        buttons: [
            {
                extend: 'excelHtml5',
                title: '詢戒生活問卷統計表',
                text: '匯出Excel'
        },
    ]
    });

    //匯出EXCEL按鈕CSS設定 region
    $('.buttons-excel').each(function () {
        $(this).removeClass('dt-button').addClass('btn btn-default');
    })
    //endregion
    
    
    //範圍搜尋region
var date_range = (
    function( settings, data, dataIndex) {
        var min_date = parseInt(Date.parse( $('#min_date').val()), 10 );
        var max_date = parseInt(Date.parse( $('#max_date').val()), 10 );
        var date = parseInt(Date.parse( data[2] )) || 0; // use data for the date column        
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
    jeDate('#date',{
        onClose:false,
        isToday:false,
        donefun:function(data) {
            $table.columns("2").search(data.val).draw();
        },
        clearfun:function(elem, val) {
            $table.columns("2").search('').draw();
        },
        // 分隔符可以任意定义，该例子表示只显示年月
        format: 'YYYY-MM'
       // 可以将此改为    `format: 'YYYY'`     表示只显示年的插件
    });
    
//    jeDate('#min_date',{
//        onClose:false,
//        isToday:false,
//        donefun:function(data) { 
//            $.fn.dataTable.ext.search.push(date_range);    
//            $table.draw(); 
//        },
//        clearfun:function(elem, val) {
//            $table.columns('').search('').draw();
//        },
//        // 分隔符可以任意定义，该例子表示只显示年月
//        format: 'YYYY-MM'
//       // 可以将此改为    `format: 'YYYY'`     表示只显示年的插件
//    });
//    
//    jeDate('#max_date',{
//        onClose:false,
//        isToday:false,
//        donefun:function(data) {
//            $.fn.dataTable.ext.search.push(date_range);    
//            $table.draw(); 
//        },
//        clearfun:function(elem, val) {
//            $table.columns('').search('').draw();
//        },
//        // 分隔符可以任意定义，该例子表示只显示年月
//        format: 'YYYY-MM'
//       // 可以将此改为    `format: 'YYYY'`     表示只显示年的插件
//    });
    
    
$('#min_date, #max_date').on('change', function() {
    $.fn.dataTable.ext.search.push(date_range);
    $table.draw();
}); 
    
    
    
    $('select.filter').on('change', function () {
        var rel = $(this).attr("rel");    
        $table.columns(rel).search(this.value).draw();     
    });
    
    $('input.filter').on('keyup change', function () {
        var rel = $(this).attr("rel");
        $table.columns(rel).search(this.value).draw();
//        console.log($table.columns(rel).search(this.value).draw())
    });
});

//endregion

//重置搜尋region
$("#reload_search").on('click',function(){
    location.reload();
});
//endregion

