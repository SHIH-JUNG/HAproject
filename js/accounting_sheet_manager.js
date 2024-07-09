
$(document).ready(function () {
    load_url();
});

window.origin_sync_link = "";
window.origin_share_link = "";

// 載入google sheet內容，讀取txt檔案內儲存的網址 region
load_url = function ()
{
    $.get("./accounting_sheet/HAproject_accounting_google_sheet_sync_new.txt", function(url) {
        origin_sync_link = url;
        $("#sync_link").val(url);
    });
    $.ajaxSettings.async = true;

    $.get("./accounting_sheet/HAproject_accounting_google_sheet_share_new.txt", function(url) {
        origin_share_link = url;
        $("#share_link").val(url);
    });
    $.ajaxSettings.async = true;
}
//endregion

// 更新google sheet 同步網址 region
update_sync_url = function() {

    swal({
        title: "確認修改？",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "確認",
        cancelButtonText: "取消",
        showConfirmButton: true,
        showCancelButton: true
    }).then(function (result) {
    if (result) {
        if($("#sync_link").val() == "")
        {
            swal({
                title:"同步連結不可為空值!\r\n",
                type:'error'
            })
        }
        else
        {
            var sync_link = $("#sync_link").val();


            $.ajax({
                url: "database/write_accounting_sheet_sync_link.php",
                type: "POST",
                data: {
                    content: sync_link
                },
                success: function(response){
                    // console.log(response);
                    swal({
                        title:"修改成功!",
                        type:'success'
                    }).then(function(){
                        location.reload();
                    })
                },
                error: function(){
                    swal({
                        title:"修改失敗!",
                        type:'error'
                    })
                }
            });
        }
    }
    }, function (dismiss) {
    if (dismiss == 'cancel') {
        swal({
        title: '已取消',
        type: 'success',
        })
    }
    }).catch(swal.noop)


}
//endregion

// 更新google sheet 分享網址 region
update_share_url = function() {

    swal({
            title: "確認修改？",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "確認",
            cancelButtonText: "取消",
            showConfirmButton: true,
            showCancelButton: true
        }).then(function (result) {
        if (result) {
            if($("#share_link").val() == "")
            {
                swal({
                    title:"分享連結不可為空值!\r\n",
                    type:'error'
                })
            }
            else
            {
                var share_link = $("#share_link").val();

                $.ajax({
                    url: "database/write_accounting_sheet_share_link.php",
                    type: "POST",
                    data: {
                        content: share_link
                    },
                    success: function(response){
                        // console.log(response);
                        swal({
                            title:"修改成功!",
                            type:'success'
                        }).then(function(){
                            location.reload();
                        })
                    },
                    error: function(){
                        swal({
                            title:"修改失敗!",
                            type:'error'
                        })
                    }
                });
            }
        }
        }, function (dismiss) {
        if (dismiss == 'cancel') {
            swal({
            title: '已取消',
            type: 'success',
            })
        }
        }).catch(swal.noop)
}
//endregion

// 恢復原本的同步網址 region
recover_sync_url = function() {
    swal({
        title: "確認復原？",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "確認",
        cancelButtonText: "取消",
        showConfirmButton: true,
        showCancelButton: true
    }).then(function (result) {
    if (result) {
        $.get("./accounting_sheet_origin/HAproject_accounting_google_sheet_api_sync_origin.txt", function(url) {
            origin_sync_link = url;
            $("#sync_link").val(url);

            swal({
                title:"已復原",
                type:'success'
            })
        });

        $.ajaxSettings.async = true;
    }
    }, function (dismiss) {
    if (dismiss == 'cancel') {
        swal({
        title: '已取消',
        type: 'success',
        })
    }
    }).catch(swal.noop)
}
//endregion

// 恢復原本的分享網址 region
recover_share_url = function() {

    swal({
        title: "確認復原？",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "確認",
        cancelButtonText: "取消",
        showConfirmButton: true,
        showCancelButton: true
    }).then(function (result) {
    if (result) {
        $.get("./accounting_sheet_origin/HAproject_accounting_google_sheet_api_share_origin.txt", function(url) {
            origin_share_link = url;
            $("#share_link").val(url);

            swal({
                title:"已復原",
                type:'success'
            })
        });
        $.ajaxSettings.async = true;
    }
    }, function (dismiss) {
    if (dismiss == 'cancel') {
        swal({
        title: '已取消',
        type: 'success',
        })
    }
    }).catch(swal.noop)
}
//endregion