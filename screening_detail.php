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
                        <li><span><a href="">未開案管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="">篩檢</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="screening.php">篩檢一覽表</a></span></li>
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
                                                    <li class="nav-item active" role="presentation" id="screening_rec_all">
                                                        <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                                            <b>預約篩檢紀錄</b>
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
                                                                            <span style="color:black;font-size:17px">預約篩檢紀錄</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseTwo" class="collapse in" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="all_data" style="width:auto;" class="table table-bordered">
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">序號</td>
                                                                                <td style=""><span id="t_sn"></span></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;width:10em;"><i style="color:red;">※</i>預約日期</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="screening_question" id="reservation_date" type="date"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>預約時段</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="screening_question" id="reservation_time" type="time"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>姓名</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="screening_question" id="name" type="text"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>年齡</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <input class="screening_question" id="age" type="text" maxlength="2" oninput="value=value.replace(/[^\d]/g,'')">
                                                                                    <br>
                                                                                    <label>分類：</label>
                                                                                    <input class="screening_question" name="a_type[]" style="zoom: 1.5" type="radio" value="10歲以下"><label>10歲以下</label>
                                                                                    <input class="screening_question" name="a_type[]" style="zoom: 1.5" type="radio" value="10-19歲"><label>10-19歲</label>
                                                                                    <input class="screening_question" name="a_type[]" style="zoom: 1.5" type="radio" value="20-29歲"><label>20-29歲</label>
                                                                                    <input class="screening_question" name="a_type[]" style="zoom: 1.5" type="radio" value="30-39歲"><label>30-39歲</label>
                                                                                    <input class="screening_question" name="a_type[]" style="zoom: 1.5" type="radio" value="40-49歲"><label>40-49歲</label>
                                                                                    <input class="screening_question" name="a_type[]" style="zoom: 1.5" type="radio" value="50-59歲"><label>50-59歲</label>
                                                                                    <input class="screening_question" name="a_type[]" style="zoom: 1.5" type="radio" value="60歲以上"><label>60歲以上</label>
                                                                                    <input class="screening_question" name="a_type[]" style="zoom: 1.5" type="radio" value="不明"><label>不明</label>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>電話</td>
                                                                                <td style="border-bottom: solid 1px;"><input class="screening_question" name="phone" type="text" max="14" id="phone"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">性別</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select class="screening_question" id="gender" style="width:200px;">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="男">男</option>
                                                                                        <option value="女">女</option>
                                                                                        <option value="其他">其他</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">性向</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select class="screening_question" id="sexual_orientation" style="width:200px;">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="同性">同性</option>
                                                                                        <option value="異性">異性</option>
                                                                                        <option value="雙性">雙性</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>篩檢類型</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select class="screening_question" id="screening_type" style="width:200px;">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="HIV">HIV</option>
                                                                                        <option value="梅毒">梅毒</option>
                                                                                        <option value="HIV+梅毒">HIV+梅毒</option>
                                                                                    </select>
                                                                                    <br/>
                                                                                    <br/>
                                                                                    <input id="add_screening_type" type="text">
                                                                                    <button id="add_screening_type_btn">新增篩檢類型</button>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">篩檢結果</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select class="screening_question" id="screening_results" style="width:200px;">
                                                                                        <option value="">請選擇</option>
                                                                                        <option value="H positive">H positive</option>
                                                                                        <option value="H negative">H negative</option>
                                                                                        <option value="梅 positive">梅 positive</option>
                                                                                        <option value="梅 negative">梅 negative</option>
                                                                                        <option value="H+梅 positive">H+梅 positive</option>
                                                                                        <option value="H+梅 negative">H+梅 negative</option>
                                                                                    </select>
                                                                                    <br/>
                                                                                    <br/>
                                                                                    <input id="add_screening_results" type="text">
                                                                                    <button id="add_screening_results_btn">新增篩檢結果</button>
                                                                                </td>
                                                                            </tr>
                                                                            <!-- <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">建立者</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select class="user" id="user">
                                                                                        <option value="" disabled selected hidden>請選擇工作人員</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr> -->
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white">訪談內容</td>
                                                                                <td>
                                                                                    <textarea class="screening_question" style="height:150px;width:700px;resize: none;font-size: 20px;" name="interview_content" id="interview_content" placeholder="請輸入訪談內容"></textarea>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white">備註</td>
                                                                                <td>
                                                                                    <textarea class="screening_question" style="height:150px;width:700px;resize: none;font-size: 20px;" name="remark" id="remark" placeholder="請輸入備註"></textarea>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white">試劑編號</td>
                                                                                <td>
                                                                                    <input class="screening_question" id="reagent_seq" type="text">
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;;border-right-color: white">金額</td>
                                                                                <td>
                                                                                    <input class="screening_question" id="amount" type="text" oninput="value=value.replace(/[^\d]/g,'')">
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
                                                                                    <label>接案工作人員</label>
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
                                                                                <td colspan="2">
                                                                                    <div id="edit_div">
                                                                                        <button style="font-size:20px" id="screening_edit" class="btn btn-default" onclick="screening_edit();">編輯</button>
                                                                                    </div>
                                                                                    <div id="save_div" hidden>
                                                                                        <button style="font-size:20px" id="screening_update" class="btn btn-default">修改</button>           
                                                                                        <button style="font-size:20px" id="screening_cancel" class="btn btn-default" onclick="screening_cancel();">取消</button>
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
                                                                            <div class="text-right col-sm-4" style="padding-right:0;">
                                                                                <button type="button" id="trans_to_opencase" class="btn btn-default trans_btn" style="font-size:20px" data-toggle="modal" data-target="#myModal">
                                                                                    轉案(新增至開案個案)
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
                            <td style=""><input class="trans_to_opencase_question" id="open_case_t_sn" type="text"></td>
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
    <!-- ================== detail ================== -->
    <script type="text/javascript" src="js/screening_detail.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>

</body>

</html>
<?php include("database/timeout_logout.php"); ?>
