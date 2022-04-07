<?php session_start(); ?>
<?php include("database/check_authority.php"); ?>
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
    <link data-require="jqueryui@*" data-semver="1.10.0" rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.0/css/smoothness/jquery-ui-1.10.0.custom.min.css" />

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
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <a id="toggle_nav_btn" class="toggle-left-nav-btn inline-block mr-20 pull-left" href="javascript:void(0);">
                <i><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg></i>
            </a>
            <a href="index.php"><img class="brand-img pull-left" src="image/HA.png" /></a>
            <a href="index.php"><img class="brand-img pull-left" style="width:330px;height:70px" src="image/logo字.png" /></a>  
            <ul class="nav navbar-right top-nav pull-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle pr-0" data-toggle="dropdown">歡迎 <?php echo $_SESSION['name']." ".$_SESSION['job']; ?><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg></a>
                    <ul class="dropdown-menu user-auth-dropdown" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                        <li>
                            <a href="#" id="Sign_out"><i><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-power" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M5.578 4.437a5 5 0 1 0 4.922.044l.5-.866a6 6 0 1 1-5.908-.053l.486.875z" />
                                        <path fill-rule="evenodd" d="M7.5 8V1h1v7h-1z" />
                                    </svg></i> 登出</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
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
                        <li><span><a href="current_case.php">開案個案</a></span></li>
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
                                                                    ，服務對象類別：<span class="case_object_type"></span>
                                                                    ，目前使用物質：<span class="case_addiction"></span>
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
                                                            <button onclick="location.reload();" class="btn btn-default">返回</button>
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
                                                                    ，服務對象類別：<span class="case_object_type"></span>
                                                                    ，目前使用物質：<span class="case_addiction"></span>
                                                                </div>
                                                                <table id="interlocution_all" style="width:auto;" class="table table-bordered">
                                                                    <th>建立日期</th>
                                                                    <th>會談日期</th>
                                                                    <th>社工/關懷員</th>
                                                                    <th>會談紀錄內容</th>
                                                                    <th>備註</th>
                                                                    <tbody id="interlocution_full_add"></tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <button id="interlocution_add_new" type="button" class="btn btn-default" onclick="form_add_new(this)">新增</button>
                                                        <button onclick="location.reload();" class="btn btn-default">返回</button>
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
                                                                    ，服務對象類別：<span class="case_object_type"></span>
                                                                    ，目前使用物質：<span class="case_addiction"></span>
                                                                </div>
                                                                <table id="life_all" style="width:auto;" class="table table-bordered">
                                                                    <th>建立日期</th>
                                                                    <th>填表日期</th>
                                                                    <th>前/後測</th>
                                                                    <th>量表內容</th>
                                                                    <th>備註</th>
                                                                    <tbody id="life_full_add"></tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <button id="life_add_new" class="btn btn-default" onclick="form_add_new(this)">新增</button>
                                                        <button onclick="location.reload();" class="btn btn-default">返回</button>
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
                                                                    ，服務對象類別：<span class="case_object_type"></span>
                                                                    ，目前使用物質：<span class="case_addiction"></span>
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
                                                        <button onclick="location.reload();" class="btn btn-default">返回</button>
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
                                                        <button onclick="location.reload();" class="btn btn-default">返回</button>
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
                                                                    ，服務對象類別：<span class="case_object_type"></span>
                                                                    ，目前使用物質：<span class="case_addiction"></span>
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
                                                        <button onclick="location.reload();" class="btn btn-default">返回</button>
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
                                                                    ，服務對象類別：<span class="case_object_type"></span>
                                                                    ，目前使用物質：<span class="case_addiction"></span>
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
                                                        <button onclick="location.reload();" class="btn btn-default">返回</button>
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
                                                                    ，服務對象類別：<span class="case_object_type"></span>
                                                                    ，目前使用物質：<span class="case_addiction"></span>
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
                                                        <button onclick="location.reload();" class="btn btn-default">返回</button>
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
                                                        <button onclick="location.reload();" class="btn btn-default">返回</button>
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
                                                                    ，服務對象類別：<span class="case_object_type"></span>
                                                                    ，目前使用物質：<span class="case_addiction"></span>
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
                                                            <button onclick="location.reload();" class="btn btn-default">返回</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text-right">       
                                                    <button id="add_new_inside" style="font-size:15px" type="button" class="btn btn-default">新增至在園家屬關懷一覽表</button>
                                                    <button id="end" style="font-size:15px" type="button" class="btn btn-default">新增至離園一覽表(結案)</button>
                                                    <button id="train" style="font-size:15px" type="button" class="btn btn-default">新增至培訓一覽表(結案)</button>
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