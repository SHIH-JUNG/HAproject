<?php session_start(); ?>
<?php include("database/check_authority.php"); ?><?php include("no_cache.php"); ?>
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
                    <li><span><a href="index.php">首頁</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="current_case.php">個案管理</a></span></li>
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
                        <li><span><a href="current_case.php">開案個案一覽表</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a id="history2" href="">個案紀錄</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a id="history" href="">個案服務摘要表</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="javascript:history.back()">個案評估表</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>新增個案結案表</span></li>
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
                                                                    <h3>新增個案結案表</h3>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">開案案號</td>
                                                                <td style=""><span id="open_case_id"></span></td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>結案案號</td>
                                                                <td style=""><input id="closed_id" type="text"></td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>姓名</td>
                                                                <td style="border-bottom: solid 1px;"><input id="name" type="text" oninput="value=value.replace(/[\d]/g,'')" disabled="disabled"></td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>性別</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <select id="gender" style="width:200px;" disabled="disabled">
                                                                        <option value="">請選擇</option>
                                                                        <option value="男">男</option>
                                                                        <option value="女">女</option>
                                                                        <option value="其他/非二元性別">其他/非二元性別</option>
                                                                    </select>
                                                                </td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width:10em;"><i style="color:red;">※</i>開案日期</td>
                                                                <td style="border-bottom: solid 1px;"><input id="open_date" type="date" disabled="disabled"></td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width:10em;"><i style="color:red;">※</i>結案日期</td>
                                                                <td style="border-bottom: solid 1px;"><input id="closed_date" type="date"></td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white"><i style="color:red;">※</i>主要問題</td>
                                                                <td>
                                                                    <textarea style="min-height:200px;width:75%;resize: none;font-size: 20px;" name="main_issue" id="main_issue" placeholder="請輸入主要問題"></textarea>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white"><i style="color:red;">※</i>問題處遇</td>
                                                                <td>
                                                                    <textarea style="min-height:200px;width:75%;resize: none;font-size: 20px;" name="intervention" id="intervention" placeholder="請輸入問題處遇"></textarea>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>結案原因</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <input name="closed_reason" style="zoom: 1.5" type="radio" value="達到目標，已無需要在服務"><label class="link_label_closed_reason">達到目標，已無需要在服務</label>
                                                                    <input name="closed_reason" style="zoom: 1.5" type="radio" value="穩定就業三個月，以達到目標"><label class="link_label_closed_reason">穩定就業三個月，以達到目標</label>
                                                                    <input name="closed_reason" style="zoom: 1.5" type="radio" value="個案者死亡"><label class="link_label_closed_reason">個案者死亡</label>
                                                                    <input name="closed_reason" style="zoom: 1.5" type="radio" value="再次入監無法合作"><label class="link_label_closed_reason">再次入監無法合作</label>
                                                                    <input name="closed_reason" style="zoom: 1.5" type="radio" value="無意願接受服務"><label class="link_label_closed_reason">無意願接受服務</label><br/>
                                                                    <input name="closed_reason" style="zoom: 1.5" type="radio" value="失去聯絡（一個月連繫三次均聯繫不上或三個月，每月連繫三次均聯繫不上）"><label class="link_label_closed_reason">失去聯絡（一個月連繫三次均聯繫不上或三個月，每月連繫三次均聯繫不上）</label>
                                                                    <input name="closed_reason" style="zoom: 1.5" type="radio" value="轉介其他資源單位，並且已達處遇目標"><label class="link_label_closed_reason">轉介其他資源單位，並且已達處遇目標。</label>
                                                                    <div>
                                                                        <input name="closed_reason" style="zoom: 1.5" type="radio" value="other"><label>其他</label>
                                                                        <input id="closed_reason_other" style="width:75%;" type="text">
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">備註</td>
                                                                <td>
                                                                    <textarea style="height:150px;width:75%;resize: none;font-size: 20px;" name="remark" id="remark" placeholder="請輸入備註"></textarea>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>社工員</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <select id="user" style="width:160px;">
                                                                        <!-- <option value="">請選擇</option> -->
                                                                    </select>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                                <br>
                                                <button id="trans_closed" style="font-size:15px" type="button" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
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

    <script>
        //設定js變數抓取使用者名稱
        assign_name = '<?php echo $_SESSION["name"]; ?>';
    </script>
    <!-- ================== trans_closed.js ================== -->
    <script src="js/trans_closed.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>
</body>

</html>
<?php include("database/timeout_logout.php"); ?>
