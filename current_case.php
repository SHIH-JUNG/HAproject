<?php session_start(); ?>
<?php include("database/check_authority.php"); ?><?php include("no_cache.php"); ?>
<?php $href_name =  'page_n1'; ?>
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
    <!-- ================== CSS font-awesome ================== -->
    <link href="font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" />
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
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        <li><span><a href="">個案管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="">開案管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="current_case.php">開案個案</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>開案個案一覽表</span></li>
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
                                                            <td class="text-right" style="background-color:rgb(255 201 54);">開案編號：</td>
                                                            <td class="text-left">
                                                                <!-- <select id="open_id" rel="0" class="filter search">
                                                                    <option value="">所有</option>
                                                                </select> -->
                                                                <input id="open_id" rel="0" class="filter search" style="width:8em;" type="text" placeholder="編號搜尋">
                                                            </td>
                                                            <td class="text-right" style="background-color:rgb(255 201 54)">姓名：</td>
                                                            <td class="text-left"><input id="name" rel="1" name="pname" class="filter search"  style="width:7em;" type="text" placeholder="姓名搜尋"></td>
                                                            <td class="text-right" style="background-color:rgb(255 201 54)">個案分級：</td>
                                                            <td class="text-left">
                                                                <select rel="4" class="filter search">
                                                                    <option value="">所有</option>
                                                                    <option value="A">A</option>
                                                                    <option value="B">B</option>
                                                                    <option value="C">C</option>
                                                                </select>
                                                            </td>
                                                            <td class="text-right" style="background-color:rgb(255 201 54)">登入日期：</td>
                                                            <td class="text-left">
                                                                <input id="c_min_date" rel="" name="c_date" class="" type="date" placeholder="登入日期搜尋">
                                                                <label>～</label>
                                                                <input id="c_max_date" rel="" name="c_date" class="" type="date" placeholder="登入日期搜尋">
                                                            </td>

                                                            <td class="text-right" style="background-color:rgb(255 201 54);">身分證字號：</td>
                                                            <td class="text-left">
                                                                <input id="pid" rel="10" class="filter search" style="width:9em;" type="text" placeholder="身分證字號搜尋">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-right" style="background-color:rgb(255 201 54)">類別屬性：</td>
                                                            <td class="text-left">
                                                                <select rel="5" class="filter search">
                                                                    <option value="">所有</option>
                                                                    <option value="安置家園">安置家園</option>
                                                                    <option value="自立宿舍">自立宿舍</option>
                                                                    <option value="社區">社區</option>
                                                                    <option value="藥癮家庭">藥癮家庭</option>
                                                                    <option value="藥癮者">藥癮者</option>
                                                                    <option value="親子教育">親子教育</option>
                                                                </select>
                                                            </td>
                                                            <td class="text-right" style="background-color:rgb(255 201 54)">個案類別：</td>
                                                            <td class="text-left">
                                                                <select rel="3" class="filter search">
                                                                    <option value="">所有</option>
                                                                    <option value="愛滋感染者">愛滋感染者</option>
                                                                    <option value="一般藥癮者">一般藥癮者</option>
                                                                    <option value="藥癮家庭">藥癮家庭</option>
                                                                    <option value="親職兒少">親職兒少</option>
                                                                </select>
                                                            </td>
                                                            <td class="text-right" style="background-color:rgb(255 201 54)">轉介來源：</td>
                                                            <td class="text-left">
                                                                <select rel="11" class="filter search">
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
                                                            <td class="text-right" style="background-color:rgb(255 201 54)">開案日期：</td>
                                                            <td class="text-left">
                                                                <input id="o_min_date" rel="" name="o_date" class="" type="date" placeholder="開案日期搜尋">
                                                                <label>～</label>
                                                                <input id="o_max_date" rel="" name="o_date" class="" type="date" placeholder="開案日期搜尋">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="10" class="text-right">
                                                                <button onclick="location.reload();">重置搜尋</button>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                            <p>
                                            <div class="text-center"><h4>開案個案一覽表</h4></div>
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
                                                                <th>姓名</th>
                                                                <th>登入日期</th>
                                                                <th>個案類別</th>
                                                                <th>個案分級</th> 
                                                                <th>類別屬性</th>
                                                                <th>類別屬性<br/>階段</th>
                                                                <th>開案日期</th>
                                                                <th>電話</th>
                                                                <th>出生年月日</th>
                                                                <th>身分證字號</th>
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
    <script src='js/current_case.js<?php echo "?".date("Y-m-d h:i:sa")?>'></script>
    <!-- ================== moment ================== -->
    <script src='javascript/moment2.29.0.min.js'></script>
    <!-- ================== table ================== -->
    <script src="javascript/bootstrap1.18.0-table.min.js"></script>
    <script src="javascript/bootstrap-table1.11.1-zh-TW.min.js"></script>
</body>
</html>
<?php include("database/timeout_logout.php"); ?>
