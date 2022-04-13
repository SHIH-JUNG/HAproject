//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//獲取本網址從諮詢個案詳細資料網頁(phone_detail_v2.php)傳過來的屬性值region
var unopen_type = decodeURI(getUrlVars()["unopen_type"]);
var unopencase_id = getUrlVars()["id"];
var case_id = getUrlVars()["case_id"];
var case_property = decodeURI(getUrlVars()["case_property"]);
var object_type = decodeURI(getUrlVars()["object_type"]);

// var tran_case_name = decodeURI(getUrlVars()["tran_case_name"]) || '';
// var tran_case_phone = decodeURI(getUrlVars()["tran_case_phone"]) || '';
// var tran_case_pid = decodeURI(getUrlVars()["tran_case_pid"]) || '';
// var tran_case_birth = decodeURI(getUrlVars()["tran_case_birth"]) || '';
// var tran_case_referral = decodeURI(getUrlVars()["tran_case_referral"]) || '';


var tran_case_name = (typeof tran_case_name === undefined) ? '' : decodeURI(getUrlVars()["tran_case_name"]);
var tran_case_phone = (typeof tran_case_phone === undefined) ? '' : decodeURI(getUrlVars()["tran_case_phone"]);
var tran_case_pid = (typeof tran_case_pid === undefined) ? '' : decodeURI(getUrlVars()["tran_case_pid"]);
var tran_case_birth = (typeof tran_case_birth === undefined) ? '' : decodeURI(getUrlVars()["tran_case_birth"]);
var tran_case_referral = (typeof tran_case_referral === undefined) ? '' : decodeURI(getUrlVars()["tran_case_referral"]);
//endregion

console.log(tran_case_name, tran_case_phone, tran_case_pid, tran_case_birth, tran_case_referral)

//獲取諮詢個案既有的資料顯示在新增個案表格中region
$(document).ready(function(){
    var datetoday = moment().format('YYYY-MM-DD');

    //region 顯示諮詢個案編號、開案編號、個案屬性
    $("#unopencase_id").html(unopencase_id);
    $("#case_id").val(case_id);
    $("#case_property").val(case_property);
    $("#object_type").val(object_type);

    $("#name").val(tran_case_name);
    $("#phone").val(tran_case_phone);
    $("#referral").val(tran_case_referral);
    $("#birth").val(tran_case_birth);
    $("#pid").val(tran_case_pid);

    $("#create_date").val(datetoday);
    //endregion

});


//新增至開案個案region
$("#trans_case").on('click',function(){
    var stau = false;

    if (check_update_trans_opencase_data() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }

    if(!stau)
    {
        swal({
            title: check_update_trans_opencase_data()+"上述資料尚未填寫完畢是否送出？",
            text: "提示：未填寫完畢將會新增至首頁行事曆提醒",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "送出",
            cancelButtonText: "取消",
            showConfirmButton: true,
            showCancelButton: true
        }).then(function(result) {
            if (result) {
                //若尚未填寫完畢，新增提醒至行事曆
                // add_new_caseedit_calendar();
                //新增至開案個案
                trans_to_opendata_database();
            }
        }, function(dismiss){
            if(dismiss == 'cancel'){
                swal({
                    title:'已取消送出',
                    type:'success',                        
                })
            }
        }).catch(swal.noop)
    }
    else
    { 
        trans_to_opendata_database();
    }
});
//endregion

//檢查新增個案表格有無未填寫欄位，若有未填寫欄位將會在點擊新增按鈕時提示region
function check_update_trans_opencase_data()
{
    var case_id = $("#case_id").val();
    var create_date = $("#create_date").val();
    var object_type = $("#object_type").val();
    var case_property = $("#case_property").val();
    var open_case_date = $("#open_case_date").val();
    var name = $("#name").val();
    var phone = $("#phone").val();
    var birth = $("#birth").val();
    var pid = $("#pid").val();
    // var case_grade = $("#case_grade").val();
    var referral = $("#referral").val();

    var warningstr = "";

    if (warningstr == "") {
        if (case_id == null || case_id.replace(/\s*/g, "") == '') {
            warningstr += "開案編號\r\n";
        }
        if (create_date == null || create_date.replace(/\s*/g, "") == '') {
            warningstr += "登入日期\r\n";
        }
        if (object_type == null || object_type.replace(/\s*/g, "") == '') {
            warningstr += "服務對象類別\r\n";
        }
        if (case_property == null || case_property.replace(/\s*/g, "") == '') {
            warningstr += "個案屬性\r\n";
        }
        if (open_case_date == null || open_case_date.replace(/\s*/g, "") == '') {
            warningstr += "開案日期\r\n";
        }
        if (name == null || name.replace(/\s*/g, "") == '') {
            warningstr += "姓名\r\n";
        }
        if (phone == null || phone.replace(/\s*/g, "") == '') {
            warningstr += "電話\r\n";
        }
        if (birth == null || birth.replace(/\s*/g, "") == '') {
            warningstr += "出生年月日\r\n";
        }
        // if (case_grade == null || case_grade.replace(/\s*/g, "") == '') {
        //     warningstr += "個案分級\r\n";
        // }
        if (pid == null || pid.replace(/\s*/g, "") == '') {
            warningstr += "身分證字號\r\n";
        }
        if (referral == null || referral.replace(/\s*/g, "") == '') {
            warningstr += "轉介來源\r\n";
        }
    }

    return warningstr;
}
//endregion

//新增至開案個案資料庫 region
function trans_to_opendata_database()
{
    $.ajax({
        url: "database/add_new_case.php",
        type: "POST",
        data:{
            Phone_id:$("#unopencase_id").text(),
            Case_id:$("#case_id").val(),
            Case_create_date:$("#create_date").val(),
            Object_type:$("#object_type").val(),
            Case_property:$("#case_property").val(),
            Open_case_date:$("#open_case_date").val(),
            Name:$("#name").val(),
            Phone:$("#phone").val(),
            Birth:$("#birth").val(),
            Case_pid:$("#pid").val(),
            Referral:$("#referral").val(),
            Unopen_type:unopen_type,
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
                        window.location.replace("current_case.php"); 
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
            error: function () {
                alert("系統錯誤!");
            }
    });
}
//endregion

//開案資料未填寫完畢新增行事曆提醒 region
function add_new_caseedit_calendar() {

    var get_url =document.referrer;

    $.ajax({
        url: "database/add_new_caseedit_calendar.php",
        data:{
            Title:title,
            Url:get_url,
            Start_date:start_date,
            End_date:end_date,
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            if(data == 1){
                swal({
                    title:'新增成功！',
                    type:'success',                        
                }).then(function(){
                    location.reload();
                }) 
            }else{
                swal({
                title:'新增失敗！',
                type:'error',
                })
            } 
        },
    error:function(e){
        console.log("錯誤");
    }
    });
}
//endregion
