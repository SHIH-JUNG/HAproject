//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//填入資料region
var open_id = getUrlVars()["open_id"];
var track_id = getUrlVars()["track_id"];
var num = getUrlVars()["number"];
var house = decodeURIComponent(getUrlVars()["house"]);
        
$.ajax({
    url: "database/find_track_detail.php",
    type: "POST",
    data: {
        open_id: open_id,
        track_id:track_id,
        number: num,
    },
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
//        console.log((data.end_status[0]).substr(-1,1))
        $("#name").text(data.name[0]);
        $("#open_id").text(data.open_id[0]);
        $("#name").text(data.name[0]);
        $("#gender").text(data.gender[0]);
        $("#addition").text(data.addition[0]);
        $("#age").text(data.age[0]);
        $("#address").text(data.address[0]);
        $("#address2").text(data.address2[0]);
        $("#info_name").text(data.info_name[0]);
        $("#info_phone").text(data.info_phone[0]);
        $("#info_relationship").text(data.info_relationship[0]);
        $("#enter_date").text(data.enter_date[0]);
        $("#end_date").text(data.end_date[0]);
        $("#leave_date").text(data.leave_date[0]);
        $("#house").text(house);
        if((data.end_status[0]).substr(-1,1) != "2"){
            $("#end_status_full").text(data.end_status[0]);
        }else{
            $("#end_status").text((data.end_status[0]).substr(0,7));
        }
//        
        $("#why_leave").text(data.why_leave[0]);
        $("#track_date").text(data.track_date[0]);
        $("#track_assign").text(data.track_assign[0]);
        $("#how_track").text(data.how_track[0]);
        $("#track_who").text(data.track_who[0]);
        $("#track_status").text(data.track_status[0]);
        $("#join_or_not").text(data.join_or_not[0]);
        $("#now_status").text(data.now_status[0]);
        $("#live_status").text(data.live_status[0]);
        $("#work_status").text(data.work_status[0]);
        $("#home_status").text(data.home_status[0]);
        $("#church_or_not").text(data.church_or_not[0]);
        $("#church_name").text(data.church_name[0]);
        $("#church_phone").text(data.church_phone[0]);
        $("#where_church").text(data.where_church[0]);
        $("#who_church").text(data.who_church[0]);
        $("#who_phone").text(data.who_phone[0]);
        $("#church_other").text(data.church_other[0]);
        $("#leave_use").text(data.leave_use[0]);
        $("#leave_long").text(data.leave_long[0]);
        $("#leave_smoke").text(data.leave_smoke[0]);
        $("#smoke_long").text(data.smoke_long[0]);
        $("#leave_drink").text(data.leave_drink[0]);
        $("#drink_long").text(data.drink_long[0]);
        $("#leave_additiom").text(data.leave_additiom[0]);
        $("#additiom_long").text(data.additiom_long[0]);
        $("#use_addition").text(data.use_addition[0]);
        $("#re_use").text(data.re_use[0]);
        $("#all_assess").text(data.all_assess[0]);
        $("#back_dealwith").text(data.back_dealwith[0]);
        $("#next").text(data.next[0]);
        if(data.next[0] == "下次關懷日期"){
            $("#next_date").text(data.next_date[0]);
        }else if(data.next[0] == "轉介至其他單位"){
            $("#next_department").text('：'+data.turn_out[0]);
            $("#next_why").text('，原因：'+data.why_turn_out[0]);
        }else{
            $("#next_cant").text(data.why_not_track[0]);
        }



    },

    error: function (e) {
        console.log(e)
    }
});

//endregion

//匯出成word region
$("#export_word").on('click',function(){
    swal({
        title:'請記得為Word檔加上框線！',
        imageUrl: 'image/prompt.png',
        type:'warning',                        
    }).then(function(){
        $("#word_demo").wordExport("追蹤輔導紀錄Word");
    })
    
});
//endregion

//返回按鈕(未啟用)region
//$("#back").on('click', function(){
//var open_id = getUrlVars()["open_id"];
//var name = $("#name").text();
//var date = $("#stay_datetime").text();
//var addition = $("#addition").text();
//var house = getUrlVars()["house"];
//var number = getUrlVars()["number"];
//    location.href = 'four_detail.php?id='+face_id+'&open_id='+open_id+'&number='+number+'&name='+name+'&house='+house+'&date='+date+'&addition='+addition+'';
//});
//endregion

//設定麵包屑返回(未啟用)region
    var face_id = getUrlVars()["face_id"];
    var open_id = getUrlVars()["open_id"];
    var number = getUrlVars()["number"];
    var name = getUrlVars()["name"];
    var house = getUrlVars()["house"];
    var date = getUrlVars()["date"];
    var addition = getUrlVars()["addition"];
    var track_date = getUrlVars()["track_date"];
    var track_id = getUrlVars()["track_id"];
    var four_id = getUrlVars()["four_id"];
    var face_num = getUrlVars()["face_num"];
//    console.log(id);
var url = 'track_note.php?face_id='+face_id+'&open_id='+open_id+'&name='+name+'&house='+house+'&date='+date+'&addition='+addition+'&track_date='+track_date+'&track_id='+track_id+'&number='+number+'&four_id='+four_id+'&face_num='+face_num+'';

var url2 = 'track_all.php?face_id='+face_id+'&open_id='+open_id+'&name='+name+'&date='+date+'&house='+house+'&addition='+addition+'&id='+track_id+'&four_id='+four_id+'&face_num='+face_num+'';
//
$("#history").attr('href',url);
$("#history2").attr('href',url2);
//endregion