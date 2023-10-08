//新增帳號region
$(document).ready(function () {
    $("#authority_insert").submit(function (e) {
        e.preventDefault();
        if ($("#authority_classification").val() != '' && $("#authority_department").val() != '' && $("#authority_job").val() != '') {
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
                            account: $("#authority_acc").val(),
                            password: $("#authority_pass").val(),
                            name: $("#authority_name").val(),
                            authority: $("#authority_classification").val(),
                            department: $("#authority_department").val(),
                            job: $("#authority_job").val(),
                        },
                        success: function (data) {
//                            console.log(data)
                            if (data == 1) {
                                swal({
                                    type: 'success',
                                    title: '新增使用者成功!',
                                    allowOutsideClick: false //不可點背景關閉
                                }).then(function () {
                                    location.reload();
                                })
                            } else {
                                swal({
                                    type:'error',
                                    title:'新增失敗！請聯絡網站維護人員',
                                })
                            }
                        },
                        error: function (e) {
                            notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
                        }
                    });
                }
            })
        } else {
            swal({
                type:'error',
                title:'請填寫完整!',
            })
        }
    });
});
//endregion   

//帳戶修改填入、刪除region
/**bootstrap modal 載入資料**/
$(".table-striped").on('click', 'tr', function() {
$("#modify_name").val($(this).find('td').eq(2).text());
$("#modify_acc").val($.trim($(this).find("td:eq(4)").text()));
$("#modify_pass").val($.trim($(this).find("td:eq(5)").text()));
$('select[name=modify_department]').val($.trim($(this).find("td:eq(1)").text()));//selected 項目  
$('select[name=modify_job]').val($.trim($(this).find("td:eq(3)").text()));//selected 項目  
$('select[name=modify_classification]').val($.trim($(this).find("td:eq(6)").text()));//selected 項目  
$('.bootstrap-select .filter-option').text($("#modify_classification").val());//顯示 selected
var id = $.trim($(this).find("td:eq(0)").text());
//修改用戶region
            $("#modify_val").click(function (e) {
                e.preventDefault();
                $.ajax({
                    url: 'database/update_user_info.php',
                    type: 'post',
                    data: {
                        modify_name:$("#modify_name").val(),
                        modify_acc: $("#modify_acc").val(),
                        modify_pass: $("#modify_pass").val(),
                        modify_classification: $("#modify_classification").val(),
                        department: $("#modify_department").val(),
                        job: $("#modify_job").val(),
                        id: id
                    },
                    async: false,//啟用同步請求
                    success: function (data) {
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
                            swal({
                                type: 'error',
                                title: '伺服器錯誤，無法載入，請聯絡網站維護人員',
                                allowOutsideClick: false //不可點背景關閉
                            })
                    }
                });
            });
            //endregion
            
//刪除用戶region
            $("#delete_acc").click(function (e) {
                e.preventDefault();
                swal({
                    title: '確認刪除此使用者？',
                    text: "刪除無法復原",
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

//帳號表格region
        $.ajax({
            url: "database/find_user_info.php",
            type: "POST",
            dataType: "JSON",
            async: false,//啟用同步請求
            success: function (data) {
                var cssString = "";
                for (var index in data.id) {
                    cssString += 
                            '<tr data-toggle="modal" data-target="#jump-authority">' +
                            '<td style="LINE-HEIGHT:1px">' + data.id[index] + '</td>' +
                            '<td style="LINE-HEIGHT:1px">' + data.department[index] + '</td>' +
                            '<td style="LINE-HEIGHT:1px">' + data.name[index] + '</td>' +
                            '<td style="LINE-HEIGHT:1px">' + data.job[index] + '</td>' +
                            '<td style="LINE-HEIGHT:1px">' + data.account[index] + '</td>' +
                            '<td style="LINE-HEIGHT:1px">*****</td>' +
                            '<td style="LINE-HEIGHT:1px">' + data.authority[index] + '</td>' +
                            '</tr>'
                }
                $("#user_info").html(cssString);
            },
            error: function (e) {
                notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
            }
        });
//endregion   

//查詢部門放入下拉選單region
        $.ajax({
            url: "database/find_house_info.php",
            type: "POST",
            dataType: "JSON",
            async: false,//啟用同步請求
            success: function (data) {
                for (var index in data.id) {
                    $("#modify_department").append('<option value="'+data.name[index]+'">'+data.name[index]+'</option>');
                    $("#authority_department").append('<option value="'+data.name[index]+'">'+data.name[index]+'</option>');
                    
                }

            },
            error: function (e) {
                notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
            }
        });
//endregion
