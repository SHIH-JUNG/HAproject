const notyf = new Notyf();

// 網頁載入
$(document).ready(function () {
    load_auth_num();
    load_auth_job();
});


//新增預設權限 region
add_user_info_default_auth = function () {
    var stau = false;
    
    //檢查欄位
    if (check_submit_data() != "") {
        stau = false;
    } else {
        stau = true;
    }

    if (!stau) {
        swal({
            title: check_submit_data(),
            type: "error",
        });
    } else {
        submit_form();
    }
}
//endregion

//送出表單至後端 region
function submit_form() {
    var auth_href_name_arr = [];

    //抓取每個選項，加入陣列
    $("[name='auth_href_name']").each(function(i,n){
        if($(this).is(":checked"))
        {
            var this_val = $(this).val();
            auth_href_name_arr.push(this_val);
        }
    });
    // console.log(auth_href_name_arr);

    $.ajax({
        url: "database/add_new_user_info_default_auth.php",
        type: "POST",
        data:{
            Authority_num:$("#authority_num").val(),
            Job:$("#job").val(),
            auth_href_name_arr:JSON.parse(JSON.stringify(auth_href_name_arr)),
            
        },
//            dataType: "JSON",
        success: function (data) {
            // console.log(data);
            if(data == 1){
                swal({
                    type: 'success',
                    title: '新增成功!',
                    allowOutsideClick: false //不可點背景關閉
                    }).then(function () {
                        window.location.replace("Authority_default_rule_set.php"); 
                    })
            }
            else{
            swal({
                type: 'error',
                title: '新增失敗!請聯絡負責人',
                allowOutsideClick: false //不可點背景關閉
                })
        }  
        },
            error: function () {
                swal({
                    type: 'error',
                    title: '新增失敗!請聯絡負責人',
                    allowOutsideClick: false //不可點背景關閉
                })
            }
    });
}
//endregion

//檢查欄位 region
function check_submit_data() 
{
    var authority_num = $("#authority_num").val();
    var job = $("#job").val();
    // var auth_href_name = $("input[name='auth_href_name']:checked").length
    
    var errorstr = "";

    if (authority_num == null) {
        errorstr += "未選擇權限等級!\r\n";
    }
    if (job == null) {
        errorstr += "未選擇職位!\r\n";
    }
    // if (auth_href_name <= 0) {
    //     errorstr += "未勾選要開放的權限!\r\n";
    // }

    if (errorstr == "") {
        if (authority_num.replace(/\s*/g, "") == '') {
            errorstr += "未選擇權限等級!\r\n";
        }
        if (job.replace(/\s*/g, "") == '') {
            errorstr += "未選擇職位!\r\n";
        }
    }
    return errorstr;
}
//endregion

//載入權限等級至前端 #authority_num 選項 region
function load_auth_num() {
    var auth_num_min = 1;
    var auth_num_max = 9;

    for (var i = auth_num_min; i <= auth_num_max; i++) {
        $("#authority_num").append('<option value="' + i + '">' + i + '</option>');
    }
}
//endregion

//載入職位至前端 #job 選項 region
function load_auth_job() {
    var auth_job_arr = ['理事長', '執行長', '方案組長', '公關組長', '專案社工', '行政人員', '社工員', '生輔員', '工讀生', '志工'];

    for (var i = 0; i < auth_job_arr.length; i++) {
        $("#job").append('<option value="' + auth_job_arr[i] + '">' + auth_job_arr[i] + '</option>');
    }
}
//endregion