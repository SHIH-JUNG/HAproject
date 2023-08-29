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
                            sign_str += supervise1_sign_arr[0] + supervise1_sign_arr[1] + "\r\n";
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
                    
                    console.log(supervise1_sign_arr)

                    if(value.Is_upload==0)
                    {
                        //獲取相對應td字串格式
                        var othercssstring = load_forms_other_row(form_name,index);

                        if(form_name=="BSRS5")
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
                                '<td><a href="'+case_url+'&form_id='+value.Id+'&form_type='+value.Form_name+'">點擊進入</a></td>'+
                                '<td>'+value.Remark+'</td>'+
                                '<td style="background-color:'+bg_color+';">'+sign_str+'</td>'+
                                '<td>'+sign_btn_str+'</td>'+
                            '</tr>';
                        }
                        else if(form_name=="interlocution")
                        {
                            cssstring += 
                            '<tr name="'+form_name+'_num[]" id="'+value.Id+"_"+value.Case_seqid+"_"+value.Case_id+'">'+
                                '<td>'+value.Form_Create_date+'</td>'+
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
                            $.each(upload_info_json[0], function (i, datan) {
                            if(datan.name.includes("file"))
                            {
                                td_str+='<td><a href="upload/case_all/'+datan.value+'" style="text-decoration:none;color:blue;" target="_blank">'+
                                '<img style="vertical-align:middle;" width="20px" src="image/file-pdf.svg">'+datan.value+'</a></td>';
                            } 
                            else
                            {
                                td_str+='<td>'+datan.value+'</td>';
                            }
                            });
                        cssstring += 
                        '<tr name="'+form_name+'_num[]" id="'+value.Id+"_"+value.Case_seqid+"_"+value.Case_id+'">'+
                        td_str+
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

        default:
            break;
    }

    return str;
}
//endregion


//點擊新增各表(個案評估表、會談紀錄、生活品質量表、健康量表、就業量表、就業滿意度、滿意度量表、家庭關係)region
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
    empty_td = empty_td.repeat(th_len-5);

    if(obj_name=="resource")
    {
        var cssstring = 
        '<tr name="'+num_name+'">'+
            '<td><span id="create_date_'+obj_name+num+'">'+timenow+'</span></td>'+
            '<td></td>'+
            '<td><input id="remark'+obj_name+num+'" type="text"></td>'+
            '<td></td>'+
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
            '<td></td>'+
            empty_td+
            '<td><input id="remark'+obj_name+num+'" type="text"></td>'+
            '<td></td>'+
            '<td></td>'+
        '</tr>'+
        '<tr>'+
        '<td colspan="'+th_len+'"><button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button></td>'+
        '</tr>';
    }
    else
    {
        var cssstring = 
        '<tr name="'+num_name+'">'+
            '<td><span id="create_date_'+obj_name+num+'">'+timenow+'</span></td>'+
            '<td><input id="fillin_date_'+obj_name+num+'" type="date"></td>'+
            empty_td+
            '<td><input id="remark'+obj_name+num+'" type="text"></td>'+
            '<td></td>'+
            '<td></td>'+
        '</tr>'+
        '<tr>'+
        '<td colspan="'+th_len+'"><button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button></td>'+
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

//上傳各檔案 region
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


//上傳各檔案 region
form_BSRS5_add_new = function(obj) {
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

    var cssstring = 
                    '<tr name="'+num_name+'">'+
                        '<td><span id="create_date_'+obj_name+num+'">'+timenow+'</span></td>'+
                        '<td>'+
                        '<select id="add_new_type'+obj_name+num+'" num="'+num+'" obj_name="'+obj_name+'" onchange="add_new_type_onchange(this)">'+
                            '<option value="上傳檔案">上傳檔案</option>'+
                            '<option value="線上建檔" selected>線上建檔</option>'+
                        '</select>'+
                        '</td>'+
                        // '<td><input id="score'+obj_name+num+'" type="text" style="width:5em;"></td>'+
                        // '<td><input id="dispose'+obj_name+num+'" type="text"></td>'+
                        '<td id="score_td'+obj_name+num+'"></td>'+
                        '<td id="dispose_td'+obj_name+num+'"></td>'+
                        '<td id="content_type'+obj_name+num+'"></td>'+
                        '<td><input id="remark'+obj_name+num+'" type="text"></td>'+
                        '<td></td>'+
                        '<td></td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td id="store_btn'+obj_name+num+'" colspan="'+th_len+'"><button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button></td>'+
                    '</tr>';

        //對應的tobody內寫入cssstring
        $("#"+obj_tbody).append(cssstring);
        
        //只能按一次
        var btn = $(obj); 
        btn.prop('disabled',true); 
}
//endregion

//綁定 量表建檔類型select標籤切換 region
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

//根據 類型 select option值切換 檔案名稱/量表內容 region
function select_change(option, obj_name_num, num, obj_name)
{
    
    // console.log(option);
    switch(option)
    {
        case '上傳檔案':
            $("#content_type"+obj_name_num).empty();
            
            var content_str = '<input type="file" id="file'+obj_name_num+'" name="file">';
            var store_btn_str = '<button onClick="i_store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';

            $("#score_td"+obj_name_num).html('<input id="score'+obj_name+num+'" type="text" style="width:5em;">');
            $("#dispose_td"+obj_name_num).html('<input id="dispose'+obj_name+num+'" type="text" style="width:5em;">');
            $("#content_type"+obj_name_num).html(content_str);
            $("#store_btn"+obj_name_num).html(store_btn_str);
            break;

        case '線上建檔':
        default:
            $("#content_type"+obj_name_num).empty();

            var store_btn_str = '<button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button>';

            $("#store_btn"+obj_name_num).html(store_btn_str);
            break;  
    }
}
//endregion

//點擊儲存到case_all資料庫region
function i_store(num, form_name){
    
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

    // console.log($("#"+form_name+"_full_add [name*='"+form_name+"_num[]'] td").children())
    $("#"+form_name+"_full_add [name*='"+form_name+"_num[]'] td").children().each(function(i,n){
        
        var td_id = $(this).attr("id");
        var td_val = $("#"+td_id).val();
        var create_date = timenow;

        // console.log(td_val)
        // console.log($(this).attr("id"))

       if(td_id.includes("create_date") ||td_id.includes("upload_date"))
       {
            upload_info_arr.push({name:$(this).attr("id"),value:create_date})
       }
       else if(td_id.includes("file"))
       {
                                                                        // C:\fakepath\abc123.PNG -> abc123.PNG 
        upload_info_arr.push({name:$(this).attr("id"),value:td_val.replace("C\:\\fakepath\\", "")})
       }
       else
       {
        upload_info_arr.push({name:$(this).attr("id"),value:td_val})
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

    // for (var pair of form_data.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]); 
    // }


    $.ajax({
        url: "database/add_case_all_upload.php",
        // data: {
        //     Number:num,
        //     Form_name:form_name,
        //     Id:id,
        //     Case_id:open_id,
        //     Name:name,
        //     Case_pid:pid,
        //     Upload_path:,
        //     Upload_info:,
        // },
        type: "POST",
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

