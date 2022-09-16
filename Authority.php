<?php session_start(); ?>
<?php include("database/check_authority.php"); ?>
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
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <a id="toggle_nav_btn" class="toggle-left-nav-btn inline-block mr-20 pull-left" href="javascript:void(0);">
                <i><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg></i>
            </a>
            <a href="index.php"><img class="brand-img pull-left" src="image/LOGO.png" /></a>
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
                        <li><span><a href="index.php">首頁</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>權限管理</span></li>
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
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default card-view">
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-sm-12 col-xs-12">
                                            <div class="form-wrap">
                                                <form class="form-horizontal" id="authority_insert">
                                                    <div class="row">
                                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                            <div class="panel panel-default card-view" style="display: none;">
                                                            </div>
                                                        </div>
<!--
                                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                            <div class="panel panel-default card-view" style="background:gainsboro">
                                                                <div class="panel-wrapper collapse in">
                                                                    <div class="panel-body">
                                                                        <h4 class="mb-15">權限設定規則</h4>
                                                                        <p>權限等級1：社工</p>
                                                                        <p>權限等級2：組長</p>
                                                                        <p>權限等級3：主任</p>
                                                                        <p>權限等級4：執行長、執行長秘書(僅能觀看無法審核)</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
-->
                                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                            <div class="panel panel-default card-view" style="display: none;">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="supplier_name" class="col-sm-3 control-label">姓名：</label>
                                                        <div class="col-sm-6">
                                                            <div class="input-group">
                                                                <div class="input-group-addon"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                                    </svg>
                                                                </div>
                                                                <input type="text" class="form-control" id="authority_name" placeholder="新增姓名" required>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="supplier_name" class="col-sm-3 control-label">帳號：</label>
                                                        <div class="col-sm-6">
                                                            <div class="input-group">
                                                                <div class="input-group-addon"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                                    </svg>
                                                                </div>
                                                                <input type="text" class="form-control" id="authority_acc" placeholder="新增帳號" required>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="supplier_sname" class="col-sm-3 control-label">密碼：</label>
                                                        <div class="col-sm-6">
                                                            <div class="input-group">
                                                                <div class="input-group-addon">
                                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                                    </svg>
                                                                </div>
                                                                <input type="password" class="form-control" id="authority_pass" placeholder="新增密碼" required>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="supplier_department" class="col-sm-3 control-label">單位：</label>
                                                        <div class="col-sm-6">
                                                            <select style="margin-top:6px" class="col-sm-12" id="authority_department">
                                                                <option value="" selected>請選擇單位</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="supplier_job" class="col-sm-3 control-label">職稱：</label>
                                                        <div class="col-sm-6">
                                                            <select style="margin-top:6px" class="col-sm-12" id="authority_job">
                                                                <option value="" selected>請選擇職稱</option>
                                                                <option value="社工">社工</option>
                                                                <option value="社工組長">社工組長</option>
                                                                <option value="社工助理">社工助理</option>
                                                                <option value="行政人員">行政人員</option>
                                                                <option value="生活輔導員">生活輔導員</option>
                                                                <option value="生活輔導組長">生活輔導組長</option>
                                                                <option value="主任">主任</option>
                                                                <option value="執行長">執行長</option>
                                                                <option value="執行長秘書">執行長秘書</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="supplier_classification" class="col-sm-3 control-label">權限等級：</label>
                                                        <div class="col-sm-6">
                                                            <select style="margin-top:6px" class="col-sm-12" id="authority_classification">
                                                                <option value="" selected>請選擇權限</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-group mb-0">
                                                        <div class="text-center col-sm-12">
                                                            <button type="submit" class="btn btn-default"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                                                    <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                                                    <path fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                                                                </svg>新增</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
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
                                            <table class="text-center table-striped" data-toggle="table" data- data-page-size=5 data-search="true" data-pagination="true" data-pagination-parts="[pageList,pageInfo]">
                                                <thead>
                                                    <tr>
                                                        <th>編號</th>
                                                        <th>單位</th>
                                                        <th>姓名</th>
                                                        <th>職稱</th>
                                                        <th>帳號</th>
                                                        <th>密碼</th>
                                                        <th>權限</th>
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
            </div>
            <!--/網頁內容-->
            <!-- 彈跳視窗開始  -->
            <div class="modal fade" id="jump-authority" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 class="modal-title" id="myModalLabel">帳戶修改</h4>
                        </div>
                        <div class="modal-body">
                            <div class="panel-body">
                                <form class="form-horizontal" method="post">
                                    <div class="form-group">
                                        <label for="supplier_name" class="col-sm-3 control-label">姓名：</label>
                                        <div class="col-sm-9">
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                    </svg>
                                                </div>
                                                <input type="text" class="form-control" id="modify_name" placeholder="姓名" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="supplier_name" class="col-sm-3 control-label">帳號：</label>
                                        <div class="col-sm-9">
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                    </svg>
                                                </div>
                                                <input type="text" class="form-control" id="modify_acc" placeholder="帳號" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="supplier_sname" class="col-sm-3 control-label">密碼：</label>
                                        <div class="col-sm-9">
                                            <div class="input-group">
                                                <div class="input-group-addon">
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                    </svg>
                                                </div>
                                                <input type="password" class="form-control" id="modify_pass" placeholder="密碼" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="modify_department" class="col-sm-3 control-label">單位：</label>
                                        <div class="col-sm-9">
                                            <select style="margin-top:6px" class="col-sm-12" data-style="btn-primary btn-outline" name="modify_department" id="modify_department">
<!--                                                <option value="" selected>請選擇單位</option>-->
                                            </select>
                                        </div>
                                    </div>
                                   <div class="form-group">
                                        <label for="modify_job" class="col-sm-3 control-label">職稱：</label>
                                        <div class="col-sm-9">
                                            <select style="margin-top:6px" class="col-sm-12" data-style="btn-primary btn-outline" name="modify_job" id="modify_job">
<!--                                                <option value="" selected>請選擇職稱</option>-->
                                                <option value="社工">社工</option>
                                                <option value="社工組長">社工組長</option>
                                                <option value="社工助理">社工助理</option>
                                                <option value="行政人員">行政人員</option>
                                                <option value="生活輔導員">生活輔導員</option>
                                                <option value="生活輔導組長">生活輔導組長</option>
                                                <option value="主任">主任</option>
                                                <option value="執行長">執行長</option>
                                                <option value="執行長秘書">執行長秘書</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="modify_classification" class="col-sm-3 control-label">權限等級：</label>
                                        <div class="col-sm-9">
                                            <select style="margin-top:6px" class="col-sm-12" data-style="btn-primary btn-outline" name="modify_classification" id="modify_classification">
<!--                                                <option value="" selected>請選擇權限</option>-->
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <div class="col-sm-6 text-left">
                                <input type="button" class="btn btn-danger" id="delete_acc" value="刪除帳戶" />
                            </div>
                            <div class="col-sm-6">
                                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                                <input type="button" class="btn btn-primary" id="modify_val" value="修改" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 彈跳視窗結束  -->
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
    <!-- ================== Authority ================== -->
    <script type="text/javascript" src="js/Authority.js"></script>
</body>

</html>
<?php include("database/timeout_logout.php"); ?>
