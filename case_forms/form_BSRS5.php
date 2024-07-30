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
                                    <div class="text-right">
                                        <button style="font-size:20px" class="btn btn-default" onclick="previewAndPrintSection('form_1')">匯出基本資料為PDF</button>
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
                                                                本列表所列舉的問題是為協助您瞭解您的身心適應狀況，<br>請您仔細回想在<u>最近一星期中(包括今天)</u>，這些問題<u>使您感到困擾或苦惱的程度</u>，<br>然後<u>圈選</u>一個您認為最能代表您感覺的答案。<br>本資料僅提供醫療人員治療參考之用，絕對守密，請安心填寫。
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
                                                            <textarea style="width:100%;resize: none;font-size: 20px;min-height:20em;" name="statement" id="statement"></textarea>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <button style="font-size:20px" class="btn btn-default" onclick="previewAndPrintSection('form_2')">匯出量表內容為PDF</button>
                                    </div>
                                </div>
                                <div class="panel-footer" style="text-align:center;">
                                    <button style="font-size:20px" id="add_BSRS5_detail" class="btn btn-default" data-toggle="modal"data-target="#case_storage_model2">
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