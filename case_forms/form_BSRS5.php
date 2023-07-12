<style>
    .medicine_table tr td {
        padding-left: .2em;
        border-right: 1px solid #2f2c2c;
    }

    .medicine_table tr td:last-child {
        border-right: 0px;
    }

    #form_3>table tr td:first-child {
        width: 3em;
        word-break: break-all;
    }

    #form_3>table tr td textarea {
        min-height: 8em;
    }

    #form_3>table tr:last-child td textarea {
        min-height: 16em;
    }
</style>
<div style="zoom:80%" class="row">
    <div class="col-md-12">
        <div class="panel panel-default card-view">
            <div class="panel-wrapper collapse in">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-sm-12 col-xs-12">
                            <div class="text-center">
                                <h4 id="form_type">BSRS-5量表</h4>
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
                                            <h4>基本資料</h4>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                    </div>
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <form id="form_1" class="form">

                                                <table style="width:auto;" class="table table-bordered">
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">姓名</td>
                                                        <td>
                                                            <input style="width:85%;" name="name" id="name" type="text">
                                                        </td>
                                                        
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

                                                        <td style="background-color:rgb(255 201 54);text-align:left;">出生年月日</td>
                                                        <td>
                                                            <input style="width:85%;" name="birth" id="birth" type="date">
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;">年齡</td>
                                                        <td>
                                                            <input style="width:85%;" name="age" id="age" type="number">
                                                        </td>
                                                        
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">電話</td>
                                                        <td colspan="1">
                                                            <input style="width:85%;" name="phone" id="phone" type="text">
                                                        </td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">住址</td>
                                                        <td colspan="5">
                                                            <input style="width:85%;" name="address" id="address" type="text">
                                                        </td>
                                                    </tr>
                                                </table>
                                            </form>
                                        </div>
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
                                                <table style="width:auto;margin-bottom: 0px !important;border-bottom: 0px;" class="table table-bordered">
                                                    <tr>
                                                        <td colspan="5" style="background-color:rgb(255 201 54);text-align:right;">
                                                            <h4 class="text-center" style="letter-spacing:5px; font-size: 25px; line-height: 40px;">
                                                                本列表所列舉的問題是為協助您瞭解您的身心適應狀況，請您仔細回想在<u>最近一星期中(包括今天)</u><br>，
                                                                這些問題<u>使您感到困擾或苦惱的程度</u>
                                                                ，然後<u>圈選</u>一個您認為最能代表您感覺的答案。本資料僅提<br>供醫療人員治療參考之用，絕對守密，請安心填寫。
                                                            </h4>
                                                        </td>
                                                        <td style="word-break:break-all;background-color:rgb(255 201 54);text-align:right;">完全沒有</td>
                                                        <td style="word-break:break-all;background-color:rgb(255 201 54);text-align:right;">輕微</td>
                                                        <td style="word-break:break-all;background-color:rgb(255 201 54);text-align:right;">中等程度</td>
                                                        <td style="word-break:break-all;background-color:rgb(255 201 54);text-align:right;">厲害</td>
                                                        <td style="word-break:break-all;background-color:rgb(255 201 54);text-align:right;">非常厲害</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">1.</td>
                                                        <td colspan="4" style="width:85%;">感覺緊張不安</td>
                                                        <td>
                                                            <input name="answer1" style="zoom: 1.5" value="0" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer1" style="zoom: 1.5" value="1" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer1" style="zoom: 1.5" value="2" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer1" style="zoom: 1.5" value="3" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer1" style="zoom: 1.5" value="4" type="radio">
                                                        </td>                                                      
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">2.</td>
                                                        <td colspan="4">覺得容易苦惱或動怒</td>
                                                        <td>
                                                            <input name="answer2" style="zoom: 1.5" value="0" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer2" style="zoom: 1.5" value="1" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer2" style="zoom: 1.5" value="2" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer2" style="zoom: 1.5" value="3" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer2" style="zoom: 1.5" value="4" type="radio">
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">3.</td>
                                                        <td colspan="4">感覺憂鬱、心情低落</td>
                                                        <td>
                                                            <input name="answer3" style="zoom: 1.5" value="0" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer3" style="zoom: 1.5" value="1" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer3" style="zoom: 1.5" value="2" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer3" style="zoom: 1.5" value="3" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer3" style="zoom: 1.5" value="4" type="radio">
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">4.</td>
                                                        <td colspan="4">覺得比不上別人</td>
                                                        <td>
                                                            <input name="answer4" style="zoom: 1.5" value="0" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer4" style="zoom: 1.5" value="1" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer4" style="zoom: 1.5" value="2" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer4" style="zoom: 1.5" value="3" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer4" style="zoom: 1.5" value="4" type="radio">
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">5.</td>
                                                        <td colspan="4">睡眠困難，譬如難以入睡、易醒或早醒</td>
                                                        <td>
                                                            <input name="answer5" style="zoom: 1.5" value="0" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer5" style="zoom: 1.5" value="1" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer5" style="zoom: 1.5" value="2" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer5" style="zoom: 1.5" value="3" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer5" style="zoom: 1.5" value="4" type="radio">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 0 0);text-align:right;">6.</td>
                                                        <td colspan="4">有自殺的想法</td>
                                                        <td>
                                                            <input name="answer6" style="zoom: 1.5" value="0" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer6" style="zoom: 1.5" value="1" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer6" style="zoom: 1.5" value="2" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer6" style="zoom: 1.5" value="3" type="radio">
                                                        </td>
                                                        <td>
                                                            <input name="answer6" style="zoom: 1.5" value="4" type="radio">
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
                                                    <tr>
                                                        <td colspan="10" style="background-color:rgb(255 201 54);text-align:right;border-bottom: 0px;">
                                                            <h4 class="text-left" style="letter-spacing:5px; font-size: 25px; line-height: 40px;">
                                                                得分:<br>
                                                                <h4 style="text-align:left; letter-spacing:5px; font-size: 25px; line-height: 40px;">
                                                                    0-5分 身心障礙狀況良好<br>
                                                                    6-9分 輕度情緒困擾，建議給予情緒支持<br>
                                                                    10-14分 中度情緒困擾，建議轉介精神科治療或接受專業諮詢<br>
                                                                    15分以上 重度情緒困擾，建議轉介精神科治療或接受專業諮詢<br>
                                                                    第六題為附加題，若前5題總分小於6分，但本題評分為2分以上(中等程度)時，宜考慮轉介至精神科別。
                                                                </h4>
                                                            </h4>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <table style="width:100%;" class="table table-bordered">
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:center;min-width: 9em;">本案得分</td>
                                                        <td>
                                                            <input name="treatment_status" style="zoom: 1.5; text-align:center" value="超過6分" type="checkbox"><span>超過6分</span>
                                                            <input name="treatment_status" style="zoom: 1.5; text-align:center" value="第6題單獨得分" type="checkbox"><span>第6題單獨得分</span>
                                                        </td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;  text-align:center">處置情形如下:</td>
                                                        <td>
                                                            <textarea style="width:100%;resize: none;font-size: 20px;min-height:5em;" name="statement" id="statement"></textarea>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-footer" style="text-align:center;">
                                    <button style="font-size:20px" id="add_BSRS5_detail" class="btn btn-default" data-toggle="modal" data-target="#case_storage_model">儲存</button>
                                    <button style="font-size:20px" onclick="history_back_btn();" class="btn btn-default">返回</button>
                                    <button style="font-size:20px" id="preview" class="btn btn-default">預覽匯出</button>
                                    <!-- <button style="font-size:20px" onclick="test()" class="btn btn-default">測試</button> -->
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