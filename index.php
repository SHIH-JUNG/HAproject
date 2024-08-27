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
    /* #pop{background:#fff;width:auto; height:auto;font-size:18px;position:fixed;right:0;bottom:0;} 
    #popHead{line-height:32px;background:#f6f0f3;border-bottom:1px solid #e0e0e0;font-size:12px; 
    padding-left:10px;} 
    #popHead h2{font-size:14px;color:#666;line-height:32px;height:32px;} 
    #popHead #popClose{position:absolute;right:10px;top:1px;} 
    #popHead a#popClose:hover{color:#f00;cursor:pointer;}  */
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
                            <p>Copyright &copy; 台灣世界快樂聯盟</p>
                        </div>
                    </div>
                </footer>
                <!-- /Footer -->
                <!-- /Title -->
                <div class="row">
                    <div style="zoom:80%" class="row text-center">
                        <div class="col-sm-12">
                            <div class="panel panel-default card-view">
                                <div class="panel-wrapper collapse in">
                                    <div class="panel-body">
                                        <div class="table-wrap">
                                            <div class="table-responsive">
                                                <div class="text-center">訊息公告</div>
                                                <table style="font-size:15px;font-family:新細明體;" class="text-center table-striped table-sm" id="ann_table" data-toggle="table" data-page-size=5 data-search="false" data-pagination="true" data-pagination-parts="[pageList]">
                                                    <thead>
                                                        <tr>
                                                            <th data-width="20" data-width-unit="%">日期</th>
                                                            <th data-width="65" data-width-unit="%">標題</th>
                                                            <th data-width="15" data-width-unit="%">承辦人員</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="ann"></tbody>
                                                </table>
                                                <br>
                                                <button style="font-size:15px" id="ann_add" class="btn btn-default"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                                        <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                                        <path fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                                                    </svg>新增</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="zoom:80%" class="row text-center">
                        <div class="col-sm-12">
                            <div class="panel panel-default card-view">
                                <div class="panel-wrapper collapse in">
                                    <div class="panel-body">
                                        <div class="table-wrap">
                                            <div class="table-responsive">
                                                <div class="text-center">車輛管理</div>
                                                <table style="font-size:15px;font-family:新細明體;" class="text-center table-striped table-sm" data-toggle="table" data- data-page-size=5 data-search="false" data-pagination="true" data-pagination-parts="[pageList]">
                                                    <thead>
                                                        <tr>
                                                            <th data-width="15" data-width-unit="%">日期</th>
                                                            <th data-width="10" data-width-unit="%">外出時間</th>
                                                            <th data-width="10" data-width-unit="%">事由</th>
                                                            <th data-width="15" data-width-unit="%">地點</th>
                                                            <th data-width="15" data-width-unit="%">使用的交通工具</th>
                                                            <th data-width="10" data-width-unit="%">返回的時間</th>
                                                            <th data-width="15" data-width-unit="%">外出登記者</th>
                                                            <th data-width="10" data-width-unit="%"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="vehicle_retain_info"></tbody>
                                                </table>
                                                <br>
                                                <button style="font-size:15px" id="vehicle_retain_add" class="btn btn-default"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                                        <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                                        <path fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                                                    </svg>新增</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div style="zoom:80%" class="row text-center">
                        <div class="col-sm-12">
                            <div class="panel panel-default card-view">
                                <div class="panel-wrapper collapse in">
                                    <div class="panel-body">
                                        <div class="table-wrap">
                                            <div class="table-responsive">
                                                <div class="text-center">活動</div>
                                                <table style="font-size:15px;font-family:新細明體;" class="text-center table-striped table-sm" data-toggle="table" data- data-page-size=5 data-search="false" data-pagination="true" data-pagination-parts="[pageList]">
                                                    <thead>
                                                        <tr>
                                                            <th data-width="20" data-width-unit="%">日期</th>
                                                            <th data-width="65" data-width-unit="%">標題</th>
                                                            <th data-width="15" data-width-unit="%">承辦人員</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="event_info"></tbody>
                                                </table>
                                                <br>
                                                <button style="font-size:15px" id="event_add" class="btn btn-default"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                                        <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                                        <path fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                                                    </svg>新增</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <div style="zoom:80%" class="row text-center">
                        <div class="col-sm-12">
                            <div class="panel panel-default card-view">
                                <div class="panel-wrapper collapse in">
                                    <div class="panel-body">
                                        <div class="table-wrap">
                                            <div class="table-responsive">
                                                <div class="text-center">社工訪視</div>
                                                <table style="font-size:15px;font-family:新細明體;" class="text-center table-hover table-striped table-sm" data-toggle="table" data- data-page-size=5 data-search="false" data-pagination="true" data-pagination-parts="[pageList]">
                                                    <thead>
                                                        <tr>
                                                            <th data-width="15" data-width-unit="%">訪視日期</th>
                                                            <th data-width="40" data-width-unit="%">標題</th>
                                                            <th data-width="10" data-width-unit="%">承辦人員1</th>
                                                            <th data-width="10" data-width-unit="%">承辦人員2</th>
                                                            <th data-width="15" data-width-unit="%">結束時間</th>
                                                            <th data-width="10" data-width-unit="%"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="visit_info"></tbody>
                                                </table>
                                                <br>
                                                <button style="font-size:15px" id="visit_add" class="btn btn-default"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                                        <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                                        <path fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                                                    </svg>新增
                                                </button>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="zoom:80%" class="row text-center">
                        <div class="col-sm-12">
                            <div class="panel panel-default card-view">
                                <div class="panel-wrapper collapse in">
                                    <div class="panel-body">
                                        <div class="table-wrap">
                                            <div class="table-responsive">
                                                <div class="text-center">請假</div>
                                                <table style="font-size:15px;font-family:新細明體;" class="text-center table-hover table-striped table-sm" data-toggle="table" data- data-page-size=5 data-search="false" data-pagination="true" data-pagination-parts="[pageList]">
                                                    <thead>
                                                        <tr>
                                                            <th data-width="20" data-width-unit="%">請假日期</th>
                                                            <th data-width="20" data-width-unit="%">請假人員</th>
                                                            <th data-width="15" data-width-unit="%">假別</th>
                                                            <th data-width="10" data-width-unit="%">時數</th>
                                                            <th data-width="20" data-width-unit="%">職務代理人</th>
                                                            <th data-width="10" data-width-unit="%">審核狀態</th>
                                                            <th data-width="5" data-width-unit="%"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="dayoff_info"></tbody>
                                                </table>
                                                <br>
                                                
                                                <!-- <button style="font-size:15px" id="dayoff_add" class="btn btn-default"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                                        <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                                        <path fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                                                    </svg>新增</button> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="zoom:80%" class="row text-center">
                        <div class="col-sm-12">
                            <div class="panel panel-default card-view">
                                <div class="panel-wrapper collapse in">
                                    <div class="panel-body">
                                        <div class="table-wrap">
                                            <div class="table-responsive">
                                                <div class="text-center">會議記錄上傳提醒</div>
                                                <table style="font-size:15px;font-family:新細明體;" class="text-center table-hover table-striped table-sm" data-toggle="table" data- data-page-size=5 data-search="false" data-pagination="true" data-pagination-parts="[pageList]">
                                                    <thead>
                                                        <tr>
                                                            <th data-width="20" data-width-unit="%">建檔日期</th>
                                                            <th data-width="25" data-width-unit="%">標題</th>
                                                            <th data-width="15" data-width-unit="%">議程/記錄</th>
                                                            <th data-width="20" data-width-unit="%">狀態</th>
                                                            <th data-width="15" data-width-unit="%">創建人員</th>
                                                            <th data-width="5" data-width-unit="%"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="record_warn_info"></tbody>
                                                </table>
                                                <br>
                                                
                                                <!-- <button style="font-size:15px" id="dayoff_add" class="btn btn-default"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                                        <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                                        <path fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                                                    </svg>新增</button> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="zoom:80%" class="row text-center">
                        <div class="col-sm-12">
                            <div class="panel panel-default card-view">
                                <div class="panel-wrapper collapse in">
                                    <div class="panel-body">
                                        <div class="table-wrap">
                                            <div class="table-responsive">
                                                <div class="text-center">方案活動</div>
                                                <table style="font-size:15px;font-family:新細明體;" class="text-center table-striped table-sm" data-toggle="table" data- data-page-size=5 data-search="false" data-pagination="true" data-pagination-parts="[pageList]">
                                                    <thead>
                                                        <tr>
                                                            <th data-width="20" data-width-unit="%">日期</th>
                                                            <th data-width="65" data-width-unit="%">標題</th>
                                                            <th data-width="15" data-width-unit="%">承辦人員</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="program_act_info"></tbody>
                                                </table>
                                                <br>
                                                <!-- <button style="font-size:15px" id="program_act_add" class="btn btn-default"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                                        <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                                        <path fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" />
                                                    </svg>新增</button> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="zoom:80%" class="row text-center">
                        <div class="col-sm-12">
                            <div class="panel panel-default card-view">
                                <div class="panel-wrapper collapse in">
                                    <div class="panel-body">
                                        <div class="table-wrap">
                                            <div class="table-responsive">
                                                <div class="text-center">簽核</div>
                                                <button style="font-size:15px" onclick="go_to_signature_notice();" class="btn btn-warning"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                                                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                                </svg>查看簽核詳細資料</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="panel panel-default card-view">
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <div class="text-center">
                                                <h4>行事曆</h4>
                                            </div>
                                            <div id='calendar'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--/網頁內容-->
            <!--浮動視窗(add)-->
            <div class="modal fade" id="add" data-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="exampleModalLabel">新增行事曆</h4>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-sm-12 text-center">
                                    <input class="col-sm-12" id="title" type="text" placeholder="請輸入標題" required="required">
                                </div>
                                <div class="col-sm-12 text-center">
                                    <textarea class="col-sm-12" id="description" style="height:100px;margin-top:5px;resize: none" type="text" placeholder="請輸入內容" required="required"></textarea>
                                </div>
                                <div class="col-sm-12 text-center">
                                    <div class="col-sm-12">
                                        <label>開始時間</label>
                                    </div>
                                    <div class="col-sm-12">
                                        <div id="test" class="input-group date form_datetime" data-date-format="yyyy-mm-dd hh:ii" data-link-field="dtp_input1">
                                            <input id="start" class="form-control" type="text" value="" readonly>
                                            <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                            <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                                        </div>
                                    </div>
                                </div>
                                <div id="end_time" class="col-sm-12 text-center">
                                    <div class="col-sm-12">
                                        <label>結束時間</label>
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="input-group date form_datetime" data-date="" data-date-format="yyyy-mm-dd hh:ii" data-link-field="dtp_input2">
                                            <input id="end" class="form-control" type="text" value="" readonly>
                                            <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                            <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button id="cancel" type="button" class="btn btn-default" data-dismiss="modal" onclick="cancel()">取消</button>
                            <button id="add_new_note" type="button" class="btn btn-primary">新增</button>
                        </div>
                    </div>
                </div>
            </div>
            <!--/浮動視窗-->
            <!--浮動視窗(update)-->
            <div class="modal fade" id="update_delete" data-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="exampleModalLabel">修改行事曆</h4>
                        </div>
                        <div class="modal-body">
<!--                            <form method="post" id="form_add">-->
                                <div class="row">
                                    <div class="col-sm-12 text-center">
                                        <input class="col-sm-12" id="up_title" type="text">
                                    </div>
                                    <div class="col-sm-12 text-center">
                                        <textarea class="col-sm-12" id="up_description" style="height:100px;margin-top:5px;resize: none" type="text"></textarea>
                                    </div>
                                    <div class="col-sm-12 text-center">
                                        <a id="site"><button id="btn" hidden>連至網址</button></a>
                                    </div>
                                    <div id="start_time" class="col-sm-12 text-center">
                                        <div class="col-sm-12">
                                            <label>開始時間</label>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="input-group date form_datetime" data-date="" data-date-format="yyyy-mm-dd hh:ii" data-link-field="dtp_input3">
                                                <input id="up_start" class="form-control" type="text" value="" readonly>
                                                <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                                <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="end_time" class="col-sm-12 text-center">
                                        <div class="col-sm-12">
                                            <label>結束時間</label>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="input-group date form_datetime" data-date="" data-date-format="yyyy-mm-dd hh:ii" data-link-field="dtp_input4">
                                                <input id="up_end" class="form-control" type="text" value="" readonly>
                                                <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                                <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="end_time" class="col-sm-12 text-center">
                                        <div class="col-sm-12">
                                            <label>登錄人:</label><span id="publisher"></span>
                                        </div>
                                    </div>
                                </div>
<!--                            </form>-->
                        </div>
                        <div class="modal-footer">
                            <div class="text-left col-sm-6">
                                <button id="up_delete" type="button" class="btn btn-danger">刪除</button>
                            </div>
                            <div class="text-right col-sm-6">
                                <button id="up_cancel" type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                                <button id="up_note" type="button" class="btn btn-primary">修改</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--/浮動視窗-->
            <!--浮動視窗(add_ann)-->
            <div class="modal fade" id="add_ann_m" data-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="exampleModalLabel">新增公告</h4>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-sm-12 text-center">
                                    <label>標題</label>
                                </div>
                                <div class="col-sm-12 text-center">
                                    <input class="col-sm-12" id="ann_title" placeholder="請輸入標題" type="text">
                                </div>
                                <div class="col-sm-12 text-center">
                                    <label>可看到訊息的最低權限等級</label>
                                </div>
                                <div class="col-sm-12 text-center">
                                    <select class="col-sm-12" id="ann_authority">
                                        <option value="1">1-理事長</option>
                                        <option value="2">2-執行長</option>
                                        <option value="3">3-方案組長</option>
                                        <option value="4">4-公關組長</option>
                                        <option value="5">5-專案社工</option>
                                        <option value="6">6-行政人員</option>
                                        <option value="7">7-社工員</option>
                                        <option value="8">8-生輔員</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="text-center col-sm-12">
                                <button id="ann_cancel" type="button" class="btn btn-default" data-dismiss="modal" onclick="ann_cancel()">取消</button>
                                <button id="add_new_ann" type="button" class="btn btn-primary">新增</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--/浮動視窗(add_ann)-->
        </div>
    </div>

    <!--浮動視窗(add_vehicle_retain)-->
    <div class="modal fade" id="add_vehicle_retain_m" data-backdrop="static" tabindex="-1" aria-labelledby="add_vehicle_retain_ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="add_vehicle_retain_ModalLabel">新增外出登記</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <div class="col-sm-12">
                                <label>日期</label>
                            </div>
                            <div class="col-sm-12">
                                <div id="add_borrow_date_picker" class="input-group date form_date" data-date-format="yyyy-mm-dd" data-link-field="dtp_input1">
                                    <input id="add_borrow_date" class="form-control" type="text" value="" readonly>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 text-center">
                            <div class="col-sm-12">
                                <label>外出時間</label>
                            </div>
                            <div class="col-sm-12">
                                <div id="add_out_timestap_picker" class="input-group date form_time" data-date-format="hh:ii" data-link-field="dtp_input1">
                                    <input id="add_out_timestap" class="form-control" type="text" value="" readonly>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-12 text-center">
                            <label>事由</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <input class="col-sm-12" id="add_vr_reason" placeholder="請輸入事由" type="text">
                        </div>

                        <div class="col-sm-12 text-center">
                            <label>地點</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <input class="col-sm-12" id="add_vr_place" placeholder="請輸入地點" type="text">
                        </div>
                        
                        <div class="col-sm-12 text-center">
                            <label>交通工具</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <input class="col-sm-12" id="add_vr_vehicle" placeholder="請輸入交通工具" type="text">
                        </div>

                        <!-- <div class="col-sm-12 text-center">
                            <div class="col-sm-12">
                                <label>返回時間</label>
                            </div>
                            <div class="col-sm-12">
                                <div id="add_back_timestap_picker" class="input-group date form_datetime" data-date-format="hh:ii" data-link-field="dtp_input1">
                                    <input id="add_back_timestap" class="form-control" type="text" value="" readonly>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                                </div>
                            </div>
                        </div> -->

                        <div class="col-sm-12 text-center">
                            <label>外出者</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <select class="col-sm-12" id="add_vr_booker">
                                <option value="">請選擇</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="text-center col-sm-12">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <button id="add_new_vehicle_retain" type="button" class="btn btn-primary">新增</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/浮動視窗(add_vehicle_retain)-->

    <!--浮動視窗(update_vehicle_retain)-->
    <div class="modal fade" id="update_vehicle_retain_m" data-backdrop="static" tabindex="-1" aria-labelledby="update_vehicle_retain_ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="update_vehicle_retain_ModalLabel">修改外出登記</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <div class="col-sm-12">
                                <label>返回時間</label>
                            </div>
                            <div class="col-sm-12">
                                <div id="u_back_timestap_picker" class="input-group date form_time" data-date-format="hh:ii" data-link-field="dtp_input1">
                                    <input id="u_back_timestap" class="form-control" type="text" value="" readonly>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 text-center">
                            <div class="col-sm-12">
                                <label>日期</label>
                            </div>
                            <div class="col-sm-12">
                                <div id="u_borrow_date_picker" class="input-group date form_date" data-date-format="yyyy-mm-dd" data-link-field="dtp_input1">
                                    <input id="u_borrow_date" class="form-control" type="text" value="" readonly>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 text-center">
                            <div class="col-sm-12">
                                <label>外出時間</label>
                            </div>
                            <div class="col-sm-12">
                                <div id="u_out_timestap_picker" class="input-group date form_time" data-date-format="hh:ii" data-link-field="dtp_input1">
                                    <input id="u_out_timestap" class="form-control" type="text" value="" readonly>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-12 text-center">
                            <label>事由</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <input class="col-sm-12" id="u_vr_reason" placeholder="請輸入事由" type="text">
                        </div>

                        <div class="col-sm-12 text-center">
                            <label>地點</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <input class="col-sm-12" id="u_vr_place" placeholder="請輸入地點" type="text">
                        </div>
                        
                        <div class="col-sm-12 text-center">
                            <label>交通工具</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <input class="col-sm-12" id="u_vr_vehicle" placeholder="請輸入交通工具" type="text">
                        </div>
                        
                        <div class="col-sm-12 text-center">
                            <label>外出者</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <select class="col-sm-12" id="u_vr_booker">
                                <option value="">請選擇</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="text-center col-sm-12">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <button id="update_vehicle_retain_btn" onclick="update_vehicle_retain(this)" type="button" class="btn btn-primary">送出</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/浮動視窗(update_vehicle_retain)-->

    <!--浮動視窗(show_vehicle_retain)-->
    <div class="modal fade" id="show_vehicle_retain_m" data-backdrop="static" tabindex="-1" aria-labelledby="show_vehicle_retain_ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="show_vehicle_retain_ModalLabel">車輛管理-詳細資料</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        
                        <div class="col-sm-12 text-center">
                            <div class="col-sm-12">
                                <label>日期</label>
                            </div>
                            <div class="col-sm-12">
                                <div class="input-group date form_date" data-date-format="yyyy-mm-dd" data-link-field="dtp_input1">
                                    <input id="borrow_date" class="form-control" type="text" value="" readonly>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 text-center">
                            <div class="col-sm-12">
                                <label>外出時間</label>
                            </div>
                            <div class="col-sm-12">
                                <div class="input-group date form_time" data-date-format="hh:ii" data-link-field="dtp_input1">
                                    <input id="out_timestap" class="form-control" type="text" value="" readonly>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="col-sm-12 text-center">
                            <label>日期</label>
                        </div>
                        <div class="col-sm-12 text-center">
                             <input class="col-sm-12" id="borrow_date" placeholder="請輸入日期" type="text" readonly>
                        </div>
                        <div class="col-sm-12 text-center">
                            <label>外出時間</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <input class="col-sm-12" id="out_timestap" placeholder="請輸入外出時間" type="text" readonly>
                        </div> -->
                        <div class="col-sm-12 text-center">
                            <label>事由</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <input class="col-sm-12" id="vr_reason" placeholder="請輸入事由" type="text">  <!-- readonly> -->
                        </div>

                        <div class="col-sm-12 text-center">
                            <label>地點</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <input class="col-sm-12" id="vr_place" placeholder="請輸入地點" type="text">  <!-- readonly> -->
                        </div>
                        
                        <div class="col-sm-12 text-center">
                            <label>交通工具</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <input class="col-sm-12" id="vr_vehicle" placeholder="請輸入交通工具" type="text">  <!-- readonly> -->
                        </div>
                        <div class="col-sm-12 text-center">
                            <label>返回時間</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <input class="col-sm-12" id="back_timestap" placeholder="請輸入返回時間" type="text">  <!-- readonly> -->
                        </div>

                        <div class="col-sm-12 text-center">
                            <label>外出者</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <input class="col-sm-12" id="vr_booker" placeholder="請輸入外出者" type="text">  <!-- readonly> -->
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="text-center col-sm-12">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <button id="update_vehicle_retain_button" onclick="update_show_vehicle_retain_modal(this)" type="button" class="btn btn-primary">修改</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/浮動視窗(show_vehicle_retain)-->

    <!--浮動視窗(add_visit)-->
    <div class="modal fade" id="add_visit_m" data-backdrop="static" tabindex="-1" aria-labelledby="add_visit_ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="add_visit_ModalLabel">新增社工訪視</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <label>標題</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <input class="col-sm-12" id="visit_title" placeholder="請輸入標題" type="text">
                        </div>
                        <div class="col-sm-12 text-center">
                            <div class="col-sm-12">
                                <label>訪視時間</label>
                            </div>
                            <div class="col-sm-12">
                                <div id="test" class="input-group date form_datetime" data-date-format="yyyy-mm-dd hh:ii" data-link-field="dtp_input1">
                                    <input id="visit_time" class="form-control" type="text" value="" readonly>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 text-center">
                            <label>承辦人員1</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <select class="col-sm-12" id="visit_assign1">
                                <option value="">請選擇</option>
                            </select>
                        </div>
                        <div class="col-sm-12 text-center">
                            <label>承辦人員2</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <select class="col-sm-12" id="visit_assign2">
                                <option value="">請選擇</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="text-center col-sm-12">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <button id="add_new_visit" type="button" class="btn btn-primary">新增</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/浮動視窗(add_visit)-->

    <!--浮動視窗(update_visit)-->
    <div class="modal fade" id="update_visit_m" data-backdrop="static" tabindex="-1" aria-labelledby="update_visit_ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="update_visit_ModalLabel">社工訪視</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <div class="col-sm-12">
                                <label>訪視結束時間</label>
                            </div>
                            <div class="col-sm-12">
                                <div id="test" class="input-group date form_datetime" data-date-format="yyyy-mm-dd hh:ii" data-link-field="dtp_input1">
                                    <input id="visit_end_time" class="form-control" type="text" value="" readonly>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                                </div>
                            </div>
                            <div class="col-sm-12 text-center">
                                <label>備註</label>
                            </div>
                            <div class="col-sm-12 text-center">
                                <textarea class="col-sm-12" id="remark" placeholder="請輸入備註"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="text-center col-sm-12">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <button id="update_visit_btn" onclick="update_visit(this)" type="button" class="btn btn-primary">送出</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/浮動視窗(update_visit)-->

    <!--浮動視窗(show_visit)-->
    <div class="modal fade" id="show_visit_m" data-backdrop="static" tabindex="-1" aria-labelledby="show_visit_ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="show_visit_ModalLabel">社工訪視-詳細資料</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <label>標題</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <input class="col-sm-12" id="s_visit_title" placeholder="請輸入標題" type="text" disabled="disabled">
                        </div>
                        <div class="col-sm-12 text-center">
                            <div class="col-sm-12">
                                <label>訪視時間</label>
                            </div>
                            <div class="col-sm-12">
                                <div id="test" class="input-group date" data-date-format="yyyy-mm-dd hh:ii" data-link-field="dtp_input1">
                                    <input id="s_visit_time" class="form-control" type="text" value="" disabled="disabled">
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 text-center">
                            <label>承辦人員1</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <select class="col-sm-12" id="s_visit_assign1" disabled="disabled">
                                <option value="">請選擇</option>
                            </select>
                        </div>
                        <div class="col-sm-12 text-center">
                            <label>承辦人員2</label>
                        </div>
                        <div class="col-sm-12 text-center">
                            <select class="col-sm-12" id="s_visit_assign2" disabled="disabled">
                                <option value="">請選擇</option>
                            </select>
                        </div>
                        <div class="col-sm-12 text-center">
                            <div class="col-sm-12">
                                <label>訪視結束時間</label>
                            </div>
                            <div class="col-sm-12">
                                <div id="test" class="input-group date" data-date-format="yyyy-mm-dd hh:ii" data-link-field="dtp_input1">
                                    <input id="s_visit_end_time" class="form-control" type="text" value="" disabled="disabled">
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                                    <span class="input-group-addon"><span class="glyphicon glyphicon-th"></span></span>
                                </div>
                            </div>
                            <div class="col-sm-12 text-center">
                                <label>備註</label>
                            </div>
                            <div class="col-sm-12 text-center">
                                <textarea class="col-sm-12" id="s_visit_remark" placeholder="請輸入備註" disabled="disabled"></textarea>
                            </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="text-center col-sm-12">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <!-- <button onclick="update_visit()" type="button" class="btn btn-primary">新增</button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/浮動視窗(show_visit)-->

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
    <!-- ================== 行事曆 ================== -->
    <!-- <script src="js/lib/main.js"></script> -->
    <script src="javascript/index.global.min.js"></script>
    <!-- ================== 行事曆設定 ================== -->
    <script src="js/fullcalendar.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>
    <!-- ================== 登出設定 ================== -->
    <script src="js/logout.js"></script>
    <!-- ================== moment ================== -->
    <script src="javascript/moment.min.js"></script>
    <!-- ================== table ================== -->
    <script src="javascript/bootstrap-table.min.js"></script>
    <script src="javascript/bootstrap-table-zh-TW.min.js"></script>
    
    
    <script>
        //設定js變數抓取使用者名稱
        var assign_name = '<?php echo $_SESSION["name"]; ?>';
    </script>

    <!-- ================== announcement ================== -->
    <script src="js/index.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>
    <!--     ==================  時間24小時 ================== -->
    <script type="text/javascript" src="javascript/bootstrap-datetimepicker.js" charset="UTF-8"></script>
    <script type="text/javascript" src="javascript/bootstrap-datetimepicker.zh-TW.js" charset="UTF-8"></script>

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
