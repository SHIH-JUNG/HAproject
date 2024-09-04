//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}
//endregion
var origin_types_arr =[]

//載入網址參數 region
var name = decodeURIComponent(getUrlVars()["name"]);
var pid =getUrlVars()["pid"];
var date = getUrlVars()["date"];
var grade = getUrlVars()["grade"];
var property = decodeURIComponent(getUrlVars()["property"]);
var type = decodeURIComponent(getUrlVars()["type"]);
var id = getUrlVars()["id"];
var open_id = getUrlVars()["open_id"];
// var addition =decodeURIComponent(getUrlVars()["addition"]);
// var age = decodeURIComponent(getUrlVars()["age"]);
var gender =decodeURIComponent(getUrlVars()["gender"]);

var referral = decodeURIComponent(getUrlVars()["referral"]);
var case_Create_date = getUrlVars()["case_Create_date"];
var unopen_type = decodeURIComponent(getUrlVars()["unopen_type"]);
var birth = getUrlVars()["birth"];

var form_id = getUrlVars()["form_id"];
var form_type = decodeURIComponent(getUrlVars()["form_type"]);

function NewSign(){
    var stepSignNumber = document.getElementsByClassName("signName").length;
    tableTr+='<tr style="text-align:left"><td style="text-align:right;background-color:rgb(135 185 96);border-bottom-color: white;border-right-color: white;" class="NOline"><label>簽章</label></td><td style=""><div class="col-sm-3" style="margin-top: 0.6em;"><select class="signName" id="signName'+stepSignNumber+'" style="width:100%;"><option value="">請選擇</option></select></div><div class="col-sm-9"><button style="margin:.5em;margin-right:3em;color:red;" type="button"  onclick="signature_btn_click('+stepSignNumber+');">簽名</button><button style="margin:.5em;" type="button" onclick="sign_msg_model('+stepSignNumber+');" data-toggle="modal" data-target="#myModal">查看留言</button><a src="" id="signName'+stepSignNumber+'_signature_simg" style="color:blue;" target="_blank" alt="簽名圖片連結"></a></div></td></tr>'
    $("#allSign").html(tableTr);
  }

employeeSign_arr = []
employeeSign_imagePath_arr = []
employeeSign_Date_arr = [];

const notyf = new Notyf();
//20240904
function add_option(){
    $.ajax({
      type: 'POST',
      url: 'database/find_check_user.php',
      dataType: "JSON",
      async: false,
      success: function (data) {
        for (var index in data.Id) {
          $(".signName").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
        }
      },
    });
  }

  $(document).ready(function () {

    add_option();
    $(".signName").on('change', function() {
        // 當簽名下拉列表改變時處理邏輯
        });

        //jsignature插件初始化 region
        jsignature_initialization();
        //endregion

        //隱藏jsignature畫布區域 region
        $("#signature_area").hide();
        //endregion
    sign_id = getUrlVars()["sign_id"];


    $.ajax({
        url: "database/find_interlocution_data_detail.php",
        data: {
          sign_id: id,
          interlocution: form_type,
        },
        type: "POST",
        dataType: "JSON",
        async: false,
        success: function (data) {
            $.each(data, function (index, value) {
                var supervisor1SignPath = value.supervisor1_signature.replace("../signature/", "");
                var supervisor2SignPath = value.supervisor2_signature.replace("../signature/", "");
                var assignSignPath = value.assign_signature.replace("../signature/", "");
                $("#supervisor1_signature_simg").text("點擊顯示簽名圖片");
                $("#supervisor2_signature_simg").text("點擊顯示簽名圖片");
                $("#assign_signature_simg").text("點擊顯示簽名圖片");
                // 督導1簽名顯示邏輯
                if (!supervisor1SignPath || supervisor1SignPath === "") {
                    $("#supervisor1_signature_simg").attr("onclick", "javascript:swal({title: '未簽名',type: 'error',}); return false;");
                } else {
                    $("#supervisor1_signature_simg").attr("href", "./signature/" + supervisor1SignPath);
                }
                // 督導2簽名顯示邏輯
                if (!supervisor2SignPath || supervisor2SignPath === "") {
                    $("#supervisor2_signature_simg").attr("onclick", "javascript:swal({title: '未簽名',type: 'error',}); return false;");
                } else {
                    $("#supervisor2_signature_simg").attr("href", "./signature/" + supervisor2SignPath);
                }

                // 社工簽名顯示邏輯
                if (!assignSignPath || assignSignPath === "") {
                    $("#assign_signature_simg").attr("onclick", "javascript:swal({title: '未簽名',type: 'error',}); return false;");
                } else {
                    $("#assign_signature_simg").attr("href", "./signature/" + assignSignPath);
                }
            });
        },
        error: function () {
            swal({ title: "獲取簽名數據失敗！", type: "error" });
        }
    });
});

//jsignature插件初始化 region
function jsignature_initialization() {
    var $sigdiv = $("#signature_div");
    $sigdiv.jSignature({ UndoButton: true });

    // 同步更新畫布中的簽名圖片和簽名檔案格式
    $("#signature_div").bind("change", function (e) {
      var datapair = $sigdiv.jSignature("getData", "image");
      $("#signature_images").attr(
        "src",
        "data:" + datapair[0] + "," + datapair[1]
      );
    });

    //重設繪製簽名
    $("#signature_reset").click(function () {
      $("#signature_div").jSignature("reset");
      $("#signature_images").attr("src", "");
    });
  }
//endregion

// 儲存該簽名 region
signature_submit = function(this_btn) {

    // 獲取簽名類型(督導、組長、主管)
    var sign_type = $(this_btn).attr("board_name");
    // console.log(sign_type);

    var ajax_url = "database/update_case_data_detail_signature.php";
    var src_data = $("#signature_images").attr("src");
    // console.log(src);
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var day = today.getDay();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();


    employeeSign_imagePath_arr[sign_type] = "../signature/" + year + month + day + ".png";
    employeeSign_Date_arr[sign_type] = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    // console.log(employeeSign_msg_arr+'\n'+employeeSign_imagePath_arr+'\n'+employeeSign_Date_arr);
    var imagePath_arr = employeeSign_imagePath_arr.join('、');
    var Date_arr = employeeSign_Date_arr.join('、');
    var datePath = "../signature/" + year + month + day + ".png"
    // 判斷有無簽名圖片，若有送出簽名並儲存檔案
    if (src_data) {
      // console.log("submit_sign");
      $.ajax({
        type: "post",
        url: ajax_url,
        data: {
            id:id,
          interlocution: form_type,
          src_data: src_data,
          sign_type: sign_type,
          imagePath_arr,
          Date_arr,
          datePath,
        },
        async: false,
        success: function (data) {
          console.log(data);
          if (data) {
            swal({
              title: "送出簽名成功！",
              type: "success",
            }).then(function () {
              location.reload();
            });
          } else {
            swal({
              title: "生成簽名圖片失敗！請聯絡網站維護人員",
              type: "error",
            });
          }
        },
      });
    } else {
      alert("簽名圖片檔不能為空！");
      return false;
    }
  }
//endregion

  signature_btn_click = function(sign_board_name) {
    var type_name = "";

    switch (sign_board_name) {
        case "supervisor1":
            type_name = "督導1";
            break;
        case "supervisor2":
        type_name = "督導2";
            break;
        case "assign":
            type_name = "社工人員";
            break;
        default:
            type_name = employeeSign_arr[sign_board_name];
            break;
    }

//   // 檢查當前使用者名稱是否與簽名欄位名稱匹配
//   var sign_name = $("#signName" + sign_board_name).val();
//   console.log(sign_name + '/' + user_name);
//   if (sign_name !== user_name) {
//     alert("您只能在顯示自己帳號的欄位中簽章！");
//     return false;
//   }

  $("#signature_h4").text(type_name + "簽名");
  $("#signature_title_td").text(type_name);
  $("#sign_submit_btn").attr("board_name", sign_board_name);

  $("#signature_area").show();
  $("#myTabContent").hide();
  }
//endregion

//在簽名畫布區域按取消，返回詳細資料，並自動滾動卷軸至最頂部 region
show_main_panel = function () {

    $("#signature_area").hide();
    $("#myTabContent").show ();

};
//endregion

// 複選問題 creation date 20240502
function toggleCheckboxes(checkedCheckbox) {
    const symptoms = document.querySelectorAll('input[name="'+checkedCheckbox.name+'"]:not(.none)');
    // console.log(checkedCheckbox.name);
    // 其他選項設置 disabled 屬性
    symptoms.forEach(symptom => {
    symptom.disabled = checkedCheckbox.checked;
    symptom.checked = false;
    });
}

function load_checkboxDisabled(){
    var checkboxNone = document.getElementsByClassName('none');
    // console.log(checkboxNone);
    checkboxNone.forEach(checkboxNone => {
        if(checkboxNone.checked == true){
            toggleCheckboxes(checkboxNone)
        }
    })
}

//將日期轉為民國年格式111.03.07 region
trans_to_Tw = function (endate) {
    var strAry = endate.split("-");

    if (parseInt(strAry[0]) > 1911) {
        strAry[0] = parseInt(strAry[0]) - 1911;
    }

    return strAry[0] + "年" + strAry[1] + "月" + strAry[2] + "日";
};
//endregion

//當量表分數改變(選項)的時候，重算分數 region
$("input[name*='answer']").change( function(event) {

    //加總所有選項分數
    answer_score_counting();

    //BSRS5量表總分計算和得分評估
    if(form_type=="BSRS5")
    {
        BSRS5_answer_score_counting();
        BSRS5_answer_score_evaluation();
    }
});
//endregion

//量表分數計算 region
function answer_score_counting() {
    var t_score = 0;

    $("input[name*='answer']").each(function(i,n){

        if($(this).is(":checked"))
        {
            var score = parseInt($(this).val())
            t_score += score;
        }
    });

    $("#answer_score").val(t_score);
}
//endregion

//BSRS5量表分數計算(扣除附加題分數) region
function BSRS5_answer_score_counting() {
    var t_score = 0;
    var answer_last_ques = $("input[name*='answer'][type='radio']").last().attr("name");

    $("input[name*='answer']").each(function(i,n){

        if($(this).is(":checked"))
        {
            var score = parseInt($(this).val())
            t_score += score;
        }
    });

    var add_ques_score = parseInt($("input[name='"+answer_last_ques+"']:checked").attr("value")) || 0;


    $("#answer_score").val(t_score - add_ques_score);
}
//endregion

//BSRS5量表分數評估 region
function BSRS5_answer_score_evaluation() {

    var answer_score = $("#answer_score").val();

    var answer_last_ques = $("input[name*='answer'][type='radio']").last().attr("name");

    //評估是否總分大於6分，除附加題以外
    if(parseInt(answer_score) > 6)
    {
        $("input[name='treatment_status']").first().prop("checked",true);
    }
    else
    {
        $("input[name='treatment_status']").first().prop("checked",false);
    }


    //評估附加題分數是否大於1(中等程度)
    if(parseInt($("input[name='"+answer_last_ques+"']:checked").attr("value")) > 1)
    {
        $("input[name='treatment_status']").last().prop("checked",true);
    }
    else
    {
        $("input[name='treatment_status']").last().prop("checked",false);
    }

}
//endregion


//生活品質問卷量表 當量表分數改變(選項)的時候，重算分數 region
// part 1
$("input[name*='life_answer']").change( function(event) {

    // console.log("life_answer")

    //加總所有選項分數
    life_answer_score_counting_part1();
});
// part 2
$("input[name*='customRange']").change( function(event) {

    // console.log("life_answer")

    //加總所有選項分數
    life_answer_score_counting_part2();
});
//endregion

// 生活品質問卷量表分數計算 region
// part 1
function life_answer_score_counting_part1() {
    var t_score = 0;
    var index = 0;

    $("input[name*='life_answer']").each(function(i,n){

        if($(this).is(":checked"))
        {
            var score = parseInt($(this).val())
            t_score += score;
            index += 1;
        }
    });

    $("#life_answer_score1").val(Math.floor((t_score/index) * 100) / 100);
    // console.log(t_score)
    // console.log(index)
}
// part 2
function life_answer_score_counting_part2() {
    var t_score = 0;

    $("input[name*='customRange']").each(function(i,n){

        var score = parseInt(this.value)
        t_score += score;

    });

    $("#life_answer_score2").val(t_score);
    // console.log(t_score)
}
//endregion

// 存放會談紀錄 已存在的問題類型關鍵字
window.exist_ques_type_keywords = new Array();

// 查詢資料庫中的會談紀錄 問題類型關鍵字，並添加到網頁前端下拉式選單中region
function add_form_interlocution_ques_type_keywords() {

    $("#add_interlocution_ques_type").empty();

    $.ajax({
        url: "database/find_form_interlocution_ques_type_keywords.php",
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            if(exist_ques_type_keywords.length==0)
            {
                $("#interlocution_ques_type").append('<option value=""></option>');
            }
            if(!exist_ques_type_keywords.includes($("#add_interlocution_ques_type").val()))
            {
                $.each(data,function(index,value){
                    $("#interlocution_ques_type").append('<option value="'+value.Ques_type+'">'+value.Ques_type+'</option>');
                    exist_ques_type_keywords.push(value.Ques_type)
                });
            }
            // console.log(exist_ques_type_keywords);
        },
        error:function(e){
            notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
        }
    });
}
//endregion



// 新增會談紀錄 問題類型關鍵字 至資料庫，並刷新添加到網頁前端下拉式選單中region
insert_ques_type_keywords = function() {

    if($("#add_interlocution_ques_type").val()=="" || exist_ques_type_keywords.includes($("#add_interlocution_ques_type").val()))
    {
        swal({
            type: 'warning',
            title: '未輸入新增問題類型，或該類型已存在!',
            allowOutsideClick: false //不可點背景關閉
        })
        return false;
    }
    else
    {
        $.ajax({
            url: "database/add_form_interlocution_ques_type_keywords.php",
            data:{
                add_keyword:$("#add_interlocution_ques_type").val()
            },
            type: "POST",
            dataType: "JSON",
            // async: false,
            success: function (data) {
                if(data == 1){
                    add_form_interlocution_ques_type_keywords();
                    $("#add_interlocution_ques_type").val('');
                    swal({
                        type: 'success',
                        title: '新增成功!',
                        allowOutsideClick: false //不可點背景關閉
                        })
                }else{
                    swal({
                        type: 'error',
                        title: '新增失敗！請聯絡網站維護人員',
                        allowOutsideClick: false //不可點背景關閉
                        })
                }
            },
            error:function(e){
                // console.log(e);
                swal({
                    type: 'error',
                    title: '新增失敗！請聯絡網站維護人員',
                    allowOutsideClick: false //不可點背景關閉
                    })
            }
        });
    }
}
//endregion

// 會談紀錄 載入全部的問題分類 region
load_ques_types_html = function(){

    var ques_types_html = "";

    for(var i=0; i < origin_types_arr.length; i++)
    {
        if(i == origin_types_arr.length - 1)
        {
            ques_types_html+= origin_types_arr[i];
        }
        else
        {
            ques_types_html+= origin_types_arr[i] + "、";
        }
    }

    $("[name='interlocution_ques_types']").val(ques_types_html);
}
//endregion

// 添加 會談紀錄 問題分類 region
add_ques_types = function() {
    var get_curadd_ques_type = $("#interlocution_ques_type").val();

    // 檢查有無選擇任一問題分類
    if(get_curadd_ques_type != "")
    {
        // 檢查有無重複添加問題分類
        if(origin_types_arr.indexOf(get_curadd_ques_type) == -1)
        {
            origin_types_arr.push(get_curadd_ques_type);
        }
        else
        {
            swal({
                type: 'error',
                title: '該問題分類已存在，不可重複選擇',
                })
        }

        //載入分類到個案問題分類textarea中
        load_ques_types_html();
    }
    else
    {
        swal({
            type: 'error',
            title: '請選擇一個問題分類',
            })
    }
}
//endregion

// 會談紀錄 刪掉最後一個問題分類 region
return_ques_types = function() {

    origin_types_arr.pop();

    //載入分類到個案問題分類textarea中
    load_ques_types_html();
}
//endregion

// 會談紀錄 清空已添加的全部問題分類 region
clear_ques_types = function() {
    swal({
        title: "確認清空當前全部的問題分類？",
        text: "若操作失誤請勿存檔，請重新整理網頁恢復內容，存檔後將無法復原操作",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "確認送出",
        cancelButtonText: "取消",
        showConfirmButton: true,
        showCancelButton: true
    }).then(function(result) {
        if (result) {
            origin_types_arr = [];

            //載入分類到個案問題分類textarea中
            load_ques_types_html();
        }
    }, function(dismiss){
        if(dismiss == 'cancel'){
            swal({
                title:'已取消',
                type:'success',
            })
        }
    }).catch(swal.noop)
}
//endregion


// 載入憂鬱量表的測驗內容 region
function load_sullen_data() {
    $.ajax({
        url: "database/find_case_all.php",
        data: {
            Open_id:open_id,
            Id:id,
            Form_type:'sullen'
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {

            var sp_str0 = '<span>'+
            '（' + '---年--月--日' + ' ' + '&emsp;' + '前測' + '）' + '---' + '分' +
            '</span>';

            var sp_str1 = '<span>'+
            '（' + '---年--月--日' + ' ' + '&emsp;' + '中測' + '）' + '---' + '分' +
            '</span>';

            var sp_str2 = '<span>'+
            '（' + '---年--月--日' + ' ' + '&emsp;' + '後測' + '）' + '---' + '分' +
            '</span>';


            $.each(data,function(index,value){

                var upload_info_json = JSON.parse("[" +value.Upload_info.replace('\"\[', '\[').replace('\]\"', '\]') + "]");

                if(upload_info_json.length > 0)
                {
                    if(upload_info_json[0].length == 5)
                    {
                        var upload_date  = (trans_to_Tw(upload_info_json[0][0].value) === undefined) ? '' : trans_to_Tw(upload_info_json[0][0].value);
                        var test_type = ((upload_info_json[0][3].value) === undefined) ? '' : (upload_info_json[0][3].value);
                        var test_score = ((upload_info_json[0][1].value) === undefined) ? '' : (upload_info_json[0][1].value);
                        // var test_remark = ((upload_info_json[0][4].value) === undefined) ? '' : (upload_info_json[0][4].value);

                        switch (test_type) {
                            case '前測':
                                sp_str0 = '<span>'+
                                '（' + upload_date + ' ' + test_type + '）' + '<span style="color:red;">' + test_score + '</span>' + '分' +
                                '</span>';
                                break;

                            case '中測':
                                sp_str1 = '<span>'+
                                '（' + upload_date + ' ' + test_type + '）' + '<span style="color:red;">' + test_score + '</span>' + '分' +
                                '</span>';
                                break;

                            case '後測':
                                sp_str2 = '<span>'+
                                '（' + upload_date + ' ' + test_type + '）' + '<span style="color:red;">' + test_score + '</span>' + '分' +
                                '</span>';
                                break;
                        }
                    }
                }

            });
            $("#pretest_depression_area").append(sp_str0);
            $("#midtest_depression_area").append(sp_str1);
            $("#posttest_depression_area").append(sp_str2);

            // console.log(sp_str0)
            // console.log(sp_str1)
            // console.log(sp_str2)
        },
        error: function (e) {
            notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
            // console.log(e)
        }
    });
}
//endregion

// 載入生活品質量表的測驗內容 region
function load_life_data() {
    $.ajax({
        url: "database/find_case_all.php",
        data: {
            Open_id:open_id,
            Id:id,
            Form_type:'life'
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {

            var sp_str0 = '<span>'+
            '（' + '---年--月--日' + ' ' + '&emsp;' + '前測' + '）' + '得分/結果：' + '---' +
            '</span>';

            var sp_str1 = '<span>'+
            '（' + '---年--月--日' + ' ' + '&emsp;' + '中測' + '）' + '得分/結果：' + '---' +
            '</span>';

            var sp_str2 = '<span>'+
            '（' + '---年--月--日' + ' ' + '&emsp;' + '後測' + '）' + '得分/結果：' + '---' +
            '</span>';


            $.each(data,function(index,value){

                var other_info_json = JSON.parse("[" +value.Other_info.replace('\"\[', '\[').replace('\]\"', '\]') + "]");

                if(other_info_json.length > 0)
                {
                    if(other_info_json[0].length == 2)
                    {
                        var fillin_date = (trans_to_Tw(value.Fillin_date) === undefined) ? '' : trans_to_Tw(value.Fillin_date);
                        var test_type = ((other_info_json[0][1].value)  === undefined) ? '' : (other_info_json[0][1].value);
                        var test_score_result = ((other_info_json[0][0].value) === undefined) ? '' : (other_info_json[0][0].value);


                        switch (test_type) {
                            case '前測':
                                sp_str0 = '<span>'+
                                '（' + fillin_date + ' ' + test_type + '）' + '得分/結果：' + '<span style="color:red;">' + test_score_result.replace("<div>", "").replace("<br/>", "").replace("</div>", "") + '</span>' +
                                '</span>';
                                break;

                            case '中測':
                                sp_str1 = '<span>'+
                                '（' + fillin_date + ' ' + test_type + '）' + '得分/結果：' + '<span style="color:red;">' + test_score_result.replace("<div>", "").replace("<br/>", "").replace("</div>", "") + '</span>' +
                                '</span>';
                                break;

                            case '後測':
                                sp_str2 = '<span>'+
                                '（' + fillin_date + ' ' + test_type + '）' + '得分/結果：' + '<span style="color:red;">' + test_score_result.replace("<div>", "").replace("<br/>", "").replace("</div>", "") + '</span>' +
                                '</span>';
                                break;
                        }
                    }
                }

            });
            $("#pretest_life_area").append(sp_str0);
            $("#midtest_life_area").append(sp_str1);
            $("#posttest_life_area").append(sp_str2);

            // console.log(sp_str0)
            // console.log(sp_str1)
            // console.log(sp_str2)
        },
        error: function (e) {
            notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
            // console.log(e)
        }
    });
}
//endregion

// 載入家庭關係量表的測驗內容 region
function load_familyship_data() {
    $.ajax({
        url: "database/find_case_all.php",
        data: {
            Open_id:open_id,
            Id:id,
            Form_type:'familyship'
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {

            var sp_str0 = '<span>'+
            '（' + '---年--月--日' + ' ' + '&emsp;' + '前測' + '）' + '---' + '分' +
            '</span>';

            var sp_str1 = '<span>'+
            '（' + '---年--月--日' + ' ' + '&emsp;' + '中測' + '）' + '---' + '分' +
            '</span>';

            var sp_str2 = '<span>'+
            '（' + '---年--月--日' + ' ' + '&emsp;' + '後測' + '）' + '---' + '分' +
            '</span>';


            $.each(data,function(index,value){

                var other_info_json = JSON.parse("[" +value.Other_info.replace('\"\[', '\[').replace('\]\"', '\]') + "]");
                // console.log(other_info_json)

                if(other_info_json.length > 0)
                {
                    if(other_info_json[0].length == 2)
                    {
                        var fillin_date = (trans_to_Tw(value.Fillin_date) === undefined) ? '' : trans_to_Tw(value.Fillin_date);
                        var test_score =(other_info_json[0][0].value === undefined) ? '' : other_info_json[0][0].value;
                        var test_type = (other_info_json[0][1].value === undefined) ? '' : other_info_json[0][1].value;

                        switch (test_type) {
                            case '前測':
                                sp_str0 = '<span>'+
                                '（' + fillin_date + ' ' + test_type + '）' + '<span style="color:red;">' + test_score + '</span>' + '分' +
                                '</span>';
                                break;

                            case '中測':
                                sp_str1 = '<span>'+
                                '（' + fillin_date + ' ' + test_type + '）' + '<span style="color:red;">' + test_score + '</span>' + '分' +
                                '</span>';
                                break;

                            case '後測':
                                sp_str2 = '<span>'+
                                '（' + fillin_date + ' ' + test_type + '）' + '<span style="color:red;">' + test_score + '</span>' + '分' +
                                '</span>';
                                break;
                        }
                    }
                }
            });
            $("#pretest_familyship_area").append(sp_str0);
            $("#midtest_familyship_area").append(sp_str1);
            $("#posttest_familyship_area").append(sp_str2);

            // console.log(sp_str0)
            // console.log(sp_str1)
            // console.log(sp_str2)
        },
        error: function (e) {
            notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
            // console.log(e)
        }
    });
}
//endregion

// 載入BSRS-5量表的測驗內容 region
function load_BSRS5_data() {
    $.ajax({
        url: "database/find_case_all.php",
        data: {
            Open_id:open_id,
            Id:id,
            Form_type:'BSRS5'
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {

            var sp_str = '<span>'+
            'BSRS-5得' + '&emsp;' + '--' + '分'
            '</span>';



            $.each(data,function(index,value){

                var data_json = "";

                // console.log(typeof value.Upload_info !== 'undefined')
                // console.log(typeof value.Other_info !== 'undefined')

                if (typeof value.Upload_info !== 'undefined')
                {
                    data_json = JSON.parse("[" +value.Upload_info.replace('\"\[', '\[').replace('\]\"', '\]') + "]");

                    if(data_json.length > 0)
                    {
                        if(data_json[0].length == 6)
                        {
                            // var create_date = trans_to_Tw(value.Create_date) ? trans_to_Tw(value.Create_date) : '';
                            var test_score = (data_json[0][2].value) ? data_json[0][2].value : '';

                            sp_str = '<span>'+
                                    'BSRS-5得' + '<span style="color:red;">' + test_score + '</span>' + '分'
                                    '</span>';
                        }
                    }
                }
                else if (typeof value.Other_info !== 'undefined')
                {
                    data_json = JSON.parse("[" +value.Other_info.replace('\"\[', '\[').replace('\]\"', '\]') + "]");

                    if(data_json.length > 0)
                    {
                        if(data_json[0].length == 2)
                        {
                            // var create_date = trans_to_Tw(value.Create_date) ? trans_to_Tw(value.Create_date) : '';
                            var test_score = (data_json[0][0].value) ? data_json[0][0].value : '';

                            sp_str = '<span>'+
                                    'BSRS-5得' + '<span style="color:red;">' + test_score + '</span>' + '分'
                                    '</span>';
                        }
                    }
                }

                if(parseInt(test_score)<=5)
                {
                    $('[name="BSRS5_checkbox"]').attr('checked',true);
                }

            });
            $("#bsrs5_test_area").append(sp_str);
        },
        error: function (e) {
            notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
            // console.log(e)
        }
    });
}
//endregion



//宣告存入 file Object的空陣列
var file_name=[];

//選擇檔案的動作region
$("input[name*='customFile']").change( function(event) {
    //獲取 檔名.檔案格式
    var filePath = $(this).val().split("\\");
    //獲取 file name名稱
    var name = $(this).attr("name");
    //獲取檔案格式
    var filetype= filePath[filePath.length-1].split(".");
    var ext = filetype[filetype.length - 1];
    // console.log(ext)

    //file_name中name值 重複次數
    var repeat_num = 0;
    //file_name中name值 重複的索引值
    var repeat_index;

    //創建臨時檔案連結
    // var tmppath = URL.createObjectURL(event.target.files[0]);

    //若檔案為圖片格式，則顯示圖片，否則不顯示圖片
    if(isAssetTypeAnImage(ext.toLowerCase()))
    {
        $("#"+name+"_img").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
    }
    else
    {
        $("#"+name+"_img").css("display","none");
    }

    //預覽上傳檔名
    $("#"+name).html("檔名："+filePath[filePath.length-1]);

    //查看 file_name 中是否已有重複元素
    $.each(file_name, function (i, obj) {
        if(obj.name==name)
        {
            repeat_num ++;
            repeat_index = i;
        }
        else
        {
            repeat_num = 0;
        }
    });
    // console.log(repeat_num);

    //如果file_name中未找到相同name值，則新加入一筆資料至file_name
    //否則，找到相對應索引repeat_index name值，更新該value值
    if(repeat_num==0)
    {
        file_name.push({name:name,value:filePath[filePath.length-1]});
    }
    else
    {
        file_name[repeat_index]["value"] = filePath[filePath.length-1];
    }

    // console.log(file_name)
});
//endregion

//檢查是否為圖片檔region
function isAssetTypeAnImage(ext) {
    return [
    'png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].
    indexOf(ext.toLowerCase()) !== -1;
}
//endregion

//檢查檔名是否重複，提示使用者region
function check_file_exist(){
    var check_file_value = $('input[type="file"]').prop('files');
    var warning_str = "";
    var file_arr = [];
    var file_n = "";
    var exist_info = [];

    for(var i=0; i<check_file_value.length; i++){
        file_arr.push(check_file_value[i]["name"]);
     }
     $.each(file_arr, function (index, value) {
        $.ajax({
            url: "database/case_file_check.php",
            data: {
                file_name:value,
                Case_id:open_id,
                Form_id:form_id,
                Form_type:form_type,
                Case_pid:pid
            },
            type: "POST",
            dataType: "JSON",
            async:false,
            success: function (data) {
                //  console.log(data)
                if(data!="")
                {
                    $.each(data, function (index, value) {
                        var form_type_str = "";

                        file_n = data[index].file_path.replace("\.\.\/upload\/", "");

                        switch (data[index].Form_type) {
                            case "case":
                                form_type_str = "個案評估表";

                                break;
                            case "BSRS5":
                                form_type_str = "BSRS-5量表";

                                break;
                            case "sullen":
                                form_type_str = "憂鬱量表";
                                break;
                        }

                        warning_str += '檔案名稱：'+file_n+'，\n'+
                                        '開案案號：'+data[index].Case_id+'，\n'+
                                        '量表類型：'+form_type_str+'，\n'+
                                        '檔案創建者：'+data[index].Create_name+'，\n'+
                                        '檔案更新者：'+data[index].Update_name+'。\n\n';


                        exist_info.push([file_n, warning_str]);
                    });
                }
                else
                {
                    warning_str = "";
                }
            },
            error: function (e) {
                notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
            }
        });
    });
    return exist_info;
}
//endregion

other_info_push = function(form_tpye) {

    var other_info_arr = [];

    switch (form_tpye) {
        case 'case':

            var get_case_closed = $('input[name="case_closed_radio"]:checked').val();

            if(get_case_closed=='結案')
            {
            other_info_arr.push({name:form_tpye,value:'結案'});
            }
            else if(get_case_closed=='暫不結案')
            {
            var case_closed_str = "暫不結案，持續服務至民國"+$('input[name="case_closed_year"]').val()+"年"+$('input[name="case_closed_month"]').val()+"月"+$('input[name="case_closed_day"]').val()+"日";
            other_info_arr.push({name:form_tpye,value:case_closed_str});
            }
            else
            {
            other_info_arr.push({name:form_tpye,value:''});
            }

            break;

        case 'life':

            var w_test = $('input[name="w_test"]:checked').val();
            var life_answer_score1 = parseFloat($('input[name="life_answer_score1"]').val());
            var life_answer_score2 = parseFloat($('input[name="life_answer_score2"]').val());
            // var total_answer_score = parseFloat(life_answer_score1) + parseFloat(life_answer_score2);
            var score1_index = "";

            if(life_answer_score1>0 && life_answer_score1<=1)
            {
                score1_index = "極不滿意";
            }
            else if(life_answer_score1>1 && life_answer_score1<=1.9)
            {
                score1_index = "介於為極不滿意至不滿意";
            }
            else if(life_answer_score1>1.9 && life_answer_score1<=2)
            {
                score1_index = "不滿意";
            }
            else if(life_answer_score1>2 && life_answer_score1<=2.9)
            {
                score1_index = "介於為不滿意至普通";
            }
            else if(life_answer_score1>2.9 && life_answer_score1<3.1)
            {
                score1_index = "普通";
            }
            else if(life_answer_score1>=3.1 && life_answer_score1<=3.9)
            {
                score1_index = "介於為普通(中等程度滿意)至滿意";
            }
            else if(life_answer_score1>3.9 && life_answer_score1<4.1)
            {
                score1_index = "滿意";
            }
            else if(life_answer_score1>=4.1 && life_answer_score1<=4.9)
            {
                score1_index = "介於為滿意至極滿意(非常滿意)";
            }
            else if(life_answer_score1>=5)
            {
                score1_index = "極滿意(非常滿意)";
            }

            if(isNaN(life_answer_score1))
            {
                life_answer_score1 = "-";
            }
            if(isNaN(life_answer_score2))
            {
                life_answer_score2 = "-";
            }

            other_info_arr.push({name:form_tpye,value:"<div>第一部分得分："+life_answer_score1+"分，結果："+score1_index+"。<br/>第二部分得分："+life_answer_score2+"分。</div>"});

            // other_info_arr.push({name:form_tpye,value:total_answer_score});

            if(w_test==undefined)
            {
                other_info_arr.push({name:form_tpye,value:''});
            }
            else
            {
                other_info_arr.push({name:form_tpye,value:w_test});
            }

            break;

        case 'employment_satif':
        case 'satif':

            var answer_score = $('input[name="answer_score"]').val();
            other_info_arr.push({name:form_tpye,value:answer_score});

            break;

        case 'familyship':

            var answer_score = $('input[name="answer_score"]').val();
            other_info_arr.push({name:form_tpye,value:answer_score});

            var w_test = $('input[name="w_test"]:checked').val();
            if(w_test==undefined)
            {
                other_info_arr.push({name:form_tpye,value:''});
            }
            else
            {
                other_info_arr.push({name:form_tpye,value:w_test});
            }

            break;

        case 'BSRS5':

            var answer_score = $('input[name="answer_score"]').val();
            other_info_arr.push({name:form_tpye,value:answer_score});
            var statement = $('textarea[name="statement"]').val();
            other_info_arr.push({name:form_tpye,value:statement});

            break;

        case 'settlement':
            var basic_indicator = $('input[name="basic_indicator"]:checked').length;
            var end_indicator = $('input[name="end_indicator"]:checked').length;

            if(basic_indicator==0 && end_indicator==0)
            {
                var indicators_str = "";
            }
            else
            {
                var indicators_str = "符合基本條件指標條件共"+basic_indicator+"項，符合收案指標條件共"+end_indicator+"項。";
            }


            other_info_arr.push({name:form_tpye,value:indicators_str});

            break;

        case 'health':

            break;
        case 'interlocution':
                var interlocution_date = $('input[name="interlocution_date"]').val();
                var interlocution_ques = $('textarea[name="interlocution_ques"]').val();
                var interlocution_assign_name = $('input[name="assign_name"]').val();

                other_info_arr.push({name:form_tpye,value:interlocution_date});
                other_info_arr.push({name:form_tpye,value:interlocution_ques});
                other_info_arr.push({name:form_tpye,value:interlocution_assign_name});
            break;
    }

    return other_info_arr;

}

//網頁載入 region
$(document).ready(function () {
    //填入資料region

    //各量表依據form_type自動更新麵包屑名稱
    $("#form_type_name").text($("#form_type").text());


    //家庭關係量表自動填入性別
    // $("input[name='sex'][value='"+gender+"生']").attr('checked',true);

    //個案服務滿意度調查表自動填入資料
    $("#case_name").val(name);
    $("#tsn_case_id").val(decodeURIComponent(open_id));
    //assign_name 於case_detail.php 第234行定義變數
    $("#assign_name").val(assign_name);

    //個案評估表自動填入資料
    $("#name").val(name);
    $("#pid").val(decodeURIComponent(pid));
    $("input[name='sex'][value='"+gender+"']").attr('checked',true);
    $("#open_date").val(decodeURIComponent(date));
    $("#birth").val(birth);
    $("#age").val(getAge(birth.split('-'))[0]);

    // $("#age").val(decodeURIComponent(age));

    //填寫日期自動帶入
    $("input[name*='fillin_date']").each(function(){
        //獲取現在時間 moment.js插件
        var timenow = moment().format('YYYY-MM-DD');
        $(this).val(timenow);
    });

    // 載入 會談紀錄表 問題類型
    add_form_interlocution_ques_type_keywords();

    var url = "";

    //判斷是否為個案評估表或安置、自立宿舍評估量表
    if(form_type=="case" || form_type=="settlement")
    {
        //個案評估表
        url = "database/find_case_detail_typecase.php";
    }
    else
    {
        //其他量表
        url = "database/find_case_detail.php";
    }

    //載入各量表 資料
    load_all_forms_data(form_type,url);

    // 載入會談紀錄的所有個案問題分類，添加至陣列
    load_ques_types_html();

    //計算各量表 分數
    answer_score_counting();

    //載入憂鬱量表內容 個案評估表->成效評估
    load_sullen_data();
    //載入BSRS-5結果 個案評估表->成效評估
    load_BSRS5_data();
    //載入生活品質量表內容 個案評估表->成效評估
    load_life_data();
    //載入家庭關係量表內容 個案評估表->成效評估
    load_familyship_data();

    if(form_type=="BSRS5")
    {
    //載入BSRS-5量表內容 個案評估表->成效評估
    load_BSRS5_data();
    }

    //手動新增按鈕點擊跳出模態框
    $('#case_storage_model').on('shown.bs.modal', function () {
        $("#add_"+form_type+"_detail").trigger('focus');
    });
    $('#case_storage_model2').on('shown.bs.modal', function () {
        $("#add_"+form_type+"_detail").trigger('focus');
    });
    $('#trans_grade_model').on('shown.bs.modal', function () {
        $('#trans_grade').trigger('focus');
    });
    $('#trans_user_model').on('shown.bs.modal', function () {
        $('#trans_case').trigger('focus');
    });

    $("#case_grade").val(decodeURIComponent(grade));

    $.ajax({
        type:'POST',
        url:'database/find_check_user.php',
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log('test',data)
            for (var index in data.Id) {
                $("#case_user").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            }
        },
    });

    // 載入全部user至下拉式選單
    append_user();


    $.ajax({
        url: "database/find_case.php",
        data: {
            user_name:user_name,
            Open_id:open_id,
            id:user_id
        },
        type: "POST",
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log(data);
            var PhoneStartstr = data[0].Phone.indexOf("09");


            if(PhoneStartstr == 0)
            {
                //表示是以09開頭
                $("#phone_mobile").val(data[0].Phone);
            }
            else if(PhoneStartstr == -1)
            {
                //表示不是以09開頭
                $("#phone_home").val(data[0].Phone);
            }
            else
            {
                $("#phone").val(data[0].Phone);
            }
            $("#phone").val(data[0].Phone);

            $("#case_stage").val(data[0].Case_stage);
            $("#case_user").val(data[0].Case_assign);
        },
        error: function (e) {
            notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
        }
    });
});
//endregion

// 從出生年月日計算年齡 region
function getAge(birthday) {
    // 新建日期对象
    let date = new Date()
    // 今天日期，数组，同 birthday
    let today = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    // 分别计算年月日差值
    let age = today.map((value, index) => {
        return value - birthday[index]
    })
    // 当天数为负数时，月减 1，天数加上月总天数
    if (age[2] < 0) {
        // 简单获取上个月总天数的方法，不会错
        let lastMonth = new Date(today[0], today[1], 0)
        age[1]--
        age[2] += lastMonth.getDate()
    }
    // 当月数为负数时，年减 1，月数加上 12
    if (age[1] < 0) {
        age[0]--
        age[1] += 12
    }
    return age
}
//endregion

// 隱藏元素 region
hideContainer = function(this_el) {
    $(this_el).hide();
}
//endregion

//載入各量表 資料 region
function load_all_forms_data(type_name,url_str)
{
        //載入各量表 資料
        $.ajax({
        url: url_str,
        type: "POST",
        data: {
            Case_id:open_id,
            Form_id:form_id,
            Form_type:type_name,
            Case_pid:pid,
        },
        dataType: "JSON",
        async: false, //啟用同步請求
        success: function (data) {
            // console.log(data)

            //程式執行條件為 非剛創建的量表
            if(data!='' && form_type != "resource")
            {
                //將ajax結果轉為json
                var data_json = JSON.parse("[" +data[0].answer.replace('\"\[', '\[').replace('\]\"', '\]') + "]");
                // console.log(data_json)
                //依據input的type類型名稱寫入資料，file類型名稱另外寫 region
                $.each(data_json[0], function (i, datan) {
                    //獲取name值對應的input類型
                    var inputs_type = $("input[name='"+datan.name+"']").attr('type');

                    //根據對應的類型選擇js語法填入資料
                    if(inputs_type!=undefined)
                    {
                        switch (inputs_type) {
                            case "radio":
                            case "checkbox":
                                //radio & checkbox填值語法格式
                                $("input[name='"+datan.name+"'][value='"+datan.value+"']").attr('checked',true);
                                break;

                            //text填值語法格式
                            case "text":
                                $("input[name='"+datan.name+"']").val(datan.value);
                                break;
                            // range填值語法格式
                            case "range":
                                $("input[name='"+datan.name+"']").val(datan.value);
                                $("input[name='"+datan.name+"']").next().val(datan.value);
                                break;
                            case "file":
                                    //file類型跳過，下面再後續處理
                                break;
                            default:
                                $("input[name='"+datan.name+"']").val(datan.value);
                                break;
                        }
                    }
                    else //若不是input標籤
                    {
                        //其他 select、textarea

                        // 如果名稱是會談紀錄 的個案問題分類 則新增至陣列裡保存
                        if(datan.name == "interlocution_ques_types")
                        {
                            //若為空值則不進行split分割陣列，直接定義空陣列
                            if(datan.value != "")
                            {
                                window.origin_types_arr = datan.value.split("、");
                            }
                            else
                            {
                                window.origin_types_arr = [];
                            }
                        }

                        $("[name='"+datan.name+"']").val(datan.value);
                    }


                });
                //endregion

                //file類型顯示資料處理 region
                //獲取所有 type="file" 的元素
                var inputs_type_files = $('[type="file"]');

                //如果存在 type="file" 的元素，繼續以下動作
                if(inputs_type_files.length>0)
                {
                    //顯示檔案圖片、路徑
                    for(var i=0;i<inputs_type_files.length;i++)
                    {
                        //從資料庫抓取的格式為 "../upload/檔案.檔名"
                        //replace()更改為 "檔案.檔名"
                        if (typeof data[0].file_path !== 'undefined')
                        {
                            var file_val = data[0].file_path.replace("\.\.\/upload\/", "");

                            if(file_val !="undefined")
                            {
                                //該input value寫入"檔案.檔名"
                                $("input[name*='customFile']").eq(i).attr("value",file_val)

                                //檔案連結與圖片string
                                var file_html='<a name="customFile'+(i+1)+'_a" href="./upload/'+file_val+'" style="text-decoration:none;color:blue;" target="_blank">'+file_val+'<br/></a><img style="vertical-align:middle;" width="auto" onerror="hideContainer(this)" src="./upload/'+file_val+'">';

                                // if()
                                // {
                                //     file_html += '<img style="vertical-align:middle;" width="auto" src="./upload/'+file_val+'">';
                                // }

                                //寫入該input相對應的div元素 (id="customFile^") 中顯示
                                $("#customFile"+(i+1)).html(file_html);
                            }
                        }

                    }
                }
                //endregion

                if(form_type == "health")
                {
                    health_form_names = new Array();

                    var data_json_health = JSON.parse("[" +data[0].Health_rec.replace('\"\[\{', '\[\{').replace('\}\]\"', '\}\]') + "]");

                    $.each(data_json_health[0], function (i, datan) {
                        health_form_names.push(datan.name);
                    });

                    uniqueArr = filterArray(health_form_names)
                    var tab_arr = new Array();

                    for(var i = 0; i < uniqueArr.length; i++)
                    {
                        var tab_n = uniqueArr[i].split('\&');
                        tab_arr.push(tab_n[0])
                    }
                    tab_arr = filterArray(tab_arr)
                    tab_arr_len = tab_arr.length;

                    for(var i=1;i<=tab_arr_len;i++)
                    {
                        if(i!=1)
                        {
                            var cssString = "";

                            var table_str = "";

                            cssString += '<li class="nav-item" role="presentation">' +
                                '<a class="nav-link" id="profile-tab'+(parseInt(i)+1)+'" data-toggle="pill" href="#tabx0_'+i+'" role="tab"  aria-selected="false">' +
                                '<b>' + '就診紀錄表'+i+'</b>' +
                                '</a>' +
                                '</li>';

                            table_str +=
                            '<div class="tab-pane fade" id="tabx0_'+i+'" role="tabpanel" aria-labelledby="profile-tab'+(parseInt(i)+1)+'">'+
                                '<div class="col-sm-12">'+
                                    '<div style="margin-top:15px" class="text-center">'+
                                        '<h4>就診紀錄表'+i+'</h4>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="panel-body">'+
                                '</div>'+
                                '<div class="table-wrap">'+
                                    '<div class="table-responsive">'+
                                        '<form class="form_health">'+
                                            '<table style="width:100%;" class="table table-bordered medical_rec_table" id="mtable'+i+'">'+
                                            '<thead class="medical_rec_1_th"></thead>'+
                                            '<tbody class="medical_rec_1"></tbody>'+
                                            '<thead class="medical_rec_2_th"></thead>'+
                                            '<tbody class="medical_rec_2"></tbody>'+
                                            '</table>'+
                                        '</form>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';

                            $("#new_rec").before(cssString);

                            $(".panel-footer").before(table_str);

                            get_generate_medical_thead();
                            generate_medical_td_default();


                            $(".nav-link").click(function (e) {
                                e.preventDefault();
                                $(this).tab('show');
                            })
                        }

                    }

                    // console.log(data_json_health[0])
                    //依據input的type類型名稱寫入資料，file類型名稱另外寫 region
                    $.each(data_json_health[0], function (i, datan) {
                        $.each(datan.value, function (e, v) {
                            $("input[name='"+datan.name+"']").eq(e).val(v);
                        });
                    });

                }
            }

            // 資源量表
            if(form_type == "resource")
            {
                var data_json_resource = JSON.parse("[" +data[0].answer.replace('\"\[\{', '\[\{').replace('\}\]\"', '\}\]') + "]");

                // console.log(data_json_resource[0])
                // console.log(data_json_resource[0])
                //依據input的type類型名稱寫入資料，file類型名稱另外寫 region
                $.each(data_json_resource[0], function (i, datan) {
                    $.each(datan.value, function (e, v) {
                        $("input[name='"+datan.name+"']").eq(e).val(v);
                    });
                });
            }

            if(form_type == "employment_satif"){
                load_checkboxDisabled();
            }
        },
        error: function (e) {
            // console.log(e)
            notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
        }
    });
}
//endregion


//刪除陣列重複元素region
function filterArray(inputArr){
    var found ={};
    var out = inputArr.filter(function(element){
        return found.hasOwnProperty(element)? false : (found[element]=true);
    });
    return out;
}
//endregion



//按下儲存 設定存檔類型 region
// $("#add_"+form_type+"_detail").on('click', function () {
$("#case_storage_submit").on('click', function () {

    var case_storage_type = $("#case_storage_type").val()

    // console.log(case_storage_type)

    if(case_storage_type == "cache")
    {
        form_check_submit(case_storage_type);
    }
    else if(case_storage_type == "storage")
    {
        // if($("#supervise1").val() != "" && $("#supervise2").val() != "")
        // {
            if($("#case_storage_pwd").val() == "")
            {
                swal({
                    title:'若選擇『確認上傳』，請輸入您的使用者登入密碼',
                    type:'error',
                })
            }
            else
            {
                if($("#case_storage_pwd").val() == login_user_pwd)
                {
                    form_check_submit(case_storage_type);
                }
                else
                {
                    swal({
                        title:'您的使用者登入密碼輸入不正確，請重新輸入',
                        type:'error',
                    })
                }
            }
        // }
        // else
        // {
        //     swal({
        //         title:'請選擇督導/執行長名稱',
        //         type:'error',
        //     })
        // }
    }
});
//endregion
//按下儲存 設定存檔類型 region
// $("#add_"+form_type+"_detail").on('click', function () {
    $("#case_storage_submit2").on('click', function () {

        var case_storage_type = $("#case_storage_type").val()

        // console.log(case_storage_type)

        if(case_storage_type == "cache")
        {
            form_check_submit(case_storage_type);
        }
        else if(case_storage_type == "storage")
        {
            form_check_submit(case_storage_type);
        }
    });
    //endregion


form_check_submit = function(submit_storage_type) {

    window.storage_type = submit_storage_type;
    // console.log(storage_type)

    //判斷該量表是否含有 input[type="file"] 類型資料
    if($('input[type="file"]').length!=0)
    {
        var exist_arr = check_file_exist();

        //如果上傳的檔案檔名重複則提示使用者
        if(exist_arr.length!=0)
        {
            swal({
                title: exist_arr[0][0]+"已存在。\n現有重複檔案資訊如下：\n"+exist_arr[0][1],
                text: "選擇『確認送出』覆蓋現有檔案，或是按『取消』更改檔名",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "確認送出",
                cancelButtonText: "取消",
                showConfirmButton: true,
                showCancelButton: true
            }).then(function(result) {
                if (result) {
                    submit_form_data();
                }
            }, function(dismiss){
                if(dismiss == 'cancel'){
                    swal({
                        title:'已取消，建議請更改檔名',
                        type:'success',
                    })
                }
            }).catch(swal.noop)
        }
        else
        {
            submit_form_data();
        }
    }
    else
    {
        submit_form_data();
    }
}

// 存放監聽表單的子元素變動事件的列表
window.listen_form_change = new Array();


// 監聽表單內容變動事件 region
$(".form").children().change(function () {
    // var form_type = getUrlVars()["form_type"];
    var form_id = $(this).parents("form").attr("id");
    // console.log($(this).parents("form").attr("id"));

    listen_form_change.push(form_id)
});
//endregion

// 根據表單類型儲存工作報表所需記數 region
function get_case_report_datas(form_type) {

    var report_datas = [];
    var count_type = "";
    var open_case_date = "";
    var case_name = "";
    var case_grade = "";
    var case_state = "";
    var case_assign = "";

    $.ajax({
        url: "database/find_current_case_for_report.php",
        type: "POST",
        data: {
            Case_seqid:id,
            Case_id:open_id,
        },
        dataType: "JSON",
        async: false, //啟用同步請求
        success: function (data) {
            // console.log(data)
            open_case_date = data[0].Open_case_date;
            case_name = data[0].Name;
            case_grade = data[0].Case_grade;
            case_state = data[0].Case_state;
            case_assign = data[0].Case_assign;
        },
        error: function (e) {
            // console.log(e)
            notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
        }
    });


    switch (form_type) {
        case "case":
            if(listen_form_change.includes("form_4"))
            {
                count_type = "Case_closed_count";
            }
            else if(listen_form_change.length>0)
            {
                count_type = "Case_count";
            }


            break;
        case "interlocution":
            if(listen_form_change.length>0)
            {
                var interlocution_place = $("#interlocution_place").val();

                switch (interlocution_place) {
                    case "電訪":
                            count_type = "Interlocution_phone_count";
                        break;
                    case "面訪":
                            count_type = "Interlocution_face_count";
                        break;
                    case "家訪":
                            count_type = "Interlocution_home_count";
                        break;
                    default:
                        break;
                }
            }
            break;
        case "employment_satif":
            if(listen_form_change.length>0)
            {
                count_type = "Employment_satif_count";
            }

            break;
        default:
            break;
    }

    report_datas.push({form_type:form_type
        , count_type:count_type
        , case_seqid:id
        , case_id:open_id
        , form_id:form_id
        , open_case_date:open_case_date
        , name:case_name
        , case_grade:case_grade
        , case_state:case_state
        , case_assign:case_assign});

    return report_datas;
}
//endregion

// 獲取服務報表的分析內容 region
function get_case_report2_datas() {
    var report_datas2 = [];

    switch (form_type) {
        case "case":
            var birth = $('[name="birth"]').val();
            var sex = $('[name="sex"]:checked').val();
            var residence = $('[name="residence"]').val();
            var education = $('[name="education"]:checked').val();
            var drug_record = $('[name="drug_record"]:checked').val();
            var drug_record_value = "";

            residence = residence.substr(0, 3);

            switch (drug_record) {
                case "0":
                    drug_record_value = "海洛因";
                    break;
                case "1":
                    drug_record_value = "安非他命";
                    break;
                case "2":
                    drug_record_value = "美沙冬";
                    break;
                case "3":
                    drug_record_value = "其他";
                    break;
            }

            report_datas2.push({birth:birth
                , sex:sex
                , residence:residence
                , education:education
                , drug_record:drug_record_value
                , case_referral:referral
            });

            break;

        case "interlocution":
            var interlocution_ques_types = $('[name="interlocution_ques_types"]').val();
            report_datas2.push({ques_type:interlocution_ques_types});
            break;
    }

    return report_datas2;
}
//endregion

// 防五秒內重複送出表單
window.submit_detail_click = true;

//送出量表資料region
function submit_form_data() {
    if(submit_detail_click)
    {
        submit_detail_click = false;

        var form_type = getUrlVars()["form_type"];

        //先執行 出入矯正機關 計算約共幾年幾月
        calculation_date();

        //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
        $('input, textarea').each(function(){
            if($(this).attr('type')!='file')
            {
                $(this).val(jQuery.trim($(this).val()));
            }
        });

        //Time Now
        var timenow = moment().format('YYYY-MM-DD');

        //將 以下資料添加到 FormData Oject region

        //創立FormData Oject
        //傳輸 input type="file"類型檔案需用FormData Oject格式傳送ajax
        var form_data = new FormData();

        //獲取File Object
        var customfile = $('[type="file"]').prop('files');
        // console.log(typeof customfile)

        //獲取所有form的資料轉為serializeArray
        var form = $('.form').serializeArray();

        //form serializeArray物件合併input type="file"類型物件 (serializeArray不會將input type="file"類型資料加入，需額外設定)
        if(file_name.length==0)
        {
            var input_files_len = $('[type="file"]');
            var inputs_files_value = $('[type="file"]').attr("value");
            var inputs_files_name = $('[type="file"]').attr("name");

            if(inputs_files_value!=undefined)
            {
                for(var i=0;i<input_files_len.length;i++)
                {
                    file_name.push({name:inputs_files_name,value:inputs_files_value});
                }
            }

            form = form.concat(file_name);
        }
        else
        {
            form = form.concat(file_name);
        }


        // 健康管理評估表
        if(form_type=="health")
        {
            form_health_arr = new Array();

            $(".form_health table").each(function(index, name){
                var get_tab_id = $(this).attr("id");
                var name_arr1 = $("[name='"+get_tab_id+"&medical_rec_1[]']");
                var name_arr2 = $("[name='"+get_tab_id+"&medical_rec_2[]']");

                var arr_len  = name_arr1.length;
                var arr2_len  = name_arr2.length;

                var arr1 = new Array();
                var arr2 = new Array();

                for (i = 0; i < arr_len; i++)
                {
                    arr1.push(name_arr1[i].value);
                }

                for (i = 0; i < arr2_len; i++)
                {
                    arr2.push(name_arr2[i].value);
                }
                var isstrspace = 0;

                arr1.forEach(function(item, index, arr) {
                    if (item==null || item=="") {
                        isstrspace ++
                    }
                });

                arr2.forEach(function(item, index, arr) {
                    if (item==null || item=="") {
                        isstrspace ++
                    }
                });

                if(isstrspace!=(arr_len+arr2_len))
                {
                    form_health_arr.push({name:name_arr1.attr("name"),value:arr1})
                    form_health_arr.push({name:name_arr2.attr("name"),value:arr2})
                }
            });
            // var form_health_arr = $('.form_health').serializeArray();

            form_data.append("health_rec", JSON.stringify(form_health_arr));
        }

        // 社會資源應用表格
        if(form_type=="resource")
        {
            form_resource_arr = new Array();

            $(".form_resource table").each(function(index, name){
                var get_tab_id = $(this).attr("id");
                var name_arr1 = $("[name='"+get_tab_id+"&resource_rec_1[]']");

                var arr_len  = name_arr1.length;

                var arr1 = new Array();

                for (i = 0; i < arr_len; i++)
                {
                    arr1.push(name_arr1[i].value);
                }

                var isstrspace = 0;

                arr1.forEach(function(item, index, arr) {
                    if (item==null || item=="") {
                        isstrspace ++
                    }
                });

                if(isstrspace!=arr_len)
                {
                    form_resource_arr.push({name:name_arr1.attr("name"),value:arr1})
                }
            });

            form_data.append("answer", JSON.stringify(form_resource_arr));
        }
        else
        {
            form_data.append("answer", JSON.stringify(form));
        }

        //將其他摘要訊息添加至form_data，other_info用來顯示在case_all.php的各量表摘要表格上
        var other_info = other_info_push(form_type);

        // console.log(other_info)
        // console.log(other_info.length)
        if(other_info.length>0)
        {
            form_data.append("other_info", JSON.stringify(other_info));
        }

        //將填寫日期添加至form_data，fillin_date用來顯示在case_all.php的各量表摘要表格上
        form_data.append("Fillin_date", $("input[name*='fillin_date']").val());


        //若量表無 input type="file"類型資料 則不執行該迴圈
        //量表沒有input type="file"類型資料，customfile會顯示undefined，customfile.length會報錯
        //量表存在input type="file"類型資料，但無任何檔案上傳customfile.length會顯示0
        if(typeof customfile !== 'undefined')
        {
            if(customfile.length!=0)
            {
                for(var i=0; i<customfile.length; i++){
                    form_data.append("file4", customfile[i]);
                    // console.log(customfile[i])
                }
            }
            else
            {
                //載入量表『無重新上傳檔案』情況下按儲存，則加入File_name供後端程式判斷
                form_data.append("File_name", $('[type="file"]').attr("value"));
            }
        }

        // 獲取工作報表所需記數內容
        var case_report_datas = get_case_report_datas(form_type);



        form_data.append("Case_seqid", id);
        form_data.append("Case_id", open_id);
        form_data.append("Form_id", form_id);
        form_data.append("Form_type", form_type);
        form_data.append("Case_name", name);
        form_data.append("Case_pid", pid);
        form_data.append("Case_report", JSON.stringify(case_report_datas));
        form_data.append("Case_storage", storage_type);

        if(storage_type == "storage")
        {
            form_data.append("Supervise1",$("#supervise1").val());
            form_data.append("Supervise2",$("#supervise2").val());

            window.form_type_ch_name = "";
            // window.form_type_tag_num = "#" + form_type + "_tab";

            switch (form_type) {
                case "case":
                    form_type_ch_name = "個案評估表";

                    break;

                case "interlocution":
                    form_type_ch_name = "個案會談紀錄";
                    break;

                case "resource":
                    form_type_ch_name = "社會資源應用表格";
                    break;

                case "life":
                    form_type_ch_name = "生活品質問卷";
                    break;

                case "health":
                    form_type_ch_name = "健康管理評估表";
                    break;

                case "sullen":
                    form_type_ch_name = "憂鬱量表";
                    break;

                case "employment_satif":
                    form_type_ch_name = "就業需求評估表&就業服務滿意度調查表";
                    break;

                case "satif":
                    form_type_ch_name = "服務滿意度量表";
                    break;

                case "familyship":
                    form_type_ch_name = "家庭關係";
                    break;

                case "BSRS5":
                    form_type_ch_name = "BSRS-5量表";
                    break;

                case "settlement":
                    form_type_ch_name = "安置、自立宿舍評估量表";
                    break;
            }

            form_data.append("history_url", history_url + "&form_type=" + form_type);
            form_data.append("case_user", $("#case_user").val());

            form_data.append("title", '開案個案-(' + form_type_ch_name + ')簽核：' + '案號：' + open_id);
            form_data.append("signer", $("#supervise1").val() + "、" + $("#supervise2").val());
            form_data.append("rec_date_time", timenow +" 00:00");
        }


        if(form_type=="case" || form_type=="interlocution")
        {
            var case_report2_datas = get_case_report2_datas();
            form_data.append("Case_report2", JSON.stringify(case_report2_datas));
        }

        //endregion

        // for (var pair of form_data.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]);
        // }

        //傳輸 FormData Oject 格式資料ajax須設定如下
        $.ajax({
            type: 'POST',
            url: 'database/add_update_case_detail_form.php',
            // data: {
            //     Case_id:open_id,
            //     Form_id:form_id,
            //     Form_type:form_type,
            //     Case_name:name,
            //     Case_pid:pid,
            //     answer:form
            // },
            data:form_data,
            contentType:false,
            cache:false,
            processData:false,
            async:true,
            success: function (data) {
                console.log(data)
                //console.log(typeof data)
                if(data == 1){
                    swal({
                        title:'上傳成功！',
                        type:'success',
                    }).then(function(){
                        location.reload();
                    })
                }
            else
            {
                    swal({
                        title:'上傳失敗！請聯絡網站維護人員',
                        type:'error',
                    })
                }
            },
            error: function (e) {
                // console.log(e);
                swal({
                    title:'上傳失敗！請聯絡網站維護人員',
                    type:'error',
                })
            }
        });


        setTimeout(function() {
            submit_detail_click = true;
        }, 5000);//五秒内不能重複點擊

    }
}
//endregion


//個案評估表 同戶籍地址功能region
$(document).on('change', 'input[name="same_address"]', function() {

    var address_val = $("#address").val();

    if(this.checked) {
        swal({
            title: "確認填入同戶籍地址？",
            text: "提示：現「住處地址」內的資料將被覆蓋",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "送出",
            cancelButtonText: "取消",
            showConfirmButton: true,
            showCancelButton: true
        }).then(function(result) {
            if (result) {
                //住處地址value = 戶籍地址value
                $("#residence").val(address_val);
            }
        }, function(dismiss){
            if(dismiss == 'cancel'){
                swal({
                    title:'已取消送出',
                    type:'success',
                })
            }
        }).catch(swal.noop)
    }
});
//endregion

//出入矯正機關 計算約共幾年幾月region
calculation_date = function() {
    var start = $("#correctional_question_start").val();
    var end = $("#correctional_question_end").val();
    var iDays = parseInt(Math.abs(new Date(start) - new Date(end)) / 1000 / 60 / 60 / 24);

    var amount_year = parseInt(iDays / 365);
    var amount_month = parseInt((iDays % 365) / 30);

    if(isNaN(amount_year))
    {
        amount_year = 0
    }
    if(isNaN(amount_month))
    {
        amount_month = 0
    }

    $("#correctional_year").val(amount_year);
    $("#correctional_month").val(amount_month);
}
//endregion


//按下預覽匯出region
$("#preview").on('click', function(){

    location.href = 'four_preview.php?id='+id+'&open_id='+open_id+'&pid='+pid+'&form_id='+form_id+'&form_type='+form_type+'';
});
//endregion

//設定麵包屑返回region
window.history_url = 'case_all.php?name='+name+'&gender='+gender+'&pid='+pid+'&date='+date+'&property='+property+'&type='+type+'&grade='+ grade+'&id='+id+'&open_id='+open_id+'&referral='+referral+'&case_Create_date='+case_Create_date+'&unopen_type='+unopen_type+'&birth='+birth+'';
$("#history").attr('href',history_url);

history_back_btn = function() {
    location.href = history_url;
}

var url2 = 'case_all_all.php?id='+id+'&open_id='+open_id+'';
$("#history2").attr('href',url2);
//endregion

// 轉級 region
$("#trans_grade_submit").on('click', function () {

    swal({
        title: '確認轉級？',
        text: "送出資料後將轉跳至個案紀錄頁面。",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        allowOutsideClick: false, //不可點背景關閉
        confirmButtonText: '確認！',
        cancelButtonText: '取消'
    }).then(function (isConfirm) {
        if (isConfirm) {
            $.ajax({
                url: "database/update_case_trans_grade.php",
                data: {
                    Case_id:open_id,
                    Case_pid:pid,
                    Id:id,
                    Case_grade:$("#case_grade").val(),
                    Case_stage:$("#case_stage").val(),
                },
                type: "POST",
                dataType: "JSON",
                success: function (data) {
                    if (data == 1) {
                        swal({
                            title: '轉級成功！',
                            type: 'success',
                        }).then(function () {
                            window.location.href=url2;
                        })
                    } else {
                        swal({
                            title: '轉級失敗！請聯絡網站維護人員',
                            type: 'error',
                        })
                    }
                },
                error: function (e) {
                    // console.log(e);
                    swal({
                        title: '轉級失敗！請聯絡網站維護人員',
                        type: 'error',
                    })
                }
            });
        }
    });
});
//endregion

// 轉案 region
$("#trans_user_submit").on('click', function () {

    swal({
        title: '確認轉案？',
        text: "送出資料後將轉跳至個案紀錄頁面。",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        allowOutsideClick: false, //不可點背景關閉
        confirmButtonText: '確認！',
        cancelButtonText: '取消'
    }).then(function (isConfirm) {
        if (isConfirm) {
            $.ajax({
                url: "database/update_case_trans_user.php",
                data: {
                    Case_id:open_id,
                    Case_pid:pid,
                    Id:id,
                    Case_user:$("#case_user").val(),
                },
                type: "POST",
                dataType: "JSON",
                success: function (data) {
                    if (data == 1) {
                        swal({
                            title: '轉案成功！',
                            type: 'success',
                        }).then(function () {
                            window.location.href=url2;
                        })
                    } else {
                        swal({
                            title: '轉案失敗！請聯絡網站維護人員',
                            type: 'error',
                        })
                    }
                },
                error: function (e) {
                    // console.log(e);
                    swal({
                        title: '轉案失敗！請聯絡網站維護人員',
                        type: 'error',
                    })
                }
            });
        }
    });
});
//endregion

//結案region
$("#end").on('click', function () {
    swal({
        title: '確認結案？',
        text: "將轉跳至新增結案頁面。",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        allowOutsideClick: false, //不可點背景關閉
        confirmButtonText: '確認！',
        cancelButtonText: '取消'
    }).then(function (isConfirm) {
        if (isConfirm) {

            // var end_indicator_text = $("[name*='end_indicator']").val();
            // var diagnose_main_text = $("[name*='diagnose_main']").val();
            // var diagnose_minor_text = $("[name*='diagnose_minor']").val();
            // var case_closed_yes_text = $("[name*='case_closed_yes']").val();
            // var customFile_text = $("[name*='customFile']").text();
            // var employment_radio_checked = $("[name*='employment_radio']:checked").val();
            // var social_adaptation_radio_checked = $("[name*='social_adaptation_radio']:checked").val();
            // alert(customFile_text)
            // alert(end_indicator_text)
            // alert(diagnose_main_text)
            // alert(case_closed_yes_text)

            // closed_href = 'trans_closed.php?name='+name+'&gender='+gender+'&id='+id+'&open_id='+open_id+'&birth='+birth+'&open_date='+date+'&main_issue='+diagnose_main_text+'&minor_issue='+diagnose_minor_text+'&closed_reason='+end_indicator_text+'&closed_remark='+case_closed_yes_text+'&file='+customFile_text+'&checked_1='+employment_radio_checked+'&checked_2='+social_adaptation_radio_checked+'';

            var local_href = window.location.href;
            var closed_href_str = local_href.split("?")[1];

            closed_href = 'trans_closed.php?'+closed_href_str+'';
            window.open(closed_href);
        }

    });
});
//endregion

//呼叫user方法region
function append_user(){
    $.ajax({
        type:'POST',
        url:'database/find_check_user.php',
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log('test',data)
            for (var index in data.Id) {
                $("#supervise1").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                $("#supervise2").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            }
        },
    });
}
//endregion