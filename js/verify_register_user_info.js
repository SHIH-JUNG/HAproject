const notyf = new Notyf();

$(document).ready(function () {

});

window.c_allow_status_arr = new Array();

//抓所有審核中使用者資料 region
$.ajax({
    url: "database/find_data_verify_register_user_info.php",
    type: "POST",
    dataType: "JSON",
    data: {
    },
    async: false, //啟用同步請求
    success: function (data) {
        var cssString = "";
        // console.log(data);
        $.each(data, function (index, value) {
            
            var c_allow_status = "";
            c_allow_status = value.Allow_create_acc;

            c_allow_status_arr.push(c_allow_status);
            
            cssString =
            '<tr id="' +
            value.Id +
            '" resume_id="'+value.Resume_id+'">' +
            '<td style="text-align:center">' +
            '<select name="c_allow_status" sort_id="'+index+'" id="c_allow_status'+value.Id+'"><option value="審核中">審核中</option></select>' +
            "</td>" +
            '<td style="text-align:center">' +
            value.Account +
            "</td>" +
            '<td style="text-align:center">' +
            value.Name +
            "</td>" +
            '<td style="text-align:center">' +
            value.Email +
            "</td>" +
            '<td style="text-align:center">' +
            value.Authority +
            "</td>" +
            '<td style="text-align:center">' +
            value.Job +
            "</td>" +
            '<td style="text-align:center">' +
            value.Date +
            "</td>" +
            '<td style="text-align:center">' +
            value.Allow_register_name +
            "</td>" +
            "</tr>";

            $("#user_info").append(cssString);

            $("[id='c_allow_status"+value.Id+"']").append('<option value="已通過">已通過</option>');
            $("[id='c_allow_status"+value.Id+"']").append('<option value="不通過">不通過</option>');
    
            $("[id='c_allow_status"+value.Id+"']").val(c_allow_status);
            
        });
    },
    error: function (e) {
        // console.log(e);
        notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
    },
});
//endregion

// 審核選項(第一個欄位)功能 region
$("[name='c_allow_status']").on("change", function () {
    var sort_id = $(this).attr("sort_id");
    var id = $(this).attr("id");
    var this_val = $("#" + id).prop("value");
    var this_index = parseInt(id.split("c_allow_status")[1]);

    // console.log(c_allow_status_arr)
    // console.log(id)
    // console.log(this_val)
    // console.log(this_index)

    swal({
        title: "將審核狀態改變至" + this_val,
        text: "按下『確認』後將無法復原上次操作，確定要送出？",
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
            if (result) {
                update_allow_status(this_index, this_val);
            }
        },
        function (dismiss) {
            if (dismiss == "cancel") 
            {
                $("#" + id).val(c_allow_status_arr[sort_id]);
                swal({
                    title: "已取消",
                    type: "success",
                });
            }
        }
    )
    .catch(swal.noop);
});
// endregion

// 資料庫 審核狀態修改功能 region
update_allow_status = function(sql_id_str, allow_status_str) {
    $.ajax({
        url: "database/update_data_verify_register_user_info_allow_status.php",
        type: "POST",
        data: {
            User_info_id:sql_id_str,
            Allow_status:allow_status_str,
        },
      // dataType: "JSON", // 若要傳回字串 如：noallow，不可設定為json格式
        success: function (data) {
            // console.log(data);
            if (data == 1) 
            {
                swal({
                    type: "success",
                    title: "更新成功!",
                    allowOutsideClick: false, //不可點背景關閉
                }).then(function () {
                    window.location.href =
                    "verify_register_user_info.php";
                });
            } 
            else if(data.includes("noallow"))
            {
                swal({
                    type: 'error',
                    title: '您無權限修改此使用者資料',
                    allowOutsideClick: false //不可點背景關閉
                });
            }
            else 
            {
                swal({
                    type: "error",
                    title: "更新失敗！請聯絡網站維護人員",
                    allowOutsideClick: false, //不可點背景關閉
                });
            }
        },
        error: function (e) {
            // console.log(e)
            swal({
                type: "error",
                title: "更新失敗！請聯絡網站維護人員",
                allowOutsideClick: false, //不可點背景關閉
            });
        },
    });
}
// endregion