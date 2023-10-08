const notyf = new Notyf();

//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(
        /[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
    }
    );
    return vars;
}
//endregion

var user_id = getUrlVars()["id"];


//顯示權限設定 region
$.ajax({
    url: "database/find_user_info_detail.php",
    type: "POST",
    data: {
        Id: user_id
    },
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        // console.log(data);

        $("[name='auth_href_name']").prop('checked', false);

        $("#table_user_info").html("使用者名稱：" + data[0].Name + "，使用者帳號：" + data[0].Account + "，權限等級：" + data[0].Authority + "，職位：" + data[0].Job);

        window.user_authority = data[0].Authority;
        window.user_job = data[0].Job;

        $("#auth_update_btn").attr("sql_id", user_id);

        if (data[0].Authority_pages != '') 
        {
            var authority_pages_arr = data[0].Authority_pages.replace("\[","").replace("\]","").split(",");

            $.each(authority_pages_arr, function (index, value) {
                $("[name='auth_href_name'][value='"+value.replace("\"", "").replace("\"", "")+"']").prop('checked',true);
            });
        }
        else
        {   
            swal({
                title:'當前使用者未設置任何權限',
                type:'warning',
            })
        }
    },
    error: function (e) {
        notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
    }
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
                    url: "database/update_user_info_detail.php",
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
                                title:'修改失敗！請聯絡網站維護人員',
                                type:'error',
                            })
                        }  
                    },
                    error:function(e){
                        // console.log(e);
                        swal({
                            title:'修改失敗！請聯絡網站維護人員',
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

// 依據權限等級，自動填入預設的權限設定 region
auto_load_default_auth = function() {
    swal({
        title: "確認自動填入權限設定？",
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
            find_default_auth();
            swal({
                title: "已自動填入權限",
                type: "success",
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
}
//endregion

// 依據權限等級和職位 載入當前的權限設定 region
find_default_auth = function () {
    $.ajax({
        url: "database/find_user_info_detail_authority.php",
        type: "POST",
        data: {
            Authority: user_authority,
            Job: user_job,
        },
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log(data);
    
            $("[name='auth_href_name']").prop('checked', false);

            if (data[0].Authority_pages != '') 
            {
                var authority_pages_arr = data[0].Authority_pages.replace("\[","").replace("\]","").split(",");
    
                $.each(authority_pages_arr, function (index, value) {
                    $("[name='auth_href_name'][value='"+value.replace("\"", "").replace("\"", "")+"']").prop('checked',true);
                });
            }
            else
            {   
                swal({
                    title:'此權限等級和職位未設置任何權限',
                    type:'warning',
                })
            }
        },
        error: function (e) {
            notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
        }
    });
}
//endregion