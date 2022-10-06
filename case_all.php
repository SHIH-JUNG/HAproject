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
    <!--    <link rel="stylesheet" href="css/bootstrap-table.min.css">-->
    <!-- ================== 匯出EXCEL ================== -->
    <link href="css/jquery.dataTables1.10.16.min.css" rel="stylesheet" />
    <link href="css/buttons.dataTables1.5.1.min.css" rel="stylesheet" />
    <!--  日期民國  -->
    <link data-require="jqueryui@*" rel="stylesheet" href="css/jquery-ui.css" />
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
                                    <div class="row">
                                        <div class="col-sm-12 col-xs-12">
                                            <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item active" role="presentation">
                                                    <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                                        <b>個案評估表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#two" role="tab" aria-selected="false">
                                                        <b>會談紀錄</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#eleven" role="tab" aria-selected="false">
                                                        <b>社會資源應用表格</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#three" role="tab" aria-selected="false">
                                                        <b>生活品質問卷</b>
                                                    </a>
                                                </li>

                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#four" role="tab" aria-selected="false">
                                                        <b>健康管理評估表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#five" role="tab" aria-selected="false">
                                                        <b>憂鬱量表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#six" role="tab" aria-selected="false">
                                                        <b>就業需求評估表&就業服務滿意度調查表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#seven" role="tab" aria-selected="false">
                                                        <b>服務滿意度量表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#eight" role="tab" aria-selected="false">
                                                        <b>家庭關係</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#night" role="tab" aria-selected="false">
                                                        <b>BSRS-5量表</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#ten" role="tab" aria-selected="false">
                                                        <b>安置、自立宿舍評估量表</b>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
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
                                                                    <th>評估結果</th>
                                                                    <th>評估表內容</th>
                                                                    <th>備註</th>
                                                                    <tbody id="case_full_add"></tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="text-center">
                                                            <button id="case_add_new" type="button" class="btn btn-default" onclick="form_add_new(this)">新增</button>
                                                            <button onclick="back_case_all_all();" class="btn btn-default">返回</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="profile-tab">
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
                                                                    <th>會談日期</th>
                                                                    <th>問題陳述</th>
                                                                    <th>社工/關懷員</th>
                                                                    <th>會談紀錄內容</th>
                                                                    <th>備註</th>
                                                                    <tbody id="interlocution_full_add"></tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <button id="interlocution_add_new" type="button" class="btn btn-default" onclick="form_add_new(this)">新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default">返回</button>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="eleven" role="tabpanel" aria-labelledby="profile-tab">
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
                                                                    <th>表格內容</th>
                                                                    <th>備註</th>
                                                                    <tbody id="resource_full_add"></tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <button id="resource_add_new" type="button" class="btn btn-default" onclick="form_add_new(this)">新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default">返回</button>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="three" role="tabpanel" aria-labelledby="profile-tab">
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
                                                                    <th>得分/結果</th>
                                                                    <th>前/後測</th>
                                                                    <th>量表內容</th>
                                                                    <th>備註</th>
                                                                    <tbody id="life_full_add"></tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <button id="life_add_new" class="btn btn-default" onclick="form_add_new(this)">新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default">返回</button>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="four" role="tabpanel" aria-labelledby="profile-tab">
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
                                                                    <th>量表內容</th>
                                                                    <th>備註</th>
                                                                    <tbody id="health_full_add"></tbody>
                                                                </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <button id="health_add_new" class="btn btn-default" onclick="form_add_new(this)">新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default">返回</button>
                                                    </div>
                                                </div>


                                                <div class="tab-pane fade" id="five" role="tabpanel" aria-labelledby="profile-tab">
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
                                                                        <tbody id="sullen_full_add"></tbody>
                                                                    </table>
                                                           </div>
                                                            </div>
                                                        </div>
                                                        <button id="sullen_add_new" class="btn btn-default" onclick="form_upload_new(this)">新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default">返回</button>
                                                    </div>
                                                </div>

                                                <div class="tab-pane fade" id="six" role="tabpanel" aria-labelledby="profile-tab">
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
                                                                        <th>總分</th>
                                                                        <th>量表內容</th>
                                                                        <th>備註</th>
                                                                        <tbody id="employment_satif_full_add"></tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button id="employment_satif_add_new" class="btn btn-default" onclick="form_add_new(this)">新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default">返回</button>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="seven" role="tabpanel" aria-labelledby="profile-tab">
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
                                                                        <th>總分</th>
                                                                        <th>量表內容</th>
                                                                        <th>備註</th>
                                                                        <tbody id="satif_full_add"></tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button id="satif_add_new" class="btn btn-default" onclick="form_add_new(this)">新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default">返回</button>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="eight" role="tabpanel" aria-labelledby="profile-tab">
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
                                                                        <th>總分</th>
                                                                        <th>前/後測</th>
                                                                        <th>量表內容</th>
                                                                        <th>備註</th>
                                                                        <tbody id="familyship_full_add"></tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button id="familyship_add_new" class="btn btn-default" onclick="form_add_new(this)">新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default">返回</button>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="night" role="tabpanel" aria-labelledby="profile-tab">
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
                                                                        <th>檔案名稱/量表內容</th>
                                                                        <th>備註</th>
                                                                        <tbody id="BSRS5_full_add"></tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button id="BSRS5_add_new" class="btn btn-default" onclick="form_BSRS5_add_new(this)">新增</button>
                                                        <button onclick="back_case_all_all();" class="btn btn-default">返回</button>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="ten" role="tabpanel" aria-labelledby="profile-tab">
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
                                                                    <th>評估結果</th>
                                                                    <th>評估表內容</th>
                                                                    <th>備註</th>
                                                                    <tbody id="settlement_full_add"></tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="text-center">
                                                            <button id="settlement_add_new" type="button" class="btn btn-default" onclick="form_add_new(this)">新增</button>
                                                            <button onclick="back_case_all_all();" class="btn btn-default">返回</button>
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
    <!-- /#wrapper -->
    <!-- JavaScript -->
    <!-- Bootstrap and jQuery -->
    <script src="javascript/jquery.min.js"></script>
    <script src="javascript/jquery-ui.js"></script>
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
    <!-- ================== case_all.js ================== -->
    <script src='js/case_all.js'></script>
    <!-- ================== moment ================== -->
    <script src='javascript/moment2.29.0.min.js'></script>
    <!-- ================== table ================== -->
    <script src="javascript/bootstrap1.18.0-table.min.js"></script>
    <script src="javascript/bootstrap-table1.11.1-zh-TW.min.js"></script>
    <!-- 日期民國-->
    <script src="javascript/TW_YEAR.js"></script>
</body>

</html>
<?php include("database/timeout_logout.php"); ?>
