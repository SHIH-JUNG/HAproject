const notyf = new Notyf();

$(document).ready(function () {
    $("#case_id_prestr").hide();
});

$.ajax({
    type:'POST',
    url:'database/find_check_user.php',
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        // console.log('test',data)
        for (var index in data.Id) {
            $("#case_user").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            $("#case_user").val(assign_name);
        }
    },
});

//新增至開案個案region
$("#case_add_new").on('click',function(){
    var stau = false;

    var wstau = false;

    if (check_current_case_value() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }

    // if (check_update_currentcase_data() != "") 
    // {
            
    //     wstau = false;
    // }
    // else {
    //     wstau = true;
    // }

    if(!stau)
    {
        swal({
            title:check_current_case_value(),
            type:'error'
        })
    }
    else
    { 
        add_new_current_case_database();
    }
});
//endregion

// 字母匹配 region
function dislodgeLetter(str) {
    var result;
    var reg = /[a-zA-Z]+/;  //[a-zA-Z]表示匹配字母，g表示全局匹配
    while (result = str.match(reg)) { //判断str.match(reg)是否没有字母了
      str = str.replace(result[0], ''); //替换掉字母  result[0] 是 str.match(reg)匹配到的字母
    }
    return str;
}
//endregion

//檢查新增個案表格有無未填寫欄位，若有未填寫欄位將會在點擊新增按鈕時提示 region
function check_update_currentcase_data()
{
    var case_id = $("#case_id").val();
    var create_date = $("#create_date").val();
    var object_type = $("#object_type").val();
    var case_property = $("#case_property").val();
    var open_case_date = $("#open_case_date").val();
    var name = $("#name").val();
    var gender = $("#gender").val();
    var sexual_orientation = $("#sexual_orientation").val();
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
        // if (object_type == null || object_type.replace(/\s*/g, "") == '') {
        //     warningstr += "個案類別\r\n";
        // }
        // if (case_property == null || case_property.replace(/\s*/g, "") == '') {
        //     warningstr += "類別屬性\r\n";
        // }
        if (open_case_date == null || open_case_date.replace(/\s*/g, "") == '') {
            warningstr += "開案日期\r\n";
        }
        if (name == null || name.replace(/\s*/g, "") == '') {
            warningstr += "姓名\r\n";
        }
        if (gender == null || gender.replace(/\s*/g, "") == '') {
            warningstr += "性別\r\n";
        }
        if (sexual_orientation == null || sexual_orientation.replace(/\s*/g, "") == '') {
            warningstr += "性別傾向\r\n";
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
        else
        {
            if(dislodgeLetter(pid).substr(0,1) != "1" && dislodgeLetter(pid).substr(0,1) != "2")
            {
                warningstr += "請輸入有效的身分證字號!\r\n";
            }
        }

        if (referral == null || referral.replace(/\s*/g, "") == '') {
            warningstr += "轉介來源\r\n";
        }
    }

    return warningstr;
}
//endregion

//檢查欄位 新增開案個案欄位 region
function check_current_case_value()
{
    var case_id = $("#case_id").val();
    var create_date = $("#create_date").val();
    var object_type = $("#object_type").val();
    var case_property = $("#case_property").val();
    var case_stage = $("#case_stage").val();
    var open_case_date = $("#open_case_date").val();
    var name = $("#name").val();
    var gender = $("#gender").val();
    var sexual_orientation = $("#sexual_orientation").val();
    var phone = $("#phone").val();
    var birth = $("#birth").val();
    var pid = $("#pid").val();
    var case_grade = $("#case_grade").val();
    var referral = $("#referral").val();

    var caseid_repeat = check_case_isrepeat();
    var errorstr = "";

    var case_id_c_2 = "none";
    if (case_id.replace(/\s*/g, "") != '') {

        if(case_id.includes("RE"))
        {
            case_id_c_2 = case_id.replace("RE", "")
        }
    }

    // console.log(case_id_c_2)

    if (case_id == null) {
        errorstr += "未填寫開案編號!\r\n";
    }
    if (create_date == null) {
        errorstr += "未填寫登入日期!\r\n";
    }
    if (object_type == null) {
        errorstr += "未選擇個案類別!\r\n";
    }
    // if (case_property == null) {
    //     errorstr += "未選擇類別屬性!\r\n";
    // }
    // if(case_property.replace(/\s*/g, "") == '自立宿舍' || case_property.replace(/\s*/g, "") == '安置家園')
    // {
    //     if (case_stage == null) {
    //         errorstr += "未填寫類別屬性階段!\r\n";
    //     }
    // }
    if (open_case_date == null) {
        errorstr += "未填寫開案日期!\r\n";
    }
    if (name == null) {
        errorstr += "未填寫姓名!\r\n";
    }
    if (gender == null) {
        errorstr += "未填寫性別!\r\n";
    }
    if (sexual_orientation == null) {
        errorstr += "未填寫性別傾向!\r\n";
    }
    if (phone == null) {
        errorstr += "未填寫電話!\r\n";
    }
    if (birth == null) {
        errorstr += "未填寫出生年月日!\r\n";
    }
    if (case_grade == null) {
        errorstr += "未選擇個案分級!\r\n";
    }
    if (pid == null) {
        errorstr += "未選擇身分證字號!\r\n";
    }
    // if (referral == null) {
    //     errorstr += "未選擇轉介來源!\r\n";
    // }
    if (errorstr == "") {
        //console.log(caseid_repeat)
        if(caseid_repeat)
        {
            errorstr += "開案編號重複!!!\r\n";
        }
        if (case_id.replace(/\s*/g, "") == ''  || case_id_c_2.replace(/\s*/g, "") == '') {
            errorstr += "未填寫開案編號!\r\n";
        }
        if (create_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫登入日期!\r\n";
        }
        if (object_type.replace(/\s*/g, "") == '') {
            errorstr += "未選擇個案類別!\r\n";
        }
        // if (case_property.replace(/\s*/g, "") == '') {
        //     errorstr += "未選擇類別屬性!\r\n";
        // }
        // if(case_property.replace(/\s*/g, "") == '自立宿舍' || case_property.replace(/\s*/g, "") == '安置家園')
        // {
        //     if (case_stage.replace(/\s*/g, "") == '') {
        //         errorstr += "未填寫類別屬性階段!\r\n";
        //     }
        // }
        if (open_case_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫開案日期!\r\n";
        }
        if (name.replace(/\s*/g, "") == '') {
            errorstr += "未填寫姓名!\r\n";
        }
        if (gender.replace(/\s*/g, "") == '') {
            errorstr += "未填寫性別!\r\n";
        }
        if (sexual_orientation.replace(/\s*/g, "") == '') {
            errorstr += "未填寫性別傾向!\r\n";
        }
        if (phone.replace(/\s*/g, "") == '') {
            errorstr += "未填寫電話!\r\n";
        }
        if (birth.replace(/\s*/g, "") == '') {
            errorstr += "未填寫出生年月日!\r\n";
        }
        if (case_grade.replace(/\s*/g, "") == '') {
            errorstr += "未選擇個案分級!\r\n";
        }
        
        if (pid.replace(/\s*/g, "") == '') {
            errorstr += "未選擇身分證字號!\r\n";
        }
        else
        {
            if(dislodgeLetter(pid).substr(0,1) != "1" && dislodgeLetter(pid).substr(0,1) != "2")
            {
                errorstr += "請輸入有效的身分證字號!\r\n";
            }
        }

        // if (referral.replace(/\s*/g, "") == '') {
        //     errorstr += "未選擇轉介來源!\r\n";
        // }
    }

    return errorstr;
}
//endregion

//新增至開案個案資料庫 region
function add_new_current_case_database()
{
    if($("#object_type").val() == "親職兒少")
    {
        var open_case_id = $("#case_id_prestr").val() + $("#case_id").val();
    }
    else
    {
        var open_case_id = $('#case_id').val()
    }

    $.ajax({
        url: "database/add_new_case.php",
        type: "POST",
        data:{
            Phone_id:'',
            Case_id:open_case_id,
            Case_create_date:$("#create_date").val(),
            Object_type:$("#object_type").val(),
            Case_grade:$('#case_grade').val(),
            Case_property:$("#case_property").val(),
            Case_stage:$("#case_stage").val(),
            Open_case_date:$("#open_case_date").val(),
            Name:$("#name").val(),
            Gender:$("#gender").val(),
            Sexual_orientation:$("#sexual_orientation").val(),
            Phone:$("#phone").val(),
            Birth:$("#birth").val(),
            Case_pid:$("#pid").val(),
            Referral:$("#referral").val(),
            Unopen_type:'case',
            Case_user:$("#case_user").val(),
        },
//            dataType: "JSON",
        success: function (data) {
            // console.log(data);
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
                    title: '新增失敗！請聯絡網站維護人員',
                    allowOutsideClick: false //不可點背景關閉
                    })
                    // .then(function () {
                    //     location.reload();
                    // })
            }  
        },
            error: function () {
                swal({
                    type: 'error',
                    title: '新增失敗！請聯絡網站維護人員',
                    allowOutsideClick: false //不可點背景關閉
                })
            }
    });
}
//endregion

// 如果服務對象類型是親職兒少則另外設定 region
window.submit_ab_id_str = "";
$('#case_id_prestr').on('change', function() {
    
    var this_val = this.value;

    submit_ab_id_str = this_val;

    find_case_auto_id("親職兒少");
});    
//endregion

// 根據服務對象類型 自動填入 開案編號 region
$('#object_type').on('change', function() {

    $("#case_id").val('');
    var object_type_val = this.value;

    

    if(object_type_val == "親職兒少")
    {
        $("#case_id_prestr").show();

    }
    else
    {
        $("#case_id_prestr").hide();
    }

    find_case_auto_id(object_type_val);
});
//endregion

find_case_auto_id = function(object_type_val) {
    // 自動查詢沒使用過的編號
    $.ajax({
        url: "database/find_trans_automatic_id.php",
        data:{
            keyword:object_type_val,
            ab_id_str:submit_ab_id_str,
        },
        type: "POST",
        dataType: "JSON",
        async :false,
        success: function (data) {
            var case_id = 0;

            // console.log(data[0]?.Case_id)
            if(typeof(data[0]?.Case_id) != 'undefined')
            {
                case_id = data[0]?.Case_id;
            }
            else
            {
                case_id = 0;
            }
    
            
            var str_id = (parseInt(case_id)+1).toString();

            switch (object_type_val) {
            case '一般藥癮者':
            case '藥癮家庭':   
                    $("#case_id").val("RE"+str_id);
                break;
            case '愛滋感染者':
                    $("#case_id").val(str_id);
                break;

            case '親職兒少':
                    if(str_id == "NaN")
                    {
                        $("#case_id").val("");
                    }
                    else
                    {
                        $("#case_id").val(str_id);
                    }
                    
                break;

            default:
                    $("#case_id").val("");
                break;
            }
        },
        error:function(e){
            // console.log(e);
            notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員!');
        }
    });
}

//檢查開案編號是否重複 region
function check_case_isrepeat() {
    
    var isrepeat = false;

    // var r_case_id = $("#case_id").val().replace(/^\s*|\s*$/g,"");

    if($("#open_object_type").val() == "親職兒少")
    {
        var r_case_id = $("#case_id_prestr").val() + $("#case_id").val();
    }
    else
    {
        var r_case_id = $("#case_id").val();
    }

    // console.log(r_case_id)

    $.ajax({
        url: "database/find_repeat_caseid.php",
        data: {
            Open_id:r_case_id
        },
        type: "POST",
        dataType: "JSON",
        async :false,
        success: function (data) {
            // console.log(data)
            if(data == 1)
            {
                isrepeat = true;
            }
            else
            {
                isrepeat = false;
            }
        },
        error: function (e) {
            // console.log(e);
            // notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員!');
        }
    });
    

    return isrepeat;
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
                title:'新增失敗！請聯絡網站維護人員',
                type:'error',
                })
            } 
        },
    error:function(e){
        swal({
            title:'新增失敗！請聯絡網站維護人員',
            type:'error',
        })
    }
    });
}
//endregion