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
    .resource_table thead tr th {
        background-color: rgb(255 201 54);
        text-align: center;
    }
    .resource_table tbody tr td input
    {
        width:100%;
    }

    .form_resource tbody tr td
    {
        padding:0px;
    }

    .resource_table input[type="text"]
    {
         border: none;
    }

    .resourcetab_th tr th:nth-child(1)
    {
        width:16em;
    }

    .resourcetab_th tr th:nth-child(6)
    {
        width:7em;
    }

    .resourcetab_th tr th:nth-child(3)
    {
        width:6em;
    }

    .resourcetab_th tr th:nth-child(5)
    {
        width:12em;
    }

    .resourcetab_tb tr td input[type="date"]
    {
        border:none;
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
                                <h4 id="form_type">社會資源應用表格</h4>
                            </div>
                            <br>
                            <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item active" role="presentation">
                                    <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                        <b>表格內容</b>
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="col-sm-12">
                                        <div style="margin-top:15px" class="text-center">
                                            <h4>表格內容</h4>
                                        </div>
                                    </div>
                                    <div class="panel-body">
                                    </div>
                                    <div class="table-wrap">
                                        <div class="table-responsive">
                                            <table style="width:100%;" class="table table-bordered">
                                                <tr>
                                                    <td style="background-color:rgb(255 201 54);text-align:left;color:#d86d6d;">案號：</td>
                                                    <td>
                                                        <input style="width:35%;" id="tsn_case_id" type="text" disabled="disabled">
                                                    </td>

                                                    <td style="background-color:rgb(255 201 54);text-align:left;color:#d86d6d;">個案姓名：</td>
                                                    <td>
                                                        <input style="width:30%;" id="case_name" type="text" disabled="disabled">
                                                    </td>
                                                </tr>
                                            </table>
                                            <form id="form_1" class="form_resource">

                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="panel-footer" style="text-align:center;">
                                    <button style="font-size:20px" id="add_resource_detail" class="btn btn-default" data-toggle="modal"data-target="#case_storage_model">
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
                                <button style="font-size:20px" class="btn btn-default" onclick="generatePDF()">匯出社會資源應用表格為PDF</button>
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
    function generatePDF() {
            const element = document.getElementById('one');

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