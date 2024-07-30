<!DOCTYPE html>
<html>
<head>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black;
            padding: 10px;
            text-align: left;
        }
        h1, h2, h3, h4, h5, h6 {
            text-align: center;
        }
        .form-container {
            font-family: Arial, sans-serif;
        }
        .section-title {
            font-size: 18px;
            font-weight: bold;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        .page-break {
            page-break-before: always;
        }
        input[type="checkbox"], input[type="radio"] {
            transform: scale(1.2);
            margin: 4px;
            position: relative;
        }
        .form-group {
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <div id="form-container">
<style>
    #toptable tr:last-child > td
    {
        border-bottom: 0px;
    }

    #bottomtable tr:first-child > td
    {
        border-top: 0px;
    }

    #bottomtable tr td:nth-child(n+3)    {
        text-align:center;
    }
</style>
<div style="zoom:80%" class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default card-view">
                            <div class="panel-wrapper collapse in">
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-sm-12 col-xs-12">
                                            <div  class="text-center">
                                                <h4 id="form_type">個案服務滿意度調查表</h4>
                                            </div>
                                            <br>
                                            <!-- <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item active" role="presentation">
                                                    <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                                        <b>個案服務滿意度量表</b>
                                                    </a>
                                                </li>
                                            </ul> -->
                                            <div class="tab-content" id="myTabContent">
                                                <div  class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                                    <div class="col-sm-12">
                                                        <div style="margin-top:15px" class="text-center">
                                                            <!-- <h4>個案服務滿意度量表</h4> -->
                                                        </div>
                                                    </div>
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive">
                                                        <form id="form_1" class="form">
                                                            <table style="width:100%;margin-bottom: 0;border-bottom: 0px;!important" class="table table-bordered" id="toptable">
                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:left;">填寫日期</td>
                                                                    <td colspan="3">
                                                                        <input name="fillin_date" type="date">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:left;">個案姓名</td>
                                                                    <td>
                                                                        <input style="width:75%;" name="case_name" id="case_name" type="text" oninput="value=value.replace(/(^\s*)|(\s*$)/g,'')">
                                                                    </td>
                                                                    <td style="background-color:rgb(255 201 54);text-align:left;">社工員</td>
                                                                    <td>
                                                                        <input style="width:75%;" name="assign_name" id="assign_name" type="text" oninput="value=value.replace(/(^\s*)|(\s*$)/g,'')">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:left;">案號</td>
                                                                    <td>
                                                                        <input style="width:75%;" name="tsn_case_id" id="tsn_case_id" type="text" oninput="value=value.replace(/(^\s*)|(\s*$)/g,'')">
                                                                    </td>
                                                                    <td style="background-color:rgb(255 201 54);text-align:left;">雇用單位</td>
                                                                    <td>
                                                                        <input style="width:75%;" name="agency" id="agency" type="text" oninput="value=value.replace(/(^\s*)|(\s*$)/g,'')">
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </form>

                                                        <form id="form_2" class="form">
                                                        <table style="width:100%;" class="table table-bordered" id="bottomtable">
                                                                <tr>
                                                                    <td colspan="5" style="background-color:rgb(255 201 54);"></td>
                                                                    <td style="word-break:break-all;background-color:rgb(255 201 54);text-align:center;">非常滿意</td>
                                                                    <td style="word-break:break-all;background-color:rgb(255 201 54);">很滿意</td>
                                                                    <td style="word-break:break-all;background-color:rgb(255 201 54);">稍微滿意</td>
                                                                    <td style="word-break:break-all;background-color:rgb(255 201 54);">只有一點</td>
                                                                    <td style="word-break:break-all;background-color:rgb(255 201 54);">完全沒有</td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:right;">1.</td>
                                                                    <td colspan="4" style="width:90%;">您對提供愛滋衛教知識</td>
                                                                    <td>
                                                                        <input name="answer1" style="zoom: 1.5" value="4" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer1" style="zoom: 1.5" value="3" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer1" style="zoom: 1.5" value="2" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer1" style="zoom: 1.5" value="1" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer1" style="zoom: 1.5" value="0" type="radio">
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:right;">2.</td>
                                                                    <td colspan="4">您對的服務有助於您的生涯規劃</td>
                                                                    <td>
                                                                        <input name="answer2" style="zoom: 1.5" value="4" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer2" style="zoom: 1.5" value="3" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer2" style="zoom: 1.5" value="2" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer2" style="zoom: 1.5" value="1" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer2" style="zoom: 1.5" value="0" type="radio">
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:right;">3.</td>
                                                                    <td colspan="4">社工員服務態度認真負責</td>
                                                                    <td>
                                                                        <input name="answer3" style="zoom: 1.5" value="4" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer3" style="zoom: 1.5" value="3" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer3" style="zoom: 1.5" value="2" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer3" style="zoom: 1.5" value="1" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer3" style="zoom: 1.5" value="0" type="radio">
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:right;">4.</td>
                                                                    <td colspan="4">社工員的表達能力佳</td>
                                                                    <td>
                                                                        <input name="answer4" style="zoom: 1.5" value="4" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer4" style="zoom: 1.5" value="3" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer4" style="zoom: 1.5" value="2" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer4" style="zoom: 1.5" value="1" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer4" style="zoom: 1.5" value="0" type="radio">
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:right;">5.</td>
                                                                    <td colspan="4">社工員具備專業知識</td>
                                                                    <td>
                                                                        <input name="answer5" style="zoom: 1.5" value="4" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer5" style="zoom: 1.5" value="3" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer5" style="zoom: 1.5" value="2" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer5" style="zoom: 1.5" value="1" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer5" style="zoom: 1.5" value="0" type="radio">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:right;">6.</td>
                                                                    <td colspan="4">社工員能夠了解我內心的需求</td>
                                                                    <td>
                                                                        <input name="answer6" style="zoom: 1.5" value="4" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer6" style="zoom: 1.5" value="3" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer6" style="zoom: 1.5" value="2" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer6" style="zoom: 1.5" value="1" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer6" style="zoom: 1.5" value="0" type="radio">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:right;">7.</td>
                                                                    <td colspan="4">社工員提供的服務符合我的需求</td>
                                                                    <td>
                                                                        <input name="answer7" style="zoom: 1.5" value="4" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer7" style="zoom: 1.5" value="3" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer7" style="zoom: 1.5" value="2" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer7" style="zoom: 1.5" value="1" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer7" style="zoom: 1.5" value="0" type="radio">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:right;">8.</td>
                                                                    <td colspan="4">社工員與我的互動關係佳</td>
                                                                    <td>
                                                                        <input name="answer8" style="zoom: 1.5" value="4" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer8" style="zoom: 1.5" value="3" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer8" style="zoom: 1.5" value="2" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer8" style="zoom: 1.5" value="1" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer8" style="zoom: 1.5" value="0" type="radio">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:right;">9.</td>
                                                                    <td colspan="4">我能夠了解社工員服務我的工作流程</td>
                                                                    <td>
                                                                        <input name="answer9" style="zoom: 1.5" value="4" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer9" style="zoom: 1.5" value="3" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer9" style="zoom: 1.5" value="2" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer9" style="zoom: 1.5" value="1" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer9" style="zoom: 1.5" value="0" type="radio">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:right;">10.</td>
                                                                    <td colspan="4">社工員能夠提供我心理支持</td>
                                                                    <td>
                                                                        <input name="answer10" style="zoom: 1.5" value="4" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer10" style="zoom: 1.5" value="3" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer10" style="zoom: 1.5" value="2" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer10" style="zoom: 1.5" value="1" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer10" style="zoom: 1.5" value="0" type="radio">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:right;">11.</td>
                                                                    <td colspan="4">社工員服務後，我更喜歡我自己</td>
                                                                    <td>
                                                                        <input name="answer11" style="zoom: 1.5" value="4" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer11" style="zoom: 1.5" value="3" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer11" style="zoom: 1.5" value="2" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer11" style="zoom: 1.5" value="1" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer11" style="zoom: 1.5" value="0" type="radio">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:right;">12.</td>
                                                                    <td colspan="4">社工服務後，我更喜歡我家庭</td>
                                                                    <td>
                                                                        <input name="answer12" style="zoom: 1.5" value="4" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer12" style="zoom: 1.5" value="3" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer12" style="zoom: 1.5" value="2" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer12" style="zoom: 1.5" value="1" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer12" style="zoom: 1.5" value="0" type="radio">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:right;">13.</td>
                                                                    <td colspan="4">社工服務後，變得較有自信</td>
                                                                    <td>
                                                                        <input name="answer13" style="zoom: 1.5" value="4" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer13" style="zoom: 1.5" value="3" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer13" style="zoom: 1.5" value="2" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer13" style="zoom: 1.5" value="1" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer13" style="zoom: 1.5" value="0" type="radio">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:right;">14.</td>
                                                                    <td colspan="4">社工服務後，我遭遇問題有得著解決</td>
                                                                    <td>
                                                                        <input name="answer14" style="zoom: 1.5" value="4" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer14" style="zoom: 1.5" value="3" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer14" style="zoom: 1.5" value="2" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer14" style="zoom: 1.5" value="1" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer14" style="zoom: 1.5" value="0" type="radio">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:right;">15.</td>
                                                                    <td colspan="4">整體而言，我對社工的服務品質感到滿意</td>
                                                                    <td>
                                                                        <input name="answer15" style="zoom: 1.5" value="4" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer15" style="zoom: 1.5" value="3" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer15" style="zoom: 1.5" value="2" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer15" style="zoom: 1.5" value="1" type="radio">
                                                                    </td>
                                                                    <td>
                                                                        <input name="answer15" style="zoom: 1.5" value="0" type="radio">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style="background-color:rgb(255 201 54);text-align:right;">16.</td>
                                                                    <td colspan="4">其他想要對社工建議與回饋的話？</td>
                                                                    <td colspan="5">
                                                                        <textarea style="height:150px;width:700px;resize: none;font-size: 20px;" name="answer16" id="feedback" placeholder="請輸入建議與回饋"></textarea>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="10">
                                                                        <div class="text-right">
                                                                            <span>總分：</span>
                                                                            <input style="width:6em;" name="answer_score" id="answer_score" type="text" />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </form>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="panel-footer" style="text-align:center;">
                                                    <button style="font-size:20px" id="add_satif_detail" class="btn btn-default" data-toggle="modal"data-target="#case_storage_model2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save2" viewBox="0 0 16 16">
                                    <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                                    </svg>
                                    儲存</button>
                                                    <button style="font-size:20px" onclick="history_back_btn();" class="btn btn-default">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                                    <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
                                    </svg>
                                    返回</button>
                                    <div class="text-right">
                                    <button style="font-size:20px" class="btn btn-default" onclick="previewAndPrintSection('one')">匯出個案服務滿意度調查表為PDF</button>
                                    </div>
                                                    <!-- <button style="font-size:20px" id="preview" class="btn btn-default">預覽匯出</button> -->
                                                </div>
                                                <!-- <div class="text-right">
                                                    <button style="font-size:20px" id="trans_grade" type="button" class="btn btn-default">轉級</button>
                                                    <button style="font-size:20px" id="trans_case" type="button" class="btn btn-default">轉案</button>
                                                    <button style="font-size:20px" id="end" type="button" class="btn btn-default">結案</button>
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



    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    <script src="case_detail.js"></script>
    <script>

        function fillFormValues() {
            // 執行JavaScript代碼填充表單數據
            //個案評估表自動填入資料
            $("#name").val(name);
            $("#pid").val(decodeURIComponent(pid));
            $("input[name='sex'][value='"+gender+"']").attr('checked',true);
            $("#open_date").val(decodeURIComponent(date));
            $("#birth").val(birth);
            $("#age").val(getAge(birth.split('-'))[0]);
            $("#assign_name").val(assign_name);
            //填寫日期自動帶入
            $("input[name*='fillin_date']").each(function(){
                //獲取現在時間 moment.js插件
                var timenow = moment().format('YYYY-MM-DD');
                $(this).val(timenow);
            });
        }

        function previewAndPrintSection(sectionId) {
            fillFormValues(); // 確保數據填充
            setTimeout(function() {
                var element = document.getElementById(sectionId);
                if (element) {
                    // 預處理 radio 和 checkbox 元素
                    preprocessFormElements(element);

                    html2canvas(element, {
                        scale: 3,
                        logging: true, // 啟用日誌以幫助調試
                        useCORS: true, // 允許跨域圖片
                        allowTaint: true // 允許跨域圖片
                    }).then(function(canvas) {
                        var imgData = canvas.toDataURL('image/png');
                        var pdf = new jspdf.jsPDF('p', 'mm', 'a4');
                        var imgWidth = 210;
                        var pageHeight = 297;
                        var imgHeight = canvas.height * imgWidth / canvas.width;
                        var heightLeft = imgHeight;
                        var position = 0;

                        if (heightLeft < pageHeight) {
                            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, heightLeft);
                        } else {
                            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, pageHeight);
                            heightLeft -= pageHeight;

                            while (heightLeft > 0) {
                                position = heightLeft - imgHeight;
                                pdf.addPage();
                                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, pageHeight);
                                heightLeft -= pageHeight;
                            }
                        }

                // 恢復原始表單元素
                restoreFormElements(element);

                var previewWindow = window.open('', '_blank');
                previewWindow.document.write('<html><head><title>預覽 PDF</title></head><body>');
                previewWindow.document.write('<embed width="100%" height="100%" src="' + pdf.output('bloburl') + '" type="application/pdf">');
                previewWindow.document.write('</body></html>');
                previewWindow.document.close();
                    });
                }
            }, 100); // 延遲打印以確保數據已經填充
        }

        function preprocessFormElements(element) {
            var radios = element.querySelectorAll('input[type="radio"]');
            var checkboxes = element.querySelectorAll('input[type="checkbox"]');

            radios.forEach(function(radio) {
                var span = document.createElement('span');
                span.className = 'custom-radio';
                span.textContent = radio.checked ? '●' : '○';
                radio.parentNode.insertBefore(span, radio);
                radio.style.display = 'none';
            });

            checkboxes.forEach(function(checkbox) {
                var span = document.createElement('span');
                span.className = 'custom-checkbox';
                span.textContent = checkbox.checked ? '☑' : '☐';
                checkbox.parentNode.insertBefore(span, checkbox);
                checkbox.style.display = 'none';
            });
        }

        function restoreFormElements(element) {
            var customRadios = element.querySelectorAll('.custom-radio');
            var customCheckboxes = element.querySelectorAll('.custom-checkbox');

            customRadios.forEach(function(span) {
                span.parentNode.removeChild(span);
            });

            customCheckboxes.forEach(function(span) {
                span.parentNode.removeChild(span);
            });

            var radios = element.querySelectorAll('input[type="radio"]');
            var checkboxes = element.querySelectorAll('input[type="checkbox"]');

            radios.forEach(function(radio) {
                radio.style.display = '';
            });

            checkboxes.forEach(function(checkbox) {
                checkbox.style.display = '';
            });
        }
    </script>
</body>
</html>