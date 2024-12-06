//新增帳號region
$(document).ready(function () {
    load_auth_num();
    load_auth_job();
});
//endregion   

//帳戶修改填入、刪除region
/**bootstrap modal 載入資料**/
$(".user_info_table").on('click', 'tr', function() {

    $("#modify_name").val($(this).find('td').eq(1).text());
    $("#modify_acc").val($.trim($(this).find("td:eq(3)").text()));
    $("#modify_pass").val($.trim($(this).find("td:eq(4)").text()));
    $('select[name=modify_job]').val($.trim($(this).find("td:eq(2)").text()));//selected 項目  
    $('select[name=modify_classification]').val($.trim($(this).find("td:eq(6)").text()));//selected 項目  
    $('.bootstrap-select .filter-option').text($("#modify_classification").val());//顯示 selected
    var id = $.trim($(this).find("td:eq(0)").text());
    
    //修改用戶region
    $("#modify_val").click(function (e) {
        swal({
            title: "確定修改該名使用者資料？",
            text: "點擊確認後，將會修改使用者『"+$("#modify_name").val()+"』的資料",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "確認",
            cancelButtonText: "取消",
            showConfirmButton: true,
            showCancelButton: true,
        })
        .then(
            function (result) {
                if (result) 
                {
                    e.preventDefault();
                    $.ajax({
                        url: 'database/update_user_info.php',
                        type: 'post',
                        data: {
                            // modify_name:$("#modify_name").val(),
                            // modify_acc: $("#modify_acc").val(),
                            modify_password: $("#modify_password").val(),
                            modify_auth_num: $("#modify_classification").val(),
                            job: $("#modify_job").val(),
                            id: id
                        },
                        async: false,//啟用同步請求
                        success: function (data) {
                            console.log(data)
                            if (data == 1) {
                                swal({
                                    type: 'success',
                                    title: '修改成功!',
                                    allowOutsideClick: false //不可點背景關閉
                                }).then(function () {
                                    location.reload();
                                })
                            } else {
                                swal({
                                    type: 'error',
                                    title: '修改失敗！請聯絡網站維護人員',
                                    allowOutsideClick: false //不可點背景關閉
                                })
                            }
                        },
                        error: function (e) {
                            console.log(e)
                            swal({
                                type: 'error',
                                title: '伺服器錯誤，無法載入，請聯絡網站維護人員',
                                allowOutsideClick: false //不可點背景關閉
                            })
                        }
                    });
                }
            },
            function (dismiss) {
                if (dismiss == "cancel") 
                {
                    swal({
                        title: "已取消",
                        type: "success",
                    });
                }
            }
        )
        .catch(swal.noop);
    });
    //endregion
                
    //刪除用戶region
    $("#delete_acc").click(function (e) {
        e.preventDefault();
        swal({
            title: '確認刪除此使用者資料？',
            text: "點擊確認後，將會刪除使用者『"+$("#modify_name").val()+"』的資料，並且無法復原",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            allowOutsideClick: false,//不可點背景關閉
            confirmButtonText: '確認！',
            cancelButtonText: '取消'
        }).then(function (isConfirm) {
            if (isConfirm) {
                $.ajax({
                    type: 'post',
                    url: 'database/delete_user_info.php',
                    async: false,
                    data: {
                        id: id
                    },
                    success: function (data) {
                        if (data == 1) {
                            swal({
                                type: 'success',
                                title: '刪除成功!',
                                allowOutsideClick: false //不可點背景關閉
                            }).then(function () {
                                location.reload();
                            })
                        } else {
                            swal({
                                type: 'error',
                                title: '刪除失敗！請聯絡網站維護人員',
                                allowOutsideClick: false //不可點背景關閉
                            })
                        }
                    },
                    error: function (e) {
                            swal({
                                type: 'error',
                                title: '伺服器錯誤，無法載入，請聯絡網站維護人員',
                                allowOutsideClick: false //不可點背景關閉
                            })
                    }
                });
            }
        })
    });
    //endregion
});
//endregion

//全部使用者權限帳號載入 region
$.ajax({
    url: "database/find_user_info.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        var cssString = "";
        $.each(data,function(index,value){
            cssString += 
                    '<tr data-toggle="modal" data-target="#jump-authority">' +
                    '<td style="LINE-HEIGHT:1px">' + value.Id + '</td>' +
                    '<td style="LINE-HEIGHT:1px">' + value.Name + '</td>' +
                    '<td style="LINE-HEIGHT:1px">' + value.Job + '</td>' +
                    '<td style="LINE-HEIGHT:1px">' + value.Account + '</td>' +
                    '<td style="LINE-HEIGHT:1px">*****</td>' +
                    '<td style="LINE-HEIGHT:1px">' + value.Email + '</td>' +
                    '<td style="LINE-HEIGHT:1px">' + value.Authority + '</td>' +
                    '<td style="LINE-HEIGHT:1px">' + '<a href="Authority_user_info_detail.php?id='+value.Id+'" style="text-decoration: underline;color:black;">查看</a>' + '</td>' +
                    '</tr>'
        });
        $("#user_info").html(cssString);
    },
    error: function (e) {
        notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
    }
});
//endregion   

//載入權限等級至前端選項 region
function load_auth_num() {
    var auth_num_min = 1;
    var auth_num_max = 9;

    for (var i = auth_num_min; i <= auth_num_max; i++) {
        $("#modify_classification").append('<option value="' + i + '">' + i + '</option>');
    }
}
//endregion

//載入職位至前端選項 region
function load_auth_job() {
    var auth_job_arr = ['理事長', '執行長', '方案組長', '公關組長', '專案社工', '行政人員', '社工員', '生輔員', '工讀生', '志工'];

    for (var i = 0; i < auth_job_arr.length; i++) {
        $("#modify_job").append('<option value="' + auth_job_arr[i] + '">' + auth_job_arr[i] + '</option>');
    }
}
//endregion
