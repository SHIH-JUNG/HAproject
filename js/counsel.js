//datepicker創建 region
datepicker_create = function(selector_id) {

    if(selector_id.includes("birth"))
    {
        $('#'+selector_id).datepicker({
            changeYear: true,
            changeMonth: true,
            currentText: "今天",
            dateFormat:"R.mm.dd",
            showButtonPanel: true,
            yearRange: "-109:+0",
            onClose: function(dateText) {
                // console.log($('#'+selector_id).val());
                // console.log(trans_to_EN(dateText));
            }
            ,beforeShow: function(input, inst) {
                var $this = $(this);
                var cal = inst.dpDiv;
                var outerh = $this.outerHeight();
                if($this.offset().top>1200)
                {
                    outerh = outerh*4;
                }
                else
                {
                    outerh = outerh*3;
                }
                // console.log($this.offset().top)
                // console.log(outerh)
    
    
                var top = $this.offset().top - outerh;
                var left = $this.offset().left*0.9;
                setTimeout(function() {
                    cal.css({
                        'top': top,
                        'left': left
                    });
                }, 10);
            }
        });
    }
    else
    {
        $('#'+selector_id).datepicker({
            changeYear: true,
            changeMonth: true,
            currentText: "今天",
            dateFormat:"R.mm.dd",
            showButtonPanel: true,
            minDate:new Date(new Date().getFullYear() - 10, 0, 1),
            maxDate:new Date(new Date().getFullYear() + 10, 11, 31),
            onClose: function(dateText) {
                // console.log($('#'+selector_id).val());
                // console.log(trans_to_EN(dateText));
            }
            ,beforeShow: function(input, inst) {
                var $this = $(this);
                var cal = inst.dpDiv;
                var outerh = $this.outerHeight();
                if($this.offset().top>1200)
                {
                    outerh = outerh*4;
                }
                else
                {
                    outerh = outerh*3;
                }
                // console.log($this.offset().top)
                // console.log(outerh)
    
    
                var top = $this.offset().top - outerh;
                var left = $this.offset().left*0.86;
                setTimeout(function() {
                    cal.css({
                        'top': top,
                        'left': left
                    });
                }, 10);
            }
        });
    }
}
//endregion

$(document).ready(function () {

    //將name名稱為ch_datepicker創建datepicker初始化 region
    $("[name='ch_datepicker']").each(function(){

        var this_id = $(this).attr("id");
        datepicker_create(this_id);
    });
    //endregion
}); 



//將日期轉為民國年格式111.03.07 region
trans_to_Tw =  function(endate) {
    var strAry = endate.split('-');

    if(parseInt(strAry[0]) > 1911){
        strAry[0] = parseInt(strAry[0]) - 1911;
    }

    return strAry.join(".");
}
//endregion

//將日期轉為西元年格式2022-03-07(mysql date格式) region
trans_to_EN =  function(endate) {
    var strAry = endate.split('.');

    if(parseInt(strAry[0]) < 1911){
        strAry[0] = parseInt(strAry[0]) + 1911;
    }

    return strAry.join("-");
}
//endregion

//檢查SQL撈出來的日期格式region
check_sql_date_format = function(date) {
    if(date=="0000-00-00")
    {
        date = "";
    }
    else
    {
        date  = trans_to_Tw(date);
    }

    return date;
}

//endregion


//監所輔導表格region
$.ajax({
    url: "database/find_data_counsel.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        // console.log(data)
        var cssString = "";

        $.each(data,function(index,value){

            cssString += 
            '<tr id="'+value.Id+'" counsel_id="'+value.Counsel_id+'">' +
                '<td style="text-align:center">' + value.Refferal + '</td>' +
                '<td style="text-align:center">' + value.Counsel_id + '</td>' +
                '<td style="text-align:center">' + value.Name + '</td>' +
                '<td style="text-align:center">' + value.Gender + '</td>' +
                '<td style="text-align:center">' + check_sql_date_format(value.Birth) + '</td>' +
                '<td style="text-align:center">' + value.Pid + '</td>' +
                '<td style="text-align:center">' + value.Info_name + '</td>' +
                '<td style="text-align:center">' + value.Info_phone + '</td>' +
                '<td style="text-align:center">' + check_sql_date_format(value.In_prison_date) + '</td>' +
                '<td style="text-align:center">' + check_sql_date_format(value.Out_prison_date) + '</td>' +
                '<td style="text-align:center">' + value.Is_parole + '</td>' +
                '<td style="text-align:center">' + check_sql_date_format(value.HIV_diagnosis_date) + '</td>' +
                '<td style="text-align:center">' + value.Family_know + '</td>' +
                '<td style="text-align:center">' + value.Cocktail_therapy_status + '</td>' +
            '</tr>'
            $("#counsel_id").append('<option value="'+value.Counsel_id+'">'+value.Counsel_id+'</option>');
        })
        
             //option小到大排序
             $('#counsel_id option').sort(function(a,b){
                var aText = $(a).text().toUpperCase();
                var bText = $(b).text().toUpperCase();
                if(aText>bText) return 1;
                if(aText<bText) return -1;
                return 0;
            }).appendTo('#counsel_id')

            //最前面新增"所有"選像
            $('#counsel_id').prepend("<option value='' selected='selected'>所有</option>");

            $("#counsel_id").children().each(function() {
                text = $(this).text();
                if($("select#counsel_id option:contains("+text+")").length > 1){
                    $("select#counsel_id option:contains("+text+"):gt(0)").remove();
                }
                //    console.log(text)
            });

        //印出表格
        $("#call_view").html(cssString);
        
        //點擊table tr 進入詳細頁面
        $(".table-hover tbody").on("click","tr",function () {
            window.location.href = 'counsel_detail.php?id='+$(this).attr("id")+'&counsel_id='+$(this).attr("counsel_id")+'';
        });
    },
    
    error: function (e) {
            console.log(e);
     }
});

//endregion



//設定table搜尋框重整後自動填入文字region

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
        title: '快樂聯盟監所輔導紀錄總表',
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

var birth_date_range = (function( settings, data, dataIndex ) {
    var min_date = parseInt(Date.parse( trans_to_EN($('#birth_min_date').val())), 10 );
    var max_date = parseInt(Date.parse( trans_to_EN($('#birth_max_date').val())), 10 );
    var date = parseInt(Date.parse( trans_to_EN(data[4]) )) || 0; // use data for the date column
    if ( ( isNaN( min_date ) && isNaN( max_date ) ) ||
         ( isNaN( min_date ) && date <= max_date ) ||
         ( min_date <= date   && isNaN( max_date ) ) ||
         ( min_date <= date   && date <= max_date ) )
    {
        return true;
    }
    return false;
});

var HIV_date_range = (function( settings, data, dataIndex ) {
    var min_date = parseInt(Date.parse( trans_to_EN($('#HIV_min_date').val())), 10 );
    var max_date = parseInt(Date.parse( trans_to_EN($('#HIV_max_date').val())), 10 );
    var date = parseInt(Date.parse( trans_to_EN(data[11]) )) || 0; // use data for the date column
    if ( ( isNaN( min_date ) && isNaN( max_date ) ) ||
         ( isNaN( min_date ) && date <= max_date ) ||
         ( min_date <= date   && isNaN( max_date ) ) ||
         ( min_date <= date   && date <= max_date ) )
    {
        return true;
    }
    return false;
});

var out_prison_date_range = (function( settings, data, dataIndex ) {
    var min_date = parseInt(Date.parse( trans_to_EN($('#out_prison_min_date').val())), 10 );
    var max_date = parseInt(Date.parse( trans_to_EN($('#out_prison_max_date').val())), 10 );
    var date = parseInt(Date.parse( trans_to_EN(data[9]) )) || 0; // use data for the date column
    if ( ( isNaN( min_date ) && isNaN( max_date ) ) ||
         ( isNaN( min_date ) && date <= max_date ) ||
         ( min_date <= date   && isNaN( max_date ) ) ||
         ( min_date <= date   && date <= max_date ) )
    {
        return true;
    }
    return false;
});

var in_prison_date_range = (function( settings, data, dataIndex ) {
    var min_date = parseInt(Date.parse( trans_to_EN($('#in_prison_min_date').val())), 10 );
    var max_date = parseInt(Date.parse( trans_to_EN($('#in_prison_max_date').val())), 10 );
    var date = parseInt(Date.parse( trans_to_EN(data[8]) )) || 0; // use data for the date column
    if ( ( isNaN( min_date ) && isNaN( max_date ) ) ||
         ( isNaN( min_date ) && date <= max_date ) ||
         ( min_date <= date   && isNaN( max_date ) ) ||
         ( min_date <= date   && date <= max_date ) )
    {
        return true;
    }
    return false;
});



var time_range = (
    function( settings, data, dataIndex ) {
        // var min_time = parseInt(Date.parse( $('#min_time').val()), 10 );
        // var max_time = parseInt(Date.parse( $('#max_time').val()), 10 );
        // var time = parseInt(Date.parse( data[2] )) || 0; // use data for the date column
        var min_time = $('#min_time').val()
        var max_time = $('#max_time').val()
        switch (min_time) {
            case '00:00':
                min_time = '12:00';
                break;
            case '12:00':
                min_time = '24:00';
                break;
            default:
                min_time = min_time;
                break;
        }

        switch (max_time) {
            case '00:00':
                max_time = '12:00';
                break;
            case '12:00':
                max_time = '24:00';
                break;
            default:
                max_time = max_time;
                break;
        }

        const [hours_i, minutes_i] = (min_time).split(':');
        const [hours_x, minutes_x] = (max_time).split(':');
        const [hours_filter, minutes_filter] = data[2].split(':') || 0;
        const totalSeconds_min = (+hours_i) * 60 * 60 + (+minutes_i) * 60;
        const totalSeconds_max = (+hours_x) * 60 * 60 + (+minutes_x) * 60;
        const totalSeconds_time = ((+hours_filter) * 60 * 60 + (+minutes_filter) * 60) || 0;

        if ( ( isNaN( totalSeconds_min ) && isNaN( totalSeconds_max ) ) ||
             ( isNaN( totalSeconds_min ) && totalSeconds_time <= totalSeconds_max ) ||
             ( totalSeconds_min <= totalSeconds_time   && isNaN( totalSeconds_max ) ) ||
             ( totalSeconds_min <= totalSeconds_time   && totalSeconds_time <= totalSeconds_max ) )
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
$('#min, #max').keyup( function() {
$.fn.dataTable.ext.search.push(age_range);
$table.draw();
}); 

$('#birth_min_date, #birth_max_date').on('change', function() {
    //    console.log($('#min_date').val())
    $.fn.dataTable.ext.search.push(birth_date_range);
    $table.draw();
}); 
$('#HIV_min_date, #HIV_max_date').on('change', function() {
    //    console.log($('#min_date').val())
    $.fn.dataTable.ext.search.push(HIV_date_range);
    $table.draw();
}); 
$('#out_prison_min_date, #out_prison_max_date').on('change', function() {
    //    console.log($('#min_date').val())
    $.fn.dataTable.ext.search.push(out_prison_date_range);
    $table.draw();
}); 
$('#in_prison_min_date, #in_prison_max_date').on('change', function() {
    //    console.log($('#min_date').val())
    $.fn.dataTable.ext.search.push(in_prison_date_range);
    $table.draw();
}); 

$('#min_time, #max_time').on('change', function() {
    //    console.log($('#min_date').val())
    $.fn.dataTable.ext.search.push(time_range);
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

//endregion

//匯出EXCEL按鈕CSS設定 region
$('.buttons-excel').each(function() { 
$(this).removeClass('dt-button').addClass('btn btn-default') ;
}) 
//endregion
