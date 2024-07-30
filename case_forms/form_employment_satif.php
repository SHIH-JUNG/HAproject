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
    <div id="form-container"></div>
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

</style>
<div style="zoom:80%" class="row">
    <div class="col-md-12">
        <div class="panel panel-default card-view">
            <div class="panel-wrapper collapse in">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-sm-12 col-xs-12">
                            <div  class="text-center">
                                <h4 id="form_type">就業需求評估表&就業服務滿意度調查表</h4>
                            </div>
                            <br>
                            <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item active" role="presentation">
                                    <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                        <b>就業需求評估表</b>
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="profile-tab" data-toggle="pill" href="#two" role="tab" aria-selected="false">
                                        <b>就業服務滿意度調查表</b>
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="panel-body">
                                    </div>
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <form id="form_all1">
                                            <form id="form_1" class="form">
                                            <div class="col-sm-12">
                                            <div style="margin-top:15px" class="text-center">
                                                <h4>就業需求評估表</h4>
                                            </div>
                                            </div>
                                                <table style="width:100%;" class="table table-bordered">
                                                    <tr>
                                                        <td colspan="6" style="color: #d86d6d;">
                                                        填寫日期：<input name="fillin_date_0" id="fillin_date_0" type="date">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="6" style="background-color:rgb(255 201 54);text-align:center;">
                                                            個案基本資料
                                                        </td>
                                                    </tr>

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

                                                        <td style="background-color:rgb(255 201 54);text-align:left;">生日</td>
                                                        <td>
                                                            <input name="birth" id="birth" type="date">
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">聯絡電話</td>
                                                        <td colspan="5">
                                                            <input style="width:15em;" name="phone" id="phone" type="text">
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">聯絡地址</td>
                                                        <td colspan="5">
                                                            <input style="width:85%;" name="address" id="address" type="text">
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">學歷</td>
                                                        <td colspan="5">
                                                            <input name="education_graduate" style="zoom: 1.5" value="畢業" type="radio"><span>畢業</span>
                                                            <input name="education_graduate" style="zoom: 1.5" value="肄業" type="radio"><span>肄業</span>
                                                            <input name="education_graduate" style="zoom: 1.5" value="就讀中" type="radio"><span>就讀中</span>
                                                            <input name="education_graduate" style="zoom: 1.5" value="休學中" type="radio"><span>休學中</span>
                                                            <br>
                                                            <input name="highest_education" style="zoom: 1.5" value="國小" type="radio"><span>國小</span>
                                                            <input name="highest_education" style="zoom: 1.5" value="國中" type="radio"><span>國中</span>
                                                            <input name="highest_education" style="zoom: 1.5" value="高中" type="radio"><span>高中</span>
                                                            <input name="highest_education" style="zoom: 1.5" value="大學" type="radio"><span>大學</span>
                                                            <input name="highest_education" style="zoom: 1.5" value="碩專" type="radio"><span>碩專</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">工作經歷</td>
                                                        <td colspan="5">
                                                            <div class="col-sm-12">
                                                                <div class="text-left">
                                                                    <textarea style="height:150px;width:100%;resize: none;font-size: 20px;" name="work_experience" id="work_experience" placeholder="工作經歷"></textarea>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">緊急聯絡人</td>
                                                        <td>
                                                            <input style="width:85%;" name="contact_name" id="contact_name" type="text">
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;">關係</td>
                                                        <td>
                                                            <input style="width:85%;" name="relation" id="relation" type="text">
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;">緊急連絡電話</td>
                                                        <td>
                                                            <input style="width:85%;" name="contact_phone" id="contact_phone" type="text">
                                                        </td>
                                                    </tr>
                                                </table>
                                            </form>

                                            <form id="form_2" class="form">
                                                <table style="width:100%;" class="table table-bordered">
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:center;">
                                                            身心狀況
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table style="width:100%;">
                                                            <tr>
                                                                <td>
                                                                    <input name="physical_mental_q" style="zoom: 1.5" value="正常" type="checkbox" class="none" onclick="toggleCheckboxes(this)"><span>正常</span>
                                                                </td>
                                                            </tr>
                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        <input name="physical_mental_q" style="zoom: 1.5" value="領有身心障礙手冊" type="checkbox"><span>領有身心障礙手冊-</span>
                                                                        <span>(
                                                                            <input name="disabilities" style="zoom: 1.5" value="視障" type="checkbox"><span>視障</span>
                                                                            <input name="disabilities" style="zoom: 1.5" value="聽障" type="checkbox"><span>聽障</span>
                                                                            <input name="disabilities" style="zoom: 1.5" value="平衡機能障礙" type="checkbox"><span>平衡機能障礙</span>
                                                                            <input name="disabilities" style="zoom: 1.5" value="生與障礙" type="checkbox"><span>生與障礙</span>
                                                                            <input name="disabilities" style="zoom: 1.5" value="肢障" type="checkbox"><span>肢障</span>
                                                                            <input name="disabilities" style="zoom: 1.5" value="智障" type="checkbox"><span>智障</span>
                                                                        )</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        <input name="physical_mental_q" style="zoom: 1.5" value="重要器官" type="checkbox"><span>重要器官</span>
                                                                        <input style="width:20em;" name="physical_mental_t_1" id="physical_mental_t_1" type="text"><span>失去功能</span>
                                                                        <span>(
                                                                            <input name="disabilities" style="zoom: 1.5" value="顏面損傷" type="checkbox"><span>顏面損傷</span>
                                                                            <input name="disabilities" style="zoom: 1.5" value="自閉症" type="checkbox"><span>自閉症</span>
                                                                            <input name="disabilities" style="zoom: 1.5" value="慢性精神病" type="checkbox"><span>慢性精神病</span>
                                                                        )</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        <input name="physical_mental_q" style="zoom: 1.5" value="多重障礙" type="checkbox"><span>多重障礙</span>
                                                                        <input style="width:20em;" name="physical_mental_t_2" id="physical_mental_t_2" type="text">
                                                                        <span>(
                                                                            <input name="disabilities" style="zoom: 1.5" value="頑性(難治型)癲癇症" type="checkbox"><span>頑性(難治型)癲癇症</span>
                                                                            <input name="disabilities" style="zoom: 1.5" value="罕見疾病" type="checkbox"><span>罕見疾病</span>
                                                                        )</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        <input name="physical_mental_q" style="zoom: 1.5" value="未領有身心障礙手冊但一四身心障礙者" type="checkbox"><span>未領有身心障礙手冊但一四身心障礙者</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        <input name="physical_mental_q" style="zoom: 1.5" value="心理受創問題尚需諮商服務" type="checkbox"><span>心理受創問題尚需諮商服務</span>
                                                                        <span>已接受諮商服務(
                                                                            <input name="disabilities" style="zoom: 1.5" value="是" type="checkbox"><span>是</span>
                                                                            <input name="disabilities" style="zoom: 1.5" value="否" type="checkbox"><span>否</span>
                                                                        )</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        <input name="physical_mental_q" style="zoom: 1.5" value="其他" type="checkbox"><span>其他(例如︰高血壓、糖尿病、輕度憂鬱症等可能影響工作支疾病)</span>
                                                                        <input style="width:20em;" name="physical_mental_t_3" id="physical_mental_t_3" type="text">
                                                                    </td>
                                                                </tr>
                                                        </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </form>

                                            <form id="form_3" class="form">
                                                <table style="width:100%;" class="table table-bordered">
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:center;">
                                                            個案背景
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table style="width:100%;">
                                                                <tr>
                                                                    <td>
                                                                        1.矯治記錄：
                                                                        <input name="correction_rec" style="zoom: 1.5" value="觀察勒戒" type="checkbox"><span>觀察勒戒</span>
                                                                        <input style="width:3em;" name="correction_rec_t_1" id="correction_rec_t_1" type="text"><span>次</span>

                                                                        <input name="correction_rec" style="zoom: 1.5" value="強制戒治" type="checkbox"><span>強制戒治</span>
                                                                        <input style="width:3em;" name="correction_rec_t_2" id="correction_rec_t_2" type="text"><span>次</span>

                                                                        <input name="correction_rec" style="zoom: 1.5" value="入監服刑" type="checkbox"><span>入監服刑</span>
                                                                        <input style="width:3em;" name="correction_rec_t_3" id="correction_rec_t_3" type="text"><span>次</span>

                                                                        <span>期間︰</span><input style="width:15em;" name="correction_rec_t_4" id="correction_rec_t_4" type="text">
                                                                        <span>處所︰</span><input style="width:24em;" name="correction_rec_t_5" id="correction_rec_t_5" type="text"><span>。</span>
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        2.最近一次接受矯治時間：
                                                                        <span>開始日期︰</span><input name="correction_rec_date_start" id="correction_rec_date_start" type="date">
                                                                        <span>，結束日期︰</span><input name="correction_rec_date_end" id="correction_rec_date_end" type="date"><span>。</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        3.是否曾接受其他戒毒方法︰
                                                                        <input name="correction_rec_other" style="zoom: 1.5" value="是" type="radio"><span>是</span>
                                                                        <input name="correction_rec_other" style="zoom: 1.5" value="否" type="radio"><span>否</span>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </form>

                                            <form id="form_4" class="form">
                                                <table style="width:100%;" class="table table-bordered">
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:center;">
                                                            就業服務
                                                            需求評估
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table style="width:100%;">
                                                                <tr>
                                                                    <td>
                                                                        個案就業能力評估與需求摘要︰
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        1.希望工作職類︰
                                                                        <input style="width:20em;" name="capability_t_0" id="capability_t_0" type="text">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        2.希望工作地點︰
                                                                        <input style="width:20em;" name="capability_t_1" id="capability_t_1" type="text">
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        3.期待薪資︰
                                                                        <input style="width:15em;" name="capability_t_2" id="capability_t_2" type="text">
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                            4.希望工作時間︰
                                                                            <input name="capability_checkbox" style="zoom: 1.5" value="部分工時" type="checkbox"><span>部分工時</span>
                                                                            <span>(</span>
                                                                            <input style="width:3em;" name="capability_t_3" id="capability_t_3" type="text">
                                                                            <span>至</span>
                                                                            <input style="width:3em;" name="capability_t_4" id="capability_t_4" type="text">
                                                                            <span>點)</span>&nbsp;&nbsp;&nbsp;&nbsp;<input name="capability_checkbox" style="zoom: 1.5" value="全職" type="checkbox"><span>全職</span>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table style="width:100%;">
                                                                <tr>
                                                                    <td>
                                                                        基本技能︰
                                                                    </td>
                                                                </tr>

                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        &diams;&nbsp;外語能力
                                                                        <input name="basic_skills_radio" style="zoom: 1.5" value="具備" type="radio"><span>具備</span>
                                                                        <input name="basic_skills_radio" style="zoom: 1.5" value="不具備" type="radio"><span>不具備</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        &diams;&nbsp;電腦能力
                                                                        <input name="computer_skills_checkbox" style="zoom: 1.5" value="基本文書操作" type="checkbox"><span>基本文書操作</span>
                                                                        <input name="computer_skills_checkbox" style="zoom: 1.5" value="美工軟體" type="checkbox"><span>美工軟體</span>
                                                                        <input name="computer_skills_checkbox" style="zoom: 1.5" value="程式設計" type="checkbox"><span>程式設計</span>
                                                                        <input name="computer_skills_checkbox" style="zoom: 1.5" value="不具備" type="checkbox" class="none" onclick="toggleCheckboxes(this)"><span>不具備</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        &diams;&nbsp;<input name="other_skills_checkbox" style="zoom: 1.5" value="其他" type="checkbox">其他
                                                                        <input style="width:22em;" name="other_skills_t_0" id="other_skills_t_0" type="text">
                                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                                        <input name="other_skills_checkbox" style="zoom: 1.5" value="會 計" type="checkbox"><span>會 計</span>
                                                                        <input name="other_skills_checkbox" style="zoom: 1.5" value="餐飲烹調" type="checkbox"><span>餐飲烹調</span>
                                                                        <input name="other_skills_checkbox" style="zoom: 1.5" value="美容美髮" type="checkbox"><span>美容美髮</span>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table style="width:100%;">
                                                                <tr>
                                                                    <td>
                                                                        交通能力︰
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        &diams;&nbsp;<input name="traffic_checkbox" style="zoom: 1.5" value="不需要他人協助" type="checkbox" class="none" onclick="toggleCheckboxes(this)">不需要他人協助(
                                                                        <input name="traffic_capacity_checkbox" style="zoom: 1.5" value="腳踏車" type="checkbox"><span>腳踏車</span>
                                                                        <input name="traffic_capacity_checkbox" style="zoom: 1.5" value="機車" type="checkbox"><span>機車</span>
                                                                        <input name="traffic_capacity_checkbox" style="zoom: 1.5" value="汽車" type="checkbox"><span>汽車</span>
                                                                        <input name="traffic_capacity_checkbox" style="zoom: 1.5" value="大眾交通工具" type="checkbox"><span>大眾交通工具)</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        &diams;&nbsp;<input name="traffic_checkbox" style="zoom: 1.5" value="需要他人協助" type="checkbox">需要他人協助
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <span>希望參加職業訓練類別︰</span><input style="width:20em;margin-bottom:.5em;" name="traffic_capacity_t_0" id="traffic_capacity_t_0" type="text"><br/>
                                                                        <span>希望參與職訓時間︰</span><input style="width:20em;margin-bottom:.5em;" name="traffic_capacity_t_1" id="traffic_capacity_t_1" type="text"><br/>
                                                                        <span>其他就業需求︰</span><input style="width:24em;" name="traffic_capacity_t_2" id="traffic_capacity_t_2" type="text">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <br/>
                                                                        (需要特別協助之處，如︰有無安全考量、需申請福利補助等)
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </form>
                                            <form id="form_5" class="form">
                                                <table style="width:100%;" class="table table-bordered">
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:center;">
                                                            目前
                                                            就業狀況
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table style="width:100%;">
                                                                <tr>
                                                                    <td>
                                                                        <input name="employment_status_checkbox" style="zoom: 1.5" value="已找到工作" type="checkbox"><span>已找到工作；</span>
                                                                        <span>找到工作日期：</span><input style="width:15em;margin-bottom:.5em;" name="employment_status_t_date" id="employment_status_t_date" type="date">
                                                                        <br/><input name="employment_status_checkbox" style="zoom: 1.5" value="未找到工作" type="checkbox"><span>未找到工作:</span>
                                                                        <textarea style="height:150px;width:100%;resize: none;font-size: 20px;" name="employment_status_t_1" id="employment_status_t_1" placeholder="未找到工作"></textarea>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                    <br/><br/><br/>
                                                                        <span>公司名稱：</span><input style="width:22em;margin-bottom:.5em;" name="employment_status_t_2" id="employment_status_t_2" type="text"><br/>
                                                                        <span>工作性質：</span><input style="width:22em;margin-bottom:.5em;" name="employment_status_t_3" id="employment_status_t_3" type="text"><br/>
                                                                        <span>薪水&emsp;&emsp;：</span><input style="width:22em;margin-bottom:.5em;" name="employment_status_t_4" id="employment_status_t_4" type="text"><br/>
                                                                        <span>上班時間：</span><input style="width:22em;margin-bottom:.5em;" name="employment_status_t_5" id="employment_status_t_5" type="text"><br/>
                                                                        <span>就業狀況：</span><input style="width:22em;margin-bottom:.5em;" name="employment_status_t_6" id="employment_status_t_6" type="text">
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </form>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <button style="font-size:20px" class="btn btn-default" onclick="previewAndPrintSection('one')">匯出就業需求評估表為PDF</button>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="panel-body">
                                    </div>
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <form id="form_all2">
                                            <form id="form_2" class="form">
                                            <div class="col-sm-12">
                                            <div style="margin-top:15px" class="text-center">
                                                <h4>就業服務滿意度調查表</h4>
                                            </div>
                                            </div>
                                                <table style="width:100%;" class="table table-bordered" id="bottomtable">
                                                        <tr>
                                                            <td colspan="10">
                                                                <table style="width:100%;">
                                                                    <tr>
                                                                        <td style="color: #d86d6d;">
                                                                            案號：<input style="margin-bottom:0.5em;" name="tsn_case_id" id="tsn_case_id" type="text">
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td style="color: #d86d6d;">
                                                                            填寫日期：<input name="fillin_date_1" id="fillin_date_1" type="date">
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="5" style="background-color:rgb(255 201 54);"></td>
                                                            <td style="word-break:break-all;background-color:rgb(255 201 54);text-align:center;">非常滿意</td>
                                                            <td style="word-break:break-all;background-color:rgb(255 201 54);">滿意</td>
                                                            <td style="word-break:break-all;background-color:rgb(255 201 54);">普通</td>
                                                            <td style="word-break:break-all;background-color:rgb(255 201 54);">不滿意</td>
                                                            <td style="word-break:break-all;background-color:rgb(255 201 54);">非常不滿意</td>
                                                        </tr>
                                                        <tr>
                                                            <td style="background-color:rgb(255 201 54);text-align:right;">1.</td>
                                                            <td colspan="4" style="width:90%;">您對就業轉介之服務</td>
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
                                                            <td colspan="4">您對就業輔導</td>
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
                                                            <td colspan="4">您對提供就業諮詢</td>
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
                                                            <td colspan="4">您對提供求職資訊</td>
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
                                                            <td colspan="4">您對提供求職面談技巧</td>
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
                                                            <td colspan="4">有解決您就業上的需求</td>
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
                                                            <td colspan="4">在職場的人際互動是否</td>
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
                                                            <td colspan="4">您對就業後，有感受到生活的改善</td>
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
                                                            <td colspan="4">您對目前這份工作</td>
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
                                                            <td colspan="4">您是否已穩定就業三個月</td>
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
                                            </form>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <button style="font-size:20px" class="btn btn-default" onclick="previewAndPrintSection('form_all2')">匯出就業服務滿意度調查表為PDF</button>
                                    </div>
                                </div>

                                <div class="panel-footer" style="text-align:center;">
                                    <button style="font-size:20px" id="add_employment_satif_detail" class="btn btn-default" data-toggle="modal"data-target="#case_storage_model2">
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
                                    <button style="font-size:20px" class="btn btn-default" onclick="previewAndPrintSection('one')">匯出就業需求評估表為PDF</button>
                                    <button style="font-size:20px" class="btn btn-default" onclick="previewAndPrintSection('form_all2')">匯出就業服務滿意度調查表為PDF</button>
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