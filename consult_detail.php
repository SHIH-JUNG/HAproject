<?php session_start(); ?>
<?php include("database/check_authority.php"); ?><?php include("no_cache.php"); ?>
<?php $href_name =  'page_k'; ?>
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
    <!--    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalabel=no" />-->
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
                        <li><span><a href="phone.php">個案管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="phone.php">未開案管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="phone.php">簡短服務</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="phone.php">簡短服務一覽表</a></span></li>
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
<!--                                                <div class="text-left"><button class="btn btn-default" id="face">個案詢戒面訪表</button></div>-->
                                                <div>
                                                    <h4>詳細資料</h4>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">

                                                    <li class="nav-item active" role="presentation" id="phone_rec_all">
                                                        <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                                            <b>簡短服務記錄</b>
                                                        </a>
                                                    </li>
                                                    
                                                    <li class="nav-item" role="presentation">
                                                        <a class="nav-link" id="profile-tab" data-toggle="pill" href="#two" role="tab" aria-selected="false">
                                                            <b>電話記錄</b>
                                                        </a>
                                                    </li>

                                                    <li class="nav-item" role="presentation">
                                                        <a class="nav-link" id="profile-tab" data-toggle="pill" href="#three" role="tab" aria-selected="false">
                                                            <b>面訪記錄</b>
                                                        </a>
                                                    </li>

                                                    <li class="nav-item" role="presentation">
                                                        <a class="nav-link" id="profile-tab" data-toggle="pill" href="#four" role="tab" aria-selected="false">
                                                            <b>新增+</b>
                                                        </a>
                                                    </li>

                                                </ul>
                                                <div class="tab-content" id="myTabContent">
                                                    <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                                        <div class="accordion" id="accordionExample">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading" id="headingTwo">
                                                                    <h2 class="mb-0">
                                                                        <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                            <span style="color:black;font-size:17px">簡短服務記錄</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseTwo" class="collapse in" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="all_data" style="width:auto;" class="table table-bordered">
                                                                            <!-- <tr>
                                                                                <td colspan="2">個案詢戒電話紀錄</td>
                                                                            </tr> -->
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">編號</td>
                                                                                <td style=""><span id="t_sn"></span></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>諮詢日期</td>
                                                                                <td style="">
                                                                                    <!-- <input class="phone_question" id="call_datetime" type="date"> -->
                                                                                    <input class="phone_question" id="call_datetime" type="datetime-local">
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline"><i style="color:red;">※</i>諮詢方式</td>
                                                                                <td style="">
                                                                                    <select class="phone_question" id="way">
                                                                                        <option value="電訪">電訪</option>
                                                                                        <option value="面訪">面訪</option>
                                                                                    </select>   
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline"><i style="color:red;">※</i>面訪地點</td>
                                                                                <td style="">
                                                                                    <select class="phone_question" id="way_detail">
                                                                                        <option value="">請選擇面訪地點</option>
                                                                                        <option value="社區">社區</option>
                                                                                        <option value="家訪">家訪</option>
                                                                                        <option value="監所">監所</option>
                                                                                        <option value="快樂聯盟">快樂聯盟</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline"><i style="color:red;">※</i>個案姓名</td>
                                                                                <td style=""><input class="phone_question" id="name" type="text" oninput="value=value.replace(/[\d]/g,'')"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline"><i style="color:red;">※</i>性別</td>
                                                                                <td style="">
                                                                                    <select id="gender" style="width:200px;" class="phone_question">
                                                                                        <option value="男">男</option>
                                                                                        <option value="女">女</option>
                                                                                        <option value="其他">其他</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline"><i style="color:red;">※</i>服務對象類別</td>
                                                                                <td style="">
                                                                                    <select id="object_type" style="width:200px;" class="phone_question">
                                                                                        <option value="一般藥癮者">一般藥癮者</option>
                                                                                        <option value="愛滋感染者">愛滋感染者</option>
                                                                                        <option value="家庭">家庭</option>
                                                                                        <option value="兒少">兒少</option>                                                                                   
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">毒品施用方式</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <input class="phone_question" name="m_type[]" style="zoom: 1.5" type="radio" value="口服"><label class="radio_label">口服</label>
                                                                                    <input class="phone_question" name="m_type[]" style="zoom: 1.5" type="radio" value="鼻吸"><label class="radio_label">鼻吸</label>
                                                                                    <input class="phone_question" name="m_type[]" style="zoom: 1.5" type="radio" value="注射"><label class="radio_label">注射</label>
                                                                                    <br>
                                                                                    <input class="phone_question" name="m_type[]" style="zoom: 1.5" type="radio" value="其他"><label class="radio_label">其他：</label>   
                                                                                    <input class="phone_question" id="m_type_other" type="text">
                                                                                
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">目前使用物質</td>
                                                                                <td style="">
                                                                                    一級毒品：
                                                                                    <label id="addition0"><input class="phone_question" name="main[]" style="zoom: 1.5" type="checkbox" value="海洛因"><label class="ckecked_label">海洛因</label></label>
                                                                                    <label id="addition1"><input class="phone_question" name="main[]" style="zoom: 1.5" type="checkbox" value="鴉片"><label class="ckecked_label">鴉片</label></label>
                                                                                    <label id="addition2"><input class="phone_question" name="main[]" style="zoom: 1.5" type="checkbox" value="嗎啡"><label class="ckecked_label">嗎啡</label></label>
                                                                                    <label id="addition3"><input class="phone_question" name="main[]" style="zoom: 1.5" type="checkbox" value="古柯鹼"><label class="ckecked_label">古柯鹼</label></label>
                                                                                    <br>
                                                                                    二級毒品：
                                                                                    <label id="addition4"><input class="phone_question" name="main[]" style="zoom: 1.5" type="checkbox" value="安非他命"><label class="ckecked_label">安非他命</label></label>
                                                                                    <label id="addition5"><input class="phone_question" name="main[]" style="zoom: 1.5" type="checkbox" value="大麻"><label class="ckecked_label">大麻</label></label>
                                                                                    <label id="addition6"><input class="phone_question" name="main[]" style="zoom: 1.5" type="checkbox" value="搖頭丸"><label class="ckecked_label">搖頭丸</label></label>
                                                                                    <br>
                                                                                    三級毒品：
                                                                                    <label id="addition7"><input class="phone_question" name="main[]" style="zoom: 1.5" type="checkbox" value="K他命"><label class="ckecked_label">K他命</label></label>
                                                                                    <label id="addition8"><input class="phone_question" name="main[]" style="zoom: 1.5" type="checkbox" value="FM2藥丸"><label class="ckecked_label">FM2藥丸</label></label>
                                                                                    <br>
                                                                                    <label id="addition9"><input class="phone_question" name="main[]" style="zoom: 1.5" type="checkbox" value="酒精"><label class="ckecked_label">酒精</label></label>
                                                                                    <label id="addition10"><input class="phone_question" name="main[]" style="zoom: 1.5" type="checkbox" value="強力膠"><label class="ckecked_label">強力膠</label></label>
                                                                                    <label id="addition11"><input class="phone_question" name="main[]" style="zoom: 1.5" type="checkbox" value="檳榔"><label class="ckecked_label">檳榔</label></label>
                                                                                    <label id="addition12"><input class="phone_question" name="main[]" style="zoom: 1.5" type="checkbox" value="菸"><label class="ckecked_label">菸</label></label>
                                                                                    <label id="addition13"><input class="phone_question" name="main[]" style="zoom: 1.5" type="checkbox" value="精神藥物"><label class="ckecked_label">精神藥物</label></label>
                                                                                    <label id="addition14"><input class="phone_question" name="main[]" style="zoom: 1.5" type="checkbox" value="其他"><label class="ckecked_label">其他：</label>
                                                                                    <input class="phone_question" id="other_main" type="text" value=""></label>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">年齡</td>
                                                                                <td style="">
                                                                                    <input style="width:4em;" class="phone_question" id="age" type="text" maxlength="2" oninput="value=value.replace(/[^\d]/g,'')">歲
                                                                                    <br>
                                                                                    <label>分類：</label>
                                                                                    <input class="phone_question" name="a_type[]" style="zoom: 1.5" type="radio" value="10歲以下"><label class="radio_label">10歲以下</label>
                                                                                    <input class="phone_question" name="a_type[]" style="zoom: 1.5" type="radio" value="10-19歲"><label class="radio_label">10-19歲</label>
                                                                                    <input class="phone_question" name="a_type[]" style="zoom: 1.5" type="radio" value="20-29歲"><label class="radio_label">20-29歲</label>
                                                                                    <input class="phone_question" name="a_type[]" style="zoom: 1.5" type="radio" value="30-39歲"><label class="radio_label">30-39歲</label>
                                                                                    <input class="phone_question" name="a_type[]" style="zoom: 1.5" type="radio" value="40-49歲"><label class="radio_label">40-49歲</label>
                                                                                    <input class="phone_question" name="a_type[]" style="zoom: 1.5" type="radio" value="50-59歲"><label class="radio_label">50-59歲</label>
                                                                                    <input class="phone_question" name="a_type[]" style="zoom: 1.5" type="radio" value="60歲以上"><label class="radio_label">60歲以上</label>
                                                                                    <input class="phone_question" name="a_type[]" style="zoom: 1.5" type="radio" value="不明"><label class="radio_label">不明</label>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">居住地</td>
                                                                                <td style="">
                                                                                    <input style="width:85%;" class="phone_question" id="address" type="text">
                                                                                    <br>
                                                                                    <label>分類：</label>
                                                                                    <input class="phone_question" name="l_type[]" style="zoom: 1.5" type="radio" value="北部"><label class="radio_label">北部</label>
                                                                                    <input class="phone_question" name="l_type[]" style="zoom: 1.5" type="radio" value="中部"><label class="radio_label">中部</label>
                                                                                    <input class="phone_question" name="l_type[]" style="zoom: 1.5" type="radio" value="南部"><label class="radio_label">南部</label>
                                                                                    <input class="phone_question" name="l_type[]" style="zoom: 1.5" type="radio" value="東部"><label class="radio_label">東部</label>
                                                                                    <input class="phone_question" name="l_type[]" style="zoom: 1.5" type="radio" value="離島"><label class="radio_label">離島</label>
                                                                                    <input class="phone_question" name="l_type[]" style="zoom: 1.5" type="radio" value="國外"><label class="radio_label">國外</label>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">聯絡人姓名</td>
                                                                                <td style=""><input class="phone_question" id="info_name" oninput="value=value.replace(/[\d]/g,'')" type="text"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">聯絡人與案主的關係</td>
                                                                                <td style="text-align:left;">
                                                                                    <input class="phone_question" id="relationship" type="text">
                                                                                    <br>
                                                                                    <label>分類：</label>
                                                                                    <input class="phone_question" name="r_type[]" style="zoom: 1.5" type="radio" value="配偶"><label class="radio_label">配偶</label>
                                                                                    <input class="phone_question" name="r_type[]" style="zoom: 1.5" type="radio" value="父母"><label class="radio_label">父母</label>
                                                                                    <input class="phone_question" name="r_type[]" style="zoom: 1.5" type="radio" value="手足"><label class="radio_label">手足</label>
                                                                                    <input class="phone_question" name="r_type[]" style="zoom: 1.5" type="radio" value="子女"><label class="radio_label">子女</label>
                                                                                    <input class="phone_question" name="r_type[]" style="zoom: 1.5" type="radio" value="親戚"><label class="radio_label">親戚</label>
                                                                                    <input class="phone_question" name="r_type[]" style="zoom: 1.5" type="radio" value="社工"><label class="radio_label">社工</label>
                                                                                    <input class="phone_question" name="r_type[]" style="zoom: 1.5" type="radio" value="教會"><label class="radio_label">教會</label>
                                                                                    <input class="phone_question" name="r_type[]" style="zoom: 1.5" type="radio" value="朋友"><label class="radio_label">朋友</label>
                                                                                    <input class="phone_question" name="r_type[]" style="zoom: 1.5" type="radio" value="本人"><label class="radio_label">本人</label>
                                                                                    <input class="phone_question" name="r_type[]" style="zoom: 1.5" type="radio" value="其他"><label class="radio_label">其他</label>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">聯絡人電話</td>
                                                                                <td style="">
                                                                                <input class="phone_question" id="phone" type="text">
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">轉介來源</td>
                                                                                <td style="">
                                                                                    <input class="phone_question" id="referral" type="text">
                                                                                    <br>
                                                                                    <label>分類：</label>
                                                                                    <input class="phone_question" name="ref_type[]" style="zoom: 1.5" type="radio" value="醫院"><label class="radio_label">醫院</label>
                                                                                    <input class="phone_question" name="ref_type[]" style="zoom: 1.5" type="radio" value="矯正機關"><label class="radio_label">矯正機關</label>
                                                                                    <input class="phone_question" name="ref_type[]" style="zoom: 1.5" type="radio" value="自行求助"><label class="radio_label">自行求助</label>
                                                                                    <input class="phone_question" name="ref_type[]" style="zoom: 1.5" type="radio" value="衛政"><label class="radio_label">衛政</label>
                                                                                    <input class="phone_question" name="ref_type[]" style="zoom: 1.5" type="radio" value="民間社福機構"><label class="radio_label">民間社福機構</label>
                                                                                    <input class="phone_question" name="ref_type[]" style="zoom: 1.5" type="radio" value="社福機構"><label class="radio_label">毒防中心</label>
                                                                                    <input class="phone_question" name="ref_type[]" style="zoom: 1.5" type="radio" value="戒毒機構"><label class="radio_label">警政</label>
                                                                                    <input class="phone_question" name="ref_type[]" style="zoom: 1.5" type="radio" value="親友"><label class="radio_label">教會</label>
                                                                                    <input class="phone_question" name="ref_type[]" style="zoom: 1.5" type="radio" value="教會"><label class="radio_label">社政</label>
                                                                                    <input class="phone_question" name="ref_type[]" style="zoom: 1.5" type="radio" value="其他"><label class="radio_label">其他</label>
                                                                                    <input class="phone_question" name="ref_type[]" style="zoom: 1.5" type="radio" value="社區"><label class="radio_label">社區</label>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">轉介人電話</td>
                                                                                <td style="">
                                                                                    <input class="phone_question" id="refphone" type="text">
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">職稱/姓名</td>
                                                                                <td style=""><input class="phone_question" id="referral_name" oninput="value=value.replace(/[\d]/g,'')" type="text"></td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">是否符合開案</td>
                                                                                <td style="text-align:left">
                                                                                    <input class="phone_question" name="e_type[]" style="zoom: 1.5" type="radio" value="是"><label class="radio_label">是</label>
                                                                                    <input class="phone_question" name="e_type[]" style="zoom: 1.5" type="radio" value="否"><label class="radio_label">否</label>
                                                                                    <input class="phone_question" name="e_type[]" style="zoom: 1.5" type="radio" value="不明"><label class="radio_label">不明</label>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline"><i style="color:red;">※</i>接案工作人員</td>
                                                                                <td style="">
                                                                                    <select class="user phone_question" id="user">
                                                                                        <option value="" disabled selected hidden>請選擇工作人員</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" class="NOline">諮詢內容</td>
                                                                                <td style="">
                                                                                    <textarea class="phone_question" style="height:150px;width:700px;resize: none;font-size: 20px;" name="note" id="note" placeholder="請輸入通話內容"></textarea>
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
                                                                                    <label>建立者</label>
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
                                                                                        <button style="font-size:20px" id="phone_edit" class="btn btn-default" onclick="phone_edit();">編輯</button>
                                                                                    </div>
                                                                                    <div id="save_div" hidden>
                                                                                        <button style="font-size:20px" id="phone_update" onclick="update_consult_data();" class="btn btn-default">修改</button>           
                                                                                        <button style="font-size:20px" id="phone_cancel" class="btn btn-default" onclick="phone_cancel();">取消</button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                    <div class="text-right">
                                                                        <!--\ Button trigger modal -->
                                                                        <button type="button" id="trans_to_opencase" class="btn btn-default trans_btn" style="font-size:20px" data-toggle="modal" data-target="#myModal">
                                                                            轉案(新增至開案個案)
                                                                        </button>
                                                                        <!-- Button trigger modal /-->
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="profile-tab">
                                                        <div class="accordion" id="accordionExample2">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading" id="headingThree">
                                                                    <h2 class="mb-0">
                                                                        <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                            <span style="color:black;font-size:17px">電訪記錄</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseThree" class="collapse in" aria-labelledby="headingThree" data-parent="#accordionExample2">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="phone_rec_all_data" style="width:95%;display:table !important;" class="table table-bordered">
                                                                            <thead>
                                                                                <tr style="background-color:rgb(255 201 54);">
                                                                                    <th>來電日期</th>
                                                                                    <th>連絡人</th>
                                                                                    <th>聯絡人與案主關係</th>
                                                                                    <th>連絡人電話</th>
                                                                                    <th>接案工作人員</th>
                                                                                    <!-- <th>通話內容</th> -->
                                                                                    <th>登錄人員</th>
                                                                                    <th>登錄日期</th>
                                                                                    <th></th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody id="call_phone_rec_view"></tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade" id="three" role="tabpanel" aria-labelledby="profile-tab">
                                                        <div class="accordion" id="accordionExample3">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading" id="headingFour">
                                                                    <h2 class="mb-0">
                                                                        <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                                            <span style="color:black;font-size:17px">面訪記錄</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseFour" class="collapse in" aria-labelledby="headingFour" data-parent="#accordionExample3">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="face_rec_all_data" style="width:95%;display:table !important;" class="table table-bordered">
                                                                            <thead>
                                                                                <tr style="background-color:rgb(255 201 54);">
                                                                                    <th>預約面訪時間</th>
                                                                                    <th>指派工作人員</th>
                                                                                    <th>方式</th>
                                                                                    <th>備註</th>
                                                                                    <th>登錄人員</th>
                                                                                    <th>登錄日期</th>
                                                                                    <th></th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody id="call_face_rec_view"></tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-pane fade" id="four" role="tabpanel" aria-labelledby="profile-tab">
                                                        <div class="accordion" id="accordionExample4">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading" id="headingFive">
                                                                    <h2 class="mb-0">
                                                                        <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                            <span style="color:black;font-size:17px">新增電話/面訪紀錄</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseFive" class="collapse in" aria-labelledby="headingFive" data-parent="#accordionExample4">
                                                                    <div class="panel-body scr_container">
                                                                        <input class="record_type" name="newrec_type" style="zoom: 1.5" type="radio" value="phone" checked><label style="color:red;">新增電話紀錄</label>
                                                                        <input class="record_type" name="newrec_type" style="zoom: 1.5" type="radio" value="reservation"><label style="color:red;">新增面訪紀錄</label>
                                                                        <table style="width:auto;" class="table table-bordered" id="add_phone_rec_table">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td colspan="2">
                                                                                        個案電話紀錄
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">
                                                                                        <i style="color:red;">※</i>來電日期
                                                                                    </td>
                                                                                    <td style="">
                                                                                        <input id="ncall_datetime" type="datetime-local">
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">
                                                                                        <i style="color:red;">※</i>聯絡人姓名
                                                                                    </td>
                                                                                    <td style="">
                                                                                        <input id="ninfo_name" type="text">
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">
                                                                                        <i style="color:red;">※</i>聯絡人與案主關係
                                                                                    </td>
                                                                                    <td style="">
                                                                                        <input id="nrelationship" type="text">
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">
                                                                                        <i style="color:red;">※</i>連絡人電話
                                                                                    </td>
                                                                                    <td style="">
                                                                                        <input id="nphone" type="text">
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">
                                                                                        <i style="color:red;">※</i>接案工作人員
                                                                                    </td>
                                                                                    <td style="">
                                                                                        <select class="user2" id="nuser">
                                                                                            <option value="">請選擇工作人員</option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">
                                                                                        <i style="color:red;">※</i>通話內容
                                                                                    </td>
                                                                                    <td style="">
                                                                                        <textarea style="height:150px;width:700px;resize: none;font-size: 20px;" name="note" id="nnote" placeholder="請輸入通話內容"></textarea>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td colspan="2" rowspan="2">
                                                                                        <div>
                                                                                            <button style="font-size:20px" class="btn btn-default" onclick="add_new_rec('phone')">新增</button>
                                                                                            <button style="font-size:20px" class="btn btn-default" onclick="cancel()">取消</button>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>

                                                                        <table style="width:auto;" class="table table-bordered" id="add_face_rec_table">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td colspan="2">個人預約面訪記錄</td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>預約面訪時間</td>
                                                                                <td style="">
                                                                                    <input id="start_date" type="date"> 
                                                                                    <select id="start_time_h"></select>
                                                                                    <label>：</label>
                                                                                    <select id="start_time_m">
                                                                                        <option>00</option>
                                                                                        <option>30</option>
                                                                                    </select>
                                                                                    <label>至</label>
                                                                                    <select id="end_time_h"></select>
                                                                                    <label>：</label>
                                                                                    <select id="end_time_m">
                                                                                        <option>00</option>
                                                                                        <option>30</option>
                                                                                    </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">指派工作人員</td>
                                                                                <td style="">
                                                                                    主：<select id="one_user">
                                                                                            <option value="">請選擇工作人員</option>
                                                                                        </select>
                                                                                        <br><br>
                                                                                    副：<select id="two_user">
                                                                                        <option value="">請選擇工作人員</option>
                                                                                        </select>
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>方式</td>
                                                                                <td style="">
                                                                                    <input id="location" type="text"><br>
                                                                                    <input style="zoom:1.5" name="location_detail[]" type="radio" value="社區">社區
                                                                                    <input style="zoom:1.5" name="location_detail[]" type="radio" value="家訪">家訪
                                                                                    <input style="zoom:1.5" name="location_detail[]" type="radio" value="監所">監所
                                                                                    <input style="zoom:1.5" name="location_detail[]" type="radio" value="快樂聯盟">快樂聯盟
                                                                                    <input style="zoom:1.5" name="location_detail[]" type="radio" value="其他">其他：
                                                                                    <input id="other_location" type="text" placeholder="請輸入其他面訪方式">
                                                                                </td>
                                                                            </tr>
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;">備註</td>
                                                                                <td>
                                                                                    <textarea style="height:150px;width:700px;resize: none;font-size: 20px;" name="remark" id="remark" placeholder="請輸入備註內容"></textarea>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td colspan="2">
                                                                                    <div>
                                                                                        <button style="font-size:20px" class="btn btn-default" onclick="add_new_rec('face')">新增</button>
                                                                                        <button style="font-size:20px" class="btn btn-default" onclick="cancel()">取消</button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                        </table>
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
                            <td style="">
                                <select id="case_id_prestr" style="width:auto;">
                                    <option value="">請選擇</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                </select>
                                <!-- <input id="case_id" type="text"> -->
                                <input class="trans_to_opencase_question" id="open_case_t_sn" type="text">
                                <br/><span style="font-size:16px;color:red;">※若『個案類別』已選擇『親職兒少』，<br/>則請選擇編號的前綴字</span>
                            </td>
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

    <!--\ Modal -->
    <div class="modal fade" id="update_rec_modal" tabindex="-1" role="dialog" aria-labelledby="update_rec_modal_label" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="update_rec_modal_label">電訪/面訪記錄</h4>
                </div>
                <div class="modal-body">
                    <form id="form_modal">
                        <table id="update_all_data" style="font-size: 18px;width:100%;margin:0 auto;" class="table table-bordered">
                            
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
    <!-- ================== consult_detail ================== -->
    <script type="text/javascript" src="js/consult_detail.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>

</body>

</html>
<?php include("database/timeout_logout.php"); ?>