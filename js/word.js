//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//抓個別特定電話詢戒表region
//console.log(id);
$(document).ready(function(){
    var phone_id = getUrlVars()["phone_id"];
//    console.log(id+1);
    $.ajax({
        url: "database/find_personal_data.php",
        data:{
            phone_id:phone_id,
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            var cssString2 = "";
            if(data.up_date[0] == null){
                data.up_date[0] = "";
            }
            $("#udate").html(data.up_date[0]);
            $("#up_applicant").html(data.up_name[0]);
            $("#t_sn").html(data.date_RE[0]+data.phone_id[0]);
            $("#applicant").html(data.applicant[0]);
            $("#adate").html(data.add_date[0]);
            //修改值
            $("#note").html(data.phone_note[0]);
            $("#user").html(data.assign[0]);
            $("#call_datetime").html(data.call_date[0]);
            $("#name").html(data.Name[0]);
            $("#gender").html(data.Gender[0]);
            $("#age").html(data.Age[0]);
            $("#relationship").html(data.Relationship[0]);
            $("#addition").html(data.Addiction[0]);
            $("#m_addition").html(data.m_addition[0]);
            $("#w_type").html(data.w_detail[0]);
            $("#info_name").html(data.Info_Name[0]);
            $("#address").html(data.Address[0]);
            $("#phone").html(data.phone[0]);
            $("#k_place").html(data.k_place[0]);
                for(var index in data.call_date){
                    cssString2 +=
                            '<br>'+
                            '<table style="width:30%;" class="table table-bordered">'+
                                '<tr>' +
                                    '<td colspan="2">個人電話詢戒紀錄</td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:#ACD6FF;border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>來電日期</td>' +
                                    '<td ><span>'+data.call_date[index]+'</span></td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:#ACD6FF;border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>聯絡人</td>' +
                                    '<td ><span>'+data.Info_Name[index]+'</span></td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:#ACD6FF;border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>聯絡人與案主關係</td>' +
                                    '<td ><span>'+data.Relationship[index]+'</span></td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:#ACD6FF;border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>連絡電話</td>' +
                                    '<td ><span>'+data.phone[index]+'</span></td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:#ACD6FF;border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>同工</td>' +
                                    '<td >'+
                                        '<span>'+data.department[index] +'</span> <span>'+ data.assign[index]+'</span>'+
                                    '</td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:#ACD6FF;border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>通話內容</td>' +
                                    '<td >'+
                                        '<span>'+data.phone_note[index]+'</span>'+
                                    '</td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:#ACD6FF;border-bottom-color: white;border-right-color: white;"><label>建立日期</label></td>' +
                                    '<td ><span>'+data.add_date[index]+'</span></td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:#ACD6FF;border-bottom-color: white;border-right-color: white;"><label>建立者</label></td>' +
                                    '<td ><span>'+data.applicant[index]+'</span></td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:#ACD6FF;border-bottom-color: white;border-right-color: white;"><label>修改日期</label></td>' +
                                    '<td ><span>'+data.up_date[index]+'</span></td>' +
                                '</tr>' +
                                '<tr style="text-align:left">' +
                                    '<td style="text-align:right;background-color:#ACD6FF;border-right-color: white;"><label>修改者</label></td>' +
                                    '<td><span>'+data.up_name[index]+'</span></td>' +
                                '</tr>'+
                            '</table>'
                }
            $("#two").html(cssString2);
            
            //關係填寫(未啟用)region
//            if($("#other_text").val() != "本人"){
//                $("#other_text").css("display","");
////                console.log("OK");
//            }else{
//                $("#other_text").css("display","none");
////                console.log("NO");
//            }
            //endregion
            
            //地區下拉填寫(未啟用)region
//            $("#twzipcode").twzipcode({
//                css: ['col-sm-12',],
//            });
//                    $('#twzipcode').twzipcode('set', {
//                        'county': data.Address[0],
//                    });
            //endregion   
        },
        error:function(e){
            console.log("error");
        }
    });
});
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

//返回前一頁 region
$("#back").on('click',function(){
    var phone_id = getUrlVars()["phone_id"];
    location.href = 'phone_detail(原版).php?phone_id='+phone_id+'';
});
//endregion