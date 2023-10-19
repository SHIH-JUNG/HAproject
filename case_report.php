<?php session_start(); ?>
<?php include("database/check_authority.php"); ?><?php include("no_cache.php"); ?>
<?php $href_name =  'page_q'; ?>
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
    <!--  日期民國  -->
    <link data-require="jqueryui@*" rel="stylesheet" href="css/jquery-ui.css" />
    <link href="css/dtsel.css" rel="stylesheet" />

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="description" content="快樂聯盟資管系統">
    <meta name="author" content="HANG">
    <title>個案管理系統</title>

    <!-- <style>
        table.dataTable thead th, table.dataTable thead td {
            border-bottom: 1px solid #111 !important;
        }
    </style> -->
</head>
<style>
.NOline
{
word-break: keep-all;/*必須*/
}
</style>

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
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        <li><span><a href="case_report.php">個案管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="case_report.php">服務報表</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>個案服務報表&服務分析表</span></li>
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
                                            <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item active" role="presentation">
                                                    <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                                        <b>個案服務報表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#two" role="tab" aria-selected="false">
                                                        <b>個案服務分析表</b>
                                                    </a>
                                                </li>
                                                <!-- <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#three" role="tab" aria-selected="false">
                                                        <b>生活品質問卷</b>
                                                    </a>
                                                </li> -->
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="table-wrap">
                                                            <div class="table-responsive">
                                                                <h4>查詢</h4>
                                                                <table style="font-size:20px;font-family:微軟正黑體;width:65%;margin: 0 auto;" class="table table-bordered NOline">
                                                                    <tr>
                                                                        <td class="text-right" style="background-color:rgb(255 201 54)">社工：</td>
                                                                        <td class="text-left">
                                                                            <select class="r_filter" id="case_assign"></select>
                                                                        </td>
                                                                        <td class="text-right" style="background-color:rgb(255 201 54)">報表日期：</td>
                                                                        <td class="text-left">
                                                                            <input name="filter_date" style="zoom: 1.5" value="0" type="radio" checked=checked>
                                                                            <input id="r_min_date" type="text" datepicker="ch_datepicker" style="width: 8em;" placeholder="報表日期搜尋"><label>～</label>
                                                                            <input id="r_max_date" type="text" datepicker="ch_datepicker" style="width: 8em;" placeholder="報表日期搜尋">
                                                                            <br/>
                                                                            <br/>
                                                                            <input name="filter_date" style="zoom: 1.5" value="1" type="radio">
                                                                            <select id="filter_date_select">
                                                                                <option value="所有資料">所有資料</option>
                                                                                <option value="本週">本週</option>
                                                                                <option value="上週">上週</option>
                                                                                <option value="本月">本月</option>
                                                                                <option value="上月">上月</option>
                                                                                <option value="本季">本季</option>
                                                                                <option value="上季">上季</option>
                                                                                <option value="距今半年">距今半年</option>
                                                                                <option value="今年">今年</option>
                                                                                <option value="去年">去年</option>
                                                                            </select>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="4" class="text-right">
                                                                            <button onclick="submit_case_report_select();">送出查詢</button>
                                                                            <button onclick="location.reload();">重置搜尋</button>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <br/>
                                                                <h4>個案服務報表</h4>
                                                                <p>
                                                                <h5 id="report_date_title">日期：-年-月-日 ~ -年-月-日</h5>
                                                                <h5 id="report_case_assign">社工：-</h5>
                                                                <table class="table display table-hover dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" name="tab_all_1" data-toolbar="#toolbar">                                                       
                                                                    <thead>
                                                                        <tr></tr>
                                                                        <tr style="background-color:rgb(255 201 54);">
                                                                            <th>開案日期</th>
                                                                            <th>案號</th>
                                                                            <th>姓名</th>
                                                                            <th>個案等級</th>
                                                                            <th>個案評估次數</th>
                                                                            <th>電訪次數</th>
                                                                            <th>家訪次數</th>
                                                                            <th>面訪次數<br/>(機構及社區)</th>
                                                                            <th>結案評估次數</th>
                                                                            <th>個案狀況</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody id="case_report1"></tbody>
                                                                </table>
                                                                <div class="text-center">
                                                                    <span class="count_people"></span>
                                                                    <span class="count_people2"></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="table-wrap">
                                                            <div class="table-responsive">
                                                                <div><h4>查詢</h4></div>
                                                                <div　class="col-sm-12" id="toolbar">
                                                                    <div class="col-sm-12">
                                                                        <table style="font-size:20px;font-family:微軟正黑體;width:100%" class="table table-bordered NOline">
                                                                            <tr>
                                                                                <td class="text-right" style="background-color:rgb(255 201 54)">年度：</td>
                                                                                <td class="text-left">
                                                                                    <select rel="0" id="years" class="filter search">
                                                                                        <!-- <option value="">所有</option> -->
                                                                                    </select>
                                                                                </td>

                                                                                <td class="text-right" style="background-color:rgb(255 201 54)">負責社工：</td>
                                                                                <td class="text-left">
                                                                                    <select rel="8" id="case_user" class="filter search">
                                                                                        <!-- <option value="">所有</option> -->
                                                                                    </select>
                                                                                </td>

                                                                                <td class="text-right" style="background-color:rgb(255 201 54);">年齡：</td>
                                                                                <td class="text-left">
                                                                                    <input id="min_age" style="width:6em;" type="number" placeholder="年齡搜尋">
                                                                                    <label>～</label>
                                                                                    <input id="max_age" style="width:6em;" type="number" placeholder="年齡搜尋">
                                                                                </td>

                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text-right" style="background-color:rgb(255 201 54)">性別：</td>
                                                                                <td class="text-left">
                                                                                    <select rel="2" id="gender" class="filter search">
                                                                                        <!-- <option value="">所有</option> -->
                                                                                        <!-- <option value="男">男</option>
                                                                                        <option value="女">女</option>
                                                                                        <option value="其他">其他</option> -->
                                                                                    </select>
                                                                                </td>

                                                                                <td class="text-right" style="background-color:rgb(255 201 54)">居住地：</td>
                                                                                <td class="text-left">
                                                                                    <select rel="3" id="address" class="filter search">
                                                                                        <!-- <option value="">所有</option> -->
                                                                                    </select>
                                                                                </td>

                                                                                <td class="text-right" style="background-color:rgb(255 201 54)">教育程度：</td>
                                                                                <td class="text-left">
                                                                                    <select rel="4" id="education" class="filter search">
                                                                                        <!-- <option value="">所有</option> -->
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                               
                                                                                <td class="text-right" style="background-color:rgb(255 201 54)">使用毒品：</td>
                                                                                <td class="text-left">
                                                                                    <!-- <input rel="5" class="filter search" type="text" placeholder="使用毒品搜尋"> -->
                                                                                    <select rel="5" id="drug_record" class="filter search">
                                                                                        <!-- <option value="">所有</option> -->
                                                                                    </select>
                                                                                </td>

                                                                                <td class="text-right" style="background-color:rgb(255 201 54)">個案來源：</td>
                                                                                <td class="text-left">
                                                                                    <select rel="6" id="referral" class="filter search">
                                                                                        <!-- <option value="">所有</option> -->
                                                                                        <!-- <option value="醫院">醫院</option>
                                                                                        <option value="矯正機關">矯正機關</option>
                                                                                        <option value="自行求助">自行求助</option>
                                                                                        <option value="衛政">衛政</option>
                                                                                        <option value="毒防中心">毒防中心</option>
                                                                                        <option value="民間社福機構">民間社福機構</option>
                                                                                        <option value="警政">警政</option>
                                                                                        <option value="教會">教會</option>
                                                                                        <option value="社政">社政</option>
                                                                                        <option value="其他">其他</option>
                                                                                        <option value="社區">社區</option> -->
                                                                                    </select>
                                                                                </td>

                                                                                <td class="text-right" style="background-color:rgb(255 201 54);">個案需求：</td>
                                                                                <td class="text-left">
                                                                                    <input id="pid" rel="7" class="filter search" style="width:10em;" type="text" placeholder="個案需求搜尋">
                                                                                </td>

                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="12" class="text-right">
                                                                                    <button onclick="location.reload();">重置搜尋</button>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <p>
                                                                <h4>個案服務分析表</h4>
                                                                <div class="table-wrap">
                                                                    <div class="table-responsive">
                                                                        <table class="table display table-hover dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" name="tab_all_2" data-toolbar="#toolbar">                                                       
                                                                            <thead>
                                                                                <tr></tr>
                                                                                <tr style="background-color:rgb(255 201 54);">
                                                                                    <th>年度</th>
                                                                                    <th>年齡</th>
                                                                                    <th>性別</th>
                                                                                    <th>居住地</th>
                                                                                    <th>教育程度</th>
                                                                                    <th>使用毒品</th>
                                                                                    <th>個案來源</th>
                                                                                    <th>個案需求</th>
                                                                                    <th>社工</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody id="case_report2"></tbody>
                                                                        </table>
                                                                        <div class="text-center">
                                                                            <span class="count_people"></span>
                                                                            <span class="count_people2"></span>
                                                                        </div>
                                                                    
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- <div class="tab-pane fade" id="three" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="col-sm-12 text-center">
                                                        
                                                    </div>
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
    <script src='js/case_report.js<?php echo "?".date("Y-m-d h:i:sa")?>'></script>
    <!-- ================== moment ================== -->
    <script src='javascript/moment2.29.0.min.js'></script>
    <!-- ================== table ================== -->
    <script src="javascript/bootstrap1.18.0-table.min.js"></script>
    <script src="javascript/bootstrap-table1.11.1-zh-TW.min.js"></script>
    <!-- 日期民國-->
    <script src="javascript/jquery-ui.min.js"></script>
    <script src="javascript/datepickerTw2.js"></script>
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
