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
                        <li><span><a href="day_off.php">員工管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="day_off.php">請假系統</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>新增請假</span></li>
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
                                                        <table style="width:75%;" class="table table-bordered">
                                                            <tr>
                                                                <td colspan="2">
                                                                    <h3>新增請假</h3>
                                                                </td>
                                                            </tr>
                                                            <!-- <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>姓名</td>
                                                                <td style="border-bottom: solid 1px;"><input id="name" type="text"></td>
                                                            </tr> -->
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width: 5em;"><i class="fillin_need" style="color:red;">※</i>假別</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <input name="day_off_type" style="zoom: 1.5" value="事假" type="radio"><span>事假</span>
                                                                    <input name="day_off_type" style="zoom: 1.5" value="病假" type="radio"><span>病假</span>
                                                                    <input name="day_off_type" style="zoom: 1.5" value="公假" type="radio"><span>公假</span>
                                                                    <input name="day_off_type" style="zoom: 1.5" value="補休" type="radio"><span>補休</span>
                                                                    <input name="day_off_type" style="zoom: 1.5" value="娩假" type="radio"><span>娩假</span>
                                                                    <input name="day_off_type" style="zoom: 1.5" value="陪產假" type="radio"><span>陪產假</span>
                                                                    <input name="day_off_type" style="zoom: 1.5" value="流產假" type="radio"><span>流產假</span><br/>

                                                                    <input name="day_off_type" style="zoom: 1.5" value="產前假" type="radio"><span>產前假</span>
                                                                    <input name="day_off_type" style="zoom: 1.5" value="家庭照顧假" type="radio"><span>家庭照顧假</span>
                                                                    <input name="day_off_type" style="zoom: 1.5" value="延長病假" type="radio"><span>延長病假</span>
                                                                    <input name="day_off_type" style="zoom: 1.5" value="婚假" type="radio"><span>婚假</span>
                                                                    <input name="day_off_type" style="zoom: 1.5" value="生理假" type="radio"><span>生理假</span>
                                                                    <input name="day_off_type" style="zoom: 1.5" value="喪假" type="radio"><span>喪假</span>
                                                                    <input name="day_off_type" style="zoom: 1.5" value="慰假假" type="radio"><span>慰假假</span><br/>
                                                                    <input name="day_off_type" style="zoom: 1.5" value="其它" type="radio"><span>其它：</span>
                                                                    <input name="day_off_type_other" type="text" style="width:35%;">
                                                                </td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">附件</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <input name="day_off_files" type="file" class="form-control" />
                                                                    <br>
                                                                    <div id="day_off_files"></div>
                                                                </td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>請假<br/>事由</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <textarea style="width:75%;resize: none;font-size: 20px;min-height:8em;" id="reason" placeholder="請假事由"></textarea>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>請假<br/>日期</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    自&emsp;<input id="overtime_date_start" name="ch_datepicker" type="text" overtime="overtime"><input style="margin-left: 1em;" id="overtime_time_start"  type="time" overtime="overtime"><br/><br/>至&emsp;
                                                                    <input id="overtime_date_end" name="ch_datepicker" type="text" overtime="overtime"><input style="margin-left: 1em;" id="overtime_time_end"  type="time" overtime="overtime">&emsp;止 
                                                                    <button style="margin:.5em;margin-left:1em;color:blue;" type="button" onclick="reset_count_hours();">重製</button>
                                                                    <br/><br/>
                                                                    <div id="overtime_hours_count" style="color:red;">
                                                                        請假時數：共0日0時
                                                                    </div>
                                                                    <div id="overtime_hours_hit" style="color:blue;">
                                                                        <!-- 剩餘補休時數：
                                                                        剩餘特休時數：
                                                                        已使用的補休時數：
                                                                        已使用的特休時數： -->
                                                                    </div>
                                                                    <!-- <div id="makeup_date_detail">
                                                                        已使用的日期及時數：

                                                                    </div> -->
                                                                </td>
                                                            </tr>                                                            

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 0 0);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>職務<br/>代理人</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <div class="col-sm-3">
                                                                        <select name="job_agent" id="job_agent" style="width:100%;">
                                                                            <option value="">請選擇</option>
                                                                        </select>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 0 0);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>主管</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <div class="col-sm-3">
                                                                        <select name="supervise" id="supervise" style="width:100%;">
                                                                            <option value="">請選擇</option>
                                                                        </select>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">請假<br/>說明</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <div>
                                                                        <div style="padding-left: 2em;text-indent: -2em;">
                                                                            一、假別請以打勾方式標明，請假(事、公或休假)應於三天前填具假單，經核准後，始得離開任所，但有急病或緊急事故，得請同事或家屬代辦或補辦請假手續。<br/>
                                                                        </div>
                                                                        <div style="padding-left: 2em;text-indent: -2em;">
                                                                            二、請假者需經職務代理人簽名。<br/>
                                                                        </div>
                                                                        <div style="padding-left: 2em;text-indent: -2em;">
                                                                            三、應附證明：<br/>
                                                                                公假=核准公文、簽呈影本；公傷假=醫師證明、核准簽呈；病假=三日以上醫師證明；婚假=喜帖；娩假、陪產假=嬰兒出生證明；流產假=醫師證明；喪假=訃文；其他未載明事項，依據相關規定辦理。<br/>
                                                                        </div>
                                                                        <div style="padding-left: 2em;text-indent: -2em;">
                                                                            四、本請假單經核示後，正本及相關附件由本機構存留。
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                                <br>
                                                <button id="day_off_add_new" style="font-size:15px" type="button" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                                                        <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                    </svg>新增</button>
                                                <a href="javascript:history.back()"><button style="font-size:15px" type="button" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-excel" viewBox="0 0 16 16">
                                                            <path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z" />
                                                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                        </svg>取消</button></a>
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
    <!-- ================== moment ================== -->
    <script src='javascript/moment2.29.0.min.js'></script>
    <!-- ================== table ================== -->
    <script src="javascript/bootstrap1.18.0-table.min.js"></script>
    <script src="javascript/bootstrap-table1.11.1-zh-TW.min.js"></script>
    <!-- 日期民國-->
    <script src="javascript/jquery-ui.min.js"></script>
    <script src="javascript/datepickerTw2.js"></script>
    <!-- ================== add_phone.js ================== -->
    <script src="js/add_day_off.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>
</body>

</html>
<?php include("database/timeout_logout.php"); ?>
