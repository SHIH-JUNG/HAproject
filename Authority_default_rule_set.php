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
                        <li><span><a href="Authority_default_rule_set.php">權限管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>預設權限</span></li>
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
                                                    <h3>預設權限一覽表</h3>
                                            </div>
                                            <div class="text-right">
                                                <a href="add_user_info_default_auth.php"><button style="font-size:20px" type="button" class="btn btn-default"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                                    <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                                    <path fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                                                </svg>新增權限</button></a><br/><br/>
                                            </div>
                                            <div class="text-left" style="font-size:20px;color:red;">※點選欲修改的預設權限，於下方『權限設定內容』表格顯示選中的權限設定</div>
                                            <table class="text-center table table-striped">
                                                <thead class="bg-warning">
                                                    <tr>
                                                        <th></th>
                                                        <th>權限</th>
                                                        <th>職位</th>
                                                        <th>建立日期</th>
                                                        <th>建立人員</th>
                                                        <th>修改日期</th>
                                                        <th>修改人員</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="user_info"></tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Row -->

                <!-- Row -->
                <div style="zoom:75%" class="row">
                    <div class="col-sm-12">
                        <div class="panel panel-default card-view">
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <div class="text-center">
                                                    <h3>權限設定內容</h3>
                                            </div><br/><br/>
                                            <table class="text-center table table-striped">
                                                <tbody>
                                                    <tr>
                                                        <td style="background-color:#90ee90;color:red;" colspan="2">
                                                            <div id="table_user_info">
                                                                權限等級：--，職位：-----
                                                            </div>
                                                            <div class="text-left" style="font-size:20px;color:red;">
                                                                ※權限設定如下
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
                                                                <input name="auth_href_name" style="zoom: 1.5" value="page_case" type="checkbox"><span>開案總表</span><br/><br/>
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
    <!-- 滾動條 JavaScript -->
    <script src="javascript/jquery.slimscroll.js"></script>
    <!-- Init -->
    <script src="javascript/init.js"></script>
    <!-- ================== JS sweetalert2 ================== -->
    <script src="javascript/sweetalert2/sweetalert2.min.js"></script>
    <!-- ================== JS IE sweetalert ================== -->
    <script src="javascript/sweetalert2/core-js.js"></script>
    <!-- ================== 登出設定 ================== -->
    <script src='js/logout.js'></script>
    <!-- ================== table ================== -->
    <script src="javascript/bootstrap1.18.0-table.min.js"></script>
    <script src="javascript/bootstrap-table1.11.1-zh-TW.min.js"></script>
    <!-- ================== Authority_default_rule_set ================== -->
    <script type="text/javascript" src="js/Authority_default_rule_set.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>
</body>

</html>
<?php
    if(isset($href_name))
    {
        if(!in_array($href_name,$authority_pages))
        {
            echo '<script> swal({
                    title:"您無權限查看當前頁面!",
                    type:"error"
                }).then(function(){
                    window.history.go (-1); 
                }); 
                </script>';  
        } 
    }

?>
<?php include("database/timeout_logout.php"); ?>
