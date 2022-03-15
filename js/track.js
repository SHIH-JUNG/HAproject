//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//抓取後追一覽表region
$.ajax({
    url: "database/find_track.php",
    type: "POST",
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
        for (var index in data.open_id) {
            var cssString = "";
                cssString += 
                        '<tr id="'+data.id[index]+'" face_id="'+data.face_id[index]+'" open_id="'+data.open_id[index]+'" name="'+data.name[index]+'" leave="'+data.leave_date[index]+'" house="'+data.house[index]+'" addition="'+data.addition[index]+'" end_id="'+data.end_id[index]+'" four_id="'+data.four_id[index]+'" face_num="'+data.face_num[index]+'">' +
                            '<td>' + data.open_id[index] + '</td>' +
                            '<td>' + data.name[index] + '</td>' +
                            '<td>' + data.addition[index] + '</td>' +
                            '<td>' + data.house[index] + '</td>' +
                            '<td>' + data.enter_date[index] + '</td>' +
                            '<td>' + data.leave_date[index] + '</td>' +
                            '<td>' + data.end_date[index] + '</td>' +
                            '<td>' + data.end_status[index] + '</td>' +
                        '</tr>'
            $("#s_open_id").append('<option value="'+data.open_id[index]+'">'+data.open_id[index]+'</option>');
        }
        $("#track_view").html(cssString);
            $(".table-hover tbody").on("click","tr",function () {
//                console.log($(this).attr("class"));
                window.location.href = 'track_all.php?face_id='+$(this).attr("face_id")+'&open_id='+$(this).attr("open_id")+'&name='+$(this).attr("name")+'&date='+$(this).attr("leave")+'&house='+$(this).attr("house")+'&addition='+$(this).attr("addition")+'&id='+$(this).attr("id")+'&end_id='+$(this).attr("end_id")+'&four_id='+$(this).attr("four_id")+'&face_num='+$(this).attr("face_num")+'';
            });
        
        $("#s_open_id").children().each(function () {
            text = $(this).text();
            if ($("select#s_open_id option:contains(" + text + ")").length > 1) {
                $("select#s_open_id option:contains(" + text + "):gt(0)").remove();
            }
        });
    },

    error: function (e) {
        console.log(e);
    }
});
//endregion

//查詢end表並填入編號region
$.ajax({
    url: "database/find_end.php",
    type: "POST",
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
        for (var index in data.open_id) {
            $("#open_id").append('<option value="' + data.open_id[index] + '">' + data.open_id[index] + '</option>');
        }
        $("#open_id").children().each(function () {
            text = $(this).text();
            if ($("select#open_id option:contains(" + text + ")").length > 1) {
                $("select#open_id option:contains(" + text + "):gt(0)").remove();
            }
        });
    },

    error: function (e) {
        notyf.alert('伺服器錯誤,無法載入' + e);
    }
});
//endregion

//新增後追輔導region

//呼叫懸浮頁
$("#add_track").on('click', function () {
    $("#OK").modal('show');
});

//取消
//$("#cancel").on('click', function () {
//    $("#open_id").val("");
//});



//查詢end編號並填入對應資料region
//$("#open_id").on('change', function () {
//    $.ajax({
//        url: "database/find_end.php",
//        data: {
//            open_id: $("#open_id").val()
//        },
//        type: "POST",
//        dataType: "JSON",
//        async: false, //啟用同步請求
//        success: function (data) {
//            var date = (data.enter_date[0]).split('-');
//            date_all = (parseInt(date[0]) - 1911) + '-' + date[1] + '-' + date[2];
//            $("#leave_date").text(data.leave_date[0]);
//            $("#face_id").text(data.face_id[0]);
//            $("#track_name").text(data.name[0]);
//            $("#track_addition").text(data.main_addition[0]);
//            $("#house").text(data.house[0]);
//            $("#enter_date").text(date_all);
//            $("#end_date").text(data.leave_date[0]);
//            $("#end_status").text(data.end_status[0]);
//        },
//        error: function (e) {
//            notyf.alert('伺服器錯誤,無法載入' + e);
//        }
//    });
//});
//endregion

//選擇部門和負責人方法region

//如果部門改變呼叫user方法region
$(".department").on('change',function(){   
    $(".user").empty();
    append_user();
});
$.ajax({
    type:'POST',
    url:'database/find_house_info.php',
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        for (var index in data.id) {
            $(".department").append('<option value="'+data.name[index]+'">'+data.name[index]+'</option>');
        }
    },
});
    //endregion

    //呼叫user方法region
    function append_user(){             
            $.ajax({
                type:'POST',
                url:'database/find_check_user.php',
                data:{
                    department:$(".department").val()
                },
                dataType: "JSON",
                async: false,//啟用同步請求
                success: function (data) {
                    for (var index in data.id) {
                        $(".user").append('<option value="'+data.name[index]+'">'+data.name[index]+'</option>');
                    }
                },
            });
    }
    //endregion

//endregion

//table設定region
var $table = $('#track_all').DataTable({
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