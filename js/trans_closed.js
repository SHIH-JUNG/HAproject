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
var open_date = getUrlVars()["open_date"];
var main_issue = (typeof main_issue === undefined) ? '' : decodeURI(getUrlVars()["main_issue"]);
var closed_reason = (typeof closed_reason === undefined) ? '' : decodeURI(getUrlVars()["closed_reason"]);
var closed_remark = (typeof closed_remark === undefined) ? '' : decodeURI(getUrlVars()["closed_remark"]);
//endregion

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
    $("#closed_id").val("");
    $("#name").val(name);
    $("#gender").val(gender);

    $("#open_date").val(open_date);
    $("#closed_date").val(datetoday);

    $("#main_issue").val(main_issue);
    // $("#intervention").val();
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
                $("#user").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            }
        },
    });
    $("#user").val(assign_name);

    //獲取最新的結案案號
    $.ajax({
        url: "database/find_closed_id.php",
        type: "POST",
        dataType: "JSON",
        async :false,
        success: function (data) {
            var str_id = (parseInt(data[0].Closed_id)+1).toString();
            $("#closed_id").val(str_id);
        },
        error:function(e){
            console.log("error");
        }
    });
});
//endregion

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
    var closed_id = $("#closed_id").val();
    var closed_date = $("#closed_date").val();
    var main_issue = $("#main_issue").val();
    var intervention = $("#intervention").val();
    var closed_reason_checkbox =  $("input[name='closed_reason']:checked").length;
    var closed_reason_other = $("#closed_reason_other").val();
    var user_name = $("#user").val();

    var errorstr = "";

    if (closed_id == null) {
        errorstr += "未填寫結案案號!\r\n";
    }
    if (main_issue == null) {
        errorstr += "未填寫主要問題!\r\n";
    }
    if (intervention == null) {
        errorstr += "未填寫問題處遇!\r\n";
    }
    if (user_name == null) {
        errorstr += "未填寫社工員!\r\n";
    }
    if (closed_date == null) {
        errorstr += "未填寫結案日期!\r\n";
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
        if (closed_id.replace(/\s*/g, "") == '') {
            errorstr += "未填寫結案案號!\r\n";
        }
        if (main_issue.replace(/\s*/g, "") == '') {
            errorstr += "未填寫主要問題!\r\n";
        }
        if (intervention.replace(/\s*/g, "") == '') {
            errorstr += "未填寫問題處遇!\r\n";
        }
        if (user_name.replace(/\s*/g, "") == '') {
            errorstr += "未填寫社工員!\r\n";
        }
        if (closed_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫結案日期!\r\n";
        }
    }

    return errorstr;
}
//endregion


//新增至結案資料庫 region
function trans_closed_database()
{
    console.log($("#open_date").val())
    $.ajax({
        url: "database/add_new_closed.php",
        type: "POST",
        data:{
            Open_case_id:open_id,
            Open_case_seqid:open_seqid,
            Closed_id:$("#closed_id").val(),
            Name:$("#name").val(),
            Gender:$("#gender").val(),
            Open_date:open_date,
            Closed_date:$("#closed_date").val(),
            Main_issue:$("#main_issue").val(),
            Intervention:$("#intervention").val(),
            Closed_reason:$("[name='closed_reason']:checked").val(),
            Remark:$("#remark").val(),
            Assign:$("#user").val(),
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
                alert("系統錯誤!");
                console.log(e)
            }
    });
}
//endregion