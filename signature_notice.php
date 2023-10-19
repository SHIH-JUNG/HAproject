<?php session_start(); ?>
<?php include("database/check_authority.php"); ?> <?php include("no_cache.php"); ?>

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
    <!--  fullcalendar行事曆  -->
    <link href='js/lib/main.css' rel='stylesheet' />
    <!--  table  -->
    <link rel="stylesheet" href="css/bootstrap-table.min.css">
    <!--  時間24小時  -->
    <link href="css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen">

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="description" content="快樂聯盟資管系統">
    <meta name="author" content="HANG">
    <title>個案管理系統</title>
    <!--行事曆自動換行-->
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
</head>
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
                        <li><span>首頁</span></li>
                    </ol>
                    <!--/麵包屑-->
                </div>
                <!-- /Title -->
                <!-- Footer -->
                <footer class="footer container-fluid">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <p>Copyright &copy; 2020國立屏東科技大學資訊管理系</p>
                        </div>
                    </div>
                </footer>
                <!-- /Footer -->
                <!-- /Title -->

                <!--row-->
                <!-- <div class="row">
                    <div style="zoom:80%" class="row text-center">
                        <div class="col-sm-12">
                            <div class="panel panel-default card-view">
                                <div class="panel-wrapper collapse in">
                                    <div class="panel-body">
                                        <div class="table-wrap">
                                            <div class="table-responsive">
                                                <div class="text-center">簽核</div>
                                                <br/>
                                                <div class="text-center">※<span style="color:blue;">當前使用者</span>的<span style="color:blue;">簽核狀態</span>若已簽核用<span style="color:#90ee90;">綠色</span>、未簽核用<span style="color:#FF9797;">紅色</span>、非需簽核者用白色背景提示。</div>
                                                <br/>
                                                <div class="panel-group" id="accordion_panel" role="tablist" aria-multiselectable="true">
                                                    
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!--/row-->

                <!--row-->
                <div class="row">
                    <div style="zoom:80%" class="row text-center">
                        <div class="col-sm-12">
                            <div class="panel panel-default card-view">
                                <div class="panel-wrapper collapse in">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-sm-12 col-xs-12">
                                                <div class="col-sm-12">
                                                    <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                                        <li class="nav-item active" role="presentation">
                                                            <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                                                <b>未簽核表單</b>
                                                            </a>
                                                        </li>
                                                        <li class="nav-item" role="presentation">
                                                            <a class="nav-link" id="profile-tab" data-toggle="pill" href="#two" role="tab" aria-selected="false">
                                                                <b>已簽核表單</b>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div class="tab-content" id="myTabContent">
                                                        <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                                            <div class="accordion" id="accordionExample1">
                                                                <div class="panel panel-default">
                                                                    <div class="panel-heading" id="headingOne">
                                                                        <h2 class="mb-0">
                                                                            <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                                                <span style="color:black;font-size:17px">未簽核表單</span>
                                                                            </button>
                                                                        </h2>
                                                                    </div>
                                                                    <div id="collapseOne" class="collapse in" aria-labelledby="headingOne" data-parent="#accordionExample1">
                                                                        <div class="panel-body scr_container">
                                                                            
                                                                            <div class="table-wrap">
                                                                                <div class="table-responsive">
                                                                                    <!-- <div class="text-center">簽核</div>
                                                                                    <br/> -->
                                                                                    <div class="text-center">※<span style="color:blue;">當前使用者</span>的<span style="color:blue;">簽核狀態</span>若已簽核用<span style="color:#90ee90;">綠色</span>、未簽核用<span style="color:#FF9797;">紅色</span>、非需簽核者用白色背景提示。</div>
                                                                                    <br/>
                                                                                    <div class="panel-group" id="accordion_panel_1" role="tablist" aria-multiselectable="true">
                                                                                        
                                                                                    </div>
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
                                                                    <div class="panel-heading" id="headingTwo">
                                                                        <h2 class="mb-0">
                                                                            <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                                <span style="color:black;font-size:17px">已簽核表單</span>
                                                                            </button>
                                                                        </h2>
                                                                    </div>
                                                                    <div id="collapseTwo" class="collapse in" aria-labelledby="headingTwo" data-parent="#accordionExample2">
                                                                        <div class="panel-body scr_container">
                                                                             
                                                                            <div class="table-wrap">
                                                                                <div class="table-responsive">
                                                                                    <!-- <div class="text-center">簽核</div>
                                                                                    <br/> -->
                                                                                    <div class="text-center">※<span style="color:blue;">當前使用者</span>的<span style="color:blue;">簽核狀態</span>若已簽核用<span style="color:#90ee90;">綠色</span>、未簽核用<span style="color:#FF9797;">紅色</span>、非需簽核者用白色背景提示。</div>
                                                                                    <br/>
                                                                                    <div class="panel-group" id="accordion_panel_2" role="tablist" aria-multiselectable="true">
                                                                                        
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
                </div>
                <!--/row-->

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
    <!-- Init -->
    <script src="javascript/init.js"></script>
    <!-- ================== JS notify控制 ================== -->
    <script src="javascript/notify/notyf.min.js"></script>
    <!-- ================== JS sweetalert2 ================== -->
    <script src="javascript/sweetalert2/sweetalert2.min.js"></script>
    <!-- ================== JS IE sweetalert ================== -->
    <script src="javascript/sweetalert2/core-js.js"></script>
    <!-- ================== JQ cookie.js ================== -->
    <script src="javascript/cookie/js.cookie-2.1.3.min.js"></script>
    <!-- ================== 登出設定 ================== -->
    <script src='js/logout.js'></script>
    <!-- ================== moment ================== -->
    <script src='javascript/moment.min.js'></script>
    <!-- ================== table ================== -->
    <script src="javascript/bootstrap-table.min.js"></script>
    <script src="javascript/bootstrap-table-zh-TW.min.js"></script>
    <script>
        //設定js變數抓取使用者名稱
        var user_name = '<?php echo $_SESSION["name"]; ?>';
    </script>
    <!-- ================== announcement ================== -->
    <script src="js/signature_notice.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>
    <!--     ==================  時間24小時 ================== -->
    <script type="text/javascript" src="javascript/bootstrap-datetimepicker.js" charset="UTF-8"></script>
    <script type="text/javascript" src="javascript/bootstrap-datetimepicker.zh-TW.js" charset="UTF-8"></script>
</body>

</html>
<?php
    // if(isset($href_name))
    // {
    //     if(!in_array($href_name,$authority_pages))
    //     {
    //         echo '<script> swal({
    //                 title:"您無權限查看當前頁面!",
    //                 type:"error"
    //             }).then(function(){
    //                 window.history.go (-1); 
    //             }); 
    //             </script>';  
    //     } 
    // }

?>
<?php include("database/timeout_logout.php"); ?>
