function test(){
    swal({
        title: '是否刪除此評估？',
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
           alert("OK");
        }
     })
}