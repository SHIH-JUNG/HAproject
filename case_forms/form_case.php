<style>
    .medicine_table tr td
    {
        padding-left:.2em;
        border-right: 1px solid #2f2c2c;
    }

    .medicine_table tr td:last-child
    {
        border-right: 0px;
    }
    #form_3 > table tr td:first-child
    {
        width: 3em;
        word-break: break-all;
    }
    #form_3 > table tr td textarea
    {
        min-height:8em;
    }

    #form_3 > table tr:last-child td textarea
    {
        min-height:16em;
    }

    button#end {
        background-color: tomato;
        color: white !important;
        font-weight: bold;
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
                                <h4 id="form_type">個案評估表</h4>
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
                                        <b>醫療追蹤</b>
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#three" role="tab" aria-selected="false">
                                        <b>問題陳述/評估與診斷/處遇計畫/社工策略/資源與轉介</b>
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#four" role="tab" aria-selected="false">
                                        <b>成效評估</b>
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
                                                        <td style="background-color:rgb(255 201 54);text-align:left;color:#d86d6d;">案號：</td>
                                                        <td>
                                                            <input style="width:85%;" name="tsn_case_id" id="tsn_case_id" type="text" disabled="disabled">
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;color:#d86d6d;">個案姓名：</td>
                                                        <td>
                                                            <input style="width:85%;" name="case_name" id="case_name" type="text" disabled="disabled">
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;color:#d86d6d;">開案日期：</td>
                                                        <td>
                                                            <input style="width:85%;" name="open_date" id="open_date" type="date" disabled="disabled">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;color:#d86d6d;">社工：</td>
                                                        <td>
                                                            <input style="width:85%;" name="assign_name" id="assign_name" type="text">
                                                        </td>
                                                        
                                                        <td style="background-color:rgb(255 201 54);text-align:left;color:#d86d6d;">填表日期：</td>
                                                        <td>
                                                            <input style="width:85%;" name="fillin_date" id="fillin_date" type="date">
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="6"></td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">姓名</td>
                                                        <td>
                                                            <input style="width:85%;" name="name" id="name" type="text">
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;">出生年月日</td>
                                                        <td>
                                                            <input style="width:85%;" name="birth" id="birth" type="date">
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;">身份證字號</td>
                                                        <td>
                                                            <input style="width:85%;" name="pid" id="pid" type="text">
                                                        </td>
                                                    </tr>

                                                    <tr>
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

                                                        <td style="background-color:rgb(255 201 54);text-align:left;">聯絡電話</td>
                                                        <td colspan="3">
                                                            <span>
                                                                （H）
                                                            </span>
                                                            <input style="width:15em;" name="phone_home" id="phone_home" type="text">
                                                            <span>
                                                                （M）
                                                            </span>
                                                            <input style="width:15em;" name="phone_mobile" id="phone_mobile" type="text">
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">戶籍地址</td>
                                                        <td colspan="5">
                                                            <input style="width:85%;" name="address" id="address" type="text">
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">住處地址</td>
                                                        <td colspan="5">
                                                            <input style="width:85%;" name="residence" id="residence" type="text">
                                                            <input name="same_address" style="zoom: 1.5" value="same_address" type="checkbox"><span>同戶籍地址</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">教育程度</td>
                                                        <td colspan="5">
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <input name="education" style="zoom: 1.5" value="不識字" type="radio"><span>不識字</span>
                                                                    <input name="education" style="zoom: 1.5" value="小學以下" type="radio"><span>小學以下</span>
                                                                    <input name="education" style="zoom: 1.5" value="初中" type="radio"><span>初中</span>
                                                                    <input name="education" style="zoom: 1.5" value="高中職" type="radio"><span>高中職</span>
                                                                    <input name="education" style="zoom: 1.5" value="大專" type="radio"><span>大專</span>
                                                                    <input name="education" style="zoom: 1.5" value="研究所" type="radio"><span>研究所</span>

                                                                    &emsp;<span>畢業？</span>
                                                                    <input name="education_graduate" style="zoom: 1.5" value="是" type="radio"><span>是</span>
                                                                    <input name="education_graduate" style="zoom: 1.5" value="否" type="radio"><span>否</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">婚姻狀況</td>
                                                        <td colspan="5">
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <input name="marital" style="zoom: 1.5" value="未婚" type="radio"><span>未婚</span>
                                                                    <input name="marital" style="zoom: 1.5" value="同居" type="radio"><span>同居</span>
                                                                    <input name="marital" style="zoom: 1.5" value="已婚" type="radio"><span>已婚</span>
                                                                    <input name="marital" style="zoom: 1.5" value="離婚" type="radio"><span>離婚</span>
                                                                    <input name="marital" style="zoom: 1.5" value="鰥寡" type="radio"><span>鰥寡</span>
                                                                    <input name="marital" style="zoom: 1.5" value="分居" type="radio"><span>分居</span>
                                                                    <input name="marital" style="zoom: 1.5" value="不詳" type="radio"><span>不詳</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">家居狀況</td>
                                                        <td colspan="5">
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <input name="cohabitant" style="zoom: 1.5" value="居無定所" type="radio"><span>居無定所</span>
                                                                    <input name="cohabitant" style="zoom: 1.5" value="獨居" type="radio"><span>獨居</span>
                                                                    <input name="cohabitant" style="zoom: 1.5" value="與配偶同住" type="radio"><span>與配偶同住</span>
                                                                    <input name="cohabitant" style="zoom: 1.5" value="與子女同住" type="radio"><span>與子女同住</span>
                                                                    <input name="cohabitant" style="zoom: 1.5" value="與其他人同住" type="radio"><span>與其他人同住</span><input name="cohabitant_other" id="cohabitant_other" type="text">
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">職業</td>
                                                        <td colspan="5">
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <input name="current_job" style="zoom: 1.5" value="商" type="radio"><span>商</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="工" type="radio"><span>工</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="農" type="radio"><span>農</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="漁" type="radio"><span>漁</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="公" type="radio"><span>公</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="教" type="radio"><span>教</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="學生" type="radio"><span>學生</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="服務業" type="radio"><span>服務業</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="無" type="radio"><span>無</span>
                                                                    <input name="current_job" style="zoom: 1.5" value="其他" type="radio"><span>其他</span><input name="current_job_other" id="current_job_other" type="text">
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">經濟狀況</td>
                                                        <td colspan="5">
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <input name="economic_status" style="zoom: 1.5" value="0" type="radio"><span>工作收入每月平均<input style="width:7em;" name="economic_status_0" id="economic_status_0" type="text">元</span>
                                                                    <input name="economic_status" style="zoom: 1.5" value="1" type="radio"><span>子女供給<input style="width:7em;" name="economic_status_1" id="economic_status_1" type="text">元</span>
                                                                    <input name="economic_status" style="zoom: 1.5" value="2" type="radio"><span>親友供給<input style="width:7em;" name="economic_status_2" id="economic_status_2" type="text">元</span>
                                                                    <input name="economic_status" style="zoom: 1.5" value="3" type="radio"><span>其他</span><input name="economic_status_3" id="economic_status_3" type="text">
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">宗教信仰</td>
                                                        <td colspan="5">
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <input name="religion" style="zoom: 1.5" value="道教" type="checkbox"><span>道教</span>
                                                                    <input name="religion" style="zoom: 1.5" value="佛教" type="checkbox"><span>佛教</span>
                                                                    <input name="religion" style="zoom: 1.5" value="基督教" type="checkbox"><span>基督教</span>
                                                                    <input name="religion" style="zoom: 1.5" value="天主教" type="checkbox"><span>天主教</span>
                                                                    <input name="religion" style="zoom: 1.5" value="密宗" type="checkbox"><span>密宗</span>
                                                                    <input name="religion" style="zoom: 1.5" value="其他" type="checkbox"><span>其他</span><input name="religion_other" id="religion_other" type="text">
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">毒品史狀況</td>
                                                        <td colspan="5">
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <input name="drug_record" style="zoom: 1.5" value="0" type="radio"><span>海洛因<input style="width:3em;" name="drug_record_0" id="drug_record_0" type="text">年</span>
                                                                    <input name="drug_record" style="zoom: 1.5" value="1" type="radio"><span>安非他命<input style="width:3em;" name="drug_record_1" id="drug_record_1" type="text">年</span>
                                                                    <input name="drug_record" style="zoom: 1.5" value="2" type="radio"><span>美沙冬<input style="width:3em;" name="drug_record_2" id="drug_record_2" type="text">年</span>
                                                                    <input name="drug_record" style="zoom: 1.5" value="3" type="radio"><span>其他</span><input name="drug_record_3" id="drug_record_3" type="text">
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">出入矯正機關</td>
                                                        <td colspan="5">
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <span>曾出入那些矯正機關？共<input style="width:3em;" name="correctional_question_count" id="correctional_question_count" type="text">次,</span>
                                                                    <span>時間<input name="correctional_question_start" id="correctional_question_start" type="month">至<input name="correctional_question_end" id="correctional_question_end" type="month"></span>
                                                                    <span style="color:blue;"><span>&emsp;&emsp;約共<input style="width:3em;" name="correctional_year" id="correctional_year" type="text">年<input style="width:3em;" name="correctional_month" id="correctional_month" type="text">月</span></span>
                                                                    <button style="font-size:20px;color:blue;" id="correctional_question_count" onclick="calculation_date(); return false;">計算</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td colspan="6" style="background-color:rgb(255 201 54);text-align:left;">家系生態圖</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="6">
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <input name="customFile1" type="file" class="form-control"/>
                                                                    <br>
                                                                    <div id="customFile1"></div>
                                                                    <img src="" id="customFile1_img" style="display:none;"/>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td colspan="6" style="background-color:rgb(255 201 54);text-align:left;">個案家庭概況描述</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="6">
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <textarea style="height:150px;width:100%;resize: none;font-size: 20px;" name="family_description" id="family_description" placeholder="個案家庭概況描述"></textarea>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td colspan="6" style="background-color:rgb(255 201 54);text-align:left;">需求評估</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="6">
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <textarea style="height:150px;width:100%;resize: none;font-size: 20px;" name="assessment" id="assessment" placeholder="需求評估"></textarea>
                                                                </div>
                                                            </div>
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
                                            <h4>醫療追蹤</h4>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                    </div>
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <form id="form_2" class="form">
                                                <table style="width:auto;" class="table table-bordered">
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;min-width: 11em;">就醫時間</td>
                                                        <td>
                                                            <input name="treatment_time" style="zoom: 1.5" value="0" type="radio">
                                                            <span>HIV診斷 民國</span>
                                                            <input style="width:3em;" name="treatment_time_year" id="treatment_time_year" type="text"><span>年</span>
                                                            <input style="width:3em;" name="treatment_time_month" id="treatment_time_month" type="text"><span>月</span>
                                                            <br/>
                                                            <input name="treatment_time" style="zoom: 1.5" value="1" type="radio">
                                                            <span>其他疾病</span>
                                                            <input style="width:18em;" name="treatment_time_1" id="treatment_time_1" type="text">
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;min-width: 9em;">治療情況</td>
                                                        <td>
                                                            <input name="treatment_status" style="zoom: 1.5" value="已接受治療" type="radio"><span>已接受治療</span>
                                                            <input name="treatment_status" style="zoom: 1.5" value="尚未接受治療" type="radio"><span>尚未接受治療</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">就醫醫院/醫師</td>
                                                        <td>
                                                            <input style="width:12em;" name="medical_name" id="medical_name" type="text">
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;">醫院個管/電話</td>
                                                        <td>
                                                            <input style="width:12em;" name="medical_info" id="medical_info" type="text">/
                                                            <input style="width:12em;" name="medical_phone" id="medical_phone" type="text">
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">衛生局所/承辦者</td>
                                                        <td>
                                                            <input style="width:12em;" name="health_clinic_name" id="health_clinic_name" type="text">
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;">聯絡電話</td>
                                                        <td>
                                                            <input style="width:12em;" name="health_clinic_phone" id="health_clinic_phone" type="text">
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">CD4指數</td>
                                                        <td>
                                                            <input style="width:15em;" name="CD4_index_0" type="text">
                                                            <span>（</span>
                                                            <input style="width:5em;" name="CD4_index_1" type="text">
                                                            <span>/</span>
                                                            <input style="width:5em;" name="CD4_index_2" type="text">
                                                            <span>）</span>
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;">病毒量</td>
                                                        <td>
                                                            <input style="width:15em;" name="viral_0" type="text">
                                                            <span>（</span>
                                                            <input style="width:5em;" name="viral_1" type="text">
                                                            <span>/</span>
                                                            <input style="width:5em;" name="viral_2" type="text">
                                                            <span>）</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">其他</td>
                                                        <td>
                                                            <input style="width:20em;" name="medical_other" id="medical_other" type="text">
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">服用藥物</td>
                                                        <td colspan="3" style="padding:0px !important;">
                                                            <table class="medicine_table" style="text-align:left;width:100%;table-layout:fixed;">
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="尚未服藥" type="checkbox"><span>尚未服藥</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Triumeq三恩美" type="checkbox"><span>Triumeq三恩美</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Atripla亞翠佩" type="checkbox"><span>Atripla亞翠佩</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Complera康普萊" type="checkbox"><span>Complera康普萊</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Genvoya捷扶康" type="checkbox"><span>Genvoya捷扶康</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Juluca滋若愷" type="checkbox"><span>Juluca滋若愷</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Odefsey安以斯" type="checkbox"><span>Odefsey安以斯</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Bikyavy吉他韋" type="checkbox"><span>Bikyavy吉他韋</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Symtuza信擇立" type="checkbox"><span>Symtuza信擇立</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Dovato" type="checkbox"><span>Dovato</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Duovir-N倍歐滅" type="checkbox"><span>Duovir-N倍歐滅</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Trezav特力滅" type="checkbox"><span>Trezav特力滅</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="3TC速汰滋" type="checkbox"><span>3TC速汰滋</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Duovir-Lamivudine欄  滋" type="checkbox"><span>Duovir-Lamivudine欄  滋</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Combivi卡貝茲" type="checkbox"><span>Combivi卡貝茲</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Duovir倍歐減" type="checkbox"><span>Duovir倍歐減</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Zovilam諾穩錠" type="checkbox"><span>Zovilam諾穩錠</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Kivexa克為滋" type="checkbox"><span>Kivexa克為滋</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="TDF惠立妥" type="checkbox"><span>TDF惠立妥</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Truvada舒發泰" type="checkbox"><span>Truvada舒發泰</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="寧衛邁" type="checkbox"><span>寧衛邁</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="快利佳" type="checkbox"><span>快利佳</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="滅滋錠" type="checkbox"><span>滅滋錠</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="抑滋靈" type="checkbox"><span>抑滋靈</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="易伐滋" type="checkbox"><span>易伐滋</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="艾發邁" type="checkbox"><span>艾發邁</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="伊芳滋" type="checkbox"><span>伊芳滋</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="艾立莎" type="checkbox"><span>艾立莎</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="英特萊" type="checkbox"><span>英特萊</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="諾億亞" type="checkbox"><span>諾億亞</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="瑞塔滋" type="checkbox"><span>瑞塔滋</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="普利他" type="checkbox"><span>普利他</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="普澤力" type="checkbox"><span>普澤力</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="新特滋" type="checkbox"><span>新特滋</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="宜昇瑞" type="checkbox"><span>宜昇瑞</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="汰威凱" type="checkbox"><span>汰威凱</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="衛 滋" type="checkbox"><span>衛 滋</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="希 寧" type="checkbox"><span>希 寧</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="恩 臨" type="checkbox"><span>恩 臨</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="美沙冬療法" type="checkbox"><span>美沙冬療法</span></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">合併症狀</td>
                                                        <td colspan="3">
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <input name="symptoms" style="zoom: 1.5" value="無" type="checkbox"><span>無</span>
                                                                    <input name="symptoms" style="zoom: 1.5" value="持續疲倦" type="checkbox"><span>持續疲倦</span>
                                                                    <input name="symptoms" style="zoom: 1.5" value="皮膚發疹" type="checkbox"><span>皮膚發疹</span>
                                                                    <input name="symptoms" style="zoom: 1.5" value="腹瀉" type="checkbox"><span>腹瀉</span>
                                                                    <input name="symptoms" style="zoom: 1.5" value="發燒" type="checkbox"><span>發燒</span>
                                                                    <input name="symptoms" style="zoom: 1.5" value="淤傷或腫塊" type="checkbox"><span>淤傷或腫塊</span>
                                                                    <input name="symptoms" style="zoom: 1.5" value="頭痛" type="checkbox"><span>頭痛</span>
                                                                    <input name="symptoms" style="zoom: 1.5" value="夜間出汗" type="checkbox"><span>夜間出汗</span>
                                                                    <input name="symptoms" style="zoom: 1.5" value="體重減輕" type="checkbox"><span>體重減輕</span>
                                                                    <input name="symptoms" style="zoom: 1.5" value="口腔或喉嚨痛" type="checkbox"><span>口腔或喉嚨痛</span>
                                                                    <input name="symptoms" style="zoom: 1.5" value="淋巴腺腫" type="checkbox"><span>淋巴腺腫</span><br/>
                                                                    <input name="symptoms" style="zoom: 1.5" value="其他" type="checkbox"><span>其他</span><input style="width:22em;" name="symptoms_other" id="symptoms_other" type="text">
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="three" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="col-sm-12">
                                        <div style="margin-top:15px" class="text-center">
                                            <h4>問題陳述/評估與診斷/處遇計畫/社工策略/資源與轉介</h4>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                    </div>
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <form id="form_3" class="form">
                                                <table style="width:80%;" class="table table-bordered">
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">個案問題陳述</td>
                                                        <td colspan="2">
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <textarea style="width:100%;resize: none;font-size: 20px;" name="statement" id="statement" placeholder="個案問題陳述"></textarea>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td rowspan="4" style="background-color:rgb(255 201 54);text-align:left;">問題評估與診斷</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">個人系統</td>
                                                        <td>
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <textarea style="width:100%;resize: none;font-size: 20px;" name="personal_system" id="personal_system" placeholder="個人系統"></textarea>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">家庭系統</td>
                                                        <td>
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <textarea style="width:100%;resize: none;font-size: 20px;" name="family_system" id="family_system" placeholder="家庭系統"></textarea>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">社會系統</td>
                                                        <td>
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <textarea style="width:100%;resize: none;font-size: 20px;" name="social_system" id="social_system" placeholder="社會系統"></textarea>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">資源層面</td>
                                                        <td>
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <textarea style="width:100%;resize: none;font-size: 20px;" name="resource_system" id="resource_system" placeholder="資源層面"></textarea>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td rowspan="2" style="background-color:rgb(255 201 54);text-align:left;">診斷問題</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">主要問題</td>
                                                        <td>
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <textarea style="width:100%;resize: none;font-size: 20px;" name="diagnose_main" id="diagnose_main" placeholder="主要問題"></textarea>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">次要問題</td>
                                                        <td>
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <textarea style="width:100%;resize: none;font-size: 20px;" name="diagnose_minor" id="diagnose_minor" placeholder="次要問題"></textarea>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td rowspan="2" style="background-color:rgb(255 201 54);text-align:left;">處遇計畫</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">處遇目標</td>
                                                        <td>
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <textarea style="width:100%;resize: none;font-size: 20px;" name="dealwith_target" id="dealwith_target" placeholder="處遇目標"></textarea>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">處遇策略</td>
                                                        <td>
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <textarea style="width:100%;resize: none;font-size: 20px;" name="dealwith_strategy" id="dealwith_strategy" placeholder="處遇策略"></textarea>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">資源與轉介</td>
                                                        <td colspan="2">
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <textarea style="width:100%;resize: none;font-size: 20px;" name="resource_w_referrals" id="resource_w_referrals" placeholder="資源與轉介"></textarea>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="four" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="col-sm-12">
                                        <div style="margin-top:15px" class="text-center">
                                            <h4>成效評估</h4>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                    </div>
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <form id="form_4" class="form">
                                                <table style="width:auto;" class="table table-bordered">
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">1.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">憂鬱程度</td>
                                                        <td>
                                                            <table style="width:100%;">
                                                                <tr>
                                                                    <td>
                                                                        <!-- <span>（</span>
                                                                        <input style="width:3em;" name="pretest_depression_year" id="pretest_depression_year" type="text"><span>年</span>
                                                                        <input style="width:3em;" name="pretest_depression_month" id="pretest_depression_month" type="text"><span>月</span>
                                                                        <input style="width:3em;" name="pretest_depression_day" id="pretest_depression_day" type="text"><span>日</span>
                                                                        <span>前測）</span> -->
                                                                        <!-- <input style="width:3em;" name="pretest_depression_score" id="pretest_depression_score" type="text"><span>分&emsp;</span> -->
                                                                        <span id="pretest_depression_area">

                                                                        </span>
                                                                        &emsp;
                                                                        <input name="pretest_depression_radio" style="zoom: 1.5" value="無" type="radio"><span>無</span>
                                                                        <input name="pretest_depression_radio" style="zoom: 1.5" value="輕度" type="radio"><span>輕度</span>
                                                                        <input name="pretest_depression_radio" style="zoom: 1.5" value="中度" type="radio"><span>中度</span>
                                                                        <input name="pretest_depression_radio" style="zoom: 1.5" value="重度憂鬱" type="radio"><span>重度憂鬱；</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <!-- <span>（</span>
                                                                        <input style="width:3em;" name="midtest_depression_year" id="midtest_depression_year" type="text"><span>年</span>
                                                                        <input style="width:3em;" name="midtest_depression_month" id="midtest_depression_month" type="text"><span>月</span>
                                                                        <input style="width:3em;" name="midtest_depression_day" id="midtest_depression_day" type="text"><span>日</span>
                                                                        <span>中測）</span>
                                                                        <input style="width:3em;" name="midtest_depression_score" id="midtest_depression_score" type="text"><span>分&emsp;</span> -->
                                                                        <span id="midtest_depression_area">

                                                                        </span>
                                                                        &emsp;
                                                                        <input name="midtest_depression_radio" style="zoom: 1.5" value="無" type="radio"><span>無</span>
                                                                        <input name="midtest_depression_radio" style="zoom: 1.5" value="輕度" type="radio"><span>輕度</span>
                                                                        <input name="midtest_depression_radio" style="zoom: 1.5" value="中度" type="radio"><span>中度</span>
                                                                        <input name="midtest_depression_radio" style="zoom: 1.5" value="重度憂鬱" type="radio"><span>重度憂鬱；</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <!-- <span>（</span>
                                                                        <input style="width:3em;" name="posttest_depression_year" id="posttest_depression_year" type="text"><span>年</span>
                                                                        <input style="width:3em;" name="posttest_depression_month" id="posttest_depression_month" type="text"><span>月</span>
                                                                        <input style="width:3em;" name="posttest_depression_day" id="posttest_depression_day" type="text"><span>日</span>
                                                                        <span>後測）</span>
                                                                        <input style="width:3em;" name="posttest_depression_score" id="posttest_depression_score" type="text"><span>分&emsp;</span> -->
                                                                        <span id="posttest_depression_area">

                                                                        </span>
                                                                        &emsp;
                                                                        <input name="posttest_depression_radio" style="zoom: 1.5" value="無" type="radio"><span>無</span>
                                                                        <input name="posttest_depression_radio" style="zoom: 1.5" value="輕度" type="radio"><span>輕度</span>
                                                                        <input name="posttest_depression_radio" style="zoom: 1.5" value="中度" type="radio"><span>中度</span>
                                                                        <input name="posttest_depression_radio" style="zoom: 1.5" value="重度憂鬱" type="radio"><span>重度憂鬱；</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        <!-- <span>BSRS-5得</span><input style="width:3em;" name="BSRS5_score" id="BSRS5_score" type="text"><span>分身心障礙狀況良好，</span>
                                                                        <input name="BSRS5_checkbox" style="zoom: 1.5" value="無" type="checkbox"><span>無&emsp;自殺想法</span> -->
                                                                        <span id="bsrs5_test_area">

                                                                        </span>
                                                                        <span>&emsp;身心障礙狀況良好，</span>
                                                                        <input name="BSRS5_checkbox" style="zoom: 1.5" value="無" type="checkbox"><span>無&emsp;自殺想法</span>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">2.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">生活品質量表</td>
                                                        <td>
                                                            <table style="width:100%;">
                                                                <tr>
                                                                    <td>
                                                                        <!-- <span>（</span>
                                                                        <input style="width:3em;" name="pretest_life_year" id="pretest_life_year" type="text"><span>年</span>
                                                                        <input style="width:3em;" name="pretest_life_month" id="pretest_life_month" type="text"><span>月</span>
                                                                        <input style="width:3em;" name="pretest_life_day" id="pretest_life_day" type="text"><span>日</span>
                                                                        <span>前測）</span>
                                                                        &emsp;
                                                                        <span>得分/結果：</span>
                                                                        <input style="width:3em;" name="pretest_life_score" id="pretest_life_score" type="text"> -->
                                                                        <span id="pretest_life_area">

                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <!-- <span>（</span>
                                                                        <input style="width:3em;" name="midtest_life_year" id="midtest_life_year" type="text"><span>年</span>
                                                                        <input style="width:3em;" name="midtest_life_month" id="midtest_life_month" type="text"><span>月</span>
                                                                        <input style="width:3em;" name="midtest_life_day" id="midtest_life_day" type="text"><span>日</span>
                                                                        <span>中測）</span>
                                                                        &emsp;
                                                                        <span>得分/結果：</span>
                                                                        <input style="width:3em;" name="midtest_life_score" id="midtest_life_score" type="text"> -->
                                                                        <span id="midtest_life_area">

                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <!-- <span>（</span>
                                                                        <input style="width:3em;" name="posttest_life_year" id="posttest_life_year" type="text"><span>年</span>
                                                                        <input style="width:3em;" name="posttest_life_month" id="posttest_life_month" type="text"><span>月</span>
                                                                        <input style="width:3em;" name="posttest_life_day" id="posttest_life_day" type="text"><span>日</span>
                                                                        <span>後測）</span>
                                                                        &emsp;
                                                                        <span>得分/結果：</span>
                                                                        <input style="width:3em;" name="posttest_life_score" id="posttest_life_score" type="text"> -->
                                                                        <span id="posttest_life_area">

                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">3.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">家庭關係量表</td>
                                                        <td>
                                                            <table style="width:100%;">
                                                                <tr>
                                                                    <td>
                                                                        <!-- <span>（</span>
                                                                        <input style="width:3em;" name="pretest_familyship_year" id="pretest_familyship_year" type="text"><span>年</span>
                                                                        <input style="width:3em;" name="pretest_familyship_month" id="pretest_familyship_month" type="text"><span>月</span>
                                                                        <input style="width:3em;" name="pretest_familyship_day" id="pretest_familyship_day" type="text"><span>日</span>
                                                                        <span>前測）</span>
                                                                        <input style="width:3em;" name="pretest_familyship_score" id="pretest_familyship_score" type="text"><span>分&emsp;</span> -->
                                                                        <span id="pretest_familyship_area">

                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <!-- <span>（</span>
                                                                        <input style="width:3em;" name="midtest_familyship_year" id="midtest_familyship_year" type="text"><span>年</span>
                                                                        <input style="width:3em;" name="midtest_familyship_month" id="midtest_familyship_month" type="text"><span>月</span>
                                                                        <input style="width:3em;" name="midtest_familyship_day" id="midtest_familyship_day" type="text"><span>日</span>
                                                                        <span>中測）</span>
                                                                        <input style="width:3em;" name="midtest_familyship_score" id="midtest_familyship_score" type="text"><span>分</span> -->
                                                                        <span id="midtest_familyship_area">

                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <!-- <span>（</span>
                                                                        <input style="width:3em;" name="posttest_familyship_year" id="posttest_familyship_year" type="text"><span>年</span>
                                                                        <input style="width:3em;" name="posttest_familyship_month" id="posttest_familyship_month" type="text"><span>月</span>
                                                                        <input style="width:3em;" name="posttest_familyship_day" id="posttest_familyship_day" type="text"><span>日</span>
                                                                        <span>後測）</span>
                                                                        <input style="width:3em;" name="posttest_familyship_score" id="posttest_familyship_score" type="text"><span>分</span> -->
                                                                        <span id="posttest_familyship_area">

                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">4.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">就業輔導評估</td>
                                                        <td>
                                                            <input name="employment_radio" style="zoom: 1.5" value="成功就業" type="radio"><span>成功就業</span>
                                                            <input name="employment_radio" style="zoom: 1.5" value="失業" type="radio"><span>失業</span>
                                                            <input name="employment_radio" style="zoom: 1.5" value="就業輔導中" type="radio"><span>就業輔導中</span>
                                                            <input name="employment_radio" style="zoom: 1.5" value="其他" type="radio"><span>其他</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">5.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">社會適應程度評估</td>
                                                        <td>
                                                            <input name="social_adaptation_radio" style="zoom: 1.5" value="適應良好" type="radio"><span>適應良好</span>
                                                            <input name="social_adaptation_radio" style="zoom: 1.5" value="佳" type="radio"><span>佳</span>
                                                            <input name="social_adaptation_radio" style="zoom: 1.5" value="尚可" type="radio"><span>尚可</span>
                                                            <input name="social_adaptation_radio" style="zoom: 1.5" value="不佳" type="radio"><span>不佳</span>
                                                            <input name="social_adaptation_radio" style="zoom: 1.5" value="適應問題不佳" type="radio"><span>適應問題不佳</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:right;">6.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">其他評量</td>
                                                        <td colspan="6">
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <textarea style="height:150px;width:100%;resize: none;font-size: 20px;" name="other_assessments" id="other_assessments" placeholder="其他評量"></textarea>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td rowspan="2" style="background-color:rgb(255 201 54);text-align:right;">7.</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">結案指標</td>
                                                        <td colspan="6">
                                                            <table style="width:100%;">
                                                                <tr>
                                                                    <td>
                                                                        <input name="end_indicator" style="zoom: 1.5" value="達到目標，已無需要在服務" type="radio">
                                                                        <span>1.達到目標，已無需要在服務。</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input name="end_indicator" style="zoom: 1.5" value="穩定就業三個月，以達到目標" type="radio">
                                                                        <span>2.穩定就業三個月，以達到目標。</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input name="end_indicator" style="zoom: 1.5" value="個案者死亡" type="radio">
                                                                        <span>3.個案者死亡。</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input name="end_indicator" style="zoom: 1.5" value="再次入監無法合作" type="radio">
                                                                        <span>4.再次入監無法合作。</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input name="end_indicator" style="zoom: 1.5" value="無意願接受服務" type="radio">
                                                                        <span>5.無意願接受服務。</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input name="end_indicator" style="zoom: 1.5" value="失去聯絡（一個月連繫三次均聯繫不上或三個月，每月連繫三次均聯繫不上）" type="radio">
                                                                        <span>6.失去聯絡（一個月連繫三次均聯繫不上或三個月，每月連繫三次均聯繫不上）。</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input name="end_indicator" style="zoom: 1.5" value="轉介其他資源單位，並已達成處遇目標" type="radio">
                                                                        <span>7.轉介其他資源單位，並已達成處遇目標。</span>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2">
                                                            <table>
                                                                <tr>
                                                                    <td>
                                                                        <input name="case_closed_radio" style="zoom: 1.5" value="結案" type="radio"><span>結案，符合結案指標：</span><input style="width:30em;" name="case_closed_yes" id="case_closed_yes" type="text">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        <input name="case_closed_radio" style="zoom: 1.5" value="暫不結案" type="radio"><span>暫不結案，持續服務（至</span>
                                                                        <input style="width:3em;" name="case_closed_year" id="case_closed_year" type="text"><span>年</span>
                                                                        <input style="width:3em;" name="case_closed_month" id="case_closed_month" type="text"><span>月</span>
                                                                        <input style="width:3em;" name="case_closed_day" id="case_closed_day" type="text"><span>日）&emsp;</span>
                                                                        <input style="width:3em;" name="case_closed_totalmonth" id="case_closed_totalmonth" type="text"><span>個月，再評估結案。</span>
                                                                        <br/><span>說明：</span><input style="width:30em;" name="case_closed_remark" id="case_closed_remark" type="text">
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>

                                                </table>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-footer" style="text-align:center;">
                                    <button style="font-size:20px" id="add_case_detail" class="btn btn-default" data-toggle="modal"data-target="#case_storage_model">
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
                                <div class="text-right">
                                    <button style="font-size:20px" id="trans_grade" type="button" class="btn btn-default" data-toggle="modal" data-target="#trans_grade_model">轉級</button>
                                    <button style="font-size:20px" id="trans_case" type="button" class="btn btn-default" data-toggle="modal" data-target="#trans_user_model">轉案</button>
                                    <button style="font-size:20px" id="end" type="button" class="btn btn-default">結案</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>