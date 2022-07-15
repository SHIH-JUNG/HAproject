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

supervise_msg_arr = [];

//抓個別特定結案表region
$(document).ready(function(){

    $.ajax({
        url: "database/find_closed_data_detail.php",
        data:{
            Closed_id:closed_id,
        },
        type: "POST",
        dataType: "JSON",
        async: false,
        success: function (data) {
            // console.log(data)

            $.each(data,function(index,value){

                var supervise_sign_file_val = value.Supervise_signature.replace("\.\.\/signature\/", "");

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

                $("#supervise").val(value.Supervise)


                $("#supervise_signature_simg").text("點擊顯示簽名圖片")
                $("#supervise_signature_simg").attr("href", "./signature/"+supervise_sign_file_val)

                supervise_msg_arr.push(value.Supervise_sign_msg)
                supervise_msg_arr.push(value.Supervise_sign_time)

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

    //有選取的 radio or checkbox 字會變紅 region
    $("input[name*='closed_reason']").each(function(i,n){

        if($(this).is(":checked"))
        {
            $(".link_label_closed_reason").eq(i).css("color", "red");
        }
    });
    //endregion 

    //jsignature插件初始化 region
    jsignature_initialization("supervise");
    //endregion  

    //隱藏jsignature畫布區域 region
    $("#supervise_signature_area").hide();
    $("#social_worker_signature_area").hide();
    //endregion  
});

//endregion  

sign_msg_model = function(sign_type_name) {
    //手動新增按鈕點擊跳出模態框
    $('#myModal').on('shown.bs.modal', function () {
        $('#'+sign_type_name).trigger('focus');
    });

    // console.log(social_worker_msg_arr)
    // console.log(supervise_msg_arr)

    switch (sign_type_name) {
        case 'supervise':
                var type_name = "督導";
                $(".sign_msg").text(supervise_msg_arr[0]);
                $(".sign_msg_time").val(supervise_msg_arr[1]);
            break;
    
        case 'social_worker':
                var type_name = "社工員";
                $(".sign_msg").text(social_worker_msg_arr[0]);
                $(".sign_msg_time").val(social_worker_msg_arr[1]);
            break;
    }

    $(".sign_msg_td_name").text(type_name+"簽名留言內容");
}


//jsignature插件初始化 region
function jsignature_initialization(init_name) {
    var $sigdiv = $("#"+init_name+"_signature");
    $sigdiv.jSignature({'UndoButton':true}); // 初始化jSignature插件-属性用","隔开
    // $sigdiv.jSignature({'decor-color':'red'}); // 初始化jSignature插件-设置横线颜色
    // $sigdiv.jSignature({'lineWidth':"6"});// 初始化jSignature插件-设置横线粗细
    // $sigdiv.jSignature({"decor-color":"transparent"});// 初始化jSignature插件-去掉横线
    // $sigdiv.jSignature({'UndoButton':true});// 初始化jSignature插件-撤销功能
    // $sigdiv.jSignature({'height': 100, 'width': 200}); // 初始化jSignature插件-设置书写范围(大小)

    $("#"+init_name+"_signature").bind('change', function(e){
        var datapair = $sigdiv.jSignature("getData", "image");
        $("#"+init_name+"_images").attr('src','data:' + datapair[0] + "," + datapair[1]);
    })

    $("#"+init_name+"_signature_submit").click(function(){

        var ajax_url = 'database/update_closed_data_detail_signature.php';

        var src_data = $("#"+init_name+"_images").attr('src');
        // console.log(src);
        if(src_data){
            $.ajax({
                type:'post',
                url:ajax_url,
                data:{
                    closed_id:closed_id,
                    src_data:src_data,
                    sign_msg:$("#"+init_name+"_signature_msg").val(),
                    sign_type:init_name
                },
                async:false,
                success:function(data){
                    // console.log(data);
                    if(data){
                        swal({
                            title:'送出簽名成功！',
                            type:'success',                        
                        }).then(function(){
                            location.reload();
                        }) 
                    }else{
                        swal({
                            title:'生成簽名圖片失敗！請聯絡負責單位',
                            type:'error',
                        })
                    }
                }
            });
        }else{
            alert('簽名圖片檔不能為空！');return false;
        }
    });
    $("#"+init_name+"_reset").click(function(){
        $("#"+init_name+"_signature").jSignature("reset"); //重置画布，可以进行重新作画
        $("#"+init_name+"_images").attr('src','');
    });
}
//endregion

//按督導簽名，顯示簽名畫布 region
$("#supervise_signature_btn").on('click',function(){
    $("#supervise_signature_area").show();
    $("#collapseTwo").hide();
});
//endregion

//在簽名畫布區域按取消，返回詳細資料，並自動滾動卷軸至最頂部 region
show_main_panel = function() {
    $("#supervise_signature_area").hide();
    $("#social_worker_signature_area").hide();
    $("#collapseTwo").show();
    // $('html, body').scrollTop(0);
}
//endregion


//更新結案表基本資料region
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

//結案表(update)的必填欄位 region
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

// 再次開案連結 region
reopencase = function() {
    window.location.href = 'reopencase.php?closed_id='+closed_id+'';
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

//結案總表格鎖定控制region
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


