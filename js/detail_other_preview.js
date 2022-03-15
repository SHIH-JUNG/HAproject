//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//填入資料region
var name = getUrlVars()["name"];
var addition = getUrlVars()["addition"];
var date = getUrlVars()["date"];
//console.log(decodeURIComponent(name))
$("#name").html('詢戒者姓名：'+decodeURIComponent(name)+'&nbsp;&nbsp;');
$("#addition").html('戒治物質：'+decodeURIComponent(addition)+'&nbsp;&nbsp;');
$("#date").html(date);
//endregion

//抓資料region
$(document).ready(function(){
    var id = getUrlVars()["face_id"];
    var number = getUrlVars()["number"];
    $.ajax({
        url: "database/find_daily_other.php",
        data: {
            face_id: id,
            number: number,
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            $("#write_name").text(data.write_name);
            $("#write_relationship").text(data.write_relationship);
            $("#q1").text(data.a1);
            $("#q2").text(data.a2);
            $("#q3").text(data.a3);
            $("#q4").text(data.b1);
            $("#q5").text(data.b2);
            $("#q6").text(data.b3);
            $("#q7").text(data.b4);
            $("#q8").text(data.b5);
            $("#q9").text(data.b6);
            $("#q10").text(data.b7);
            $("#q11").text(data.b8);
            $("#q12").text(data.c1);
            $("#q13").text(data.c2);
            $("#q14").text(data.c3);
            $("#q15").text(data.c4);
            $("#q16").text(data.c5);
            $("#q17").text(data.c6);
            $("#q18").text(data.c7);
            $("#q19").text(data.d1);
            $("#q20").text(data.d2);
            $("#q21").text(data.d3);
            $("#q22").text(data.d4);
            $("#q23").text(data.d5);
            $("#q24").text(data.d6);
            $("#q25").text(data.d7);
        },
        error: function (e) {
            console.log("錯誤");
        }
    });
})
//endregion

//匯出成word region
$("#export_word").on('click',function(){
    swal({
        title:'請記得為Word檔加上框線！',
        imageUrl: 'image/prompt.png',
        type:'warning',                        
    }).then(function(){
        $("#word_demo").wordExport("詢戒者日常生活問卷(他)Word");
    })
    
});
//endregion