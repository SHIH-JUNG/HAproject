const notyf = new Notyf();

$(function() {
    imagePreview();  
  });

//抓所有電話詢戒表region
$.ajax({
    url: "database/find_data_dlgrec.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        var cssString = "";
        // console.log(data)
        $.each(data,function(index,value){

            var sign_stus = "";
            var sign_css_str = "";

            if(value.social_worker_sign_msg=="")
            {                
                sign_stus = "目前尚無留言內容";
            }
            else
            {
                sign_stus = "留言時間："+value.social_worker_sign_time+"，留言內容："+value.social_worker_sign_msg;
            }

            if(value.social_worker_sign!="")
            {
                var social_worker_sign_file_val = value.social_worker_sign.replace("\.\.\/signature\/", "\.\/signature\/");
                sign_css_str += '<a src="'+social_worker_sign_file_val+'" style="color:blue;display: block;" target="_blank" alt="'+sign_stus+'" data-bs-toggle="tooltip" data-bs-placement="left" title="'+sign_stus+'">社工員已簽章<img style="vertical-align:middle;" class="apreview" width="25px" title="'+sign_stus+'" src="'+social_worker_sign_file_val+'"></a>';
            }


            if(value.supervise_sign_msg=="")
            {
                sign_stus = "目前尚無留言內容";
            }
            else
            {
                sign_stus = "留言時間："+value.supervise_sign_time+"，留言內容："+value.supervise_sign_msg;
            }
            
            if(value.supervise_sign!="")
            {
                var supervise_sign_file_val = value.supervise_sign.replace("\.\.\/signature\/", "\.\/signature\/");
                sign_css_str += '<a src="'+supervise_sign_file_val+'" style="color:blue;display: block;" target="_blank" alt="'+sign_stus+'" data-bs-toggle="tooltip" data-bs-placement="left" title="'+sign_stus+'">督導已簽章<img style="vertical-align:middle;" class="apreview" width="25px" title="'+sign_stus+'" src="'+supervise_sign_file_val+'"></a>';
            }


            if(sign_css_str=="")
            {
                sign_css_str = '<i style="color:gray;">待簽核</i>';
            }

           
            cssString += 
                    '<tr id="'+value.Id+'">' +
                        '<td style="text-align:center">' + sign_css_str + '</td>' +
                        '<td style="text-align:center">' + value.dlgrec_date + '</td>' +
                        '<td style="text-align:center">' + value.dlg_manager + '</td>' +
                        '<td style="text-align:center">' + value.social_worker + '</td>' +
                        '<td style="text-align:center">' + value.supervise + '</td>' +
                    '</tr>';

            sign_css_str = "";

            $("#dlg_manager").append('<option value="'+value.dlg_manager+'">'+value.dlg_manager+'</option>');

            $("#social_worker").append('<option value="'+value.social_worker+'">'+value.social_worker+'</option>');
        });

        //找出所有查詢表格下拉式選單，將內容排序、加上"所有查詢"、去除重複值
        var filter_select = $("select.filter")

        $.each(filter_select,function(i,v){

            var this_id = $(this).attr("id");

            if(this_id!=undefined)
            {
                 //option小到大排序
                $('#'+this_id+' option').sort(function(a,b){
                    var aText = $(a).text().toUpperCase();
                    var bText = $(b).text().toUpperCase();
                    if(aText>bText) return 1;
                    if(aText<bText) return -1;
                    return 0;
                }).appendTo('#'+this_id+'')

                //最前面新增"所有"選像
                $('#'+this_id+'').prepend("<option value='' selected='selected'>所有</option>");

                $("#"+this_id+"").children().each(function() {
                    //text = $(this).text();
                    //if($("select#"+this_id+" option:contains("+text+")").length > 1){
                    //    $("select#"+this_id+" option:contains("+text+"):gt(0)").remove();
                    //}
                    $(this).siblings('[value="' + this.value + '"]').remove();
                    //    console.log(text)
                });
            }
        });

        //印出表格
        $("#call_view").html(cssString);
        
        //點擊table tr 進入詳細頁面
        $(".table-hover tbody").on("click","tr",function () {
            window.location.href = 'dlgrec_detail.php?dlgrec_id='+$(this).attr("id")+'';
        });
    },
    
    error: function (e) {
            console.log(e);
            notyf.alert('伺服器錯誤,無法載入');
     }
});

//endregion


// 簽章圖片、留言、時間懸浮顯示region
// 設定移到該img元素的parent元素，觸發懸浮框圖片效果
// 要觸發該事件的圖片需 設定title、src、width，class設為apreview
this.imagePreview = function () {
    // 圖片距離鼠標的位置
    this.xOffset = 10;
    this.yOffset = -10;

    //hover([over,]out)
    //over:鼠標移到元素上所觸發的函數
    //out:鼠標移出元素所觸發的函數

    //鼠標圖片內容懸浮的事件
    $(".apreview").parent().hover(function (e) {
        this.t = $(this).children().attr("title");//顯示在圖片下的標題
        $(this).children().attr("title", "");    //將title設定為空值，不讓文字懸浮提示
        this.imgSr = $(this).children().attr("src");//圖片的連結
        this.c = (this.t != "") ? "<br/>" + this.t : "";
        $("body").append("<p class='preview'><img src='" + this.imgSr + "' alt='Image preview' width='800' height='200' />" + this.c + "</p>");
        $(".preview")
            .css("top", (e.pageY + yOffset) + "px")
            .css("left", (e.pageX + xOffset) + "px")
            .fadeIn("fast");
    },
    function () {
        $(this).children().attr("title", this.t);//恢復title
        $(".preview").remove();
    });


    //鼠標移動的事件，讓圖片隨著移動
    $(".apreview").parent().mousemove(function (e) {  
        $(".preview")
            .css("top", (e.pageY - yOffset) + "px")
            .css("left", (e.pageX + xOffset) + "px");
    });
};
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
        title: '快樂聯盟向日葵家園每日生活輔導紀錄表',
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

var date_range = (
function( settings, data, dataIndex ) {
    var min_date = parseInt(Date.parse( $('#min_date').val()), 10 );
    var max_date = parseInt(Date.parse( $('#max_date').val()), 10 );
    var date = parseInt(Date.parse( data[1] )) || 0; // use data for the date column
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

//endregion

//匯出EXCEL按鈕CSS設定 region
$('.buttons-excel').each(function() { 
$(this).removeClass('dt-button').addClass('btn btn-default') ;
}) 
//endregion
