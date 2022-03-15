//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//取得face_id並填入預覽匯出頁面2region

//open2 region
var face_id = getUrlVars()["face_id"];
var num = getUrlVars()["num"];
$.ajax({
    url: "database/find_open2.php",
    type: "POST",
    data: {
        face_id: face_id,
        num:num
    },
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function (data) {
        //                face_id;
        //                phone_id;
        //                open_id;
        $("#sports").text(data.sports[0]);
        $("#q24").text(data.q24[0]);
        $("#q25").text(data.q25[0]);
        $("#use_support").text(data.use_support[0]);
        $("#q26").text(data.q26[0]);
        $("#spirit_sick").text(data.spirit_sick[0]);
        $("#q27").text(data.q27[0]);
        $("#doctor_mdi").text(data.doctor_mdi[0]);
        $("#q28").text(data.q28[0]);
        $("#sicks").text(data.sicks[0]);
        $("#q29").text(data.q29[0]);
        $("#hospital").text(data.hospital[0]);
        $("#q30").text(data.q30[0]);
        $("#hurt").text(data.hurt[0]);
        $("#q31").text(data.q31[0]);
        $("#q32").text(data.q32[0]);
        $("#q33").text(data.q33[0]);
        $("#q34").text(data.q34[0]);
        $("#violence").text(data.violence[0]);
        $("#what_violence").text(data.what_violence[0]);
        $("#q35").text(data.q35[0]);
        $("#suicide").text(data.suicide[0]);
        $("#suicide_why").text(data.suicide_why[0]);
        $("#q36").text(data.q36[0]);
        $("#suicide_experience").text(data.suicide_experience[0]);
        $("#q37").text(data.q37[0]);
        $("#morose").text(data.morose[0]);
        $("#what_morose").text(data.what_morose[0]);
        $("#q38").text(data.q38[0]);
        $("#no_power").text(data.no_power[0]);
        $("#what_no_power").text(data.what_no_power[0]);
        $("#q39").text(data.q39[0]);
        $("#very_morose").text(data.very_morose[0]);
        $("#what_very_morose").text(data.what_very_morose[0]);
        $("#q40").text(data.q40[0]);
        $("#h_belief").text(data.h_belief[0]);
        $("#q41").text(data.q41[0]);
        $("#receive_baptism").text(data.receive_baptism[0]);
        $("#what_receive_baptism").text(data.what_receive_baptism[0]);
        $("#q42").text(data.q42[0]);
        $("#join_church").text(data.join_church[0]);
        $("#q43").text(data.q43[0]);
        $("#q44").text(data.q44[0]);
        $("#q45").text(data.q45[0]);
        $("#q46").text(data.q46[0]);
        $("#q47").text(data.q47[0]);
        if(data.h_belief[0] != "基督教"){
            $("#q41_tr").attr("hidden",true);
            $("#receive_baptism_tr").attr("hidden",true);
            $("#join_church_tr").attr("hidden",true);
            
        }
        //                sports;
        //                use_support;
        //                spirit_sick;
        //                doctor_mdi;
        //                sicks;
        //                hospital;
        //                hurt;
        //                violence;
        //                suicide;
        //                suicide_experience;
        //                morose;
        //                no_power;
        //                very_morose;
        //                h_belief;
        //                receive_baptism;
        //                join_church;
        //            console.log(data.use_support[0])    

        //                if(data.sports[0] !== ""){
        //                    $('input[name=sports][value='+data.sports[0]+']').attr('checked',true);
        //                }            
        //                if(data.use_support[0] !== ""){
        //                    $('input[name=use_support][value='+data.use_support[0]+']').attr('checked',true);
        //                }            
        //                if(data.spirit_sick[0] !== ""){
        //                    $('input[name=spirit_sick][value='+data.spirit_sick[0]+']').attr('checked',true);
        //                }            
        //                if(data.doctor_mdi[0] !== ""){
        //                    $('input[name=doctor_mdi][value='+data.doctor_mdi[0]+']').attr('checked',true);
        //                }            
        //                if(data.sicks[0] !== ""){
        //                    $('input[name=sicks][value='+data.sicks[0]+']').attr('checked',true);
        //                }            
        //                if(data.hospital[0] !== ""){
        //                    $('input[name=hospital][value='+data.hospital[0]+']').attr('checked',true);
        //                }            
        //                if(data.hurt[0] !== ""){
        //                    $('input[name=hurt][value='+data.hurt[0]+']').attr('checked',true);
        //                }            
        //                if(data.violence[0] !== ""){
        //                    $('input[name=violence][value='+data.violence[0]+']').attr('checked',true);
        //                }            
        //                if(data.suicide[0] !== ""){
        //                    $('input[name=suicide][value='+data.suicide[0]+']').attr('checked',true);
        //                }            
        //                if(data.suicide_experience[0] !== ""){
        //                    $('input[name=suicide_experience][value='+data.suicide_experience[0]+']').attr('checked',true);
        //                }            
        //                if(data.morose[0] !== ""){
        //                    $('input[name=morose][value='+data.morose[0]+']').attr('checked',true);
        //                }            
        //                if(data.no_power[0] !== ""){
        //                    $('input[name=no_power][value='+data.no_power[0]+']').attr('checked',true);
        //                }            
        //                if(data.very_morose[0] !== ""){
        //                    $('input[name=very_morose][value='+data.very_morose[0]+']').attr('checked',true);
        //                }            
        //                if(data.h_belief[0] !== ""){
        //                    $('input[name=h_belief][value='+data.h_belief[0]+']').attr('checked',true);
        //                }            
        //                if(data.receive_baptism[0] !== ""){
        //                    $('input[name=receive_baptism][value='+data.receive_baptism[0]+']').attr('checked',true);
        //                }            
        //                if(data.join_church[0] !== ""){
        //                    $('input[name=join_church][value='+data.join_church[0]+']').attr('checked',true);
        //                }  
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
        $("#word_demo").wordExport("個案資料word");
    })

});
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
var url = 'first_open.php?face_id='+face_id+'&gender='+gender+'&name='+name+'&phone_id='+phone_id+'&date='+date+'&times='+times+'&assign='+assign+'&open_id='+open_id+'&num='+num+'';
var url2 = 'open_all.php?face_id='+face_id+'&gender='+gender+'&name='+name+'&phone_id='+phone_id+'&date='+date+'&times='+times+'&assign='+assign+'';


$("#open_history").attr('href',url);
$("#open_history2").attr('href',url2);
//endregion