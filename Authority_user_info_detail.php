<?php session_start(); ?>
<?php include("database/check_authority.php"); ?> <?php include("no_cache.php"); ?>
<?php $href_name =  'page_Auth'; ?>
<!DOCTYPE html>
<html>

<head>
    <!--網頁icon-->
    <link rel="icon" href="image/LOGO.png" type="image/x-icon">
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

    <style>
        .auth_href_name_area input
        {
            margin-left: .5em;
        }
    </style>
</head>
<!--<SVG>引入bootstrap icon-->

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
        <?php include("auth_menu.php"); ?>
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
                        <li><span><a href="Authority.php">權限管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="Authority.php">使用者權限</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>權限設定詳細內容</span></li>
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
                <!-- /Title -->

                <!-- Row -->
                <div style="zoom:75%" class="row">
                    <div class="col-sm-12">
                        <div class="panel panel-default card-view">
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <div class="text-center">
                                                    <h3>權限設定詳細內容</h3>
                                            </div><br/><br/>
                                            <table class="text-center table table-striped">
                                                <tbody>
                                                    <tr>
                                                        <td style="background-color:#90ee90;color:blue;" colspan="2">
                                                            <div id="table_user_info">
                                                                權限等級：--，職位：-----
                                                            </div>
                                                            <div class="text-left">
                                                                <a href="javascript:auto_load_default_auth();"><button style="font-size:20px" type="button" class="btn btn-warning"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill-check" viewBox="0 0 16 16">
                                                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                                <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
                                                                </svg>
                                                                自動填入預設權限設定</button></a>
                                                            </div>
                                                            <div class="text-left" style="font-size:20px;color:#000;">
                                                                ※點擊上方按鈕將會依據<b style="font-size:20px;color:red;">權限等級</b>和<b style="font-size:20px;color:red;">職位名稱</b>
                                                                ，自動勾選預設權限設定
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>行政管理</td>
                                                        <td>
                                                            <div class="col-sm-12 text-left auth_href_name_area">
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_a" type="checkbox"><span>收文</span>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_b" type="checkbox"><span>發文</span><br/><br/>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_c" type="checkbox"><span>履歷表檔案</span>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_c_b" type="checkbox"><span>履歷表檔案（一覽表檢視功能）</span><br/><br/>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_d" type="checkbox"><span>在職訓練</span>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_d_b" type="checkbox"><span>在職訓練（一覽表檢視功能）</span><br/><br/>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_e" type="checkbox"><span>請假（一般權限）</span>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_e_a" type="checkbox"><span>請假（審核權限）</span><br/><br/>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_f" type="checkbox"><span>加班（一般權限）</span>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_f_a" type="checkbox"><span>加班（審核權限）</span><br/><br/>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_g" type="checkbox"><span>特休規則管理</span><br/><br/>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_h1" type="checkbox"><span>志工資料</span>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_h2" type="checkbox"><span>志工會議及活動</span><br/><br/>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_i1" type="checkbox"><span>團督記錄</span>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_i2" type="checkbox"><span>理監事會議</span>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_i3" type="checkbox"><span>會員大會</span><br/><br/>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_j1" type="checkbox"><span>零用金</span>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_j2" type="checkbox"><span>帳目報表</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>個案管理</td>
                                                        <td>
                                                            <div class="col-sm-12 text-left auth_href_name_area">
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_k" type="checkbox"><span>簡短服務</span>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_l" type="checkbox"><span>監所服務</span>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_m" type="checkbox"><span>篩檢</span><br/><br/>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_n1" type="checkbox"><span>開案個案</span>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_n2" type="checkbox"><span>安置評估</span><br/><br/>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_o" type="checkbox"><span>結案</span><br/><br/>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_p1" type="checkbox"><span>生輔紀錄</span>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_p2" type="checkbox"><span>同儕生輔紀錄</span><br/><br/>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_q" type="checkbox"><span>服務報表</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>方案管理</td>
                                                        <td>
                                                            <div class="col-sm-12 text-left auth_href_name_area">
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_r1" type="checkbox"><span>方案計畫</span>
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_r2" type="checkbox"><span>方案活動</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>權限管理</td>
                                                        <td>
                                                            <div class="col-sm-12 text-left auth_href_name_area">
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_Auth" type="checkbox"><span>權限管理</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">
                                                            <div id="text-center">
                                                                <button style="font-size:20px" class="btn btn-default" onclick="window.location.href = 'Authority.php';">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                                                                    <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
                                                                    </svg>返回
                                                                </button>
                                                                <button id="auth_update_btn" style="font-size:20px" class="btn btn-default" onclick="auth_update(this);">修改</button>           
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Row -->
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
    <script src="javascript/datepickerTw2.js"></script>
    <!-- ================== Authority_user_info_detail ================== -->
    <script type="text/javascript" src="js/Authority_user_info_detail.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>
</body>

</html>
<?php
    // if(isset($href_name))
    // {
    //     if(!in_array($href_name,$authority_pages))
    //     {
    //         echo '<script> swal({
    //                 title:"您無權限查看當前頁面!",
    //                 type:"error"
    //             }).then(function(){
    //                 window.history.go (-1); 
    //             }); 
    //             </script>';  
    //     } 
    // }

?>
<?php include("database/timeout_logout.php"); ?>
