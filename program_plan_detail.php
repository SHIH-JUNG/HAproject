<?php session_start(); ?>
<?php include("database/check_authority.php"); ?> <?php include("no_cache.php"); ?>
<?php $href_name =  'page_r1'; ?>
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
    <!-- Bootstrap FileDialog -->
    <link rel="stylesheet" href="css/bootstrap-file-dialog-dist/bootstrap.fd.css">
    <!--  日期民國  -->
    <link data-require="jqueryui@*" rel="stylesheet" href="css/jquery-ui.css" />
    <link href="css/dtsel.css" rel="stylesheet" />

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="description" content="快樂聯盟資管系統">
    <meta name="author" content="HANG">
    <meta HTTP-EQUIV="pragma" CONTENT="no-cache">
    <meta HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate">
    <meta HTTP-EQUIV="expires" CONTENT="0">
    <title>個案管理系統</title>
</head>
<style>
        /* table {
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
        } */
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


    .panel-body.scr_container {
        padding: 0;
        padding-top: 15px;
    }

    .form-control
    {
        border: 1px solid #000;
    }
</style>

<body>
<div id="form-container">
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
        <?php include("auth_menu.php"); ?>
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
                        <li><span><a href="program_plan.php">方案管理</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="program_plan.php">方案計畫</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span><a href="program_plan.php">方案計畫一覽表</a></span></li>
                        <svg width="0.8em" height="0.8em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                        <li><span>方案計畫詳細資料</span></li>
                    </ol>
                    <!--/麵包屑-->
                </div>
                <!-- /Title -->
                <!-- Footer -->
                <footer class="footer container-fluid pl-30 pr-30">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <p>Copyright &copy; 台灣世界快樂聯盟</p>
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
                                            <div class="col-sm-12">
                                                <!-- <ul style="font-size:17px" class="nav nav-tabs" id="myTab" role="tablist">
                                                    <li class="nav-item active" role="presentation">
                                                        <a class="nav-link" id="home-tab" data-toggle="pill" href="#one" role="tab" aria-selected="true">
                                                            <b>方案活動詳細資料</b>
                                                        </a>
                                                    </li>
                                                </ul> -->
                                                <div class="tab-content" id="myTabContent">
                                                    <div class="tab-pane fade in active" id="one" role="tabpanel" aria-labelledby="home-tab">
                                                        <div class="accordion" id="accordionExample">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading" id="headingTwo">
                                                                    <h2 class="mb-0">
                                                                        <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                            <span style="color:black;font-size:17px">方案計畫詳細資料</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseTwo" class="collapse in" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="all_data" style="width:55%;display:table !important;" class="table table-bordered">
                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">日期</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="date" class="program_question" name="ch_datepicker" type="text"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">計畫名稱</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="plan_name" class="program_question" type="text"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">計畫來源</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="plan_from" class="program_question" type="text"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">經費來源</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <select id="fund" class="program_question">
                                                                                        <option value="衛生福利部心健司">衛生福利部心健司</option>
                                                                                        <option value="屏東縣政府">屏東縣政府</option>
                                                                                        <option value="法務部">法務部</option>
                                                                                        <option value="中華社會福利聯合勸募協會">中華社會福利聯合勸募協會</option>
                                                                                        <option value="衛生福利部疾病管制署">衛生福利部疾病管制署</option>
                                                                                        <option value="其他">其他</option>
                                                                                    </select>
                                                                                    <input id="funding" class="program_question" type="text">
                                                                                </td>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">方案計畫檔案</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <div class="col-sm-8">
                                                                                        <div class="text-left">
                                                                                            <!-- <input name="proposal_file" type="file" class="program_question form-control"> -->
                                                                                            <br>
                                                                                            <div id="proposal_file"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">期中報告檔案</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <div class="col-sm-8">
                                                                                        <div class="text-left">
                                                                                            <input name="interim_file" type="file" class="program_question form-control">
                                                                                            <br>
                                                                                            <div id="interim_file"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">成果報告檔案</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <div class="col-sm-8">
                                                                                        <div class="text-left">
                                                                                            <!-- <input name="achieve_file" type="file" class="program_question form-control"> -->
                                                                                            <br>
                                                                                            <div id="achieve_file"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">核銷及備註資料</td>
                                                                                <td style="border-bottom: solid 1px;">
                                                                                    <div class="col-sm-8">
                                                                                        <div class="text-left">
                                                                                            <!-- <input name="other_file" type="file" class="program_question form-control"> -->
                                                                                            <br>
                                                                                            <div id="other_file"></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                    <td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white">備註</td>
                                                                                    <td>
                                                                                        <textarea style="height:10em;width:700px;resize: none;font-size: 20px;" class="program_question" id="remark" placeholder="請輸入備註"></textarea>
                                                                                    </td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">創建日期</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="create_date" name="ch_datepicker" type="text" disabled="disabled"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">創建者</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="create_name" type="text" disabled="disabled"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">更新日期</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="update_date" name="ch_datepicker" type="text" disabled="disabled"></td>
                                                                            </tr>

                                                                            <tr style="text-align:left">
                                                                                <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">更新者</td>
                                                                                <td style="border-bottom: solid 1px;"><input id="update_name" type="text" disabled="disabled"></td>
                                                                            </tr>
                                                                        </table>
                                                                            <tr>
                                                                                <td colspan="2">
                                                                                    <div id="edit_div">
                                                                                        <button style="font-size:20px" id="program_edit" class="btn btn-default" onclick="program_edit();">編輯</button>
                                                                                    </div>
                                                                                    <div id="save_div" hidden>
                                                                                        <button style="font-size:20px" id="program_update" class="btn btn-default" onclick="program_update();">修改</button>
                                                                                        <button style="font-size:20px" id="program_cancel" class="btn btn-default" onclick="program_cancel();">取消</button>
                                                                                    </div>
                                                                                    <br>
                                                                                    <div class="text-center">
                                                                                        <button style="font-size:20px" class="btn btn-default" onclick="previewAndPrintSection('all_data')">匯出為PDF</button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>

                                                                        <div class="col-sm-12" style="padding-left:0;padding-right:0;margin-top:3em;">
                                                                            <div class="text-center col-sm-4" style="padding-left:0;">
                                                                            </div>
                                                                            <!-- <div class="text-center col-sm-4">
                                                                                <button style="font-size:20px;" id="preview_word2" class="btn btn-default">預覽匯出</button>
                                                                            </div> -->
                                                                            <!-- <div class="text-right col-sm-4" style="padding-right:0;">
                                                                                <button type="button" id="trans_to_opencase" class="btn btn-default trans_btn" style="font-size:20px" data-toggle="modal" data-target="#myModal">
                                                                                    轉案(新增至開案個案)
                                                                                </button>
                                                                            </div> -->
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <!-- <div class="tab-pane fade" id="two" role="tabpanel" aria-labelledby="profile-tab">
                                                        <div class="accordion" id="accordionExample">
                                                            <div class="panel panel-default">
                                                                <div class="panel-heading" id="headingTwo">
                                                                    <h2 class="mb-0">
                                                                        <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-parent="#myTabContent" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                            <span style="color:black;font-size:17px">志工時數異動紀錄</span>
                                                                        </button>
                                                                    </h2>
                                                                </div>
                                                                <div id="collapseTwo" class="collapse in" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                    <div class="panel-body scr_container">
                                                                        <table id="record_all_data" style="width:95%;display:table !important;" class="table table-bordered">
                                                                            <thead>
                                                                                <tr style="background-color:rgb(255 201 54);">
                                                                                    <th>異動時數</th>
                                                                                    <th>備註</th>
                                                                                    <th>異動人員</th>
                                                                                    <th>異動日期</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody id="call_record_view"></tbody>
                                                                        </table>

                                                                        <div class="col-sm-12" style="padding-left:0;padding-right:0;margin-top:3em;">
                                                                            <div class="text-center col-sm-4" style="padding-left:0;">
                                                                            </div>
                                                                            <div class="text-center col-sm-4">
                                                                                <button style="font-size:20px;" id="preview_word3" class="btn btn-default">預覽匯出</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
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
            </div>
            <!--/網頁內容-->

        </div>
    </div>
</div>

    <!--\ Modal -->
    <!-- <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel" class="add_hours_board">志工時數添加</h4>
                </div>
                <div class="modal-body">
                    <table id="add_hours_board" style="width:auto;margin:0 auto;" class="table table-bordered">
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>新增時數</td>
                            <td style="border-bottom: solid 1px;">
                                <input id="add_hours" type="number">
                            </td>
                        </tr>
                        <tr style="text-align:left">
                            <td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">備註</td>
                            <td style="border-bottom: solid 1px;">
                                <textarea style="width:100%;resize: none;font-size: 20px;min-height:10em;" id="add_hours_remark"></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" onclick="add_hours();">新增時數</button>
                </div>
            </div>
        </div>
    </div> -->
    <!-- Modal /-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    <script>

        function fillFormValues() {
            // 執行JavaScript代碼填充表單數據
            //個案評估表自動填入資料
            // $("#name").val(name);
            // $("#pid").val(decodeURIComponent(pid));
            // $("input[name='sex'][value='"+gender+"']").attr('checked',true);
            // $("#open_date").val(decodeURIComponent(date));
            // $("#birth").val(birth);
            // $("#age").val(getAge(birth.split('-'))[0]);
            // $("#assign_name").val(assign_name);
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
    <!-- Bootstrap FileDialog -->
    <script src="javascript/bootstrap-file-dialog-dist/bootstrap.fd.js"></script>
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
    <!-- 日期民國-->
    <script src="javascript/jquery-ui.min.js"></script>
    <script src="javascript/datepickerTw.js"></script>
    <!-- ================== detail ================== -->
    <script type="text/javascript" src="js/program_plan_detail.js<?php echo "?".date("Y-m-d h:i:sa")?>"></script>

</body>

</html>
<?php
    if(isset($href_name))
    {
        if(!in_array($href_name,$authority_pages))
        {
            echo '<script> swal({
                    title:"您無權限查看當前頁面!",
                    type:"error"
                }).then(function(){
                    window.history.go (-1);
                });
                </script>';
        }
    }

?>
<?php include("database/timeout_logout.php"); ?>