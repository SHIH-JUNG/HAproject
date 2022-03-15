<!DOCTYPE html>
<html>
<head>
    <!-- CSS-->
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/bootstrap4.5.2.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
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
<script src="javascript/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="javascript/popper1.16.1.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="javascript/bootstrap4.5.2.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
<!-- JQUERY -->
<script src="javascript/jquery3.5.1.min.js"></script>
<!-- -->
</head>
  <body class="text-center">
    <!--讀取進度條-->
    <div class="preloader-it">
        <div class="la-anim-1"></div>
    </div>
    <!--/讀取進度條-->
<!--  網頁內容  -->
    <div class="container">
    <img width="350px" height="250px" style="position:relative; top:115px" src="image/HA.png">
    <br>
    <img  style="position:relative; top:115px" src="image/login eng.png">
      <form method="post" class="form-signin" id="form_login" role="form" style="position:relative; top: 60px;">
        <h2>登入</h2>        
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
    <!-- JavaScript -->
    <!-- Bootstrap and jQuery -->
    <script src="javascript/jquery.min.js"></script>
    <!-- 滾動條 JavaScript -->
    <script src="javascript/jquery.slimscroll.js"></script>
    <!-- Fancy Dropdown JS -->
    <script src="javascript/dropdown-bootstrap-extended.js"></script>
    <!-- Init -->
    <script src="javascript/init.js"></script>
    <!-- 登入 -->
    <script src="js/login.js"></script>
    <!-- ================== JS sweetalert2 ================== -->
    <script src="javascript/sweetalert2/sweetalert2.min.js"></script>
    <!-- ================== JS IE sweetalert ================== -->
    <script src="javascript/sweetalert2/core-js.js"></script>
</body>
</html>