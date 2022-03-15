//抓所有詢戒會談表region
$.ajax({
    url: "database/find_face.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        var cssString = "";
        for (var index in data.Name) {
//            console.log(data.id[index])
            cssString += 
                    '<tr gender="'+data.gender[index]+'" name="'+data.Name[index]+'" assign="'+data.one_user_name[index]+'" times="'+data.times[index]+'" date="'+data.start_datetime[index] +'" target="'+data.phone_id[index]+'" id="'+data.date_RE[index]+data.face_id[index]+'" age="'+data.Age[index]+'" addition="'+data.Addiction[index]+'" address="'+data.Address[index]+'">' +
                        '<td>' +data.date_RE[index]+data.face_id[index]+ '</td>' +
                        '<td>' + data.Name[index] + '</td>' +
                        '<td>' + data.start_datetime[index] + '</td>' +
                        '<td>' + data.times[index] + '</td>' +
                        '<td>' + data.gender[index] + '</td>' +
                        '<td>' + data.Addiction[index] + '</td>' +
                        '<td>'+ data.use_addition_ago[index]+'</td>' +
                        '<td>' + data.Age[index] + '</td>' +
                        '<td>' + data.Address[index] + '</td>' +
                        '<td>'+data.relationship[index]+'</td>' +
                        '<td>' + data.one_user_name[index] + '</td>' +                        
                    '</tr>'
            $("#face_id").append('<option value="'+data.date_RE[index]+data.face_id[index]+'">'+data.date_RE[index]+data.face_id[index]+'</option>');
        } 
        $("#face").html(cssString);
            //點擊table tr 進入詳細頁面
            $(".table-hover tbody").on("click","tr",function () {
//                console.log($(this).attr("class"));
                window.location.href = 'open_all.php?face_id='+$(this).attr("id")+'&gender='+$(this).attr("gender")+'&name='+$(this).attr("name")+'&phone_id='+$(this).attr("target")+'&date='+$(this).attr("date")+'&times='+$(this).attr("times")+'&assign='+$(this).attr("assign")+'&age='+$(this).attr("age")+'&addition='+$(this).attr("addition")+'&address='+$(this).attr("address")+'';
            });
    },
    error: function (e) {
            console.log(e);
     }
});
//endregion

//table設定region
var $table = $('#tab_face').DataTable({
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
var age_range =(
    function( settings, data, dataIndex) {
//        $("#count").text($table.column(0).data().unique().count())
        var min = parseInt( $('#min').val(), 10 );
        var max = parseInt( $('#max').val(), 10 );
        var name = data[0];
        var age = parseFloat( data[7] ) || 0; // use data for the age column
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

//重置搜尋region
$("#reload_search").on('click',function(){
    location.reload();
});
//endregion




