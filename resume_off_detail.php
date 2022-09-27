<?php session_start(); ?>
<?php include("database/check_authority.php"); ?><?php include("no_cache.php"); ?>
<?php @$res_name =  $_GET['name']; ?>
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

    /* Container */
    /* .container {
        margin: 0 auto;
        border: 0px solid black;
        width: 50%;
        height: 250px;
        border-radius: 3px;
        background-color: ghostwhite;
        text-align: center;
    } */

    /* Preview */
    /* .preview {
        width: 200px;
        height: 200px;
        border: 1px solid black;
        margin: 0 auto;
        background: white;
    }

    .preview img {
        display: none;
    } */

    /* Button */
    /* .button {
        border: 0px;
        background-color: deepskyblue;
        color: white;
        padding: 5px 15px;
        margin-left: 400px;
    } */
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
                        <li><span><a href="resume_list.php">員工管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <?php echo "<li><span><a href='resume_detail.php?name=" . trim($res_name) . "'>" . trim($res_name) . "員工檔案資料</a></span></li>"; ?>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>員工檔案詳細資料</span></li>
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
                                                    <h4>員工檔案詳細資料</h4>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <div class="tab-content" id="myTabContent">
                                                    <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                                        <div class="accordion" id="accordionExample">
                                                            <div class="panel panel-default">

                                                                <div id="collapseTwo" class="collapse in" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                    <div class="panel-body scr_container">
                                                                        <form id="form_a" class="form" action="">
                                                                            <table id="all_data" style="width:75%;margin-bottom: 0px;" class="table table-bordered">

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>姓名</td>
                                                                                    <td style="border-bottom: solid 1px;"><input id="name" class="res_question" type="text"></td>
                                                                                </tr>

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>上傳日期</td>
                                                                                    <td style="border-bottom: solid 1px;"><input id="upload_date" class="res_question" name="ch_datepicker" type="text"></td>
                                                                                </tr>

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>入職日</td>
                                                                                    <td style="border-bottom: solid 1px;"><input id="entry_date" class="res_question" name="ch_datepicker" type="text"></td>
                                                                                </tr>

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">雇傭契約</td>
                                                                                    <td style="border-bottom: solid 1px;">
                                                                                        <div class="container">
                                                                                            <form method="post" action="" enctype="multipart/form-data" id="myform">
                                                                                                <!-- <div class='preview'>
                                                                                                    <img src="" id="customFile1" width="100" height="100">
                                                                                                </div> -->
                                                                                                <div>
                                                                                                    <input type="file" id="customFile1" class="res_question" name="customFile1" />
                                                                                                    <!-- <input type="button" class="button" value="Upload" id="but_upload"> -->
                                                                                                    <br>
                                                                                                    <div id="customFile1_div"></div>
                                                                                                    <img src="" id="customFile1_img" style="display:none;" />
                                                                                                </div>
                                                                                            </form>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">保密契約</td>
                                                                                    <td style="border-bottom: solid 1px;">
                                                                                        <div class="container">
                                                                                            <form method="post" action="" enctype="multipart/form-data" id="myform">
                                                                                                <!-- <div class='preview'>
                                                                                                    <img src="" id="customFile2" width="100" height="100">
                                                                                                </div> -->
                                                                                                <div>
                                                                                                    <input type="file" id="customFile2" class="res_question" name="customFile2" />
                                                                                                    <!-- <input type="button" class="button" value="Upload" id="but_upload"> -->
                                                                                                    <br>
                                                                                                    <div id="customFile2_div"></div>
                                                                                                    <img src="" id="customFile2_img" style="display:none;" />
                                                                                                </div>
                                                                                            </form>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">畢業證書</td>
                                                                                    <td style="border-bottom: solid 1px;">
                                                                                        <div class="container">
                                                                                            <form method="post" action="" enctype="multipart/form-data" id="myform">
                                                                                                <!-- <div class='preview'>
                                                                                                    <img src="" id="customFile3" width="100" height="100">
                                                                                                </div> -->
                                                                                                <div>
                                                                                                    <input type="file" id="customFile3" class="res_question" name="customFile3" />
                                                                                                    <!-- <input type="button" class="button" value="Upload" id="but_upload"> -->
                                                                                                    <br>
                                                                                                    <div id="customFile3_div"></div>
                                                                                                    <img src="" id="customFile3_img" style="display:none;" />
                                                                                                </div>
                                                                                            </form>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">考績</td>
                                                                                    <td style="border-bottom: solid 1px;">
                                                                                        <div class="container">
                                                                                            <form method="post" action="" enctype="multipart/form-data" id="myform">
                                                                                                <!-- <div class='preview'>
                                                                                                    <img src="" id="customFile4" width="100" height="100">
                                                                                                </div> -->
                                                                                                <div>
                                                                                                    <input type="file" id="customFile4" class="res_question" name="customFile4" />
                                                                                                    <!-- <input type="button" class="button" value="Upload" id="but_upload"> -->
                                                                                                    <br>
                                                                                                    <div id="customFile4_div"></div>
                                                                                                    <img src="" id="customFile4_img" style="display:none;" />
                                                                                                </div>
                                                                                            </form>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>創建日期</td>
                                                                                    <td style="border-bottom: solid 1px;"><input id="create_date" class="res_question" name="ch_datepicker" type="text"></td>
                                                                                </tr>
                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>創建者</td>
                                                                                    <td style="border-bottom: solid 1px;"><input id="create_name" class="res_question" type="text"></td>
                                                                                </tr>
                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>更新日期</td>
                                                                                    <td style="border-bottom: solid 1px;"><input id="update_date" class="res_question" name="ch_datepicker" type="text"></td>
                                                                                </tr>
                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>更新者</td>
                                                                                    <td style="border-bottom: solid 1px;"><input id="update_name" class="res_question" type="text"></td>
                                                                                </tr>
                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">備註</td>
                                                                                    <td>
                                                                                        <textarea style="height:10em;width:700px;resize: none;font-size: 20px;" class="res_question" id="upload_res_remark" name="upload_res_remark" placeholder="請輸入備註"></textarea>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </form>
                                                                        <form action=""></form>
                                                                        <table style="width:75%;margin-bottom: 0px" class="table table-bordered">
                                                                            <tr>
                                                                                <td colspan="2">
                                                                                    <div id="edit_div">
                                                                                        <button style="font-size:20px" id="res_edit" class="btn btn-default" onclick="res_edit();">編輯</button>
                                                                                    </div>
                                                                                    <div id="save_div" hidden>
                                                                                        <button style="font-size:20px" id="res_update" class="btn btn-default">修改</button>
                                                                                        <button style="font-size:20px" id="res_cancel" class="btn btn-default" onclick="res_cancel();">取消</button>
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
                                                                            <!-- <div class="text-right col-sm-4" style="padding-right:0;">
                                                                                <button type="button" id="trans_to_opencase" class="btn btn-default trans_btn" style="font-size:20px" data-toggle="modal" data-target="#myModal">
                                                                                    轉案(新增至開案個案)
                                                                                </button>
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
    <script src="javascript/datepickerTw.js"></script>
    <!-- ================== detail ================== -->
    <script type="text/javascript" src="js/resume_off_detail.js"></script>

</body>

</html>
<?php include("database/timeout_logout.php"); ?>
