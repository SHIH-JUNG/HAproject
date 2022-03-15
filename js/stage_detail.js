//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//抓所有資料region
$(document).ready(function () {
    
//填入資料region
var open_id = getUrlVars()['open_id'];
var num = getUrlVars()['number'];
var name = getUrlVars()['name'];
var addition = getUrlVars()['addition'];
var four_id = getUrlVars()['four_id'];
var date = getUrlVars()['date'];
var stage = getUrlVars()['stage'];
var assess_date = getUrlVars()['stage_date'];
$("#name").text(decodeURIComponent(name));
$("#addition").text(decodeURIComponent(addition));
$("#date").text(date);
$("#assess_date").text(assess_date);

if(decodeURIComponent(stage) == "第一階段"){
    $("#stage").text("第一階段：適應期");
}else if(decodeURIComponent(stage) == "第二階段"){
    $("#stage").text("第二階段：調整期");
}else if(decodeURIComponent(stage) == "第三階段"){
    $("#stage").text("第三階段：建造期");
}else{
    $("#stage").text("第四階段：考驗期");
}
//endregion
    
$.ajax({
    url: "database/find_stage_detail.php",
    type: "POST",
    data: {
        open_id: open_id,
        num:num,
        four_id:four_id
    },
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
        
        $("#body").val(data.body[0]);
        $("#body2").val(data.body2[0]);
        $("#heart").val(data.heart[0]);
        $("#heart2").val(data.heart2[0]);
        $("#spirit").val(data.spirit[0]);
        $("#spirit2").val(data.spirit2[0]);
        $("#society").val(data.society[0]);
        $("#society2").val(data.society2[0]);
        $("#name").val(data.name[0]);
        $("#leave_date").val(data.leave_date[0]);
        $("#write_name").text(data.user[0]);
        
        if(data.leave_or_not[0] != ""){
            $('input[name=leave_or_not][value=' + data.leave_or_not[0] + ']').attr('checked', true);
        }
    },

    error: function (e) {
        console.log(e)
    }
});

//endregion
});
//endregion

//儲存資料region
$("#add_stage_detail").on('click', function () {
    var open_id = getUrlVars()['open_id'];
    var num = getUrlVars()['number'];
    var leave_or_not = $("input[name='leave_or_not']:checked").val();
    var four_id = getUrlVars()['four_id'];


    $.ajax({
        type: 'POST',
        url: 'database/add_stage_detail.php',
        data: {
            //1-1
            open_id: open_id,
            four_id:four_id,
            name: $("#name").text(),
            addition:$("#addition").text(),
            enter_date:$("#date").text(),
            stage:$("#stage").text(),
            leave_or_not:leave_or_not,
            leave_date:$("#leave_date").val(),
            body:$("#body").val(),
            body2:$("#body2").val(),
            heart:$("#heart").val(),
            heart2:$("#heart2").val(),
            spirit:$("#spirit").val(),
            spirit2:$("#spirit2").val(),
            society:$("#society").val(),
            society2:$("#society2").val(),
            access_datetime: $("#assess_date").text(),
            num:num
        },
        success: function (data) {
            if (data == 1) {
                swal({
                    title: '儲存成功！',
                    type: 'success',
                }).then(function () {
                    location.reload();
                })
            } else {
                console.log(data)
                swal({
                    title: '上傳失敗！請聯絡負責單位',
                    type: 'error',
                })
            }
        },
    });
});
//endregion

//進入預覽WORD頁面region

$("#stage_preview").on('click',function(){
    var four_id = getUrlVars()['four_id'];
    var face_id = getUrlVars()["id"];
    var open_id = getUrlVars()["open_id"];
    var addition = getUrlVars()["addition"];
    var house = getUrlVars()["house"];
    var name = getUrlVars()["name"];
    var date = getUrlVars()["date"];
    var stage = getUrlVars()["stage"];
    var stage_date = getUrlVars()["stage_date"];
    var num = getUrlVars()["number"];
//    console.log(id);
    location.href = 'stage_preview.php?face_id='+face_id+'&open_id='+open_id+'&name='+name+'&addition='+addition+'&house='+house+'&date='+date+'&stage='+stage+'&stage_date='+stage_date+'&num='+num+'&four_id='+four_id+'';
});

//endregion

