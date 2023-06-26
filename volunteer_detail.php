<?php session_start(); ?>
<?php include("database/check_authority.php"); ?><?php include("no_cache.php"); ?>
<?php @$vo_year =  $_GET['year']; ?>
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
    <!-- Bootstrap FileDialog -->
    <link rel="stylesheet" href="css/bootstrap-file-dialog-dist/bootstrap.fd.css">
    <!--  日期民國  -->
    <link data-require="jqueryui@*" rel="stylesheet" href="css/jquery-ui.css" />
    <link href="css/dtsel.css" rel="stylesheet" />

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
                        <li><span><a href="">行政管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <!-- <?php echo "<li><span><a href='volunteer.php?year=" . trim($vo_year) . "'>" . trim($vo_year) . "年度志工資料</a></span></li>"; ?> -->
                        <li><span><a href="volunteer.php">志工管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="volunteer.php">志工資料</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="volunteer.php">志工一覽表</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>志工詳細資料</span></li>
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
                                                            <b>志工詳細資料</b>
                                                        </a>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <a class="nav-link" id="profile-tab" data-toggle="pill" href="#two" role="tab" aria-selected="false">
                                                            <b>志工時數記錄表</b>
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
                                                                            <span style="color:black;font-size:17px">志工詳細資料</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseTwo" class="collapse in" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="all_data" style="width:55%;display:table !important;" class="table table-bordered">
                                                                            
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width:15em;"><i class="fillin_need" style="color:red;">※</i>年度</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="year" class="vo_question" type="number"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width:15em;"><i class="fillin_need" style="color:red;">※</i>志工姓名</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="name" class="vo_question" type="text"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">出生年月日</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="birth" class="vo_question" type="text" datepicker="ch_datepicker"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">性別</td>
                                                                                <td>
                                                                                    <select id="gender" class="vo_question">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="男">男</option>
                                                                                        <option value="女">女</option>
                                                                                        <option value="其他">其他</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">聯絡電話</td>
                                                                                <td>
                                                                                    <span>
                                                                                        住家
                                                                                    </span>
                                                                                    <input style="width:15em;" id="home_phone" class="vo_question" type="text"><br/><br/>
                                                                                    <span>
                                                                                        手機
                                                                                    </span>
                                                                                    <input style="width:15em;" id="cellphone" class="vo_question" type="text">
                                                                                </td>
                                                                            </tr>
                                                                            
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">E-MAIL</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="e_mail" class="vo_question" type="text"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">是否參與過基礎訓練<br/>及特殊訓練</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select id="training_detail" class="vo_question">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="二者皆有">二者皆有</option>
                                                                                        <option value="僅參與過基礎訓練">僅參與過基礎訓練</option>
                                                                                        <option value="二者皆沒有">二者皆沒有</option>
                                                                                        <option value="僅參與過特殊訓練">僅參與過特殊訓練</option>
                                                                                    </select><br/><br/>
                                                                                    <hr>
                                                                                    <span>志工服務手冊字號：</span>
                                                                                    <input id="brochure_num" class="vo_question" type="text">
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">志工手冊及相關證件</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <div class="col-sm-8">
                                                                                        <div class="text-left">
                                                                                            <!-- <input name="volunteer_file" type="file" class="vo_question" multiple/>
                                                                                            <br> -->
                                                                                            <div id="volunteer_file"></div>
                                                                                            <!-- <button style="width:3em;" onclick="get_files_name_value(); return false;">test</button> -->
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>服務時間</td>
                                                                                <td style="border-bottom: solid 1px;" id="serv_time_area">
                                                                                    <select id="serv_time_1" class="vo_question">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="星期一">星期一</option>
                                                                                        <option value="星期二">星期二</option>
                                                                                        <option value="星期三">星期三</option>
                                                                                        <option value="星期四">星期四</option>
                                                                                        <option value="星期五">星期五</option>
                                                                                    </select>
                                                                                
                                                                                    <!-- <input id="serv_time_2" type="text"> -->
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">備註</td>
                                                                                <td>
                                                                                    <div class="form-group col-sm-3">
                                                                                        <textarea class="vo_question" style="height:10em;width:700px;resize: none;" id="remark" placeholder="請輸入備註"></textarea>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">是否領取服務獎狀</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select id="serv_award" class="vo_question">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="是">是</option>
                                                                                        <option value="否">否</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">專長</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select id="expertise" class="vo_question">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="電腦">電腦</option>
                                                                                        <option value="美工">美工</option>
                                                                                        <option value="活動">活動</option>
                                                                                        <option value="文宣">文宣</option>
                                                                                        <option value="輔導">輔導</option>
                                                                                        <option value="環境清潔">環境清潔</option>
                                                                                        <option value="其他">其他</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">組別</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select id="vgroup" class="vo_question">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="社區宣導志工組">社區宣導志工組</option>
                                                                                        <option value="監獄直接服務志工組">監獄直接服務志工組</option>
                                                                                        <option value="行政服務志工組">行政服務志工組</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">目前總服務時數</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <input id="time_all" type="number" class="vo_question">
                                                                                    <button style="margin:.5em;margin-left:3em;color:red;" class="vo_question" type="button" id="add_time_all_btn" data-toggle="modal" data-target="#myModal">新增服務時數</button>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">服務狀態</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <input name="serv_status" class="vo_question" style="zoom: 1.5" value="持續" type="radio"><span style="margin-right:3em;">持續</span>
                                                                                    <input name="serv_status" class="vo_question" style="zoom: 1.5" value="退出" type="radio"><span style="margin-right:3em;">退出</span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>社工員</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <div class="col-sm-3">
                                                                                        <select name="social_worker" id="social_worker" class="vo_question" style="width:100%;">
                                                                                            <option value="">請選擇</option>
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
                                                                                        <select class="vo_question" id="director" style="width:100%;">
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
                                                                                        <select class="vo_question" id="supervise" style="width:100%;">
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

                                                                            <tr>
                                                                                <td colspan="2">
                                                                                    <div id="edit_div">
                                                                                        <button style="font-size:20px" id="vo_edit" class="btn btn-default" onclick="vo_edit();">編輯</button>
                                                                                    </div>
                                                                                    <div id="save_div" hidden>
                                                                                        <button style="font-size:20px" id="vo_update" class="btn btn-default">修改</button>
                                                                                        <button style="font-size:20px" id="vo_cancel" class="btn btn-default" onclick="vo_cancel();">取消</button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>

                                                                        <div class="col-sm-12" style="padding-left:0;padding-right:0;margin-top:3em;">
                                                                            <div class="text-center col-sm-4" style="padding-left:0;">
                                                                            </div>
                                                                            <div class="text-center col-sm-4">
                                                                                <button style="font-size:20px;" id="preview_word2" class="btn btn-default">預覽匯出</button>
                                                                            </div>
                                                                            <!-- <div class="text-right col-sm-4" style="padding-right:0;">
                                                                                <button type="button" id="trans_to_opencase" class="btn btn-default trans_btn" style="font-size:20px" data-toggle="modal" data-target="#myModal">
                                                                                    轉案(新增至開案個案)
                                                                                </button>
                                                                            </div> -->
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <?php include("signnature_canvas2.php"); ?>
                                                    <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="profile-tab">
                                                        <div class="accordion" id="accordionExample">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading" id="headingTwo">
                                                                    <h2 class="mb-0">
                                                                        <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                            <span style="color:black;font-size:17px">志工時數記錄表</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseTwo" class="collapse in" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="record_all_data" style="width:95%;display:table !important;" class="table table-bordered">
                                                                            <thead>
                                                                                <tr style="background-color:rgb(255 201 54);">
                                                                                    <th>服務日期</th>
                                                                                    <th>服務時數</th>
                                                                                    <th>登錄時數</th>
                                                                                    <th>備註</th>
                                                                                    <th>登錄人員</th>
                                                                                    <th>登錄日期</th>
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
            </div>
            <!--/網頁內容-->

        </div>
    </div>


    <!--\ Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel" class="add_hours_board">新增服務時數</h4>
                </div>
                <div class="modal-body">
                    <table id="add_hours_board" style="width:auto;margin:0 auto;" class="table table-bordered">
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>服務日期</td>
                            <td style="border-bottom: solid 1px;">
                                <input id="serv_record_date" type="date">
                            </td>
                        </tr>
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>服務時數</td>
                            <td style="border-bottom: solid 1px;">
                                <input id="serv_record_time" type="text">
                            </td>
                        </tr>
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>登錄時數</td>
                            <td style="border-bottom: solid 1px;">
                                <input id="add_hours" type="number">
                            </td>
                        </tr>
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">備註</td>
                            <td style="border-bottom: solid 1px;">
                                <textarea style="width:100%;resize: none;font-size: 20px;min-height:10em;" id="add_hours_remark"></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" onclick="add_hours();">新增時數</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal /-->

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
    <!-- Bootstrap FileDialog -->
    <script src="javascript/bootstrap-file-dialog-dist/bootstrap.fd.js"></script>
    
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
        //設定js變數抓取使用者權限
        var authority_level = '<?php echo $_SESSION["authority"]; ?>';
        var user_name = '<?php echo $_SESSION["name"]; ?>';

    </script>
    <!-- ================== detail ================== -->
    <script type="text/javascript" src="js/volunteer_detail.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>

</body>

</html>
<?php include("database/timeout_logout.php"); ?>