//取得url id值region

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

$(function() {
    imagePreview();  
    
    //jsignature插件初始化 region
    jsignature_initialization();
    //endregion

    //隱藏jsignature畫布區域 region
    $("#signature_area").hide();
    //endregion 
});

const notyf = new Notyf();

//設置存放有資料的量表名稱之陣列
var form_type_arr = [];

//填寫資料(輔導紀錄)region
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

var form_type = getUrlVars()["form_type"];


case_url = 'case_detail.php?name='+name+'&gender='+gender+'&pid='+pid+'&date='+date+'&property='+ property +'&type='+ type+'&grade='+ grade+'&id='+id+'&open_id='+open_id+'&referral='+referral+'&case_Create_date='+case_Create_date+'&unopen_type='+unopen_type+'&birth='+birth+'';
// console.log(case_url);
// console.log(name, date, grade, property, type, id, open_id, addition, age, gender);

// $(".case_addiction").text(addition);
//endregion

window.sign_name_type = "";


//抓所有量表region
$(document).ready(function () {
       
    // 顯示摘要表重要資訊(姓名、開案日期、個案類別、類別屬性、接案工作人員...)
    $.ajax({
        url: "database/find_case.php",
        data: {
            Open_id:open_id,
            Id:id
        },
        type: "POST",
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log(data);
            $(".case_user").text(data[0].Case_assign);
        },
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入');
         }
    });

    $(".case_name").text(name);
    $(".case_date").text(date);
    $(".case_object_type").text(type);
    $(".case_property_type").text(property);

    //設定麵包屑返回region
    var url = 'case_all_all.php?id='+id+'&open_id='+open_id+'';

    $("#history").attr('href',url);
    //獲取有資料的量表
    load_form_type_array();

    if(form_type !== undefined)
    {
        $('#myTab a[href="#' + form_type + '_tab"]').tab('show');
    }
    else
    {
        tab_toggle();
    }
    imagePreview();  
});
//endregion

back_case_all_all = function() {
    localStorage.removeItem('activeTab');
    window.location.href = 'case_all_all.php?id='+id+'&open_id='+open_id+'';
}

function load_form_type_array()
{
    $.ajax({
        url: "database/find_case_all.php",
        data: {
            Open_id:open_id,
            Id:id
            },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            // console.log(data)
            $.each(data,function(index,value){
                
                form_type_arr.push(value.Form_name);
            })
            
            //顯示所有量表資料摘要
            load_each_form();
        },
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入');
        }
    });
}

//載入所有量表資料摘要region
function load_each_form()
{
    var id = getUrlVars()["id"];
    var open_id = getUrlVars()["open_id"];
    var pid =getUrlVars()["pid"];
    var name = decodeURIComponent(getUrlVars()["name"]);

    $.each(form_type_arr,function(sq,form_name){

        $.ajax({
            url: "database/find_case_all.php",
            data: {
                Open_id:open_id,
                Id:id,
                Form_type:form_name
            },
            type: "POST",
            dataType: "JSON",
            success: function (data) {

                var cssstring ="";


                // console.log(data)
                $.each(data,function(index,value){

                    var supervise1_sign_arr = datatable_sign_show('supervise1', value.Supervise1, value.Supervise1_signature, value.Supervise1_sign_time, value.Supervise1_sign_msg);
                    var supervise2_sign_arr = datatable_sign_show('supervise2', value.Supervise2, value.Supervise2_signature, value.Supervise2_sign_time, value.Supervise2_sign_msg);

                    var sign_str = "";

                    var sign_btn_str = "";

                    var bg_color = "";

                    if(supervise1_sign_arr[0] == "" && supervise2_sign_arr[0] == "")
                    {
                        sign_str = "";
                        bg_color = "none";
                    }
                    else
                    {
                        if(supervise1_sign_arr[0] != "")
                        {
                            sign_str += supervise1_sign_arr[0] + supervise1_sign_arr[1] + "<br/>";
                        }

                        if(supervise2_sign_arr[0] != "")
                        {
                            sign_str += supervise2_sign_arr[0] + supervise2_sign_arr[1];
                        }

                        if(login_user_name == supervise1_sign_arr[0])
                        {
                            sign_name_type = "supervise1";
                        }
                        else if(login_user_name == supervise2_sign_arr[0])
                        {
                            sign_name_type = "supervise2";
                        }
                        

                        if(supervise1_sign_arr[1].includes("已簽章") && supervise2_sign_arr[1].includes("已簽章"))
                        {
                            bg_color = "#90ee90";
                        }
                        else
                        {
                            bg_color = "#f4fc3b";
                        }
                        
                        // sign_btn_str += '<button style="margin:.5em;color:red;" type="button" onclick="signature_btn_click();">簽名</button><br/>'+
                        // '<button style="margin:.5em;" type="button" id="signature_msg_btn" onclick="sign_msg_model();" data-toggle="modal" data-target="#myModal2">查看留言</button><br/>'+
                        // '<a src="" id="signature_simg" style="color:blue;" target="_blank" alt="簽名圖片連結"></a>';

                        sign_btn_str += '<button style="margin:.5em;color:red;" type="button" onclick="signature_btn_click(this);" board_type="'+form_name+'" sign_info="'+value.Id+"_"+value.Case_seqid+"_"+value.Case_id+'">簽名</button><br/>';
                    }
                    
                    // console.log(supervise1_sign_arr)

                    if(value.Is_upload==0)
                    {
                        //獲取相對應td字串格式
                        var othercssstring = load_forms_other_row(form_name,index);

                        if(form_name=="interlocution")
                        {
                            cssstring += 
                            '<tr name="'+form_name+'_num[]" id="'+value.Id+"_"+value.Case_seqid+"_"+value.Case_id+'">'+
                                '<td>'+value.Form_Create_date+'</td>'+
                                '<td>線上建檔</td>'+
                                othercssstring+
                                '<td><a href="'+case_url+'&form_id='+value.Id+'&form_type='+value.Form_name+'">點擊進入</a></td>'+
                                '<td>'+value.Remark+'</td>'+
                                '<td style="background-color:'+bg_color+';">'+sign_str+'</td>'+
                                '<td>'+sign_btn_str+'</td>'+
                            '</tr>';
                        }
                        else if(form_name=="resource")
                        {
                            cssstring += 
                            '<tr name="'+form_name+'_num[]" id="'+value.Id+"_"+value.Case_seqid+"_"+value.Case_id+'">'+
                                '<td>'+value.Form_Create_date+'</td>'+
                                '<td>線上建檔</td>'+
                                '<td><a href="'+case_url+'&form_id='+value.Id+'&form_type='+value.Form_name+'">點擊進入</a></td>'+
                                '<td>'+value.Remark+'</td>'+
                                '<td style="background-color:'+bg_color+';">'+sign_str+'</td>'+
                                '<td>'+sign_btn_str+'</td>'+
                            '</tr>';
                        }
                        else if(form_name=="BSRS5")
                        {
                            cssstring += 
                            '<tr name="'+form_name+'_num[]" id="'+value.Id+"_"+value.Case_seqid+"_"+value.Case_id+'">'+
                                '<td>'+value.Form_Create_date+'</td>'+
                                '<td>線上建檔</td>'+
                                othercssstring+
                                '<td><a href="'+case_url+'&form_id='+value.Id+'&form_type='+value.Form_name+'">點擊進入</a></td>'+
                                '<td>'+value.Remark+'</td>'+
                                '<td style="background-color:'+bg_color+';">'+sign_str+'</td>'+
                                '<td>'+sign_btn_str+'</td>'+
                            '</tr>';
                        }
                        else
                        {
                            cssstring += 
                            '<tr name="'+form_name+'_num[]" id="'+value.Id+"_"+value.Case_seqid+"_"+value.Case_id+'">'+
                                '<td>'+value.Form_Create_date+'</td>'+
                                '<td>'+value.Fillin_date+'</td>'+
                                '<td>線上建檔</td>'+
                                othercssstring+
                                '<td><a href="'+case_url+'&form_id='+value.Id+'&form_type='+value.Form_name+'">點擊進入</a></td>'+
                                '<td>'+value.Remark+'</td>'+
                                '<td style="background-color:'+bg_color+';">'+sign_str+'</td>'+
                                '<td>'+sign_btn_str+'</td>'+
                            '</tr>';
                        }
                    }
                    else
                    {
                        // console.log(value.Upload_info)

                        var upload_info_json = JSON.parse("[" +value.Upload_info.replace('\"\[', '\[').replace('\]\"', '\]') + "]");
                        
                        var td_str = "";
                        // console.log(upload_info_json[0])
                        $.each(upload_info_json[0], function (i, datan) {
                        if(datan.name.includes("file"))
                        {
                            td_str+='<td><a href="upload/case_all/'+datan.value+'" style="text-decoration:none;color:blue;" target="_blank">'+
                            '<img style="vertical-align:middle;" width="20px" src="image/file-pdf.svg">'+datan.value+'</a></td>';
                        } 
                        else if(!datan.name.includes("supervise"))
                        {
                            td_str+='<td>'+datan.value+'</td>';
                        }
                        // else
                        // {
                        //     td_str+='<td>'+datan.value+'</td>';
                        // }
                        });
                        cssstring += 
                        '<tr name="'+form_name+'_num[]" id="'+value.Id+"_"+value.Case_seqid+"_"+value.Case_id+'">'+
                        td_str+
                        '<td>'+ '<button data-toggle="modal" sql_data="'+ form_name+"_"+value.Id+'" onclick="load_update_upload_data(this);">修改</button>' +
                        '<br/>' +
                        '<button style="margin-top:.5em;" sql_data="'+ form_name+"_"+value.Id+'" onclick="load_delete_upload_data(this);">刪除</button>' +
                        '</td>'+
                        '<td style="background-color:'+bg_color+';">'+sign_str+'</td>'+
                        '<td>'+sign_btn_str+'</td>'+
                        '</tr>';
                    }
                })


                $("#"+form_name+"_all").append(cssstring);

                $.each(data,function(index,value){
                    
                    var data_json = JSON.parse("[" +value.Other_info.replace('\"\[', '\[').replace('\]\"', '\]') + "]");

                    if(data_json.length>0)
                    {
                        $.each(data_json[0], function (i, datan) {
                            $("[name='"+datan.name+index+"']").eq(i).html(datan.value);
                        });
                    }
                })
            },
            error: function (e) {
                notyf.alert('伺服器錯誤,無法載入');
            }
        });
    });
}
//endregion

//依據量表類型名稱載入相對應td字串格式region
function load_forms_other_row(form_type,index)
{
    var str = "";
    switch (form_type) {
        case 'interlocution':
            str +=
            '<td name="'+form_type+index+'"></td>'+
            '<td name="'+form_type+index+'"></td>'+
            '<td name="'+form_type+index+'"></td>';
            break;
        case 'familyship':
        case 'BSRS5':
        case 'life':
            str +=
            '<td name="'+form_type+index+'"></td>'+
            '<td name="'+form_type+index+'"></td>';
            break;

        case 'case':
        case 'satif':
        case 'employment_satif':
        case 'settlement':
            str +=
            '<td name="'+form_type+index+'"></td>';
            break;

        case 'health':
        case 'resource':
            str +='';
            break;
    }

    return str;
}
//endregion


//點擊刪除按鈕時，載入表單的sql id region
load_delete_upload_data = function(this_btn) {
    var form_name_sql_id = $(this_btn).attr("sql_data");
    var sql_id_str = form_name_sql_id.split("_")[1];

    $("#delete_upload_data_modal").modal('show');
    $("#delete_upload_data_btn").attr("sql_id", sql_id_str);
}
//endregion

//點擊確認刪除上傳的檔案（憂鬱量表、BSRS5量表） region
$("#delete_upload_data_btn").on('click',function(){
    if($("#input_user_password").val() == login_user_pwd)
    {
        delete_upload_data();
    }
    else
    {
        swal({
            title:'請輸入正確的使用者密碼',
            type:'error',                        
        })
    }
});    
//endregion

// 刪除上傳的檔案（憂鬱量表、BSRS5量表） region
delete_upload_data = function() {
    
    var attr_sql_id = $("#delete_upload_data_btn").attr("sql_id");

    $.ajax({
        url: "database/delete_case_all_upload.php",
        type: "POST",
        data: {
            Id:attr_sql_id,
        },
        // dataType: "JSON", // 若要傳回字串 如：noallow，不可設定為json格式
        success: function (data) {
            // console.log(data)
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
                    title:'上傳失敗！請聯絡負責單位',
                    type:'error',
                })
            }
        },
        error: function (e) {
            console.log(e);
            swal({
                title:'上傳失敗！請聯絡負責單位',
                type:'error',
            })
        }
    });

}
//endregion

window.type_sql_orignal_name = [];
// window.type2_sql_orignal_name = [];

// 點擊修改按鈕時，載入原本的內容 region
load_update_upload_data = function(this_btn) {
    
    var form_name_sql_id = $(this_btn).attr("sql_data");
    var form_name_str = form_name_sql_id.split("_")[0];
    var sql_id_str = form_name_sql_id.split("_")[1];


        load_update_type_data(sql_id_str, form_name_str);

        $("#update_upload_data_modal").modal('show');

        $("#modal_btn").attr("sql_id", sql_id_str);
        $("#modal_btn").attr("upload_form_type", form_name_str);
}
//endregion

// 資料庫查詢量表，載入原本的內容 region
load_update_type_data = function(sql_id_str, form_type_str) {
    
    $.ajax({
        url: "database/find_case_all_upload.php",
        data: {
            Id:sql_id_str
            },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            // console.log(data)
            $.each(data,function(index,value){
                var upload_info_json = JSON.parse("[" +value.Upload_info.replace('\"\[', '\[').replace('\]\"', '\]') + "]");
                        
                type_sql_orignal_name = [];

                var table_html_str = "";

                // 根據name名稱產生html內容，輸入框、下拉式選單、日期填寫等
                $.each(upload_info_json[0], function (i, datan) {
                    type_sql_orignal_name.push(datan.name);

                    var data_name_input_str ="";
                    var th_ch_name = get_case_all_th_ch_name(datan.name);

                    if(datan.name.includes("create_date_"))
                    {
                        data_name_input_str ='<input name="'+datan.name+'" type="date" disabled="disabled"/>';
                    }
                    else if(datan.name.includes("fillin_date_"))
                    {
                        data_name_input_str ='<input name="'+datan.name+'" type="date"/>';
                    }
                    else if(datan.name.includes("add_new_type"))
                    {
                        data_name_input_str ='<input name="'+datan.name+'" type="text" disabled="disabled"/>';
                    }
                    else if(datan.name.includes("upload_date"))
                    {
                        data_name_input_str ='<input name="'+datan.name+'" type="date" disabled="disabled"/>';
                    }
                    else if(datan.name.includes("result_score"))
                    {
                        data_name_input_str = '<textarea style="width:12em;resize: none;font-size: 20px;min-height:8em;" name="'+datan.name+'" placeholder="'+th_ch_name+'"></textarea>';
                    }
                    else if(datan.name.includes("score"))
                    {
                        data_name_input_str ='<input name="'+datan.name+'" type="text"/>';
                    }
                    else if(datan.name.includes("test_type"))
                    {
                        data_name_input_str ='<select name="'+datan.name+'">'+
                        '<option value="">請選擇</option>'+
                        '<option value="前測">前測</option>'+
                        '<option value="中測">中測</option>'+
                        '<option value="後測">後測</option>'+
                        '</select>';
                    }
                    else if(datan.name.includes("remark"))
                    {
                        data_name_input_str = '<textarea style="width:12em;resize: none;font-size: 20px;min-height:8em;" name="'+datan.name+'" placeholder="'+th_ch_name+'"></textarea>';
                    }
                    else if(datan.name.includes("interlocution_date"))
                    {
                        data_name_input_str ='<input name="'+datan.name+'" type="date"/>';
                    }
                    else if(datan.name.includes("interlocution_ques"))
                    {
                        data_name_input_str = '<textarea style="width:12em;resize: none;font-size: 20px;min-height:8em;" name="'+datan.name+'" placeholder="'+th_ch_name+'"></textarea>';
                    }
                    else if(datan.name.includes("assign_name"))
                    {
                        data_name_input_str ='<input name="'+datan.name+'" type="text"/>';
                    }
                    else if(datan.name.includes("dispose"))
                    {
                        data_name_input_str = '<textarea style="width:12em;resize: none;font-size: 20px;min-height:8em;" name="'+datan.name+'" placeholder="'+th_ch_name+'"></textarea>';
                    }
                    else if(datan.name.includes("file"))
                    {
                        var file_str = '<a href="upload/case_all/'+datan.value+'" style="text-decoration:none;color:blue;" target="_blank">'+
                        '<img style="vertical-align:middle;" width="20px" src="image/file-pdf.svg">'+datan.value+'</a>';
                    
                        table_html_str +=
                        '<tr style="text-align:left">' +
                            '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">上傳檔案</td>' +
                            '<td style="border-bottom: solid 1px;">' +
                                '<div class="col-sm-12">' +
                                    '<div class="text-left">' +
                                        '<input name="'+datan.name+'" type="file" value="'+datan.value+'"/>' +
                                        '<br>' +
                                        '<div id="'+datan.name+'">'+file_str+'</div>' +
                                    '</div>' +
                                '</div>' +
                                '<br/>' +
                                '<span style="color:blue;">' +                   
                                    '※原先的檔案將會被刪除或覆蓋' +
                                '</span>' +
                            '</td>' +
                        '</tr>';
                        
                        // $("#"+datan.name).html(file_str);
                        // $('[name="'+datan.name+'"]').attr("value",datan.value);
                    }

                    if(datan.name.indexOf("file") == -1)
                    {
                        table_html_str +=
                        '<tr style="text-align:left">' +
                            '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">'+ th_ch_name +'</td>' +
                            '<td style="border-bottom: solid 1px;">' +
                                '<div class="col-sm-12">' +
                                    '<div class="text-left">' +
                                        data_name_input_str +
                                    '</div>' +
                                '</div>' +
                            '</td>' +
                        '</tr>';
                    }
                    
                });

                $("#update_upload_all_data").html(table_html_str);

                // 將值填入上面產生好的表格內的輸入框、下拉式選單、日期欄位等元素中
                $.each(upload_info_json[0], function (i, datan) {
                    if(datan.name.indexOf("file") == -1)
                    {
                        $('[name="' + datan.name + '"]').val(datan.value);
                    }
                });

                // console.log(type_sql_orignal_name)
            });
        },
        error: function (e) {
            notyf.alert('伺服器錯誤,無法載入');
        }
    });
}
//endregion


// 依據從資料庫獲取的欄位英文變數找到對應的中文欄位名稱 region
function get_case_all_th_ch_name(upload_data_name) 
{
    var ch_name = "";

    if(upload_data_name.includes("create_date_"))
    {
        ch_name = "建立日期";
    }
    else if(upload_data_name.includes("fillin_date_"))
    {
        ch_name = "填表日期";
    }
    else if(upload_data_name.includes("add_new_type"))
    {
        ch_name = "類型";
    }
    else if(upload_data_name.includes("upload_date"))
    {
        ch_name = "上傳日期";
    }
    else if(upload_data_name.includes("result_score"))
    {
        ch_name = "得分/結果";
    }
    else if(upload_data_name.includes("score"))
    {
        ch_name = "總分";
    }
    else if(upload_data_name.includes("test_type"))
    {
        ch_name = "前/中/後測";
    }
    else if(upload_data_name.includes("file"))
    {
        ch_name = "上傳檔案";
    }
    else if(upload_data_name.includes("remark"))
    {
        ch_name = "備註";
    }
    else if(upload_data_name.includes("interlocution_date"))
    {
        ch_name = "會談日期";
    }
    else if(upload_data_name.includes("interlocution_ques"))
    {
        ch_name = "問題陳述";
    }
    else if(upload_data_name.includes("assign_name"))
    {
        ch_name = "社工/關懷員";
    }
    else if(upload_data_name.includes("dispose"))
    {
        ch_name = "處置情形";
    }

    return ch_name;
}
//endregion

// 修改上傳的檔案和資料（憂鬱量表、BSRS5量表） region
update_upload_data = function(this_btn) {

    var attr_sql_id = $(this_btn).attr("sql_id");
    var attr_upload_form_type = $(this_btn).attr("upload_form_type");


    var update_file = $("[name*=file]").prop("files").length;

    window.submit_data  = new FormData();

    var form_data_json = [];

    $.each(type_sql_orignal_name, function (id, val) {
        if(val.indexOf("file") != -1)
        {
            form_data_json.push({name: val,value:$("[name='"+val+"']").val().replace("C:\\fakepath\\", "")});
        }
        else
        {
            form_data_json.push({ name: val, value:  $("[name='"+val+"']").val()});
        }
    });

    $("[name*=file]").each(function(index, element) {
        var update_files = $(this).prop("files");
        // console.log(update_files.length)
        
        if (update_files != undefined) {
            if (update_files.length != 0) 
            {
            for (var i = 0; i < update_files.length; i++) {
                // console.log(update_files[i])
                submit_data.append("files", update_files[i]);
            }
            }
        }
    });

    submit_data.append("Id", attr_sql_id);
    submit_data.append("upload_content", JSON.stringify(form_data_json));
    
    // for (var pair of submit_data.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]); 
    // }

    
    $.ajax({
        url: "database/update_case_all_upload.php",
        type: "POST",
        data:submit_data,
        contentType:false,
        cache:false,
        processData:false,
        async:true,
        success: function (data) {
            // console.log(data)
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
                    title:'上傳失敗！請聯絡負責單位',
                    type:'error',
                })
            }
        },
        error: function (e) {
            console.log(e);
            swal({
                title:'上傳失敗！請聯絡負責單位',
                type:'error',
            })
        }
    });

    // //判斷檔案是否上傳
    // if(update_file > 0)
    // {
        
    // }
    // else
    // {
    //     swal({
    //         title:'請選擇要上傳的檔案',
    //         type:'error',                        
    //     })
    // }
}  
//endregion

//點擊新增各表(個案評估表、會談紀錄、社會資源應用表格、生活品質量表、健康量表、就業滿意度、滿意度量表、家庭關係、BSRS-5量表、安置自立宿舍評估表)region
form_add_new = function(obj){
    //Time Now
    var timenow = moment().format('YYYY/MM/DD');
    //獲取該物件id
    var obj_id = obj.id;
    //獲取該物件名稱(固定格式命名規則)
    var obj_name = obj_id.replace("_add_new", "");
    //獲取物件table內tbody標籤id名
    var obj_tbody = obj_id.replace("_add_new", "_full_add");
    //獲取tbody內tr的name名
    var num_name = obj_id.replace("_add_new", "_num[]");
    //獲取該tr name名的長度
    var num = document.getElementsByName(num_name).length;
    //獲取該table的id名
    var obj_table = obj_id.replace("_add_new", "_all");
    //獲取該table的th之長度
    var th_len = $("#"+obj_table+" th").length;
    
    //空的td標籤
    var empty_td = '<td></td>';
    //除了 建立日期、填表日期、最末端的量表內容，三位置之外都生成 空的td標籤
    // empty_td = empty_td.repeat(th_len-8);

    if(obj_name=="case" || obj_name=="settlement")
    {
        var cssstring = 
        '<tr name="'+num_name+'">'+
            '<td><span id="create_date_'+obj_name+num+'">'+timenow+'</span></td>'+
            '<td><input id="fillin_date_'+obj_name+num+'" type="date"></td>'+
            '<td>'+
            '<select id="add_new_type'+obj_name+num+'" num="'+num+'" obj_name="'+obj_name+'" onchange="add_new_type_onchange(this)">'+
                '<option value="上傳檔案">上傳檔案</option>'+
                '<option value="線上建檔" selected>線上建檔</option>'+
            '</select>'+
            '</td>'+
            '<td id="result_td'+obj_name+num+'"></td>'+
            '<td id="content_type_td'+obj_name+num+'"></td>'+
            '<td><input id="remark'+obj_name+num+'" type="text"></td>'+
            '<td></td>'+
            '<td id="signer_set_td'+obj_name+num+'"></td>'+
            '<td></td>'+
        '</tr>'+
        '<tr>'+
        '<td colspan="'+th_len+'"><button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button></td>'+
        '</tr>';
    }
    else if(obj_name=="interlocution")
    {
        var cssstring = 
        '<tr name="'+num_name+'">'+
            '<td><span id="create_date_'+obj_name+num+'">'+timenow+'</span></td>'+
            '<td>'+
            '<select id="add_new_type'+obj_name+num+'" num="'+num+'" obj_name="'+obj_name+'" onchange="add_new_type_onchange(this)">'+
                '<option value="上傳檔案">上傳檔案</option>'+
                '<option value="線上建檔" selected>線上建檔</option>'+
            '</select>'+
            '</td>'+
            '<td id="interlocution_date_td'+obj_name+num+'"></td>'+
            '<td id="interlocution_ques_td'+obj_name+num+'"></td>'+
            '<td id="assign_name_td'+obj_name+num+'"></td>'+
            '<td id="content_type'+obj_name+num+'"></td>'+
            '<td><input id="remark'+obj_name+num+'" type="text"></td>'+
            '<td></td>'+
            '<td id="signer_set_td'+obj_name+num+'"></td>'+
            '<td></td>'+
        '</tr>'+
        '<tr>'+
        '<td colspan="'+th_len+'"><button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button></td>'+
        '</tr>';
    }
    else if(obj_name=="resource")
    {
        var cssstring = 
        '<tr name="'+num_name+'">'+
            '<td><span id="create_date_'+obj_name+num+'">'+timenow+'</span></td>'+
            '<td>'+
            '<select id="add_new_type'+obj_name+num+'" num="'+num+'" obj_name="'+obj_name+'" onchange="add_new_type_onchange(this)">'+
                '<option value="上傳檔案">上傳檔案</option>'+
                '<option value="線上建檔" selected>線上建檔</option>'+
            '</select>'+
            '</td>'+
            '<td id="content_type'+obj_name+num+'"></td>'+
            '<td><input id="remark'+obj_name+num+'" type="text"></td>'+
            '<td></td>'+
            '<td id="signer_set_td'+obj_name+num+'"></td>'+
            '<td></td>'+
        '</tr>'+
        '<tr>'+
        '<td colspan="'+th_len+'"><button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button></td>'+
        '</tr>';
    }
    else if(obj_name=="life")
    {
        var cssstring = 
            '<tr name="'+num_name+'">'+
                '<td><span id="create_date_'+obj_name+num+'">'+timenow+'</span></td>'+
                '<td><input id="fillin_date_'+obj_name+num+'" type="date"></td>'+
                '<td>'+
                '<select id="add_new_type'+obj_name+num+'" num="'+num+'" obj_name="'+obj_name+'" onchange="add_new_type_onchange(this)">'+
                    '<option value="上傳檔案">上傳檔案</option>'+
                    '<option value="線上建檔" selected>線上建檔</option>'+
                '</select>'+
                '</td>'+
                '<td id="result_score_td'+obj_name+num+'"></td>'+
                '<td id="test_type_td'+obj_name+num+'"></td>'+
                '<td id="content_type'+obj_name+num+'"></td>'+
                '<td><input id="remark'+obj_name+num+'" type="text"></td>'+
                '<td></td>'+
                '<td id="signer_set_td'+obj_name+num+'"></td>'+
                '<td></td>'+
            '</tr>'+
            '<tr>'+
            '<td id="store_btn'+obj_name+num+'" colspan="'+th_len+'"><button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button></td>'+
            '</tr>';
    }
    else if(obj_name=="health")
    {
        var cssstring = 
            '<tr name="'+num_name+'">'+
                '<td><span id="create_date_'+obj_name+num+'">'+timenow+'</span></td>'+
                '<td><input id="fillin_date_'+obj_name+num+'" type="date"></td>'+
                '<td>'+
                '<select id="add_new_type'+obj_name+num+'" num="'+num+'" obj_name="'+obj_name+'" onchange="add_new_type_onchange(this)">'+
                    '<option value="上傳檔案">上傳檔案</option>'+
                    '<option value="線上建檔" selected>線上建檔</option>'+
                '</select>'+
                '</td>'+
                '<td id="content_type'+obj_name+num+'"></td>'+
                '<td><input id="remark'+obj_name+num+'" type="text"></td>'+
                '<td></td>'+
                '<td id="signer_set_td'+obj_name+num+'"></td>'+
                '<td></td>'+
            '</tr>'+
            '<tr>'+
            '<td id="store_btn'+obj_name+num+'" colspan="'+th_len+'"><button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button></td>'+
            '</tr>';
    }
    else if(obj_name=="employment_satif" || obj_name=="satif")
    {
        var cssstring = 
            '<tr name="'+num_name+'">'+
                '<td><span id="create_date_'+obj_name+num+'">'+timenow+'</span></td>'+
                '<td><input id="fillin_date_'+obj_name+num+'" type="date"></td>'+
                '<td>'+
                '<select id="add_new_type'+obj_name+num+'" num="'+num+'" obj_name="'+obj_name+'" onchange="add_new_type_onchange(this)">'+
                    '<option value="上傳檔案">上傳檔案</option>'+
                    '<option value="線上建檔" selected>線上建檔</option>'+
                '</select>'+
                '</td>'+
                '<td id="score_td'+obj_name+num+'"></td>'+
                '<td id="content_type'+obj_name+num+'"></td>'+
                '<td><input id="remark'+obj_name+num+'" type="text"></td>'+
                '<td></td>'+
                '<td id="signer_set_td'+obj_name+num+'"></td>'+
                '<td></td>'+
            '</tr>'+
            '<tr>'+
            '<td id="store_btn'+obj_name+num+'" colspan="'+th_len+'"><button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button></td>'+
            '</tr>';
    }
    else if(obj_name=="familyship")
    {
        var cssstring = 
            '<tr name="'+num_name+'">'+
                '<td><span id="create_date_'+obj_name+num+'">'+timenow+'</span></td>'+
                '<td><input id="fillin_date_'+obj_name+num+'" type="date"></td>'+
                '<td>'+
                '<select id="add_new_type'+obj_name+num+'" num="'+num+'" obj_name="'+obj_name+'" onchange="add_new_type_onchange(this)">'+
                    '<option value="上傳檔案">上傳檔案</option>'+
                    '<option value="線上建檔" selected>線上建檔</option>'+
                '</select>'+
                '</td>'+
                '<td id="score_td'+obj_name+num+'"></td>'+
                '<td id="test_type_td'+obj_name+num+'"></td>'+
                '<td id="content_type'+obj_name+num+'"></td>'+
                '<td><input id="remark'+obj_name+num+'" type="text"></td>'+
                '<td></td>'+
                '<td id="signer_set_td'+obj_name+num+'"></td>'+
                '<td></td>'+
            '</tr>'+
            '<tr>'+
            '<td id="store_btn'+obj_name+num+'" colspan="'+th_len+'"><button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button></td>'+
            '</tr>';
    }
    else if(obj_name=="BSRS5")
    {
        var cssstring = 
            '<tr name="'+num_name+'">'+
                '<td><span id="create_date_'+obj_name+num+'">'+timenow+'</span></td>'+
                '<td>'+
                '<select id="add_new_type'+obj_name+num+'" num="'+num+'" obj_name="'+obj_name+'" onchange="add_new_type_onchange(this)">'+
                    '<option value="上傳檔案">上傳檔案</option>'+
                    '<option value="線上建檔" selected>線上建檔</option>'+
                '</select>'+
                '</td>'+
                '<td id="score_td'+obj_name+num+'"></td>'+
                '<td id="dispose_td'+obj_name+num+'"></td>'+
                '<td id="content_type'+obj_name+num+'"></td>'+
                '<td><input id="remark'+obj_name+num+'" type="text"></td>'+
                '<td></td>'+
                '<td id="signer_set_td'+obj_name+num+'"></td>'+
                '<td></td>'+
            '</tr>'+
            '<tr>'+
            '<td id="store_btn'+obj_name+num+'" colspan="'+th_len+'"><button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button></td>'+
            '</tr>';
    }

        //對應的tobody內寫入cssstring
        $("#"+obj_tbody).append(cssstring);
        
        //只能按一次
        var btn = $(obj); 
        btn.prop('disabled',true); 
}
//endregion

    
//點擊儲存到case_all資料庫region
function store(num, form_name){
    
    swal({
        title: "確認建立量表？",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "確認送出",
        cancelButtonText: "取消",
        showConfirmButton: true,
        showCancelButton: true
    }).then(function(result) {
        if (result) {
            store_submit_datas(num, form_name);
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


store_submit_datas = function(num, form_name) {
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
    

    // console.log($('#create_date_'+form_name+num).text().replace(/\//g, "-"));
    // console.log($('#fillin_date_'+form_name+num).val());

    var create_date =  $('#create_date_'+form_name+num).text().replace(/\//g, "-");
    var fillin_date = $('#fillin_date_'+form_name+num).val();
    var remark = $('#remark'+form_name+num).val();

    $.ajax({
        url: "database/add_case_all.php",
        data: {
            Number:num,
            Form_name:form_name,
            Id:id,
            Case_id:open_id,
            Name:name,
            Case_pid:pid,
            Create_date:create_date,
            Fillin_date:fillin_date,
            Remark:remark,
            Url:'case_detail.php?name='+name+'&gender='+gender+'&pid='+pid+'&date='+date+'&property='+ property +'&type='+ type+'&grade='+ grade+'&id='+id+'&open_id='+open_id+'&referral='+referral+'&case_Create_date='+case_Create_date+'&unopen_type='+unopen_type+'&birth='+birth+'',
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            if (data == 1) {
                swal({
                    title: '儲存成功！',
                    type: 'success',
                }).then(function () {
                    location.reload();
                })
            } else {
                swal({
                    title: '儲存失敗！',
                    type: 'error',
                })
            }
        },
        error: function (e) {
            console.log(e);
            swal({
                title: '儲存失敗！',
                type: 'error',
            })
        }
    });
}
//endregion

//上傳各檔案（憂鬱量表） region
form_upload_new = function(obj) {
    //Time Now
    var timenow = moment().format('YYYY/MM/DD');
    //獲取該物件id
    var obj_id = obj.id;
    //獲取該物件名稱(固定格式命名規則)
    var obj_name = obj_id.replace("_add_new", "");
    //獲取物件table內tbody標籤id名
    var obj_tbody = obj_id.replace("_add_new", "_full_add");
    //獲取tbody內tr的name名
    var num_name = obj_id.replace("_add_new", "_num[]");
    //獲取該tr name名的長度
    var num = document.getElementsByName(num_name).length;
    //獲取該table的id名
    var obj_table = obj_id.replace("_add_new", "_all");
    //獲取該table的th之長度
    var th_len = $("#"+obj_table+" th").length;
    var cssstring = "";

    switch (obj_name) {
        case 'sullen':
                cssstring = 
                '<tr name="'+num_name+'">'+
                    '<td><span id="upload_date_'+obj_name+num+'">'+timenow+'</span></td>'+
                    '<td><input id="score'+obj_name+num+'" type="text" style="width:5em;"></td>'+
                    '<td><input type="file" id="file'+obj_name+num+'" name="file"></td>'+
                    '<td>'+
                    '<select id="test_type'+obj_name+num+'">'+
                        '<option value="">請選擇</option>'+
                        '<option value="前測">前測</option>'+
                        '<option value="中測">中測</option>'+
                        '<option value="後測">後測</option>'+
                    '</select>'+
                    '</td>'+
                    '<td><input id="remark'+obj_name+num+'" type="text"></td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td></td>'+
                '</tr>'+
                '<tr>'+
                '<td colspan="'+th_len+'"><button onClick="i_store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button></td>'+
                '</tr>';
            break;

        default:

            break;
    }
    
        //對應的tobody內寫入cssstring
        $("#"+obj_tbody).append(cssstring);
        
        //只能按一次
        var btn = $(obj); 
        btn.prop('disabled',true); 
}
//endregion

//綁定 量表建檔類型（線上建檔/檔案上傳）select標籤切換 region
add_new_type_onchange = function(obj){
    //獲取該物件id (select的id)
    var obj_id = obj.id;

    //獲取該物件 num 編號 (select的num)
    var obj_num = $("#"+obj_id).attr("num");

     //獲取該物件 obj_name 類型名稱 (select的obj_name)
     var obj_name = $("#"+obj_id).attr("obj_name");

    //獲取該物件的量表類型名稱+編號 (obj_name + num)
    var obj_name_num = obj_id.replace("add_new_type", "");

    select_change(obj.value, obj_name_num, obj_num, obj_name);
}
//endregion

//根據 類型 select option值切換 檔案名稱/量表內容 及其他欄位設定 region
function select_change(option, obj_name_num, num, obj_name)
{    
    if(obj_name=="case" || obj_name=="settlement")
    {
        // console.log(option);
        switch(option)
        {
            case '上傳檔案':
                $("#result_td"+obj_name_num).empty();
                $("#content_type"+obj_name_num).empty();
                $("#signer_set_td"+obj_name_num).empty();
                
                var content_str = '<input type="file" id="file'+obj_name_num+'" name="file">';
                var store_btn_str = '<button onClick="i_store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';

                $("#result_td"+obj_name_num).html('<textarea style="width:7em;resize: none;font-size: 20px;min-height:8em;" id="result'+obj_name+num+'" placeholder="評估結果"></textarea>');
                $("#content_type"+obj_name_num).html(content_str);

                $("#signer_set_td"+obj_name_num).html(
                '<span>督導：</span><br/>'+
                '<select id="supervise1_set'+obj_name+num+'">'+
                '</select>'+
                '<br/><br/><span>執行長：</span><br/>'+
                '<select id="supervise2_set'+obj_name+num+'">'+
                '</select>');

                $("#store_btn"+obj_name_num).html(store_btn_str);

                append_user(obj_name_num);

                break;

            case '線上建檔':
            default:
                $("#result_td"+obj_name_num).empty();
                $("#content_type"+obj_name_num).empty();
                $("#signer_set_td"+obj_name_num).empty();

                var store_btn_str = '<button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';

                $("#store_btn"+obj_name_num).html(store_btn_str);
                break;  
        }
    }
    else if(obj_name =="interlocution")
    {
        // console.log(option);
        switch(option)
        {
            case '上傳檔案':
                $("#interlocution_date_td"+obj_name_num).empty();
                $("#interlocution_ques_td"+obj_name_num).empty();
                $("#assign_name_td"+obj_name_num).empty();
                $("#content_type"+obj_name_num).empty();
                $("#signer_set_td"+obj_name_num).empty();
                
                var content_str = '<input type="file" id="file'+obj_name_num+'" name="file">';
                var store_btn_str = '<button onClick="i_store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';
                
                $("#interlocution_date_td"+obj_name_num).html('<input id="interlocution_date'+obj_name+num+'" type="date" style="width:8em;">');
                $("#interlocution_ques_td"+obj_name_num).html('<textarea style="width:7em;resize: none;font-size: 20px;min-height:8em;" id="interlocution_ques'+obj_name+num+'" placeholder="問題陳述"></textarea>');
                $("#assign_name_td"+obj_name_num).html('<input id="assign_name'+obj_name+num+'" type="text" style="width:5em;">');
                $("#content_type"+obj_name_num).html(content_str);

                $("#signer_set_td"+obj_name_num).html(
                '<span>督導：</span><br/>'+
                '<select id="supervise1_set'+obj_name+num+'">'+
                '</select>'+
                '<br/><br/><span>執行長：</span><br/>'+
                '<select id="supervise2_set'+obj_name+num+'">'+
                '</select>');
    
                $("#store_btn"+obj_name_num).html(store_btn_str);

                append_user(obj_name_num);

                break;

            case '線上建檔':
            default:
                $("#interlocution_date_td"+obj_name_num).empty();
                $("#interlocution_ques_td"+obj_name_num).empty();
                $("#assign_name_td"+obj_name_num).empty();
                $("#content_type"+obj_name_num).empty();
                $("#signer_set_td"+obj_name_num).empty();

                var store_btn_str = '<button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';

                $("#store_btn"+obj_name_num).html(store_btn_str);
                break;  
        }
    }
    else if(obj_name =="resource")
    {
        // console.log(option);
        switch(option)
        {
            case '上傳檔案':
                $("#content_type"+obj_name_num).empty();
                $("#signer_set_td"+obj_name_num).empty();
                
                var content_str = '<input type="file" id="file'+obj_name_num+'" name="file">';
                var store_btn_str = '<button onClick="i_store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';

                $("#content_type"+obj_name_num).html(content_str);

                $("#signer_set_td"+obj_name_num).html(
                '<span>督導：</span><br/>'+
                '<select id="supervise1_set'+obj_name+num+'">'+
                '</select>'+
                '<br/><br/><span>執行長：</span><br/>'+
                '<select id="supervise2_set'+obj_name+num+'">'+
                '</select>');

                $("#store_btn"+obj_name_num).html(store_btn_str);
    
                append_user(obj_name_num);

                break;

            case '線上建檔':
            default:
                $("#content_type"+obj_name_num).empty();
                $("#signer_set_td"+obj_name_num).empty();

                var store_btn_str = '<button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';

                $("#store_btn"+obj_name_num).html(store_btn_str);
                break;  
        }
    }
    else if(obj_name=="life")
    {
        // console.log(option);
        switch(option)
        {
            case '上傳檔案':
                $("#test_type_td"+obj_name_num).empty();
                $("#result_score_td"+obj_name_num).empty();
                $("#content_type"+obj_name_num).empty();
                $("#signer_set_td"+obj_name_num).empty();

                var content_str = '<input type="file" id="file'+obj_name_num+'" name="file">';
                var store_btn_str = '<button onClick="i_store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';

                $("#test_type_td"+obj_name_num).html('<select id="test_type'+obj_name+num+'">'+
                '<option value="">請選擇</option>'+
                '<option value="前測">前測</option>'+
                '<option value="中測">中測</option>'+
                '<option value="後測">後測</option>'+
            '</select>');
                $("#result_score_td"+obj_name_num).html('<textarea style="width:7em;resize: none;font-size: 20px;min-height:8em;" id="result_score'+obj_name+num+'" placeholder="得分/結果"></textarea>');
                $("#content_type"+obj_name_num).html(content_str);

                $("#signer_set_td"+obj_name_num).html(
                '<span>督導：</span><br/>'+
                '<select id="supervise1_set'+obj_name+num+'">'+
                '</select>'+
                '<br/><br/><span>執行長：</span><br/>'+
                '<select id="supervise2_set'+obj_name+num+'">'+
                '</select>');

                $("#store_btn"+obj_name_num).html(store_btn_str);

                append_user(obj_name_num);

                break;

            case '線上建檔':
            default:
                $("#test_type_td"+obj_name_num).empty();
                $("#result_score_td"+obj_name_num).empty();
                $("#content_type"+obj_name_num).empty();
                $("#signer_set_td"+obj_name_num).empty();

                var store_btn_str = '<button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';

                $("#store_btn"+obj_name_num).html(store_btn_str);
                break;  
        }
    }
    else if(obj_name=="health")
    {
        // console.log(option);
        switch(option)
        {
            case '上傳檔案':
                $("#content_type"+obj_name_num).empty();
                $("#signer_set_td"+obj_name_num).empty();
                
                var content_str = '<input type="file" id="file'+obj_name_num+'" name="file">';
                var store_btn_str = '<button onClick="i_store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';

                $("#content_type"+obj_name_num).html(content_str);

                $("#signer_set_td"+obj_name_num).html(
                '<span>督導：</span><br/>'+
                '<select id="supervise1_set'+obj_name+num+'">'+
                '</select>'+
                '<br/><br/><span>執行長：</span><br/>'+
                '<select id="supervise2_set'+obj_name+num+'">'+
                '</select>');

                $("#store_btn"+obj_name_num).html(store_btn_str);

                append_user(obj_name_num);

                break;

            case '線上建檔':
            default:
                $("#content_type"+obj_name_num).empty();
                $("#signer_set_td"+obj_name_num).empty();

                var store_btn_str = '<button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';

                $("#store_btn"+obj_name_num).html(store_btn_str);
                break;  
        }
    }
    else if(obj_name =="employment_satif" || obj_name=="satif")
    {
        // console.log(option);
        switch(option)
        {
            case '上傳檔案':
                $("#score_td"+obj_name_num).empty();
                $("#content_type"+obj_name_num).empty();
                $("#signer_set_td"+obj_name_num).empty();
                
                var content_str = '<input type="file" id="file'+obj_name_num+'" name="file">';
                var store_btn_str = '<button onClick="i_store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';

                $("#score_td"+obj_name_num).html('<input id="score'+obj_name+num+'" type="text" style="width:5em;">');
                $("#content_type"+obj_name_num).html(content_str);

                $("#signer_set_td"+obj_name_num).html(
                '<span>督導：</span><br/>'+
                '<select id="supervise1_set'+obj_name+num+'">'+
                '</select>'+
                '<br/><br/><span>執行長：</span><br/>'+
                '<select id="supervise2_set'+obj_name+num+'">'+
                '</select>');

                $("#store_btn"+obj_name_num).html(store_btn_str);

                append_user(obj_name_num);

                break;

            case '線上建檔':
            default:
                $("#score_td"+obj_name_num).empty();
                $("#content_type"+obj_name_num).empty();
                $("#signer_set_td"+obj_name_num).empty();

                var store_btn_str = '<button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';
                $("#store_btn"+obj_name_num).html(store_btn_str);
                break;  
        }
    }
    else if(obj_name =="familyship")
    {
        // console.log(option);
        switch(option)
        {
            case '上傳檔案':
                $("#test_type_td"+obj_name_num).empty();
                $("#score_td"+obj_name_num).empty();
                $("#content_type"+obj_name_num).empty();
                $("#signer_set_td"+obj_name_num).empty();
                
                var content_str = '<input type="file" id="file'+obj_name_num+'" name="file">';
                var store_btn_str = '<button onClick="i_store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';

                $("#test_type_td"+obj_name_num).html('<select id="test_type'+obj_name+num+'">'+
                '<option value="">請選擇</option>'+
                '<option value="前測">前測</option>'+
                '<option value="中測">中測</option>'+
                '<option value="後測">後測</option>'+
                '</select>');
                $("#score_td"+obj_name_num).html('<input id="score'+obj_name+num+'" type="text" style="width:5em;">');
                $("#content_type"+obj_name_num).html(content_str);

                $("#signer_set_td"+obj_name_num).html(
                '<span>督導：</span><br/>'+
                '<select id="supervise1_set'+obj_name+num+'">'+
                '</select>'+
                '<br/><br/><span>執行長：</span><br/>'+
                '<select id="supervise2_set'+obj_name+num+'">'+
                '</select>');

                $("#store_btn"+obj_name_num).html(store_btn_str);

                append_user(obj_name_num);
    
                break;

            case '線上建檔':
            default:
                $("#test_type_td"+obj_name_num).empty();
                $("#score_td"+obj_name_num).empty();
                $("#content_type"+obj_name_num).empty();
                $("#signer_set_td"+obj_name_num).empty();

                var store_btn_str = '<button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';

                $("#store_btn"+obj_name_num).html(store_btn_str);
                break;  
        }
    }
    else if(obj_name =="BSRS5")
    {
        // console.log(option);
        switch(option)
        {
            case '上傳檔案':
                $("#score_td"+obj_name_num).empty();
                $("#dispose_td"+obj_name_num).empty();
                $("#content_type"+obj_name_num).empty();
                $("#signer_set_td"+obj_name_num).empty();
                
                var content_str = '<input type="file" id="file'+obj_name_num+'" name="file">';
                var store_btn_str = '<button onClick="i_store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';

                $("#score_td"+obj_name_num).html('<input id="score'+obj_name+num+'" type="text" style="width:5em;">');
                $("#dispose_td"+obj_name_num).html('<textarea style="width:7em;resize: none;font-size: 20px;min-height:8em;" id="dispose'+obj_name+num+'" placeholder="處置情形"></textarea>');
                $("#content_type"+obj_name_num).html(content_str);
                
                $("#signer_set_td"+obj_name_num).html(
                '<span>督導：</span><br/>'+
                '<select id="supervise1_set'+obj_name+num+'">'+
                '</select>'+
                '<br/><br/><span>執行長：</span><br/>'+
                '<select id="supervise2_set'+obj_name+num+'">'+
                '</select>');

                $("#store_btn"+obj_name_num).html(store_btn_str);

                append_user(obj_name_num);
    
                break;

            case '線上建檔':
            default:
                $("#score_td"+obj_name_num).empty();
                $("#dispose_td"+obj_name_num).empty();
                $("#content_type"+obj_name_num).empty();
                $("#signer_set_td"+obj_name_num).empty();

                var store_btn_str = '<button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';

                $("#store_btn"+obj_name_num).html(store_btn_str);
                break;  
        }
    }
}
//endregion

//點擊儲存到case_all資料庫region
function i_store(num, form_name){
    swal({
        title: "確認上傳量表？",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "確認送出",
        cancelButtonText: "取消",
        showConfirmButton: true,
        showCancelButton: true
    }).then(function(result) {
        if (result) {
            var check_error_str = "以下欄位未填寫：\n";

            // 將未選擇/未填寫的欄位抓出來寫進去check_error_str
            $("#"+form_name+"_full_add [name*='"+form_name+"_num[]'] td").children().each(function(i,n){
        
                var td_id = $(this).attr("id");
                var td_val = $("#"+td_id).val();
                // var td_val = document.getElementById(td_id).value;
                var th_name = $(this).parent().parent().parent("tbody").siblings("tbody").children().children().eq(i).text();
                
                if(td_id!==undefined && td_id != "create_date_"+form_name+num && td_id != "remark"+form_name+num  && td_id !="supervise1_set"+form_name+num && td_id !="supervise2_set"+form_name+num)
                {   
                    if(td_val =="")
                    {
                        check_error_str+= th_name+"\n";
                    }
                }
            });

            // 檢查有無選擇督導
            if($("#supervise1_set"+form_name+num).val() == "")
            {
                check_error_str+= "督導\n";
            }
            // 檢查有無選擇執行長
            if($("#supervise2_set"+form_name+num).val() == "")
            {
                check_error_str+= "執行長\n";
            }

            var stau = false;

            if (check_error_str != "以下欄位未填寫：\n") 
            {
                stau = false;
            }
            else {
                stau = true;
            }

            //檢查欄位是否皆已填寫，並提醒有尚未填寫完整的資料
            if(!stau)
            {
                swal({
                    title:check_error_str,
                    type:'error'
                })
            }
            else
            {
                //確認送出資料至後端
                i_store_submit_datas(num, form_name);
            }
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
// endregion

//確定執行 儲存到case_all資料庫 region
i_store_submit_datas = function(num, form_name)
{
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
    
    var timenow = moment().format('YYYY-MM-DD');

    var upload_info_arr = new Array();

    // 抓取上傳的欄位內容
    // console.log($("#"+form_name+"_full_add [name*='"+form_name+"_num[]'] td").children())
    $("#"+form_name+"_full_add [name*='"+form_name+"_num[]'] td").children().each(function(i,n){
        var td_id = $(this).attr("id");
        var td_val = $("#"+td_id).val();
        var create_date = timenow;

        // console.log($(this).attr("id"))
        // console.log(td_val)

        // 若為create_date_開頭、包含supervise（簽核主管名稱）或是 undefined類型跳過
        if(td_id!==undefined && td_id != "create_date_"+form_name+num && td_id !="supervise1_set"+form_name+num && td_id !="supervise2_set"+form_name+num)
        {  
            if(td_id.includes("create_date") ||td_id.includes("upload_date"))
            {
                upload_info_arr.push({name:td_id,value:create_date})
            }
            else if(td_id.includes("file"))
            {
                                                                            // C:\fakepath\abc123.PNG -> abc123.PNG 
            upload_info_arr.push({name:td_id,value:td_val.replace("C\:\\fakepath\\", "")})
            }
            else
            {
            upload_info_arr.push({name:td_id,value:td_val})
            }
        }
        else if(td_id == "create_date_"+form_name+num)
        {
            upload_info_arr.push({name:td_id,value:create_date})
        }
    });

    // console.log(upload_info_arr)

    //創立FormData Oject
    //傳輸 input type="file"類型檔案需用FormData Oject格式傳送ajax
    var form_data = new FormData();


    //獲取File Object
    var customfile = $('[type="file"]').prop('files');

    //若量表無 input type="file"類型資料 則不執行該迴圈
    //量表沒有input type="file"類型資料，customfile會顯示undefined，customfile.length會報錯
    //量表存在input type="file"類型資料，但無任何檔案上傳customfile.length會顯示0
    if(customfile!=undefined)
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


    form_data.append("upload_info", JSON.stringify(upload_info_arr));

    form_data.append("Number", num);
    form_data.append("Form_name", form_name);
    form_data.append("Id", id);
    form_data.append("Case_id", open_id);
    form_data.append("Name", name);
    form_data.append("Case_pid", pid);

    form_data.append("Supervise1",$("#supervise1_set"+form_name+num).val());
    form_data.append("Supervise2",$("#supervise2_set"+form_name+num).val());

    var form_type_ch_name = "";

    // 將表格的英文名稱轉換成中文名稱
    switch (form_name) {
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

    // 設定簽核提醒的連結位址
    var history_url = 'case_all.php?name='+name+'&gender='+gender+'&pid='+pid+'&date='+date+'&property='+property+'&type='+type+'&grade='+ grade+'&id='+id+'&open_id='+open_id+'&referral='+referral+'&case_Create_date='+case_Create_date+'&unopen_type='+unopen_type+'&birth='+birth;

    form_data.append("history_url", history_url + "&form_type=" + form_name);
    form_data.append("case_user", $(".case_user").first().text()); 

    // 簽核提醒相關欄位
    form_data.append("title", '開案個案-(' + form_type_ch_name + ')簽核：' + '案號：' + open_id);
    form_data.append("signer", $("#supervise1_set"+form_name+num).val() + "、" + $("#supervise2_set"+form_name+num).val());
    form_data.append("rec_date_time", timenow +" 00:00");

    // for (var pair of form_data.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]); 
    // }


    $.ajax({
        url: "database/add_case_all_upload.php",
        type: "POST",
        data:form_data,
        contentType:false,
        cache:false,
        processData:false,
        async:true,
        success: function (data) {
            // console.log(data)
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
                    title:'上傳失敗！請聯絡負責單位',
                    type:'error',
                })
            }
        },
        error: function (e) {
            console.log(e);
            swal({
                title:'上傳失敗！請聯絡負責單位',
                type:'error',
            })
        }
    });
}
//endregion


// page reload時保持上次的頁籤狀態 region
function tab_toggle() {
    $('a[data-toggle="pill"]').on('show.bs.tab', function(e) {
        localStorage.setItem('activeTab', $(e.target).attr('href'));
    });
    var activeTab = localStorage.getItem('activeTab');
    if(activeTab){
        $('#myTab a[href="' + activeTab + '"]').tab('show');
    }
}

$('#menu_tab_nav li a, .breadcrumb li, .brand-img').on('click',function() {
  localStorage.removeItem('activeTab');
});

//endregion

// 顯示簽核相關欄位 region
function datatable_sign_show(signer_type ,signer, sign_path, sign_time, sign_msg) {
    var sign_arr = [];
  
    var sign_stus = "";
    var sign_css_str = "";
    var type_name = "";
  
    switch (signer_type) {
      case "supervise1":
        type_name = "督導";
        break;
    case "supervise2":
        type_name = "執行長";
        break;
    }
  
    if (sign_msg == "") {
      sign_stus = "目前尚無留言內容";
    } else {
      sign_stus =
        "留言時間：" +
        sign_time +
        "，留言內容：" +
        sign_msg;
    }
  
    if (sign_path != "") {
      var supervise_sign_file_val = sign_path.replace(
        "../signature/",
        "./signature/"
      );
      sign_css_str +=
        '<a src="' +
        supervise_sign_file_val +
        '" style="color:blue;display: block;" target="_blank" alt="' +
        sign_stus +
        '" data-bs-toggle="tooltip" data-bs-placement="left" title="' +
        sign_stus +
        '" sign_msg="'+sign_msg+'" sign_time="'+sign_time+'" type_name="'+type_name+'" data-toggle="modal" data-target="#myModal2">'+type_name+'已簽章<img style="vertical-align:middle;" class="apreview" width="25px" title="' +
        sign_stus +
        '" src="' +
        supervise_sign_file_val +
        '"></a>';
    }
  
    if (sign_css_str == "") {
      sign_css_str = '<i style="color:gray;">待簽核</i>';
    }
  
    sign_arr.push(signer);
    sign_arr.push(sign_css_str);
    // sign_arr.push(sign_msg);
    // sign_arr.push(sign_time);
  
    return sign_arr;
  }
  // endregion
  
  
  // 簽章圖片、留言、時間懸浮顯示region
  // 設定移到該img元素的parent元素，觸發懸浮框圖片效果
  // 要觸發該事件的圖片需 設定title、src、width，class設為apreview
  this.imagePreview = function () {
    // 圖片距離鼠標的位置
    this.xOffset = -800;
    this.yOffset = -10;
  
    //hover([over,]out)
    //over:鼠標移到元素上所觸發的函數
    //out:鼠標移出元素所觸發的函數
  
    //鼠標圖片內容懸浮的事件
    $(document).on("mouseenter", "a:has(.apreview)", function(e) {
        // console.log($(this))

        var $parent = $(this).parent();
        this.t = $parent.children().attr("title"); //顯示在圖片下的標題
        
        $parent.children().attr("title", ""); //將title設定為空值，不讓文字懸浮提示
        this.imgSr = $parent.children().attr("src"); //圖片的連結
        this.c = this.t != "" ? "<br/>" + this.t : "";
        $("body").append(
        "<p class='preview'><img src='" +
            this.imgSr +
            "' alt='Image preview' width='800' height='200' />" +
            this.c +
            "</p>"
        );
        $(".preview")
        .css("top", e.pageY + yOffset + "px")
        .css("left", e.pageX + xOffset + "px")
        .fadeIn("fast");
    });

    $(document).on("mouseleave", "a:has(.apreview)", function(e) {
        // console.log($(this))
        
        var $parent = $(this).parent();
        $parent.children().attr("title", this.t); //恢復title
        $(".preview").remove();
    });
  
    //鼠標移動的事件，讓圖片隨著移動
    // $(".apreview")
    //   .parent()
    //   .on("mousemove", 
    $(document).on("mousemove", "a:has(.apreview)", 
      function (e) {
        // console.log($(this))
        $(".preview")
          .css("top", e.pageY - yOffset + "px")
          .css("left", e.pageX + xOffset + "px");
      });
  };
  //endregion

  $(document).on("click", "a:has(.apreview)", function(e) {

    $(".sign_msg").text("");
    $(".sign_msg_time").val("");

    var $parent = $(this).parent();

    console.log($(this))

    var sign_msg = $(this).attr("sign_msg");
    var sign_time = $(this).attr("sign_time");
    var type_name = $(this).attr("type_name");
    
    // console.log(sign_msg)
    // console.log(sign_time)
    // console.log(type_name)

    //手動新增按鈕點擊跳出模態框
    $("#myModal2").on("shown.bs.modal", function () {
        $parent.children().trigger("focus");
    });

    $("#delete_upload_data_modal").on("shown.bs.modal", function () {
        $parent.children().trigger("focus");
    });
    $("#update_upload_data_modal").on("shown.bs.modal", function () {
        $parent.children().trigger("focus");
    });

    $(".sign_msg").text(sign_msg);
    $(".sign_msg_time").val(sign_time);

    $(".sign_msg_td_name").text(type_name + "簽名留言內容");
    
});


  
//jsignature插件初始化 region
function jsignature_initialization() {
var $sigdiv = $("#signature_div");
$sigdiv.jSignature({ UndoButton: true }); // 初始化jSignature插件-属性用","隔开
// $sigdiv.jSignature({'decor-color':'red'}); // 初始化jSignature插件-设置横线颜色
// $sigdiv.jSignature({'lineWidth':"6"});// 初始化jSignature插件-设置横线粗细
// $sigdiv.jSignature({"decor-color":"transparent"});// 初始化jSignature插件-去掉横线
// $sigdiv.jSignature({'UndoButton':true});// 初始化jSignature插件-撤销功能
// $sigdiv.jSignature({'height': 100, 'width': 200}); // 初始化jSignature插件-设置书写范围(大小)

// 同步更新畫布中的簽名圖片和簽名檔案格式 region
$("#signature_div").bind("change", function (e) {
    var datapair = $sigdiv.jSignature("getData", "image");
    $("#signature_images").attr(
    "src",
    "data:" + datapair[0] + "," + datapair[1]
    );
});
//endregion

//重設繪製簽名 region
$("#signature_reset").click(function () {
    $("#signature_div").jSignature("reset"); //重置画布，可以进行重新作画
    $("#signature_images").attr("src", "");
});
//endregion
}
//endregion

  
// 儲存該簽名 region
signature_submit = function(this_btn) {

// 獲取簽名類型(督導、組長、主管)
var sign_type = $(this_btn).attr("board_name");

// console.log(sign_type);

var ajax_url = "database/update_case_all_data_signature.php";

var src_data = $("#signature_images").attr("src");
// console.log(src);

// 判斷有無簽名圖片，若有送出簽名並儲存檔案
if (src_data) {
    // console.log("submit_sign");
    $.ajax({
    type: "post",
    url: ajax_url,
    data: {
        sign_info:sign_info,
        submit_board_type:submit_board_type,
        src_data: src_data,
        sign_msg: $("#signature_msg").val(),
        sign_type: sign_type,
        sign_name:login_user_name,
    },
    async: false,
    success: function (data) {
        console.log(data);
        if (data == 1) 
        {
            swal({
            title: "送出簽名成功！",
            type: "success",
            }).then(function () {
            location.reload();
            });
        }
        else if(data.includes("noallowsign"))
        {
            swal({
                type: 'error',
                title: '您無權限簽核此欄位',
                text: '當前登入的帳號名稱與簽核欄位名稱不符',
                allowOutsideClick: false //不可點背景關閉
            });
        }
        else 
        {
        swal({
            title: "生成簽名圖片失敗！請聯絡負責單位",
            type: "error",
        });
        }
    },
    });
} 
else 
{
    alert("簽名圖片檔不能為空！");
    return false;
}
}
//endregion

//按簽名 按紐，顯示簽名畫布 隱藏其他詳細資料 region
signature_btn_click = function(this_btn) {

window.sign_info = $(this_btn).attr("sign_info");

window.submit_board_type = $(this_btn).attr("board_type");

// console.log(sign_info)
// console.log(submit_board_type)
var type_name = "";

switch (sign_name_type) {
case "supervise1":
    type_name = "督導";
    break;

    case "supervise2":
    type_name = "執行長";
    break;

// case "social_worker":
//     type_name = "社工員";
//     break;
}

$("#signature_h4").text(type_name + "簽名");
$("#signature_title_td").text(type_name);
$("#signature_msg_td").text(type_name);
$("#sign_submit_btn").attr("board_name", sign_name_type);

$("#signature_area").show();
$("#collapseTwo").hide();
}
//endregion

//在簽名畫布區域按取消，返回詳細資料，並自動滾動卷軸至最頂部 region
show_main_panel = function () {
$("#signature_area").hide();
$("#collapseTwo").show();
// $('html, body').scrollTop(0);
};
//endregions

//呼叫user方法region
function append_user(obj_name_num){             
    $.ajax({
        type:'POST',
        url:'database/find_check_user.php',
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log('test',data)
            $("#supervise1_set"+obj_name_num).empty();
            $("#supervise2_set"+obj_name_num).empty();
            $("#supervise1_set"+obj_name_num).append('<option value="">請選擇</option>');
            $("#supervise2_set"+obj_name_num).append('<option value="">請選擇</option>');
            for (var index in data.Id) {
                $("#supervise1_set"+obj_name_num).append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                $("#supervise2_set"+obj_name_num).append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            }
        },
    });
}
//endregion
