//抓所有詢戒關懷表region
    $.ajax({
        url: "database/find_inside.php",
        type: "POST",
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            var cssString = "";
            for (var index in data.open_id) {
                cssString += 
                        '<tr id="'+data.id[index]+'" face_id="'+data.face_id[index]+'" open_id="'+data.open_id[index]+'" name="'+data.name[index]+'" addition="'+data.addition[index]+'" enter_date="'+data.enter_date[index]+'" house="'+data.house[index]+'" four_id="'+data.four_id[index]+'" face_num="'+data.face_num[index]+'">' +
                            '<td style="text-align:center">' + data.open_id[index] + '</td>' +
                            '<td style="text-align:center">' + data.name[index] + '</td>' +
                            '<td style="text-align:center">' + data.gender[index] + '</td>' +
                            '<td style="text-align:center">' + data.addition[index] + '</td>' +
                            '<td style="text-align:center">' + data.age[index] + '</td>' +
                            '<td style="text-align:center">' + data.enter_date[index] + '</td>' + 
                            '<td style="text-align:center">' + data.house[index] + '</td>' + 
                        '</tr>'
                $("#open_id").append('<option value="'+data.open_id[index]+'">'+data.open_id[index]+'</option>');
            } 
                $("#open_id").children().each(function() {
                    text = $(this).text();
                    if($("select#open_id option:contains("+text+")").length > 1){
                        $("select#open_id option:contains("+text+"):gt(0)").remove();
                    }
//                    console.log(text)
                });

            //印出表格
            $("#inside_view").html(cssString);
            
            //點擊table tr 進入詳細頁面
            $(".table-hover tbody").on("click","tr",function () {
                window.location.href = 'inside_all.php?id='+$(this).attr("id")+'&face_id='+$(this).attr("face_id")+'&open_id='+$(this).attr("open_id")+'&name='+$(this).attr("name")+'&addition='+$(this).attr("addition")+'&enter_date='+$(this).attr("enter_date")+'&house='+$(this).attr("house")+'&four_id='+$(this).attr("four_id")+'&face_num='+$(this).attr("face_num")+'';
            });
        },
        
        error: function (e) {
                console.log(e);
         }
    });

//endregion

//table設定region
var $table = $('#inside_all').DataTable({
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
            title: '沐恩電話詢戒總表',
            text:'匯出Excel'
        },
    ]
});

//範圍搜尋region
//var age_range =(
//    function( settings, data, dataIndex ) {
//        var min = parseInt( $('#min').val(), 10 );
//        var max = parseInt( $('#max').val(), 10 );
//        var age = parseFloat( data[5] ) || 0; // use data for the age column
//
//        if ( ( isNaN( min ) && isNaN( max ) ) ||
//             ( isNaN( min ) && age <= max ) ||
//             ( min <= age   && isNaN( max ) ) ||
//             ( min <= age   && age <= max ) )
//        {
//            return true;
//        }
//        return false;
//    });

var date_range = (
    function( settings, data, dataIndex ) {
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

//$('#Search').on('click', function () {
//var args1 = $("#phone_id").val();
//var args2 = $("#call_date").val();
//var args3 = $("#name").val();
//var args4 = $("#gender").val();
//var args5 = $("#addition").val();
//var args6 = $("#home").val();
//var args7 = $("#info_name").val();
//var args8 = $("#relationship").val();
//var args9 = $("#phone").val();
//var args10 = $("#k_place").val();
//var args11 = $("#wish").val();

//$table.columns(rel).search(this.value).draw();
//});
//$('#min, #max').keyup( function() {
//    $table.draw();
//} ); 

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
//$('#min, #max').keyup( function() {
//    $table.draw();
//} ); 
//endregion

//匯出EXCEL按鈕CSS設定 region
$('.buttons-excel').each(function() { 
    $(this).removeClass('dt-button').addClass('btn btn-default') ;
}) 
//endregion