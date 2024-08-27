<?php session_start(); ?>
<?php include("database/check_authority.php"); ?><?php include("no_cache.php"); ?>
<?php $href_name =  'page_h2'; ?>
<?php @$vom_year =  $_GET['year']; ?>
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
    .preview {position:absolute;background:#fff;padding:10px;display:none;}

    img {
        max-width: 40em;
        max-height: 40em;
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
                        <li><span><a href="volunteer_meeting.php">行政管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="volunteer_meeting.php">志工管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="volunteer_meeting.php">志工會議記錄及活動</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="volunteer_meeting.php">志工會議記錄及活動一覽表</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>志工會議記錄及活動詳細資料</span></li>
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
                                                            <b>會議記錄摘要&應出席人員&簽到表</b>
                                                        </a>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <a class="nav-link" id="profile-tab" data-toggle="pill" href="#two" role="tab" aria-selected="false">
                                                            <b>志工會議議程</b>
                                                        </a>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <a class="nav-link" id="profile-tab" data-toggle="pill" href="#three" role="tab" aria-selected="false">
                                                            <b>提案&檢討及建議&臨時動議
                                                            </b>
                                                        </a>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <a class="nav-link" id="profile-tab" data-toggle="pill" href="#four" role="tab" aria-selected="false">
                                                            <b>閱後簽名</b>
                                                        </a>
                                                    </li>
                                                    <li class="nav-item" role="presentation">
                                                        <a class="nav-link" id="profile-tab" data-toggle="pill" href="#five" role="tab" aria-selected="false">
                                                            <b>上傳會議活動資料及照片</b>
                                                        </a>
                                                    </li>
                                                </ul>
                                                
                                                <div class="tab-content" id="myTabContent">
                                                    <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                                        <div class="accordion" id="accordionExample">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading" id="headingOne">
                                                                    <h2 class="mb-0">
                                                                        <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                                            <span style="color:black;font-size:17px">會議記錄摘要&應出席人員&簽到表</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseOne" class="collapse in" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="all_data" style="width:65%;display:table !important;" class="table table-bordered">
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width:12em;"><i class="fillin_need" style="color:red;">※</i>會議名稱</td>
                                                                                <td style="border-bottom: solid 1px;"><div class="col-sm-10"><input class="vom_question" id="title_name" name="title_name" type="text" style="width:100%;"></div></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>會議日期</td>
                                                                                <td style="border-bottom: solid 1px;"><div class="col-sm-10"><input class="vom_question" id="meeting_date" name="meeting_date" datepicker="ch_datepicker" type="text"></div></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>會議時間</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <div class="col-sm-10">
                                                                                        <input class="vom_question" id="meeting_time_start" name="meeting_time_start" type="time"><label for="meeting_time">&emsp;至&emsp;</label>
                                                                                        <input class="vom_question" id="meeting_time_end" name="meeting_time_end" type="time">
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>會議地點</td>
                                                                                <td style="border-bottom: solid 1px;"><div class="col-sm-10"><input class="vom_question" id="meeting_place" name="meeting_place" type="text" style="width:100%;"></div></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>應出席人員</td>
                                                                                <td>
                                                                                    <div class="col-sm-10"><textarea class="vom_question"  style="height:7em;width:100%;resize: none;font-size: 20px;" id="expected_attendees" name="expected_attendees" placeholder="請輸入應出席人員"></textarea></div>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">簽到表上傳</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <div class="col-sm-6">
                                                                                        <input class="vom_question" name="signin_file" type="file" class="form-control" />
                                                                                        <br>
                                                                                        <div id="signin_file_name"></div>
                                                                                        <div id="signin_file"></div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                
                                                                            <!-- <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 0 0);border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>督導(簽核)</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <div class="col-sm-3">
                                                                                        <select class="vom_question"  name="supervise" id="supervise" style="width:100%;">
                                                                                            <option value="">請選擇</option>
                                                                                        </select>
                                                                                    </div>
                                                                                </td>
                                                                            </tr> -->

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">創建日期</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="create_date" name="ch_datepicker" type="text" disabled="disabled"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">承辦人員</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="create_name" type="text" disabled="disabled"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">更新日期</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="update_date" name="ch_datepicker" type="text" disabled="disabled"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">更新者</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="update_name" type="text" disabled="disabled"></td>
                                                                            </tr>

                                                                        </table>

                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="profile-tab">
                                                        <div class="accordion" id="accordionExample">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading" id="headingTwo">
                                                                    <h2 class="mb-0">
                                                                        <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                            <span style="color:black;font-size:17px">志工會議議程</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseTwo" class="collapse in" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="all_data" style="width:55%;display:table !important;" class="table table-bordered">
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width:12em;"><i class="fillin_need" style="color:red;">※</i>出席人數</td>
                                                                                <td style="border-bottom: solid 1px;"><div class="col-sm-10"><input class="vom_question" id="actual_attendence" name="actual_attendence" type="number" style="width:10em;">人</div></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width:12em;"><i class="fillin_need" style="color:red;">※</i>請假人數</td>
                                                                                <td style="border-bottom: solid 1px;"><div class="col-sm-10"><input class="vom_question" id="absence" name="absence" type="number" style="width:10em;">人</div></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white"><i class="fillin_need" style="color:red;">※</i>會議議程</td>
                                                                                <td>
                                                                                    <div class="col-sm-10"><textarea class="vom_question"  style="height:25em;width:100%;resize: none;font-size: 20px;" id="agenda_contents" name="agenda_contents" placeholder="請輸入會議議程"></textarea></div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade" id="three" role="tabpanel" aria-labelledby="profile-tab">
                                                        <div class="accordion" id="accordionExample">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading" id="headingThree">
                                                                    <h2 class="mb-0">
                                                                        <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                            <span style="color:black;font-size:17px">提案&檢討及建議&臨時動議</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseThree" class="collapse in" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="all_data" style="width:55%;display:table !important;" class="table table-bordered">
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;width:12em;">提案</td>
                                                                                <td>
                                                                                    <div class="col-sm-10" id="proposal_div">
                                                                                        <table style="width:100%;" id="proposal_table">
                                                                                            <!-- <tr>
                                                                                                <td colspan="2"><label for="proposal_contents_1">提案一、</label></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td colspan="2"><textarea class="vom_question"  style="height:6em;width:100%;resize: none;font-size: 20px;" id="proposal_contents_1" name="proposal_contents" placeholder="請輸入提案討論內容">決議：</textarea></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td colspan="2"><label for="proposal_contents_2">提案二、</label></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td colspan="2"><textarea class="vom_question"  style="height:6em;width:100%;resize: none;font-size: 20px;" id="proposal_contents_2" name="proposal_contents" placeholder="請輸入提案討論內容">決議：</textarea></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td colspan="2"><label for="proposal_contents_3">提案三、</label></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td colspan="2"><textarea class="vom_question"  style="height:6em;width:100%;resize: none;font-size: 20px;" id="proposal_contents_3" name="proposal_contents" placeholder="請輸入提案討論內容">決議：</textarea></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td colspan="2"><label for="proposal_contents_4">提案四、</label></td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td colspan="2"><textarea class="vom_question"  style="height:6em;width:100%;resize: none;font-size: 20px;" id="proposal_contents_4" name="proposal_contents" placeholder="請輸入提案討論內容">決議：</textarea></td>
                                                                                            </tr> -->

                                                                                            <tr id="proposal_table_last_tr">
                                                                                                <td colspan="2"><button style="font-size:15px; margin-right:2em;" type="button" class="btn btn-default" onclick="add_proposal_contents();">新增+</button> <button style="font-size:15px" type="button" class="btn btn-default" onclick="minus_proposal_contents();">刪除-</button></td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white"><i class="fillin_need" style="color:red;">※</i>檢討及建議</td>
                                                                                <td>
                                                                                    <div class="col-sm-10"><textarea class="vom_question"  style="height:12em;width:100%;resize: none;font-size: 20px;" id="review_suggest" name="review_suggest" placeholder="請輸入檢討及建議內容"></textarea></div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">臨時動議</td>
                                                                                <td>
                                                                                    <div class="col-sm-10"><textarea class="vom_question"  style="height:12em;width:100%;resize: none;font-size: 20px;" id="extempore_motion" name="extempore_motion" placeholder="請輸入臨時動議內容"></textarea></div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;"><i class="fillin_need" style="color:red;">※</i>下次開會日期</td>
                                                                                <td style="border-bottom: solid 1px;"><div class="col-sm-10"><input class="vom_question" id="next_meeting_date" name="next_meeting_date" datepicker="ch_datepicker" type="text"></div></td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade" id="four" role="tabpanel" aria-labelledby="profile-tab">
                                                        <div class="accordion" id="accordionExample">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading" id="headingFour">
                                                                    <h2 class="mb-0">
                                                                        <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                            <span style="color:black;font-size:17px">閱後簽名</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseFour" class="collapse in" aria-labelledby="headingFour" data-parent="#accordionExample">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="all_data" style="width:65%;display:table !important;" class="table table-bordered">
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;">閱後簽名檔案上傳</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <div class="col-sm-6">
                                                                                        <input class="vom_question" name="signout_file" type="file" class="form-control" />
                                                                                        <br>
                                                                                        <div id="signout_file_name"></div>
                                                                                        <div id="signout_file"></div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade" id="five" role="tabpanel" aria-labelledby="profile-tab">
                                                        <div class="panel-body">
                                                        </div>
                                                        <div class="table-wrap">
                                                            <div class="table-responsive col-sm-12 text-center">
                                                                <table style="width:75%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>上傳會議活動資料及照片</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;width:12em;">上傳會議活動<br/>資料及照片</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-12">
                                                                                <!-- <input name="meeting_file" type="file" class="form-control" multiple/>
                                                                                <br> -->
                                                                                <div id="meeting_file"></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-sm-12" style="padding-left:0;padding-right:0;">
                                                        <div id="edit_div">
                                                            <button style="font-size:20px" id="vo_edit" class="btn btn-default" onclick="vo_edit();">編輯</button>
                                                        </div>
                                                        <div id="save_div" hidden>
                                                            <button style="font-size:20px" id="vo_update" class="btn btn-default" onclick="rec_update();">修改</button>
                                                            <button style="font-size:20px" id="vo_cancel" class="btn btn-default" onclick="vo_cancel();">取消</button>
                                                        </div>
                                                    </div>

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
    <script src="javascript/datepickerTw2.js"></script>
    <!-- ================== detail ================== -->
    <script type="text/javascript" src="js/volunteer_meeting_detail.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>

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