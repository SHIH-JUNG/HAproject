//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//抓個別特定結案個案表region
$(document).ready(function(){

    var closed_id = getUrlVars()["closed_id"];
    $.ajax({
        url: "database/find_closed_data_detail.php",
        data:{
            Closed_id:closed_id,
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            // console.log(data)

            $.each(data,function(index,value){

                $("#closed_id").html(value.Closed_id);
                $("#name").val(value.Name);
                $("#gender").val(value.Gender);

                $("#open_date").val(value.Open_date);
                $("#closed_date").val(value.Closed_date);

                $("#main_issue").val(value.Main_issue);
                $("#intervention").val(value.Intervention);

                if(value.Closed_reason.includes("other"))
                {
                    $("[name='closed_reason'][value='other']").attr('checked',true);
                    value.Closed_reason = value.Closed_reason.replace("other", "");                    
                    $("#closed_reason_other").val(value.Closed_reason);
                }else
                {
                    $("[name='closed_reason'][value='"+value.Closed_reason+"']").attr('checked',true);
                }

                $("#remark").val(value.Remark);

                append_user();
                $("#user").val(value.Assign);

                $("#supervise_signature").val(value.Supervise_signature);

                $("#adate").html(value.Create_date);
                $("#applicant").html(value.Create_name);
                $("#udate").html(value.Update_date);
                $("#up_applicant").html(value.Update_name);
            });
        },
        error:function(e){
            console.log("error");
        }
    });
    $(".closed_question").attr("disabled",true);
});

//endregion  


//更新結案個案表基本資料region
$("#closed_update").on('click',function(){

var closed_id = getUrlVars()["closed_id"];

var stau = false;

    if (check_updat_closed_data() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }
    console.log(stau);

    if(!stau)
    {
        swal({
            title:check_updat_closed_data(),
            type:'error'
          })
    }
    else
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
        // console.log(close_reason)
        
        $.ajax({                                                                                    
            url: "database/update_closed_data_detail.php",
            data:{
                Closed_id:closed_id,
                Closed_date:$("#closed_date").val(),
                Main_issue:$("#main_issue").val(),
                Intervention:$("#intervention").val(),
                Closed_reason:close_reason,
                Remark:$("#remark").val(),
                Assign:$("#user").val(),
                // Supervise_signature:$("#supervise_signature").val()
            },
            type: "POST",
            dataType: "JSON",
            success: function (data) {
                if(data == 1){
                    swal({
                        title:'修改成功！',
                        type:'success',                        
                    }).then(function(){
                        location.reload();
                    }) 
                }else{
                    swal({
                        title:'修改失敗！請聯絡負責單位',
                        type:'error',
                    })
                }  
            },
            error:function(e){
                console.log(e);
            }
        });
    }

});

//結案個案表(update)的必填欄位 region
function check_updat_closed_data()
{
    var closed_date = $("#closed_date").val();
    var closed_reason_checkbox =  $("input[name='closed_reason']:checked").length;
    var closed_reason_other = $("#closed_reason_other").val()

    var errorstr = "";

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
        if (closed_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫結案日期!\r\n";
        }
    }

    return errorstr;
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

//取消重整region
function cancel(){
    location.reload();
}
//endregion

//結案個案總表格鎖定控制region
function closed_edit(){
    $('.closed_question').attr('disabled', false);
    $('#edit_div').attr('hidden', true);
    $('#save_div').attr('hidden', false);
};
function closed_cancel(){
    $('.closed_question').attr('disabled', true);
    $('#edit_div').attr('hidden', false);
    $('#save_div').attr('hidden', true);
};
//endregion



//進入預覽WORD頁面region
$("#preview_word").on('click',function(){
    var closed_id = getUrlVars()["closed_id"];
//    console.log(id);
    location.href = 'preview_word.php?closed_id='+closed_id+'';
});

$("#preview_word2").on('click',function(){
    var closed_id = getUrlVars()["closed_id"];
//    console.log(id);
    location.href = 'preview_word2.php?closed_id='+closed_id+'';
})
//endregion


