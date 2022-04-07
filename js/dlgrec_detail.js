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

    var dlgrec_id = getUrlVars()["dlgrec_id"];
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
});

//endregion  


//更新結案個案表基本資料region
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

//結案個案表(update)的必填欄位 region
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

//結案個案總表格鎖定控制region
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


