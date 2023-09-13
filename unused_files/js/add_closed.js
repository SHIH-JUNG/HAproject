$(document).ready(function(){

    append_user();
    $("#user").val(assign_name);
});

//新增至結案 region
$("#closed_add_new").on('click',function(){
    var stau = false;

    //判斷必填欄位是否有填寫
    if (check_add_closed_data() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }

    if(!stau)
    {
        swal({
            title:check_add_closed_data(),
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
function check_add_closed_data()
{
    var name = $("#name").val();
    var gender = $("#gender").val();
    var open_date = $("#open_date").val();
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
    if (name == null) {
        errorstr += "未填寫姓名!\r\n";
    }
    if (gender == null) {
        errorstr += "未填寫性別!\r\n";
    }
    if (open_date == null) {
        errorstr += "未填寫開案日期!\r\n";
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
        if (name.replace(/\s*/g, "") == '') {
            errorstr += "未填寫姓名!\r\n";
        }
        if (gender.replace(/\s*/g, "") == '') {
            errorstr += "未填寫性別!\r\n";
        }
        if (open_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫開案日期!\r\n";
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
    var close_reason_checked = $("[name='closed_reason']:checked").val();
        var close_reason_other = $("#closed_reason_other").val();
        var close_reason = "";
        if(close_reason_checked.includes("other"))
        {
            close_reason = "other"+close_reason_other;
        }
        else
        {
            close_reason = close_reason_checked;
        }        

    $.ajax({
        url: "database/add_new_closed.php",
        type: "POST",
        data:{
            Open_case_id:$("#open_case_id").val(),
            Closed_id:$("#closed_id").val(),
            Name:$("#name").val(),
            Gender:$("#gender").val(),
            Open_date:$("#open_date").val(),
            Closed_date:$("#closed_date").val(),
            Main_issue:$("#main_issue").val(),
            Intervention:$("#intervention").val(),
            Closed_reason:close_reason,
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
                    })
                    // .then(function () {
                    //     location.reload();
                    // })
            }  
        },
            error: function (e) {
                swal({
                    type: 'error',
                    title: '新增失敗!請聯絡負責人',
                    allowOutsideClick: false //不可點背景關閉
                })
                console.log(e)
            }
    });
}
//endregion

//呼叫user方法region
function append_user(){             
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
}
//endregion