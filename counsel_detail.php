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
    <!--  日期民國  -->
    <link data-require="jqueryui@*" rel="stylesheet" href="css/jquery-ui.css" />
    <link href="css/dtsel.css" rel="stylesheet" />

    <meta charset="UTF-8" />
    <!--    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />-->
    <meta name="description" content="快樂聯盟資管系統">
    <meta name="author" content="HANG">
    <meta HTTP-EQUIV="pragma" CONTENT="no-cache">
    <meta HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate">
    <meta HTTP-EQUIV="expires" CONTENT="0">
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
    padding: 0;
    padding-top: 15px;
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
        <div class="fixed-sidebar-left">
            <ul class="nav navbar-nav side-nav nicescroll-bar">
                <li>
                    <!--class 設為active 被選中的大項目會為黑底-->
                    <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#administration">行政管理
                        <span class="pull-right">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </span>
                    </a>
                    <ul style="font-size:18px" id="administration" class="collapse">
                        <li>
                            <a href="received.php">收文
                            </a>
                        </li>
                        <li>
                            <a href="published.php">發文
                            </a>
                        </li>
                        <li>
                            <a href="staff_manag.php">員工管理
                            </a>
                        </li>
                        <li>
                            <a href="volunteer.php">志工資料
                            </a>
                        </li>
                        <li>
                            <a href="meeting_record.php">會議記錄
                            </a>
                        </li>
                        <li>
                            <a href="accounting_record.php">會計資料
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);" data-toggle="collapse" data-target="#case">個案管理
                        <span class="pull-right">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </span>
                    </a>
                    <ul style="font-size:18px" id="case" class="collapse">
                        <li>
                            <a href="javascript:void(0);" class="" data-toggle="collapse" data-target="#non_open">未開案個案
                                <span class="pull-right">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg>
                                </span>
                            </a>
                            <ul style="font-size:15px" id="non_open" class="collapse">
                                <li>
                                    <li>
                                        <a href="phone.php">諮詢個案
                                        </a>
                                    </li>
                                    <li>
                                        <a href="counsel.php">監所輔導
                                        </a>
                                    </li>
                                    <li>
                                        <a href="screening.php">篩檢
                                        </a>
                                    </li>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="current_case.php">開案個案
                            </a>
                        </li>
                        <li>
                            <a href="#">結案個案
                            </a>
                        </li>
                        <li>
                            <a href="#">生輔紀錄
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0);" data-toggle="collapse" data-target="#plan">方案管理
                        <span class="pull-right">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </span>
                    </a>
                    <ul style="font-size:18px" id="plan" class="collapse" data-toggle="collapse">
                        <li>
                            <a href="#">方案活動
                            </a>
                        </li>
                        <li>
                            <a href="#">方案計畫
                            </a>
                        </li>
                    </ul>
                </li>
                <!-- <li>
                    <a href="#">項目5</a>
                </li>
                <li>
                    <a href="#">項目6</a>
                </li>
                <li>
                    <a href="#" data-toggle="collapse" data-target="#track">項目7</a>
                </li> -->
                <li>
                    <a href="Authority.html" data-toggle="collapse" data-target="#track">權限管理</a>
                </li>
            </ul>
        </div>
        <!--/左側導覽列-->
        <!--網頁內容-->
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
                        <li><span><a href="">個案管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="">未開案個案</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="counsel.php">監所輔導</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>詳細資料</span></li>
                    </ol>
                    <!--/麵包屑-->
                </div>
                <!-- /Title -->
                <!-- Footer -->
                <footer class="footer container-fluid pl-30 pr-30">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <p>Copyright &copy; 2020國立屏東科技大學資訊管理系</p>
                        </div>
                    </div>
                </footer>
                <!-- /Footer -->
                <!-- /Title -->
                <!---Table--->
                <div style="zoom:80%" class="row text-center">
                    <div class="col-sm-12">
                        <div class="panel panel-default panel-view">
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-sm-12 col-xs-12">
                                            <div>
                                                <div>
                                                    <h4>詳細資料</h4>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                                    <li class="nav-item active" role="presentation" id="counsel_rec_all">
                                                        <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                                            <b>監所輔導紀錄</b>
                                                        </a>
                                                    </li>
                                                    
                                                    <li id="open_rec">
                                                        <a href="javascript:addNewTag()">
                                                            <b>+</b>
                                                        </a>
                                                    </li>

                                                </ul>
                                                <div class="tab-content" id="myTabContent">
                                                    <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                                        <div class="accordion" id="accordionExample">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading" id="headingTwo">
                                                                    <h2 class="mb-0">
                                                                        <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                            <span style="color:black;font-size:17px">監所輔導紀錄</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseTwo" class="collapse in" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="all_data" style="width:55%;display:table !important;" class="table table-bordered">
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width:25%;" class="NOline">呼號</td>
                                                                                <td style=""><span id="t_sn"></span></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>矯正機關</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select id="refferal" class="counsel_question" style="width:200px;">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="台南監獄">台南監獄</option>
                                                                                        <option value="台南看守所">台南看守所</option>
                                                                                        <option value="高雄監獄">高雄監獄</option>
                                                                                        <option value="高雄二監">高雄二監</option>
                                                                                        <option value="高雄女監">高雄女監</option>
                                                                                        <option value="屏東監獄">屏東監獄</option>
                                                                                        <option value="屏東看守所">屏東看守所</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>姓名</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="name" class="counsel_question" type="text"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">性別</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select id="gender" class="counsel_question" style="width:200px;">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="男生">男生</option>
                                                                                        <option value="女生">女生</option>
                                                                                        <option value="跨性別">跨性別</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">性別傾向</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select id="sexual_orientation" class="counsel_question" style="width:200px;">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="同性">同性</option>
                                                                                        <option value="異性">異性</option>
                                                                                        <option value="雙性">雙性</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>出生年月日</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="birth" class="counsel_question" name="ch_datepicker" type="text"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>身分證字號</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="pid" class="counsel_question" type="text"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">緊急聯絡人</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="info_name" class="counsel_question" type="text"></td>
                                                                            </tr>
                                                                        
                                                                            
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">緊急聯絡電話</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="info_phone" class="counsel_question" type="number" max="14"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">入監前居住地</td>
                                                                                <td style="border-bottom: solid 1px;"><input style="width:85%;" id="address" class="counsel_question" type="text" max="14"></td>
                                                                            </tr>
                                                                        
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">入獄時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="in_prison_date" class="counsel_question" name="ch_datepicker" type="text"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">出獄時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="out_prison_date" class="counsel_question" name="ch_datepicker" type="text"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第二次入獄時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="in_prison_date_2nd" class="counsel_question" name="ch_datepicker" type="text"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第二次出獄時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="out_prison_date_2nd" class="counsel_question" name="ch_datepicker" type="text"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第三次入獄時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="in_prison_date_3rd" class="counsel_question" name="ch_datepicker" type="text"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第三次出獄時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="out_prison_date_3rd" class="counsel_question" name="ch_datepicker" type="text"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">是否假釋出監</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select id="is_parole" class="counsel_question" style="width:200px;">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="是">是</option>
                                                                                        <option value="否">否</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">診斷出HIV(+)時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="HIV_diagnosis_date" class="counsel_question" name="ch_datepicker" type="text"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">家人是否知道感染</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select id="family_know" class="counsel_question" style="width:200px;">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="是">是</option>
                                                                                        <option value="否">否</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">雞尾酒療法服藥狀況</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select id="cocktail_therapy_status" class="counsel_question" style="width:200px;">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="是">是</option>
                                                                                        <option value="否">否</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第一次訪談時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="interview_date" name="interview_date_1st" type="text" disabled="disabled"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第二次訪談時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="interview_date" name="interview_date_2nd" type="text" disabled="disabled"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第三次訪談時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="interview_date" name="interview_date_3rd" type="text" disabled="disabled"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第四次訪談時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="interview_date" name="interview_date_4th" type="text" disabled="disabled"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第五次訪談時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="interview_date" name="interview_date_5th" type="text" disabled="disabled"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第六次訪談時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="interview_date" name="interview_date_6th" type="text" disabled="disabled"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第七次訪談時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="interview_date" name="interview_date_7th" type="text" disabled="disabled"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                                                                                    <label>建立日期</label>
                                                                                </td>
                                                                                <td style="">
                                                                                    <span id="create_date"></span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                                                                                    <label>建立者</label>
                                                                                </td>
                                                                                <td style="">
                                                                                    <span id="create_name"></span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                                                                                    <label>修改日期</label>
                                                                                </td>
                                                                                <td style="">
                                                                                    <span id="update_date"></span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;" class="NOline">
                                                                                    <label>修改者</label>
                                                                                </td>
                                                                                <td>
                                                                                    <span id="update_name"></span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="2">
                                                                                    <div id="edit_div">
                                                                                        <button style="font-size:20px" id="counsel_edit" class="btn btn-default" onclick="counsel_edit();">編輯</button>
                                                                                    </div>
                                                                                    <div id="save_div" hidden>
                                                                                        <button style="font-size:20px" id="counsel_update" class="btn btn-default">修改</button>           
                                                                                        <button style="font-size:20px" id="counsel_cancel" class="btn btn-default" onclick="counsel_cancel();">取消</button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>

                                                                        <div class="col-sm-12" style="padding-left:0;padding-right:0;margin-top:3em;">
                                                                            <div class="text-center col-sm-4" style="padding-left:0;">
                                                                            </div>
                                                                            <div class="text-center col-sm-4">
                                                                                <button style="font-size:20px;" id="preview_word2" class="btn btn-default">預覽匯出</button>
                                                                            </div>
                                                                            <div class="text-right col-sm-4" style="padding-right:0;">
                                                                                <button type="button" id="trans_to_opencase" class="btn btn-default trans_btn" style="font-size:20px" data-toggle="modal" data-target="#myModal">
                                                                                    轉案(新增至開案個案)
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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

    <!--\ Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">新增至開案個案</h4>
                </div>
                <div class="modal-body">
                    <table id="all_data" style="width:auto;margin:0 auto;" class="table table-bordered">
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">開案編號</td>
                            <td style=""><input class="trans_to_opencase_question" id="open_case_t_sn" type="text"></td>
                        </tr>
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>個案屬性</td>
                            <td style="border-bottom: solid 1px;">
                                <select class="trans_to_opencase_question" id="open_case_type" style="width:200px;">
                                    <option value="">請選擇</option>
                                    <option value="安置家園">安置家園</option>
                                    <option value="自立宿舍">自立宿舍</option>
                                    <option value="社區">社區</option>
                                    <option value="藥癮家庭">藥癮家庭</option>
                                    <option value="藥癮者">藥癮者</option>
                                    <option value="親子教育">親子教育</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" id="trans_to_opencase_submit" class="btn btn-default">開案建立</button>
                    <!-- <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button> -->
                </div>
            </div>
        </div>
    </div>
    <!-- Modal /-->

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
    <!-- ================== table ================== -->
    <script src="javascript/bootstrap1.18.0-table.min.js"></script>
    <script src="javascript/bootstrap-table1.11.1-zh-TW.min.js"></script>
    <!-- ================== 地區選擇下拉 ================== -->
    <script src="js/jQuery-TWzipcode-master/twzipcode.js"></script>
    <script src="js/jQuery-TWzipcode-master/jquery.twzipcode.js"></script>
    <script src="js/jQuery-TWzipcode-master/jquery.twzipcode.min.js"></script>
     <!-- 日期民國-->
     <script src="javascript/jquery-ui.min.js"></script>
    <script src="javascript/datepickerTw.js"></script>
    <!-- ================== detail ================== -->
    <script type="text/javascript" src="js/counsel_detail.js"></script>

</body>

</html>