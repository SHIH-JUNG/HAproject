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

//獲取本網址從簡短服務詳細資料網頁(case_detail.php)傳過來的屬性值region
var name = decodeURI(getUrlVars()["name"]);
var gender = decodeURI(getUrlVars()["gender"]);
var open_id = getUrlVars()["open_id"];
var open_seqid = getUrlVars()["id"];
var birth = getUrlVars()["birth"];
var open_date = getUrlVars()["open_date"];
var main_issue = (typeof main_issue === undefined) ? '' : decodeURI(getUrlVars()["main_issue"]);
var minor_issue = (typeof minor_issue === undefined) ? '' : decodeURI(getUrlVars()["minor_issue"]);
var closed_reason = (typeof closed_reason === undefined) ? '' : decodeURI(getUrlVars()["closed_reason"]);
var closed_remark = (typeof closed_remark === undefined) ? '' : decodeURI(getUrlVars()["closed_remark"]);
var file = (typeof file === undefined) ? '' : decodeURI(getUrlVars()["file"]);
var checked_1 = (typeof checked_1 === undefined) ? '' : decodeURI(getUrlVars()["checked_1"]);
var checked_2 = (typeof checked_2 === undefined) ? '' : decodeURI(getUrlVars()["checked_2"]);
//endregion

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

var checked_content_arr = checked_content(checked_1, checked_2);

var evaluation_default_text = '一、-(已緩解)'+
                                '\n\n二、-(已緩解)'+
                                '\n\n三、-(                    )'+
                                '\n四、量表評量成效'+
                                '\n1.	憂鬱程度:'+
                                '\n重點文字說明:'+
                                '\n2.	BSRS-5'+
                                '\n重點文字說明:'+
                                '\n3.	生活品質量表：'+
                                '\n重點文字說明:'+
                                '\n4.	家庭關係量表：'+
                                '\n重點文字說明:'+
                                '\n5.	就業輔導評估 '+ checked_content_arr[0] +
                                '\n6.	社會適應程度評估 '+ checked_content_arr[1] +
                                '\n7.	整體成效說明：'+
                                '';

var intervention_default_text = '一、'+
                            '\n二、'+
                            '\n三、';                                

//獲取個案評估表既有的資料顯示在新增個案表格中 region
$(document).ready(function(){

    //設置麵包屑
    var history_back_url = document.referrer;
    var history = history_back_url.split("?")[1].split("&form_id")[0]
    $("#history").attr('href',"case_all.php?"+history);
    $("#history2").attr('href',"case_all_all.php?"+history_back_url.split("&")[7]+"&"+history_back_url.split("&")[8]);

    //抓取今天日期
    var datetoday = moment().format('YYYY-MM-DD');

    $("#open_case_id").html(open_id);
    // $("#closed_id").val("");
    $("#name").val(name);
    $("#gender").val(gender);
    $("#birth").val(birth);

    $("#open_date").val(open_date);
    $("#closed_date").val(datetoday);

    $("#customFile1").html('<a name="customFile_a" href="./upload/'+file+'" style="text-decoration:none;color:blue;" target="_blank">'+file+'<br/></a><img style="vertical-align:middle;" width="auto" onerror="hideContainer(this)" src="./upload/'+file+'">');

    $("#main_issue").val(main_issue);
    $("#minor_issue").val(minor_issue);
    $("#intervention").html(intervention_default_text);
    $("#evaluation").html(evaluation_default_text);
    $("[name='closed_reason'][value='"+closed_reason+"']").attr('checked',true);
    $("#remark").val(closed_remark);

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