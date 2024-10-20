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
    #form_1 table,
    #form_1 table tr:first-child td
    {
        border: none;
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
                                                <h4 id="form_type">家庭關係量表</h4>
                                            </div>
                                            <br>
                                            <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item active" role="presentation">
                                                    <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                                        <b>基本資料</b>
                                                    </a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#two" role="tab" aria-selected="false">
                                                        <b>量表內容</b>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                                    <div class="col-sm-12">
                                                        <div style="margin-top:15px" class="text-center">
                                                            <h4>基本資料部分</h4>
                                                        </div>
                                                    </div>
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive">
                                                            <form id="form_1" class="form">
                                                                <table style="width:auto;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="2"></td>
                                                                        <td>
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left" style="color: #d86d6d;">
                                                                                    <input name="w_test" style="zoom: 1.5" value="前測" type="radio"><span>前測</span>
                                                                                    <input name="w_test" style="zoom: 1.5" value="中測" type="radio"><span>中測</span>
                                                                                    <input name="w_test" style="zoom: 1.5" value="後測" type="radio"><span>後測</span>&emsp;
                                                                                    <span>填寫日期：</span><input name="fillin_date" type="date">
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="background-color:rgb(255 201 54);text-align:right;">1.</td>
                                                                        <td style="background-color:rgb(255 201 54);text-align:left;">性別</td>
                                                                        <td>
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="sex" style="zoom: 1.5" value="男" type="radio"><span>男</span>
                                                                                    <input name="sex" style="zoom: 1.5" value="女" type="radio"><span>女</span>
                                                                                    <input name="sex" style="zoom: 1.5" value="其他" type="radio"><span>其他</span>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="background-color:rgb(255 201 54);text-align:right;">2.</td>
                                                                        <td style="background-color:rgb(255 201 54);text-align:left;">教育程度</td>
                                                                        <td>
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="education" style="zoom: 1.5" value="不識字" type="radio"><span>不識字</span>
                                                                                    <input name="education" style="zoom: 1.5" value="國小/小學" type="radio"><span>國小/小學</span>
                                                                                    <input name="education" style="zoom: 1.5" value="國中/初中" type="radio"><span>國中/初中</span>
                                                                                    <input name="education" style="zoom: 1.5" value="高中/高職" type="radio"><span>高中/高職</span>
                                                                                    <input name="education" style="zoom: 1.5" value="大學/大專" type="radio"><span>大學/大專</span>
                                                                                    <input name="education" style="zoom: 1.5" value="研究所及以上" type="radio"><span>研究所及以上</span>
                                                                                    <input name="education" style="zoom: 1.5" value="其他" type="radio"><span>其他</span><input name="education_other" id="education_other" type="text">
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="background-color:rgb(255 201 54);text-align:right;">3.</td>
                                                                        <td style="background-color:rgb(255 201 54);text-align:left;">目前從事什麼行業</td>
                                                                        <td>
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="current_job" style="zoom: 1.5" value="軍公教" type="radio"><span>軍公教</span>
                                                                                    <input name="current_job" style="zoom: 1.5" value="農" type="radio"><span>農</span>
                                                                                    <input name="current_job" style="zoom: 1.5" value="漁" type="radio"><span>漁</span>
                                                                                    <input name="current_job" style="zoom: 1.5" value="商" type="radio"><span>商</span>
                                                                                    <input name="current_job" style="zoom: 1.5" value="工" type="radio"><span>工</span>
                                                                                    <input name="current_job" style="zoom: 1.5" value="服務業" type="radio"><span>服務業</span>
                                                                                    <input name="current_job" style="zoom: 1.5" value="家管" type="radio"><span>家管</span>
                                                                                    <input name="current_job" style="zoom: 1.5" value="無" type="radio"><span>無</span>
                                                                                    <input name="current_job" style="zoom: 1.5" value="其他" type="radio"><span>其他</span><input name="current_job_other" id="current_job_other" type="text">
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="background-color:rgb(255 201 54);text-align:right;">4.</td>
                                                                        <td style="background-color:rgb(255 201 54);text-align:left;">婚姻狀態</td>
                                                                        <td>
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="marital" style="zoom: 1.5" value="未婚/單身" type="radio"><span>未婚/單身</span>
                                                                                    <input name="marital" style="zoom: 1.5" value="已婚/同居" type="radio"><span>已婚/同居</span>
                                                                                    <input name="marital" style="zoom: 1.5" value="離婚/分居" type="radio"><span>離婚/分居</span>
                                                                                    <input name="marital" style="zoom: 1.5" value="喪偶" type="radio"><span>喪偶</span>
                                                                                    <input name="marital" style="zoom: 1.5" value="其他" type="radio"><span>其他</span><input name="marital_other" id="marital_other" type="text">
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="background-color:rgb(255 201 54);text-align:right;">5.</td>
                                                                        <td style="background-color:rgb(255 201 54);text-align:left;">同住人口(複選)</td>
                                                                        <td>
                                                                            <div class="col-sm-12">
                                                                                <div class="text-left">
                                                                                    <input name="cohabitant" style="zoom: 1.5" value="爸爸" type="checkbox"><span>爸爸</span>
                                                                                    <input name="cohabitant" style="zoom: 1.5" value="媽媽" type="checkbox"><span>媽媽</span>
                                                                                    <input name="cohabitant" style="zoom: 1.5" value="阿公、阿嬤" type="checkbox"><span>阿公、阿嬤</span>
                                                                                    <input name="cohabitant" style="zoom: 1.5" value="外公、外婆" type="checkbox"><span>外公、外婆</span>
                                                                                    <input name="cohabitant" style="zoom: 1.5" value="小孩" type="checkbox"><span>小孩</span>
                                                                                    <input name="cohabitant" style="zoom: 1.5" value="其他" type="checkbox"><span>其他</span><input name="cohabitant_other" id="cohabitant_other" type="text">
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div class="text-right">
                                                        <button style="font-size:20px" class="btn btn-default" onclick="generatePDF1()">匯出基本資料為PDF</button>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div class="col-sm-12">
                                                        <div style="margin-top:15px" class="text-center">
                                                            <h4>量表內容</h4>
                                                        </div>
                                                    </div>
                                                    <div class="panel-body">
                                                    </div>
                                                    <div class="table-wrap">
                                                        <div class="table-responsive">
                                                            <form id="form_2" class="form">
                                                                <table style="width:auto;" class="table table-bordered">
                                                                    <tr>
                                                                        <td colspan="5" style="background-color:rgb(255 201 54);text-align:right;"></td>
                                                                        <td style="word-break:break-all;background-color:rgb(255 201 54);text-align:right;">非常滿意</td>
                                                                        <td style="word-break:break-all;background-color:rgb(255 201 54);text-align:right;">滿意</td>
                                                                        <td style="word-break:break-all;background-color:rgb(255 201 54);text-align:right;">普通</td>
                                                                        <td style="word-break:break-all;background-color:rgb(255 201 54);text-align:right;">不滿意</td>
                                                                        <td style="word-break:break-all;background-color:rgb(255 201 54);text-align:right;">非常不滿意</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="background-color:rgb(255 201 54);text-align:right;">1.</td>
                                                                        <td colspan="4" style="width:85%;">因為家人的陪伴，會讓我感到不孤單</td>
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
                                                                        <td colspan="4">家人對我的愛與肯定，讓我會覺得自己是有價值的</td>
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
                                                                        <td colspan="4">我覺得我的家人是重要的，因為他們照顧我、保護我</td>
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
                                                                        <td colspan="4">我對家人來說是重要的，是因為他們愛我、在乎我</td>
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
                                                                        <td colspan="4">我和我的家人生活在一起覺得很快樂</td>
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
                                                                        <td colspan="4">我和跟家人關係的改善</td>
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
                                                                        <td colspan="4">我家人的支持系統</td>
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
                                                                        <td colspan="4">我家人對我的接納度</td>
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
                                                                        <td colspan="4">告訴家人我是愛滋感染者，會對我產生很大的壓力</td>
                                                                        <td>
                                                                            <input name="answer9" style="zoom: 1.5" value="0" type="radio">
                                                                        </td>
                                                                        <td>
                                                                            <input name="answer9" style="zoom: 1.5" value="1" type="radio">
                                                                        </td>
                                                                        <td>
                                                                            <input name="answer9" style="zoom: 1.5" value="2" type="radio">
                                                                        </td>
                                                                        <td>
                                                                            <input name="answer9" style="zoom: 1.5" value="3" type="radio">
                                                                        </td>
                                                                        <td>
                                                                            <input name="answer9" style="zoom: 1.5" value="4" type="radio">
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="background-color:rgb(255 201 54);text-align:right;">10.</td>
                                                                        <td colspan="4">我覺得與家人的距離拉近了不少</td>
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
                                                    <div class="text-right">
                                                        <button style="font-size:20px" class="btn btn-default" onclick="generatePDF2()">匯出量表內容為PDF</button>
                                                    </div>
                                                </div>
                                                <div class="panel-footer" style="text-align:center;">
                                                    <button style="font-size:20px" id="add_familyship_detail" class="btn btn-default" data-toggle="modal"data-target="#case_storage_model2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save2" viewBox="0 0 16 16">
                                    <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                                    </svg>
                                    儲存</button>
                                                    <button style="font-size:20px" onclick="history_back_btn();" class="btn btn-default">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
                                    <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
                                    </svg>
                                    返回</button>
                                                    <!-- <button style="font-size:20px" id="preview" class="btn btn-default">預覽匯出</button> -->
                                                    <!-- <button style="font-size:20px" onclick="test()" class="btn btn-default">測試</button> -->
                                                </div>
                                                <!-- <div class="text-right">
                                                <button style="font-size:20px" class="btn btn-default" onclick="previewAndPrintSection('one')">匯出基本資料為PDF</button>
                                                <button style="font-size:20px" class="btn btn-default" onclick="previewAndPrintSection('two')">匯出量表內容為PDF</button>
                                                </div> -->
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
    <script src="case_detail.js"></script>
    <script>

        // function fillFormValues() {
        //     // 執行JavaScript代碼填充表單數據
        //     //個案評估表自動填入資料
        //     $("#name").val(name);
        //     $("#pid").val(decodeURIComponent(pid));
        //     $("input[name='sex'][value='"+gender+"']").attr('checked',true);
        //     $("#open_date").val(decodeURIComponent(date));
        //     $("#birth").val(birth);
        //     $("#age").val(getAge(birth.split('-'))[0]);
        //     $("#assign_name").val(assign_name);
        //     //填寫日期自動帶入
        //     $("input[name*='fillin_date']").each(function(){
        //         //獲取現在時間 moment.js插件
        //         var timenow = moment().format('YYYY-MM-DD');
        //         $(this).val(timenow);
        //     });
        // }

        // function previewAndPrintSection(sectionId) {
        //     fillFormValues(); // 確保數據填充
        //     setTimeout(function() {
        //         var element = document.getElementById(sectionId);
        //         if (element) {
        //             // 預處理 radio 和 checkbox 元素
        //             preprocessFormElements(element);

        //             html2canvas(element, {
        //                 scale: 3,
        //                 logging: true, // 啟用日誌以幫助調試
        //                 useCORS: true, // 允許跨域圖片
        //                 allowTaint: true // 允許跨域圖片
        //             }).then(function(canvas) {
        //                 var imgData = canvas.toDataURL('image/png');
        //                 var pdf = new jspdf.jsPDF('p', 'mm', 'a4');
        //                 var imgWidth = 210;
        //                 var pageHeight = 297;
        //                 var imgHeight = canvas.height * imgWidth / canvas.width;
        //                 var heightLeft = imgHeight;
        //                 var position = 0;

        //                 if (heightLeft < pageHeight) {
        //                     pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, heightLeft);
        //                 } else {
        //                     pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, pageHeight);
        //                     heightLeft -= pageHeight;

        //                     while (heightLeft > 0) {
        //                         position = heightLeft - imgHeight;
        //                         pdf.addPage();
        //                         pdf.addImage(imgData, 'PNG', 0, position, imgWidth, pageHeight);
        //                         heightLeft -= pageHeight;
        //                     }
        //                 }

        //         // 恢復原始表單元素
        //         restoreFormElements(element);

        //         var previewWindow = window.open('', '_blank');
        //         previewWindow.document.write('<html><head><title>預覽 PDF</title></head><body>');
        //         previewWindow.document.write('<embed width="100%" height="100%" src="' + pdf.output('bloburl') + '" type="application/pdf">');
        //         previewWindow.document.write('</body></html>');
        //         previewWindow.document.close();
        //             });
        //         }
        //     }, 100); // 延遲打印以確保數據已經填充
        // }

        // function preprocessFormElements(element) {
        //     var radios = element.querySelectorAll('input[type="radio"]');
        //     var checkboxes = element.querySelectorAll('input[type="checkbox"]');

        //     radios.forEach(function(radio) {
        //         var span = document.createElement('span');
        //         span.className = 'custom-radio';
        //         span.textContent = radio.checked ? '●' : '○';
        //         radio.parentNode.insertBefore(span, radio);
        //         radio.style.display = 'none';
        //     });

        //     checkboxes.forEach(function(checkbox) {
        //         var span = document.createElement('span');
        //         span.className = 'custom-checkbox';
        //         span.textContent = checkbox.checked ? '☑' : '☐';
        //         checkbox.parentNode.insertBefore(span, checkbox);
        //         checkbox.style.display = 'none';
        //     });
        // }

        // function restoreFormElements(element) {
        //     var customRadios = element.querySelectorAll('.custom-radio');
        //     var customCheckboxes = element.querySelectorAll('.custom-checkbox');

        //     customRadios.forEach(function(span) {
        //         span.parentNode.removeChild(span);
        //     });

        //     customCheckboxes.forEach(function(span) {
        //         span.parentNode.removeChild(span);
        //     });

        //     var radios = element.querySelectorAll('input[type="radio"]');
        //     var checkboxes = element.querySelectorAll('input[type="checkbox"]');

        //     radios.forEach(function(radio) {
        //         radio.style.display = '';
        //     });

        //     checkboxes.forEach(function(checkbox) {
        //         checkbox.style.display = '';
        //     });
        // }
        function generatePDF1() {
            const element = document.getElementById('form_1');

            const opt = {
                margin:       1,
                filename:     'download.pdf',
                image:        { type: 'jpeg', quality: 1 },
                html2canvas:  { scale: 3,
                    logging: true, // 啟用日誌以幫助調試
                    useCORS: true, // 允許跨域圖片
                    allowTaint: true // 允許跨域圖片
                    },
                jsPDF:        { unit: 'mm', format: 'legal', orientation: 'landscape' },
                pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
            };

            html2pdf().from(element).set(opt).save();
        }

        function generatePDF2() {
            const element = document.getElementById('form_2');

            const opt = {
                margin:       1,
                filename:     'download.pdf',
                image:        { type: 'jpeg', quality: 1 },
                html2canvas:  { scale: 3,
                    logging: true, // 啟用日誌以幫助調試
                    useCORS: true, // 允許跨域圖片
                    allowTaint: true // 允許跨域圖片
                    },
                jsPDF:        { unit: 'mm', format: 'legal', orientation: 'landscape' },
                pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
            };

            html2pdf().from(element).set(opt).save();
        }
    </script>
</body>
</html>