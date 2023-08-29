
const notyf = new Notyf();

var address_arr=[];
var new_address_arr=[];

//抓所有電話諮詢紀錄region
    $.ajax({
        url: "database/find_data.php",
        type: "POST",
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log(data);
            var cssString = "";
            var local_str = "";
            var consult_date = "";
            for (var index in data.Call_datetime) {
                //判斷癮別取第一個字
//                if(data.Addiction[index] =="鴉片"|| data.Addiction[index] =="嗎啡"|| data.Addiction[index] =="海洛因"|| data.Addiction[index] =="古柯鹼"|| data.Addiction[index] =="安非他命"|| data.Addiction[index] =="搖頭丸"|| data.Addiction[index] =="K他命"|| data.Addiction[index] =="酒精"){
//                    main_val_all = data.Addiction[index];
//                    main_val = data.Addiction[index].substr(0,1);
//                }else if(data.Addiction[index] =="大麻"){
//                    main_val_all = data.Addiction[index];
//                    main_val = data.Addiction[index].substr(1,1);
//                }else if(data.Addiction[index] == "FM2藥丸"){
//                    main_val_all = data.Addiction[index];
//                    main_val = data.Addiction[index].substr(0,3);
//                }else{
//                    main_val_all = data.Addiction[index];
//                    main_val = data.Addiction[index].substr(0,1);
//                }
                if(data.Call_datetime[index] == '' || data.Call_datetime[index] == null)
                {
                    consult_date = data.Start_date[index]
                }
                else
                {
                    consult_date = data.Call_datetime[index]
                }
                phone = data.R_phone[index].split("、");
//                console.log(phone);
                cssString += 
//                        '<a href="phone_detail(原版).php?id='+ data.id[index] + '><tr>' +
                        '<tr id="'+data.Phone_id[index]+'">' +
                            '<td style="text-align:center">' +data.Phone_id[index]+ '</td>' +
                            '<td style="text-align:center">' + data.Name[index] + '</td>' +
                            '<td style="text-align:center">' + consult_date + '</td>' +
                            '<td style="text-align:center">' + data.Way[index] + '</td>' +
                            '<td style="text-align:center">' + data.Way_detail[index] + '</td>' +
                            // '<td style="text-align:center">' + data.Count[index] + '</td>' +
                            '<td style="text-align:center">' + data.phone_count[index] + '</td>' +
                            '<td style="text-align:center"></td>' +
                            '<td style="text-align:center">' + data.Gender[index] + '</td>' +
                            '<td style="text-align:center">' + data.Object_type[index] + '</td>' +
                            '<td style="text-align:center">' + data.M_addiction[index] + '</td>' +
                            '<td style="text-align:center">' + data.A_detail[index] + '</td>' +
                            '<td style="text-align:center">' + data.Address[index].substring(0,3) + '</td>' +
                            // '<td style="text-align:center">' + data.Referral_detail[index] + '</td>' +
                            '<td style="text-align:center">' + data.R_detail[index] + '</td>' +
                            // '<td style="text-align:center">' + data.Relationship_detail[index] + '</td>' +
                            // '<td style="text-align:center">' + data.Know_from_detail[index] + '</td>' +
                            '<td style="text-align:center">' + data.Eligible[index] + '</td>' +    
                            '<td style="text-align:center">' + data.Assign[index] + '</td>' +   
                        '</tr>'
                        
                //將Phone_id加入編號的option選項內
                $("#phone_id").append('<option value="'+data.Phone_id[index]+'">'+data.Phone_id[index]+'</option>');
                $("#phone_count").append('<option value="'+data.phone_count[index]+'">'+data.phone_count[index]+'</option>');
                $("#assign_n").append('<option value="'+data.Assign[index]+'">'+data.Assign[index]+'</option>');
                //將地址分割出縣市名稱
                local_str = data.Address[index];
                if(local_str.indexOf("縣") != -1 || local_str.indexOf("市") != -1)
                {
                    var local_arr = local_str.substring(0,3);
                }
                //縣市名稱加入陣列
                address_arr.push(local_arr);
            } 
                //刪除重複的元素
                address_arr = filterArray(address_arr);

                //刪除null或空值元素
                address_arr.forEach(function(item, index, arr) {
                    if (item==null || item=="") {
                        arr.splice(index, 1);
                    }
                });
                    
                //console.log(address_arr);
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
                        // if(aText>bText) return 1;
                        // if(aText<bText) return -1;
                        // return 0;

                        return aText - bText;
                    }).appendTo('#'+this_id+'')

                    //最前面新增"所有"選像
                    $('#'+this_id+'').prepend("<option value='' selected='selected'>所有</option>");

                    $("#"+this_id+"").children().each(function() {
                        // text = $(this).text();
                        // if($("select#"+this_id+" option:contains("+text+")").length > 1){
                        //    $("select#"+this_id+" option:contains("+text+"):gt(0)").remove();
                        // }
                        $(this).siblings('[value="' + this.value + '"]').remove();
                        //    console.log(text)
                    });
                }
            });

            //印出表格
            $("#call_view").html(cssString);
            
            //點擊table tr 進入詳細頁面
            $(".table-hover tbody").on("click","tr",function () {
                window.location.href = 'phone_detail_v2.php?phone_id='+$(this).attr("id")+'';
            });
            // console.log(index);
        },
        
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入');
         }
    });
//endregion


//依據phone_id抓所有面訪次數region
var get_tr_phoneid = [];
var get_face_counts = [];

//抓取每個tr的id值(Phone_id)，存入get_tr_phoneid陣列
$('#call_view tr').each(function(){
    get_tr_phoneid.push($(this).attr("id"));
});

//依據get_tr_phoneid陣列儲存的Phone_id值查詢相對應face資料庫
$.each(get_tr_phoneid, function(index,val) {
    $.ajax({
        url: "database/find_face_count.php",
        type: "POST",
        data:{
            Phone_id:val,
        },
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            //  console.log(data)
             //若該Phone_id未在face資料建檔會Face_counter顯示undefined，需轉為"0"
             if(data.Face_counter[0]==undefined || data.Face_counter[0]=="" || data.Face_counter[0]==null)
             {
                data.Face_counter[0] = '0';
             }
             //將得到的面訪次數存入get_face_counts陣列
             get_face_counts.push(data.Face_counter[0]);

             //將面訪次數的數值加到 #face_count 的option值中
             $("#face_count").append('<option value="'+data.Face_counter[0]+'">'+data.Face_counter[0]+'</option>');

             //option小到大排序
             $('#face_count option').sort(function(a,b){
                var aText = $(a).text().toUpperCase();
                var bText = $(b).text().toUpperCase();
                // if(aText>bText) return 1;
                // if(aText<bText) return -1;
                // return 0;

                return aText - bText;
            }).appendTo('#face_count')
            
            //最前面新增"所有"選像
            $('#face_count').prepend("<option value='' selected='selected'>所有</option>");

             //去除重複
             $("#face_count").children().each(function() {
                //text = $(this).text();
                //if($("select#face_count option:contains("+text+")").length > 1){
                //    $("select#face_count option:contains("+text+"):gt(0)").remove();
                //}
                $(this).siblings('[value="' + this.value + '"]').remove();
            });
        },
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入');
         }
    });
}); 

//將面訪次數逐一寫入表格中
$('#call_view tr').each(function(index,element){
        $(this).children("td").eq(6).text(get_face_counts[index])
});
//endregion



//刪除陣列重複元素region
function filterArray(inputArr){
    var found ={};
    var out = inputArr.filter(function(element){
        return found.hasOwnProperty(element)? false : (found[element]=true);
    });
    return out;
}
//endregion

//獲取臺灣各縣市名稱，按照北到南順序加到下拉式選單region
$.ajax({
    url: "database/find_counties.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        // console.log(data);
        var local_arr = [];
        for (var index in data.Id) {
            local_arr.push(data.Counties_Cities[index]);

            //將縣市重新按照資料庫的北到南順序排列
            // console.log(address_arr);
            for(var i=0; i<address_arr.length; i++)
            {
                var arr_num = local_arr.indexOf(address_arr[i]);

                if(arr_num>0)
                {
                    new_address_arr[arr_num] = address_arr[i];
                }
                //console.log(address_arr[i],i)
                
            }
        }

        //將排序完成的縣市加入下拉式選單中
        $.each(new_address_arr,function(index,val){
            if(val!=undefined)
            {
                $("#local_id").append('<option value="'+val+'">'+val+'</option>');
            }
        });

        //console.log(local_arr);
        // console.log(new_address_arr);
    },
    
    error: function (e) {
        notyf.alert('伺服器錯誤,無法載入');
    }
});
//endregion


//選擇月份talbe(未完成) region
//$(".chose").change(function() {    
////    console.log(Today.getFullYear()+"-"+$("#month").val());
//    if($("#month").val() == 0){ 
//        $("#tab_month").css("display","none");
//        $("#tab_all").css("display","");
//        //抓所有電話詢戒表
//        $.ajax({
//            url: "database/find_data.php",
//            type: "POST",
//            dataType: "JSON",
//            async: false,//啟用同步請求
//            success: function (data) {
//                var cssString = "";
//                for (var index in data.Name) {
//                    cssString += 
//                            '<tr>' +
//                            '<td>' + data.date[index] + '</td>' +
//                            '<td>' + data.Name[index] + '</td>' +
//                            '<td>' + data.Gender[index] + '</td>' +
//                            '<td>' + data.Addiction[index] + '</td>' +
//                            '<td>' + data.Age[index] + '</td>' +
//                            '<td>' + data.Address[index] + '</td>' +
//                            '<td><a href="page2.php?'+ data.id[index] +'"><input id="edit" type="button" class="btn btn-default" value="詳細資料"></a></td>' +
//                            '</tr>'
//                }
//                $("#member_view_month").html(cssString);
//            },
//            error: function (e) {
//                 notyf.alert('伺服器錯誤,無法載入' + e);
//            }
//        });
//    }else{
//        $("#tab_all").css("display","none");
//        $("#tab_month").css("display","");
//        var Today=new Date();    
//        //抓月份電話詢戒表
//        $.ajax({
//            url: "database/find_data_month.php",
//            data:{
//                year:Today.getFullYear(),
//                month:$("#month").val(),
//            },
//            type: "POST",
//            dataType: "JSON",
//            async: false,//啟用同步請求
//            success: function (data) {
//                var cssString = "";
//                for (var index in data.Name) {
//                    cssString += 
//                            '<tr>' +
//                            '<td>' + data.date[index] + '</td>' +
//                            '<td>' + data.Name[index] + '</td>' +
//                            '<td>' + data.Gender[index] + '</td>' +
//                            '<td>' + data.Addiction[index] + '</td>' +
//                            '<td>' + data.Age[index] + '</td>' +
//                            '<td>' + data.Address[index] + '</td>' +
//                            '<td><a href="page2.php?'+ data.id[index] +'"><input id="edit" type="button" class="btn btn-default" value="詳細資料"></a></td>' +
//                            '</tr>'
//                }
//                $("#member_view_month").html(cssString);
//            },
//            error: function (e) {
//                 notyf.alert('伺服器錯誤,無法載入' + e);
//            }
//        });
//    }   
//});
//endregion

//文字框顯示隱藏&取消勾選變回預設值region
$("#relationship").change(function(){
    if($("#relationship").val() != '本人'){
        $("#other_text").css("display","");
    }else{
        $("#other_text").css("display","none");
    }
});
$("#checkbox1").change(function(){
    if($("#checkbox1").prop('checked')){
        $("#other_Addiction_text1").css("display","");
    }else{
        $("#other_Addiction_text1").css("display","none");
        $("#other_Addiction_text1").val("0");
    }
});
$("#checkbox2").change(function(){
    if($("#checkbox2").prop('checked')){
        $("#other_Addiction_text2").css("display","");
    }else{
        $("#other_Addiction_text2").css("display","none");
        $("#other_Addiction_text2").val("0");
    }
});
$("#checkbox3").change(function(){
    if($("#checkbox3").prop('checked')){
        $("#other_Addiction_text3").css("display","");
    }else{
        $("#other_Addiction_text3").css("display","none");
        $("#other_Addiction_text3").val("0");
    }
});
$("#checkbox5").change(function(){
    if($("#checkbox5").prop('checked')){
        $("#other_Addiction_text5").css("display","");
    }else{
        $("#other_Addiction_text5").css("display","none");
        $("#other_Addiction_text5").val("");
    }
});
//endregion

//取消後清除文字框region
function phone_cancel(){
    $("#call_datetime").val("");
    $("#name").val("");
    $("#age").val("");
    $("#info_name").val("");
    $("#address").val("");
};
//endregion  

//判斷是否勾選賦予input值region
//酒精
$('#checkbox4').on('change', function () {
    if ($('#checkbox4').prop('checked')) {
        $('#other_Addiction_text4').val("酒精");
    }else{
        $('#other_Addiction_text4').val("");
    }
});
//關係
$('#relationship').change(function (){
    if ($('#relationship').val() == '本人') {
        $('#other_text').val("本人");
    }else{
        $('#other_text').val("");
    }
});
//endregion

//設定table搜尋框重整後自動填入文字region

//按按鈕儲存table搜尋框文字
//$(document).on('click',"#edit", function(){
//    var inputValue = $(".search").find("input").val();
//    console.log(inputValue);
//    sessionStorage.setItem("inputValue", inputValue);
//});
////自動填入
//$(document).ready(function() {
//    var sessionStorageVal = sessionStorage.getItem("inputValue")
////    console.log(sessionStorageVal);
//    if (sessionStorageVal != null) {
//        //setTimeout(function(){
//        // $(".search").find("input").focus()
//        // $(".search").find("input").val(localStorageVal);
//        //},1000)
//        $('#tab_all').bootstrapTable('resetSearch', sessionStorageVal);
//    }
//});
//endregion

//table設定region
var $table = $('#tab_all').DataTable({
    "ordering": true,
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
            title: '快樂聯盟簡短服務一覽表',
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
        // console.log($('#min_date').val())
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
    // $table.columns(rel).search(this.value).draw();
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

//$('#min, #max').keyup( function() {
//    $table.draw();
//} ); 
//endregion

//匯出EXCEL按鈕CSS設定 region
$('.buttons-excel').each(function() { 
    $(this).removeClass('dt-button').addClass('btn btn-default') ;
}) 
//endregion
