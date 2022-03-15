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
var today = new Date();
var name = getUrlVars()["name"];
var addition = getUrlVars()["addition"];
//console.log(decodeURIComponent(name))
$("#name").html('戒治者姓名：'+decodeURIComponent(name)+'&nbsp;&nbsp;');
$("#addition").html('戒治物質：'+decodeURIComponent(addition)+'&nbsp;&nbsp;');
$("#date").html(today.getFullYear()+'/'+('0'+(today.getMonth()+1)).slice(-2)+'/'+('0'+today.getDate()).slice(-2));
//endregion

//抓資料region
$(document).ready(function(){
    var id = getUrlVars()["face_id"];
    var four_id = getUrlVars()["four_id"];
    var number = getUrlVars()["number"];
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
            $("#height").val(data.height);
            $("#weight").val(data.weight);
            BMI();            
            $("#sports_times").val(data.sports_times);
            $("#sports_min").val(data.sports_min);
            sport_count();
            $('input[name="q1[]"][value="'+data.a1+'"]').attr('checked',true);
            $('input[name="q2[]"][value="'+data.a2+'"]').attr('checked',true);
            $('input[name="q3[]"][value="'+data.a3+'"]').attr('checked',true);
            $('input[name="q4[]"][value="'+data.b1+'"]').attr('checked',true);
            $('input[name="q5[]"][value="'+data.b2+'"]').attr('checked',true);
            $('input[name="q6[]"][value="'+data.b3+'"]').attr('checked',true);
            $('input[name="q7[]"][value="'+data.b4+'"]').attr('checked',true);
            $('input[name="q8[]"][value="'+data.b5+'"]').attr('checked',true);
            $('input[name="q9[]"][value="'+data.b6+'"]').attr('checked',true);
            $('input[name="q10[]"][value="'+data.b7+'"]').attr('checked',true);
            $('input[name="q11[]"][value="'+data.b8+'"]').attr('checked',true);
            $('input[name="q12[]"][value="'+data.c1+'"]').attr('checked',true);
            $('input[name="q13[]"][value="'+data.c2+'"]').attr('checked',true);
            $('input[name="q14[]"][value="'+data.c3+'"]').attr('checked',true);
            $('input[name="q15[]"][value="'+data.c4+'"]').attr('checked',true);
            $('input[name="q16[]"][value="'+data.c5+'"]').attr('checked',true);
            $('input[name="q17[]"][value="'+data.c6+'"]').attr('checked',true);
            $('input[name="q18[]"][value="'+data.c7+'"]').attr('checked',true);
            $('input[name="q19[]"][value="'+data.d1+'"]').attr('checked',true);
            $('input[name="q20[]"][value="'+data.d2+'"]').attr('checked',true);
            $('input[name="q21[]"][value="'+data.d3+'"]').attr('checked',true);
            $('input[name="q22[]"][value="'+data.d4+'"]').attr('checked',true);
            $('input[name="q23[]"][value="'+data.d5+'"]').attr('checked',true);
            $('input[name="q24[]"][value="'+data.d6+'"]').attr('checked',true);
            $('input[name="q25[]"][value="'+data.d7+'"]').attr('checked',true);
            $("#date").html(data.date[0]);
        },
        error: function (e) {
            console.log("錯誤");
        }
    });
})
//endregion

//計算BMI和一周運動總時數region
function BMI(){
    var BMI = $("#weight").val() / (($("#height").val()*$("#height").val())/10000);
//    console.log(BMI.toFixed(1))
    $("#BMI").html(BMI.toFixed(1));
}
$('.bmi').on('keyup change', function () {
    BMI();
});

function sport_count(){
    var minweek = $("#sports_times").val() * $("#sports_min").val();
//    console.log(BMI.toFixed(1))
    $("#minweek").html(minweek);
}
$('.mintime').on('keyup change', function () {
    sport_count();
});

//endregion

//按下儲存region
function add_new(){
//    var sleep = $("input[name='sleep[]']:checked").val();
    var id = getUrlVars()["face_id"];
    var name = getUrlVars()["name"];
    var number = getUrlVars()["number"];
    var addition = getUrlVars()["addition"];
    var date = getUrlVars()["date"];
    $.ajax({
        url: "database/add_daily_detail_s_a.php",
        data: {
            name:decodeURIComponent(name),
            face_id: id,
            adiition: decodeURIComponent(addition),
            write_date: $("#date").text(),
            date: date,
            height: $("#height").val(),
            weight: $("#weight").val(),
            sports_times: $("#sports_times").val(),
            sports_min: $("#sports_min").val(),
            a1:$("input[name='q1[]']:checked").val(),
            a2:$("input[name='q2[]']:checked").val(),
            a3:$("input[name='q3[]']:checked").val(),
            b1:$("input[name='q4[]']:checked").val(),
            b2:$("input[name='q5[]']:checked").val(),
            b3:$("input[name='q6[]']:checked").val(),
            b4:$("input[name='q7[]']:checked").val(),
            b5:$("input[name='q8[]']:checked").val(),
            b6:$("input[name='q9[]']:checked").val(),
            b7:$("input[name='q10[]']:checked").val(),
            b8:$("input[name='q11[]']:checked").val(),
            c1:$("input[name='q12[]']:checked").val(),
            c2:$("input[name='q13[]']:checked").val(),
            c3:$("input[name='q14[]']:checked").val(),
            c4:$("input[name='q15[]']:checked").val(),
            c5:$("input[name='q16[]']:checked").val(),
            c6:$("input[name='q17[]']:checked").val(),
            c7:$("input[name='q18[]']:checked").val(),
            d1:$("input[name='q19[]']:checked").val(),
            d2:$("input[name='q20[]']:checked").val(),
            d3:$("input[name='q21[]']:checked").val(),
            d4:$("input[name='q22[]']:checked").val(),
            d5:$("input[name='q23[]']:checked").val(),
            d6:$("input[name='q24[]']:checked").val(),
            d7:$("input[name='q25[]']:checked").val(),
            number:number,
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
//            console.log(data)
            if (data == 1) {
                swal({
                    title: '儲存成功！',
                    type: 'success',
                }).then(function () {
                    location.reload();
                })
            } else {
                swal({
                    title: '儲存失敗！',
                    type: 'error',
                })
            }
        },
        error: function (e) {
            console.log(e);
        }
    });
//    只能按一次
    var btn = $(this); 
    btn.prop('disabled',true); 
    return false;  // 阻止瀏覽器跳轉到 send.php，因為已經用 ajax 送出去了
}
//endregion 

//按下預覽按鈕region
$("#preview").on('click', function(){
    var face_id = getUrlVars()["face_id"];
    var number = getUrlVars()["number"];
    var four_id = getUrlVars()["four_id"];
    var face_num = getUrlVars()["face_num"];
    var name = getUrlVars()["name"];
    var addition = getUrlVars()["addition"];
    window.location.href ='detail_self_a_preview.php?face_id='+face_id+'&number='+number+'&name='+name+'&addition='+addition+'&date='+$("#date").text()+'&four_id='+four_id+'&face_num='+face_num+'';
})
//endregion

//設定麵包屑返回region
var face_id = getUrlVars()["face_id"];
var open_id = getUrlVars()["open_id"];

var url = 'four_all_all.php?id='+face_id+'&open_id='+open_id+'';
$("#history").attr('href',url);

//endregion