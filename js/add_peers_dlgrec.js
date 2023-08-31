$(document).ready(function(){

    append_user();
    $("#user").val(assign_name);
});

//新增生輔紀錄region
$("#peers_dlgrec_add_new").on('click',function(){

    var stau = false;

    if (check_add_peers_dlgrec_data() != "") 
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
            title:check_add_peers_dlgrec_data(),
            type:'error'
          })
    }
    else
    { 
        $.ajax({
            url: "database/add_new_peers_dlgrec.php",
            type: "POST",
            data:{
                bf_num:$("#bf_num").val(),
                al_num:$("#al_num").val(),
                em_num:$("#em_num").val(),
                lp_num:$("#lp_num").val(),
                leave_num:$("#leave_num").val(),
                peers_dlgrec_date:$("#peers_dlgrec_date").val(),

                peers_dlgrec_0:$("#peers_dlgrec_0").val(),
                peers_dlgrec_1:$("#peers_dlgrec_1").val(),
                peers_dlgrec_2:$("#peers_dlgrec_2").val(),
                peers_dlgrec_3:$("#peers_dlgrec_3").val(),
                peers_dlgrec_4:$("#peers_dlgrec_4").val(),
                peers_dlgrec_5:$("#peers_dlgrec_5").val(),
                peers_dlgrec_6:$("#peers_dlgrec_6").val(),
                peers_dlgrec_7:$("#peers_dlgrec_7").val(),
                peers_dlgrec_8:$("#peers_dlgrec_8").val(),
                peers_dlgrec_9:$("#peers_dlgrec_9").val(),
                peers_dlgrec_10:$("#peers_dlgrec_10").val(),
                peers_dlgrec_11:$("#peers_dlgrec_11").val(),

                dlg_manager:$("#dlg_manager").val(),
                social_worker:$("#social_worker").val(),
                supervise1:$("#supervise1").val(),
                supervise2:$("#supervise2").val()
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
                            window.location.replace("peers_dlgrec.php"); 
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
function check_add_peers_dlgrec_data()
{
    var peers_dlgrec_date = $("#peers_dlgrec_date").val();
    

    
    var errorstr = "";

    if (peers_dlgrec_date == null) {
        errorstr += "未填寫日期!\r\n";
    }
    if (errorstr == "") {
        if (peers_dlgrec_date.replace(/\s*/g, "") == '') {
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
                $("#supervise1").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                $("#supervise2").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            }
        },
    });
}
//endregion

