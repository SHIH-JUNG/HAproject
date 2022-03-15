//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//BMI計算region
$('.bmi').on('keyup change', function () {
    BMI();
});

function BMI() {
    var BMI = $("#weight").text() / (($("#height").text() * $("#height").text()) / 10000);
    //    console.log(BMI.toFixed(1))
    $("#BMI").html(BMI.toFixed(1))
}
//endregion

//取得face_id並填入預覽匯出頁面region
var face_id = getUrlVars()["face_id"];
var open_id = getUrlVars()["open_id"];
var num = getUrlVars()["num"];
var name = getUrlVars()["name"];
var gender = getUrlVars()["gender"];
var date = getUrlVars()["date"];
var times = getUrlVars()["times"];
var place = getUrlVars()["place"];
var assign = getUrlVars()["assign"];
load_img2();
load_img3();
$("#face_id").text(face_id);
$("#open_id").text(open_id);
$("#name").text(decodeURIComponent(name));
$("#gender").text(decodeURIComponent(gender));
$("#face_date").text(date);
$("#face_num").text(times);
$("#face_place").text(decodeURIComponent(place));
$("#face_assign").text(decodeURIComponent(assign));
$.ajax({
    url: "database/find_open_again1.php",
    type: "POST",
    data: {
        face_id: face_id,
        num:num
    },
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
        //            if(data.with_face != ""){
        $("#with_face").text(data.with_face[0]);
        $("#old_name").text(data.old_name[0]);
        $("#dateFrom").text(data.birth_date[0]);
        $("#age").text(data.age[0]);
        //                    $("#age_range").text(data.age_range[0]);
        $("#change_name_or_not").text(data.change_name_or_not[0])
        $("#identity_card").text(data.identity_card[0]);
        $("#height").text(data.height[0]);
        $("#weight").text(data.weight[0]);
        BMI();
        $("#blood").text(data.blood[0]);
        $("#belief").text(data.belief[0]);
        $("#school").text(data.school[0]);
        //                    $("#education_range").text(data.education_range[0]);
        $("#skill").text(data.skill[0]);
        $("#disabled_or_not").text(data.disabled_or_not[0]);
        $("#what_disabled").text(data.what_disabled[0]);
        $("#aboriginal_or_not").text(data.aboriginal_or_not[0]);
        $("#what_aboriginal").text(data.what_aboriginal[0]);
        $("#foreign_or_not").text(data.foreign_or_not[0]);
        $("#what_foreign").text(data.what_foreign[0]);
        $("#rehabilitation_or_not").text(data.rehabilitation_or_not[0]);
        $("#what_rehabilitation").text(data.what_rehabilitation[0]);
        $("#q1").text(data.q1[0]);
        $("#shift").text(data.shift[0]);
        $("#address").text(data.address[0]);
        $("#live_address").text(data.live_address[0]);
        $("#home_phone").text(data.home_phone[0]);
        $("#personal_phone").text(data.personal_phone[0]);
        $("#mc_name").text(data.mc_name[0]);
        $("#mc_phone").text(data.mc_phone[0]);
        $("#mc_hphone").text(data.mc_hphone[0]);
        $("#mc_relationship").text(data.mc_relationship[0]);
        $("#sc_name").text(data.sc_name[0]);
        $("#sc_phone").text(data.sc_phone[0]);
        $("#sc_hphone").text(data.sc_hphone[0]);
        $("#sc_relationship").text(data.sc_relationship[0]);
    },

    error: function (e) {
        notyf.alert('伺服器錯誤,無法載入' + e);
    }
});
//endregion

//匯出成word region
$("#export_word").on('click', function () {
    swal({
        title: '請記得為Word檔加上框線！',
        imageUrl: 'image/prompt.png',
        type: 'warning',
    }).then(function () {
        $("#word_demo").wordExport("個案再次開案表word");
    })

});
//endregion

//讀取大頭貼region
function load_img2() {
    var face_id = getUrlVars()["face_id"];
    $.ajax({
        url: "database/load_head.php",
        type: "POST",
        data: {
            face_id: face_id,
        },
        dataType: "JSON",
        async: false, //啟用同步請求
        success: function (data) {
            //            console.log(data.path[0]);
            $("#preview_progressbarTW_img").attr('src', data.path[0]);
            //                console.log(data.path[0])
        },

        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入' + e);
        }
    });
}
//endregion

//顯示個案家系圖region
function load_img3() {
    var face_id = getUrlVars()["face_id"];
    $.ajax({
        url: "database/load_home.php",
        type: "POST",
        data: {
            face_id: face_id,
        },
        dataType: "JSON",
        async: false, //啟用同步請求
        success: function (data) {
            //            console.log(data.path[0]);
            $("#preview_home_img").attr('src', data.path[0]);
            //                console.log(data.path[0])
        },

        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入' + e);
        }
    });
}
//endregion

//設定麵包屑返回region
var face_id = getUrlVars()["face_id"];
var phone_id = getUrlVars()["phone_id"];
var open_id = getUrlVars()["open_id"];
var num = getUrlVars()["num"];
var name = getUrlVars()["name"];
var gender = getUrlVars()["gender"];
var date = getUrlVars()["date"];
var times = getUrlVars()["times"];
var place = getUrlVars()["place"];
var assign = getUrlVars()["assign"];
var url = 'first_open_again.php?face_id='+face_id+'&gender='+gender+'&name='+name+'&phone_id='+phone_id+'&date='+date+'&times='+times+'&assign='+assign+'&open_id='+open_id+'&num='+num+'';
var url2 = 'open_all.php?face_id='+face_id+'&gender='+gender+'&name='+name+'&phone_id='+phone_id+'&date='+date+'&times='+times+'&assign='+assign+'';


$("#open_history").attr('href',url);
$("#open_history2").attr('href',url2);
//endregion