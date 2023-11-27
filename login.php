<?php
    @session_destroy();
?>
<!DOCTYPE html>
<html>
<head>
    <!-- CSS-->
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/bootstrap4.5.2.min.css">
    <!--網頁icon-->
    <link rel="icon" href="image/HA.png" type="image/x-icon">
    <!--  sweetalert2  -->
    <link href="css/sweetalert2/sweetalert2.min.css" rel="stylesheet" />
    <!---->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="快樂聯盟資管系統">
    <meta name="author" content="HANG">

    <title>個案管理系統</title>

<!-- Bootstrap -->
<script src="javascript/jquery-3.5.1.slim.min.js"></script>
<script src="javascript/popper1.16.1.min.js"></script>
<script src="javascript/bootstrap4.5.2.min.js"></script>
<!-- JQUERY -->
<script src="javascript/jquery3.5.1.min.js"></script>
<!-- -->
</head>
<body class="text-center">
    <div style="position:relative;min-height: 100vh;">
        <!--讀取進度條-->
        <div class="preloader-it">
            <div class="la-anim-1"></div>
        </div>
        <!--/讀取進度條-->
        <!--  網頁內容  -->
        <div class="container">
            <img id="logo_img" width="350em" height="250em" style="position:relative;" src="image/HA.png">
            <br>
            <img id="logo_font_img" style="position:relative;" src="image/login eng.png">
            <form method="post" class="form-signin" id="form_login" role="form" style="position:relative; ">
                <h2>登入</h2>   
                <div class="text-right" style="margin-left:.5em;margin-top:.8em;color:red;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                    <a href="add_user_info.php" style="color:red;">註冊</a>
                </div>     
                <input type="text" id="id" name="id" class="form-control" placeholder="請輸入您的帳號">
                <input type="password" id="pw"  name="pw" class="form-control" placeholder="請輸入您的密碼" onkeydown="keyLogin();">
                <label>
                    <input  type="checkbox" id="rememberMe" value="remember-me"> 記住帳號
                </label>
                
                <section>
                    <input type="button" class="btnRegister" id="login" value="登入">  
                </section>
            </form>
        </div>
        <!--  /網頁內容  --> 
        <!--頁尾--> 
        <footer class="footer">
            <div class="row">
                <div class="col-sm-12 text-center" style="color:black">
                    <p>Copyright &copy; 2020國立屏東科技大學資訊管理系</p>
                </div>
            </div>
        </footer>
        <!--/頁尾-->
    </div>
    
    <!-- JavaScript -->
    <!-- Bootstrap and jQuery -->
    <script src="javascript/jquery.min.js"></script>
    <!-- 滾動條 JavaScript -->
    <script src="javascript/jquery.slimscroll.js"></script>
    <!-- Fancy Dropdown JS -->
    <script src="javascript/dropdown-bootstrap-extended.js"></script>
    <!-- ================== moment ================== -->
    <script src='javascript/moment2.29.0.min.js'></script>
    <!-- Init -->
    <script src="javascript/init.js"></script>
    <!-- 登入 -->
    <script src="js/login.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>
    <!-- ================== JS sweetalert2 ================== -->
    <script src="javascript/sweetalert2/sweetalert2.min.js"></script>
    <!-- ================== JS IE sweetalert ================== -->
    <script src="javascript/sweetalert2/core-js.js"></script>
</body>
</html>