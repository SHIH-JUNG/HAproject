//顯示預設權限表格 region
$.ajax({
    url: "database/find_user_info_default_auth.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求   
    success: function (data) {
        var cssString = "";
        $.each(data,function(index,value){
            cssString += 
                    '<tr data-toggle="modal" data-target="#jump-authority">' +
                    '<td style="LINE-HEIGHT:1px">' + '<input name="tr_update" auth_num="'+value.Authority_num+'" auth_job="'+value.Job+'" id="tr_update'+value.Id+'" style="zoom: 1.5" value="'+value.Id+'" type="radio">' + '</td>' +
                    '<td style="LINE-HEIGHT:1px">' + value.Authority_num + '</td>' +
                    '<td style="LINE-HEIGHT:1px">' + value.Job + '</td>' +
                    '<td style="LINE-HEIGHT:1px">' + value.Create_date + '</td>' +
                    '<td style="LINE-HEIGHT:1px">' + value.Create_name + '</td>' +
                    '<td style="LINE-HEIGHT:1px">' + value.Update_date + '</td>' +
                    '<td style="LINE-HEIGHT:1px">' + value.Update_name + '</td>' +
                    '</tr>';
        });
        $("#user_info").html(cssString);
    },
    error: function (e) {
        notyf.alert('伺服器錯誤,無法載入' + e);
    }
});
//endregion


//預設權限選項改變，於 權限設定內容 勾選權限設定 region
$("input[type='radio'][name='tr_update']").on("change", function () {
    var selected_value = $("input[name='tr_update']:checked").val();
    var auth_num = $(this).attr("auth_num");
    var auth_job = $(this).attr("auth_job");
    
    $.ajax({
        url: "database/find_user_info_default_auth.php",
        type: "POST",
        data: {
            Id: selected_value
        },
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log(data);
            
            $("[name='auth_href_name']").prop('checked', false);

            if (data[0].Authority_pages != null) 
            {
                var authority_pages_arr = data[0].Authority_pages.replace("\[","").replace("\]","").split(",");

                $.each(authority_pages_arr, function (index, value) {
                    $("[name='auth_href_name'][value='"+value.replace("\"", "").replace("\"", "")+"']").prop('checked',true);
                });

                $("#table_user_info").html("權限等級：" + auth_num + "，職位：" + auth_job);

                $("#auth_update_btn").attr("sql_id", selected_value);
            }
        },
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入' + e);
        }
    });
});
//endregion

//修改按鈕，修改該權限設定 region
auth_update = function (this_btn) {

    //判斷有無選擇預設權限
    if ($(this_btn).attr("sql_id")) 
    {
        //提示確認要修改權限
        swal({
            title: "確認修改權限？",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "確認送出",
            cancelButtonText: "取消",
            showConfirmButton: true,
            showCancelButton: true,
        })
        .then(
            function (result) {
            // 按確認
            if (result) {
                var sql_id = $(this_btn).attr("sql_id");    
                var authority_pages_arr = [];
            
                $("input[name='auth_href_name']:checked").each(function () {
                    authority_pages_arr.push($(this).val());
                });
                // console.log(authority_pages_arr)
    
                $.ajax({                                                                                    
                    url: "database/update_user_info_default_auth.php",
                    data:{
                        Id:sql_id,
                        auth_href_name_arr:JSON.parse(JSON.stringify(authority_pages_arr)),
                    },
                    type: "POST",
                    dataType: "JSON",
                    success: function (data) {
                        if(data == 1){
                            swal({
                                title:'修改成功！',
                                type:'success',                        
                            })
                            // .then(function(){
                            //     location.reload();
                            // }) 
                        }else{
                            swal({
                                title:'修改失敗！請聯絡負責單位',
                                type:'error',
                            })
                        }  
                    },
                    error:function(e){
                        // console.log(e);
                        swal({
                            title:'修改失敗！請聯絡負責單位',
                            type:'error',
                        })
                    }
                });
            }
            },
            function (dismiss) {
            // 按取消
            if (dismiss == "cancel") {
                swal({
                title: "已取消動作",
                type: "success",
                });
            }
            }
        )
        .catch(swal.noop); 
    } else {
        // 未選擇任何預設權限
        swal({
            title:"未選擇任何預設權限",
            type:'error'
        })
    }
    
}
//endregion