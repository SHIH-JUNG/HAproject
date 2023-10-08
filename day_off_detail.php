<?php session_start(); ?>
<?php include("database/check_authority.php"); ?> <?php include("no_cache.php"); ?>
<?php $href_name =  'page_e'; ?>
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
                        <li><span><a href="day_off.php">行政管理</a></span></li>
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
                        <li><span><a href="day_off.php">員工請假紀錄一覽表</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        
                        <li><span>員工請假紀錄詳細資料</span></li>
                    </ol>
                    <!--/麵包屑-->
                </div>
                <!-- /Title -->
                <!-- Footer -->
                <footer class="footer container-fluid pl-30 pr-30">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <p>Copyright &copy; 2020國立屏東科技大學資訊管理系</p>
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
                                                            <b>員工請假紀錄詳細資料</b>
                                                        </a>
                                                    </li>
                                                    <!-- <li class="nav-item" role="presentation">
                                                        <a class="nav-link" id="profile-tab" data-toggle="pill" href="#two" role="tab" aria-selected="false">
                                                            <b>請假紀錄</b>
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
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width: 5em;"><i class="fillin_need" style="color:red;">※</i>假別</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <input class="day_question" name="day_off_type" style="zoom: 1.5" value="事假" type="radio"><span>事假</span>
                                                                                    <input class="day_question" name="day_off_type" style="zoom: 1.5" value="病假" type="radio"><span>病假</span>
                                                                                    <input class="day_question" name="day_off_type" style="zoom: 1.5" value="公假" type="radio"><span>公假</span>
                                                                                    <input class="day_question" name="day_off_type" style="zoom: 1.5" value="補休" type="radio"><span>補休</span>
                                                                                    <input class="day_question" name="day_off_type" style="zoom: 1.5" value="娩假" type="radio"><span>娩假</span>
                                                                                    <input class="day_question" name="day_off_type" style="zoom: 1.5" value="陪產假" type="radio"><span>陪產假</span>
                                                                                    <input class="day_question" name="day_off_type" style="zoom: 1.5" value="流產假" type="radio"><span>流產假</span><br/>

                                                                                    <input class="day_question" name="day_off_type" style="zoom: 1.5" value="產前假" type="radio"><span>產前假</span>
                                                                                    <input class="day_question" name="day_off_type" style="zoom: 1.5" value="家庭照顧假" type="radio"><span>家庭照顧假</span>
                                                                                    <input class="day_question" name="day_off_type" style="zoom: 1.5" value="延長病假" type="radio"><span>延長病假</span>
                                                                                    <input class="day_question" name="day_off_type" style="zoom: 1.5" value="婚假" type="radio"><span>婚假</span>
                                                                                    <input class="day_question" name="day_off_type" style="zoom: 1.5" value="生理假" type="radio"><span>生理假</span>
                                                                                    <input class="day_question" name="day_off_type" style="zoom: 1.5" value="喪假" type="radio"><span>喪假</span>
                                                                                    <input class="day_question" name="day_off_type" style="zoom: 1.5" value="慰假假" type="radio"><span>慰假假</span><br/>
                                                                                    <input class="day_question" name="day_off_type" style="zoom: 1.5" value="其它" type="radio"><span>其它：</span>
                                                                                    <input class="day_question" name="day_off_type_other" type="text" style="width:35%;">
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">附件</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <input class="day_question" name="day_off_files" type="file" class="form-control" />
                                                                                    <br>
                                                                                    <div id="day_off_files"></div>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>請假事由</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <textarea style="width:75%;resize: none;font-size: 20px;min-height:8em;" class="day_question" id="reason" placeholder="請假事由"></textarea>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width: 5em;"><i class="fillin_need" style="color:red;">※</i>處理方式</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <input class="day_question" name="disposal_type" style="zoom: 1.5" value="扣時數" type="radio"><span>扣時數</span>
                                                                                    <input class="day_question" name="disposal_type" style="zoom: 1.5" value="扣薪" type="radio"><span>扣薪</span>
                                                                                    <input class="day_question" name="disposal_type" style="zoom: 1.5" value="不做處理" type="radio"><span>不做處理</span>
                                                                                    <div>
                                                                                        <table style="width:100%;margin-top:3em;color:red;">
                                                                                            <tr>
                                                                                                <td><span style="color:#000;">選項說明：</span></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>扣時數：<span style="color:#000;">將會扣除剩餘補/特休時數</span></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>扣薪：<span style="color:#000;">不扣除剩餘補/特休時數，依據請假時數扣除薪資</span></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td>不做處理：<span style="color:#000;">依勞基法規定正常給薪、其他另外處置的假別，無須扣除時數/薪資，正常給薪</span></td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>請假日期</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <div style="margin-bottom:3em;">
                                                                                        <span>一天以內：</span>
                                                                                        <input class="day_question" name="hours_type" style="zoom: 1.5" value="半天假" type="radio"><span>半天假</span>
                                                                                        <input class="day_question" name="hours_type" style="zoom: 1.5" value="整天假" type="radio"><span>整天假</span><br/>
                                                                                        <span>一天以上：</span>
                                                                                        <input class="day_question" name="hours_type" style="zoom: 1.5" value="多天假" type="radio"><span>多天假</span>
                                                                                    </div>
                                                                                    <div>
                                                                                        <div id="horus_type_count_area">
                                                                                            <!-- 自&emsp;<input id="overtime_date_start" name="ch_datepicker" type="text" overtime="overtime">
                                                                                            <input style="margin-left: 1em;" id="overtime_time_start"  type="time" overtime="overtime"><br/><br/>至&emsp;
                                                                                            <input id="overtime_date_end" name="ch_datepicker" type="text" overtime="overtime">
                                                                                            <input style="margin-left: 1em;" id="overtime_time_end"  type="time" overtime="overtime">&emsp;止 
                                                                                            <button style="margin:.5em;margin-left:1em;color:blue;" type="button" onclick="reset_count_hours();">重製</button>
                                                                                            <br/><br/> -->
                                                                                        </div>
                                                                                        
                                                                                        <div id="overtime_hours_count" style="color:red;">
                                                                                            請假時數：共0日0時
                                                                                        </div>
                                                                                        <div id="overtime_hours_hit" style="color:blue;">
                                                                                            <!-- 剩餘補休時數： ----
                                                                                            剩餘特休時數： ----
                                                                                            已使用的補休時數： ----
                                                                                            已使用的特休時數： ---- -->
                                                                                        </div>
                                                                                        <!-- <div id="makeup_date_detail">
                                                                                            已使用的日期及時數：

                                                                                        </div> -->
                                                                                    </div>
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
                                                                                        <select class="day_question" id="director" style="width:100%;">
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
                                                                                        <select class="day_question" id="supervise" style="width:100%;">
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
                                                                                    <label>職務代理人簽章</label>
                                                                                </td>
                                                                                <td style="">
                                                                                    <div class="col-sm-3" style="margin-top: 0.6em;">
                                                                                        <select class="day_question" id="job_agent" style="width:100%;">
                                                                                                <option value="">請選擇</option>
                                                                                        </select>
                                                                                    </div>
                                                                                    <div class="col-sm-9">
                                                                                        <button style="margin:.5em;margin-right:3em;color:red;" type="button" onclick="signature_btn_click('job_agent');">簽名</button>
                                                                                        <button style="margin:.5em;" type="button" id="job_agent_signature_msg_btn" onclick="sign_msg_model('job_agent');" data-toggle="modal" data-target="#myModal2">查看留言</button>
                                                                                        <a src="" id="job_agent_signature_simg" style="color:blue;" target="_blank" alt="簽名圖片連結"></a>
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
<!-- 
                                                                            <tr>
                                                                                <td colspan="2">
                                                                                    <div id="edit_div">
                                                                                        <button style="font-size:20px" id="day_edit" class="btn btn-default" onclick="day_edit();">編輯</button>
                                                                                    </div>
                                                                                    <div id="save_div" hidden>
                                                                                        <button style="font-size:20px" id="day_update" class="btn btn-default">修改</button>
                                                                                        <button style="font-size:20px" id="day_cancel" class="btn btn-default" onclick="day_cancel();">取消</button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr> -->

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
                                                                                <button type="button" id="revoke_btn" class="btn btn-default" style="font-size:20px" onclick="revoke_day_off();">
                                                                                    撤銷請假申請
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
                                                                            <span style="color:black;font-size:17px">員工請假時數異動紀錄</span>
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
    <script type="text/javascript" src="js/day_off_detail.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>

</body>

</html>
<?php include("database/timeout_logout.php"); ?>