<?php session_start(); ?>
<?php include("database/check_authority.php"); ?> <?php include("no_cache.php"); ?>
<?php $href_name =  'page_d'; ?>
<?php 
    $user = $_SESSION['name'];
    $authority = $_SESSION['authority'];
?>

<?php @$training_id =  $_GET['training_id']; ?>
<?php @$acc_id =  $_GET['acc_id']; ?>
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
    <!-- ================== CSS font-awesome ================== -->
    <link href="font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <!-- Bootstrap FileDialog -->
    <link rel="stylesheet" href="css/bootstrap-file-dialog-dist/bootstrap.fd.css">
    <!--  table  -->
    <!--    <link rel="stylesheet" href="css/bootstrap-table.min.css">-->
    <!-- ================== 匯出EXCEL ================== -->
    <link href="css/jquery.dataTables1.10.16.min.css" rel="stylesheet" />
    <link href="css/buttons.dataTables1.5.1.min.css" rel="stylesheet" />
    <!--  table  -->
    <link rel="stylesheet" href="css/bootstrap-table.min.css">
    <!--  日期民國  -->
    <link data-require="jqueryui@*" rel="stylesheet" href="css/jquery-ui.css" />
    <link href="css/dtsel.css" rel="stylesheet" />

    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="description" content="快樂聯盟資管系統">
    <meta name="author" content="HANG">
    <title>個案管理系統</title>
</head>
<style>
    .NOline {
        word-break: keep-all;
        /*必須*/
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
                        <li><span><a href="training.php">行政管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="training.php">員工管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="training.php">在職訓練</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>員工在職訓練一覽表</span></li>
                    </ol>
                    <!--/麵包屑-->
                </div>
                <!-- /Title -->
                <!-- Footer -->
                <footer class="footer container-fluid pl-30 pr-30">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <p>Copyright &copy; 台灣世界快樂聯盟</p>
                            <span style="display:none" id="counter"></span>
                        </div>
                    </div>
                </footer>
                <!-- /Footer -->
                <!-- /Title -->
                <?php
                    if(!empty($_GET['training_id']) && !empty($_GET['acc_id']))
                    {
                        include("training_content.php");
                    }
                    elseif($authority <= 4 || $authority == 6) 
                    {
                        include("training_supervise_content.php");
                    } 
                    else 
                    {
                        include("training_content.php");
                    }
                ?>
            </div>
            <!--/網頁內容-->
        </div>
    </div>
    <!-- /#wrapper -->

    <!--\ Modal -->
    <div class="modal fade" id="update_rec_modal" tabindex="-1" role="dialog" aria-labelledby="update_rec_modal_label" data-backdrop="static" style="overflow:auto">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" onclick=clearSelectedFiles1()>&times;</span></button>
                    <h4 class="modal-title" id="update_rec_modal_label">在職訓練記錄</h4>
                </div>
                <div class="modal-body">
                    <form id="form_modal">
                        <table id="update_all_data" style="font-size: 18px;width:100%;margin:0 auto;" class="table table-bordered">
                            <tr style="text-align:left">
                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>日期</td>
                                <td style="border-bottom: solid 1px;">
                                    <input picker="u_tr_datetime" id="u_training_date" name="ch_datepicker" type="text">
                                    <select picker="u_tr_datetime" id="u_tr_start_time_h"></select>
                                    <label>：</label>
                                    <select picker="u_tr_datetime" id="u_tr_start_time_m">
                                        <option>00</option>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                        <option>50</option>
                                    </select>
                                    <label>至</label>
                                    <select picker="u_tr_datetime" id="u_tr_end_time_h"></select>
                                    <label>：</label>
                                    <select picker="u_tr_datetime" id="u_tr_end_time_m">
                                        <option>00</option>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                        <option>50</option>
                                    </select>
                                </td>
                            </tr>

                            <tr style="text-align:left">
                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>課程內容</td>
                                <td style="border-bottom: solid 1px;"><input id="u_training_name" type="text"></td>
                            </tr>

                            <tr style="text-align:left">
                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>時數</td>
                                <td style="border-bottom: solid 1px;"><input id="u_hours" type="number"></td>
                            </tr>

                            <tr style="text-align:left">
                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>地點</td>
                                <td style="border-bottom: solid 1px;">
                                    <input id="u_place" type="text">
                                </td>
                            </tr>
                            <tr style="text-align:left">
                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">檔案上傳</td>
                                    <td style="border-bottom: solid 1px;">
                                        <div class="col-sm-8">
                                            <div class="text-left">
                                                <div id="u_training_file"></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            <tr style="text-align:left">
                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">備註</td>
                                <td>
                                    <textarea style="height:10em;width:700px;resize: none;font-size: 20px;" id="u_remark" placeholder="請輸入備註"></textarea>
                                </td>
                            </tr>
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

    <!-- JavaScript -->
    <!-- Bootstrap and jQuery -->
    <script src="javascript/jquery.min.js"></script>
    <script src="javascript/bootstrap.min.js"></script>
    <!-- ================== 匯出EXCEL ================== -->
    <script src="javascript/jquery.dataTables1.10.16.min.js"></script>
    <script src="javascript/dataTables1.2.2.buttons.min.js"></script>
    <script src="javascript/jszip2.5.0.min.js"></script>
    <script src="javascript/buttons1.2.2.html5.min.js"></script>
    <!-- 表格 JavaScript -->
    <!-- <script src="javascript/jquery.dataTables.min.js"></script>
    <script src="javascript/dataTables-data.js"></script> -->
    <!-- Bootstrap FileDialog -->
    <script src="javascript/bootstrap-file-dialog-dist/bootstrap.fd.js"></script>

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
    <!-- 日期民國-->
    <script src="javascript/jquery-ui.min.js"></script>
    <script src="javascript/datepickerTw2.js"></script>
    <!-- ================== counsel ================== -->
    <!-- <script type="text/javascript" src="js/training.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script> -->
    <?php
        if(!empty($_GET['training_id']) && !empty($_GET['acc_id']))
        {
            echo '<script type="text/javascript" src="js/training.js'.'?'.date('Y-m-d h:i:sa').'"></script>';
        }
        elseif ($authority <= 4 || $authority == 6) {
            echo '<script type="text/javascript" src="js/training_supervise.js'.'?'.date('Y-m-d h:i:sa').'"></script>';
        } 
        else 
        {
            echo '<script type="text/javascript" src="js/training.js'.'?'.date('Y-m-d h:i:sa').'"></script>';
        }
    ?>
    <!-- ================== 地區選擇下拉 ================== -->
    <!--
    <script src="js/jQuery-TWzipcode-master/twzipcode.js"></script>
    <script src="js/jQuery-TWzipcode-master/jquery.twzipcode.js"></script>
    <script src="js/jQuery-TWzipcode-master/jquery.twzipcode.min.js"></script>
    -->
</body>
<script>
    //$("#twzipcode").twzipcode({
    //    css: ['col-sm-12',],
    //});
    //$.fn.dataTable.ext.classes.sPageButton = 'btn btn-primary'; // Change Pagination Button Class
</script>

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