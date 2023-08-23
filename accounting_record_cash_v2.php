<?php session_start(); ?>
<?php include("database/check_authority.php"); ?><?php include("no_cache.php"); ?>
<?php @$rec_year =  $_GET['year']; ?>
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
    <!-- 記帳 -->
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> -->
    <!-- ================== CSS bootstrap-select ================== -->
    <link href="css/bootstrap-select/bootstrap-select.min.css" rel="stylesheet" />
    <!--  table  -->
    <!--    <link rel="stylesheet" href="css/bootstrap-table.min.css">-->
    <!-- ================== 匯出EXCEL ================== -->
    <link href="css/jquery.dataTables1.10.16.min.css" rel="stylesheet" />
    <link href="css/buttons.dataTables1.5.1.min.css" rel="stylesheet" />

    <!--  日期民國  -->
    <link data-require="jqueryui@*" rel="stylesheet" href="css/jquery-ui.css" />
    <link href="css/dtsel.css" rel="stylesheet" />

    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!--        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />-->
    <meta name="description" content="快樂聯盟資管系統">
    <meta name="author" content="HANG">
    <title>個案管理系統</title>
</head>
<style>
    table {
        margin-left: auto;
        margin-right: auto;
    }

    .scr_container {
        width: 100%;
        overflow: auto;
        margin: 0 auto;
    }

    .NOline {
        word-break: keep-all;
        /*必須*/
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


    .panel-body.scr_container {
        padding: 0; border-bottom: 1px solid white !important;
        padding-top: 15px;
    }

    .arc_table tr td input[type="text"]
    {
        width: 100%;
    }

    .arc_table tr td:nth-child(1)
    {
        width: 3em;
    }

    .arc_table tr td
    {
        padding:0px !important;
        margin-top:0.5em;
        margin-bottom:0.5em;
    }

    .arc_table input[type="text"]
    {
        border: none;
        text-align:center;
    }

    .balance_tab > td
    {
        border-top:1px solid red !important;
    }
    
</style>

<body>
    <!--讀取進度條-->
    <div class="preloader-it">
        <div class="la-anim-1"></div>
    </div>
    <!--/讀取進度條-->
    <div class="wrapper">
        <!-- 最上方導覽列 -->
        <?php include("page_nav.php"); ?>
        <!--/最上方導覽列-->
        <!--左側導覽列-->
        <?php include("menu.php"); ?>
        <!--/左側導覽列-->
        <!--網頁項目-->
        <div class="page-wrapper">
            <div class="container-fluid ">
                <!--Title-->
                <div class="row heading-bg  bg-green">
                    <!--麵包屑-->
                    <ol class="breadcrumb">
                        <li><span><a href="index.php">首頁</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="">行政管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="">會計管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="accounting_record_cash_yearlist_v2.php">零用金</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><?php echo trim($rec_year); ?>年度零用金</span></li>
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
                <!---Table--->
                <div style="zoom:80%" class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default card-view">
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-sm-12 col-xs-12">
                                            <div class="text-center">
                                                <h4 id="form_type">零用金</h4>
                                            </div>
                                            <div class="text-right">
                                                <button style="font-size:20px;" type="button" class="btn btn-default" onclick="location.href='add_accounting_record_cash_v2.php';"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                                <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                                <path fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                                                </svg>新增零用金紀錄</button>
                                            </div>
                                            <br>
                                            <br>
                                            <ul style="font-size:17px;" class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item active" role="presentation">
                                                    <a class="nav-link" id="home-tab" data-toggle="pill" href="#type0" role="tab" aria-selected="true">
                                                        <b>兒少單據</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#type1" role="tab" aria-selected="false">
                                                        <b>轉帳</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#type2_1" role="tab" aria-selected="false">
                                                        <b>一月</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#type2_2" role="tab" aria-selected="false">
                                                        <b>二月</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#type2_3" role="tab" aria-selected="false">
                                                        <b>三月</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#type2_4" role="tab" aria-selected="false">
                                                        <b>四月</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#type2_5" role="tab" aria-selected="false">
                                                        <b>五月</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#type2_6" role="tab" aria-selected="false">
                                                        <b>六月</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#type2_7" role="tab" aria-selected="false">
                                                        <b>七月</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#type2_8" role="tab" aria-selected="false">
                                                        <b>八月</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#type2_9" role="tab" aria-selected="false">
                                                        <b>九月</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#type2_10" role="tab" aria-selected="false">
                                                        <b>十月</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#type2_11" role="tab" aria-selected="false">
                                                        <b>十一月</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#type2_12" role="tab" aria-selected="false">
                                                        <b>十二月</b>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade in active" id="type0" role="tabpanel" aria-labelledby="home-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap" style="user-select: auto;">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form id="form_a" class="form" action="">
                                                                <table style="width:100%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>兒少單據</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="padding: 0; border-bottom: 1px solid white !important;">
                                                                            <div class="table-wrap">
                                                                                <div class="table-responsive">
                                                                                    <table class="table display dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" data-toolbar="#toolbar">
                                                                                        <thead>
                                                                                            <tr style="background-color:rgb(255 201 54);">
                                                                                                <th style="width:2em;"></th>
                                                                                                <th style="width:6em;">收入</th>
                                                                                                <th style="width:6em;">支出</th>
                                                                                                <th>檔案</th>
                                                                                                <th>建立日期</th>
                                                                                                <th>備註</th>
                                                                                                <th style="width:5em;">詳細內容</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody class="arc_table" id="ct_invoice_tbody">

                                                                                        </tbody>
                                                                                    </table>
                                                                                    <div class="text-center">
                                                                                        <span class="count_people"></span>
                                                                                        <span class="count_people2"></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="type1" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_b" class="form" action="">
                                                                <table style="width:100%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>轉帳</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="padding: 0; border-bottom: 1px solid white !important;">
                                                                            <div class="table-wrap">
                                                                                <div class="table-responsive">
                                                                                    <table class="table display dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" data-toolbar="#toolbar">
                                                                                        <thead>
                                                                                            <tr style="background-color:rgb(255 201 54);">
                                                                                                <th style="width:2em;"></th>
                                                                                                <th style="width:6em;">收入</th>
                                                                                                <th style="width:6em;">支出</th>
                                                                                                <th>檔案</th>
                                                                                                <th>建立日期</th>
                                                                                                <th>備註</th>
                                                                                                <th style="width:5em;">詳細內容</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody class="arc_table" id="transfer_tbody"></tbody>
                                                                                    </table>
                                                                                    <div class="text-center">
                                                                                        <span class="count_people"></span>
                                                                                        <span class="count_people2"></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="type2_1" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_c" class="form" action="">
                                                                <table style="width:100%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>一月</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="padding: 0; border-bottom: 1px solid white !important;">
                                                                            <div class="table-wrap">
                                                                                <div class="table-responsive">
                                                                                    <table class="table display dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" data-toolbar="#toolbar">
                                                                                        <thead>
                                                                                            <tr style="background-color:rgb(255 201 54);">
                                                                                                <th style="width:2em;"></th>
                                                                                                <th style="width:6em;">收入</th>
                                                                                                <th style="width:6em;">支出</th>
                                                                                                <th>檔案</th>
                                                                                                <th>建立日期</th>
                                                                                                <th>備註</th>
                                                                                                <th style="width:5em;">詳細內容</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody class="arc_table" id="tbody_1"></tbody>
                                                                                    </table>
                                                                                    <div class="text-center">
                                                                                        <span class="count_people"></span>
                                                                                        <span class="count_people2"></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="type2_2" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_d" class="form" action="">
                                                                <table style="width:100%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>二月</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="padding: 0; border-bottom: 1px solid white !important;">
                                                                            <div class="table-wrap">
                                                                                <div class="table-responsive">
                                                                                    <table class="table display dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" data-toolbar="#toolbar">
                                                                                        <thead>
                                                                                            <tr style="background-color:rgb(255 201 54);">
                                                                                                <th style="width:2em;"></th>
                                                                                                <th style="width:6em;">收入</th>
                                                                                                <th style="width:6em;">支出</th>
                                                                                                <th>檔案</th>
                                                                                                <th>建立日期</th>
                                                                                                <th>備註</th>
                                                                                                <th style="width:5em;">詳細內容</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody class="arc_table" id="tbody_2"></tbody>
                                                                                    </table>
                                                                                    <div class="text-center">
                                                                                        <span class="count_people"></span>
                                                                                        <span class="count_people2"></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="type2_3" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_e" class="form" action="">
                                                                <table style="width:100%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>三月</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="padding: 0; border-bottom: 1px solid white !important;">
                                                                            <div class="table-wrap">
                                                                                <div class="table-responsive">
                                                                                    <table class="table display dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" data-toolbar="#toolbar">
                                                                                        <thead>
                                                                                            <tr style="background-color:rgb(255 201 54);">
                                                                                                <th style="width:2em;"></th>
                                                                                                <th style="width:6em;">收入</th>
                                                                                                <th style="width:6em;">支出</th>
                                                                                                <th>檔案</th>
                                                                                                <th>建立日期</th>
                                                                                                <th>備註</th>
                                                                                                <th style="width:5em;">詳細內容</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody class="arc_table" id="tbody_3"></tbody>
                                                                                    </table>
                                                                                    <div class="text-center">
                                                                                        <span class="count_people"></span>
                                                                                        <span class="count_people2"></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="type2_4" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_f" class="form" action="">
                                                                <table style="width:100%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>四月</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="padding: 0; border-bottom: 1px solid white !important;">
                                                                            <div class="table-wrap">
                                                                                <div class="table-responsive">
                                                                                    <table class="table display dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" data-toolbar="#toolbar">
                                                                                        <thead>
                                                                                            <tr style="background-color:rgb(255 201 54);">
                                                                                                <th style="width:2em;"></th>
                                                                                                <th style="width:6em;">收入</th>
                                                                                                <th style="width:6em;">支出</th>
                                                                                                <th>檔案</th>
                                                                                                <th>建立日期</th>
                                                                                                <th>備註</th>
                                                                                                <th style="width:5em;">詳細內容</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody class="arc_table" id="tbody_4"></tbody>
                                                                                    </table>
                                                                                    <div class="text-center">
                                                                                        <span class="count_people"></span>
                                                                                        <span class="count_people2"></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="type2_5" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_g" class="form" action="">
                                                                <table style="width:100%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>五月</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="padding: 0; border-bottom: 1px solid white !important;">
                                                                            <div class="table-wrap">
                                                                                <div class="table-responsive">
                                                                                    <table class="table display dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" data-toolbar="#toolbar">
                                                                                        <thead>
                                                                                            <tr style="background-color:rgb(255 201 54);">
                                                                                                <th style="width:2em;"></th>
                                                                                                <th style="width:6em;">收入</th>
                                                                                                <th style="width:6em;">支出</th>
                                                                                                <th>檔案</th>
                                                                                                <th>建立日期</th>
                                                                                                <th>備註</th>
                                                                                                <th style="width:5em;">詳細內容</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody class="arc_table" id="tbody_5"></tbody>
                                                                                    </table>
                                                                                    <div class="text-center">
                                                                                        <span class="count_people"></span>
                                                                                        <span class="count_people2"></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="type2_6" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_h" class="form" action="">
                                                                <table style="width:100%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>六月</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="padding: 0; border-bottom: 1px solid white !important;">
                                                                            <div class="table-wrap">
                                                                                <div class="table-responsive">
                                                                                    <table class="table display dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" data-toolbar="#toolbar">
                                                                                        <thead>
                                                                                            <tr style="background-color:rgb(255 201 54);">
                                                                                                <th style="width:2em;"></th>
                                                                                                <th style="width:6em;">收入</th>
                                                                                                <th style="width:6em;">支出</th>
                                                                                                <th>檔案</th>
                                                                                                <th>建立日期</th>
                                                                                                <th>備註</th>
                                                                                                <th style="width:5em;">詳細內容</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody class="arc_table" id="tbody_6"></tbody>
                                                                                    </table>
                                                                                    <div class="text-center">
                                                                                        <span class="count_people"></span>
                                                                                        <span class="count_people2"></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="type2_7" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_i" class="form" action="">
                                                                <table style="width:100%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>七月</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="padding: 0; border-bottom: 1px solid white !important;">
                                                                            <div class="table-wrap">
                                                                                <div class="table-responsive">
                                                                                    <table class="table display dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" data-toolbar="#toolbar">
                                                                                        <thead>
                                                                                            <tr style="background-color:rgb(255 201 54);">
                                                                                                <th style="width:2em;"></th>
                                                                                                <th style="width:6em;">收入</th>
                                                                                                <th style="width:6em;">支出</th>
                                                                                                <th>檔案</th>
                                                                                                <th>建立日期</th>
                                                                                                <th>備註</th>
                                                                                                <th style="width:5em;">詳細內容</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody class="arc_table" id="tbody_7"></tbody>
                                                                                    </table>
                                                                                    <div class="text-center">
                                                                                        <span class="count_people"></span>
                                                                                        <span class="count_people2"></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="type2_8" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_j" class="form" action="">
                                                                <table style="width:100%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>八月</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="padding: 0; border-bottom: 1px solid white !important;">
                                                                            <div class="table-wrap">
                                                                                <div class="table-responsive">
                                                                                    <table class="table display dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" data-toolbar="#toolbar">
                                                                                        <thead>
                                                                                            <tr style="background-color:rgb(255 201 54);">
                                                                                                <th style="width:2em;"></th>
                                                                                                <th style="width:6em;">收入</th>
                                                                                                <th style="width:6em;">支出</th>
                                                                                                <th>檔案</th>
                                                                                                <th>建立日期</th>
                                                                                                <th>備註</th>
                                                                                                <th style="width:5em;">詳細內容</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody class="arc_table" id="tbody_8"></tbody>
                                                                                    </table>
                                                                                    <div class="text-center">
                                                                                        <span class="count_people"></span>
                                                                                        <span class="count_people2"></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="type2_9" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_k" class="form" action="">
                                                                <table style="width:100%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>九月</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="padding: 0; border-bottom: 1px solid white !important;">
                                                                            <div class="table-wrap">
                                                                                <div class="table-responsive">
                                                                                    <table class="table display dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" data-toolbar="#toolbar">
                                                                                        <thead>
                                                                                            <tr style="background-color:rgb(255 201 54);">
                                                                                                <th style="width:2em;"></th>
                                                                                                <th style="width:6em;">收入</th>
                                                                                                <th style="width:6em;">支出</th>
                                                                                                <th>檔案</th>
                                                                                                <th>建立日期</th>
                                                                                                <th>備註</th>
                                                                                                <th style="width:5em;">詳細內容</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody class="arc_table" id="tbody_9"></tbody>
                                                                                    </table>
                                                                                    <div class="text-center">
                                                                                        <span class="count_people"></span>
                                                                                        <span class="count_people2"></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="type2_10" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_l" class="form" action="">
                                                                <table style="width:100%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>十月</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="padding: 0; border-bottom: 1px solid white !important;">
                                                                            <div class="table-wrap">
                                                                                <div class="table-responsive">
                                                                                    <table class="table display dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" data-toolbar="#toolbar">
                                                                                        <thead>
                                                                                            <tr style="background-color:rgb(255 201 54);">
                                                                                                <th style="width:2em;"></th>
                                                                                                <th style="width:6em;">收入</th>
                                                                                                <th style="width:6em;">支出</th>
                                                                                                <th>檔案</th>
                                                                                                <th>建立日期</th>
                                                                                                <th>備註</th>
                                                                                                <th style="width:5em;">詳細內容</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody class="arc_table" id="tbody_10"></tbody>
                                                                                    </table>
                                                                                    <div class="text-center">
                                                                                        <span class="count_people"></span>
                                                                                        <span class="count_people2"></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="type2_11" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_m" class="form" action="">
                                                                <table style="width:100%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>十月</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="padding: 0; border-bottom: 1px solid white !important;">
                                                                            <div class="table-wrap">
                                                                                <div class="table-responsive">
                                                                                    <table class="table display dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" data-toolbar="#toolbar">
                                                                                        <thead>
                                                                                            <tr style="background-color:rgb(255 201 54);">
                                                                                                <th style="width:2em;"></th>
                                                                                                <th style="width:6em;">收入</th>
                                                                                                <th style="width:6em;">支出</th>
                                                                                                <th>檔案</th>
                                                                                                <th>建立日期</th>
                                                                                                <th>備註</th>
                                                                                                <th style="width:5em;">詳細內容</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody class="arc_table" id="tbody_11"></tbody>
                                                                                    </table>
                                                                                    <div class="text-center">
                                                                                        <span class="count_people"></span>
                                                                                        <span class="count_people2"></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="type2_12" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive col-sm-12 text-center">
                                                            <form action=""></form>
                                                            <form id="form_n" class="form" action="">
                                                                <table style="width:100%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>十二月</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="padding: 0; border-bottom: 1px solid white !important;">
                                                                            <div class="table-wrap">
                                                                                <div class="table-responsive">
                                                                                    <table class="table display dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" data-toolbar="#toolbar">
                                                                                        <thead>
                                                                                            <tr style="background-color:rgb(255 201 54);">
                                                                                                <th style="width:2em;"></th>
                                                                                                <th style="width:6em;">收入</th>
                                                                                                <th style="width:6em;">支出</th>
                                                                                                <th>檔案</th>
                                                                                                <th>建立日期</th>
                                                                                                <th>備註</th>
                                                                                                <th style="width:5em;">詳細內容</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody class="arc_table2" id="tbody_12"></tbody>
                                                                                    </table>
                                                                                    <div class="text-center">
                                                                                        <span class="count_people"></span>
                                                                                        <span class="count_people2"></span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="text-center">
                                                    <button style="font-size:17px;" type="button" class="btn btn-default" onclick="back_arc_page();"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                                                    <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
                                                    </svg>返回</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!---/Table--->
            </div>
            <!--/網頁項目-->
        </div>
    </div>
    <!-- /#wrapper -->


    <!-- JavaScript -->
    <!-- Bootstrap and jQuery -->
    <script src="javascript/jquery.min.js"></script>
    <script src="javascript/bootstrap.min.js"></script>

    <!-- ================== 匯出EXCEL ================== -->
    <script src="javascript/jquery.dataTables1.10.16.min.js"></script>
    <script src="javascript/dataTables1.2.2.buttons.min.js"></script>
    <script src="javascript/jszip2.5.0.min.js"></script>
    <script src="javascript/buttons1.2.2.html5.min.js"></script>
    <!-- 表格 JavaScript -->
    <!--
    <script src="javascript/jquery.dataTables.min.js"></script>
    <script src="javascript/dataTables-data.js"></script>
-->
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
    <!-- 日期民國-->
    <script src="javascript/jquery-ui.min.js"></script>
    <script src="javascript/datepickerTw3.js"></script>
    <!-- ================== accounting_record_cash ================== -->
    <script type="text/javascript" src="js/accounting_record_cash_v2.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>
    <!-- ================== 地區選擇下拉 ================== -->
    <!--
    <script src="js/jQuery-TWzipcode-master/twzipcode.js"></script>
    <script src="js/jQuery-TWzipcode-master/jquery.twzipcode.js"></script>
    <script src="js/jQuery-TWzipcode-master/jquery.twzipcode.min.js"></script>
-->
    <!-- 記帳 -->
    <!-- <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> -->
</body>
<script>
    //$("#twzipcode").twzipcode({
    //    css: ['col-sm-12',],
    //});
    //$.fn.dataTable.ext.classes.sPageButton = 'btn btn-primary'; // Change Pagination Button Class
</script>

</html>
<?php include("database/timeout_logout.php"); ?>
