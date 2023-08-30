const notyf = new Notyf();

//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//設置麵包屑
var local_href = window.location.href;
var local_href_str = local_href.split("?")[1];

var history1 = local_href_str.split("&form_id")[0];

$("#history").attr('href',"placement_case_all.php?"+history1);
$("#history2").attr('href',"placement_case_all_all.php?"+'id='+ open_seqid +'&open_id='+ open_id);
$(".history3").attr('href',"placement_case_detail.php?"+local_href_str);

//獲取本網址從簡短服務詳細資料網頁(case_detail.php)傳過來的屬性值region
var name = decodeURI(getUrlVars()["name"]);
var gender = decodeURI(getUrlVars()["gender"]);
var open_id = getUrlVars()["open_id"];
var open_seqid = getUrlVars()["id"];
var birth = getUrlVars()["birth"];
var open_date = getUrlVars()["date"];

var form_id = getUrlVars()["form_id"];
var form_type = decodeURI(getUrlVars()["form_type"]);
//endregion



window.customFile = "";
window.main_issue = "";
window.minor_issue = "";

window.other_assessments = "";
// window.evaluation_str = "";
window.closed_reason = "";
window.closed_result = "";

$.ajax({
    url: "database/find_placement_case_forms_data.php",
    data: {
        Open_id:open_id,
        Id:open_seqid,
        Form_id:form_id,
        Form_type:form_type,
    },
    type: "POST",
    dataType: "JSON",
    async: false,
    success: function (data) {

        console.log(data)

        //將ajax結果轉為json
        var data_json = JSON.parse("[" +data[0].answer.replace('\"\[', '\[').replace('\]\"', '\]') + "]");
        // console.log(data_json)
        //依據input的type類型名稱寫入資料，file類型名稱另外寫 region
        $.each(data_json[0], function (i, datan) {

            switch (datan.name) {
                case "customFile1":
                    var file = datan.value.replace("\.\.\/upload\/", "");
                    $("#customFile1").html('<a name="customFile_a" href="./upload/'+file+'" style="text-decoration:none;color:blue;" target="_blank">'+file+'<br/></a><img style="vertical-align:middle;" width="auto" onerror="hideContainer(this)" src="./upload/'+file+'">');
                    
                    customFile = datan.value;
                    break;

                case "diagnose_main":
                    $("[name='main_issue']").val(datan.value);

                    main_issue = datan.value;
                    break;
            
                case "diagnose_minor":
                    $("[name='minor_issue']").val(datan.value);

                    minor_issue = datan.value;
                    break;

                case "other_assessments":
                    other_assessments = datan.value;
                    break;
                
                case "end_indicator":
                    $("[name='closed_reason'][value='"+datan.value+"']").attr('checked',true);
                    
                    closed_reason += datan.value + " ";
                    break;
                
                case "case_closed_yes":
                    $("[id='closed_result']").val(datan.value);

                    closed_result = datan.value;
                    break;

            }

            
        });
        //endregion

    },
    error: function (e) {
        notyf.alert('伺服器錯誤,無法載入');
        console.log(e)
    }
});

var evaluation_default_text = '一、-(已緩解)'+
                                '\n\n\n二、-(已緩解)'+
                                '\n\n\n三、-(                    )'+
                                '\n\n\n四、量表評量成效'+
                                
                                '\n\n7.	整體成效說明：'+
                                '';

var intervention_default_text = '一、'+
                            '\n二、'+
                            '\n三、';                                



//獲取個案評估表既有的資料顯示在新增個案表格中 region
$(document).ready(function(){

    // console.log(sullen_data_str);
    // console.log(life_data_str);
    // console.log(familyship_data_str);


    //抓取今天日期
    var datetoday = moment().format('YYYY-MM-DD');

    $("#open_case_id").html(open_id);
    // $("#closed_id").val("");
    $("#name").val(name);
    $("#gender").val(gender);
    $("#birth").val(birth);

    $("#open_date").val(open_date);
    $("#closed_date").val(datetoday);

    $("#intervention").html(intervention_default_text);
    $("#evaluation").html(evaluation_default_text);

    $.ajax({
        type:'POST',
        url:'database/find_check_user.php',
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log('test',data)
            for (var index in data.Id) {
                $("#social_worker").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                $("#supervise1").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                $("#supervise2").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            }
        },
    });
    $("#social_worker").val(assign_name);

    //獲取最新的結案案號
    // $.ajax({
    //     url: "database/find_closed_id.php",
    //     type: "POST",
    //     dataType: "JSON",
    //     async :false,
    //     success: function (data) {
    //         var str_id = (parseInt(data[0].Closed_id)+1).toString();
    //         $("#closed_id").val(str_id);
    //     },
    //     error:function(e){
    //         notyf.alert('伺服器錯誤,無法載入結案所需資料!');
    //     }
    // });

});
//endregion

hideContainer = function(this_el) {
    $(this_el).hide();
}

//新增至結案 region
$("#trans_closed").on('click',function(){
    var stau = false;

    //判斷必填欄位是否有填寫
    if (check_trans_closed_data() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }

    if(!stau)
    {
        swal({
            title:check_trans_closed_data(),
            type:'error'
          })
    }
    else
    {
        trans_closed_database();
    }


});
//endregion


//結案表(insert)的必填欄位 region
function check_trans_closed_data()
{
    // var closed_id = $("#closed_id").val();
    var closed_date = $("#closed_date").val();
    var main_issue = $("#main_issue").val();
    var minor_issue = $("#minor_issue").val();
    var intervention = $("#intervention").val();
    var evaluation = $("#evaluation").val();

    var closed_reason_checkbox =  $("input[name='closed_reason']:checked").length;
    var closed_reason_other = $("#closed_reason_other").val();
    var user_name = $("#social_worker").val();
    var supervise1 = $("#supervise1").val();
    var supervise2 = $("#supervise2").val();

    var closed_result = $("#closed_result").val();

    var errorstr = "";

    // if (closed_id == null) {
    //     errorstr += "未填寫結案案號!\r\n";
    // }
    if (main_issue == null) {
        errorstr += "未填寫主要問題!\r\n";
    }
    if (minor_issue == null) {
        errorstr += "未填寫次要問題!\r\n";
    }
    if (intervention == null) {
        errorstr += "未填寫問題處遇!\r\n";
    }
    if (evaluation.replace(/\s*/g, "") == '') {
        errorstr += "未填寫成效評估!\r\n";
    }
    if (user_name == null) {
        errorstr += "未填寫社工員!\r\n";
    }
    if (supervise1 == null) {
        errorstr += "未填寫督導!\r\n";
    }
    if (supervise2 == null) {
        errorstr += "未填寫執行長!\r\n";
    }
    if (closed_date == null) {
        errorstr += "未填寫結案日期!\r\n";
    }
    if (closed_result == null) {
        errorstr += "未填寫結案指標內容!\r\n";
    }
    if (errorstr == "") {
        if(closed_reason_other !=null || closed_reason_other!="")
        {
            if (closed_reason_checkbox <=0) {
                errorstr += "未勾選結案原因\r\n";
            }
        }
        if($("[name='closed_reason'][value='other']").is(":checked"))
        {
            if(closed_reason_other ==null || closed_reason_other=="")
            {
                errorstr += "未填寫其他結案原因內容!\r\n";
            }
        }
        // if (closed_id.replace(/\s*/g, "") == '') {
        //     errorstr += "未填寫結案案號!\r\n";
        // }
        if (main_issue.replace(/\s*/g, "") == '') {
            errorstr += "未填寫主要問題!\r\n";
        }
        if (minor_issue.replace(/\s*/g, "") == '') {
            errorstr += "未填寫次要問題!\r\n";
        }
        if (intervention.replace(/\s*/g, "") == '') {
            errorstr += "未填寫問題處遇!\r\n";
        }
        if (evaluation.replace(/\s*/g, "") == '') {
            errorstr += "未填寫成效評估!\r\n";
        }
        if (user_name.replace(/\s*/g, "") == '') {
            errorstr += "未填寫社工員!\r\n";
        }
        if (supervise1.replace(/\s*/g, "") == '') {
            errorstr += "未填寫督導!\r\n";
        }
        if (supervise2.replace(/\s*/g, "") == '') {
            errorstr += "未填寫執行長!\r\n";
        }
        if (closed_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫結案日期!\r\n";
        }
        if (closed_result.replace(/\s*/g, "") == '') {
            errorstr += "未填寫結案指標內容!\r\n";
        }
    }

    return errorstr;
}
//endregion


//新增至結案資料庫 region
function trans_closed_database()
{
    // console.log($("#open_date").val())
    $.ajax({
        url: "database/add_new_closed_v2.php",
        type: "POST",
        data:{
            Open_case_id:open_id,
            Open_case_seqid:open_seqid,
            Name:$("#name").val(),
            Gender:$("#gender").val(),
            Birth:birth,
            Open_date:open_date,
            Closed_date:$("#closed_date").val(),
            File_name:file,
            Main_issue:$("#main_issue").val(),
            Minor_issue:$("#minor_issue").val(),
            Intervention:$("#intervention").val(),
            Evaluation:$("#evaluation").val(),
            Closed_reason:$("[name='closed_reason']:checked").val(),
            Closed_result:$("#closed_result").val(),
            Remark:$("#remark").val(),
            Assign:$("#social_worker").val(),
            Supervise1:$("#supervise1").val(),
            Supervise2:$("#supervise2").val(),
        },
//            dataType: "JSON",
        success: function (data) {
            console.log(data);
            if(data == 1){
                swal({
                    type: 'success',
                    title: '新增成功!',
                    allowOutsideClick: false //不可點背景關閉
                    }).then(function () {
                        window.location.replace("closed.php"); 
                    })
            }else{
                swal({
                    type: 'error',
                    title: '新增失敗!請聯絡負責人',
                    allowOutsideClick: false //不可點背景關閉
                    }).then(function () {
                        location.reload();
                    })
            }  
        },
            error: function (e) {
                swal({
                    type: 'error',
                    title: '新增失敗!請聯絡負責人',
                    allowOutsideClick: false //不可點背景關閉
                }).then(function () {
                    location.reload();
                })
                console.log(e)
            }
    });
}
//endregion