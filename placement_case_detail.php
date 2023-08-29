<?php session_start(); ?>
<?php include("database/check_authority.php"); ?><?php include("no_cache.php"); ?>
<?php @$values1 =  $_GET['form_type']; ?>
<!DOCTYPE html>
<html>

<head>
    <!--網頁icon-->
    <link rel="icon" href="image/LOGO.png" type="image/x-icon">
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
    <title>個案管理系統</title>
</head>
<style>
    table {
        margin-left: auto;
        margin-right: auto;
    }
</style>
<!--<SVG>引入bootstrap icon-->

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
                        <li><span><a href="">開案管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="placement_case.php">安置評估</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="placement_case.php">安置評估一覽表</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a id="history2" href="">安置評估個案紀錄</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a id="history" href="">個案服務摘要表</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span id="form_type_name">個案服務摘要表</span></li>
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

                <!-- Form -->
                    <?php 
                        if(file_exists("placement_case_forms/form_".trim($values1).".php"))
                        {
                            include("placement_case_forms/form_".trim($values1).".php"); 
                        }
                        else
                        {
                            echo "<script> alert('發生錯誤!'); window.history.go(-1); </script>";

                        }
                    ?>
                <!-- /Form -->
            </div>
            <!--/網頁內容-->
        </div>
    </div>


   <!--\ Modal -->
        <div class="modal fade" id="case_storage_model" tabindex="-1" role="dialog" aria-labelledby="case_storage_modelLabel" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="case_storage_modelLabel">選擇儲存方式</h4>
                </div>
                <div class="modal-body">
                    <table style="width:auto;margin:0 auto;" class="table table-bordered">
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>個案資料儲存方式</td>
                            <td style="border-bottom: solid 1px;">
                                <select id="case_storage_type" style="width:100%;">
                                    <option value="cache">暫存</option>
                                    <option value="storage">確認上傳</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="case_storage_tr" style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">督導</td>
                            <td style="border-bottom: solid 1px;">
                                <select id="supervise1" style="width:100%;">
                                    <option value="">請選擇</option>
                                </select><br/>
                                <span style="font-size:8px;color:red;">若選擇『確認上傳』，請選擇督導名稱。</span>
                            </td>
                        </tr>
                        
                        <tr class="case_storage_tr" style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">執行長</td>
                            <td style="border-bottom: solid 1px;">
                                <select id="supervise2" style="width:100%;">
                                    <option value="">請選擇</option>
                                </select><br/>
                                <span style="font-size:8px;color:red;">若選擇『確認上傳』，請選擇執行長名稱。</span>
                            </td>
                        </tr>
                        <tr class="case_storage_tr" style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;">使用者登入密碼</td>
                            <td style="border-bottom: solid 1px;">
                                <input id="case_storage_pwd" type="password"><br/>
                                <span style="font-size:8px;color:red;">若選擇『確認上傳』，請輸入您的使用者登入密碼。</span>
                            </td>
                        </tr>

                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" id="case_storage_submit" class="btn btn-default">送出</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal /-->


    <!--\ Modal -->
    <div class="modal fade" id="trans_grade_model" tabindex="-1" role="dialog" aria-labelledby="trans_grade_modelLabel" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="trans_grade_modelLabel">個案轉級</h4>
                </div>
                <div class="modal-body">
                    <table style="width:auto;margin:0 auto;" class="table table-bordered">
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>個案分級</td>
                            <td style="border-bottom: solid 1px;">
                                <select id="case_grade" style="width:200px;">
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="case_stage_tr" style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;"><i style="color:red;">※</i>類別屬性階段</td>
                            <td style="border-bottom: solid 1px;">
                                <input id="case_stage" type="text">
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" id="trans_grade_submit" class="btn btn-default">送出</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal /-->

    <!--\ Modal -->
    <div class="modal fade" id="trans_user_model" tabindex="-1" role="dialog" aria-labelledby="trans_user_modelLabel" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="trans_user_modelLabel">轉案</h4>
                </div>
                <div class="modal-body">
                    <table style="width:auto;margin:0 auto;" class="table table-bordered">
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;"><i style="color:red;">※</i>更換個案負責人</td>
                            <td style="border-bottom: solid 1px;">
                                <select id="case_user" style="width:200px;">
                                    <!-- <option value="">所有</option> -->
                                </select>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" id="trans_user_submit" class="btn btn-default">送出</button>
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
    <!-- ================== moment ================== -->
    <script src='javascript/moment2.29.0.min.js'></script>
    <!-- ================== table ================== -->
    <script src="javascript/bootstrap1.18.0-table.min.js"></script>
    <script src="javascript/bootstrap-table1.11.1-zh-TW.min.js"></script>
    <script>
        //設定js變數抓取使用者名稱
        var assign_name = '<?php echo $_SESSION["name"]; ?>';

        //設定js變數抓取使用者權限
        var login_user_pwd = '<?php echo $_SESSION['pwd']; ?>';

    </script>
    <script>
         $(document).ready(function () {

            var form_t = '<?php echo $values1; ?>';
        
            //生活品質問卷radio focus設定
            function radio_focus()
            {
                $("#form_1 table tr:nth-child(odd) td:nth-child(even)").click(function(){
                    var td_index = $(this).text().slice(0,1);
                    $("[name='life_answer"+td_index+"']")[0].focus(function(){
                            $("input").css("background-color","#dfd");
                    });
                }); 
            }


            if(form_t == "life")
            {
                radio_focus();
            }
        
    }); 
    </script>

    <?php
        if($values1 == "health")
        {
            echo '<script src="js/health_other_detail.js'."?".date("Y-m-d h:i:sa").'"></script>';
        }
        if($values1 == "resource")
        {
            echo '<script src="js/resource_other_detail.js'."?".date("Y-m-d h:i:sa").'"></script>';
        }
    ?>
    <!-- ================== placement_case_detail.js ================== -->
    <script src="js/placement_case_detail.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>

</body>

</html>
<?php include("database/timeout_logout.php"); ?>
