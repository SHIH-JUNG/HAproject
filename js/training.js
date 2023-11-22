const notyf = new Notyf();

//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(
        /[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
            vars[key] = value;
        }
    );
    return vars;
}
//endregion


// 獲取網址參數
let params = new URL(document.location).searchParams;
let url_training_id = params.get("training_id");
let url_acc_id = params.get("acc_id");
// console.log(url_training_id, url_acc_id)

//若抓得到url_training_id、url_acc_id 則送出 查詢格式1，反之 查詢格式2
if (url_training_id != null && url_acc_id != null) {
    // 查詢格式1
    window.tr_datas = {
        url_training_id: url_training_id,
        url_acc_id: url_acc_id,
    };
} else {
    // 查詢格式2
    window.tr_datas = {
        url_training_id: 1,
        url_acc_id: 25,
    };
}


//datepicker創建 region
datepicker_create = function(selector_id) {
    $("#" + selector_id).datepicker({
        changeYear: true,
        changeMonth: true,
        currentText: "今天",
        dateFormat: "R年mm月dd日",
        showButtonPanel: true,
        // minDate: new Date(
        //   new Date().getFullYear() - 2,
        //   new Date().getMonth() - 3,
        //   1
        // ),
        // maxDate: new Date(new Date().getFullYear() + 3, 11, 31),
        yearRange: "-15:+5",
        onClose: function(dateText) {
            // console.log($('#'+selector_id).val());
        },
        beforeShow: function(input, inst) {
            var $this = $(this);
            var cal = inst.dpDiv;
            var outerh = $this.outerHeight();
            var left_off = 10;
            if ($this.offset().top > 1200) {
                outerh = outerh * 4;
            } else {
                outerh = outerh * 3;
            }

            if ($this.offset().left > 1500) {
                left_off = 700;
            } else {
                left_off = 10;
            }
            // console.log($this.offset().top)
            // console.log(outerh)

            // console.log($this.offset().left)


            var top = $this.offset().top - outerh;
            var left = $this.offset().left - left_off;
            setTimeout(function() {
                cal.css({
                    top: top,
                    left: left,
                });
            }, 10);
        },
    });
    // $("#leave_date").datepicker("setDate", "today");
};
//endregion

$(document).ready(function() {

    //將name名稱為ch_datepicker創建datepicker初始化 region
    $("[name='ch_datepicker']").each(function() {

        var this_id = $(this).attr("id");
        datepicker_create(this_id);
    });
    //endregion

    load_face_time_picker('u_tr_start_time_h');
    load_face_time_picker('u_tr_end_time_h');
});

window.cumulation_hours = 0;

//載入在職訓練紀錄 region
$.ajax({
    url: "database/find_data_training.php",
    type: "POST",
    // 根據網址後面的參數收到的查詢格式
    data: tr_datas,
    dataType: "JSON",
    async: false, //啟用同步請求
    success: function(data) {
        var cssString = "";
        // console.log(data);

        cumulation_hours = 0;


        $.each(data, function(index, value) {
            var isUpload = '未上傳';
            // var cert_isUpload = '未上傳';

            if (value.Upload_name != "") {
                isUpload = '已上傳';
            }


            cumulation_hours += parseFloat(value.Hours);

            window.training_user_n = value.Name;

            cssString +=
                '<tr training_id="' + value.Id + '" acc_id="' + value.Account_id + '">' +
                // '<td style="text-align:center">'+ value.Name + "</td>" +
                '<td style="text-align:center">' + value.Training_date.split("年")[0] + "</td>" +
                '<td style="text-align:center">' + value.Training_date + "</td>" +
                '<td style="text-align:center">' + value.Training_start_time.split(":")[0] + ":" + value.Training_start_time.split(":")[1] +
                "至" + value.Training_end_time.split(":")[0] + ":" + value.Training_end_time.split(":")[1] + "</td>" +
                '<td style="text-align:center">' + value.Training_name + "</td>" +
                '<td style="text-align:center">' + parseFloat(value.Hours).toFixed(1) + "</td>" +
                '<td style="text-align:center">' + value.Place + "</td>" +
                '<td style="text-align:center">' + isUpload + "</td>" +
                '<td style="text-align:center">' +
                '<a class="update_btn" data-toggle="modal" training_id="' + value.Id + '" acc_id="' + value.Account_id + '" style="text-decoration: underline;color:black;">查看/修改</a>' +
                '</td>'
            "</tr>";

            $("#training_year").append('<option value="' + value.Training_date.split("年")[0] + '">' + value.Training_date.split("年")[0] + '</option>');

            $("#training_id").append('<option value="' + value.Id + '">' + value.Id + '</option>');

            $("#name").append(
                '<option value="' + value.Name + '">' + value.Name + "</option>"
            );

            $("#place").append(
                '<option value="' + value.Place + '">' + value.Place + "</option>"
            );

            $("#training_name").append(
                '<option value="' + value.Training_name + '">' + value.Training_name + "</option>"
            );

        });


        //找出所有查詢表格下拉式選單，將內容排序、加上"所有查詢"、去除重複值
        var filter_select = $("select.filter");

        $.each(filter_select, function(i, v) {
            var this_id = $(this).attr("id");

            if (this_id != undefined) {
                //option小到大排序
                $("#" + this_id + " option")
                    .sort(function(a, b) {
                        var aText = $(a).text().toUpperCase();
                        var bText = $(b).text().toUpperCase();
                        // if(aText>bText) return 1;
                        // if(aText<bText) return -1;
                        // return 0;

                        return aText - bText;
                    })
                    .appendTo("#" + this_id + "");

                //最前面新增"所有"選像
                $("#" + this_id + "").prepend(
                    "<option value='' selected='selected'>所有</option>"
                );

                $("#" + this_id + "")
                    .children()
                    .each(function() {
                        //text = $(this).text();
                        //if (
                        //  $("select#" + this_id + " option:contains(" + text + ")").length >
                        //  1
                        //) {
                        //  $(
                        //    "select#" + this_id + " option:contains(" + text + "):gt(0)"
                        //  ).remove();
                        //}
                        $(this).siblings('[value="' + this.value + '"]').remove();
                        //    console.log(text)
                    });
            }
        });

        //印出表格
        $("#call_view").html(cssString);

        // 顯示員工姓名、總在職訓練時數
        $("#show_user_info_tr").html("員工姓名：" + training_user_n + "，總在職訓練時數：" + cumulation_hours.toFixed(1) + "小時");

        //綁定onclick事件
        $(".update_btn").attr("onclick", "show_modal(this);");

        //點擊table tr 進入詳細頁面
        // $(".table-hover tbody").on("click", "tr", function () {
        //   window.location.href = 'training_detail.php?training_id='+$(this).attr("training_id")+'&acc_id='+$(this).attr("acc_id")+'';
        // });
    },

    error: function(e) {
        // console.log(e);
    },
});
//endregion



// 給#update_btn綁定onclick事件 region
$(document).on("click", ".update_btn", function() {
    var $parent = $(this).parent();
    $("#update_rec_modal").on("shown.bs.modal", function() {
        $parent.children().trigger("focus");
    });
});
//endregion

// 顯示在職訓練記錄詳細資料modal region
show_modal = function(this_btn) {

        var get_training_id = $(this_btn).attr("training_id");
        var get_acc_id = $(this_btn).attr("acc_id");

        load_update_training_data(get_training_id, get_acc_id);

        $("#update_rec_modal").modal('show');

        $("#modal_btn").attr("sql_id", get_training_id);
        $("#modal_btn").attr("acc_id", get_acc_id);
    }
    //endregion 

// 檢查檔案類型是否為圖片 region
function isAssetTypeAnImage(ext) {
    return [
        'png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'
    ].
    indexOf(ext.toLowerCase()) !== -1;
}

window.selectedFiles1 = [];
window.selectedFiles1_str = [];

function clearSelectedFiles1() {
    window.selectedFiles1 = [];
    window.selectedFiles1_str = [];
}

selectFiles_insert = function(select_file_type_n) {
    switch (select_file_type_n) {
        case 0:
            // console.log("a1")
            if (selectedFiles1.length == 0) {
                selected_files(select_file_type_n);
            } else {
                swal({
                    title: "已經有選擇檔案，是否清空當前檔案清單，重新選取？",
                    text: "目前檔案清單：" + selectedFiles1_str,
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "確認",
                    cancelButtonText: "取消",
                    showConfirmButton: true,
                    showCancelButton: true
                }).then(function(result) {
                    if (result) {
                        selected_files(select_file_type_n);
                    }
                }, function(dismiss) {
                    if (dismiss == 'cancel') {
                        swal({
                            title: '已取消',
                            type: 'success',
                        })
                    }
                }).catch(swal.noop)
            }
            break;
    }
}

selected_files = function(select_file_type_n) {
    switch (select_file_type_n) {
        case 0:
            selectedFiles1 = [];
            selectedFiles1_str = [];

            var html = '<span style="color:red;">上傳檔案清單預覽：</span><br/>';

            $("#selected-files1").html(html);

            $.FileDialog({
                "accept": "*",
                "drag_message": "將檔案拖曳至此處新增",
                "title": "載入檔案",
            }).on("files.bs.filedialog", function(event) {
                for (var a = 0; a < event.files.length; a++) {
                    selectedFiles1.push(event.files[a]);
                    selectedFiles1_str.push(event.files[a].name);

                    html += '<span style="color:red;" value="' + event.files[a].name + '">' + event.files[a].name + '</span><br/>';

                    //若檔案類型為圖片則創建img元素
                    var index = event.files[a].name.lastIndexOf(".");

                    if (isAssetTypeAnImage(event.files[a].name.substr(index + 1))) {
                        html += '<img width="300" height="300" id="trainingFile1_pre_img' + a + '" src=""/>';
                    }

                    if (event.files.length > 1) {
                        html += '<hr/>';
                    }
                }

                $("#selected-files1").html(html);

                $.each(event.files, function(key, val) {
                    var m_pre_img_id = $('#trainingFile1_pre_img' + key);
                    var index = event.files[key].name.lastIndexOf(".");

                    if (isAssetTypeAnImage(event.files[key].name.substr(index + 1))) {
                        const fr = new FileReader();
                        fr.onload = function(event) {
                            // console.log(event.target.result)
                            // console.log(m_pre_img_id)
                            m_pre_img_id.attr('src', event.target.result); //读取的结果放入圖片
                        };
                        fr.readAsDataURL(event.files[key]);
                    }
                });
                // $("#selected-files").html(html);
            });
            break;
    }
}

// 載入面訪記錄內容 region
load_update_training_data = function(training_id, acc_id) {
        $.ajax({
            url: "database/find_training_data_detail.php",
            data: {
                Training_id: training_id,
                Acc_id: acc_id,
            },
            type: "POST",
            dataType: "JSON",
            async: false,
            success: function(data) {
                // console.log(data)

                $.each(data, function(index, value) {

                    $('#u_training_date').val(value.Training_date);

                    var tr_start_time_h = value.Training_start_time.split(':')[0];
                    var tr_start_time_m = value.Training_start_time.split(':')[1];
                    var tr_end_time_h = value.Training_end_time.split(':')[0];
                    var tr_end_time_m = value.Training_end_time.split(':')[1];

                    $('#u_tr_start_time_h').val(tr_start_time_h);
                    $('#u_tr_start_time_m').val(tr_start_time_m);
                    $('#u_tr_end_time_h').val(tr_end_time_h);
                    $('#u_tr_end_time_m').val(tr_end_time_m);

                    $('#u_training_name').val(value.Training_name);
                    $('#u_hours').val(value.Hours);
                    $('#u_place').val(value.Place);
                    $('#u_remark').val(value.Remark);

                    //原單一檔案顯示
                    // var tr_file_path = value.Upload_path.replace("../", "./").replace("\[", "").replace("\]", "").replace(/\"/g, "");
                    // var tr_file_name = value.Upload_path.replace("\[", "").replace("\]", "").replace(/\"/g, "").split("/");

                    // if (value.Upload_path == "") {
                    //     var tr_file_val = "";

                    //     var tr_file_htmlstr =
                    //         '目前無檔案上傳';
                    // } else {
                    //     var tr_file_val = tr_file_name[tr_file_name.length - 1];

                    //     var tr_file_htmlstr =
                    //         '<a id="u_tr_file_a" href="' + tr_file_path + '" style="text-decoration:none;color:blue;" target="_blank">' +
                    //         tr_file_val +
                    //         '</a>';
                    // }

                    var trainingFilePath_arr = value.Upload_path.replace("../", "./").replace("\[", "").replace("\]", "").replace(/\"/g, "").split(",");
                    var trainingFileName_arr = value.Upload_name.replace("\[", "").replace("\]", "").replace(/\"/g, "").split(",");
                    var tr_file_htmlstr = "";
                    if (value.Upload_path != "") {
                        $.each(trainingFilePath_arr, function(i, val) {
                            var index = trainingFileName_arr[i].lastIndexOf(".");
                            if (isAssetTypeAnImage(trainingFileName_arr[i].substr(index + 1))) {
                                tr_file_htmlstr += '<input class="sr_question" style="zoom: 1.5" class="form-check-input" type="radio" name="trainingFile1_check" file_type_name="agenda_file_path" forms_sql_id="' + value.Id + '" value="' + i + '">' +
                                    '<span> 檔案' + (i + 1) + '：</span><a id="val_arr' + i + '" href="' + trainingFilePath_arr[i] + '" style="text-decoration:none;color:blue;" target="_blank">' +
                                    trainingFileName_arr[i] +
                                    '</a><br/>';
                            } else {
                                tr_file_htmlstr += '<input class="sr_question" style="zoom: 1.5" class="form-check-input" type="radio" name="trainingFile1_check" file_type_name="agenda_file_path" forms_sql_id="' + value.Id + '" value="' + i + '">' +
                                    '<span> 檔案' + (i + 1) + '：</span><a id="val_arr' + i + '" href="' + trainingFilePath_arr[i] + '" style="text-decoration:none;color:blue;" target="_blank">' +
                                    trainingFileName_arr[i] +
                                    '</a><br/><br/>';
                            }
                        });
                    } else {
                        tr_file_htmlstr = '目前無檔案上傳';
                    }
                    tr_file_htmlstr += '<br/>' +
                        '<button class="sr_question" style="color:red;margin-right:3em;margin-bottom:.5em;" type="button" onclick="selectFiles_delete(0);">刪除</button>' +
                        '<div>※點選上面要刪除的檔案</div>' +
                        '<br/><hr style="border:3px dashed blue; height:1px">' +
                        '<button class="sr_question" style="color:blue;" type="button" onclick="selectFiles_insert(0);">新增檔案+</button><br/><div id="selected-files1"><span style="color:red;">上傳檔案清單預覽：</span><br/></div>';

                    $("#u_training_file").html(tr_file_htmlstr);
                });

                //監聽 當日期欄位有變化時，重新計算時數 region
                $("[picker='u_tr_datetime']").on('change', function() {
                    var start_time = $('#u_tr_start_time_h').val() + ":" + $('#u_tr_start_time_m').val() + ":00";
                    var end_time = $('#u_tr_end_time_h').val() + ":" + $('#u_tr_end_time_m').val() + ":00";
                    var time_diff = hours_diff(start_time, end_time);

                    $("#u_hours").val(time_diff);
                });
                // endregion
            },
            error: function(e) {
                notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
                // console.log(e)
            }
        });
    }
    //endregion

//計算訓練時數 region
hours_diff = function(start, end) {

        var diff_str = "";
        var diff_num = 0;

        start = start.split(":");
        end = end.split(":");

        var startDate = new Date(0, 0, 0, start[0], start[1], 0);
        var endDate = new Date(0, 0, 0, end[0], end[1], 0);
        var diff = endDate.getTime() - startDate.getTime();
        if (endDate.getTime() > startDate.getTime()) {
            var hours = Math.floor(diff / 1000 / 60 / 60);
            diff -= hours * 1000 * 60 * 60;
            var minutes = Math.floor(diff / 1000 / 60);

            // If using time pickers with 24 hours format, add the below line get exact hours
            if (hours < 0) {
                hours = hours + 24;
            }

            diff_str = (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;

            diff_num = parseInt(diff_str.split(":")[0]) + parseFloat((parseInt(diff_str.split(":")[1]) / 60).toFixed(1));
        }



        return diff_num;
    }
    // endregion

// update 電訪/面訪記錄 region
update_rec_data = function(this_btn) {

        swal({
            title: "確認修改在職訓練記錄？",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "確認送出",
            cancelButtonText: "取消",
            showConfirmButton: true,
            showCancelButton: true
        }).then(function(result) {
            if (result) {
                var attr_sql_id = $(this_btn).attr("sql_id");

                var stau = false;

                if (check_updat_training_data() != "") {
                    stau = false;
                } else {
                    stau = true;
                }

                if (!stau) {
                    swal({
                        title: check_updat_training_data(),
                        type: "error",
                    });
                } else {
                    submit_data(attr_sql_id);
                }
            }
        }, function(dismiss) {
            if (dismiss == 'cancel') {
                swal({
                    title: '已取消',
                    type: 'success',
                })
            }
        }).catch(swal.noop)
    }
    //endregion


function submit_data(tr_id) {

    //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
    $("input, textarea").each(function() {
        if ($(this).attr("type") != "file") {
            $(this).val(jQuery.trim($(this).val()));
        }
    });

    var form_data = new FormData();
    // $("input[type='file']").each(function(index, element) {
    //     var training_file = $(this).prop("files");

    //     if (training_file != undefined) {
    //         if (training_file.length != 0) {
    //             for (var i = 0; i < training_file.length; i++) {
    //                 form_data.append("training_file" + index, training_file[i]);
    //                 // console.log(training_file[i])
    //             }
    //         }
    //     }
    // });

    for (var a = 0; a < selectedFiles1.length; a++) {
        form_data.append("Upload_name[]", selectedFiles1[a]);
    }
    for (var a = 0; a < selectedFiles1_str.length; a++) {
        form_data.append("Upload_path[]", selectedFiles1_str[a]);
    }

    form_data.append("Training_id", tr_id);
    form_data.append("Training_date", $("#u_training_date").val());
    form_data.append("Training_start_time", $('#u_tr_start_time_h').val() + ":" + $('#u_tr_start_time_m').val() + ":00");
    form_data.append("Training_end_time", $('#u_tr_end_time_h').val() + ":" + $('#u_tr_end_time_m').val() + ":00");
    form_data.append("Training_name", $("#u_training_name").val());
    form_data.append("Hours", $("#u_hours").val());
    form_data.append("Place", $("#u_place").val());
    form_data.append("Remark", $("#u_remark").val());

    //console.log(form_data)
    // 預覽傳到後端的資料詳細內容
    // for (var pair of form_data.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }


    $.ajax({
        url: "database/update_training_data_detail.php",
        type: "POST",
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        async: true,
        success: function(data) {
            console.log(data);
            if (data == 1) {
                swal({
                    title: "修改成功！",
                    type: "success",
                }).then(function() {
                    location.reload();
                });
            } else {
                swal({
                    title: "修改失敗！請聯絡網站維護人員",
                    type: "error",
                });
            }
        },
        error: function(e) {
            //console.log(e);
            swal({
                title: "修改失敗！請聯絡網站維護人員",
                type: "error",
            });
        },
    });
}

//結案個案表(update)的必填欄位 region
function check_updat_training_data() {
    var training_date = $("#u_training_date").val();
    var training_name = $("#u_training_name").val();
    var hours = $("#u_hours").val();
    var place = $("#u_place").val();

    var errorstr = "";

    if (training_date == null) {
        errorstr += "未填寫在職訓練日期!\r\n";
    }
    if (training_name == null) {
        errorstr += "未填寫在職訓練標題!\r\n";
    }
    if (hours == null) {
        errorstr += "未填寫時數!\r\n";
    }
    if (place == null) {
        errorstr += "未填寫在職訓練地點!\r\n";
    }

    if (errorstr == "") {
        if (training_date.replace(/\s*/g, "") == "") {
            errorstr += "未填寫在職訓練日期!\r\n";
        }
        if (training_name.replace(/\s*/g, "") == "") {
            errorstr += "未填寫在職訓練標題!\r\n";
        }
        if (training_name.replace(/\s*/g, "") == "") {
            errorstr += "未填寫時數!\r\n";
        }
        if (place.replace(/\s*/g, "") == "") {
            errorstr += "未填寫在職訓練地點!\r\n";
        }
    }

    return errorstr;
}
//endregion


// 民國年轉換日期格式yyyy-dd-mm region
function split_date(date) {
    var transed_date = "";

    if (date == "") {
        transed_date = formatDate(new Date());
    } else {
        transed_date = parseInt(date.split("年")[0]) + 1911 + "-" + date.split("年")[1].split("月")[0] + "-" + date.split("年")[1].split("月")[1].split("日")[0];
    }

    return transed_date;
}
//endregion

// 載入時間選項 region
load_face_time_picker = function(element_id) {
        for (let index = 8; index <= 20; index++) {
            $("#" + element_id).append('<option value="' + LeadingZero(index, 2) + '">' + LeadingZero(index, 2) + '</option>');
        }
    }
    //endregion

// 字串補零 region
function LeadingZero(code, dataLength) {
    var str = Array(10).join('0') + code;
    return str.slice(0 - dataLength)
}
//endregion

//table設定region
var $table = $("#tab_all").DataTable({
    ordering: true,
    info: true,
    paging: true,
    lengthChange: false,
    pageLength: 10,
    pagingType: "simple_numbers",
    searching: true,
    dom: "<'col-sm-12'tr>" +
        "<'col-sm-6'<'text-left'i>><'col-sm-6'<'text-right'p>>" +
        "<'col-sm-12'<'text-left'B>>",
    language: {
        sZeroRecords: "没有匹配结果",
        sInfo: "顯示 _START_ 到 _END_ 筆資料，總共有 _TOTAL_ 筆資料",
        sInfoEmpty: "目前共有 0 筆紀錄",
        sInfoFiltered: "(由 _MAX_ 筆資料结果過濾)",
        fnInfoCallback: function(oSettings, iStart, iEnd, iMax, iTotal, sPre) {
            // $("#count_people").text("人次：" + iTotal);
            return sPre;
        },
        paginate: {
            previous: "‹上一頁",
            next: "下一頁›",
        },
        aria: {
            paginate: {
                previous: "Previous",
                next: "Next",
            },
        },
    },
    buttons: [{
        extend: 'excelHtml5',
        title: "快樂聯盟-" + $(".breadcrumb li").last().text() + "",
        text: '匯出Excel'
    }, ]
});

//範圍搜尋region
function parseTime(t) {
    var d = new Date();
    var time = t.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    d.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
    d.setMinutes(parseInt(time[2]) || 0);
    return d;
}

var tr_date_range = (function(settings, data, dataIndex) {
    var min_date = parseInt(Date.parse(split_date($('#tr_min_date').val())), 10);
    var max_date = parseInt(Date.parse(split_date($('#tr_max_date').val())), 10);
    var date = parseInt(Date.parse(split_date(data[1]))) || 0; // use data for the date column
    if ((isNaN(min_date) && isNaN(max_date)) ||
        (isNaN(min_date) && date <= max_date) ||
        (min_date <= date && isNaN(max_date)) ||
        (min_date <= date && date <= max_date)) {
        return true;
    }
    return false;
});

var time_range = function(settings, data, dataIndex) {
    // var min_time = parseInt(Date.parse( $('#min_time').val()), 10 );
    // var max_time = parseInt(Date.parse( $('#max_time').val()), 10 );
    // var time = parseInt(Date.parse( data[2] )) || 0; // use data for the date column
    var min_time = $("#min_time").val();
    var max_time = $("#max_time").val();
    switch (min_time) {
        case "00:00":
            min_time = "12:00";
            break;
        case "12:00":
            min_time = "24:00";
            break;
        default:
            min_time = min_time;
            break;
    }

    switch (max_time) {
        case "00:00":
            max_time = "12:00";
            break;
        case "12:00":
            max_time = "24:00";
            break;
        default:
            max_time = max_time;
            break;
    }

    const [hours_i, minutes_i] = min_time.split(":");
    const [hours_x, minutes_x] = max_time.split(":");
    const [hours_filter, minutes_filter] = data[2].split(":") || 0;
    const totalSeconds_min = +hours_i * 60 * 60 + +minutes_i * 60;
    const totalSeconds_max = +hours_x * 60 * 60 + +minutes_x * 60;
    const totalSeconds_time = +hours_filter * 60 * 60 + +minutes_filter * 60 || 0;

    if (
        (isNaN(totalSeconds_min) && isNaN(totalSeconds_max)) ||
        (isNaN(totalSeconds_min) && totalSeconds_time <= totalSeconds_max) ||
        (totalSeconds_min <= totalSeconds_time && isNaN(totalSeconds_max)) ||
        (totalSeconds_min <= totalSeconds_time &&
            totalSeconds_time <= totalSeconds_max)
    ) {
        return true;
    }
    return false;
};

//endregion

//預設總人數人次region
// $(".count_people").text("人次：" + $table.column(0).data().count());
// $(".count_people2").text("，人數：" + $table.column(0).data().unique().count());
//endregion

//額外設定select
$("select.filter").on("change", function() {
    var rel = $(this).attr("rel");
    if (this.value != "") {
        //格式：.serch(該欄位值, 是否啟用正則表達式匹配, 是否關閉智能查詢, 是否開啟不區分大小寫)
        //須完全匹配option的value值 設定option.value 使用正則符號匹配，ex:"^" + this.value+ "$"
        //前端注意option value內有特殊字元須加入轉義字 ex:H+梅 positive => H\+梅 positive
        $table
            .columns(rel)
            .search("^" + this.value + "$", true, false, true)
            .draw();
    } else {
        $table.columns(rel).search(this.value).draw();
    }
});

$("#tr_min_date, #tr_max_date").on("change", function() {
    $.fn.dataTable.ext.search.push(tr_date_range);
    $table.draw();
});


$table.on("draw", function() {
    $("#count_people2").text(
        "，人數：" + $table.column(0, { page: "current" }).data().unique().count()
    );
});

$("input.filter").on("keyup change", function() {
    //    console.log(this.value);
    var rel = $(this).attr("rel");
    //    console.log(rel);

    $table.columns(rel).search(this.value).draw();
});

//endregion

//匯出EXCEL按鈕CSS設定 region
$(".buttons-excel").each(function() {
    $(this).removeClass("dt-button").addClass("btn btn-default");
});
//endregion