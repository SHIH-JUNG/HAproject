<?php session_start(); ?>
<?php include("database/check_authority.php"); ?><?php include("no_cache.php"); ?>
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
                        <li><span>新增監所服務資料</span></li>
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
                                                        <table style="width:55%;" class="table table-bordered">
                                                            <tr>
                                                                <td colspan="2">
                                                                    <h3>新增監所服務資料</h3>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>矯正機關</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <select id="refferal" style="width:200px;">
                                                                        <option value="">請選擇</option>
                                                                        <option value="台南監獄">台南監獄</option>
                                                                        <option value="台南看守所">台南看守所</option>
                                                                        <option value="高雄監獄">高雄監獄</option>
                                                                        <option value="高雄二監">高雄二監</option>
                                                                        <option value="高雄女監">高雄女監</option>
                                                                        <option value="屏東監獄">屏東監獄</option>
                                                                        <option value="屏東看守所">屏東看守所</option>
                                                                    </select>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width:25%;"><i style="color:red;">※</i>呼號</td>
                                                                <td style="border-bottom: solid 1px;"><input id="t_sn" type="text"></td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>姓名</td>
                                                                <td style="border-bottom: solid 1px;"><input id="name" type="text"></td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">性別</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <select id="gender" style="width:200px;">
                                                                        <option value="">請選擇</option>
                                                                        <option value="男">男</option>
                                                                        <option value="女">女</option>
                                                                        <option value="其他">其他</option>
                                                                    </select>
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">性別傾向</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <select id="sexual_orientation" style="width:200px;">
                                                                        <option value="">請選擇</option>
                                                                        <option value="同性">同性</option>
                                                                        <option value="異性">異性</option>
                                                                        <option value="雙性">雙性</option>
                                                                    </select>
                                                                </td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>出生年月日</td>
                                                                <td style="border-bottom: solid 1px;"><input id="birth" name="ch_datepicker" type="text"></td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>身分證字號</td>
                                                                <td style="border-bottom: solid 1px;"><input id="pid" type="text"></td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">緊急聯絡人</td>
                                                                <td style="border-bottom: solid 1px;"><input id="info_name" type="text"></td>
                                                            </tr>
                                                          
                                                            
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">緊急聯絡電話</td>
                                                                <td style="border-bottom: solid 1px;"><input id="info_phone" type="number" max="14"></td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">入監前居住地</td>
                                                                <td style="border-bottom: solid 1px;"><input style="width:85%;" id="address" type="text" max="14"></td>
                                                            </tr>
                                                           
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第一次入獄時間</td>
                                                                <td style="border-bottom: solid 1px;"><input id="in_prison_date" name="ch_datepicker" type="text"></td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第一次出獄時間</td>
                                                                <td style="border-bottom: solid 1px;"><input id="out_prison_date" name="ch_datepicker" type="text"></td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第二次入獄時間</td>
                                                                <td style="border-bottom: solid 1px;"><input id="in_prison_date_2nd" name="ch_datepicker" type="text"></td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第二次出獄時間</td>
                                                                <td style="border-bottom: solid 1px;"><input id="out_prison_date_2nd" name="ch_datepicker" type="text"></td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第三次入獄時間</td>
                                                                <td style="border-bottom: solid 1px;"><input id="in_prison_date_3rd" name="ch_datepicker" type="text"></td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第三次出獄時間</td>
                                                                <td style="border-bottom: solid 1px;"><input id="out_prison_date_3rd" name="ch_datepicker" type="text"></td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">是否假釋出監</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <select id="is_parole" style="width:200px;">
                                                                        <option value="">請選擇</option>
                                                                        <option value="是">是</option>
                                                                        <option value="否">否</option>
                                                                    </select>
                                                                </td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">診斷出HIV(+)時間</td>
                                                                <td style="border-bottom: solid 1px;"><input id="HIV_diagnosis_date" name="ch_datepicker" type="text"></td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">家人是否知道感染</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <select id="family_know" style="width:200px;">
                                                                        <option value="">請選擇</option>
                                                                        <option value="是">是</option>
                                                                        <option value="否">否</option>
                                                                    </select>
                                                                </td>
                                                            </tr>

                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">雞尾酒療法服藥狀況</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <select id="cocktail_therapy_status" style="width:200px;">
                                                                        <option value="">請選擇</option>
                                                                        <option value="是">是</option>
                                                                        <option value="否">否</option>
                                                                    </select>

                                                                    <input id="cocktail_therapy_name" type="text">
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;">檔案上傳</td>
                                                                <td style="border-bottom: solid 1px;">
                                                                    <div class="col-sm-12">
                                                                        <div class="text-left">
                                                                            <input name="upload_file" type="file" class="form-control" />
                                                                            <br>
                                                                            <div id="upload_file"></div>
                                                                        </div>
                                                                    </div>    
                                                                </td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;">第一次訪談時間</td>
                                                                <td style="border-bottom: solid 1px;"><input id="interview_date_1st" name="ch_datepicker" type="text"></td>
                                                            </tr>
                                                            <!-- <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第二次訪談時間</td>
                                                                <td style="border-bottom: solid 1px;"><input id="interview_date_2nd" type="text"></td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第三次訪談時間</td>
                                                                <td style="border-bottom: solid 1px;"><input id="interview_date_3rd" type="text"></td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第四次訪談時間</td>
                                                                <td style="border-bottom: solid 1px;"><input id="interview_date_4th" type="text"></td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第五次訪談時間</td>
                                                                <td style="border-bottom: solid 1px;"><input id="interview_date_5th" type="text"></td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第六次訪談時間</td>
                                                                <td style="border-bottom: solid 1px;"><input id="interview_date_6th" type="text"></td>
                                                            </tr>
                                                            <tr style="text-align:left">
                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第七次訪談時間</td>
                                                                <td style="border-bottom: solid 1px;"><input id="interview_date_7th" type="text"></td>
                                                            </tr> -->
                                                        </table>
                                                    </div>
                                                </div>
                                                <br>
                                                <button id="counsel_add_new" style="font-size:15px" type="button" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                                                        <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                    </svg>新增</button>
                                                <a href="counsel.php"><button style="font-size:15px" type="button" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-excel" viewBox="0 0 16 16">
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
    <script src="javascript/datepickerTw.js"></script>

    <!-- ================== add_counsel.js ================== -->
    <script src="js/add_counsel.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>

   
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
