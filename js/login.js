function keyLogin() {
    if (event.keyCode == 13) //enter的鍵值為13
        $("#login").click(); //觸動按鈕的點擊
}
$(function() {

    initView();
    $("#login").on('click', function() {
        if ($("#rememberMe").is(":checked")) {
            setCookie("cookie_account", $("#id").val());
            setCookie("rememberMe", true);
        } else {
            delCookie("cookie_account");
            delCookie("rememberMe");
        }
        login();
    });
});

function initView() {
    if (getCookie("cookie_account")) {
        $("#id").val(getCookie("cookie_account"));
    }
    if (getCookie("rememberMe")) {
        $("#rememberMe").attr("checked", getCookie("rememberMe"));
    }
    $("#id").focus(function() {
        this.select();
    });
}

/**
 * 写入cookie
 * @param name  cookie 名
 * @param value  cookie 值
 */
function setCookie(name, value) {
    var Days = 3; //此 cookie 将被保存 30 天
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
/**
 * 删除cookie
 * @param name
 */
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
/**
 * 读取cookie
 * @param name
 * @returns
 */
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return null;
}

function login() {
    $.ajax({
        type: "POST",
        url: "database/check_login.php",
        data: $("#form_login").serialize(), // serializes the form's elements.
        success: function(data) {
            //   console.log(data);
            if (data == 1) {
                swal({
                    type: 'success',
                    title: '登入成功!',
                    allowOutsideClick: false //不可點背景關閉
                }).then(function() {
                    // window.location.replace("index.php");          
                    check_reset_date();
                    window.location.replace("save_login.php");
                })

            } else if (data.includes("noallowlogin")) {
                swal({
                    type: 'error',
                    title: '您的帳號還在審核中，請通知管理員進行審核通過!',
                    text: '當前登入的帳號還在審核階段，審核通過方可登入',
                    allowOutsideClick: false //不可點背景關閉
                });
            } else {
                swal({
                    type: 'error',
                    title: '登入失敗,請重新登入!',
                    allowOutsideClick: false //不可點背景關閉
                }).then(function() {
                    $("#id").val("");
                    $("#pw").val("");
                })
            }
        },
        error: function() {
            alert("404!");
        }

    });
}

function check_reset_date() {
    $.ajax({
        url: "database/find_leave_rule_table.php",
        type: "POST",
        dataType: "JSON",
        success: function(data) {
            //console.log(data[0].reset_date.replaceAll('/', ''));
            var today = new Date();
            var reset_date = data[0].reset_date.split('/');
            if ((parseInt(reset_date[0]) == today.getFullYear() - 1911) && (parseInt(reset_date[1] + reset_date[2]) <= parseInt('' + (today.getMonth() + 1) + today.getDate()))) {
                insert_resume_seniority(data)
            }
        },
        error: function(e) {
            swal({
                type: "error",
                title: "重製特休系統錯誤！請聯絡網站維護人員",
                allowOutsideClick: false, //不可點背景關閉
            }).then(function() {
                history.back();
            });
        },
    });
}

let DateDifference = function(date1, date2) { // date1 和 date2 是 2016-06-18 格式
    // console.log(date1)
    // console.log(date2)
    let strDate, oDate1, oDate2, result
    strDate = date1.split("-");
    oDate1 = new Date(strDate[1] + '-' + strDate[2] + '-' + strDate[0]);
    strDate = date2.split("-");
    oDate2 = new Date(strDate[1] + '-' + strDate[2] + '-' + strDate[0]);
    result = parseFloat(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24 / 365).toFixed(2); // 把相差的毫秒數轉換為天數
    return result;
};

// 民國年轉換日期格式yyyy-dd-mm region
function split_date(date) {
    return parseInt(date.split("年")[0]) + 1911 + "-" + date.split("年")[1].split("月")[0] + "-" + date.split("年")[1].split("月")[1].split("日")[0];
}

function insert_resume_seniority(leave_rule_table_data) {
    // 取得年資換算特休規則
    var seniority_year = new Date().getFullYear() - 1911 - 1;
    var leave_rule_arr = leave_rule_table_data[0].Rule_table_json.replace("\[", "").replace("\]", "").replaceAll("\"", "").replaceAll(" ", "").split(",");;
    var resume_seniority;

    // 取得所有員工年資
    $.ajax({
        url: "database/find_newYear_resume_seniority.php",
        type: "POST",
        data: {
            Rec_year: seniority_year,
        },
        dataType: "JSON",
        async: false,
        success: function(data) {
            //console.log(data);
            resume_seniority = data;
        },
        error: function(e) {
            //console.log(e);
            swal({
                type: "error",
                title: "重製特休系統錯誤！請聯絡網站維護人員",
                allowOutsideClick: false, //不可點背景關閉
            }).then(function() {
                history.back();
            });
        },
    });

    var form_data = new FormData();
    // 計算特休時數
    $.each(resume_seniority, function(index, value) {
        //console.log(value.Id);
        value.Seniority_num = parseFloat(DateDifference(moment().format('YYYY-MM-DD'), split_date(value.Entry_date)));
        form_data.append("R_id[]", value.Resume_id);
        form_data.append("Seniority_num[]", value.Seniority_num);
        form_data.append("Type[]", value.Type);
        form_data.append("Change_num[]", value.Change_num);
        form_data.append("Day_off_id[]", value.Day_off_id);
        form_data.append("Overtime_id[]", value.Overtime_id);
        form_data.append("Remark[]", value.Remark);
        form_data.append("sys_update_date[]", value.sys_update_date);
        // 預設未滿六個月特休為0天
        if (value.Seniority_num < 0.5) {
            form_data.append('Annual_default[]', 0.0);
        } else if (parseInt(value.Seniority_num) < Object.keys(leave_rule_arr).length) {
            form_data.append('Annual_default[]', parseFloat(leave_rule_arr[parseInt(value.Seniority_num)] * 8).toFixed(1));
        } else if (parseInt(value.Seniority_num) > 0.5) {
            form_data.append('Annual_default[]', parseFloat(leave_rule_arr[0] * 8).toFixed(1));
        } else {
            form_data.append('Annual_default[]', parseFloat(leave_rule_arr[Object.keys(leave_rule_arr).length - 1] * 8).toFixed(1));
        }
    });
    form_data.append('Rec_year', seniority_year);

    //console.log(form_data);
    //預覽傳到後端的資料詳細內容
    // for (var pair of form_data.entries()) {
    //     console.log(pair[0] + ", " + pair[1]);
    // }

    //新增新年度resume_seniority
    $.ajax({
        url: "database/add_resume_seniority.php",
        type: "POST",
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        async: true,
        success: function(data) {
            //console.log(data);
            if (data != 1) {
                swal({
                    type: "error",
                    title: "重製特休更新失敗！請聯絡網站維護人員",
                    allowOutsideClick: false, //不可點背景關閉
                });
            }
        },
        error: function(e) {
            //console.log(e)
            swal({
                type: "error",
                title: "重製特休更新失敗！請聯絡網站維護人員",
                allowOutsideClick: false, //不可點背景關閉
            });

        },
    });
}