//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//BMI計算region
$('.bmi').on('keyup change', function () {
    BMI();
});
    
function BMI(){
    var BMI = $("#weight").text() / (($("#height").text()*$("#height").text())/10000);
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
        url: "database/find_open1.php",
        type: "POST",
        data:{
            face_id:face_id,
            num:num
        },
        dataType: "JSON",
        async: false,//啟用同步請求
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
//    //                1-2
                    $("#work_or_not").text(data.work_or_not[0]);
                    $("#q2").text(data.q2[0]);
                    $("#q3").text(data.q3[0]);
                    $("#debt_or_not").text(data.debt_or_not[0]);
                    $("#q4").text(data.q4[0]);
                    $("#gang_or_not").text(data.gang_or_not[0]);
                    $("#q5").text(data.q5[0]);
                    $("#mf_or_not").text(data.mf_or_not[0]);
                    $("#mf_status").text(data.mf_status[0]);
                    $("#mf_status_other").text(data.mf_status_other[0]);
                    $("#bs_status").text(data.bs_status[0]);
                    $("#bs_status_other").text(data.bs_status_other[0]);
                    $("#status").text(data.status[0]);
                    $("#status_other").text(data.status_other[0]);
                    $("#sd_status").text(data.sd_status[0]);
                    $("#sd_status_other").text(data.sd_status_other[0]);
                    $("#live_together_name").text(data.live_together_name[0]);
                    $("#q6").text(data.q6[0]);
                    $("#withlive_interactive_other").text(data.withlive_interactive_other[0]);
                    $("#q7").text(data.q7[0]);
                    $("#q8").text(data.q8[0]);
                    $("#addiction_three").text(data.used_addition[0]);
                    $("#contact_age").text(data.contact_age[0]);
                    $("#q9").text(data.q9[0]);
                    $("#use_year").text(data.use_year[0]);
                    $("#q10").text(data.q10[0]);
                    $("#change_addition_or_not").text(data.change_addition_or_not[0]);
                    $("#q11").text(data.q11[0]);
                    $("#month_use").text(data.month_use[0]);
                    $("#q12").text(data.q12[0]);
                    $("#addiction_types").text(data.main_addition[0]);
                    $("#q13").text(data.q13[0]);
                    $("#addiction_cause").text(data.addiction_cause[0]);
                    $("#abs_long_range").text(data.abs_long_range[0]);
                    $("#q14").text(data.q14[0]);
                    $("#q15").text(data.q15[0]);
                    $("#where_abs_range").text(data.where_abs_range[0]);
                    $("#q16").text(data.q16[0]);
                    $("#addiction_fail").text(data.addiction_fail[0]);
                    $("#q17").text(data.q17[0]);
                    $("#q18").text(data.q18[0]);
                    $("#q19").text(data.q19[0]);
                    $("#q20").text(data.q20[0]);
                    $("#q21").text(data.q21[0]);
                    $("#help_range").text(data.help_range[0]);
                    $("#q22").text(data.q22[0]);
                    $("#q23").text(data.q23[0]);
                    if($("#status").text() == "未婚"){
                        $("#sd_status_tr").attr("hidden",true);
                    }
                    if(data.abs_long_range[0] == "持續用毒"){
                        $("#q15_tr").attr("hidden",true);
                        $("#where_abs_range_tr").attr("hidden",true);
                        $("#q17_tr").attr("hidden",true);
                    }
//    //            var important_name = data.important_name[0].split("、");
//    //            var important_relationship= data.important_relationship[0].split("、");
//    //            var important_phone= data.important_phone[0].split("、");
//    //            var important_belief= data.important_belief[0].split("、");
//
//                var addiction_typess = data.main_addition[0].split("、");
//                var addiction_threee = data.used_addition[0].split("、");
//                var addiction_causee = data.addiction_cause[0].split("、");
//                var addiction_faill = data.addiction_fail[0].split("、");
//                var help_range = data.help_range[0].split("、");
//                var where_abs_range = data.where_abs_range[0].split("、");
//    ////            console.log(data.zip[0])
//                $("#twzipcode").twzipcode('set', {
//                    'zipcode': data.city_zip[0]
//                });
//                $("#twzipcode2").twzipcode('set', {
//                    'zipcode': data.live_zip[0]
//                });
//                if(data.live_or_not[0] !== ""){
//                    $('input[name=live_or_not][value='+data.live_or_not[0]+']').attr('checked',true);
//                }
//                if(data.abs_long_range[0] !== ""){
//                    $('input[name=abs_long_range][value='+data.abs_long_range[0]+']').attr('checked',true);
//                }
//                if(data.education_range[0] !== ""){
//                    $('input[name=education_range][value='+data.education_range[0]+']').attr('checked',true);
//                }
//                if(data.month_use[0] !== ""){
//                    $('input[name=month_use][value='+data.month_use[0]+']').attr('checked',true);
//                }
//                if(data.change_addition_or_not[0] !== ""){
//                    $('input[name=change_addition_or_not][value='+data.change_addition_or_not[0]+']').attr('checked',true);
//                }
//                if(data.mf_or_not[0] !== ""){
//                    $('input[name=mf_or_not][value='+data.mf_or_not[0]+']').attr('checked',true);
//                }
//                if(data.mf_status[0] !== ""){
//                    $('input[name=mf_status][value='+data.mf_status[0]+']').attr('checked',true);
//                }
//                if(data.bs_status[0] !== ""){
//                    $('input[name=bs_status][value='+data.bs_status[0]+']').attr('checked',true);
//                }
//                if(data.status[0] !== ""){
//                    $('input[name=status][value='+data.status[0]+']').attr('checked',true);
//                }
//                if(data.sd_status[0] !== ""){
//                    $('input[name=sd_status][value='+data.sd_status[0]+']').attr('checked',true);
//                }
//                if(data.withlive_interactive[0] !== ""){
//                    $('input[name=withlive_interactive][value='+data.withlive_interactive[0]+']').attr('checked',true);
//                }
//                if(data.communion_or_not[0] !== ""){
//                    $('input[name=communion_or_not][value='+data.communion_or_not[0]+']').attr('checked',true);
//                }
//                if(data.contact_range[0] !== ""){
//                    $('input[name=contact_range][value='+data.contact_range[0]+']').attr('checked',true);
//                }
//                if(data.use_range[0] !== ""){
//                    $('input[name=use_range][value='+data.use_range[0]+']').attr('checked',true);
//                }
//                if(data.change_name_or_not[0] !== ""){
//                    $('input[name=change_name_or_not][value='+data.change_name_or_not[0]+']').attr('checked',true);
//                }
//                if(data.age_range[0] !== ""){
//                    $('input[name=age_range][value='+data.age_range[0]+']').attr('checked',true);
//                }
//                if(data.blood[0] !== ""){
//                    $('input[name=blood][value='+data.blood[0]+']').attr('checked',true);
//                }
//                if(data.belief[0] !== ""){
//                    $('input[name=belief][value='+data.belief[0]+']').attr('checked',true);
//                }
//                if(data.disabled_or_not[0] !== ""){
//                    $('input[name=disabled_or_not][value='+data.disabled_or_not[0]+']').attr('checked',true);
//                }
//                if(data.aboriginal_or_not[0] !== ""){
//                    $('input[name=aboriginal_or_not][value='+data.aboriginal_or_not[0]+']').attr('checked',true);
//                }
//                if(data.foreign_or_not[0] !== ""){
//                    $('input[name=foreign_or_not][value='+data.foreign_or_not[0]+']').attr('checked',true);
//                }
//                if(data.rehabilitation_or_not[0] !== ""){
//                    $('input[name=rehabilitation_or_not][value='+data.rehabilitation_or_not[0]+']').attr('checked',true);
//                }
//                if(data.work_or_not[0] !== ""){
//                    $('input[name=work_or_not][value='+data.work_or_not[0]+']').attr('checked',true);
//                }
//                if(data.debt_or_not[0] !== ""){
//                    $('input[name=debt_or_not][value='+data.debt_or_not[0]+']').attr('checked',true);
//                }
//                if(data.gang_or_not[0] !== ""){
//                    $('input[name=gang_or_not][value='+data.gang_or_not[0]+']').attr('checked',true);
//                }                
//                
//    //            //濫用原因失敗原因(複選)region
//                $.each(addiction_typess,function(index,element){
//                    if(element == "海洛因" || element == "安非他命"|| element == "大麻"|| element == "強力膠"|| element == "K他命"|| element == "FM2"|| element == "搖頭丸"|| element == "咖啡包"|| element == "酒"|| element == "菸"|| element == "檳榔"|| element == "精神藥物"){
//                        $('input[name^="addiction_types"][value='+element+']').attr('checked',true);
//    //                    console.log(element)
//                    }else{
//                        $("input[name^=addiction_types][value='其他']").attr('checked',true);
//                        $("#addiction_types_other").val(element);
//                    }
//                });
//
//                $.each(addiction_threee,function(index,element){
//                    if(element == "海洛因" || element == "安非他命"|| element == "大麻"|| element == "強力膠"|| element == "K他命"|| element == "FM2"|| element == "搖頭丸"|| element == "咖啡包"|| element == "酒"|| element == "菸"|| element == "檳榔"|| element == "精神藥物"){
//                        $('input[name^="addiction_three"][value='+element+']').attr('checked',true);
//    //                    console.log(element)
//                    }else{
//                        $("input[name^=addiction_three][value='其他']").attr('checked',true);
//                        $("#addiction_three_other").val(element);
//                    }
//                });
//                if(addiction_causee != ""){
//                    $.each(addiction_causee,function(index,element){
//                        if(element == "依賴" || element == "身心疾病"|| element == "心情不好"|| element == "好奇"|| element == "無聊"|| element == "壓力"|| element == "工作"|| element == "朋友"|| element == "感情"|| element == "家庭"){
//                            $('input[name^="addiction_cause"][value='+element+']').attr('checked',true);
//        //                    console.log(element)
//                        }else{
//                            $("input[name^=addiction_cause][value='其他']").attr('checked',true);
//                            $("#addiction_cause_other").val(element);
//        //                    console.log(element)
//                        }
//                    });
//                }
//                if(addiction_faill != ""){
//                    $.each(addiction_faill,function(index,element){
//                        if(element == "身體依賴" || element == "身心疾病"|| element == "心情不好"|| element == "好奇"|| element == "無聊"|| element == "壓力"|| element == "工作"|| element == "朋友"|| element == "感情"|| element == "家庭"){
//                            $('input[name^="addiction_fail"][value='+element+']').attr('checked',true);
//        //                    console.log(element)
//                        }else{
//                            $("input[name^=addiction_fail][value='其它']").attr('checked',true);
//                            $("#addiction_fail_other").val(element);
//        //                    console.log(element)
//                        }
//                    });
//                }
//
//                $.each(help_range,function(index,element){
//                    if(element == "妻" || element == "夫"|| element == "母"|| element == "父"|| element == "姐"|| element == "妹"|| element == "兄"|| element == "弟"|| element == "女兒"|| element == "兒子"|| element == "女友"|| element == "男友"|| element == "親戚"|| element == "朋友"|| element == "牧者"|| element == "教友"|| element == "專業人員"|| element == "無"){
//                        $('input[name^="help_range"][value='+element+']').attr('checked',true);
//    //                    console.log(element)
//                    }else{
//                        $("input[name^=help_range][value='其他']").attr('checked',true);
//                        $("#help_range_other").val(element);
//                    }
//                });
////                console.log(data.where_abs_range[0])
//                $.each(where_abs_range,function(index,element){
//                    if(element == "醫院" || element == "監所"|| element == "福音戒毒機構"|| element == "本機構"|| element == "自宅"){
//                        $('input[name^="where_abs_range"][value='+element+']').attr('checked',true);
//    //                    console.log(element)
//                    }else{
//                        $("input[name^=where_abs_range][value='其它']").attr('checked',true);
//                        $("#where_abs_range_other").val(element);
//                    }
//                });
//            }
//
//            //endregion
//            $("#abstinence_place").val(data.abstinence_place[0]);
//            $("#criminal_record").val(data.criminal_record[0]);
        },
        
        error: function (e) {
                notyf.alert('伺服器錯誤,無法載入' + e);
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
        $("#word_demo").wordExport("個案資料word");
    })
    
});
//endregion

//讀取大頭貼region
    function load_img2(){
        var face_id = getUrlVars()["face_id"];
        $.ajax({
            url: "database/load_head.php",
            type: "POST",
            data:{
                face_id:face_id,
            },
            dataType: "JSON",
            async: false,//啟用同步請求
            success: function (data) {
    //            console.log(data.path[0]);
                $("#preview_progressbarTW_img").attr('src',data.path[0]);
//                console.log(data.path[0])
            },

            error: function (e) {
                    notyf.alert('伺服器錯誤,無法載入' + e);
             }
        });
    }
//endregion

//顯示個案家系圖region
    function load_img3(){
        var face_id = getUrlVars()["face_id"];
        $.ajax({
            url: "database/load_home.php",
            type: "POST",
            data:{
                face_id:face_id,
            },
            dataType: "JSON",
            async: false,//啟用同步請求
            success: function (data) {
    //            console.log(data.path[0]);
                $("#preview_home_img").attr('src',data.path[0]);
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
var url = 'first_open.php?face_id='+face_id+'&gender='+gender+'&name='+name+'&phone_id='+phone_id+'&date='+date+'&times='+times+'&assign='+assign+'&open_id='+open_id+'&num='+num+'';
var url2 = 'open_all.php?face_id='+face_id+'&gender='+gender+'&name='+name+'&phone_id='+phone_id+'&date='+date+'&times='+times+'&assign='+assign+'';


$("#open_history").attr('href',url);
$("#open_history2").attr('href',url2);
//endregion