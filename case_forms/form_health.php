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
    .medical_history_table tr td:first-child
    {
        vertical-align:top;
    }

    .medical_history_table tr td,
    .medication_table tr td,
    .smoke_status_table tr td
    {
        padding-bottom: 0.5em;
    }

    .smoke_rec_table tbody tr td input
    {
        width:100%;
    }

    .smoke_rec_table thead tr th
    {
        padding-top:.5em;
        padding-bottom:.5em;
    }

    .medical_rec_table thead tr th
    {
        background-color:rgb(255 201 54);
        text-align:center;
    }

    .medical_rec_table tbody tr td input
    {
        width:100%;
    }

    .medical_rec_1 tr td:nth-child(1)
    {
        width:6.5em;
    }

    .form_health tbody tr td
    {
        padding:0px;
    }

    .medical_rec_table input[type="text"],
    .smoke_rec_table input[type="text"]
    {
         border: none;
    }

    /* .medical_rec_1 tr td:nth-child(2),
    .medical_rec_1 tr td:nth-child(4),
    .medical_rec_2 tr td:nth-child(2)
    {
        width:4em;
    }

    .medical_rec_1 tr td:nth-child(3)
    {
        width:6em;
    } */
</style>
<div style="zoom:80%" class="row">
    <div class="col-md-12">
        <div class="panel panel-default card-view">
            <div class="panel-wrapper collapse in">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-sm-12 col-xs-12">
                            <div  class="text-center">
                                <h4 id="form_type">健康管理評估表</h4>
                            </div>
                            <br>
                            <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item active" role="presentation">
                                    <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                        <b>基本資料</b>
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="profile-tab1" data-toggle="pill" href="#two" role="tab" aria-selected="false">
                                        <b>菸癮狀況</b>
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="profile-tab2" data-toggle="pill" href="#three" role="tab" aria-selected="false">
                                        <b>就診紀錄表</b>
                                    </a>
                                </li>
                                <li id="new_rec">
                                    <a href="javascript:addNewTag()" alt="新增就診紀錄表">
                                        <b>+</b>
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="panel-body">
                                    </div>
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <form id="form_1" class="form">
                                            <div class="col-sm-12">
                                            <div style="margin-top:15px" class="text-center">
                                                <h4>基本資料</h4>
                                            </div>
                                            </div>
                                                <table style="width:100%;" class="table table-bordered">
                                                    <tr>
                                                        <td colspan="4" style="color: #d86d6d;">
                                                            填寫日期：<input name="fillin_date" id="fillin_date" type="date">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">姓名</td>
                                                        <td style="width:35%;">
                                                            <input name="name" id="name" type="text">
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;">生日</td>
                                                        <td style="width:45%;">
                                                            <input name="birth" id="birth" type="date">
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">身分證字號</td>
                                                        <td>
                                                            <input name="pid" id="pid" type="text">
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;">全國醫療卡</td>
                                                        <td>
                                                            <input name="medical_card" id="medical_card" type="text">
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;min-width: 11em;">診斷HIV時間</td>
                                                        <td>
                                                            <span>民國</span>
                                                            <input style="width:3em;" name="treatment_time_year" id="treatment_time_year" type="text"><span>年</span>
                                                            <input style="width:3em;" name="treatment_time_month" id="treatment_time_month" type="text"><span>月</span>
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;">衛生單位轄區</td>
                                                        <td>
                                                            <input style="width:18em;" name="health_clinic_unit" id="health_clinic_unit" type="text">
                                                            <span>/承辦者：</span>
                                                            <input name="health_clinic_name" id="health_clinic_name" type="text">
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">HIV主治醫師</td>
                                                        <td>
                                                            <input name="medical_name" id="medical_name" type="text">
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;">HIV就醫醫院</td>
                                                        <td>
                                                            <input style="width:18em;" name="medical_info" id="medical_info" type="text">
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">HIV個案管理師</td>
                                                        <td>
                                                            <input name="medical_manager" id="medical_manager" type="text">
                                                        </td>

                                                        <td style="background-color:rgb(255 201 54);text-align:left;">有無B、C肝</td>
                                                        <td>
                                                            <input name="hepatitis" style="zoom: 1.5" value="無" type="radio"><span>無</span>
                                                            <input name="hepatitis" style="zoom: 1.5" value="B肝" type="radio"><span>B肝</span>
                                                            <input name="hepatitis" style="zoom: 1.5" value="C肝" type="radio"><span>C肝</span>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td rowspan="2" style="background-color:rgb(255 201 54);text-align:left;">雞尾酒療法<br/>服用藥物</td>
                                                        <td colspan="3">
                                                            <table class="medicine_table" style="text-align:left;width:100%;table-layout:fixed;">
                                                                <tr>
                                                                    <td colspan="4"><input name="medicine" style="zoom: 1.5" value="尚未服藥" type="checkbox"><span>尚未服藥</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Triumeq三恩美" type="checkbox"><span>Triumeq三恩美</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Atripla亞翠佩" type="checkbox"><span>Atripla亞翠佩</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Complera康普萊" type="checkbox"><span>Complera康普萊</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Genvoye捷芙康" type="checkbox"><span>Genvoye捷芙康</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Atripla亞翠佩" type="checkbox"><span>Atripla亞翠佩</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Dovato" type="checkbox"><span>Dovato</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="安以斯Ocmplera" type="checkbox"><span>安以斯Ocmplera</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="吉他韋Biktarvy" type="checkbox"><span>吉他韋Biktarvy</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="信澤力Symtuza" type="checkbox"><span>信澤力Symtuza</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="滋若愷Juluca" type="checkbox"><span>滋若愷Juluca</span></td>
                                                                </tr>

                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="3TC速汰滋" type="checkbox"><span>3TC速汰滋</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Combivir卡貝茲" type="checkbox"><span>Combivir卡貝茲</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Duovir倍歐減" type="checkbox"><span>Duovir倍歐減</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Zovilam諾穩錠" type="checkbox"><span>Zovilam諾穩錠</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Kivexa克為滋" type="checkbox"><span>Kivexa克為滋</span></td>
                                                                </tr>

                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="TDF惠立妥" type="checkbox"><span>TDF惠立妥</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="Truvada舒發泰" type="checkbox"><span>Truvada舒發泰</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="衛滋" type="checkbox"><span>衛滋</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="寧衛邁" type="checkbox"><span>寧衛邁</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="希寧" type="checkbox"><span>希寧</span></td>
                                                                </tr>

                                                                <tr>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="恩臨" type="checkbox"><span>恩臨</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="快利佳" type="checkbox"><span>快利佳</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="諾億亞" type="checkbox"><span>諾億亞</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="瑞塔滋" type="checkbox"><span>瑞塔滋</span></td>
                                                                    <td><input name="medicine" style="zoom: 1.5" value="宜昇瑞" type="checkbox"><span>宜昇瑞</span></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="3">
                                                            <table class="symptoms_table" style="text-align:left;width:100%;table-layout:fixed;">
                                                                <tr>
                                                                    <td colspan="3"><b>合併症狀</b></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="symptoms" style="zoom: 1.5" value="無" type="checkbox"><span>無</span></td>
                                                                    <td><input name="symptoms" style="zoom: 1.5" value="持續疲倦" type="checkbox"><span>持續疲倦</span></td>
                                                                    <td><input name="symptoms" style="zoom: 1.5" value="皮膚發疹" type="checkbox"><span>皮膚發疹</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="symptoms" style="zoom: 1.5" value="腹瀉" type="checkbox"><span>腹瀉</span></td>
                                                                    <td><input name="symptoms" style="zoom: 1.5" value="發燒" type="checkbox"><span>發燒</span></td>
                                                                    <td><input name="symptoms" style="zoom: 1.5" value="淤傷或腫塊" type="checkbox"><span>淤傷或腫塊</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="symptoms" style="zoom: 1.5" value="頭痛" type="checkbox"><span>頭痛</span></td>
                                                                    <td><input name="symptoms" style="zoom: 1.5" value="夜間出汗" type="checkbox"><span>夜間出汗</span></td>
                                                                    <td><input name="symptoms" style="zoom: 1.5" value="體重減輕" type="checkbox"><span>體重減輕</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <td><input name="symptoms" style="zoom: 1.5" value="口腔或喉嚨痛" type="checkbox"><span>口腔或喉嚨痛</span></td>
                                                                    <td><input name="symptoms" style="zoom: 1.5" value="淋巴腺腫" type="checkbox"><span>淋巴腺腫</span><br/></td>
                                                                    <td><input name="symptoms" style="zoom: 1.5" value="其他" type="checkbox"><span>其他</span><input style="width:22em;" name="symptoms_other" id="symptoms_other" type="text"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">精神科用藥</td>
                                                        <td colspan="3">
                                                            <table class="medication_table" style="text-align:left;width:100%;table-layout:fixed;">
                                                                <tr>
                                                                    <td style="width:6.5em;">
                                                                        <span>服用美沙酮：</span>
                                                                    </td>
                                                                    <td>
                                                                        <input name="methadone" style="zoom: 1.5" value="是" type="radio"><span>是</span>
                                                                        <input name="methadone" style="zoom: 1.5" value="否" type="radio"><span>否</span>
                                                                    </td>
                                                                    <td style="width:5em;">
                                                                        <span>服用時間：</span>
                                                                    </td>
                                                                    <td>
                                                                        <input name="methadone_time" type="text">
                                                                    </td>
                                                                    <td style="width:7em;">
                                                                        <span>目前服用劑量：</span>
                                                                    </td>
                                                                    <td>
                                                                        <input name="methadone_dosage" type="text">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <span>就診醫院：</span>
                                                                    </td>
                                                                    <td colspan="5">
                                                                        <input name="methadone_hospital" type="text">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <span>電話&emsp;&emsp;：</span>
                                                                    </td>
                                                                    <td colspan="5">
                                                                        <input name="methadone_hospital_phone" type="text">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <span>看精神科：</span>
                                                                    </td>
                                                                    <td colspan="5">
                                                                        <input name="psychiatry" style="zoom: 1.5" value="是" type="radio"><span>是</span>
                                                                        <input name="psychiatry" style="zoom: 1.5" value="否" type="radio"><span>否</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <span>診斷&emsp;&emsp;：</span>
                                                                    </td>
                                                                    <td colspan="5">
                                                                        <input name="diagnosis" type="text">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <span>睡眠品質：</span>
                                                                    </td>
                                                                    <td colspan="5">
                                                                        <input name="sleep_quality" style="zoom: 1.5" value="一覺到天亮" type="radio"><span>一覺到天亮</span>
                                                                        <input name="sleep_quality" style="zoom: 1.5" value="半夜會醒來" type="radio"><span>半夜會醒來</span>
                                                                        <input name="sleep_quality" style="zoom: 1.5" value="到天亮無法入睡" type="radio"><span>到天亮無法入睡</span>
                                                                        <input name="sleep_quality" style="zoom: 1.5" value="睡睡醒醒" type="radio"><span>睡睡醒醒</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <span>情緒狀況：</span>
                                                                    </td>
                                                                    <td colspan="5">
                                                                        <input name="emotional_state" style="zoom: 1.5" value="不安" type="checkbox"><span>不安、</span>
                                                                        <input name="emotional_state" style="zoom: 1.5" value="沒有安全感" type="checkbox"><span>沒有安全感、</span>
                                                                        <input name="emotional_state" style="zoom: 1.5" value="哭泣" type="checkbox"><span>哭泣、</span>
                                                                        <input name="emotional_state" style="zoom: 1.5" value="低落" type="checkbox"><span>低落、</span>
                                                                        <input name="emotional_state" style="zoom: 1.5" value="煩躁" type="checkbox"><span>煩躁、</span>
                                                                        <input name="emotional_state" style="zoom: 1.5" value="重複說話" type="checkbox"><span>重複說話、</span>
                                                                        <input name="emotional_state" style="zoom: 1.5" value="生氣" type="checkbox"><span>生氣、</span>
                                                                        <input name="emotional_state" style="zoom: 1.5" value="不耐煩" type="checkbox"><span>不耐煩、</span>
                                                                        <input name="emotional_state" style="zoom: 1.5" value="想打人" type="checkbox"><span>想打人、</span>
                                                                        <input name="emotional_state" style="zoom: 1.5" value="坐不住" type="checkbox"><span>坐不住、</span>
                                                                        <input name="emotional_state" style="zoom: 1.5" value="難過" type="checkbox"><span>難過、</span>
                                                                        <input name="emotional_state" style="zoom: 1.5" value="焦慮" type="checkbox"><span>焦慮。</span>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="background-color:rgb(255 201 54);text-align:left;">過去病史</td>
                                                        <td colspan="3">
                                                            <table class="medical_history_table" style="text-align:left;width:100%;table-layout:fixed;">
                                                                <tr>
                                                                    <td style="width:6.5em;">
                                                                        1.就診醫院
                                                                    </td>
                                                                    <td colspan="5">
                                                                        <input name="visiting_hospital" type="text">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        2.電話
                                                                    </td>
                                                                    <td colspan="5">
                                                                        <input name="visiting_hospital_phone" type="text">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        3.病史/藥物
                                                                    </td>
                                                                    <td colspan="5">
                                                                        <textarea style="width:100%;resize: none;font-size: 20px;min-height:6em;" name="medical_history" placeholder="病史/藥物"></textarea>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="2"  style="width:6em;">
                                                                        4.有沒有得過性病？
                                                                    </td>
                                                                    <td colspan="4">
                                                                        <input name="STD" style="zoom: 1.5" value="1.有" type="radio"><span>1.有</span>
                                                                        <input name="STD" style="zoom: 1.5" value="2.沒有" type="radio"><span>2.沒有</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="2">
                                                                        5.得過哪些性病：(可複選)
                                                                    </td>
                                                                    <td colspan="4">
                                                                        <input name="STD_type" style="zoom: 1.5" value="1.尿道炎" type="checkbox"><span>1.尿道炎</span>
                                                                        <input name="STD_type" style="zoom: 1.5" value="2.淋病" type="checkbox"><span>2.淋病</span>
                                                                        <input name="STD_type" style="zoom: 1.5" value="3.菜花" type="checkbox"><span>3.菜花</span>
                                                                        <input name="STD_type" style="zoom: 1.5" value="4.梅毒" type="checkbox"><span>4.梅毒</span>
                                                                        <input name="STD_type" style="zoom: 1.5" value="5.有得過，但不知道哪一種" type="checkbox"><span>5.有得過，但不知道哪一種</span>
                                                                        <input name="STD_type" style="zoom: 1.5" value="6.其他" type="checkbox"><span>6.其他</span>
                                                                        <input style="width:22em;" name="STD_type_other" id="STD_type_other" type="text">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td colspan="2">
                                                                        6.若有請問你大都如何治療性病(可複選)
                                                                    </td>
                                                                    <td colspan="4">
                                                                        <input name="STD_treatment" style="zoom: 1.5" value="1.到藥局買藥吃" type="checkbox"><span>1.到藥局買藥吃</span>
                                                                        <input name="STD_treatment" style="zoom: 1.5" value="2.到私人醫院(診所)治療" type="checkbox"><span>2.到私人醫院(診所)治療</span>
                                                                        <input name="STD_treatment" style="zoom: 1.5" value="3.到公立醫院門診治療" type="checkbox"><span>3.到公立醫院門診治療</span>
                                                                        <input name="STD_treatment" style="zoom: 1.5" value="4.沒有治療" type="checkbox"><span>4.沒有治療</span>
                                                                        <input name="STD_treatment" style="zoom: 1.5" value="5.其他" type="checkbox"><span>5.其他</span>
                                                                        <input style="width:22em;" name="STD_treatment_other" id="STD_treatment_other" type="text">
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <button style="font-size:20px" class="btn btn-default" onclick="previewAndPrintSection('form_1')">匯出基本資料為PDF</button>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="profile-tab1">
                                    <div class="panel-body">
                                    </div>
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <form id="form_2" class="form">
                                            <div class="col-sm-12">
                                            <div style="margin-top:15px" class="text-center">
                                                <h4>菸癮狀況</h4>
                                            </div>
                                            </div>
                                                <table style="width:100%;" class="table table-bordered">
                                                    <tr>
                                                        <td colspan="2">
                                                            <table class="smoke_status_table" style="text-align:left;width:100%;table-layout:fixed;">
                                                                <tr>
                                                                    <td style="width:10em;">
                                                                        抽菸多久：
                                                                    </td>
                                                                    <td colspan="5">
                                                                        <input name="smoke_age" type="text">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        一天抽幾包/根數：
                                                                    </td>
                                                                    <td colspan="5">
                                                                        <input name="smoke_frequency" type="text">
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        是否願意減量：
                                                                    </td>
                                                                    <td colspan="5">
                                                                        <input name="smoke_decrease" style="zoom: 1.5" value="是" type="radio"><span>是</span>
                                                                        <input name="smoke_decrease" style="zoom: 1.5" value="否" type="radio"><span>否</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        想抽菸的原因：
                                                                    </td>
                                                                    <td colspan="5">
                                                                        <textarea style="width:100%;resize: none;font-size: 20px;min-height:6em;" name="smoke_resons" placeholder="想抽菸的原因"></textarea>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <table class="smoke_rec_table table-bordered" style="text-align:left;width:100%;table-layout:fixed;">
                                                                <thead>
                                                                    <tr>
                                                                        <th style="background-color:rgb(255 201 54);text-align:center;">調整日期</th>
                                                                        <th style="background-color:rgb(255 201 54);text-align:center;">包數/根數</th>
                                                                        <th style="background-color:rgb(255 201 54);text-align:center;">備註</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="smoke_rec_1">

                                                                </tbody>
                                                            </table>
                                                        </td>
                                                        <td>
                                                            <table class="smoke_rec_table table-bordered" style="text-align:left;width:100%;table-layout:fixed;">
                                                                <thead>
                                                                    <tr>
                                                                        <th style="background-color:rgb(255 201 54);text-align:center;">調整日期</th>
                                                                        <th style="background-color:rgb(255 201 54);text-align:center;">包數/根數</th>
                                                                        <th style="background-color:rgb(255 201 54);text-align:center;">備註</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody id="smoke_rec_2">

                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <button style="font-size:20px" class="btn btn-default" onclick="previewAndPrintSection('form_2')">匯出菸癮狀況為PDF</button>
                                    </div>
                                </div>

                                <div class="tab-pane fade" id="three" role="tabpanel" aria-labelledby="profile-tab2">
                                    <div class="panel-body">
                                    </div>
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <form id="form_3" class="form_health">
                                                <div class="col-sm-12">
                                                    <div style="margin-top:15px" class="text-center">
                                                        <h4>就診紀錄表</h4>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <button style="font-size:20px" class="btn btn-default" onclick="previewAndPrintSection('form_3')">匯出就診紀錄表為PDF</button>
                                    </div>
                                </div>

                                <div class="panel-footer" style="text-align:center;">
                                    <button style="font-size:20px" id="add_health_detail" class="btn btn-default" data-toggle="modal"data-target="#case_storage_model2">
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
                                    <button style="font-size:20px" class="btn btn-default" onclick="previewAndPrintSection('form_1')">匯出基本資料為PDF</button>
                                    <button style="font-size:20px" class="btn btn-default" onclick="previewAndPrintSection('form_2')">匯出菸癮狀況為PDF</button>
                                    <button style="font-size:20px" class="btn btn-default" onclick="previewAndPrintSection('form_3')">匯出就診紀錄表為PDF</button>
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

    </div>
</body>
</html>