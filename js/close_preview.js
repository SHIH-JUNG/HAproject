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

//填入結案表region
var face_id = getUrlVars()["face_id"];
var open_id = getUrlVars()["open_id"];
//
    $.ajax({
        url: "database/find_close.php",
        type: "POST",
        data: {
            face_id: face_id,
            open_id: open_id
        },
        dataType: "JSON",
        async: false, //啟用同步請求
        success: function (data) {
            $("#face_id").text(data.face_id[0]);
            $("#open_id").text(data.open_id[0]);
            $("#name").text(data.name[0]);
            $("#dateFrom").text(data.birrth_date[0]);
            $("#age").text(data.age[0]+"歲");
            $("#contact_name").text(data.contact_name[0]);
            $("#contact").text(data.contact[0]);
            $("#dateFrom2").text(data.enter_date[0]);
            $("#dateFrom3").text(data.leave_date[0]);
            $("#month").text(data.month[0]);
            $("#enter_times").text(data.enter_times[0]);
            $("#addition").text(data.addition[0]);
            $("#q1").text(data.q1[0]);
            $("#q2").text(data.q2[0]);
            $("#track_date").text(data.track_date[0]);
            
            $("#write_department").text(data.write_department[0]);
            $("#gender").text(data.gender[0]);
            $("#how_enter").text(data.how_enter[0]);
            $("#belief").text(data.belief[0]);
            if(data.belief[0] == "已接受"){
                $("#belief_ok").text("，"+data.belief_ok[0]);
            }
            
            $("#why_end").text(data.why_end[0]);
            if(data.why_leave[0] != ""){
                if(data.why_end[0] =="其他"){
                    $("#why_close").text("，說明："+data.why_leave[0]);
                }else{
                    $("#why_close").text("，原因："+data.why_leave[0]);
                }
            }
            $("#allow_or_not").text(data.allow_or_not[0]);
            if(data.leave_with[0] != ""){
                if(data.allow_or_not[0]=="私自偕同其他案主離開"){
                    $("#leave_with").text("，其他案主姓名："+data.leave_with[0]);
                }else if(data.allow_or_not[0]=="其他"){
                    $("#leave_with").text("，說明："+data.leave_with[0]);     
                }else{
                    $("#leave_with").text("，陪同者姓名："+data.leave_with[0]);
                }
                
            }
            if(data.leave_contact[0] != ""){
                $("#leave_contact").text("，陪同者聯絡方式："+data.leave_contact[0]);
            }
            
            $("#deposit").text(data.deposit[0]);
            if(data.deposit_description[0] != ""){
                if(data.deposit[0] == "未滿期其他" || data.deposit[0] == "滿期其他" || data.deposit[0] == "培訓中心其他"){
                    $("#deposit_description").text("，說明："+data.deposit_description[0]);    
                }else{
                    $("#deposit_description").text("，原因："+data.deposit_description[0]);    
                }
                
            }

        },

        error: function (e) {
            console.log(e)
        }
    });
//endregion

//返回前一頁 region
$("#back").on('click',function(){
    var face_id = getUrlVars()["face_id"];
    var open_id = getUrlVars()["open_id"];
    var name = decodeURIComponent(getUrlVars()["name"]);
    var addition = decodeURIComponent(getUrlVars()["addition"]);
    location.href = 'close.php?face_id='+face_id+'&open_id='+open_id+'&name='+name+'&addition='+addition+''
});
//endregion