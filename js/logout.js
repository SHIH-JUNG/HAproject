$(document).ready(function () {
    $("#Sign_out").click(function (e) {
        e.preventDefault();
        swal({
            title: '是否登出帳戶？',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            allowOutsideClick: false,//不可點背景關閉
            confirmButtonText: '是',
            cancelButtonText: '否'
        }).then(function (isConfirm) {
            if (isConfirm) {
                swal({
                    type: 'success',
                    title: '登出成功!',
                    allowOutsideClick: false //不可點背景關閉
                }).then(function () {
                    location.href = 'logout.php';
                })
            }
        })
    });
});