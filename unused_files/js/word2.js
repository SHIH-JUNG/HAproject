//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//匯出成word region
$("#export_word").on('click',function(){
    swal({
        title:'請記得為Word檔加上框線！',
        imageUrl: 'image/prompt.png',
        type:'warning',                        
    }).then(function(){
        $("#word_demo").wordExport("個案資料word");
    })
    
});
//endregion

//匯出成Excel region
$("#export_excel").on('click',function(){
    $("#excel_demo").table2excel({
    filename: "沐恩個案資料匯出.xls", // do include extension
    preserveColors: false // set to true if you want background colors and font colors preserved
});
});
//endregion

//印出預約紀錄表格region
    var phone_id = getUrlVars()["phone_id"];
//console.log(id);
    $.ajax({
        url: "database/find_face.php",
        data:{
            phone_id:phone_id,
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {            
            var cssString5 = "";
            for (var index in data.Name) {
//                console.log(data.other_people[index])
                cssString5 +=
                    '<br>'+
                    '<table style="width:auto;" class="table table-bordered">'+
                        '<tr>' +
                            '<td colspan="2">個人預約會談紀錄</td>' +
                        '</tr>' +
                        '<tr  style="text-align:left">' +
                            '<td style="text-align:right;background-color:#ACD6FF;border-bottom-color: white;border-right-color: white;">預約會談時間</td>' +
                            '<td>'+
                                '<span>'+data.start_datetime[index]+'</span>'+
                                ' '+
                                '<span>'+data.start_time[index]+'</span>'+
                                ' '+
                                '<label>至</label>'+
                                ' '+
                                '<span>'+data.end_time[index]+'</span>'+
                            '</td>' +
                        '</tr>' +
                        '<tr style="text-align:left">' +
                            '<td style="text-align:right;background-color:#ACD6FF;border-bottom-color: white;border-right-color: white;">指派工作人員</td>' +
                            '<td>'+
                                '<span>主：'+data.one_user_name[index]+'</span>'+
                                '<br>'+
                                '<span>副：'+data.two_user_name[index]+'</span>'+
                            '</td>' +
                        '</tr>' +
                        '<tr style="text-align:left">' +
                            '<td style="text-align:right;background-color:#ACD6FF;border-bottom-color: white;border-right-color: white;">地點</td>' +
                            '<td>'+
                                '<span>'+data.location_detail[index]+'</span>'+
                            '</td>' +
                        '</tr>' +
                        '<tr style="text-align:left">' +
                            '<td style="text-align:right;background-color:#ACD6FF;border-right-color: white;">備註</td>' +
                            '<td >'+
                                '<span>'+data.remark[index]+'</span>'+
                            '</td>' +
                        '</tr>' +
                    '</table>'               
            }
            $("#preview_reservation").html(cssString5);
        },
        error:function(e){
            console.log("error"+e);
        }
    });
//endregion

//返回前一頁 region
$("#back").on('click',function(){
    var phone_id = getUrlVars()["phone_id"];
    location.href = 'phone_detail(原版).php?phone_id='+phone_id+'';
});
//endregion