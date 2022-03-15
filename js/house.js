//新增家園region
$(document).ready(function () {
    $("#authority_insert").submit(function (e) {
        e.preventDefault();
        if ($("#authority_classification").val() != '') {
            swal({
                title: '確認新增家園？',
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
                        type: 'post',
                        url: 'database/add_new_house.php',
                        async: false,
                        data: {                            
                            name: $("#house_name").val(),
                        },
                        success: function (data) {
                            if (data == 1) {
                                swal({
                                    type: 'success',
                                    title: '新增家園成功!',
                                    allowOutsideClick: false //不可點背景關閉
                                }).then(function () {
                                    location.reload();
                                })
                            } else {
                                swal({
                                    type:'error',
                                    title:'新增失敗',
                                })
                            }
                        },
                        error: function (e) {
                            notyf.alert('伺服器錯誤,無法載入' + e);
                        }
                    });
                }
            })
        } else {
            swal({
                type:'error',
                title:'請選擇權限',
            })
        }
    });
});
//endregion   

//家園修改填入、刪除region
/**bootstrap modal 載入資料**/
$(".table-striped").on('click', 'tr', function() {
$("#modify_name").val($(this).find('td').eq(1).text());
var id = $.trim($(this).find("td:eq(0)").text());
//修改家園region
            $("#modify_val").click(function (e) {
                e.preventDefault();
                $.ajax({
                    url: 'database/update_house_info.php',
                    type: 'post',
                    data: {
                        modify_name:$("#modify_name").val(),
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
                                title: '修改失敗!',
                                allowOutsideClick: false //不可點背景關閉
                            })
                        }
                    },
                    error: function (e) {
                            swal({
                                type: 'error',
                                title: '伺服器錯誤!無法載入!!',
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
                    title: '確認刪除此家園？',
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
                            url: 'database/delete_house_info.php',
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
                                        title: '刪除失敗!',
                                        allowOutsideClick: false //不可點背景關閉
                                    })
                                }
                            },
                            error: function (e) {
                                    swal({
                                        type: 'error',
                                        title: '伺服器錯誤，無法載入!',
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

//家園表格region
        $.ajax({
            url: "database/find_house_info.php",
            type: "POST",
            dataType: "JSON",
            async: false,//啟用同步請求
            success: function (data) {
                var cssString = "";
                for (var index in data.id) {
                    cssString += 
                            '<tr data-toggle="modal" data-target="#jump-authority">' +
                            '<td style="LINE-HEIGHT:1px">' + data.id[index] + '</td>' +
                            '<td style="LINE-HEIGHT:1px">' + data.name[index] + '</td>' +
                            '</tr>'
                }
                $("#house_info").html(cssString);
            },
            error: function (e) {
                notyf.alert('伺服器錯誤,無法載入' + e);
            }
        });
//endregion   