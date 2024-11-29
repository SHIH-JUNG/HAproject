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
<style>
    table {
        margin-left: auto;
        margin-right: auto;
        page-break-inside: avoid; /* 防止表格跨頁切割 */
        width: 100%; /* 確保表格寬度占滿頁面，避免縮放導致跨頁 */
    }

    tr {
        page-break-inside: avoid !important; /* 強制防止表格跨頁切割 */
        break-inside: avoid; /* 防止內部元素跨頁（部分瀏覽器兼容） */
    }

    td {
        page-break-inside: avoid !important; /* 強制防止表格跨頁切割 */
        break-inside: avoid; /* 防止內部元素跨頁（部分瀏覽器兼容） */
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

    #all_data tbody tr td textarea
    {
        width:85%;
        /* border: none; */
        min-height:6em;
        overflow: auto;
    }
    .dlgrec_sign{
        display: flex;
        align-items: center;
    }
</style>

<i>
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
                        <li><span><a href="dlgrec.php">生輔紀錄一覽表</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>詳細資料</span></li>
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
                                            <div>
                                                <div>
                                                    <h4>詳細資料</h4>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                                    <li class="nav-item active" role="presentation" id="dlgrec_rec_all">
                                                        <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                                            <b>向日葵家園每日生活輔導紀錄表</b>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div class="tab-content" id="myTabContent">
                                                    <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                                        <div class="accordion" id="accordionExample">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading" id="headingTwo">
                                                                    <h2 class="mb-0">
                                                                        <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                            <span style="color:black;font-size:17px">向日葵家園每日生活輔導紀錄表</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseTwo" class="collapse in" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                    <div class="panel-body scr_container">
                                                                    <div class="text-center">
                                                                        <button style="font-size:20px" class="btn btn-default" onclick="generatePDF1()">匯出內容為PDF</button>
                                                                    </div>
                                                                        <table id="all_data" style="width:75%;" class="table table-bordered">
                                                                    <!-- <input type="checkbox" class="pdf-section" id="section_1" value="section1">
                                                                    <label for="section_1">輸出詳細資料</label>
                                                                    <div id="section1"> -->
                                                                        <tr style="text-align:left">
                                                                            <td colspan="2" style="border-bottom: solid 1px;">
                                                                                <label for="bf_num">早餐：</label><input style="width:3.5em;" class="dlgrec_question" id="bf_num" type="number">人、
                                                                                <label for="al_num">午餐：</label><input style="width:3.5em;" class="dlgrec_question" id="al_num" type="number">人、
                                                                                <label for="em_num">晚餐：</label><input style="width:3.5em;" class="dlgrec_question" id="em_num" type="number">人，
                                                                                <label for="lp_num">當日入住人數：</label><input style="width:3.5em;" class="dlgrec_question" id="lp_num" type="number">人、
                                                                                <label for="leave_num">請假：</label><input style="width:3.5em;" class="dlgrec_question" id="leave_num" type="number">人<br/><br/>
                                                                                <label for="dlgrec_date">日期：</label><input style="width:9em;" class="dlgrec_question" id="dlgrec_date" type="date">
                                                                            </td>
                                                                        </tr>
                                                                        <tr style="text-align:left">
                                                                            <td colspan="2" style="border-bottom: solid 1px;">
                                                                                <label for="dlg_manager">同儕生輔員/生活輔導員：</label><input class="dlgrec_question" style="width:15em;" id="dlg_manager" type="text"><br/>
                                                                                <div class="col-sm-5">
                                                                                    <label for="social_worker" style="margin-top:.5em;">社工員：</label>
                                                                                    <select class="dlgrec_question" name="social_worker" id="social_worker" style="width:60%;">
                                                                                        <option value="">請選擇</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <button style="margin:.5em;margin-right:3em;color:red;" type="button" onclick="signature_btn_click('social_worker');">簽名</button>
                                                                                    <button style="margin:.5em;" type="button" id="social_worker_signature_msg_btn" onclick="sign_msg_model('social_worker');" data-toggle="modal" data-target="#myModal2">查看留言</button>
                                                                                    <a src="" id="social_worker_signature_simg" style="color:blue;" target="_blank" alt="簽名圖片連結"></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr style="text-align:left">
                                                                            <td colspan="2" style="border-bottom: solid 1px;">
                                                                                <div class="col-sm-5">
                                                                                    <label for="supervise1" style="margin-top:.5em;">督導：</label>
                                                                                    <select class="dlgrec_question" name="supervise1" id="supervise1" style="width:60%;">
                                                                                        <option value="">請選擇</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <button style="margin:.5em;margin-right:3em;color:red;" type="button" onclick="signature_btn_click('supervise1');">簽名</button>
                                                                                    <button style="margin:.5em;" type="button" id="supervise1_signature_msg_btn" onclick="sign_msg_model('supervise1');" data-toggle="modal" data-target="#myModal2">查看留言</button>
                                                                                    <a src="" id="supervise1_signature_simg" style="color:blue;" target="_blank" alt="簽名圖片連結"></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr style="text-align:left">
                                                                            <td colspan="2" style="border-bottom: solid 1px;">
                                                                                <div class="col-sm-5">
                                                                                    <label for="supervise2" style="margin-top:.5em;">執行長：</label>
                                                                                    <select class="dlgrec_question" name="supervise2" id="supervise2" style="width:60%;">
                                                                                        <option value="">請選擇</option>
                                                                                    </select>
                                                                                </div>
                                                                                <div class="col-sm-7">
                                                                                    <button style="margin:.5em;margin-right:3em;color:red;" type="button" onclick="signature_btn_click('supervise2');">簽名</button>
                                                                                    <button style="margin:.5em;" type="button" id="supervise2_signature_msg_btn" onclick="sign_msg_model('supervise2');" data-toggle="modal" data-target="#myModal2">查看留言</button>
                                                                                    <a src="" id="supervise2_signature_simg" style="color:blue;" target="_blank" alt="簽名圖片連結"></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr style="text-align:left">
                                                                                <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width: 10em;">檔案上傳</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <div class="col-sm-8">
                                                                                        <div class="text-left">
                                                                                            <input name="upload" type="file" class="dlgrec_question form-control">
                                                                                            <br>
                                                                                            <div id="upload"></div>
                                                                                        </div>
                                                                                    </div>
                                                                            </td>
                                                                        </tr>
                                                                    <!-- </div> -->
                                                                        <!-- <input type="checkbox" class="pdf-section" id="section_2" value="section2">
                                                                        <label for="section_2">輸出輔導內容</label>
                                                                        <div id="section2"> -->
                                                                        <tr style="text-align:left">
                                                                            <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width: 10em;">時間</td>
                                                                            <td style="text-align:center;background-color:rgb(255 201 54);">輔導內容:生活、輔導、職訓及相關事宜</td>
                                                                        </tr>
                                                                        <tr style="text-align:left">
                                                                            <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">8:30<br/>9:30</td>
                                                                            <td style="border-bottom: solid 1px;">
                                                                            <textarea class="dlgrec_question" id="dlgrec_0" name="dlgrec_textarea" placeholder="請輸入內容" contenteditable="true"></textarea>
                                                                            </td>
                                                                        </tr>
                                                                        <tr style="text-align:left">
                                                                            <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">9:30<br/>10:30</td>
                                                                            <td style="border-bottom: solid 1px;">
                                                                            <textarea class="dlgrec_question" id="dlgrec_1" name="dlgrec_textarea" placeholder="請輸入內容" contenteditable="true"></textarea>
                                                                            </td>
                                                                        </tr>
                                                                        <tr style="text-align:left">
                                                                            <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">10:30<br/>11:30</td>
                                                                            <td style="border-bottom: solid 1px;">
                                                                            <textarea class="dlgrec_question" id="dlgrec_2" name="dlgrec_textarea" placeholder="請輸入內容" contenteditable="true"></textarea>
                                                                            </td>
                                                                        </tr>
                                                                        <tr style="text-align:left">
                                                                            <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">11:30<br/>12:30</td>
                                                                            <td style="border-bottom: solid 1px;">
                                                                            <textarea class="dlgrec_question" id="dlgrec_3" name="dlgrec_textarea" placeholder="請輸入內容" contenteditable="true"></textarea>
                                                                            </td>
                                                                        </tr>
                                                                        <tr style="text-align:left">
                                                                            <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">12:30<br/>13:30</td>
                                                                            <td style="border-bottom: solid 1px;">
                                                                            <textarea class="dlgrec_question" id="dlgrec_4" name="dlgrec_textarea" placeholder="請輸入內容" contenteditable="true"></textarea>
                                                                            </td>
                                                                        </tr>
                                                                        <tr style="text-align:left">
                                                                            <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">13:30<br/>14:30</td>
                                                                            <td style="border-bottom: solid 1px;">
                                                                            <textarea class="dlgrec_question" id="dlgrec_5" name="dlgrec_textarea" placeholder="請輸入內容" contenteditable="true"></textarea>
                                                                            </td>
                                                                        </tr>
                                                                        <tr style="text-align:left">
                                                                            <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">14:30<br/>18:00</td>
                                                                            <td style="border-bottom: solid 1px;">
                                                                            <textarea class="dlgrec_question" id="dlgrec_6" name="dlgrec_textarea" placeholder="請輸入內容" contenteditable="true"></textarea>
                                                                            </td>
                                                                        </tr>
                                                                        <!-- <tr style="text-align:left">
                                                                            <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">21:30<br/>22:00</td>
                                                                            <td style="border-bottom: solid 1px;">
                                                                            <textarea class="dlgrec_question" id="dlgrec_7" name="dlgrec_textarea" placeholder="請輸入內容" contenteditable="true"></textarea>
                                                                            </td>
                                                                        </tr> -->
                                                                        <tr style="text-align:left">
                                                                            <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">特殊個案反應情形輔導處理</td>
                                                                            <td style="border-bottom: solid 1px;">
                                                                            <textarea class="dlgrec_question" id="dlgrec_8" name="dlgrec_textarea" placeholder="請輸入特殊個案反應情形輔導處理" contenteditable="true"></textarea>
                                                                            </td>
                                                                        </tr>
                                                                        <tr style="text-align:left">
                                                                            <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">輔導諮詢執行實況</td>
                                                                            <td style="border-bottom: solid 1px;">
                                                                            <textarea class="dlgrec_question" id="dlgrec_9" name="dlgrec_textarea" placeholder="請輸入輔導諮詢執行實況" contenteditable="true"></textarea>
                                                                            </td>
                                                                        </tr>
                                                                        <tr style="text-align:left">
                                                                            <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">問題處遇概況</td>
                                                                            <td style="border-bottom: solid 1px;">
                                                                            <textarea class="dlgrec_question" id="dlgrec_10" name="dlgrec_textarea" placeholder="請輸入問題處遇概況" contenteditable="true"></textarea>
                                                                            </td>
                                                                        </tr>
                                                                        <tr style="text-align:left">
                                                                            <td style="text-align:center;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">備註</td>
                                                                            <td style="border-bottom: solid 1px;">
                                                                            <textarea class="dlgrec_question" id="dlgrec_11" name="dlgrec_textarea" placeholder="請輸入備註" contenteditable="true"></textarea>
                                                                            </td>
                                                                        </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                                                                                    <label>建立日期</label>
                                                                                </td>
                                                                                <td style="">
                                                                                    <span id="adate"></span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                                                                                    <label>建立者</label>
                                                                                </td>
                                                                                <td style="">
                                                                                    <span id="applicant"></span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                                                                                    <label>修改日期</label>
                                                                                </td>
                                                                                <td style="">
                                                                                    <span id="udate"></span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;" class="NOline">
                                                                                    <label>修改者</label>
                                                                                </td>
                                                                                <td>
                                                                                    <span id="up_applicant"></span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                            <!-- </div> -->
                                                                                <td colspan="2">
                                                                                    <div id="edit_div">
                                                                                        <button style="font-size:20px" id="dlgrec_edit" class="btn btn-default" onclick="dlgrec_edit();">編輯</button>
                                                                                    </div>
                                                                                    <div id="save_div" hidden>
                                                                                        <button style="font-size:20px" id="dlgrec_update" class="btn btn-default">修改</button>
                                                                                        <button style="font-size:20px" id="dlgrec_cancel" class="btn btn-default" onclick="dlgrec_cancel();">取消</button>
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
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <?php include("signnature_canvas2.php"); ?>
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
    <!-- ================== jSignature ================== -->
    <script src="jSignature/jSignature.min.js"></script>
    <script>
        //設定js變數抓取使用者名稱
        var user_name = '<?php echo $_SESSION["name"]; ?>';
    </script>
    <!-- ================== detail ================== -->
    <script type="text/javascript" src="js/dlgrec_detail.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>
    <!-- ================== pdf ================== -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
    <script>
        function generatePDF1() {
            const element = document.getElementById('all_data');

            const opt = {
                margin:       1,
                filename:     '向日葵家園每日生活輔導紀錄表.pdf',
                image:        { type: 'jpeg', quality: 1 },
                html2canvas:  { scale: 3,
                    logging: true, // 啟用日誌以幫助調試
                    useCORS: true, // 允許跨域圖片
                    allowTaint: true // 允許跨域圖片
                    },
                jsPDF:        { unit: 'mm', format: 'legal', orientation: 'landscape' },
                pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
            };

            html2pdf().from(element).set(opt).save();
        }
    </script>
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
