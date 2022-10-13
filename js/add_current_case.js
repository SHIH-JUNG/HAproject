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

//檢查新增個案表格有無未填寫欄位，若有未填寫欄位將會在點擊新增按鈕時提示region
function check_update_currentcase_data()
{
    var case_id = $("#case_id").val();
    var create_date = $("#create_date").val();
    var object_type = $("#object_type").val();
    var case_property = $("#case_property").val();
    var open_case_date = $("#open_case_date").val();
    var name = $("#name").val();
    var gender = $("#gender").val();
    var phone = $("#phone").val();
    var birth = $("#birth").val();
    var pid = $("#pid").val();
    // var case_grade = $("#case_grade").val();
    var referral = $("#referral").val();

    var warningstr = "";

    if (warningstr == "") {
        // if (case_id == null || case_id.replace(/\s*/g, "") == '') {
        //     warningstr += "開案編號\r\n";
        // }
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
    if (case_property == null) {
        errorstr += "未選擇類別屬性!\r\n";
    }
    if(case_property.replace(/\s*/g, "") == '自立宿舍' || case_property.replace(/\s*/g, "") == '安置家園')
    {
        if (case_stage == null) {
            errorstr += "未填寫類別屬性階段!\r\n";
        }
    }
    if (open_case_date == null) {
        errorstr += "未填寫開案日期!\r\n";
    }
    if (name == null) {
        errorstr += "未填寫姓名!\r\n";
    }
    if (gender == null) {
        errorstr += "未填寫性別!\r\n";
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
    if (referral == null) {
        errorstr += "未選擇轉介來源!\r\n";
    }
    if (errorstr == "") {
        // console.log(caseid_repeat)
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
        if (case_property.replace(/\s*/g, "") == '') {
            errorstr += "未選擇類別屬性!\r\n";
        }
        if(case_property.replace(/\s*/g, "") == '自立宿舍' || case_property.replace(/\s*/g, "") == '安置家園')
        {
            if (case_stage.replace(/\s*/g, "") == '') {
                errorstr += "未填寫類別屬性階段!\r\n";
            }
        }
        if (open_case_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫開案日期!\r\n";
        }
        if (name.replace(/\s*/g, "") == '') {
            errorstr += "未填寫姓名!\r\n";
        }
        if (gender.replace(/\s*/g, "") == '') {
            errorstr += "未填寫性別!\r\n";
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
        if (referral.replace(/\s*/g, "") == '') {
            errorstr += "未選擇轉介來源!\r\n";
        }
    }

    return errorstr;
}
//endregion

//新增至開案個案資料庫 region
function add_new_current_case_database()
{
    $.ajax({
        url: "database/add_new_case.php",
        type: "POST",
        data:{
            Phone_id:'',
            Case_id:$("#case_id").val(),
            Case_create_date:$("#create_date").val(),
            Object_type:$("#object_type").val(),
            Case_grade:$('#case_grade').val(),
            Case_property:$("#case_property").val(),
            Case_stage:$("#case_stage").val(),
            Open_case_date:$("#open_case_date").val(),
            Name:$("#name").val(),
            Gender:$("#gender").val(),
            Phone:$("#phone").val(),
            Birth:$("#birth").val(),
            Case_pid:$("#pid").val(),
            Referral:$("#referral").val(),
            Unopen_type:'case',
            Case_user:$("#case_user").val(),
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
                    })
                    // .then(function () {
                    //     location.reload();
                    // })
            }  
        },
            error: function () {
                swal({
                    type: 'error',
                    title: '新增失敗!請聯絡負責人',
                    allowOutsideClick: false //不可點背景關閉
                })
            }
    });
}
//endregion

// 根據服務對象類型 自動填入 開案編號 region
$('#object_type').on('change', function() {

    $("#case_id").val('');
    var object_type_val = this.value;

    // 自動查詢沒使用過的編號
    $.ajax({
        url: "database/find_trans_automatic_id.php",
        data:{
            keyword:object_type_val,
        },
        type: "POST",
        dataType: "JSON",
        async :false,
        success: function (data) {
        //    console.log(data)
           var str_id = (parseInt(data[0].Case_id)+1).toString();

           
           switch (object_type_val) {
            case '一般藥癮者':
            case '藥癮家庭':   
                    $("#case_id").val("RE"+str_id);
                break;
            case '愛滋感染者':
            case '親職兒少':
                    $("#case_id").val(str_id);
                break;
            default:
                    $("#case_id").val("");
                break;
           }
        },
        error:function(e){
            console.log(e);
        }
    });
});
//endregion

//檢查開案編號是否重複 region
function check_case_isrepeat() {
    
    var isrepeat = false;

    var r_case_id = $("#case_id").val().replace(/^\s*|\s*$/g,"");

    console.log(r_case_id)

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
            console.log(e);
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
                title:'新增失敗！',
                type:'error',
                })
            } 
        },
    error:function(e){
        swal({
            title:'新增失敗！',
            type:'error',
        })
    }
    });
}
//endregion