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
                                <h4 id="form_type">安置、自立宿舍評估量表</h4>
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
                                        <b>問題陳述/問題分析與診斷/處遇計畫/資源與轉介/成效評估</b>
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
                                                        <td style="background-color:rgb(255 201 54);text-align:left;color:#d86d6d;">個案姓名：</td>
                                                        <td>
                                                            <input style="width:85%;" name="case_name" id="case_name" type="text" disabled="disabled">
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;color:#d86d6d;">評估日期：</td>
                                                        <td>
                                                            <input style="width:85%;" name="fillin_date" id="fillin_date" type="date">
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;color:#d86d6d;">評估社工：</td>
                                                        <td>
                                                            <input style="width:85%;" name="assign_name" id="assign_name" type="text">
                                                        </td>
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
                                                                    <input name="sex" style="zoom: 1.5" value="男生" type="radio"><span>男生</span>
                                                                    <input name="sex" style="zoom: 1.5" value="女生" type="radio"><span>女生</span>
                                                                    <input name="sex" style="zoom: 1.5" value="其他" type="radio"><span>其他</span>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;">聯絡電話</td>
                                                        <td colspan="3">
                                                            <input style="width:85%;" name="phone" id="phone" type="text">
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
                                                        <td colspan="6" style="background-color:rgb(255 201 54);text-align:left;">家系圖/生態圖</td>
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
                                                        <td style="background-color:rgb(255 201 54);text-align:left;min-width: 11em;">診斷HIV時間</td>
                                                        <td>
                                                            <span>民國</span>
                                                            <input style="width:3em;" name="treatment_time_year" id="treatment_time_year" type="text"><span>年</span>
                                                            <input style="width:3em;" name="treatment_time_month" id="treatment_time_month" type="text"><span>月</span>
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
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Genvoye捷芙康" type="checkbox"><span>Genvoye捷芙康</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Atripla亞翠佩" type="checkbox"><span>Atripla亞翠佩</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Dovato" type="checkbox"><span>Dovato</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="安以斯Ocmplera" type="checkbox"><span>安以斯Ocmplera</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="洛瓦俊" type="checkbox"><span>洛瓦俊</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="吉他韋Biktarvy" type="checkbox"><span>吉他韋Biktarvy</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="信澤力Symtuza" type="checkbox"><span>信澤力Symtuza</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="滋若愷Juluca" type="checkbox"><span>滋若愷Juluca</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="3TC速汰滋" type="checkbox"><span>3TC速汰滋</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Combivir卡貝茲" type="checkbox"><span>Combivir卡貝茲</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Duovir倍歐減" type="checkbox"><span>Duovir倍歐減</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Zovilam諾穩錠" type="checkbox"><span>Zovilam諾穩錠</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Kivexa克為滋" type="checkbox"><span>Kivexa克為滋</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="TDF惠立妥" type="checkbox"><span>TDF惠立妥</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Truvada舒發泰" type="checkbox"><span>Truvada舒發泰</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="衛滋" type="checkbox"><span>衛滋</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="寧衛邁" type="checkbox"><span>寧衛邁</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="希寧" type="checkbox"><span>希寧</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="恩臨" type="checkbox"><span>恩臨</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="快利佳" type="checkbox"><span>快利佳</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="諾億亞" type="checkbox"><span>諾億亞</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="瑞塔滋" type="checkbox"><span>瑞塔滋</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="宜昇瑞" type="checkbox"><span>宜昇瑞</span></td>
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
                                            <h4>問題陳述/問題分析與診斷/處遇計畫/資源與轉介/成效評估</h4>
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
                                                        <td rowspan="2" style="background-color:rgb(255 201 54);text-align:left;">收案指標及評估結果</td>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">基本條件指標</td>
                                                        <td colspan="2">
                                                            <table style="width:100%;">
                                                                <tr>
                                                                    <td>
                                                                        <input name="basic_indicator" style="zoom: 1.5" value="藥癮者居無定所" type="checkbox">
                                                                        <span>1.藥癮者居無定所。</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input name="basic_indicator" style="zoom: 1.5" value="本身同意於安置中心入住並有意願重新開始者" type="checkbox">
                                                                        <span>2.本身同意於安置中心入住並有意願重新開始者。</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input name="basic_indicator" style="zoom: 1.5" value="願意配合本聯盟社工處遇與安置中心/自立宿舍相關規定" type="checkbox">
                                                                        <span>3.願意配合本聯盟社工處遇與安置中心/自立宿舍相關規定。</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input name="basic_indicator" style="zoom: 1.5" value="願意配合入住時藥癮檢測與每周、不定時藥癮檢測" type="checkbox">
                                                                        <span>4.願意配合入住時藥癮檢測與每周、不定時藥癮檢測。</span>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">收案指標</td>
                                                        <td colspan="2">
                                                            <table style="width:100%;">
                                                                <tr>
                                                                    <td>
                                                                        <input name="end_indicator" style="zoom: 1.5" value="入住當日與入住後都願意接受藥癮檢測 結果都呈陰性者，沒有在使用非法藥物者，但可以接受使用美沙酮或舌下錠者(丁基原啡因)" type="checkbox">
                                                                        <span>1.入住當日與入住後都願意接受藥癮檢測 結果都呈陰性者，沒有在使用非法藥物者，但可以接受使用美沙酮或舌下錠者(丁基原啡因)。</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input name="end_indicator" style="zoom: 1.5" value="個案須接種過疫苗才能入住機構" type="checkbox">
                                                                        <span>2.個案須接種過疫苗才能入住機構。</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input name="end_indicator" style="zoom: 1.5" value="生活可自理者且行動能力正常" type="checkbox">
                                                                        <span>3.生活可自理者且行動能力正常。</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input name="end_indicator" style="zoom: 1.5" value="個案需要至感染科就診，並附上病歷摘要表，以利審核" type="checkbox">
                                                                        <span>4.個案需要至感染科就診，並附上病歷摘要表，以利審核。</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input name="end_indicator" style="zoom: 1.5" value="因應COVID-19疫情個案都必須做過快篩機制結果為陰性者才能入住" type="checkbox">
                                                                        <span>5.因應COVID-19疫情個案都必須做過快篩機制結果為陰性者才能入住。</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input name="end_indicator" style="zoom: 1.5" value="個案家屬需負擔個案就醫、生活用品等費用" type="checkbox">
                                                                        <span>6.個案家屬需負擔個案就醫、生活用品等費用。</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input name="end_indicator" style="zoom: 1.5" value="無精神障礙或者經評估是輕微精神患者，且無攻擊行為、器質性、嚴重思覺失調症者才能入住" type="checkbox">
                                                                        <span>7.無精神障礙或者經評估是輕微精神患者，且無攻擊行為、器質性、嚴重思覺失調症者才能入住。</span>
                                                                    </td>
                                                                </tr>
                                                            </table>
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
                                <div class="panel-footer" style="text-align:center;">
                                    <button style="font-size:20px" id="add_settlement_detail" class="btn btn-default" data-toggle="modal"data-target="#case_storage_model">
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