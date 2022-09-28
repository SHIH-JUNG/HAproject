function keyLogin(){
    if (event.keyCode==13) //enter的鍵值為13
    $("#login").click(); //觸動按鈕的點擊
}
$(function () {
 
        initView();
        $("#login").on('click',function(){            
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
        $("#id").focus(function () {
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
    function login(){
        $.ajax({
           type: "POST",
           url: "database/check_login.php",
           data: $("#form_login").serialize(), // serializes the form's elements.
           success: function(data){   
              console.log(data);
               if(data == 1){
                    swal({
                        type: 'success',
                        title: '登入成功!',
                        allowOutsideClick: false //不可點背景關閉
                        }).then(function () {
                            // window.location.replace("index.php"); 
                            window.location.replace("save_login.php"); 
                        })
                    
               }else{
                    swal({
                        type: 'error',
                        title: '登入失敗,請重新登入!',
                        allowOutsideClick: false //不可點背景關閉
                        }).then(function () {
                            $("#id").val("");
                            $("#pw").val("");
                        })
               }       
           },
            error:function(){
                alert("404!");
           }
        
         });
    }