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
var house = getUrlVars()["house"];
var four_id = getUrlVars()["four_id"];
var num = getUrlVars()["number"];
$.ajax({
    url: "database/find_four_detail.php",
    type: "POST",
    data: {
        open_id: open_id,
        four_id:four_id,
        num:num
    },
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
        $("#fa_name").text(decodeURIComponent(house));
        $("#name").text(data.name[0]);
        $("#stay_datetime").text(data.stay_datetime[0]);
        $("#addition").text(data.addition[0]);
        
        $("#access_datetime").text(data.access_datetime[0]);
        $("#sick_name").text("病名："+data.sick_name[0]);
        $("#dealwith").text("，處理情形："+data.dealwith[0]);
        $("#job_class_description").text(data.job_class_description[0]);
        $("#live_classs_description").text(data.live_classs_description[0]);
        
        $("#m_desciption").text(data.m_desciption[0]);
        $("#w_desciption").text(data.w_desciption[0]);
        $("#f_description").text(data.f_description[0]);
        $("#complex_content").text(data.complex_content[0]);
        $("#back_content").text(data.back_content[0]);

        $("#stage").text(data.stage[0]);
        $("#health").text(data.health[0]+"，");
        $("#g_hospital").text("，是否就醫："+data.g_hospital[0]);
        $("#job_class").text(data.job_class[0]);
        $("#live_class").text(data.live_class[0]);
        $("#Reception").text(data.Reception[0]);
        if(data.Reception[0] == "有"){
            $("#f_relationship").text("，關係："+data.f_relationship[0]);
        }
        $("#contact").text(data.contact[0]);
        if(data.contact[0] == "有"){
            $("#p_relationship").text("，關係："+data.f_relationship[0]);
        }
        $("#classmate").text(data.classmate[0]);
        $("#worker").text(data.worker[0]);
        $("#family").text(data.family[0]);
        $("#stage_change").text(data.stage_change[0]);
        
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

//返回按鈕region
$("#back").on('click', function(){
var open_id = getUrlVars()["open_id"];
var four_id = getUrlVars()["four_id"];
var name = $("#name").text();
var date = $("#stay_datetime").text();
var addition = $("#addition").text();
var house = getUrlVars()["house"];
var number = getUrlVars()["number"];
    location.href = 'four_detail.php?id='+face_id+'&open_id='+open_id+'&number='+number+'&name='+name+'&house='+house+'&date='+date+'&addition='+addition+'&four_id='+four_id+'';
});
//endregion

//設定麵包屑返回region
var face_id = getUrlVars()["id"];
var four_id = getUrlVars()["four_id"];
var open_id = getUrlVars()["open_id"];
var name = $("#name").text();
var date = $("#stay_datetime").text();
var addition = $("#addition").text();
var house = getUrlVars()["house"];
var number = getUrlVars()["number"];
var url = 'four_detail.php?open_id='+open_id+'&number='+number+'&name='+name+'&house='+house+'&date='+date+'&addition='+addition+'&four_id='+four_id+'';
var url2 = 'four_all.php?name='+name+'&date='+date+'&house='+house+'&id='+face_id+'&addition='+addition+'&four_id='+four_id+'';

$("#history").attr('href',url);
$("#history2").attr('href',url2);
//endregion