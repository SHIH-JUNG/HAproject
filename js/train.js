//抓所有四階段表region
$.ajax({
    url: "database/find_train.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
//        var TimeNow= new Date();
//        var today = TimeNow.getFullYear()+"-"+('0'+(TimeNow.getMonth()+1)).substr(-2)+"-"+('0'+TimeNow.getDate()).substr(-2);
//        var today = "2020-12-16";
        var cssString = "";
        for (var index in data.name) {
            var date = (data.enter_date[index]).split('-');
            var date2 = (data.leave_date[index]).split('-');
//            console.log(date)
            var bc = (parseInt(date[0])+1911)+'-'+date[1]+'-'+date[2];
            var bc2 = (parseInt(date2[0])+1911)+'-'+date2[1]+'-'+date2[2];
//            if(data.open_id[index] != '699'){
//                if(Date.parse(today,10) < Date.parse(data.stage1[index])){
//                    var fstage = "第一階段";
//                }else if(Date.parse(today,10) < Date.parse(data.stage2[index])){
//                    var fstage = "第二階段";
//                }else if(Date.parse(today,10) < Date.parse(data.stage3[index])){
//                    var fstage = "第三階段";
//                }else{
//                    var fstage = "第四階段";
//                }
            
                cssString += 
                        '<tr> ' +
                            '<td>' +data.open_id[index]+ '</td>' +
                            '<td>' + data.name[index] + '</td>' +
                            '<td>' + data.house[index] + '</td>' +
                            '<td>' + data.train_stage[index] + '</td>' +
                            '<td>' + bc + '</td>' +
                            '<td>'+ bc2 +'</td>' +
                            '<td>' + data.times[index] + '</td>' +
                        '</tr>'
                $("#open_id").append('<option value="'+data.open_id[index]+'">'+data.open_id[index]+'</option>');
//            }
        } 
        $("#train").html(cssString);
            //點擊table tr 進入詳細頁面
//            $(".table-hover tbody").on("click","tr",function () {
////                console.log($(this).attr("class"));
//                if($("#username").text() == "園主任"){
//                    window.location.href = 'four_all_all.php?id='+$(this).attr("id")+'&open_id='+$(this).attr("openid")+'';
//                } else if($(this).attr("assign") == $("#username").text()){
//                    window.location.href = 'four_all_all.php?id='+$(this).attr("id")+'&open_id='+$(this).attr("openid")+'';
//                }else{
//                    swal({
//                        title: '您無關看此個案的權限！',
//                        type: 'warning',
//                    }).then(function () {
//                        window.location.href = 'four.php#';
//                    })
                    
                    
//                }
//            });
    },
    error: function (e) {
            console.log(e);
     }
});
//endregion

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

var date_range2 = (
    function( settings, data, dataIndex ) {
        var min_date2 = parseInt(Date.parse( $('#min_date2').val()), 10 );
        var max_date2 = parseInt(Date.parse( $('#max_date2').val()), 10 );
        var date2 = parseInt(Date.parse( data[5] )) || 0; // use data for the date column

        if ( ( isNaN( min_date2 ) && isNaN( max_date2 ) ) ||
             ( isNaN( min_date2 ) && date2 <= max_date2 ) ||
             ( min_date2 <= date2   && isNaN( max_date2 ) ) ||
             ( min_date2 <= date2   && date2 <= max_date2 ) )
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
$("#count_people2").text("人數："+$table.column(0).data().unique().count());
//endregion

$('select.filter').on('change', function () {
    var rel = $(this).attr("rel");
    $table.columns(rel).search(this.value).draw();

});
$('#min_date, #max_date').keyup( function() {
    $.fn.dataTable.ext.search.push(date_range);
    $table.draw();
} ); 
$('#min_date2, #max_date2').on('change', function() {
//    console.log($('#min_date').val())
    $.fn.dataTable.ext.search.push(date_range2);
    $table.draw();
} ); 

$table.on('draw', function () {
    $("#count_people2").text("人數："+$table.column(0, {page:'current'} ).data().unique().count());
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