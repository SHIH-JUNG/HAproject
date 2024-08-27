<?php session_start(); ?>
<?php include("database/check_authority.php"); ?><?php include("no_cache.php"); ?>
<?php $href_name =  'page_c'; ?>
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
    <!-- <link href="css/sweetalert2/sweetalert2.all.min.css" rel="stylesheet" /> -->
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

    .form-control
    {
        border: 1px solid #000;
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
                        <li><span><a href="">行政管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="">員工管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <?php
                            if ($menu_login_authority <= 4 || $menu_login_authority == 6) {

                                echo '<li><span><a href="resume.php">員工履歷一覽表</a></span></li>'.
                                '<svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">'.
                                    '<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />'.
                                '</svg>'.'<li><span>員工履歷檔案詳細資料</span></li>';
                            }
                            else
                            {
                                echo '<li><span>員工履歷檔案</span></li>';
                            }
                        ?>
                        
                        
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
                <div style="zoom:80%" class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default card-view">
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-sm-12 col-xs-12">
                                        <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item active" role="presentation">
                                                    <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                                        <b>員工履歷檔案詳細資料</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#two" role="tab" aria-selected="false">
                                                        <b>歷年雇傭契約&考績檔案</b>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">

                                                <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="panel-body">
                                                        </div>
                                                        <div class="table-wrap">
                                                            <div class="table-responsive col-sm-12 text-center">
                                                                <table style="width:70%;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <h3>員工履歷檔案詳細資料</h3>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">帳號</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="form-group col-sm-4">
                                                                                <span id="account"></span>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>員工姓名</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="form-group col-sm-4">
                                                                                <!-- <input id="user_name" class="resume_question" type="text"> -->
                                                                                <span id="user_name"></span>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>信箱</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="form-group col-sm-4">
                                                                                <input id="email" class="resume_question" type="email" placeholder="輸入信箱" data-error="Email格式無效">
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>入職日</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="form-group col-sm-4">
                                                                                <input id="entry_date" class="resume_question" name="ch_datepicker" type="text">
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">是否在職</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="form-group col-sm-3">
                                                                                <select id="on_or_off" class="resume_question">
                                                                                    <option value="是">是</option>
                                                                                    <option value="否">否</option>
                                                                                </select>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">離職日</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="form-group col-sm-4">
                                                                                <input id="resigned_date" class="resume_question" name="ch_datepicker" type="text">
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">年資(單位：年)</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="form-group col-sm-4">
                                                                                <input id="seniority_num" type="text" disabled="disabled">
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">總特休時數</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="form-group col-sm-12">
                                                                                <input id="annual_hours" type="text" disabled="disabled"><button style="margin:.5em;margin-left:3em;color:red;" type="button" id="update_annual_hours_btn" data-toggle="modal" data-target="#myModal">修改時數</button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">總請假時數</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="form-group col-sm-4">
                                                                                <input id="leave_hours" type="text" disabled="disabled">
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">總加班時數</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="form-group col-sm-4">
                                                                                <input id="overtime_hours" type="text" disabled="disabled">
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">可補休時數</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="form-group col-sm-4">
                                                                                <input id="comp_hours" type="text" disabled="disabled">
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">履歷表檔案</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-8">
                                                                                <div class="text-left">
                                                                                    <!-- <input name="resume_file" type="file" class="resume_question form-control" multiple> -->
                                                                                    <!-- <br> -->
                                                                                    <div id="resume_file"></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">保密契約</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-8">
                                                                                <div class="text-left">
                                                                                    <input name="nda_file" type="file" class="resume_question form-control">
                                                                                    <br>
                                                                                    <div id="nda_file"></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">畢業證書</td>
                                                                        <td style="border-bottom: solid 1px;">
                                                                            <div class="col-sm-8">
                                                                                <div class="text-left">
                                                                                    <input name="diploma_file" type="file" class="resume_question form-control">
                                                                                    <br>
                                                                                    <div id="diploma_file"></div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr style="text-align:left">
                                                                        <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">備註</td>
                                                                        <td>
                                                                            <div class="form-group col-sm-10">
                                                                                <textarea style="height:10em;width:100%;" id="remark" class="resume_question" name="remark" placeholder="請輸入備註"></textarea>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td colspan="2">
                                                                            <div id="edit_div">
                                                                                <button style="font-size:20px" id="resume_edit" class="btn btn-default" onclick="resume_edit();">編輯</button>
                                                                            </div>
                                                                            <div id="save_div" hidden>
                                                                                <button style="font-size:20px" id="resume_update" class="btn btn-default" onclick="resume_update();">修改</button>           
                                                                                <button style="font-size:20px" id="resume_cancel" class="btn btn-default" onclick="resume_cancel();">取消</button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="table-wrap">
                                                            <div class="table-responsive">
                                                                <div>
                                                                    <H3>歷年雇傭契約&考績檔案</H3>
                                                                </div>
                                                                <div>
                                                                    員工姓名：<span class="employee_name">---</span>
                                                                    ，入職日期：<span class="entry_date">---年--月--日</span>
                                                                    ，最近上傳日期：<span class="recently_upload_date">---年--月--日</span>
                                                                    ，今年檔案上傳數：<span class="this_year_file_upload_num">0</span>
                                                                </div>
                                                                <table id="case_all" style="width:100%;" class="table table-bordered">
                                                                    <th>年度</th>
                                                                    <th>雇傭契約</th>
                                                                    <!-- <th>保密契約</th> -->
                                                                    <!-- <th>畢業證書</th> -->
                                                                    <th>考績</th>
                                                                    <th>備註</th>
                                                                    <th></th>
                                                                    <tbody id="all_files"></tbody>
                                                                </table>
                                                            </div>
                                                            <!-- <div class="text-center">
                                                                <button onclick="history.back();" class="btn btn-default">返回</button>
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
                    <h4 class="modal-title" id="myModalLabel" class="update_hours_board">特休時數修改</h4>
                </div>
                <div class="modal-body">
                    <table id="add_hours_board" style="width:auto;margin:0 auto;" class="table table-bordered">
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">原來特休時數</td>
                            <td style="border-bottom: solid 1px;">
                                <input id="update_origin_hours" type="number" step="0.01" disabled="disabled">
                            </td>
                        </tr>
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>新增/減少時數</td>
                            <td style="border-bottom: solid 1px;">
                                <input id="update_hours" type="number" step="0.01">
                                <div id="update_hours_hit" style="color:red;"></div>
                            </td>
                        </tr>
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">備註</td>
                            <td style="border-bottom: solid 1px;">
                                <textarea style="width:100%;resize: none;font-size: 20px;min-height:10em;" id="update_hours_remark"></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" onclick="location.reload();">重置</button>
                    <button type="button" class="btn btn-default" onclick="update_annual_hours();">修改時數</button>
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
    <!-- <script src="javascript/sweetalert2/sweetalert2.all.min.js"></script> -->
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
    <script>
        //設定js變數抓取使用者權限
        var authority_level = '<?php echo $_SESSION["authority"]; ?>';
    </script>
    <!-- ================== detail ================== -->
    <script type="text/javascript" src="js/resume_detail_v2.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>

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
