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
    var four_id = getUrlVars()["four_id"];
    $.ajax({
        url: "database/find_daily_self_a.php",
        data: {
            face_id: id,
            number: number,
            four_id:four_id
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            $("#height").text(data.height);
            $("#weight").text(data.weight);
            BMI();            
            $("#sports_times").text(data.sports_times);
            $("#sports_min").text(data.sports_min);
            sport_count();
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

            
//            $('input[name="q1[]"][value="'+data.a1+'"]').attr('checked',true);
//            $('input[name="q2[]"][value="'+data.a2+'"]').attr('checked',true);
//            $('input[name="q3[]"][value="'+data.a3+'"]').attr('checked',true);
//            $('input[name="q4[]"][value="'+data.b1+'"]').attr('checked',true);
//            $('input[name="q5[]"][value="'+data.b2+'"]').attr('checked',true);
//            $('input[name="q6[]"][value="'+data.b3+'"]').attr('checked',true);
//            $('input[name="q7[]"][value="'+data.b4+'"]').attr('checked',true);
//            $('input[name="q8[]"][value="'+data.b5+'"]').attr('checked',true);
//            $('input[name="q9[]"][value="'+data.b6+'"]').attr('checked',true);
//            $('input[name="q10[]"][value="'+data.b7+'"]').attr('checked',true);
//            $('input[name="q11[]"][value="'+data.b8+'"]').attr('checked',true);
//            $('input[name="q12[]"][value="'+data.c1+'"]').attr('checked',true);
//            $('input[name="q13[]"][value="'+data.c2+'"]').attr('checked',true);
//            $('input[name="q14[]"][value="'+data.c3+'"]').attr('checked',true);
//            $('input[name="q15[]"][value="'+data.c4+'"]').attr('checked',true);
//            $('input[name="q16[]"][value="'+data.c5+'"]').attr('checked',true);
//            $('input[name="q17[]"][value="'+data.c6+'"]').attr('checked',true);
//            $('input[name="q18[]"][value="'+data.c7+'"]').attr('checked',true);
//            $('input[name="q19[]"][value="'+data.d1+'"]').attr('checked',true);
//            $('input[name="q20[]"][value="'+data.d2+'"]').attr('checked',true);
//            $('input[name="q21[]"][value="'+data.d3+'"]').attr('checked',true);
//            $('input[name="q22[]"][value="'+data.d4+'"]').attr('checked',true);
//            $('input[name="q23[]"][value="'+data.d5+'"]').attr('checked',true);
//            $('input[name="q24[]"][value="'+data.d6+'"]').attr('checked',true);
//            $('input[name="q25[]"][value="'+data.d7+'"]').attr('checked',true);
        },
        error: function (e) {
            console.log("錯誤");
        }
    });
})
//endregion

//計算BMI和一周運動總時數region
function BMI(){
    var BMI = $("#weight").text() / (($("#height").text()*$("#height").text())/10000);
//    console.log(BMI.toFixed(1))
    $("#BMI").html(BMI.toFixed(1));
}
$('.bmi').on('keyup change', function () {
    BMI();
});

function sport_count(){
    var minweek = $("#sports_times").text() * $("#sports_min").text();
//    console.log(BMI.toFixed(1))
    $("#minweek").html(minweek);
}
$('.mintime').on('keyup change', function () {
    sport_count();
});

//endregion

//匯出成word region
$("#export_word").on('click',function(){
    swal({
        title:'請記得為Word檔加上框線！',
        imageUrl: 'image/prompt.png',
        type:'warning',                        
    }).then(function(){
        $("#word_demo").wordExport("戒治者日常生活問卷(自)Word");
    })
    
});
//endregion

//麵包屑返回region
    var four_id = getUrlVars()['four_id'];
    var face_num = getUrlVars()["face_num"];
    $.ajax({
        url: "database/find_four.php",
        data: {
            four_id:four_id
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            
            var url ='four_all.php?name='+data.name[0]+'&date='+data.stay_datetime[0]+'&house='+data.house[0]+'&id='+data.face_id[0]+'&open_id='+data.open_id[0]+'&addition='+data.addition[0]+'&age='+data.Age[0]+'&gender='+data.gender[0]+'&four_id='+data.id[0]+'&face_num='+face_num+''; 
            $("#history").attr('href',url);
            
            var url2 = 'four_all_all.php?id='+data.face_id[0]+'&open_id='+data.open_id[0]+'';
            $("#history2").attr('href',url2);
        },
        error: function (e) {
            console.log(e);
        }
    });
    
//endregion
