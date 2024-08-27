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
                        <li><span><a href="counsel.php">監所服務一覽表</a></span></li>
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
                                                    <li class="nav-item active" role="presentation" id="counsel_rec_all">
                                                        <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                                            <b>監所服務紀錄</b>
                                                        </a>
                                                    </li>
                                                    
                                                    <li class="nav-item" role="presentation">
                                                        <a class="nav-link" id="profile-tab" data-toggle="pill" href="#two" role="tab" aria-selected="false">
                                                            <b>訪談記錄</b>
                                                        </a>
                                                    </li>

                                                    <li class="nav-item" role="presentation">
                                                        <a class="nav-link" id="profile-tab" data-toggle="pill" href="#three" role="tab" aria-selected="false">
                                                            <b>新增+</b>
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
                                                                            <span style="color:black;font-size:17px">監所服務紀錄</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseTwo" class="collapse in" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="all_data" style="width:55%;display:table !important;" class="table table-bordered">
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width:25%;" class="NOline">呼號</td>
                                                                                <td style=""><span id="t_sn"></span></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>矯正機關</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select id="refferal" class="counsel_question" style="width:200px;">
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
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>姓名</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="name" class="counsel_question" type="text"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">性別</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select id="gender" class="counsel_question" style="width:200px;">
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
                                                                                    <select id="sexual_orientation" class="counsel_question" style="width:200px;">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="同性">同性</option>
                                                                                        <option value="異性">異性</option>
                                                                                        <option value="雙性">雙性</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>出生年月日</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="birth" class="counsel_question" name="ch_datepicker" type="text"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>身分證字號</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="pid" class="counsel_question" type="text"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">緊急聯絡人</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="info_name" class="counsel_question" type="text"></td>
                                                                            </tr>
                                                                        
                                                                            
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">緊急聯絡電話</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="info_phone" class="counsel_question" type="number" max="14"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">入監前居住地</td>
                                                                                <td style="border-bottom: solid 1px;"><input style="width:85%;" id="address" class="counsel_question" type="text" max="14"></td>
                                                                            </tr>
                                                                        
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第一次入獄時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="in_prison_date" class="counsel_question" name="ch_datepicker" type="text"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第一次出獄時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="out_prison_date" class="counsel_question" name="ch_datepicker" type="text"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第二次入獄時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="in_prison_date_2nd" class="counsel_question" name="ch_datepicker" type="text"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第二次出獄時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="out_prison_date_2nd" class="counsel_question" name="ch_datepicker" type="text"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第三次入獄時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="in_prison_date_3rd" class="counsel_question" name="ch_datepicker" type="text"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第三次出獄時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="out_prison_date_3rd" class="counsel_question" name="ch_datepicker" type="text"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">是否假釋出監</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select id="is_parole" class="counsel_question" style="width:200px;">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="是">是</option>
                                                                                        <option value="否">否</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">診斷出HIV(+)時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="HIV_diagnosis_date" class="counsel_question" name="ch_datepicker" type="text"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">家人是否知道感染</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select id="family_know" class="counsel_question" style="width:200px;">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="是">是</option>
                                                                                        <option value="否">否</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">雞尾酒療法服藥狀況</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select id="cocktail_therapy_status" class="counsel_question" style="width:200px;">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="是">是</option>
                                                                                        <option value="否">否</option>
                                                                                    </select>
                                                                                    <input id="cocktail_therapy_name" class="counsel_question" type="text">
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;">檔案上傳</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <div class="col-sm-12">
                                                                                        <div class="text-left">
                                                                                            <input name="upload_file" type="file" class="counsel_question form-control" />
                                                                                            <br>
                                                                                            <div id="upload_file"></div>
                                                                                        </div>
                                                                                    </div>    
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第一次訪談時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="interview_date" id="interview_date_1st" name="ch_datepicker" type="text" disabled="disabled"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第二次訪談時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="interview_date" id="interview_date_2nd" name="ch_datepicker" type="text" disabled="disabled"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第三次訪談時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="interview_date" id="interview_date_3rd" name="ch_datepicker" type="text" disabled="disabled"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第四次訪談時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="interview_date" id="interview_date_4th" name="ch_datepicker" type="text" disabled="disabled"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第五次訪談時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="interview_date" id="interview_date_5th" name="ch_datepicker" type="text" disabled="disabled"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第六次訪談時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="interview_date" id="interview_date_6th" name="ch_datepicker" type="text" disabled="disabled"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">第七次訪談時間</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="interview_date" id="interview_date_7th" name="ch_datepicker" type="text" disabled="disabled"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                                                                                    <label>建立日期</label>
                                                                                </td>
                                                                                <td style="">
                                                                                    <span id="create_date"></span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                                                                                    <label>建立者</label>
                                                                                </td>
                                                                                <td style="">
                                                                                    <span id="create_name"></span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">
                                                                                    <label>修改日期</label>
                                                                                </td>
                                                                                <td style="">
                                                                                    <span id="update_date"></span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;" class="NOline">
                                                                                    <label>修改者</label>
                                                                                </td>
                                                                                <td>
                                                                                    <span id="update_name"></span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="2">
                                                                                    <div id="edit_div">
                                                                                        <button style="font-size:20px" id="counsel_edit" class="btn btn-default" onclick="counsel_edit();">編輯</button>
                                                                                    </div>
                                                                                    <div id="save_div" hidden>
                                                                                        <button style="font-size:20px" id="counsel_update" class="btn btn-default">修改</button>           
                                                                                        <button style="font-size:20px" id="counsel_cancel" class="btn btn-default" onclick="counsel_cancel();">取消</button>
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
                                                                                <button type="button" id="trans_to_opencase" class="btn btn-default trans_btn" style="font-size:20px" data-toggle="modal" data-target="#myModal">
                                                                                    轉案(新增至開案個案)
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="profile-tab">
                                                        <div class="accordion" id="accordionExample2">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading" id="headingThree">
                                                                    <h2 class="mb-0">
                                                                        <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                            <span style="color:black;font-size:17px">訪談記錄</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseThree" class="collapse in" aria-labelledby="headingThree" data-parent="#accordionExample2">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="face_rec_all_data" style="width:95%;display:table !important;" class="table table-bordered">
                                                                            <thead>
                                                                                <tr style="background-color:rgb(255 201 54);">
                                                                                    <th>預約訪談時間</th>
                                                                                    <th>指派工作人員</th>
                                                                                    <th>方式</th>
                                                                                    <th>備註</th>
                                                                                    <th>登錄人員</th>
                                                                                    <th>登錄日期</th>
                                                                                    <th></th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody id="call_face_rec_view"></tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade" id="three" role="tabpanel" aria-labelledby="profile-tab">
                                                        <div class="accordion" id="accordionExample3">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading" id="headingFour">
                                                                    <h2 class="mb-0">
                                                                        <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                            <span style="color:black;font-size:17px">新增訪談記錄</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseFour" class="collapse in" aria-labelledby="headingFour" data-parent="#accordionExample3">
                                                                    <div class="panel-body scr_container">
                                                                        <table style="width:auto;" class="table table-bordered" id="add_face_rec_table">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td colspan="2">個人預約訪談記錄</td>
                                                                                </tr>
                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>預約面訪時間</td>
                                                                                    <td style="">
                                                                                        <input id="start_date" type="date"> 
                                                                                        <select id="start_time_h"></select>
                                                                                        <label>：</label>
                                                                                        <select id="start_time_m">
                                                                                            <option>00</option>
                                                                                            <option>30</option>
                                                                                        </select>
                                                                                        <label>至</label>
                                                                                        <select id="end_time_h"></select>
                                                                                        <label>：</label>
                                                                                        <select id="end_time_m">
                                                                                            <option>00</option>
                                                                                            <option>30</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">指派工作人員</td>
                                                                                    <td style="">
                                                                                        主：<select id="one_user">
                                                                                                <option value="">請選擇工作人員</option>
                                                                                            </select>
                                                                                            <br><br>
                                                                                        副：<select id="two_user">
                                                                                            <option value="">請選擇工作人員</option>
                                                                                            </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>方式</td>
                                                                                    <td style="">
                                                                                        <input id="location" type="text"><br>
                                                                                        <input style="zoom:1.5" name="location_detail[]" type="radio" value="社區">社區
                                                                                        <input style="zoom:1.5" name="location_detail[]" type="radio" value="家訪">家訪
                                                                                        <input style="zoom:1.5" name="location_detail[]" type="radio" value="監所">監所
                                                                                        <input style="zoom:1.5" name="location_detail[]" type="radio" value="快樂聯盟">快樂聯盟
                                                                                        <input style="zoom:1.5" name="location_detail[]" type="radio" value="其他">其他：
                                                                                        <input id="other_location" type="text" placeholder="請輸入其他面訪方式">
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;">備註</td>
                                                                                    <td>
                                                                                        <textarea style="height:150px;width:700px;resize: none;font-size: 20px;" name="remark" id="remark" placeholder="請輸入備註內容"></textarea>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td colspan="2">
                                                                                        <div>
                                                                                            <button style="font-size:20px" class="btn btn-default" onclick="add_counsel_face();">新增</button>
                                                                                            <button style="font-size:20px" class="btn btn-default" onclick="cancel()">取消</button>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
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
                    <h4 class="modal-title" id="myModalLabel">新增至開案個案</h4>
                </div>
                <div class="modal-body">
                    <table id="all_data" style="width:auto;margin:0 auto;" class="table table-bordered">
                    <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>個案類別</td>
                            <td style="border-bottom: solid 1px;">
                                <select class="trans_to_opencase_question" id="open_object_type" style="width:200px;">
                                    <option value="">請選擇</option>
                                    <option value="愛滋感染者">愛滋感染者</option>
                                    <option value="一般藥癮者">一般藥癮者</option>
                                    <option value="藥癮家庭">藥癮家庭</option>
                                    <option value="親職兒少">親職兒少</option>
                                </select>
                            </td>
                        </tr>    
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline"><i style="color:red;">※</i>開案編號</td>
                            <td style="">
                                <select id="case_id_prestr" style="width:auto;">
                                    <option value="">請選擇</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                </select>
                                <!-- <input id="case_id" type="text"> -->
                                <input class="trans_to_opencase_question" id="open_case_t_sn" type="text">
                                <br/><span style="font-size:16px;color:red;">※若『個案類別』已選擇『親職兒少』，<br/>則請選擇編號的前綴字</span>
                            </td>
                        </tr>
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>類別屬性</td>
                            <td style="border-bottom: solid 1px;">
                                <select class="trans_to_opencase_question" id="open_case_type" style="width:200px;">
                                    <option value="">請選擇</option>
                                    <option value="安置家園">安置家園</option>
                                    <option value="自立宿舍">自立宿舍</option>
                                    <option value="社區">社區</option>
                                    <!-- <option value="藥癮家庭">藥癮家庭</option>
                                    <option value="藥癮者">藥癮者</option>
                                    <option value="親子教育">親子教育</option> -->
                                </select>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" id="trans_to_opencase_submit" class="btn btn-default">開案建立</button>
                    <!-- <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button> -->
                </div>
            </div>
        </div>
    </div>
    <!-- Modal /-->

    <!--\ Modal -->
    <div class="modal fade" id="update_rec_modal" tabindex="-1" role="dialog" aria-labelledby="update_rec_modal_label" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="update_rec_modal_label">訪談記錄</h4>
                </div>
                <div class="modal-body">
                    <form id="form_modal">
                        <table id="update_all_data" style="font-size: 18px;width:100%;margin:0 auto;" class="table table-bordered">
                            
                        </table>
                    </from>
                </div>

                <div class="modal-footer text-center">
                    <button id="modal_btn" onclick="update_rec_data(this);" type="button" class="btn btn-default">修改</button>
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
    <!-- ================== detail ================== -->
    <script type="text/javascript" src="js/counsel_detail_v2.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>

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
