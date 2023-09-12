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
    <!--    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />-->
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

    button#reopencase {
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
                        <li><span><a href="">個案管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="closed.php">結案</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="closed.php">結案一覽表</a></span></li>
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
                                            <div>
                                                <div>
                                                    <h4>詳細資料</h4>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                                    <li class="nav-item active" role="presentation" id="closed_rec_all">
                                                        <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                                            <b>個案結案表</b>
                                                        </a>
                                                    </li>
                                                    
                                                    <!-- <li id="open_rec">
                                                        <a href="javascript:addNewTag()">
                                                            <b>+</b>
                                                        </a>
                                                    </li> -->

                                                </ul>
                                                <div class="tab-content" id="myTabContent">
                                                    <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                                        <div class="accordion" id="accordionExample">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading" id="headingTwo">
                                                                    <h2 class="mb-0">
                                                                        <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                            <span style="color:black;font-size:17px">個案結案表</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseTwo" class="collapse in" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="all_data" style="width:75%;" class="table table-bordered">
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;">案號</td>
                                                                                <td style=""><span id="open_case_id"></span></td>

                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;"><i style="color:red;">※</i>姓名</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="name" type="text" oninput="value=value.replace(/[\d]/g,'')" disabled="disabled"></td>
                                                                                
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;"><i style="color:red;">※</i>性別</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select id="gender" style="width:200px;" disabled="disabled">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="男">男</option>
                                                                                        <option value="女">女</option>
                                                                                        <option value="其他">其他</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;width:10em;"><i style="color:red;">※</i>出生年月日</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="birth" type="date" disabled="disabled"></td>

                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;width:10em;"><i style="color:red;">※</i>開案日期</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="open_date" type="date" disabled="disabled"></td>

                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;width:10em;"><i style="color:red;">※</i>結案日期</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="closed_question" id="closed_date" type="date"></td>
                                                                            </tr>

                                                                            <tr>
                                                                            <td colspan="6" style="background-color:rgb(255 201 54);text-align:left;"><i style="color:red;">※</i>家系生態圖</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="6">
                                                                                    <div class="col-sm-12">
                                                                                        <div class="text-left">
                                                                                            <!-- <input name="customFile1" style="min-height:200px;" type="file" class="form-control" disabled="disabled"/> -->
                                                                                            <br>
                                                                                            <div id="customFile1"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>



                                                                            <tr style="text-align:left">
                                                                                <td colspan="1" style="text-align:right;background-color:rgb(255 201 54);border-right-color: white"><i style="color:red;">※</i>主要問題</td>
                                                                                <td colspan="5">
                                                                                    <textarea class="closed_question" style="min-height:200px;width:100%;resize: none;font-size: 20px;" name="main_issue" id="main_issue" placeholder="請輸入主要問題"></textarea>
                                                                                    <br/><span style="color:red;">*此欄位請填寫簡述問題</span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td colspan="1" style="text-align:right;background-color:rgb(255 201 54);border-right-color: white"><i style="color:red;">※</i>次要問題</td>
                                                                                <td colspan="5">
                                                                                    <textarea class="closed_question" style="min-height:200px;width:100%;resize: none;font-size: 20px;" name="minor_issue" id="minor_issue" placeholder="請輸入次要問題"></textarea>
                                                                                    <br/><span style="color:red;">*此欄位請填寫簡述問題</span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td colspan="1" style="text-align:right;background-color:rgb(255 201 54);border-right-color: white"><i style="color:red;">※</i>問題處遇</td>
                                                                                <td colspan="5">
                                                                                    <textarea class="closed_question" style="min-height:200px;width:100%;resize: none;font-size: 20px;" name="intervention" id="intervention" placeholder="請輸入問題處遇內容"></textarea>
                                                                                    <br/><span style="color:red;">*此欄位請填寫個案針對個案各項問題所做的處遇項</span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td colspan="1" style="text-align:right;background-color:rgb(255 201 54);border-right-color: white"><i style="color:red;">※</i>成效評估</td>
                                                                                <td colspan="5">
                                                                                    <textarea class="closed_question" style="min-height:700px;width:100%;resize: none;font-size: 20px;" name="evaluation" id="evaluation" placeholder="請輸入成效評估內容"></textarea>
                                                                                    <br/><span style="color:red;">*此欄位請填寫個案最後執行的狀況並寫出是否有達緩解或未達緩解；把所有測過的量表成效數值呈現(請呈現在最後面順位)，並針對各項說明量表使用「重點文字說明」成效為何做敘述，最後總體成效做說明(各項標號請依照各自內容多寡自行訂定。</span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td colspan="1" style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;"><i style="color:red;">※</i>結案原因</td>
                                                                                <td colspan="5" style="border-bottom: solid 1px;">
                                                                                    <input class="closed_question" name="closed_reason" style="zoom: 1.5" type="radio" value="達到目標，已無需要在服務"><label class="link_label_closed_reason">1.達到目標，已無需要在服務。</label><br/>
                                                                                    <input class="closed_question" name="closed_reason" style="zoom: 1.5" type="radio" value="穩定就業三個月，以達到目標"><label class="link_label_closed_reason">2.穩定就業三個月，以達到目標。</label><br/>
                                                                                    <input class="closed_question" name="closed_reason" style="zoom: 1.5" type="radio" value="個案者死亡"><label class="link_label_closed_reason">3.個案者死亡。</label><br/>
                                                                                    <input class="closed_question" name="closed_reason" style="zoom: 1.5" type="radio" value="再次入監無法合作"><label class="link_label_closed_reason">4.再次入監無法合作。</label><br/>
                                                                                    <input class="closed_question" name="closed_reason" style="zoom: 1.5" type="radio" value="無意願接受服務"><label class="link_label_closed_reason">5.無意願接受服務。</label><br/>
                                                                                    <input class="closed_question" name="closed_reason" style="zoom: 1.5" type="radio" value="失去聯絡（一個月連繫三次均聯繫不上或三個月，每月連繫三次均聯繫不上）"><label class="link_label_closed_reason">6.失去聯絡（一個月連繫三次均聯繫不上或三個月，每月連繫三次均聯繫不上）。</label><br/>
                                                                                    <input class="closed_question" name="closed_reason" style="zoom: 1.5" type="radio" value="轉介其他資源單位，並且已達處遇目標"><label class="link_label_closed_reason">7.轉介其他資源單位，並且已達處遇目標。</label><br/>
                                                                                    <!-- <div>
                                                                                        <input name="closed_reason" style="zoom: 1.5" type="radio" value="other"><label>其他</label>
                                                                                        <input id="closed_reason_other" style="width:75%;" type="text">
                                                                                    </div> -->
                                                                                    <br/>
                                                                                    <span>依據結案指標：</span><input class="closed_question" id="closed_result" type="text">
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td colspan="1" style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">備註</td>
                                                                                <td colspan="5">
                                                                                    <textarea class="closed_question" style="height:150px;width:100%;resize: none;font-size: 20px;" name="remark" id="remark" placeholder="請輸入備註"></textarea>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td colspan="1" style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;"><i style="color:red;">※</i>社工員</td>
                                                                                <td colspan="5" style="border-bottom: solid 1px;">
                                                                                    <div class="col-sm-3">
                                                                                        <select class="closed_question" name="social_worker" id="social_worker" style="width:100%;">
                                                                                            <option value="">請選擇</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td colspan="1" style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                                                                                    <label>督導簽章</label>
                                                                                </td>
                                                                                <td colspan="5" style="">
                                                                                    <div class="col-sm-3" style="margin-top: 0.6em;">
                                                                                        <select class="closed_question" id="supervise1" style="width:100%;">
                                                                                                <option value="">請選擇</option>
                                                                                        </select>
                                                                                    </div>
                                                                                    <div class="col-sm-9">
                                                                                        <button style="margin:.5em;margin-right:3em;color:red;" type="button" onclick="signature_btn_click('supervise1');">簽名</button>
                                                                                        <button style="margin:.5em;" type="button" id="supervise1_signature_msg_btn" onclick="sign_msg_model('supervise1');" data-toggle="modal" data-target="#myModal2">查看留言</button>
                                                                                        <a src="" id="supervise1_signature_simg" style="color:blue;" target="_blank" alt="簽名圖片連結"></a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td colspan="1" style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                                                                                    <label>執行長簽章</label>
                                                                                </td>
                                                                                <td colspan="5" style="">
                                                                                    <div class="col-sm-3" style="margin-top: 0.6em;">
                                                                                        <select class="closed_question" id="supervise2" style="width:100%;">
                                                                                                <option value="">請選擇</option>
                                                                                        </select>
                                                                                    </div>
                                                                                    <div class="col-sm-9">
                                                                                        <button style="margin:.5em;margin-right:3em;color:red;" type="button" onclick="signature_btn_click('supervise2');">簽名</button>
                                                                                        <button style="margin:.5em;" type="button" id="supervise2_signature_msg_btn" onclick="sign_msg_model('supervise2');" data-toggle="modal" data-target="#myModal2">查看留言</button>
                                                                                        <a src="" id="supervise2_signature_simg" style="color:blue;" target="_blank" alt="簽名圖片連結"></a>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td colspan="1" style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;" class="NOline">
                                                                                    <label>建立日期</label>
                                                                                </td>
                                                                                <td colspan="5" style="">
                                                                                    <span id="adate"></span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td colspan="1" style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;" class="NOline">
                                                                                    <label>建立者</label>
                                                                                </td>
                                                                                <td colspan="5" style="">
                                                                                    <span id="applicant"></span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td colspan="1" style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;" class="NOline">
                                                                                    <label>修改日期</label>
                                                                                </td>
                                                                                <td colspan="5" style="">
                                                                                    <span id="udate"></span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td colspan="1" style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;" class="NOline">
                                                                                    <label>修改者</label>
                                                                                </td>
                                                                                <td colspan="5">
                                                                                    <span id="up_applicant"></span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="6">
                                                                                    <div id="edit_div">
                                                                                        <button style="font-size:20px" id="closed_edit" class="btn btn-default" onclick="closed_edit();">編輯</button>
                                                                                    </div>
                                                                                    <div id="save_div" hidden>
                                                                                        <button style="font-size:20px" id="closed_update" class="btn btn-default">修改</button>           
                                                                                        <button style="font-size:20px" id="closed_cancel" class="btn btn-default" onclick="closed_cancel();">取消</button>
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
                                                                                <button type="button" id="reopencase" class="btn btn-default" style="font-size:20px" onclick="reopencase();">
                                                                                    再次開案
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                            <!-- <div class="panel panel-default">
                                                                <div id="collapseOne" class="collapse in" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                                    <button style="font-size:20px" id="preview_word2" class="btn btn-default">預覽匯出</button>
                                                                </div>
                                                            </div> -->
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
    <script type="text/javascript" src="js/closed_detail.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>

</body>

</html>
<?php include("database/timeout_logout.php"); ?>
