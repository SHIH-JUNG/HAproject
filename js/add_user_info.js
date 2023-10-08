//新增帳號region
$(document).ready(function () {
    load_auth_num();
    load_auth_job();
});
//endregion  

// 新增使用者帳號權限資料 region
$("#authority_insert").validator().on("submit", function (e) {
    if (e.isDefaultPrevented()) {
        return false;
    } else {
        add_user_info();
    }
    e.preventDefault();
  }); 
  //endregion


add_user_info = function () 
{
    swal({
        title: '確認新增使用者？',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        allowOutsideClick: false ,//不可點背景關閉
        confirmButtonText: '確認',
        cancelButtonText: '取消'
    }).then(function (isConfirm) {
        if (isConfirm) {
            $.ajax({
                type: 'POST',
                url: 'database/add_new_user.php',
                async: false,
                data: {                            
                    account: $("#account").val(),
                    password: $("#user_password").val(),
                    name: $("#user_name").val(),
                    email:$("#email").val(),
                    authority: $("#authority_classification").val(),
                    job: $("#authority_job").val(),
                },
                success: function (data) {
                    if (data == 1) {
                        swal({
                            type: 'success',
                            title: '新增使用者成功，帳號建立待審核中!',
                            allowOutsideClick: false //不可點背景關閉
                        }).then(function () {
                            window.location.replace("login.php"); 
                        })
                    } else {
                        swal({
                            type:'error',
                            title:'新增失敗',
                        })
                    }
                },
                error: function (e) {
                    notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
                }
            });
        }
    });
}

//載入權限等級至前端選項 region
function load_auth_num() {
    var auth_num_min = 1;
    var auth_num_max = 9;

    for (var i = auth_num_min; i <= auth_num_max; i++) {
        $("#authority_classification").append('<option value="' + i + '">' + i + '</option>');
    }
}
//endregion

//載入職位至前端選項 region
function load_auth_job() {
    var auth_job_arr = ['理事長', '執行長', '方案組長', '公關組長', '專案社工', '行政人員', '社工員', '生輔員', '工讀生', '志工'];

    for (var i = 0; i < auth_job_arr.length; i++) {
        $("#authority_job").append('<option value="' + auth_job_arr[i] + '">' + auth_job_arr[i] + '</option>');
    }
}
//endregion