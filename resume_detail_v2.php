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
    <!--  日期民國  -->
    <link data-require="jqueryui@*" rel="stylesheet" href="css/jquery-ui.css" />
    <link href="css/dtsel.css" rel="stylesheet" />

    <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
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

    .form-control
    {
        border: 1px solid #000;
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
            <a href="index.php"><img class="brand-img pull-left" style="width:330px;height:70px" src="image/logo字.png" /></a>
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
                        <li><span><a href="index.php">首頁</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="">行政管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="">員工管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="resume.php">員工履歷一覽表</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>員工履歷檔案詳細資料</span></li>
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
                <div style="zoom:80%" class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default card-view">
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-sm-12 col-xs-12">
                                        <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item active" role="presentation">
                                                    <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                                        <b>員工履歷檔案詳細資料</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#two" role="tab" aria-selected="false">
                                                        <b>歷年雇傭契約&考績檔案</b>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">

                                                <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="panel-body">
                                                        </div>
                                                        <div class="table-wrap">
                                                            <div class="table-responsive col-sm-12 text-center">
                                                                <table style="width:70%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>員工履歷檔案詳細資料</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">帳號</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="form-group col-sm-4">
                                                                                <span id="account"></span>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>員工姓名</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="form-group col-sm-4">
                                                                                <input id="user_name" class="resume_question" type="text">
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>入職日</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="form-group col-sm-4">
                                                                                <input id="entry_date" class="resume_question" name="ch_datepicker" type="text">
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">是否在職</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="form-group col-sm-3">
                                                                                <select id="on_or_off" class="resume_question">
                                                                                    <option value="是">是</option>
                                                                                    <option value="否">否</option>
                                                                                </select>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">離職日</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="form-group col-sm-4">
                                                                                <input id="resigned_date" class="resume_question" name="ch_datepicker" type="text">
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">履歷表檔案</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-8">
                                                                                <div class="text-left">
                                                                                    <input name="resume_file" type="file" class="resume_question form-control">
                                                                                    <br>
                                                                                    <div id="resume_file"></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">保密契約</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-8">
                                                                                <div class="text-left">
                                                                                    <input name="nda_file" type="file" class="resume_question form-control">
                                                                                    <br>
                                                                                    <div id="nda_file"></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">畢業證書</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-8">
                                                                                <div class="text-left">
                                                                                    <input name="diploma_file" type="file" class="resume_question form-control">
                                                                                    <br>
                                                                                    <div id="diploma_file"></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">備註</td>
                                                                        <td>
                                                                            <div class="form-group col-sm-10">
                                                                                <textarea style="height:10em;width:100%;" id="remark" class="resume_question" name="remark" placeholder="請輸入備註"></textarea>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <div id="edit_div">
                                                                                <button style="font-size:20px" id="resume_edit" class="btn btn-default" onclick="resume_edit();">編輯</button>
                                                                            </div>
                                                                            <div id="save_div" hidden>
                                                                                <button style="font-size:20px" id="resume_update" class="btn btn-default" onclick="resume_update();">修改</button>           
                                                                                <button style="font-size:20px" id="resume_cancel" class="btn btn-default" onclick="resume_cancel();">取消</button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="table-wrap">
                                                            <div class="table-responsive">
                                                                <div>
                                                                    <H3>歷年雇傭契約&考績檔案</H3>
                                                                </div>
                                                                <div>
                                                                    員工姓名：<span class="employee_name">---</span>
                                                                    ，入職日期：<span class="entry_date">---年--月--日</span>
                                                                    ，最近上傳日期：<span class="recently_upload_date">---年--月--日</span>
                                                                    ，今年檔案上傳數：<span class="this_year_file_upload_num">0</span>
                                                                </div>
                                                                <table id="case_all" style="width:100%;" class="table table-bordered">
                                                                    <th>年度</th>
                                                                    <th>雇傭契約</th>
                                                                    <!-- <th>保密契約</th> -->
                                                                    <!-- <th>畢業證書</th> -->
                                                                    <th>考績</th>
                                                                    <th>備註</th>
                                                                    <th></th>
                                                                    <tbody id="all_files"></tbody>
                                                                </table>
                                                            </div>
                                                            <!-- <div class="text-center">
                                                                <button onclick="history.back();" class="btn btn-default">返回</button>
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
    <!-- ================== table ================== -->
    <script src="javascript/bootstrap1.18.0-table.min.js"></script>
    <script src="javascript/bootstrap-table1.11.1-zh-TW.min.js"></script>
    <!-- ================== 地區選擇下拉 ================== -->
    <script src="js/jQuery-TWzipcode-master/twzipcode.js"></script>
    <script src="js/jQuery-TWzipcode-master/jquery.twzipcode.js"></script>
    <script src="js/jQuery-TWzipcode-master/jquery.twzipcode.min.js"></script>
    <!-- 日期民國-->
    <script src="javascript/jquery-ui.min.js"></script>
    <script src="javascript/datepickerTw2.js"></script>
    <!-- ================== detail ================== -->
    <script type="text/javascript" src="js/resume_detail_v2.js"></script>

</body>

</html>
<?php include("database/timeout_logout.php"); ?>
