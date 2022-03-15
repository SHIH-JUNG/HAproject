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
var face_id = getUrlVars()["face_id"];
var inside_id = getUrlVars()["inside_id"];
var num = getUrlVars()["num"];

//console.log(open_id,face_id,inside_id,num)
$.ajax({
    url: "database/find_inside_detail.php",
    type: "POST",
    data: {
        open_id: open_id,
        face_id:face_id,
        inside_id:inside_id,
        number: num,
    },
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
//        console.log(data)
        $("#face_id").text(data.face_id[0]);
        $("#open_id").text(data.open_id[0]);
        $("#name").text(data.name[0]);
        $("#gender").text(data.gender[0]);
        $("#addition").text(data.addition[0]);
        $("#age").text(data.age[0]);
        $("#address").text(data.address[0]);
        $("#face_times").text(data.face_times[0]);
        $("#phone_times").text(data.phone_times[0]);
        $("#info_name").text(data.info_name[0]);
        $("#info_phone").text(data.info_phone[0]);
        $("#info_relationship").text(data.info_relationship[0]);
        $("#house").text(data.house[0]);
        $("#enter_date").text(data.enter_date[0]);
        $("#stage").text(data.stage[0]);
        $("#care_date").text(data.care_date[0]);
        $("#care_assign").text(data.care_assign[0]);
        $("#how_care").text(data.how_care[0]);
        $("#care_who").text(data.care_who[0]);
        $("#care_name").text(data.care_name[0]);
        $("#care_status").text(data.care_status[0]);
        $("#care_status_other").text(data.care_status_other[0]);
        $("#join_or_not").text(data.join_or_not[0]);
        $("#join_times").text(data.join_times[0]);
        $("#attend").text(data.attend[0]);
        $("#all_assess").text(data.all_assess[0]);
        $("#back_dealwith").text(data.back_dealwith[0]);
        $("#next_date").text(data.next_date[0]);

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
        $("#word_demo").wordExport("在園家屬關懷紀錄Word");
    })
    
});
//endregion

//設定麵包屑返回region
    var face_id = getUrlVars()["face_id"];
    var open_id = getUrlVars()["open_id"];
    var inside_id = getUrlVars()["inside_id"];
    var face_num = getUrlVars()["face_num"];
//    console.log(id);
var url = 'inside_all.php?id='+inside_id+'&face_id='+face_id+'&open_id='+open_id+'&name='+$("#name").text()+'&addition='+$("#addition").text()+'&enter_date='+$("#enter_date").text()+'&house='+$("#house").text()+'&face_num='+face_num+'';

//
$("#history").attr('href',url);
//endregion

