<?php session_start(); ?>
<?php include("database/check_authority.php"); ?><?php include("no_cache.php"); ?>
<?php $href_name =  'page_p1'; ?>
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

#dlgrec_tab tbody tr td textarea
{
    width:85%;
    /* border: none; */
    min-height:6em;
    overflow: auto;
}
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
                        <li><span><a href="dlgrec.php">個案管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="dlgrec.php">安置中心生輔紀錄</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="dlgrec.php">生輔紀錄</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>新增每日生活輔導紀錄表</span></li>
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
                                                        <table style="width:75%;" class="table table-bordered" id="dlgrec_tab">
                                                            <tr>
                                                                <td colspan="2">
                                                                    <h3>新增每日生活輔導紀錄表</h3>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td colspan="2" style="border-bottom: solid 1px;">
                                                                    <label for="bf_num">早餐：</label><input style="width:3.5em;" id="bf_num" type="number">人、
                                                                    <label for="al_num">午餐：</label><input style="width:3.5em;" id="al_num" type="number">人、
                                                                    <label for="em_num">晚餐：</label><input style="width:3.5em;" id="em_num" type="number">人，
                                                                    <label for="lp_num">當日入住人數：</label><input style="width:3.5em;" id="lp_num" type="number">人、
                                                                    <label for="leave_num">請假：</label><input style="width:3.5em;" id="leave_num" type="number">人<br/><br/>
                                                                    <label for="dlgrec_date">日期：</label><input style="width:9em;" id="dlgrec_date" type="date">
                                                                </td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">檔案上傳</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <div class="col-sm-8">
                                                                        <div class="text-left">
                                                                            <input name="dlgrec_file" type="file" class="form-control" />
                                                                            <br>
                                                                            <div id="dlgrec_file"></div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width: 10em;">時間</td>
                                                                <td style="text-align:center;background-color:rgb(255 201 54);">輔導內容:生活、輔導、職訓及相關事宜</td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">8:30<br/>9:30</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                <textarea id="dlgrec_0" name="dlgrec_textarea" placeholder="請輸入內容" contenteditable="true"></textarea>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">9:30<br/>10:30</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                <textarea id="dlgrec_1" name="dlgrec_textarea" placeholder="請輸入內容" contenteditable="true"></textarea>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">10:30<br/>11:30</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                <textarea id="dlgrec_2" name="dlgrec_textarea" placeholder="請輸入內容" contenteditable="true"></textarea>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">11:30<br/>12:30</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                <textarea id="dlgrec_3" name="dlgrec_textarea" placeholder="請輸入內容" contenteditable="true"></textarea>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">12:30<br/>13:30</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                <textarea id="dlgrec_4" name="dlgrec_textarea" placeholder="請輸入內容" contenteditable="true"></textarea>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">13:30<br/>14:30</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                <textarea id="dlgrec_5" name="dlgrec_textarea" placeholder="請輸入內容" contenteditable="true"></textarea>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">14:30<br/>15:30</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                <textarea id="dlgrec_6" name="dlgrec_textarea" placeholder="請輸入內容" contenteditable="true"></textarea>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">15:30<br/>18:00</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                <textarea id="dlgrec_7" name="dlgrec_textarea" placeholder="請輸入內容" contenteditable="true"></textarea>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">特殊個案反應情形輔導處理</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                <textarea id="dlgrec_8" name="dlgrec_textarea" placeholder="請輸入特殊個案反應情形輔導處理" contenteditable="true"></textarea>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">輔導諮詢執行實況</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                <textarea id="dlgrec_9" name="dlgrec_textarea" placeholder="請輸入輔導諮詢執行實況" contenteditable="true"></textarea>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">問題處遇概況</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                <textarea id="dlgrec_10" name="dlgrec_textarea" placeholder="請輸入問題處遇概況" contenteditable="true"></textarea>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">備註</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                <textarea id="dlgrec_11" name="dlgrec_textarea" placeholder="請輸入備註" contenteditable="true"></textarea>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td colspan="2" style="border-bottom: solid 1px;">
                                                                    <label for="dlg_manager">管理員/生活輔導員：</label>
                                                                    <input style="width:10em;" id="dlg_manager" type="text">

                                                                    <label for="social_worker">社工員：</label>
                                                                    <!-- <input style="width:10em;" id="social_worker" type="text"> -->
                                                                    <select name="social_worker" id="social_worker" style="width:10em;">
                                                                        <option value="">請選擇</option>
                                                                    </select>

                                                                    <label for="supervise1">督導：</label>
                                                                    <!-- <input style="width:10em;" id="supervise1" type="text"> -->
                                                                    <select name="supervise1" id="supervise1" style="width:10em;">
                                                                        <option value="">請選擇</option>
                                                                    </select>

                                                                    <label for="supervise2">執行長：</label>
                                                                    <!-- <input style="width:10em;" id="supervise2" type="text"> -->
                                                                    <select name="supervise2" id="supervise2" style="width:10em;">
                                                                        <option value="">請選擇</option>
                                                                    </select>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                                <br>
                                                <button id="dlgrec_add_new" style="font-size:15px" type="button" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                                                        <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                    </svg>新增</button>
                                                <a href="dlgrec.php"><button style="font-size:15px" type="button" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-excel" viewBox="0 0 16 16">
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
    <!-- ================== add_dlgrec.js ================== -->
    <script src="js/add_dlgrec_2.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>
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
