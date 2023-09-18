<?php session_start(); ?>
<?php include("database/check_authority.php"); ?><?php include("no_cache.php"); ?>
<?php $href_name =  'page_n1'; ?>
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
    <!--    <link rel="stylesheet" href="css/bootstrap-table.min.css">-->
    <!-- ================== 匯出EXCEL ================== -->
    <link href="css/jquery.dataTables1.10.16.min.css" rel="stylesheet" />
    <link href="css/buttons.dataTables1.5.1.min.css" rel="stylesheet" />
    <!--  日期民國  -->
    <link data-require="jqueryui@*" rel="stylesheet" href="css/jquery-ui.css" />
    <link href="css/dtsel.css" rel="stylesheet" />

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

    .NOline {
        word-break: keep-all;
        /*必須*/
    }

    .preview {position:absolute;background:#fff;padding:10px;display:none;}  
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
                        <li><span><a href="current_case.php">個案管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="current_case.php">開案管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="current_case.php">開案個案</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="current_case.php">開案個案一覽表</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a id="history" href="">個案紀錄</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>個案服務摘要表</span></li>
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
                <div style="zoom:80%" class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default card-view">
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="row" id="collapseTwo">
                                        <div class="col-sm-12 col-xs-12">
                                            <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item active" role="presentation">
                                                    <a class="nav-link" id="home-tab" data-toggle="pill" href="#case_tab" role="tab" aria-selected="true">
                                                        <b>個案評估表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#interlocution_tab" role="tab" aria-selected="false">
                                                        <b>會談紀錄</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#resource_tab" role="tab" aria-selected="false">
                                                        <b>社會資源應用表格</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#life_tab" role="tab" aria-selected="false">
                                                        <b>生活品質問卷</b>
                                                    </a>
                                                </li>

                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#health_tab" role="tab" aria-selected="false">
                                                        <b>健康管理評估表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#sullen_tab" role="tab" aria-selected="false">
                                                        <b>憂鬱量表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#employment_satif_tab" role="tab" aria-selected="false">
                                                        <b>就業需求評估表&就業服務滿意度調查表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#satif_tab" role="tab" aria-selected="false">
                                                        <b>服務滿意度量表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#familyship_tab" role="tab" aria-selected="false">
                                                        <b>家庭關係</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#BSRS5_tab" role="tab" aria-selected="false">
                                                        <b>BSRS-5量表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#settlement_tab" role="tab" aria-selected="false">
                                                        <b>安置、自立宿舍評估量表</b>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade in active" id="case_tab" role="tabpanel" aria-labelledby="home-tab">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="table-wrap">
                                                            <div class="table-responsive">
                                                                <div>
                                                                    <H3>個案評估表</H3>
                                                                </div>
                                                                <div>
                                                                    姓名：<span class="case_name"></span>
                                                                    ，開案日期：<span class="case_date"></span>
                                                                    ，個案類別：<span class="case_object_type"></span>
                                                                    ，類別屬性：<span class="case_property_type"></span>
                                                                    ，接案工作人員：<span class="case_user"></span>
                                                                </div>
                                                                <table id="case_all" style="width:auto;" class="table table-bordered">
                                                                    <th>建立日期</th>
                                                                    <th>填表日期</th>
                                                                    <th>類型</th>
                                                                    <th>評估結果</th>
                                                                    <th>檔案名稱/<br/>評估表內容</th>
                                                                    <th>備註</th>
                                                                    <th>修改/刪除</th>
                                                                    <th>簽核狀態</th>
                                                                    <th></th>
                                                                    <tbody id="case_full_add"></tbody>
                                                                </table>
                                                                <div class="text-right" style="font-size:16px;color:red;">※點擊簽核狀態已簽章藍字查看留言內容</div>
                                                            </div>
                                                        </div>
                                                        <div class="text-center">
                                                            <button id="case_add_new" type="button" class="btn btn-default" onclick="form_add_new(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                                                                <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                            </svg>
                                                            新增</button>
                                                            <button onclick="back_case_all_all();" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                                                            <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
                                                            </svg>返回</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="interlocution_tab" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="table-wrap">
                                                            <div class="table-responsive">
                                                                <div>
                                                                    <H3>會談紀錄</H3>
                                                                </div>
                                                                <div>
                                                                    姓名：<span class="case_name"></span>
                                                                    ，開案日期：<span class="case_date"></span>
                                                                    ，個案類別：<span class="case_object_type"></span>
                                                                    ，類別屬性：<span class="case_property_type"></span>
                                                                    ，接案工作人員：<span class="case_user"></span>
                                                                </div>
                                                                <table id="interlocution_all" style="width:auto;" class="table table-bordered">
                                                                    <th>建立日期</th>
                                                                    <th>類型</th>
                                                                    <th>會談日期</th>
                                                                    <th>問題陳述</th>
                                                                    <th>社工/關懷員</th>
                                                                    <th>檔案名稱/<br/>會談紀錄內容</th>
                                                                    <th>備註</th>
                                                                    <th>修改/刪除</th>
                                                                    <th>簽核狀態</th>
                                                                    <th></th>
                                                                    <tbody id="interlocution_full_add"></tbody>
                                                                </table>
                                                                <div class="text-right" style="font-size:16px;color:red;">※點擊簽核狀態已簽章藍字查看留言內容</div>
                                                            </div>
                                                        </div>
                                                        <button id="interlocution_add_new" type="button" class="btn btn-default" onclick="form_add_new(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                                                                <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                            </svg>
                                                            新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                                                            <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
                                                            </svg>返回</button>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="resource_tab" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="table-wrap">
                                                            <div class="table-responsive">
                                                                <div>
                                                                    <H3>社會資源應用表格</H3>
                                                                </div>
                                                                <div>
                                                                    姓名：<span class="case_name"></span>
                                                                    ，開案日期：<span class="case_date"></span>
                                                                    ，個案類別：<span class="case_object_type"></span>
                                                                    ，類別屬性：<span class="case_property_type"></span>
                                                                    ，接案工作人員：<span class="case_user"></span>
                                                                </div>
                                                                <table id="resource_all" style="width:auto;" class="table table-bordered">
                                                                    <th>建立日期</th>
                                                                    <th>類型</th>
                                                                    <th>檔案名稱/<br/>表格內容</th>
                                                                    <th>備註</th>
                                                                    <th>修改/刪除</th>
                                                                    <th>簽核狀態</th>
                                                                    <th></th>
                                                                    <tbody id="resource_full_add"></tbody>
                                                                </table>
                                                                <div class="text-right" style="font-size:16px;color:red;">※點擊簽核狀態已簽章藍字查看留言內容</div>
                                                            </div>
                                                        </div>
                                                        <button id="resource_add_new" type="button" class="btn btn-default" onclick="form_add_new(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                                                                <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                            </svg>
                                                            新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                                                            <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
                                                            </svg>返回</button>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="life_tab" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="table-wrap">
                                                            <div class="table-responsive">
                                                                <div>
                                                                    <H3>生活品質問卷</H3>
                                                                </div>
                                                                <div>
                                                                    姓名：<span class="case_name"></span>
                                                                    ，開案日期：<span class="case_date"></span>
                                                                    ，個案類別：<span class="case_object_type"></span>
                                                                    ，類別屬性：<span class="case_property_type"></span>
                                                                    ，接案工作人員：<span class="case_user"></span>
                                                                </div>
                                                                <table id="life_all" style="width:auto;" class="table table-bordered">
                                                                    <th>建立日期</th>
                                                                    <th>填表日期</th>
                                                                    <th>類型</th>
                                                                    <th>得分/結果</th>
                                                                    <th>前/中/後測</th>
                                                                    <th>檔案名稱/<br/>量表內容</th>
                                                                    <th>備註</th>
                                                                    <th>修改/刪除</th>
                                                                    <th>簽核狀態</th>
                                                                    <th style="width:5em;"></th>
                                                                    <tbody id="life_full_add"></tbody>
                                                                </table>
                                                                <div class="text-right" style="font-size:16px;color:red;">※點擊簽核狀態已簽章藍字查看留言內容</div>
                                                            </div>
                                                        </div>
                                                        <button id="life_add_new" class="btn btn-default" onclick="form_add_new(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                                                                <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                            </svg>
                                                            新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                                                            <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
                                                            </svg>返回</button>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="health_tab" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="table-wrap">
                                                            <div class="table-responsive">
                                                                <div>
                                                                    <H3>健康管理評估表</H3>
                                                                </div>
                                                                <div>
                                                                    姓名：<span class="case_name"></span>
                                                                    ，開案日期：<span class="case_date"></span>
                                                                    ，個案類別：<span class="case_object_type"></span>
                                                                    ，類別屬性：<span class="case_property_type"></span>
                                                                    ，接案工作人員：<span class="case_user"></span>
                                                                </div>
                                                                <div>
                                                                <table id="health_all" style="width:auto;" class="table table-bordered">
                                                                    <th>建立日期</th>
                                                                    <th>填表日期</th>
                                                                    <th>類型</th>
                                                                    <th>檔案名稱/<br/>量表內容</th>
                                                                    <th>備註</th>
                                                                    <th>修改/刪除</th>
                                                                    <th>簽核狀態</th>
                                                                    <th></th>
                                                                    <tbody id="health_full_add"></tbody>
                                                                </table>
                                                                <div class="text-right" style="font-size:16px;color:red;">※點擊簽核狀態已簽章藍字查看留言內容</div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <button id="health_add_new" class="btn btn-default" onclick="form_add_new(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                                                                <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                            </svg>
                                                            新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                                                            <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
                                                            </svg>返回</button>
                                                    </div>
                                                </div>


                                                <div class="tab-pane fade" id="sullen_tab" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="table-wrap">
                                                            <div class="table-responsive">
                                                                <div>
                                                                    <H3>憂鬱量表</H3>
                                                                </div>
                                                                <div>
                                                                    <table id="sullen_all" style="width:auto;" class="table table-bordered">
                                                                        <th>上傳日期</th>
                                                                        <th>分數</th>
                                                                        <th>檔案名稱</th>
                                                                        <th>前/中/後測</th>
                                                                        <th>備註</th>
                                                                        <th>修改/刪除</th>
                                                                        <th>簽核狀態</th>
                                                                    <th></th>
                                                                        <tbody id="sullen_full_add"></tbody>
                                                                    </table>
                                                                    <div class="text-right" style="font-size:16px;color:red;">※點擊簽核狀態已簽章藍字查看留言內容</div>
                                                           </div>
                                                            </div>
                                                        </div>
                                                        <button id="sullen_add_new" class="btn btn-default" onclick="form_upload_new(this)">新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                                                            <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
                                                            </svg>返回</button>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="employment_satif_tab" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="table-wrap">
                                                            <div class="table-responsive">
                                                                <div>
                                                                    <H3>就業需求評估表&就業服務滿意度調查表</H3>
                                                                </div>
                                                                <div>
                                                                    姓名：<span class="case_name"></span>
                                                                    ，開案日期：<span class="case_date"></span>
                                                                    ，個案類別：<span class="case_object_type"></span>
                                                                    ，類別屬性：<span class="case_property_type"></span>
                                                                    ，接案工作人員：<span class="case_user"></span>
                                                                </div>
                                                                <div>
                                                                <table id="employment_satif_all" style="width:auto;" class="table table-bordered">
                                                                        <th>建立日期</th>
                                                                        <th>填表日期</th>
                                                                        <th>類型</th>
                                                                        <th>總分</th>
                                                                        <th>檔案名稱/<br/>量表內容</th>
                                                                        <th>備註</th>
                                                                        <th>修改/刪除</th>
                                                                        <th>簽核狀態</th>
                                                                    <th></th>
                                                                        <tbody id="employment_satif_full_add"></tbody>
                                                                    </table>
                                                                    <div class="text-right" style="font-size:16px;color:red;">※點擊簽核狀態已簽章藍字查看留言內容</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button id="employment_satif_add_new" class="btn btn-default" onclick="form_add_new(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                                                                <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                            </svg>
                                                            新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                                                            <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
                                                            </svg>返回</button>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="satif_tab" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="table-wrap">
                                                            <div class="table-responsive">
                                                                <div>
                                                                    <H3>服務滿意度量表</H3>
                                                                </div>
                                                                <div>
                                                                    姓名：<span class="case_name"></span>
                                                                    ，開案日期：<span class="case_date"></span>
                                                                    ，個案類別：<span class="case_object_type"></span>
                                                                    ，類別屬性：<span class="case_property_type"></span>
                                                                    ，接案工作人員：<span class="case_user"></span>
                                                                </div>
                                                                <div>
                                                                <table id="satif_all" style="width:auto;" class="table table-bordered">
                                                                        <th>建立日期</th>
                                                                        <th>填表日期</th>
                                                                        <th>類型</th>
                                                                        <th>總分</th>
                                                                        <th>檔案名稱/<br/>量表內容</th>
                                                                        <th>備註</th>
                                                                        <th>修改/刪除</th>
                                                                        <th>簽核狀態</th>
                                                                    <th></th>
                                                                        <tbody id="satif_full_add"></tbody>
                                                                    </table>
                                                                    <div class="text-right" style="font-size:16px;color:red;">※點擊簽核狀態已簽章藍字查看留言內容</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button id="satif_add_new" class="btn btn-default" onclick="form_add_new(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                                                                <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                            </svg>
                                                            新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                                                            <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
                                                            </svg>返回</button>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="familyship_tab" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="table-wrap">
                                                            <div class="table-responsive">
                                                                <div>
                                                                    <H3>家庭關係</H3>
                                                                </div>
                                                                <div>
                                                                    姓名：<span class="case_name"></span>
                                                                    ，開案日期：<span class="case_date"></span>
                                                                    ，個案類別：<span class="case_object_type"></span>
                                                                    ，類別屬性：<span class="case_property_type"></span>
                                                                    ，接案工作人員：<span class="case_user"></span>
                                                                </div>
                                                                <div>
                                                                <table id="familyship_all" style="width:auto;" class="table table-bordered">
                                                                        <th>建立日期</th>
                                                                        <th>填表日期</th>
                                                                        <th>類型</th>
                                                                        <th>總分</th>
                                                                        <th>前/中/後測</th>
                                                                        <th>檔案名稱/<br/>量表內容</th>
                                                                        <th>備註</th>
                                                                        <th>修改/刪除</th>
                                                                        <th>簽核狀態</th>
                                                                    <th></th>
                                                                        <tbody id="familyship_full_add"></tbody>
                                                                    </table>
                                                                    <div class="text-right" style="font-size:16px;color:red;">※點擊簽核狀態已簽章藍字查看留言內容</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button id="familyship_add_new" class="btn btn-default" onclick="form_add_new(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                                                                <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                            </svg>
                                                            新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                                                            <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
                                                            </svg>返回</button>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="BSRS5_tab" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="table-wrap">
                                                            <div class="table-responsive">
                                                                <div>
                                                                    <H3>BSRS-5量表</H3>
                                                                </div>
                                                                <div>
                                                                <table id="BSRS5_all" style="width:auto;" class="table table-bordered">
                                                                        <th>建立日期</th>
                                                                        <th>類型</th>
                                                                        <th>總分</th>
                                                                        <th>處置情形</th>
                                                                        <th>檔案名稱/<br/>量表內容</th>
                                                                        <th>備註</th>
                                                                        <th>修改/刪除</th>
                                                                        <th>簽核狀態</th>
                                                                    <th></th>
                                                                        <tbody id="BSRS5_full_add"></tbody>
                                                                    </table>
                                                                    <div class="text-right" style="font-size:16px;color:red;">※點擊簽核狀態已簽章藍字查看留言內容</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button id="BSRS5_add_new" class="btn btn-default" onclick="form_add_new(this)">新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                                                            <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
                                                            </svg>返回</button>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="settlement_tab" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="table-wrap">
                                                            <div class="table-responsive">
                                                                <div>
                                                                    <H3>安置、自立宿舍評估量表</H3>
                                                                </div>
                                                                <div>
                                                                    姓名：<span class="case_name"></span>
                                                                    ，開案日期：<span class="case_date"></span>
                                                                    ，個案類別：<span class="case_object_type"></span>
                                                                    ，類別屬性：<span class="case_property_type"></span>
                                                                    ，接案工作人員：<span class="case_user"></span>
                                                                </div>
                                                                <table id="settlement_all" style="width:auto;" class="table table-bordered">
                                                                    <th>建立日期</th>
                                                                    <th>填表日期</th>
                                                                    <th>類型</th>
                                                                    <th>評估結果</th>
                                                                    <th>檔案名稱/<br/>評估表內容</th>
                                                                    <th>備註</th>
                                                                    <th>修改/刪除</th>
                                                                    <th>簽核狀態</th>
                                                                    <th></th>
                                                                    <tbody id="settlement_full_add"></tbody>
                                                                </table>
                                                                <div class="text-right" style="font-size:16px;color:red;">※點擊簽核狀態已簽章藍字查看留言內容</div>
                                                            </div>
                                                        </div>
                                                        <div class="text-center">
                                                            <button id="settlement_add_new" type="button" class="btn btn-default" onclick="form_add_new(this)">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
                                                                <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                            </svg>
                                                            新增</button>
                                                            <button onclick="back_case_all_all();" class="btn btn-default"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                                                            <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
                                                            </svg>返回</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- <div class="text-right">       
                                                    <button id="add_new_inside" style="font-size:15px" type="button" class="btn btn-default">新增至在園家屬關懷一覽表</button>
                                                    <button id="end" style="font-size:15px" type="button" class="btn btn-default">新增至離園一覽表(結案)</button>
                                                    <button id="train" style="font-size:15px" type="button" class="btn btn-default">新增至培訓一覽表(結案)</button>
                                                </div> -->
                                            </div>
                                        </div>
                                    </div>
                                    <?php include("signnature_canvas2.php"); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <input id="stage_end" type="text" hidden>
            <!--/網頁內容-->
        </div>
    </div>


    <!--\ Modal -->
    <!-- <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel2" class="sign_msg_td_name">簽名留言</h4>
                </div>
                <div class="modal-body">
                    <table id="all_data" style="width:auto;margin:0 auto;" class="table table-bordered">
                        <tr style="text-align:left">
                            <td class="sign_msg_td_name" style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">督導<br/>留言內容</td>
                            
                            <td class="sign_msg_td_name" style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">執行長<br/>留言內容</td>
                        </tr>
                        <tr>
                            <td style="border-bottom: solid 1px;">
                                <textarea style="width:100%;resize: none;font-size: 20px;min-height:10em;" class="sign_msg1" disabled="disabled"></textarea>
                            </td>
                            <td style="border-bottom: solid 1px;">
                                <textarea style="width:100%;resize: none;font-size: 20px;min-height:10em;" class="sign_msg2" disabled="disabled"></textarea>
                            </td>
                        </tr>
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">督導<br/>留言時間</td>
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">執行長<br/>留言時間</td>
                        </tr>
                        <tr>
                            <td style="border-bottom: solid 1px;">
                                <input style="width:15em;" class="sign_msg_time1" type="datetime" disabled="disabled">
                            </td>
                            <td style="border-bottom: solid 1px;">
                                <input style="width:15em;" class="sign_msg_time2" type="datetime" disabled="disabled">
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div> -->
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
                    <table id="myModal2_all_data" style="width:auto;margin:0 auto;" class="table table-bordered">
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

    <!--\ Modal -->
    <div class="modal fade" id="delete_upload_data_modal" tabindex="-1" role="dialog" aria-labelledby="delete_upload_data_modal_label" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="delete_upload_data_modal_label">刪除量表檔案</h4>
                </div>
                <div class="modal-body">
                    <table id="delete_upload_all_data" style="width:auto;margin:0 auto;" class="table table-bordered">
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">使用者密碼</td>
                            <td style="border-bottom: solid 1px;">
                                <input style="width:15em;" id="input_user_password" type="password">
                                <br/>
                                <span style="color:red;">
                                    ※請輸入您的使用者登入密碼，以確認繼續當前操作
                                </span>                           
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button id="delete_upload_data_btn" type="button" class="btn btn-default">送出</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal /-->

    <!--\ Modal -->
    <div class="modal fade" id="update_upload_data_modal_type1" tabindex="-1" role="dialog" aria-labelledby="update_upload_data_modal_type1_label" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="update_upload_data_modal_type1_label">修改量表檔案</h4>
                </div>
                <div class="modal-body">
                    <form id="form_modal_type1">
                        <table id="update_upload_all_data_1" style="width:auto;margin:0 auto;" class="table table-bordered">
                            <tr style="text-align:left">
                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">上傳日期</td>
                                <td style="border-bottom: solid 1px;">
                                    <div class="col-sm-12">
                                        <div class="text-left">
                                            <input name="modal_type1_answer1" type="date"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr style="text-align:left">
                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">量表分數</td>
                                    <td style="border-bottom: solid 1px;">
                                        <div class="col-sm-12">
                                            <div class="text-left">
                                                <input name="modal_type1_answer2" type="number"/>
                                            </div>
                                        </div>
                                    </td>
                            </tr>
                            <tr style="text-align:left">
                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">上傳檔案</td>
                                <td style="border-bottom: solid 1px;">
                                    <div class="col-sm-12">
                                        <div class="text-left">
                                            <input name="modal_type1_answer_file" type="file"/>
                                            <br>
                                            <div id="modal_type1_answer_file"></div>
                                            <img src="" id="modal_type1_answer_file_img" style="display:none;" />
                                        </div>
                                    </div>
                                    <br/>
                                    <span style="color:blue;">                          
                                        ※原先的檔案將會被刪除或覆蓋
                                    </span>                           
                                </td>
                            </tr>
                            <tr style="text-align:left">
                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">前/中/後測</td>
                                <td style="border-bottom: solid 1px;">
                                    <div class="col-sm-12">
                                        <div class="text-left">
                                            <select name="modal_type1_answer3">
                                                <option value="">請選擇</option>
                                                <option value="前測">前測</option>
                                                <option value="中測">中測</option>
                                                <option value="後測">後測</option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr style="text-align:left">
                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">備註</td>
                                <td style="border-bottom: solid 1px;">
                                    <div class="col-sm-12">
                                        <div class="text-left">
                                            <textarea style="height: 4em;width: 20em;" name="modal_type1_answer4" placeholder="請輸入內容"></textarea>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </from>
                </div>

                <div class="modal-footer">
                    <button id="modal_type1_btn" onclick="update_upload_data(this);" type="button" class="btn btn-default">送出</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal /-->

    <!--\ Modal -->
    <div class="modal fade" id="update_upload_data_modal_type2" tabindex="-1" role="dialog" aria-labelledby="update_upload_data_modal_type2_label" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="update_upload_data_modal_type2_label">修改量表檔案</h4>
                </div>
                <div class="modal-body">
                    <form id="">
                    </form>
                    <form id="form_modal_type2">
                        <table id="update_upload_all_data_2" style="width:auto;margin:0 auto;" class="table table-bordered">
                            <tr style="text-align:left">
                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">建立日期</td>
                                <td style="border-bottom: solid 1px;">
                                    <div class="col-sm-12">
                                        <div class="text-left">
                                            <input name="modal_type2_answer1" type="date"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr style="text-align:left">
                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">量表分數</td>
                                <td style="border-bottom: solid 1px;">
                                    <div class="col-sm-12">
                                        <div class="text-left">
                                            <input name="modal_type2_answer2" type="number"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr style="text-align:left">
                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">處置情形</td>
                                <td style="border-bottom: solid 1px;">
                                    <div class="col-sm-12">
                                        <div class="text-left">
                                            <textarea style="height: 4em;width: 20em;" name="modal_type2_answer3" placeholder="請輸入內容"></textarea>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr style="text-align:left">
                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">上傳檔案</td>
                                <td style="border-bottom: solid 1px;">
                                    <div class="col-sm-12">
                                        <div class="text-left">
                                            <input name="modal_type2_answer_file" type="file"/>
                                            <br>
                                            <div id="modal_type2_answer_file"></div>
                                            <img src="" id="modal_type2_answer_file_img" style="display:none;" />
                                        </div>
                                    </div>
                                    <br/>
                                    <span style="color:blue;">                          
                                        ※原先的檔案將會被刪除或覆蓋
                                    </span>                           
                                </td>
                            </tr>
                            <tr style="text-align:left">
                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">備註</td>
                                <td style="border-bottom: solid 1px;">
                                    <div class="col-sm-12">
                                        <div class="text-left">
                                            <textarea style="height: 4em;width: 20em;" name="modal_type2_answer4" placeholder="請輸入內容"></textarea>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
                <div class="modal-footer">
                    <button id="modal_type2_btn" onclick="update_upload_data(this);" type="button" class="btn btn-default">送出</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal /-->

    <!-- /#wrapper -->
    <!-- JavaScript -->
    <!-- Bootstrap and jQuery -->
    <script src="javascript/jquery.min.js"></script>
    <!-- <script src="javascript/jquery-ui.js"></script> -->
    <script src="javascript/bootstrap.min.js"></script>
    <!-- PDF -->
    <script type="text/javascript" src="javascript/jquery.media.js"></script>
    <!-- ================== 匯出EXCEL ================== -->
    <script src="javascript/jquery.dataTables1.10.16.min.js"></script>
    <script src="javascript/dataTables1.2.2.buttons.min.js"></script>
    <script src="javascript/jszip2.5.0.min.js"></script>
    <script src="javascript/buttons1.2.2.html5.min.js"></script>

    <!-- 表格 JavaScript -->
    <!--
    <script src="javascript/jquery.dataTables.min.js"></script>
    <script src="javascript/dataTables-data.js"></script>
-->
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
    <script src="javascript/datepickerTw.js"></script>
    <!-- ================== jSignature ================== -->
    <script src="jSignature/jSignature.min.js"></script>
    <script>
        //設定js變數抓取使用者名稱
        var login_user_name = '<?php echo $_SESSION["name"]; ?>';

        //設定js變數抓取使用者權限
        var login_user_pwd = '<?php echo $_SESSION['pwd']; ?>';
    </script>
    <!-- ================== case_all.js ================== -->
    <script src='js/case_all.js<?php echo "?" . date("Y-m-d h:i:sa") ?>'></script>
    
</body>

</html>
<?php include("database/timeout_logout.php"); ?>
