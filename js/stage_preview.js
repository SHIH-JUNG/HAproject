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
var num = getUrlVars()["num"];
var four_id = getUrlVars()["four_id"];
$.ajax({
    url: "database/find_stage_detail.php",
    type: "POST",
    data: {
        open_id: open_id,
        num: num,
        four_id:four_id
    },
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
        $("#name").text(data.name[0]);
        $("#addition").text(data.addition[0]);
        $("#date").text(data.enter_date[0]);
        $("#stage").text(data.stage[0]);
        $("#leave_or_not").text(data.leave_or_not[0]);
        $("#leave_date").text(data.leave_date[0]);
        $("#body").text(data.body[0]);
        $("#body2").text(data.body2[0]);
        $("#heart").text(data.heart[0]);
        $("#heart2").text(data.heart2[0]);
        $("#spirit").text(data.spirit[0]);
        $("#spirit2").text(data.spirit2[0]);
        $("#society").text(data.society[0]);
        $("#society2").text(data.society2[0]);
        $("#assess_date").text(data.access_datetime[0]);
        $("#write_name").text(data.user[0]);
        
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
        $("#word_demo").wordExport("四階段輔導紀錄Word");
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

//設定麵包屑返回region
    var four_id = getUrlVars()['four_id'];
    $.ajax({
        url: "database/find_four.php",
        data: {
            four_id:four_id
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            
            var url ='four_all.php?name='+data.name[0]+'&date='+data.stay_datetime[0]+'&house='+data.house[0]+'&id='+data.face_id[0]+'&open_id='+data.open_id[0]+'&addition='+data.addition[0]+'&age='+data.Age[0]+'&gender='+data.gender[0]+'&four_id='+data.id[0]+''; 
            $("#history2").attr('href',url);        
        },
        error: function (e) {
            console.log(e);
        }
    });
    
//endregion