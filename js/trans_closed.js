const notyf = new Notyf();

//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//設置麵包屑
var local_href = window.location.href;
var local_href_str = local_href.split("?")[1];

var history1 = local_href_str.split("&form_id")[0];

$("#history").attr('href',"case_all.php?"+history1);
$("#history2").attr('href',"case_all_all.php?"+'id='+ open_seqid +'&open_id='+ open_id);
$(".history3").attr('href',"case_detail.php?"+local_href_str);

//獲取本網址從簡短服務詳細資料網頁(case_detail.php)傳過來的屬性值region
var name = decodeURI(getUrlVars()["name"]);
var gender = decodeURI(getUrlVars()["gender"]);
var open_id = getUrlVars()["open_id"];
var open_seqid = getUrlVars()["id"];
var birth = getUrlVars()["birth"];
var open_date = getUrlVars()["date"];

var form_id = getUrlVars()["form_id"];
var form_type = decodeURI(getUrlVars()["form_type"]);

// var main_issue = (typeof main_issue === undefined) ? '' : decodeURI(getUrlVars()["main_issue"]);
// var minor_issue = (typeof minor_issue === undefined) ? '' : decodeURI(getUrlVars()["minor_issue"]);
// var closed_reason = (typeof closed_reason === undefined) ? '' : decodeURI(getUrlVars()["closed_reason"]);
// var closed_remark = (typeof closed_remark === undefined) ? '' : decodeURI(getUrlVars()["closed_remark"]);
// var file = (typeof file === undefined) ? '' : decodeURI(getUrlVars()["file"]);
// var checked_1 = (typeof checked_1 === undefined) ? '' : decodeURI(getUrlVars()["checked_1"]);
// var checked_2 = (typeof checked_2 === undefined) ? '' : decodeURI(getUrlVars()["checked_2"]);
//endregion

//將日期轉為民國年格式111.03.07 region
trans_to_Tw = function (endate) {
    var strAry = endate.split("-");
  
    if (parseInt(strAry[0]) > 1911) {
      strAry[0] = parseInt(strAry[0]) - 1911;
    }
  
    return strAry[0] + "年" + strAry[1] + "月" + strAry[2] + "日";
};
//endregion

window.sullen_data_str = "";
window.life_data_str = "";
window.familyship_data_str = "";
window.BSRS5_data_str = "";

// 載入憂鬱量表的測驗內容 region
function load_sullen_data() {
    $.ajax({
        url: "database/find_case_all.php",
        data: {
            Open_id:open_id,
            Id:open_seqid,
            Form_type:'sullen'
        },
        type: "POST",
        dataType: "JSON",
        async: false,
        success: function (data) {
    
            var sp_str0 = 
            '（' + '---年--月--日' + ' ' + '&emsp;' + '前測' + '）' + '---' + '分\n';

            var sp_str1 = 
            '（' + '---年--月--日' + ' ' + '&emsp;' + '中測' + '）' + '---' + '分\n';

            var sp_str2 =
            '（' + '---年--月--日' + ' ' + '&emsp;' + '後測' + '）' + '---' + '分\n';
    
    
            $.each(data,function(index,value){
                        
                var upload_info_json = JSON.parse("[" +value.Upload_info.replace('\"\[', '\[').replace('\]\"', '\]') + "]");
                            
                if(upload_info_json.length > 0)
                {
                    if(upload_info_json[0].length == 5)
                    {
                        var upload_date  = (trans_to_Tw(upload_info_json[0][0].value) === undefined) ? '' : trans_to_Tw(upload_info_json[0][0].value);
                        var test_type = ((upload_info_json[0][3].value) === undefined) ? '' : (upload_info_json[0][3].value);
                        var test_score = ((upload_info_json[0][1].value) === undefined) ? '' : (upload_info_json[0][1].value);
                        // var test_remark = ((upload_info_json[0][4].value) === undefined) ? '' : (upload_info_json[0][4].value);
            
                        switch (test_type) {
                            case '前測':
                                sp_str0 = 
                                '（' + upload_date + ' ' + test_type + '）' + test_score + '分\n';
                                break;
                        
                            case '中測':
                                sp_str1 = 
                                '（' + upload_date + ' ' + test_type + '）' + test_score + '分\n';
                                break;
                                
                            case '後測':
                                sp_str2 = 
                                '（' + upload_date + ' ' + test_type + '）' + test_score + '分\n';
                                break;
                        }
                    }
                }
    
            });
            // $("#pretest_depression_area").append(sp_str0);
            // $("#midtest_depression_area").append(sp_str1);
            // $("#posttest_depression_area").append(sp_str2);

            // console.log(sp_str0)
            // console.log(sp_str1)
            // console.log(sp_str2)

            sullen_data_str = sp_str0 + sp_str1 + sp_str2;
        },
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入');
            console.log(e)
        }
    });
}
//endregion

// 載入生活品質量表的測驗內容 region
function load_life_data() {
    $.ajax({
        url: "database/find_case_all.php",
        data: {
            Open_id:open_id,
            Id:open_seqid,
            Form_type:'life'
        },
        type: "POST",
        dataType: "JSON",
        async: false,
        success: function (data) {
    
            var sp_str0 = 
            '（' + '---年--月--日' + ' ' + '&emsp;' + '前測' + '）' + '得分/結果：' + '---\n';

            var sp_str1 = 
            '（' + '---年--月--日' + ' ' + '&emsp;' + '中測' + '）' + '得分/結果：' + '---\n';

            var sp_str2 = 
            '（' + '---年--月--日' + ' ' + '&emsp;' + '後測' + '）' + '得分/結果：' + '---\n';
    
    
            $.each(data,function(index,value){
                        
                var other_info_json = JSON.parse("[" +value.Other_info.replace('\"\[', '\[').replace('\]\"', '\]') + "]");
                            
                if(other_info_json.length > 0)
                {
                    if(other_info_json[0].length == 2)
                    {
                        var fillin_date = (trans_to_Tw(value.Fillin_date) === undefined) ? '' : trans_to_Tw(value.Fillin_date);
                        var test_type = ((other_info_json[0][1].value)  === undefined) ? '' : (other_info_json[0][1].value);
                        var test_score_result = ((other_info_json[0][0].value) === undefined) ? '' : (other_info_json[0][0].value);
                        
                        test_score_result_r = test_score_result.replace("<div>", "").replace("</div>", "");

                        switch (test_type) {
                            case '前測':
                                sp_str0 = 
                                '（' + fillin_date + ' ' + test_type + '）' + '得分/結果：' + test_score_result_r +'\n';
                                break;
                        
                            case '中測':
                                sp_str1 = 
                                '（' + fillin_date + ' ' + test_type + '）' + '得分/結果：' + test_score_result_r +'\n';
                                break;
                                
                            case '後測':
                                sp_str2 = 
                                '（' + fillin_date + ' ' + test_type + '）' + '得分/結果：' + test_score_result_r +'\n';
                                break;
                        }
                    }
                }
                
            });

            life_data_str = sp_str0 + sp_str1 + sp_str2;

            // $("#pretest_life_area").append(sp_str0);
            // $("#midtest_life_area").append(sp_str1);
            // $("#posttest_life_area").append(sp_str2);

            // console.log(sp_str0)
            // console.log(sp_str1)
            // console.log(sp_str2)
        },
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入');
            console.log(e)
        }
    });
}
//endregion

// 載入家庭關係量表的測驗內容 region
function load_familyship_data() {
    $.ajax({
        url: "database/find_case_all.php",
        data: {
            Open_id:open_id,
            Id:open_seqid,
            Form_type:'familyship'
        },
        type: "POST",
        dataType: "JSON",
        async: false,
        success: function (data) {
    
            var sp_str0 = 
            '（' + '---年--月--日' + ' ' + '&emsp;' + '前測' + '）' + '---' + '分\n';

            var sp_str1 = 
            '（' + '---年--月--日' + ' ' + '&emsp;' + '中測' + '）' + '---' + '分\n';

            var sp_str2 = 
            '（' + '---年--月--日' + ' ' + '&emsp;' + '後測' + '）' + '---' + '分\n';
    
    
            $.each(data,function(index,value){
                        
                var other_info_json = JSON.parse("[" +value.Other_info.replace('\"\[', '\[').replace('\]\"', '\]') + "]");
                // console.log(other_info_json)
                                
                if(other_info_json.length > 0)
                {
                    if(other_info_json[0].length == 2)
                    {
                        var fillin_date = (trans_to_Tw(value.Fillin_date) === undefined) ? '' : trans_to_Tw(value.Fillin_date);
                        var test_score =(other_info_json[0][0].value === undefined) ? '' : other_info_json[0][0].value;
                        var test_type = (other_info_json[0][1].value === undefined) ? '' : other_info_json[0][1].value;
    
                        switch (test_type) {
                            case '前測':
                                sp_str0 = 
                                '（' + fillin_date + ' ' + test_type + '）' + test_score + '分\n';
                                break;
                        
                            case '中測':
                                sp_str1 = 
                                '（' + fillin_date + ' ' + test_type + '）' + test_score + '分\n';
                                break;
                                
                            case '後測':
                                sp_str2 = 
                                '（' + fillin_date + ' ' + test_type + '）' + test_score + '分\n';
                                break;
                        }
                    }
                }
                
               
               
            });
            // $("#pretest_familyship_area").append(sp_str0);
            // $("#midtest_familyship_area").append(sp_str1);
            // $("#posttest_familyship_area").append(sp_str2);

            // console.log(sp_str0)
            // console.log(sp_str1)
            // console.log(sp_str2)

            familyship_data_str = sp_str0 + sp_str1 + sp_str2;
        },
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入');
            console.log(e)
        }
    });
}
//endregion

// 載入BSRS-5量表的測驗內容 region
function load_BSRS5_data() {
    $.ajax({
        url: "database/find_case_all.php",
        data: {
            Open_id:open_id,
            Id:open_seqid,
            Form_type:'BSRS5'
        },
        type: "POST",
        dataType: "JSON",
        async: false,
        success: function (data) {
    
            // console.log(data)
            var sp_str = 
            // '填寫日期：'+ '&emsp;' +'，總分：' + '&emsp;' + '分，' + '處置情形：' + '---\n';
            '無紀錄 \n';
    
            $.each(data,function(index,value){
                        
                var other_info_json = JSON.parse("[" +value.Other_info.replace('\"\[', '\[').replace('\]\"', '\]') + "]");
                            
                if(other_info_json.length > 0)
                {
                    if(other_info_json[0].length == 2)
                    {
                        var create_date = (trans_to_Tw(value.Create_date.split(" ")[0]) === undefined) ? '' : trans_to_Tw(value.Create_date.split(" ")[0]);
                        var test_score_result = ((other_info_json[0][0].value) === undefined) ? '' : (other_info_json[0][0].value);
                        var test_result = ((other_info_json[0][1].value)  === undefined) ? '' : (other_info_json[0][1].value);
                        
                        sp_str = '填寫日期：' + create_date +'，總分：' + test_score_result + '分，' + '處置情形：' + test_result + '\n';
                    }
                }
                
            });

            BSRS5_data_str = sp_str;
        },
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入');
            console.log(e)
        }
    });
}
//endregion

window.customFile = "";
window.main_issue = "";
window.minor_issue = "";
window.employment_radio_checked = "";
window.social_adaptation_radio_checked = "";
window.other_assessments = "";
// window.evaluation_str = "";
window.closed_reason = "";
window.closed_result = "";

$.ajax({
    url: "database/find_case_forms_data.php",
    data: {
        Open_id:open_id,
        Id:open_seqid,
        Form_id:form_id,
        Form_type:form_type,
    },
    type: "POST",
    dataType: "JSON",
    async: false,
    success: function (data) {

        console.log(data)

        //將ajax結果轉為json
        var data_json = JSON.parse("[" +data[0].answer.replace('\"\[', '\[').replace('\]\"', '\]') + "]");
        // console.log(data_json)
        //依據input的type類型名稱寫入資料，file類型名稱另外寫 region
        $.each(data_json[0], function (i, datan) {

            switch (datan.name) {
                case "customFile1":
                    var file = datan.value.replace("\.\.\/upload\/", "");
                    $("#customFile1").html('<a name="customFile_a" href="./upload/'+file+'" style="text-decoration:none;color:blue;" target="_blank">'+file+'<br/></a><img style="vertical-align:middle;" width="auto" onerror="hideContainer(this)" src="./upload/'+file+'">');
                    
                    customFile = datan.value;
                    break;

                case "diagnose_main":
                    $("[name='main_issue']").val(datan.value);

                    main_issue = datan.value;
                    break;
            
                case "diagnose_minor":
                    $("[name='minor_issue']").val(datan.value);

                    minor_issue = datan.value;
                    break;
                
                case "employment_radio":
                    employment_radio_checked = datan.value;
                    break;

                case "social_adaptation_radio":
                    social_adaptation_radio_checked = datan.value;
                    break;

                case "other_assessments":
                    other_assessments = datan.value;
                    break;
                
                case "end_indicator":
                    $("[name='closed_reason'][value='"+datan.value+"']").attr('checked',true);
                    
                    closed_reason += datan.value + " ";
                    break;
                
                case "case_closed_yes":
                    $("[id='closed_result']").val(datan.value);

                    closed_result = datan.value;
                    break;

            }

            
        });
        //endregion

    },
    error: function (e) {
        notyf.alert('伺服器錯誤,無法載入');
        console.log(e)
    }
});


function checked_content(checked_1, checked_2) {

    var checked_content = new Array();

    var checked_1_arr = ['成功就業', '失業', '就業輔導中', '其他說明'];
    var checked_2_arr = ['適應良好', '佳', '尚可', '不佳'];

    var checked_1_text = '';
    var checked_2_text = '';

    var white_block = '□';
    var black_block = '■';

    $.each(checked_1_arr,function(i,v){

        var block = "";
        if(checked_1 == v && checked_1 !='其他')
        {
            block = black_block;
        }
        else if(checked_1=="其他")
        {
            if(v.uncludes(checked_1))
            {
                block = black_block;
            }
            else
            {
                block = white_block;
            }
        }
        else
        {
            block = white_block;
        }

        checked_1_text += block;
        checked_1_text += v;

    });

    $.each(checked_2_arr,function(i,v){

        var block = "";

        if(checked_2 == v)
        {
            block = black_block;
        }
        else
        {
            block = white_block;
        }

        checked_2_text += block;
        checked_2_text += v;
    });

    checked_content.push(checked_1_text);
    checked_content.push(checked_2_text);
    
    return checked_content;
}

// var checked_content_arr = checked_content(checked_1, checked_2);

var checked_content_arr = checked_content(employment_radio_checked, social_adaptation_radio_checked);

load_sullen_data();
load_life_data();
load_familyship_data();
load_BSRS5_data();

var evaluation_default_text = '一、-(已緩解)'+
                                '\n\n\n二、-(已緩解)'+
                                '\n\n\n三、-(                    )'+
                                '\n\n\n四、量表評量成效'+
                                '\n1.	憂鬱程度:'+
                                '\n' + sullen_data_str +
                                '\n重點文字說明:'+
                                '\n\n2.	BSRS-5'+
                                '\n' + BSRS5_data_str +
                                '\n重點文字說明:'+
                                '\n\n3.	生活品質量表：'+
                                '\n'+ life_data_str +
                                '\n重點文字說明:'+
                                '\n\n4.	家庭關係量表：'+
                                '\n'+ familyship_data_str +
                                '\n重點文字說明:'+
                                '\n\n5.	就業輔導評估 '+ checked_content_arr[0] +
                                '\n\n6.	社會適應程度評估 '+ checked_content_arr[1] +
                                '\n\n7.	整體成效說明：'+
                                '';

var intervention_default_text = '一、'+
                            '\n二、'+
                            '\n三、';                                

//獲取個案評估表既有的資料顯示在新增個案表格中 region
$(document).ready(function(){
    //抓取今天日期
    var datetoday = moment().format('YYYY-MM-DD');

    $("#open_case_id").html(open_id);
    // $("#closed_id").val("");
    $("#name").val(name);
    $("#gender").val(gender);
    $("#birth").val(birth);

    $("#open_date").val(open_date);
    $("#closed_date").val(datetoday);

    // $("#customFile1").html('<a name="customFile_a" href="./upload/'+file+'" style="text-decoration:none;color:blue;" target="_blank">'+file+'<br/></a><img style="vertical-align:middle;" width="auto" onerror="hideContainer(this)" src="./upload/'+file+'">');

    // $("#main_issue").val(main_issue);
    // $("#minor_issue").val(minor_issue);
    $("#intervention").html(intervention_default_text);
    $("#evaluation").html(evaluation_default_text);
    // $("[name='closed_reason'][value='"+closed_reason+"']").attr('checked',true);
    // $("#remark").val(closed_remark);

    $.ajax({
        type:'POST',
        url:'database/find_check_user.php',
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log('test',data)
            for (var index in data.Id) {
                $("#social_worker").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                $("#supervise1").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                $("#supervise2").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            }
        },
    });
    $("#social_worker").val(assign_name);

    //獲取最新的結案案號
    // $.ajax({
    //     url: "database/find_closed_id.php",
    //     type: "POST",
    //     dataType: "JSON",
    //     async :false,
    //     success: function (data) {
    //         var str_id = (parseInt(data[0].Closed_id)+1).toString();
    //         $("#closed_id").val(str_id);
    //     },
    //     error:function(e){
    //         notyf.alert('伺服器錯誤,無法載入結案所需資料!');
    //     }
    // });

});
//endregion

hideContainer = function(this_el) {
    $(this_el).hide();
}

//新增至結案 region
$("#trans_closed").on('click',function(){
    var stau = false;

    //判斷必填欄位是否有填寫
    if (check_trans_closed_data() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }

    if(!stau)
    {
        swal({
            title:check_trans_closed_data(),
            type:'error'
          })
    }
    else
    {
        trans_closed_database();
    }


});
//endregion


//結案表(insert)的必填欄位 region
function check_trans_closed_data()
{
    // var closed_id = $("#closed_id").val();
    var closed_date = $("#closed_date").val();
    var main_issue = $("#main_issue").val();
    var minor_issue = $("#minor_issue").val();
    var intervention = $("#intervention").val();
    var evaluation = $("#evaluation").val();

    var closed_reason_checkbox =  $("input[name='closed_reason']:checked").length;
    var closed_reason_other = $("#closed_reason_other").val();
    var user_name = $("#social_worker").val();
    var supervise1 = $("#supervise1").val();
    var supervise2 = $("#supervise2").val();

    var closed_result = $("#closed_result").val();

    var errorstr = "";

    // if (closed_id == null) {
    //     errorstr += "未填寫結案案號!\r\n";
    // }
    if (main_issue == null) {
        errorstr += "未填寫主要問題!\r\n";
    }
    if (minor_issue == null) {
        errorstr += "未填寫次要問題!\r\n";
    }
    if (intervention == null) {
        errorstr += "未填寫問題處遇!\r\n";
    }
    if (evaluation.replace(/\s*/g, "") == '') {
        errorstr += "未填寫成效評估!\r\n";
    }
    if (user_name == null) {
        errorstr += "未填寫社工員!\r\n";
    }
    if (supervise1 == null) {
        errorstr += "未填寫督導!\r\n";
    }
    if (supervise2 == null) {
        errorstr += "未填寫執行長!\r\n";
    }
    if (closed_date == null) {
        errorstr += "未填寫結案日期!\r\n";
    }
    if (closed_result == null) {
        errorstr += "未填寫結案指標內容!\r\n";
    }
    if (errorstr == "") {
        if(closed_reason_other !=null || closed_reason_other!="")
        {
            if (closed_reason_checkbox <=0) {
                errorstr += "未勾選結案原因\r\n";
            }
        }
        if($("[name='closed_reason'][value='other']").is(":checked"))
        {
            if(closed_reason_other ==null || closed_reason_other=="")
            {
                errorstr += "未填寫其他結案原因內容!\r\n";
            }
        }
        // if (closed_id.replace(/\s*/g, "") == '') {
        //     errorstr += "未填寫結案案號!\r\n";
        // }
        if (main_issue.replace(/\s*/g, "") == '') {
            errorstr += "未填寫主要問題!\r\n";
        }
        if (minor_issue.replace(/\s*/g, "") == '') {
            errorstr += "未填寫次要問題!\r\n";
        }
        if (intervention.replace(/\s*/g, "") == '') {
            errorstr += "未填寫問題處遇!\r\n";
        }
        if (evaluation.replace(/\s*/g, "") == '') {
            errorstr += "未填寫成效評估!\r\n";
        }
        if (user_name.replace(/\s*/g, "") == '') {
            errorstr += "未填寫社工員!\r\n";
        }
        if (supervise1.replace(/\s*/g, "") == '') {
            errorstr += "未填寫督導!\r\n";
        }
        if (supervise2.replace(/\s*/g, "") == '') {
            errorstr += "未填寫執行長!\r\n";
        }
        if (closed_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫結案日期!\r\n";
        }
        if (closed_result.replace(/\s*/g, "") == '') {
            errorstr += "未填寫結案指標內容!\r\n";
        }
    }

    return errorstr;
}
//endregion


//新增至結案資料庫 region
function trans_closed_database()
{
    // console.log($("#open_date").val())
    $.ajax({
        url: "database/add_new_closed_v2.php",
        type: "POST",
        data:{
            Open_case_id:open_id,
            Open_case_seqid:open_seqid,
            Name:$("#name").val(),
            Gender:$("#gender").val(),
            Birth:birth,
            Open_date:open_date,
            Closed_date:$("#closed_date").val(),
            File_name:file,
            Main_issue:$("#main_issue").val(),
            Minor_issue:$("#minor_issue").val(),
            Intervention:$("#intervention").val(),
            Evaluation:$("#evaluation").val(),
            Closed_reason:$("[name='closed_reason']:checked").val(),
            Closed_result:$("#closed_result").val(),
            Remark:$("#remark").val(),
            Assign:$("#social_worker").val(),
            Supervise1:$("#supervise1").val(),
            Supervise2:$("#supervise2").val(),
        },
//            dataType: "JSON",
        success: function (data) {
            console.log(data);
            if(data == 1){
                swal({
                    type: 'success',
                    title: '新增成功!',
                    allowOutsideClick: false //不可點背景關閉
                    }).then(function () {
                        window.location.replace("closed.php"); 
                    })
            }else{
                swal({
                    type: 'error',
                    title: '新增失敗!請聯絡負責人',
                    allowOutsideClick: false //不可點背景關閉
                    }).then(function () {
                        location.reload();
                    })
            }  
        },
            error: function (e) {
                swal({
                    type: 'error',
                    title: '新增失敗!請聯絡負責人',
                    allowOutsideClick: false //不可點背景關閉
                }).then(function () {
                    location.reload();
                })
                console.log(e)
            }
    });
}
//endregion