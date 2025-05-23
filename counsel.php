<?php session_start(); ?>
<?php $href_name =  'page_l'; ?>
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
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="description" content="快樂聯盟資管系統">
    <meta name="author" content="HANG">
    <title>個案管理系統</title>
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
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="counsel.php">個案管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="counsel.php">未開案管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="counsel.php">監所服務</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>監所服務一覽表</span></li>
                    </ol>
                    <!--/麵包屑-->
                </div>
                <!-- /Title -->
                <!-- Footer -->
                <footer class="footer container-fluid pl-30 pr-30">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <p>Copyright &copy; 台灣世界快樂聯盟</p>
                            <span style="display:none" id="counter"></span>
                        </div>
                    </div>
                </footer>
                <!-- /Footer -->
                <!-- /Title -->
                <!---Table--->
                <div style="zoom:75%" class="row text-center">
                    <div class="col-md-12">
                        <div class="panel panel-default card-view">
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <div><h4>查詢</h4></div>
                                            <div　class="col-sm-12" id="toolbar">
                                                <div class="col-sm-12">
                                                    <table style="font-size:20px;font-family:微軟正黑體;width:100%" class="table table-bordered NOline">
                                                        <tr>
                                                            <td class="text-right" style="background-color:rgb(255 201 54);">矯正機關：</td>
                                                            <td class="text-left">
                                                                    <select rel="0" class="filter search" style="width:6.5em;">
                                                                        <option value="">所有</option>
                                                                        <option value="台南監獄">台南監獄</option>
                                                                        <option value="台南看守所">台南看守所</option>
                                                                        <option value="高雄監獄">高雄監獄</option>
                                                                        <option value="高雄二監">高雄二監</option>
                                                                        <option value="高雄女監">高雄女監</option>
                                                                        <option value="屏東監獄">屏東監獄</option>
                                                                        <option value="屏東看守所">屏東看守所</option>
                                                                    </select>
                                                            </td>
                                                           
                                                            <td class="text-right" style="background-color:rgb(255 201 54)">姓名：</td>
                                                            <td class="text-left"><input id="name" rel="2" class="filter search" type="text" placeholder="姓名搜尋"></td>
                                                            
                                                            <td class="text-right" style="background-color:rgb(255 201 54)">緊急聯絡人：</td>
                                                            <td class="text-left"><input id="info_name" rel="6" class="filter search" type="text" placeholder="緊急聯絡人搜尋"></td>

                                                            <td class="text-right" style="background-color:rgb(255 201 54)">性別：</td>
                                                            <td class="text-left">
                                                                <select rel="3" class="filter search">
                                                                    <option value="">所有</option>
                                                                    <option value="男">男</option>
                                                                    <option value="女">女</option>
                                                                    <option value="其他">其他</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-right" style="background-color:rgb(255 201 54);">呼號：</td>
                                                            <td class="text-left">
                                                                <!-- <select id="counsel_id" rel="1" class="filter search">
                                                                    <option value="">所有</option>
                                                                </select> -->
                                                                <input id="counsel_id" rel="1" class="filter search" style="width:6em;" type="text" placeholder="呼號搜尋">
                                                            </td>

                                                            <td class="text-right" style="background-color:rgb(255 201 54)">出生年月日：</td>
                                                            <td class="text-left">
                                                                <input id="birth_min_date" rel="" type="text" name="ch_datepicker" style="width: 8em;" placeholder="出生年月日搜尋"><label>～</label>
                                                                <input id="birth_max_date" rel="" type="text" name="ch_datepicker" style="width: 8em;" placeholder="出生年月日搜尋">
                                                            </td>

                                                            <td class="text-right" style="background-color:rgb(255 201 54)">診斷出HIV(+)時間：</td>
                                                            <td class="text-left">
                                                                <input id="HIV_min_date" rel="" type="text" name="ch_datepicker" style="width: 11em;" placeholder="診斷出HIV(+)時間搜尋"><label>～</label>
                                                                <input id="HIV_max_date" rel="" type="text" name="ch_datepicker" style="width: 11em;" placeholder="診斷出HIV(+)時間搜尋">
                                                            </td>

                                                            <td class="text-right" style="background-color:rgb(255 201 54)">雞尾酒療法服藥狀況：</td>
                                                            <td class="text-left">
                                                                <select rel="13" class="filter search">
                                                                    <option value="">所有</option>
                                                                    <option value="是">是</option>
                                                                    <option value="否">否</option>
                                                                </select>
                                                            </td>
                                                            
                                                        </tr>
                                                        <tr>
                                                            <td class="text-right" style="background-color:rgb(255 201 54)">是否假釋出監：</td>
                                                            <td class="text-left">
                                                                <select rel="10" class="filter search">
                                                                    <option value="">所有</option>
                                                                    <option value="是">是</option>
                                                                    <option value="否">否</option>
                                                                </select>
                                                            </td>

                                                            <td class="text-right" style="background-color:rgb(255 201 54)">出獄時期：</td>
                                                            <td class="text-left">
                                                                <input id="out_prison_min_date" rel="" type="text" name="ch_datepicker" style="width: 7em;" placeholder="出獄時期搜尋"><label>～</label>
                                                                <input id="out_prison_max_date" rel="" type="text" name="ch_datepicker" style="width: 7em;" placeholder="出獄時期搜尋">
                                                            </td>

                                                            <td class="text-right" style="background-color:rgb(255 201 54)">入獄日期：</td>
                                                            <td class="text-left">
                                                                <input id="in_prison_min_date" rel="" type="text" name="ch_datepicker" style="width: 7em;" placeholder="入獄時期搜尋"><label>～</label>
                                                                <input id="in_prison_max_date" rel="" type="text" name="ch_datepicker" style="width: 7em;" placeholder="入獄時期搜尋">
                                                            </td>

                                                            <td class="text-right" style="background-color:rgb(255 201 54)">家人是否知道感染：</td>
                                                            <td class="text-left">
                                                                <select rel="12" class="filter search">
                                                                    <option value="">所有</option>
                                                                    <option value="是">是</option>
                                                                    <option value="否">否</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="8" class="text-right">
                                                                <button onclick="location.reload();">重置搜尋</button><span> </span> 
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                            <p>
                                            <h4>監所服務一覽表</h4>
                                            <div class="table-wrap">
                                                <div class="table-responsive">
                                                    <table class="table display table-hover dataTable no-footer" style="font-size:15px;font-family:微軟正黑體;width:100%" id="tab_all" data-toolbar="#toolbar">                                                       
                                                        <thead>
                                                            <tr>
                                                                <th class="text-right" colspan="15">
                                                                           <a href="add_counsel.php"><button style="font-size:15px" type="button" class="btn btn-default"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                                                            <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                                                            <path fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                                                                        </svg>新增</button></a>
                                                                </th>
                                                            </tr>
                                                            <tr style="background-color:rgb(255 201 54);">
                                                                <th>矯正機關</th>
                                                                <th>呼號</th>
                                                                <th>姓名</th>
                                                                <th>性別</th>
                                                                <th>出生年月日</th>
                                                                <th>身分證字號</th>
                                                                <th>緊急聯絡人</th>
                                                                <th>緊急聯絡電話</th>
                                                                <th>第一次入獄時間</th>
                                                                <th>第一次出獄時間</th>
                                                                <th>是否假釋出監</th>
                                                                <th>診斷出HIV(+)時間</th>
                                                                <th>家人是否知道感染</th>
                                                                <th>雞尾酒療法服藥狀況</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="call_view"></tbody>
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
                <!---/Table--->
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
    <!-- ================== moment ================== -->
    <script src='javascript/moment2.29.0.min.js'></script>
    <!-- ================== table ================== -->
    <script src="javascript/bootstrap1.18.0-table.min.js"></script>
    <script src="javascript/bootstrap-table1.11.1-zh-TW.min.js"></script>
    <!-- 日期民國-->
    <script src="javascript/jquery-ui.min.js"></script>
    <script src="javascript/datepickerTw.js"></script>
    <!-- ================== counsel ================== -->
    <script type="text/javascript" src="js/counsel.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>
    <!-- ================== 地區選擇下拉 ================== -->
    <!--
    <script src="js/jQuery-TWzipcode-master/twzipcode.js"></script>
    <script src="js/jQuery-TWzipcode-master/jquery.twzipcode.js"></script>
    <script src="js/jQuery-TWzipcode-master/jquery.twzipcode.min.js"></script>
-->
</body>
<script>
    //$("#twzipcode").twzipcode({
    //    css: ['col-sm-12',],
    //});
    //$.fn.dataTable.ext.classes.sPageButton = 'btn btn-primary'; // Change Pagination Button Class

</script>

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
