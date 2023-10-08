<?php session_start(); ?>
<?php include("database/check_authority.php"); ?> <?php include("no_cache.php"); ?>
<?php $href_name =  'page_d'; ?>
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
                        <li><span><a href="training.php">行政管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="training.php">員工管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="training.php">在職訓練一覽表</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>在職訓練詳細資料</span></li>
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
                                                <!-- <div class="text-left"><button class="btn btn-default" id="face">個案詢戒面訪表</button></div>-->
                                                <div>
                                                    <h4>詳細資料</h4>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                                    <li class="nav-item active" role="presentation" id="train_rec_all">
                                                        <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                                            <b>在職訓練紀錄</b>
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
                                                                <div class="panel panel-default">
                                                                    <div class="panel-heading" id="headingTwo">
                                                                        <h2 class="mb-0">
                                                                            <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                                <span style="color:black;font-size:17px">員工在職訓練紀錄</span>
                                                                            </button>
                                                                        </h2>
                                                                    </div>
                                                                    <div id="collapseTwo" class="collapse in" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                        <div class="panel-body scr_container">
                                                                            <table id="all_data" style="width:75%;display:table !important;" class="table table-bordered">

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>員工姓名</td>
                                                                                    <td style="border-bottom: solid 1px;"><input id="name" class="tra_question" type="text"></td>
                                                                                </tr>

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>在職訓練日期</td>
                                                                                    <td style="border-bottom: solid 1px;"><input id="training_date" class="tra_question" name="ch_datepicker" type="text"></td>
                                                                                </tr>

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>課程名稱</td>
                                                                                    <td style="border-bottom: solid 1px;"><input id="training_name" class="tra_question" type="text"></td>
                                                                                </tr>

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>時數</td>
                                                                                    <td style="border-bottom: solid 1px;"><input id="hours" class="tra_question" type="text"></td>
                                                                                </tr>

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>在職訓練地點</td>
                                                                                    <td style="border-bottom: solid 1px;"><input id="place" class="tra_question" type="text"></td>
                                                                                </tr>

                                                                                <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">檔案上傳</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <div class="col-sm-9">
                                                                                        <div class="text-left">
                                                                                            <input name="upload" type="file" class="tra_question form-control">
                                                                                            <br>
                                                                                            <div id="upload"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                </tr>

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">備註</td>
                                                                                    <td>
                                                                                        <textarea style="height:10em;width:700px;resize: none;font-size: 20px;" class="tra_question" id="remark" placeholder="請輸入備註"></textarea>
                                                                                    </td>
                                                                                </tr>

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>建立日期</td>
                                                                                    <td style="border-bottom: solid 1px;"><input id="create_date" class="tra_question" type="text"></td>
                                                                                </tr>

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>建立者</td>
                                                                                    <td style="border-bottom: solid 1px;"><input id="create_name" class="tra_question" type="text"></td>
                                                                                </tr>

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>修改日期</td>
                                                                                    <td style="border-bottom: solid 1px;"><input id="upload_date" class="tra_question" type="text"></td>
                                                                                </tr>

                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>修改者</td>
                                                                                    <td style="border-bottom: solid 1px;"><input id="upload_name" class="tra_question" type="text"></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td colspan="2">
                                                                                        <div id="edit_div">
                                                                                            <button style="font-size:20px" id="tra_edit" class="btn btn-default" onclick="tra_edit();">編輯</button>
                                                                                        </div>
                                                                                        <div id="save_div" hidden>
                                                                                            <button style="font-size:20px" id="tra_update" class="btn btn-default">修改</button>
                                                                                            <button style="font-size:20px" id="tra_cancel" class="btn btn-default" onclick="tra_cancel();">取消</button>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
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
        <script type="text/javascript" src="js/training_detail.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>

</body>

</html>
<?php include("database/timeout_logout.php"); ?>