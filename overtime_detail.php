<?php session_start(); ?>
<?php include("database/check_authority.php"); ?> <?php include("no_cache.php"); ?>
<?php $href_name =  'page_f'; ?>
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
<style>
    table {
        margin-left: auto;
        margin-right: auto;
    }

    .scr_container {
        width: 100%;
        overflow: auto;
        margin: 0 auto;
    }

    .NOline {
        word-break: keep-all;
        /*必須*/
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


    .panel-body.scr_container {
        padding: 0;
        padding-top: 15px;
    }

    /*轉案鍵css*/
    button#revoke_btn
    {
    background-color: tomato;
    color: white !important;
    font-weight: bold;
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
                        <li><span><a href="overtime.php">行政管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="overtime.php">員工管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="overtime.php">加班系統</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="overtime.php">員工加班紀錄一覽表</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        
                        <li><span>員工加班紀錄詳細資料</span></li>
                    </ol>
                    <!--/麵包屑-->
                </div>
                <!-- /Title -->
                <!-- Footer -->
                <footer class="footer container-fluid pl-30 pr-30">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <p>Copyright &copy; 台灣世界快樂聯盟</p>
                        </div>
                    </div>
                </footer>
                <!-- /Footer -->
                <!-- /Title -->
                <!---Table--->
                <div style="zoom:80%" class="row text-center">
                    <div class="col-sm-12">
                        <div class="panel panel-default panel-view">
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-sm-12 col-xs-12">
                                            <div class="col-sm-12">
                                                <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                                    <li class="nav-item active" role="presentation">
                                                        <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                                            <b>員工加班紀錄詳細資料</b>
                                                        </a>
                                                    </li>
                                                    <!-- <li class="nav-item" role="presentation">
                                                        <a class="nav-link" id="profile-tab" data-toggle="pill" href="#two" role="tab" aria-selected="false">
                                                            <b>加班紀錄</b>
                                                        </a>
                                                    </li> -->
                                                </ul>
                                                <div class="tab-content" id="myTabContent">
                                                    <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                                        <div class="accordion" id="accordionExample">
                                                            <div class="panel panel-default">

                                                                <div id="collapseTwo" class="collapse in" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="all_data" style="width:75%;display:table !important;" class="table table-bordered">
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width: 7em;"><i class="fillin_need" style="color:red;">※</i>加班日期</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <input style="margin-left: 1em;" class="ot_question" id="overtime_date"  type="text" overtime_date="overtime_date" name="ch_datepicker">
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>事由</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <textarea style="width:75%;resize: none;font-size: 20px;min-height:8em;" class="ot_question" id="reason" placeholder="事由"></textarea>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>加班時數</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <input style="margin-left: 1em;" class="ot_question" id="overtime_hours"  type="number" overtime_date="overtime_date">
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>補貼方式</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <input class="ot_question" name="subsidy_type" style="zoom: 1.5" value="補休時數" type="radio" checked><span>補休時數</span>
                                                                                    <input class="ot_question" name="subsidy_type" style="zoom: 1.5" value="加班津貼" type="radio"><span>加班津貼</span>
                                                                                    <div>
                                                                                        <table style="width:100%;margin-top:3em;color:red;">
                                                                                            <tr>
                                                                                                <td><span style="color:#000;">選項說明：</span></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>補休時數：<span style="color:#000;">加班時數轉為可補休時數</span></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>加班津貼：<span style="color:#000;">依據勞基法補貼加班費，免填寫下面『補休日期』、『補休時數』欄位</span></td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">補休日期</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <input style="margin-left: 1em;" class="ot_question" id="free_date"  type="text" overtime_date="overtime_date" name="ch_datepicker">
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">補休時數</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <input style="margin-left: 1em;" class="ot_question" id="free_hours"  type="number" overtime_date="overtime_date">
                                                                                </td>
                                                                            </tr>
                                                                            
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 0 0);border-bottom-color: white;border-right-color: white;">審核狀態</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <div class="col-sm-3">
                                                                                        <select name="allow_status" id="allow_status" style="width:100%;">
                                                                                            <option value="" disabled="disabled">（當前審核狀態）</option>    
                                                                                            <option value="審核中">審核中</option>
                                                                                            <option value="核准">核准</option>
                                                                                            <option value="不核准">不核准</option>
                                                                                            <option value="取消">取消</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                                                                                    <label>主管簽章</label>
                                                                                </td>
                                                                                <td style="">
                                                                                    <div class="col-sm-3" style="margin-top: 0.6em;">
                                                                                        <select  class="ot_question" id="director" style="width:100%;">
                                                                                                <option value="">請選擇</option>
                                                                                        </select>
                                                                                    </div>
                                                                                    <div class="col-sm-9">
                                                                                        <button style="margin:.5em;margin-right:3em;color:red;" type="button" onclick="signature_btn_click('director');">簽名</button>
                                                                                        <button style="margin:.5em;" type="button" id="director_signature_msg_btn" onclick="sign_msg_model('director');" data-toggle="modal" data-target="#myModal2">查看留言</button>
                                                                                        <a src="" id="director_signature_simg" style="color:blue;" target="_blank" alt="簽名圖片連結"></a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                                                                                    <label>執行長簽章</label>
                                                                                </td>
                                                                                <td style="">
                                                                                    <div class="col-sm-3" style="margin-top: 0.6em;">
                                                                                        <select  class="ot_question" id="supervise" style="width:100%;">
                                                                                                <option value="">請選擇</option>
                                                                                        </select>
                                                                                    </div>
                                                                                    <div class="col-sm-9">
                                                                                        <button style="margin:.5em;margin-right:3em;color:red;" type="button" onclick="signature_btn_click('supervise');">簽名</button>
                                                                                        <button style="margin:.5em;" type="button" id="supervise_signature_msg_btn" onclick="sign_msg_model('supervise');" data-toggle="modal" data-target="#myModal2">查看留言</button>
                                                                                        <a src="" id="supervise_signature_simg" style="color:blue;" target="_blank" alt="簽名圖片連結"></a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                                                                                    <label>查核者簽章</label>
                                                                                </td>
                                                                                <td style="">
                                                                                    <div class="col-sm-3" style="margin-top: 0.6em;">
                                                                                        <select  class="ot_question" id="checker" style="width:100%;">
                                                                                                <option value="">請選擇</option>
                                                                                        </select>
                                                                                    </div>
                                                                                    <div class="col-sm-9">
                                                                                        <button style="margin:.5em;margin-right:3em;color:red;" type="button" onclick="signature_btn_click('checker');">簽名</button>
                                                                                        <button style="margin:.5em;" type="button" id="checker_signature_msg_btn" onclick="sign_msg_model('checker');" data-toggle="modal" data-target="#myModal2">查看留言</button>
                                                                                        <a src="" id="checker_signature_simg" style="color:blue;" target="_blank" alt="簽名圖片連結"></a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="2">
                                                                                    <div id="submit_area">
                                                                                        <button style="font-size:20px" class="btn btn-default" onclick="submit_data();">送出</button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>

                                                                        <div class="col-sm-12" style="padding-left:0;padding-right:0;margin-top:3em;">
                                                                            <div class="text-center col-sm-4" style="padding-left:0;">
                                                                            </div>
                                                                            <div class="text-center col-sm-4">
                                                                                <!-- <button style="font-size:20px;" id="preview_word2" class="btn btn-default">預覽匯出</button> -->
                                                                            </div>
                                                                            <div class="text-right col-sm-4" style="padding-right:0;">
                                                                                <button type="button" id="revoke_btn" class="btn btn-default" style="font-size:20px" onclick="revoke_overtime();">
                                                                                    撤銷加班申請
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <?php include("signnature_canvas2.php"); ?>
                                                    <!-- <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="profile-tab">
                                                        <div class="accordion" id="accordionExample">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading" id="headingTwo">
                                                                    <h2 class="mb-0">
                                                                        <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                            <span style="color:black;font-size:17px">員工加班時數異動紀錄</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseThree" class="collapse in" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="record_all_data" style="width:95%;display:table !important;" class="table table-bordered">
                                                                            <thead>
                                                                                <tr style="background-color:rgb(255 201 54);">
                                                                                    <th>異動時數</th>
                                                                                    <th>備註</th>
                                                                                    <th>異動人員</th>
                                                                                    <th>異動日期</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody id="call_record_view"></tbody>
                                                                        </table>

                                                                        <div class="col-sm-12" style="padding-left:0;padding-right:0;margin-top:3em;">
                                                                            <div class="text-center col-sm-4" style="padding-left:0;">
                                                                            </div>
                                                                            <div class="text-center col-sm-4">
                                                                                <button style="font-size:20px;" id="preview_word3" class="btn btn-default">預覽匯出</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
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
            </div>
            <!--/網頁內容-->
        </div>
    </div>
   
    <!--\ Modal -->
    <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel2" class="sign_msg_td_name">簽名留言</h4>
                </div>
                <div class="modal-body">
                    <table id="all_data" style="width:auto;margin:0 auto;" class="table table-bordered">
                        <tr style="text-align:left">
                            <td class="sign_msg_td_name" style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">簽名留言內容</td>
                            <td style="border-bottom: solid 1px;">
                                <textarea style="width:100%;resize: none;font-size: 20px;min-height:10em;" class="sign_msg" disabled="disabled"></textarea>
                            </td>
                        </tr>
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">留言時間</td>
                            <td style="border-bottom: solid 1px;">
                                <input style="width:15em;" class="sign_msg_time" type="datetime" disabled="disabled">
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal /-->

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
    <!-- ================== table ================== -->
    <script src="javascript/bootstrap1.18.0-table.min.js"></script>
    <script src="javascript/bootstrap-table1.11.1-zh-TW.min.js"></script>
    <!-- ================== 地區選擇下拉 ================== -->
    <script src="js/jQuery-TWzipcode-master/twzipcode.js"></script>
    <script src="js/jQuery-TWzipcode-master/jquery.twzipcode.js"></script>
    <script src="js/jQuery-TWzipcode-master/jquery.twzipcode.min.js"></script>
    <!-- 日期民國-->
    <script src="javascript/jquery-ui.min.js"></script>
    <script src="javascript/datepickerTw.js"></script>
    <!-- ================== jSignature ================== -->
    <script src="jSignature/jSignature.min.js"></script>
    <script>
        //設定js變數抓取使用者名稱
        var user_name = '<?php echo $_SESSION["name"]; ?>';
    </script>
    <!-- ================== detail ================== -->
    <script type="text/javascript" src="js/overtime_detail.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>

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