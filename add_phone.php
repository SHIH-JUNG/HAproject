<?php session_start(); ?>
<?php include("database/check_authority.php"); ?>
<!DOCTYPE html>
<html>

<head>
    <!--網頁icon-->
    <link rel="icon" href="image/HA.png" type="image/x-icon">
    <!-- CSS-->
    <link href="css/style.css" rel="stylesheet" />
    <!--  notify  -->
    <link href="css/notify/notyf.min.css" rel="stylesheet" />
    <!--  sweetalert2  -->
    <link href="css/sweetalert2/sweetalert2.min.css" rel="stylesheet" />
    <!-- ================== CSS bootstrap-select ================== -->
    <link href="css/bootstrap-select/bootstrap-select.min.css" rel="stylesheet" />
    <!--  table  -->
    <link rel="stylesheet" href="css/bootstrap-table.min.css">

    <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="description" content="快樂聯盟資管系統">
    <meta name="author" content="HANG">
    <meta HTTP-EQUIV="pragma" CONTENT="no-cache">
    <meta HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate">
    <meta HTTP-EQUIV="expires" CONTENT="0">
    <title>個案管理系統</title>
</head>
<!--<SVG>引入bootstrap icon-->
<style>
    table {
        margin-left: auto;
        margin-right: auto;
    }
/*隱藏input number上下箭頭*/
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
/*隱藏input number上下箭頭/*/
</style>

<body>
    <!--讀取進度條-->
    <div class="preloader-it">
        <div class="la-anim-1"></div>
    </div>
    <!--/讀取進度條-->
    <div class="wrapper">
        <!-- 最上方導覽列 -->
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <a id="toggle_nav_btn" class="toggle-left-nav-btn inline-block mr-20 pull-left" href="javascript:void(0);">
                <i><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg></i>
            </a>
            <a href="index.php"><img class="brand-img pull-left" src="image/HA.png" /></a>
            <a href="index.php"><img class="brand-img pull-left" style="width:330px;height:70px" src="image/logo字.png" /></a>   
            <ul class="nav navbar-right top-nav pull-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle pr-0" data-toggle="dropdown">歡迎 <?php echo $_SESSION['name']." ".$_SESSION['job']; ?><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg></a>
                    <ul class="dropdown-menu user-auth-dropdown" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                        <li>
                            <a href="#" id="Sign_out"><i><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-power" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.578 4.437a5 5 0 1 0 4.922.044l.5-.866a6 6 0 1 1-5.908-.053l.486.875z" />
                                        <path fill-rule="evenodd" d="M7.5 8V1h1v7h-1z" />
                                    </svg></i> 登出</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <!--/最上方導覽列-->
        <!--左側導覽列-->
        <?php include("menu.php"); ?>
        <!--/左側導覽列-->
        <!--網頁內容-->
        <div class="page-wrapper">
            <div class="container-fluid ">
                <!--Title-->
                <div class="row heading-bg  bg-green">
                    <!--麵包屑-->
                    <ol class="breadcrumb">
                        <li><span><a href="index.php">個案管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="phone.php">諮詢個案</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>新增個案諮詢紀錄</span></li>
                    </ol>
                    <!--/麵包屑-->
                </div>
                <!-- /Title -->
                <!-- Footer -->
                <footer class="footer container-fluid pl-30 pr-30">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <p>Copyright &copy; 2020國立屏東科技大學資訊管理系</p>
                            <span style="display:none" id="counter"></span>
                        </div>
                    </div>
                </footer>
                <!-- /Footer -->
                <!-- /Title -->
                <div style="zoom:80%" class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default card-view">
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-sm-12 col-xs-12">
                                            <div class="col-sm-12 text-center">
                                                <div class="table-wrap">
                                                    <div class="table-responsive">
                                                        <table style="width:auto;" class="table table-bordered">
                                                            <tr>
                                                                <td colspan="2">
                                                                    <h3>新增個案諮詢紀錄</h3>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>諮詢日期</td>
                                                                <td style="border-bottom: solid 1px;"><input id="call_datetime" type="datetime-local">
                                                            </tr> 
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>諮詢方式</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <select id="way">
                                                                        <option value="電訪">電訪</option>
                                                                        <option value="面訪">面訪</option>
                                                                    </select>                                                                
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">面訪地點</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <select id="way_detail">
                                                                        <option value="">請選擇面訪地點</option>
                                                                        <option value="社區">社區</option>
                                                                        <option value="家訪">家訪</option>
                                                                        <option value="監所">監所</option>
                                                                    </select>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>個案姓名</td>
                                                                <td style="border-bottom: solid 1px;"><input id="name" type="text" oninput="value=value.replace(/[\d]/g,'')"></td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>性別</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <select id="gender" style="width:200px;">
                                                                        <option value="男">男</option>
                                                                        <option value="女">女</option>
                                                                        <option value="同性">同性</option>
                                                                        <option value="不明">不明</option>
                                                                    </select>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>服務對象類別</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <select id="object_type" style="width:200px;">
                                                                        <option value="一般藥癮者">一般藥癮者</option>
                                                                        <option value="愛滋感染者">愛滋感染者</option>
                                                                        <option value="家庭">家庭</option>
                                                                        <option value="兒少">兒少</option>
                                                                    </select>
                                                                </td>
                                                            </tr>
                                                            <!-- <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>曾經使用物質</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    一級毒品：
                                                                    <input name="addition[]" style="zoom: 1.5" type="checkbox" value="海洛因"><label>海洛因</label>
                                                                    <input name="addition[]" style="zoom: 1.5" type="checkbox" value="鴉片"><label>鴉片</label>
                                                                    <input name="addition[]" style="zoom: 1.5" type="checkbox" value="嗎啡"><label>嗎啡</label>
                                                                    <input name="addition[]" style="zoom: 1.5" type="checkbox" value="古柯鹼"><label>古柯鹼</label>
                                                                    <br>
                                                                    二級毒品：
                                                                    <input name="addition[]" style="zoom: 1.5" type="checkbox" value="安非他命"><label>安非他命</label>
                                                                    <input name="addition[]" style="zoom: 1.5" type="checkbox" value="大麻"><label>大麻</label>
                                                                    <input name="addition[]" style="zoom: 1.5" type="checkbox" value="搖頭丸"><label>搖頭丸</label>
                                                                    <br>
                                                                    三級毒品：
                                                                    <input name="addition[]" style="zoom: 1.5" type="checkbox" value="K他命"><label>K他命</label>
                                                                    <input name="addition[]" style="zoom: 1.5" type="checkbox" value="FM2藥丸"><label>FM2藥丸</label>
                                                                    <br>
                                                                    <input name="addition[]" style="zoom: 1.5" type="checkbox" value="酒精">酒精
                                                                    <input name="addition[]" style="zoom: 1.5" type="checkbox" value="強力膠">強力膠
                                                                    <input name="addition[]" style="zoom: 1.5" type="checkbox" value="檳榔">檳榔
                                                                    <input name="addition[]" style="zoom: 1.5" type="checkbox" value="菸">菸
                                                                    <input name="addition[]" style="zoom: 1.5" type="checkbox" value="精神藥物">精神藥物
                                                                    <br>
                                                                    <input name="addition[]" style="zoom: 1.5" type="checkbox" value="其他">其他：<input id="other" type="text" value="">
                                                                </td>
                                                            </tr> -->
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>目前使用物質</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    一級毒品：
                                                                    <label id="addition0"><input name="main[]" style="zoom: 1.5" type="checkbox" value="海洛因">海洛因</label>
                                                                    <label id="addition1"><input name="main[]" style="zoom: 1.5" type="checkbox" value="鴉片">鴉片</label>
                                                                    <label id="addition2"><input name="main[]" style="zoom: 1.5" type="checkbox" value="嗎啡">嗎啡</label>
                                                                    <label id="addition3"><input name="main[]" style="zoom: 1.5" type="checkbox" value="古柯鹼">古柯鹼</label>
                                                                    <br>
                                                                    二級毒品：
                                                                    <label id="addition4"><input name="main[]" style="zoom: 1.5" type="checkbox" value="安非他命">安非他命</label>
                                                                    <label id="addition5"><input name="main[]" style="zoom: 1.5" type="checkbox" value="大麻">大麻</label>
                                                                    <label id="addition6"><input name="main[]" style="zoom: 1.5" type="checkbox" value="搖頭丸">搖頭丸</label>
                                                                    <br>
                                                                    三級毒品：
                                                                    <label id="addition7"><input name="main[]" style="zoom: 1.5" type="checkbox" value="K他命">K他命</label>
                                                                    <label id="addition8"><input name="main[]" style="zoom: 1.5" type="checkbox" value="FM2藥丸">FM2藥丸</label>
                                                                    <br>
                                                                    <label id="addition9"><input name="main[]" style="zoom: 1.5" type="checkbox" value="酒精">酒精</label>
                                                                    <label id="addition10"><input name="main[]" style="zoom: 1.5" type="checkbox" value="強力膠">強力膠</label>
                                                                    <label id="addition11"><input name="main[]" style="zoom: 1.5" type="checkbox" value="檳榔">檳榔</label>
                                                                    <label id="addition12"><input name="main[]" style="zoom: 1.5" type="checkbox" value="菸">菸</label >
                                                                    <label id="addition13"><input name="main[]" style="zoom: 1.5" type="checkbox" value="精神藥物">精神藥物</label>
                                                                    <label id="addition14"><input name="main[]" style="zoom: 1.5" type="checkbox"  value="其他">其他：
                                                                    <input id="other_main" type="text" value=""></label>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>年齡</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <input id="age" type="text" maxlength="2" oninput = "value=value.replace(/[^\d]/g,'')">
                                                                    <br>
                                                                    <label>分類：</label>
                                                                    <input name="a_type[]" style="zoom: 1.5" type="radio" value="10歲以下"><label>10歲以下</label>
                                                                    <input name="a_type[]" style="zoom: 1.5" type="radio" value="10-19歲"><label>10-19歲</label>
                                                                    <input name="a_type[]" style="zoom: 1.5" type="radio" value="20-29歲"><label>20-29歲</label>
                                                                    <input name="a_type[]" style="zoom: 1.5" type="radio" value="30-39歲"><label>30-39歲</label>
                                                                    <input name="a_type[]" style="zoom: 1.5" type="radio" value="40-49歲"><label>40-49歲</label>
                                                                    <input name="a_type[]" style="zoom: 1.5" type="radio" value="50-59歲"><label>50-59歲</label>
                                                                    <input name="a_type[]" style="zoom: 1.5" type="radio" value="60歲以上"><label>60歲以上</label>
                                                                    <input name="a_type[]" style="zoom: 1.5" type="radio" value="不明"><label>不明</label>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>居住地</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <input id="address" type="text">
                                                                    <br>
                                                                    <label>分類：</label>
                                                                    <input name="l_type[]" style="zoom: 1.5" type="radio" value="北部"><label>北部</label>
                                                                    <input name="l_type[]" style="zoom: 1.5" type="radio" value="中部"><label>中部</label>
                                                                    <input name="l_type[]" style="zoom: 1.5" type="radio" value="南部"><label>南部</label>
                                                                    <input name="l_type[]" style="zoom: 1.5" type="radio" value="東部"><label>東部</label>
                                                                    <input name="l_type[]" style="zoom: 1.5" type="radio" value="離島"><label>離島</label>
                                                                    <input name="l_type[]" style="zoom: 1.5" type="radio" value="國外"><label>國外</label>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">聯絡人姓名</td>
                                                                <td style="border-bottom: solid 1px;"><input id="info_name" type="text" oninput="value=value.replace(/[\d]/g,'')"></td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">聯絡人與案主關係</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <input id="relationship" type="text">
                                                                    <br>
                                                                    <label>分類：</label>
                                                                    <input name="r_type[]" style="zoom: 1.5" type="radio" value="配偶"><label>配偶</label>
                                                                    <input name="r_type[]" style="zoom: 1.5" type="radio" value="父母"><label>父母</label>
                                                                    <input name="r_type[]" style="zoom: 1.5" type="radio" value="手足"><label>手足</label>
                                                                    <input name="r_type[]" style="zoom: 1.5" type="radio" value="子女"><label>子女</label>
                                                                    <input name="r_type[]" style="zoom: 1.5" type="radio" value="親戚"><label>親戚</label>
                                                                    <input name="r_type[]" style="zoom: 1.5" type="radio" value="社工"><label>社工</label>
                                                                    <input name="r_type[]" style="zoom: 1.5" type="radio" value="教會"><label>教會</label>
                                                                    <input name="r_type[]" style="zoom: 1.5" type="radio" value="朋友"><label>朋友</label>
                                                                    <input name="r_type[]" style="zoom: 1.5" type="radio" value="本人"><label>本人</label>
                                                                    <input name="r_type[]" style="zoom: 1.5" type="radio" value="其他"><label>其他</label>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">聯絡人電話</td>
                                                                <td style="border-bottom: solid 1px;"><input name="phone[]" type="number" max="10"><span id="new_phone"></span></td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white">轉介來源</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <input class="phone_question" id="referral" type="text">
                                                                    <br>
                                                                    <label>分類：</label>
                                                                    <input name="ref_type[]" style="zoom: 1.5" type="radio" value="醫院"><label>醫院</label>
                                                                    <input name="ref_type[]" style="zoom: 1.5" type="radio" value="矯正機關"><label>矯正機關</label>
                                                                    <input name="ref_type[]" style="zoom: 1.5" type="radio" value="自行求助"><label>自行求助</label>
                                                                    <input name="ref_type[]" style="zoom: 1.5" type="radio" value="衛政"><label>衛政</label>
                                                                    <input name="ref_type[]" style="zoom: 1.5" type="radio" value="民間社福機構"><label>民間社福機構</label>
                                                                    <input name="ref_type[]" style="zoom: 1.5" type="radio" value="毒防中心"><label>毒防中心</label>
                                                                    <input name="ref_type[]" style="zoom: 1.5" type="radio" value="警政"><label>警政</label>
                                                                    <br>
                                                                    <input name="ref_type[]" style="zoom: 1.5" type="radio" value="教會"><label>教會</label>
                                                                    <input name="ref_type[]" style="zoom: 1.5" type="radio" value="社政"><label>社政</label>
                                                                    <input name="ref_type[]" style="zoom: 1.5" type="radio" value="社區"><label>社區</label>
                                                                    <input name="ref_type[]" style="zoom: 1.5" type="radio" value="其他"><label>其他</label>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">轉介人電話</td>
                                                                <td style="border-bottom: solid 1px;"><input name="refphone[]" type="number" max="10"><span id="refphone"></span></td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">職稱/姓名</td>
                                                                <td style="border-bottom: solid 1px;"><input id="referral_name" type="text" oninput="value=value.replace(/[\d]/g,'')"></td>
                                                            </tr>
                                                            <!-- <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">得知快樂聯盟管道</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <input class="phone_question" id="k_place" type="text">
                                                                    <br>
                                                                    <label>分類：</label>
                                                                    <input class="phone_question" name="k_type[]" style="zoom: 1.5" type="radio" value="網路"><label>網路</label>
                                                                    <input class="phone_question" name="k_type[]" style="zoom: 1.5" type="radio" value="醫院"><label>醫院</label>
                                                                    <input class="phone_question" name="k_type[]" style="zoom: 1.5" type="radio" value="監所"><label>監所</label>
                                                                    <input class="phone_question" name="k_type[]" style="zoom: 1.5" type="radio" value="舊個案"><label>舊個案</label>
                                                                    <input class="phone_question" name="k_type[]" style="zoom: 1.5" type="radio" value="社福機構"><label>社福機構</label>
                                                                    <input class="phone_question" name="k_type[]" style="zoom: 1.5" type="radio" value="戒毒機構"><label>戒毒機構</label>
                                                                    <input class="phone_question" name="k_type[]" style="zoom: 1.5" type="radio" value="親友"><label>親友</label>
                                                                    <input class="phone_question" name="k_type[]" style="zoom: 1.5" type="radio" value="教會"><label>教會</label>
                                                                    <input class="phone_question" name="k_type[]" style="zoom: 1.5" type="radio" value="其他"><label>其他</label>
                                                                    <input class="phone_question" name="k_type[]" style="zoom: 1.5" type="radio" value="不明"><label>不明</label>
                                                                </td>
                                                            </tr> -->
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">是否符合開案</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <input name="e_type[]" style="zoom: 1.5" type="radio" value="無"><label>是</label>
                                                                    <input name="e_type[]" style="zoom: 1.5" type="radio" value="有"><label>否</label>
                                                                    <input name="e_type[]" style="zoom: 1.5" type="radio" value="不明"><label>不明</label>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>接案同工</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <!-- <select class="department" id="department">
                                                                        <option value="" disabled selected hidden>請選擇部門</option>
                                                                    </select> -->
                                                                    <select class="user" id="user">
                                                                        <option value="" disabled selected hidden>請選擇同工</option>
                                                                    </select>
<!--                                                                <input id="user" type="text">-->
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">諮詢內容</td>
                                                                <td>
                                                                    <textarea style="height:150px;width:700px;resize: none;font-size: 20px;" name="note" id="note" placeholder="請輸入諮詢內容"></textarea>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                                <br>
                                                <button id="phone_add_new" style="font-size:15px" type="button" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                                                        <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                    </svg>新增</button>
                                                <a href="phone.php"><button style="font-size:15px" type="button" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-excel" viewBox="0 0 16 16">
                                                            <path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z" />
                                                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                        </svg>取消</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--/網頁內容-->
        </div>
    </div>
    <!-- /#wrapper -->
    <!-- JavaScript -->
    <!-- Bootstrap and jQuery -->
    <script src="javascript/jquery.min.js"></script>
    <script src="javascript/bootstrap.min.js"></script>
    <!-- 表格 JavaScript -->
    <script src="javascript/jquery.dataTables.min.js"></script>
    <script src="javascript/dataTables-data.js"></script>
    <!-- 滾動條 JavaScript -->
    <script src="javascript/jquery.slimscroll.js"></script>
    <!-- Fancy Dropdown JS -->
    <script src="javascript/dropdown-bootstrap-extended.js"></script>
    <!-- Init -->
    <script src="javascript/init.js"></script>
    <!-- ================== JS notify控制 ================== -->
    <script src="javascript/notify/notyf.min.js"></script>
    <!-- ================== JS sweetalert2 ================== -->
    <script src="javascript/sweetalert2/sweetalert2.min.js"></script>
    <!-- ================== JS IE sweetalert ================== -->
    <script src="javascript/sweetalert2/core-js.js"></script>
    <!-- ================== 登出設定 ================== -->
    <script src='js/logout.js'></script>
    <!-- ================== moment ================== -->
    <script src='javascript/moment2.29.0.min.js'></script>
    <!-- ================== table ================== -->
    <script src="javascript/bootstrap1.18.0-table.min.js"></script>
    <script src="javascript/bootstrap-table1.11.1-zh-TW.min.js"></script>
    <!-- ================== add_phone.js ================== -->
    <script src="js/add_phone.js"></script>
</body>

</html>