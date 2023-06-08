<?php session_start(); ?>
<?php include("database/check_authority.php"); ?> <?php include("no_cache.php"); ?>
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
                        <li><span><a href="index.php">行政管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="received_yearlist.php">收文紀錄</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>新增收文</span></li>
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
                                                        <form id="received_form" data-toggle="validator" role="form" autocomplete="new-password">
                                                            <table style="width:auto;" class="table table-bordered">
                                                                <tr>
                                                                    <td colspan="2">
                                                                        <h3>新增收文紀錄</h3>
                                                                    </td>
                                                                </tr>
                                                                <!-- <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>年分</td>
                                                                <td style="border-bottom: solid 1px;"><input id="year" type="text"></td>
                                                                </tr> -->
                                                                <tr style="text-align:left">
                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>收文標題</td>
                                                                    <td style="border-bottom: solid 1px;"><input id="title_name" type="text"></td>
                                                                </tr>
                                                                <tr style="text-align:left">
                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>來文日期</td>
                                                                    <td style="border-bottom: solid 1px;"><input id="received_date" name="ch_datepicker" type="text"></td>
                                                                </tr>
                                                                <tr style="text-align:left">
                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>主旨</td>
                                                                    <td style="border-bottom: solid 1px;"><input id="subject" type="text"></td>
                                                                </tr>
                                                                <tr style="text-align:left">
                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>來文單位</td>
                                                                    <td style="border-bottom: solid 1px;"><input id="unit" type="text"></td>
                                                                </tr>
                                                                <tr style="text-align:left">
                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>來文字號</td>
                                                                    <td style="border-bottom: solid 1px;"><input id="num_receive" type="text"></td>
                                                                </tr>
                                                                <tr style="text-align:left">
                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">檔案上傳</td>
                                                                    <td style="border-bottom: solid 1px;">
                                                                        <div class="col-sm-8">
                                                                            <div class="text-left">
                                                                                <input name="received_file" type="file" class="form-control" />
                                                                                <br>
                                                                                <div id="received_file"></div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr style="text-align:left">
                                                                    <td style="text-align:right;background-color:rgb(255 0 0);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>理事長(簽核)</td>
                                                                    <td style="border-bottom: solid 1px;">
                                                                        <div class="col-sm-6">
                                                                            <select name="executive" id="executive" style="width:100%;">
                                                                                <option value="">請選擇</option>
                                                                            </select>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr style="text-align:left">
                                                                    <td style="text-align:right;background-color:rgb(255 0 0);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>主管(簽核)</td>
                                                                    <td style="border-bottom: solid 1px;">
                                                                        <div class="col-sm-6">
                                                                            <select name="supervise" id="supervise" style="width:100%;">
                                                                                <option value="">請選擇</option>
                                                                            </select>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            
                                                                
                                                                <tr style="text-align:left">
                                                                    <td style="text-align:right;background-color:rgb(255 0 0);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>執行長(簽核)</td>
                                                                    <td style="border-bottom: solid 1px;">
                                                                        <div class="col-sm-6">
                                                                            <select name="leader" id="leader" style="width:100%;">
                                                                                <option value="">請選擇</option>
                                                                            </select>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr style="text-align:left">
                                                                    <td style="text-align:right;background-color:rgb(255 0 0);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>組長(簽核)</td>
                                                                    <td style="border-bottom: solid 1px;">
                                                                        <div class="col-sm-6">
                                                                            <select name="director" id="director" style="width:100%;">
                                                                                <option value="">請選擇</option>
                                                                            </select>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr style="text-align:left">
                                                                    <td style="text-align:right;background-color:rgb(255 0 0);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>發派(簽核)</td>
                                                                    <td style="border-bottom: solid 1px;">
                                                                        <div class="col-sm-6">
                                                                            <select name="distribution" id="distribution" style="width:100%;">
                                                                                <option value="">請選擇</option>
                                                                            </select>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <br>
                                                            <button id="re_add_new" style="font-size:15px" type="button" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                                                                    <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                                </svg>新增</button>
                                                            <a href="received_yearlist.php"><button style="font-size:15px" type="button" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-excel" viewBox="0 0 16 16">
                                                                        <path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z" />
                                                                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                                    </svg>取消</button></a>
                                                        <form>
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
            <script src="javascript/validator.min.js"></script>
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
            <!-- 日期民國-->
            <script src="javascript/jquery-ui.min.js"></script>
            <script src="javascript/datepickerTw.js"></script>
            <!-- ================== add_phone.js ================== -->
            <script src="js/add_received.js<?php echo "?" . date("Y-m-d h:i:sa") ?>"></script>
</body>

</html>
<?php include("database/timeout_logout.php"); ?>