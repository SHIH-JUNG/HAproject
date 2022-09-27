<?php session_start(); ?>
<?php include("database/check_authority.php"); ?><?php include("no_cache.php"); ?>
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
            <a href="index.php"><img class="brand-img pull-left" src="image/logo字.png" /></a>
            <ul class="nav navbar-right top-nav pull-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle pr-0" data-toggle="dropdown">歡迎 <?php echo $_SESSION['name'] . " " . $_SESSION['job']; ?><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                        <li><span><a href="index.php">行政管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="accounting_record_report_yearlist.php">會計管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="accounting_record_report.php">報表管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>新增會計報表資料</span></li>
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
                                            <div class="text-center">
                                                <h4 id="form_type">新增會議記錄</h4>
                                            </div>
                                            <br>
                                            <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item active" role="presentation">
                                                    <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                                        <b>月報表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#two" role="tab" aria-selected="false">
                                                        <b>季報表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#three" role="tab" aria-selected="false">
                                                        <b>上半年報表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#four" role="tab" aria-selected="false">
                                                        <b>下半年報表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#five" role="tab" aria-selected="false">
                                                        <b>年報表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#six" role="tab" aria-selected="false">
                                                        <b>現金報表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#seven" role="tab" aria-selected="false">
                                                        <b>記帳士報表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#eight" role="tab" aria-selected="false">
                                                        <b>上傳及更新紀錄</b>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form id="form_a" class="form" action="">
                                                                <table style="width:55%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>上傳月報表</h3>
                                                                        </td>
                                                                    </tr>

                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">收支損益表上傳</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="income_mon" type="file" class="form-control" />
                                                                                    <br>
                                                                                    <div id="income_mon"></div>
                                                                                    <img src="" id="income_mon_img" style="display:none;" />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">資產負債表上傳</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="property_mon" type="file" class="form-control" />
                                                                                    <br>
                                                                                    <div id="property_mon"></div>
                                                                                    <img src="" id="property_mon_img" style="display:none;" />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">備註</td>
                                                                        <td>
                                                                            <textarea style="height:10em;width:700px;resize: none;font-size: 20px;" id="upload_mon_remark" name="upload_rec_remark" placeholder="請輸入備註"></textarea>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_b" class="form" action="">
                                                                <table style="width:55%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>上傳季報表</h3>
                                                                        </td>
                                                                    </tr>

                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">收支損益表上傳</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="income_sea" type="file" class="form-control" />
                                                                                    <br>
                                                                                    <div id="income_sea"></div>
                                                                                    <img src="" id="income_sea_img" style="display:none;" />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">資產負債表上傳</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="property_sea" type="file" class="form-control" />
                                                                                    <br>
                                                                                    <div id="property_sea"></div>
                                                                                    <img src="" id="property_sea_img" style="display:none;" />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">備註</td>
                                                                        <td>
                                                                            <textarea style="height:10em;width:700px;resize: none;font-size: 20px;" id="upload_sea_remark" name="upload_rec_remark" placeholder="請輸入備註"></textarea>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="three" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_c" class="form" action="">
                                                                <table style="width:55%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>上傳上半年報表</h3>
                                                                        </td>
                                                                    </tr>

                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">收支損益表上傳</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="income_fir_half" type="file" class="form-control" />
                                                                                    <br>
                                                                                    <div id="income_fir_half"></div>
                                                                                    <img src="" id="income_fir_half_img" style="display:none;" />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">資產負債表上傳</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="property_fir_half" type="file" class="form-control" />
                                                                                    <br>
                                                                                    <div id="property_fir_half"></div>
                                                                                    <img src="" id="property_fir_half_img" style="display:none;" />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">備註</td>
                                                                        <td>
                                                                            <textarea style="height:10em;width:700px;resize: none;font-size: 20px;" id="upload_fir_half_remark" name="upload_rec_remark" placeholder="請輸入備註"></textarea>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="four" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_d" class="form" action="">
                                                                <table style="width:55%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>上傳下半年報表</h3>
                                                                        </td>
                                                                    </tr>

                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">收支損益表上傳</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="income_sec_half" type="file" class="form-control" />
                                                                                    <br>
                                                                                    <div id="income_sec_half"></div>
                                                                                    <img src="" id="income_sec_half_img" style="display:none;" />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">資產負債表上傳</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="property_sec_half" type="file" class="form-control" />
                                                                                    <br>
                                                                                    <div id="property_sec_half"></div>
                                                                                    <img src="" id="property_sec_half_img" style="display:none;" />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">備註</td>
                                                                        <td>
                                                                            <textarea style="height:10em;width:700px;resize: none;font-size: 20px;" id="upload_sec_half_remark" name="upload_rec_remark" placeholder="請輸入備註"></textarea>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="five" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_e" class="form" action="">
                                                                <table style="width:55%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>上傳年報表</h3>
                                                                        </td>
                                                                    </tr>

                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">收支損益表上傳</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="income_year" type="file" class="form-control" />
                                                                                    <br>
                                                                                    <div id="income_year"></div>
                                                                                    <img src="" id="income_year_img" style="display:none;" />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">資產負債表上傳</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="property_year" type="file" class="form-control" />
                                                                                    <br>
                                                                                    <div id="property_year"></div>
                                                                                    <img src="" id="property_year_img" style="display:none;" />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">備註</td>
                                                                        <td>
                                                                            <textarea style="height:10em;width:700px;resize: none;font-size: 20px;" id="upload_year_remark" name="upload_rec_remark" placeholder="請輸入備註"></textarea>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="six" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_f" class="form" action="">
                                                                <table style="width:55%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>上傳現金報表</h3>
                                                                        </td>
                                                                    </tr>

                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">收支損益表上傳</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="income_cash" type="file" class="form-control" />
                                                                                    <br>
                                                                                    <div id="income_cash"></div>
                                                                                    <img src="" id="income_cash_img" style="display:none;" />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">資產負債表上傳</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="property_cash" type="file" class="form-control" />
                                                                                    <br>
                                                                                    <div id="property_cash"></div>
                                                                                    <img src="" id="property_cash_img" style="display:none;" />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">備註</td>
                                                                        <td>
                                                                            <textarea style="height:10em;width:700px;resize: none;font-size: 20px;" id="upload_cash_remark" name="upload_rec_remark" placeholder="請輸入備註"></textarea>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="seven" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_g" class="form" action="">
                                                                <table style="width:55%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>記帳士報表</h3>
                                                                        </td>
                                                                    </tr>

                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">記帳士報表(Excel)</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="bookkeeper_exl" type="file" class="form-control" />
                                                                                    <br>
                                                                                    <div id="bookkeeper_exl"></div>
                                                                                    <img src="" id="bookkeeper_exl_img" style="display:none;" />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">記帳士報表(Scan)</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="bookkeeper_scan" type="file" class="form-control" />
                                                                                    <br>
                                                                                    <div id="bookkeeper_scan"></div>
                                                                                    <img src="" id="bookkeeper_scan_img" style="display:none;" />
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">備註</td>
                                                                        <td>
                                                                            <textarea style="height:10em;width:700px;resize: none;font-size: 20px;" id="upload_bookkeeper_remark" name="upload_bookkeeper_remark" placeholder="請輸入備註"></textarea>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="eight" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_h" class="form" action="">
                                                                <table style="width:55%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>上傳及更新紀錄</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">上傳日期</td>
                                                                        <td style="border-bottom: solid 1px;"><input id="create_date" name="create_date" type="text" name="ch_datepicker"></td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">上傳者</td>
                                                                        <td style="border-bottom: solid 1px;"><input id="create_name" name="create_name" type="text"></td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">更新日期</td>
                                                                        <td style="border-bottom: solid 1px;"><input id="update_date" name="update_date" type="text" name="ch_datepicker"></td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">更新者</td>
                                                                        <td style="border-bottom: solid 1px;"><input id="update_name" name="update_name" type="text"></td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                            <br>
                                                            <button id="ar_add_new_upload" style="font-size:15px" type="button" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                                                                    <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                                </svg>新增</button>
                                                            <a href="accounting_record.php"><button style="font-size:15px" type="button" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-excel" viewBox="0 0 16 16">
                                                                        <path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z" />
                                                                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                                    </svg>取消</button></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- <div class="col-sm-12 text-center">
                                                    <br />
                                                    <br />
                                                    <button style="font-size:15px" type="button" class="btn btn-default" onclick="test1()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                                                            <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                        </svg>test1</button>
                                                </div> -->
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
    <script src="js/#.js"></script>
</body>

</html>
<?php include("database/timeout_logout.php"); ?>
