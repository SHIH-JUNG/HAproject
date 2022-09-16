//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

closed_id = getUrlVars()["closed_id"];

// 當網頁載入時 region
$(document).ready(function(){
    $.ajax({
        type:'POST',
        url:'database/find_check_user.php',
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log('test',data)
            for (var index in data.Id) {
                $("#case_user").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            }
        },
    });

    // 再次開案現有資料自動填入 region
    $.ajax({
        url: "database/find_reopencase_data.php",
        data:{
            Closed_id:closed_id,
        },
        type: "POST",
        dataType: "JSON",
        async: false,
        success: function (data) {
            // console.log(data)
            $.each(data,function(index,value){



                $("#case_id").val(value.Case_id);
                // $("#create_date").val(value.Case_Create_date);
                $("#object_type").val(value.Object_type);
                $('#case_grade').val(value.Case_grade);
                $("#case_property").val(value.Case_property);
                $("#case_stage").val(value.Case_stage);
                // $("#open_case_date").val(value.Open_case_date);
                $("#name").val(value.Name);
                $("#gender").val(value.Gender);
                $("#phone").val(value.Phone);
                $("#birth").val(value.Birth);
                $("#pid").val(value.Case_pid);
                $("#referral").val(value.Referral);
                $("#case_user").val(value.Case_assign);
            });
        },
        error:function(e){
            console.log(e);
        }
    });
    //endregion

});
//endregion

//新增至開案個案 region
$("#case_add_new").on('click',function(){
    var stau = false;

    if (check_current_case_value() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }

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

    // var caseid_repeat = check_case_isrepeat();
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
        // if(caseid_repeat)
        // {
        //     errorstr += "開案編號重複!!!\r\n";
        // }
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
            Unopen_type:'reopencase',
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



