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
<!--    <link rel="stylesheet" href="css/bootstrap-table.min.css">-->
    <!-- ================== 匯出EXCEL ================== -->
    <link href="css/jquery.dataTables1.10.16.min.css" rel="stylesheet" />
    <link href="css/buttons.dataTables1.5.1.min.css" rel="stylesheet" />
    
    <meta charset="UTF-8" />
<!--    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />-->
    <meta name="description" content="快樂聯盟資管系統">
    <meta name="author" content="HANG">
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
            <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg></i>
            </a>
            <a href="index.php"><img class="brand-img pull-left" src="image/HA.png" /></a>
            <a href="index.php"><img class="brand-img pull-left" src="image/logo字.png" /></a>      
            <ul class="nav navbar-right top-nav pull-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle pr-0" data-toggle="dropdown">歡迎 <span id="username"><?php echo $_SESSION['name'] ?></span><span id="job_title"><?php echo " ".$_SESSION['job']; ?></span><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg></a>            
                       <ul class="dropdown-menu user-auth-dropdown" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                        <li>
                            <a href="#" id="Sign_out"><i><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-power" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M5.578 4.437a5 5 0 1 0 4.922.044l.5-.866a6 6 0 1 1-5.908-.053l.486.875z"/>
                            <path fill-rule="evenodd" d="M7.5 8V1h1v7h-1z"/></svg></i> 登出</a>
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
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        <li><span><a href="">個案管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>個案諮詢一覽表</span></li>
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
                <div style="zoom:75%" class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default card-view">
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <div class="text-center"><h4>查詢</h4></div>
                                            <div　class="col-sm-12" id="toolbar">
                                                <div class="col-sm-12">
                                                    <table class="table table-bordered NOline">
                                                        <tr>
                                                            <td class="text-right" style="background-color:rgb(255 201 54);">編號：</td>
                                                            <td class="text-left">
                                                                <!-- <select id="open_id" rel="0" class="filter search">
                                                                    <option value="">所有</option>
                                                                </select> -->
                                                                <input id="open_id" rel="0" class="filter search" type="text" placeholder="編號搜尋">
                                                            </td>
                                                           
                                                            <td class="text-right" style="background-color:rgb(255 201 54);">個案分級：</td>
                                                            <td class="text-left">
                                                                <select rel="2" class="filter search">
                                                                    <option value="">所有</option>
                                                                    <option value="A">A</option>
                                                                    <option value="B">B</option>
                                                                    <option value="C">C</option>
                                                                </select>
                                                            </td>
                                                            <td class="text-right" style="background-color:rgb(255 201 54)">開案日期：</td>
                                                            <td class="text-left">
                                                                <input id="min_date" rel="" name="pcall_date" class="" type="date" placeholder="開案日期搜尋">
                                                                <label>～</label>
                                                                <input id="max_date" rel="" name="pcall_date" class="" type="date" placeholder="開案日期搜尋">
                                                            </td>
                                                            <td class="text-right" style="background-color:rgb(255 201 54)">姓名：</td>
                                                            <td class="text-left"><input id="name" rel="3" name="pname" class="filter search" type="text" placeholder="姓名搜尋"></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-right" style="background-color:rgb(255 201 54)">個案屬性：</td>
                                                            <td class="text-left">
                                                                <select rel="4" class="filter search">
                                                                    <option value="">所有</option>
                                                                    <option value="家園">家園</option>
                                                                    <option value="自立宿舍">自立宿舍</option>
                                                                    <option value="社區">社區</option>
                                                                    <option value="藥癮家庭">藥癮家庭</option>
                                                                    <option value="藥癮者">藥癮者</option>
                                                                    <option value="兒少">兒少</option>
                                                                </select>
                                                            </td>
                                                            <td class="text-right" style="background-color:rgb(255 201 54)">服務對象類別：</td>
                                                            <td class="text-left">
                                                                <select rel="5" class="filter search">
                                                                    <option value="">所有</option>
                                                                    <option value="一般藥癮者">一般藥癮者</option>
                                                                    <option value="愛滋感染者">愛滋感染者</option>
                                                                    <option value="家庭">家庭</option>
                                                                    <option value="兒少">兒少</option>
                                                                </select>
                                                            </td>
                                                            <td class="text-right" style="background-color:rgb(255 201 54)">年齡：</td>
                                                            <td class="text-left">
                                                                <input rel="" id="min" name="min" class="search" type="text" placeholder="最小年齡"><label>～</label>
                                                                <input rel="" id="max" name="max" class="search" type="text" placeholder="最大年齡">
                                                            </td>
                                                            <td class="text-right" style="background-color:rgb(255 201 54)">轉介來源：</td>
                                                            <td class="text-left">
                                                                <select rel="7" class="filter search">
                                                                    <option value="">所有</option>
                                                                    <option value="醫院">醫院</option>
                                                                    <option value="矯正機關">矯正機關</option>
                                                                    <option value="自行求助">自行求助</option>
                                                                    <option value="衛政">衛政</option>
                                                                    <option value="毒防中心">毒防中心</option>
                                                                    <option value="民間社福機構">民間社福機構</option>
                                                                    <option value="警政">警政</option>
                                                                    <option value="教會">教會</option>
                                                                    <option value="社政">社政</option>
                                                                    <option value="其他">其他</option>
                                                                    <option value="社區">社區</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="8" class="text-right">
                                                                <button onclick="location.reload();">重置搜尋</button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                            <p>
                                            <div class="text-center"><h4>個案諮詢一覽表</h4></div>
                                            <div class="table-wrap">
                                                <div class="table-responsive">
                                                    <table class="table display table-hover" style="font-size:15px;font-family:微軟正黑體;width:100%" id="tab_case" data-toolbar="#toolbar">                                                       
                                                    <thead>
                                                            <tr>
                                                                <th class="text-right" colspan="15">
                                                                            <a href="add_case.php"><button style="font-size:15px" type="button" class="btn btn-default"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                                                            <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                                                            <path fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                                                                        </svg>新增</button></a>
                                                                </th>
                                                            </tr>
                                                            <tr style="background-color:rgb(255 201 54)">
                                                                <th>開案編號</th>
                                                                <th>開案日期</th>
                                                                <th>個案分級</th> 
                                                                <th>個案姓名</th>
                                                                <th>個案屬性</th>
                                                                <th>服務對象類別</th>
                                                                <th>年齡</th>
                                                                <th>轉介來源</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody style="text-align:center" id="open_case"></tbody>
                                                    </table>
                                                    <div class="text-center">
                                                        <span id="count_people"></span>
                                                        <span id="count_people2"></span>
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
    <!-- ================== case.js ================== -->
    <script src='js/current_case.js'></script>
    <!-- ================== moment ================== -->
    <script src='javascript/moment2.29.0.min.js'></script>
    <!-- ================== table ================== -->
    <script src="javascript/bootstrap1.18.0-table.min.js"></script>
    <script src="javascript/bootstrap-table1.11.1-zh-TW.min.js"></script>
</body>
</html>
