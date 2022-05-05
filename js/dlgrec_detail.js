//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

dlgrec_id = getUrlVars()["dlgrec_id"];
social_worker_msg_arr = [];
supervise_msg_arr = [];

//抓個別特定結案表region
$(document).ready(function(){

    $.ajax({
        url: "database/find_dlgrec_data_detail.php",
        data:{
            dlgrec_id:dlgrec_id,
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            // console.log(data)

            $.each(data,function(index,value){

                var social_worker_sign_file_val = value.social_worker_sign.replace("\.\.\/signature\/", "");
                var supervise_sign_file_val = value.supervise_sign.replace("\.\.\/signature\/", "");

                $("#bf_num").val(value.bf_num)
                $("#al_num").val(value.al_num)
                $("#em_num").val(value.em_num)
                $("#lp_num").val(value.lp_num)
                $("#leave_num").val(value.leave_num)
                $("#dlgrec_date").val(value.dlgrec_date)

                $("#dlgrec_0").val(value.dlgrec_0)
                $("#dlgrec_1").val(value.dlgrec_1)
                $("#dlgrec_2").val(value.dlgrec_2)
                $("#dlgrec_3").val(value.dlgrec_3)
                $("#dlgrec_4").val(value.dlgrec_4)
                $("#dlgrec_5").val(value.dlgrec_5)
                $("#dlgrec_6").val(value.dlgrec_6)
                $("#dlgrec_7").val(value.dlgrec_7)
                $("#dlgrec_8").val(value.dlgrec_8)
                $("#dlgrec_9").val(value.dlgrec_9)
                $("#dlgrec_10").val(value.dlgrec_10)
                $("#dlgrec_11").val(value.dlgrec_11)

                $("#dlg_manager").val(value.dlg_manager)
                $("#social_worker").val(value.social_worker)
                $("#supervise").val(value.supervise)


                $("#social_worker_simg").text("點擊顯示簽名圖片")
                $("#social_worker_simg").attr("href", "./signature/"+social_worker_sign_file_val)
                $("#supervise_signature_simg").text("點擊顯示簽名圖片")
                $("#supervise_signature_simg").attr("href", "./signature/"+supervise_sign_file_val)

                // console.log(value.social_worker_sign_msg)

                social_worker_msg_arr.push(value.social_worker_sign_msg)
                social_worker_msg_arr.push(value.social_worker_sign_time)
                supervise_msg_arr.push(value.supervise_sign_msg)
                supervise_msg_arr.push(value.supervise_sign_time)

                $("#adate").html(value.Create_date);
                $("#applicant").html(value.Create_name);
                $("#udate").html(value.Update_date);
                $("#up_applicant").html(value.Update_name);
            });
        },
        error:function(e){
            console.log(e);
        }
    });
    $(".dlgrec_question").attr("disabled",true);


    //jsignature插件初始化 region
    jsignature_initialization("supervise");
    jsignature_initialization("social_worker");
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

        var ajax_url = 'database/update_dlgrec_data_detail_signature.php';

        var src_data = $("#"+init_name+"_images").attr('src');
        // console.log(src);
        if(src_data){
            $.ajax({
                type:'post',
                url:ajax_url,
                data:{
                    dlgrec_id:dlgrec_id,
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
    $("#social_worker_signature_area").hide();
    $("#collapseTwo").hide();
});
//endregion

//按社工員簽名，顯示簽名畫布 region
$("#social_worker_signature_btn").on('click',function(){
    $("#supervise_signature_area").hide();
    $("#social_worker_signature_area").show();
    $("#collapseTwo").hide();
});
//endregion

//在簽名畫布區域按取消，返回詳細資料，並自動滾動卷軸至最頂部 region
show_main_panel = function() {
    $("#supervise_signature_area").hide();
    $("#social_worker_signature_area").hide();
    $("#collapseTwo").show();
    $('html, body').scrollTop(0);
}
//endregion

//更新結案表基本資料region
$("#dlgrec_update").on('click',function(){

var dlgrec_id = getUrlVars()["dlgrec_id"];

var stau = false;

    if (check_updat_dlgrec_data() != "") 
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
            title:check_updat_dlgrec_data(),
            type:'error'
          })
    }
    else
    { 
        $.ajax({                                                                                    
            url: "database/update_dlgrec_data_detail.php",
            data:{
                dlgrec_id:dlgrec_id,
                bf_num:$("#bf_num").val(),
                al_num:$("#al_num").val(),
                em_num:$("#em_num").val(),
                lp_num:$("#lp_num").val(),
                leave_num:$("#leave_num").val(),
                dlgrec_date:$("#dlgrec_date").val(),

                dlgrec_0:$("#dlgrec_0").val(),
                dlgrec_1:$("#dlgrec_1").val(),
                dlgrec_2:$("#dlgrec_2").val(),
                dlgrec_3:$("#dlgrec_3").val(),
                dlgrec_4:$("#dlgrec_4").val(),
                dlgrec_5:$("#dlgrec_5").val(),
                dlgrec_6:$("#dlgrec_6").val(),
                dlgrec_7:$("#dlgrec_7").val(),
                dlgrec_8:$("#dlgrec_8").val(),
                dlgrec_9:$("#dlgrec_9").val(),
                dlgrec_10:$("#dlgrec_10").val(),
                dlgrec_11:$("#dlgrec_11").val(),

                dlg_manager:$("#dlg_manager").val(),
                social_worker:$("#social_worker").val(),
                supervise:$("#supervise").val()
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
function check_updat_dlgrec_data()
{
    var dlgrec_date = $("#dlgrec_date").val();
    
    var errorstr = "";

    if (dlgrec_date == null) {
        errorstr += "未填寫日期!\r\n";
    }
    if (errorstr == "") {
        if (dlgrec_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫日期!\r\n";
        }
    }

    return errorstr;
}
//endregion

//呼叫user方法region
// function append_user(){             
//     $.ajax({
//         type:'POST',
//         url:'database/find_check_user.php',
//         dataType: "JSON",
//         async: false,//啟用同步請求
//         success: function (data) {
//             // console.log('test',data)
//             for (var index in data.Id) {
//                 $("#user").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
//             }
//         },
//     });
// }
//endregion

//取消重整region
function cancel(){
    location.reload();
}
//endregion

//結案總表格鎖定控制region
function dlgrec_edit(){
    $('.dlgrec_question').attr('disabled', false);
    $('#edit_div').attr('hidden', true);
    $('#save_div').attr('hidden', false);
};
function dlgrec_cancel(){
    $('.dlgrec_question').attr('disabled', true);
    $('#edit_div').attr('hidden', false);
    $('#save_div').attr('hidden', true);
};
//endregion



//進入預覽WORD頁面region
$("#preview_word").on('click',function(){
    var dlgrec_id = getUrlVars()["dlgrec_id"];
//    console.log(id);
    location.href = 'preview_word.php?dlgrec_id='+dlgrec_id+'';
});

$("#preview_word2").on('click',function(){
    var dlgrec_id = getUrlVars()["dlgrec_id"];
//    console.log(id);
    location.href = 'preview_word2.php?dlgrec_id='+dlgrec_id+'';
})
//endregion


