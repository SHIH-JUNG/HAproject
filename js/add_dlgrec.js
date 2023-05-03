$(document).ready(function(){

    append_user();
    $("#user").val(assign_name);
});

//新增生輔紀錄region
$("#dlgrec_add_new").on('click',function(){

    var stau = false;

    if (check_add_dlgrec_data() != "") 
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
            title:check_add_dlgrec_data(),
            type:'error'
          })
    }
    else
    { 
        $.ajax({
            url: "database/add_new_dlgrec.php",
            type: "POST",
            data:{
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
//            dataType: "JSON",
            success: function (data) {
                console.log(data);
                if(data == 1){
                    swal({
                        type: 'success',
                        title: '新增成功!',
                        allowOutsideClick: false //不可點背景關閉
                        }).then(function () {
                            window.location.replace("dlgrec.php"); 
                        })
                }else{
                    swal({
                        type: 'error',
                        title: '新增失敗!請聯絡負責人',
                        allowOutsideClick: false //不可點背景關閉
                        })
                }  
            },
                error: function (e) {
                    swal({
                        type: 'error',
                        title: '新增失敗!請聯絡負責人',
                        allowOutsideClick: false //不可點背景關閉
                    })
                    console.log(e);
                }
        });
    }

        
});
//endregion


//檢查生輔紀錄的必填欄位region
function check_add_dlgrec_data()
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
function append_user(){             
    $.ajax({
        type:'POST',
        url:'database/find_check_user.php',
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log('test',data)
            for (var index in data.Id) {
                $("#social_worker").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                $("#supervise").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            }
        },
    });
}
//endregion

