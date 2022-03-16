//取得url id值region

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion


//設置存放有資料的量表名稱之陣列
var form_type_arr = [];

//填寫資料(輔導紀錄)region
var name = getUrlVars()["name"];
var pid =getUrlVars()["pid"];
var date = getUrlVars()["date"];
var grade = getUrlVars()["grade"];
var property = getUrlVars()["property"];
var type = getUrlVars()["type"];
var phone_id = getUrlVars()["id"];
var open_id = getUrlVars()["open_id"];
var addition =getUrlVars()["addition"];
var age =getUrlVars()["age"];
var gender =getUrlVars()["gender"];
// console.log(name, date, grade, property, type, phone_id, open_id, addition, age, gender);
$(".case_name").text(decodeURIComponent(name));
$(".case_date").text(date);
$(".case_object_type").text(decodeURIComponent(type));
$(".case_addiction").text(decodeURIComponent(addition));
//endregion

//抓所有量表region
$(document).ready(function () {



    //設定麵包屑返回region
    var url = 'case_all_all.php?id='+phone_id+'&open_id='+open_id+'';
    $("#history").attr('href',url);

    //獲取有資料的量表
    load_form_type_array();


    // load_interactive_pdf();
    // load_petty_cash_pdf();
});
//endregion

function load_form_type_array()
{
    $.ajax({
        url: "database/find_case_all.php",
        data: {
            Open_id:open_id,
            Phone_id:phone_id
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
            console.log(e);
        }
    });
}

//載入所有量表資料摘要region
function load_each_form()
{
    var phone_id = getUrlVars()["id"];
    var open_id = getUrlVars()["open_id"];
    var name = getUrlVars()["name"];
    var pid =getUrlVars()["pid"];

    $.each(form_type_arr,function(sq,form_name){

        $.ajax({
            url: "database/find_case_all.php",
            data: {
                Open_id:open_id,
                Phone_id:phone_id,
                Form_type:form_name
            },
            type: "POST",
            dataType: "JSON",
            success: function (data) {

                var cssstring ="";


                // console.log(data)
                $.each(data,function(index,value){
                
                    if(value.Is_upload==0)
                    {
                        //獲取相對應td字串格式
                        var othercssstring = load_forms_other_row(form_name,index);
                        if(form_name=="BSRS5")
                        {
                            cssstring += 
                            '<tr name="'+form_name+'_num[]" id="'+value.Case_pid+"_"+value.Id+"_"+value.Phone_id+"_"+value.Case_id+'">'+
                                '<td>'+value.Form_Create_date+'</td>'+
                                '<td>線上建檔</td>'+
                                othercssstring+
                                '<td><a href="'+value.Url+'&form_id='+value.Id+'&form_type='+value.Form_name+'">點擊進入</a></td>'+
                                '<td>'+value.Remark+'</td>'+
                            '</tr>';
                        }
                        else
                        {
                            cssstring += 
                            '<tr name="'+form_name+'_num[]" id="'+value.Case_pid+"_"+value.Id+"_"+value.Phone_id+"_"+value.Case_id+'">'+
                                '<td>'+value.Form_Create_date+'</td>'+
                                '<td>'+value.Fillin_date+'</td>'+
                                othercssstring+
                                '<td><a href="'+value.Url+'&form_id='+value.Id+'&form_type='+value.Form_name+'">點擊進入</a></td>'+
                                '<td>'+value.Remark+'</td>'+
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
                                '<img style="vertical-align:middle;" width="20px" src="image/PDF_file_icon.svg">'+datan.value+'</a></td>';
                            } 
                            else
                            {
                                td_str+='<td>'+datan.value+'</td>';
                            }
                            });
                        cssstring += 
                        '<tr name="'+form_name+'_num[]" id="'+value.Case_pid+"_"+value.Id+"_"+value.Phone_id+"_"+value.Case_id+'">'+
                        td_str+
                        '</tr>';
                    }
                    
                })


                $("#"+form_name+"_all").append(cssstring);

                $.each(data,function(index,value){
                    

                    var data_json = JSON.parse("[" +value.Other_info.replace('\"\[', '\[').replace('\]\"', '\]') + "]");

                    if(data_json.length>0)
                    {
                        $.each(data_json[0], function (i, datan) {
                            $("[name='"+datan.name+index+"']").eq(i).text(datan.value);
                        });
                    }
                   
                })
            },
            error: function (e) {
                console.log(e);
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
        case 'familyship':
        case 'BSRS5':
            str +=
            '<td name="'+form_type+index+'"></td>'+
            '<td name="'+form_type+index+'"></td>';
            break;

        case 'life':
        case 'case':
        case 'satif':
        case 'employment_satif':
        case 'settlement':
            str +=
            '<td name="'+form_type+index+'"></td>';
            break;

        case 'health':
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
    empty_td = empty_td.repeat(th_len-3);

    var cssstring = 
                    '<tr name="'+num_name+'">'+
                        '<td><span id="create_date_'+obj_name+num+'">'+timenow+'</span></td>'+
                        '<td><input id="fillin_date_'+obj_name+num+'" type="date"></td>'+
                        empty_td+
                        '<td><input id="remark'+obj_name+num+'" type="text"></td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td colspan="'+th_len+'"><button onClick="store('+num+',&quot;'+obj_name+'&quot;);">儲存</button> <button onClick="location.reload();">取消</button></td>'+
                    '</tr>';

        //對應的tobody內寫入cssstring
        $("#"+obj_tbody).append(cssstring);
        
        //只能按一次
        var btn = $(obj); 
        btn.prop('disabled',true); 
}
//endregion

    
//點擊儲存到case_all資料庫region
function store(num, form_name){
    
    var name = getUrlVars()["name"];
    var pid =getUrlVars()["pid"];
    var date = getUrlVars()["date"];
    var grade = getUrlVars()["grade"];
    var property = getUrlVars()["property"];
    var type = getUrlVars()["type"];
    var phone_id = getUrlVars()["id"];
    var open_id = getUrlVars()["open_id"];
    var addition =getUrlVars()["addition"];
    var age =getUrlVars()["age"];
    var gender =getUrlVars()["gender"];

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
            Phone_id:phone_id,
            Case_id:open_id,
            Name:name,
            Case_pid:pid,
            Create_date:create_date,
            Fillin_date:fillin_date,
            Remark:remark,
            Url:'case_detail.php?name='+name+'&pid='+pid+'&date='+date+'&grade='+ grade +'&property='+ property +'&type='+ type+'&id='+phone_id+'&open_id='+open_id+'&addition='+addition+'&age='+age+'&gender='+gender+'',
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
                        '<td><input id="score'+obj_name+num+'" type="text" style="width:5em;"></td>'+
                        '<td><input id="dispose'+obj_name+num+'" type="text"></td>'+
                        '<td id="content_type'+obj_name+num+'"></td>'+
                        '<td><input id="remark'+obj_name+num+'" type="text"></td>'+
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
    
    var name = getUrlVars()["name"];
    var pid =getUrlVars()["pid"];
    var date = getUrlVars()["date"];
    var grade = getUrlVars()["grade"];
    var property = getUrlVars()["property"];
    var type = getUrlVars()["type"];
    var phone_id = getUrlVars()["id"];
    var open_id = getUrlVars()["open_id"];
    var addition =getUrlVars()["addition"];
    var age =getUrlVars()["age"];
    var gender =getUrlVars()["gender"];

    var timenow = moment().format('YYYY-MM-DD');

    var upload_info_arr = new Array();

    $("[name*='"+form_name+"_num[]'] td").children().each(function(i,n){
        
        var td_id = $(this).attr("id");
        var td_val = $("#"+td_id).val();
        var create_date = timenow;

        // console.log(td_val)

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
    form_data.append("Phone_id", phone_id);
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
        //     Phone_id:phone_id,
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




//新增至離園一覽表(結案)region
$("#end").on('click', function () {
    var face_id = getUrlVars()["id"];
    var open_id = getUrlVars()["open_id"];
    var name = decodeURIComponent(getUrlVars()["name"]);
    var four_id = getUrlVars()["four_id"];
    var house = decodeURIComponent(getUrlVars()["house"]);
    var addition = decodeURIComponent(getUrlVars()["addition"]);
    var Today=new Date();
    var twdate = (Today.getFullYear()-1911)+'-'+('0'+(Today.getMonth()+1)).substr(-2)+'-'+('0'+Today.getDate()).substr(-2);
    swal({
        title: '確認結案？',
        text: "結案後將新增至離園一覽表",
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
                url: "database/add_end.php",
                data: {
                    face_id: face_id,
                    open_id:open_id,
                    house:house,
                    name:name,
                    leave_date:twdate,
                    leave_stage:$("#stage_end").val(),
                    main_addition:addition,
                    end_status:"未結案",
                    enter_date:$("#date").text(),
                    four_id:four_id
                },
                type: "POST",
                dataType: "JSON",
                success: function (data) {
                    if (data == 1) {
                        swal({
                            title: '結案成功！',
                            type: 'success',
                        }).then(function () {
                            location.reload();
                        })
                    } else {
                        swal({
                            title: '結案失敗！',
                            type: 'error',
                        })
                    }
                },
                error: function (e) {
                    console.log(e);
                }
            });
        }

    });
});
//endregion

//新增至培訓一覽表(結案)region
$("#train").on('click', function () {
//    console.log("test")
    var face_id = getUrlVars()["id"];
    var open_id = getUrlVars()["open_id"];
    var name = decodeURIComponent(getUrlVars()["name"]);
    var four_id = getUrlVars()["four_id"];
    var house = decodeURIComponent(getUrlVars()["house"]);
    var Today=new Date();
    var twdate = (Today.getFullYear()-1911)+'-'+('0'+(Today.getMonth()+1)).substr(-2)+'-'+('0'+Today.getDate()).substr(-2);
    swal({
        title: '確認結案？',
        text: "結案後將新增至培訓一覽表",
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
                url: "database/add_train.php",
                data: {
                    face_id: face_id,
                    open_id:open_id,
                    house:house,
                    name:name,
                    train_stage:'第一階段',
                    end_status:"未結案",
                    enter_date:twdate,
                    four_id:four_id
                },
                type: "POST",
                dataType: "JSON",
                success: function (data) {
                    if (data == 1) {
                        swal({
                            title: '結案成功！',
                            type: 'success',
                        }).then(function () {
                            location.reload();
                        })
                    } else {
                        swal({
                            title: '結案失敗！',
                            type: 'error',
                        })
                    }
                },
                error: function (e) {
                    console.log(e);
                }
            });
        }

    });
});
//endregion

//新增至在園家屬一覽表region
$("#add_new_inside").on('click', function () {
    var four_id = getUrlVars()["four_id"];
    var face_num =getUrlVars()["face_num"];

    swal({
        title: '確認新增？',
        text: "確認後將新增至在園家屬關懷一覽表",
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
                url: "database/add_inside.php",
                data: {
                    face_id:face_id,
                    open_id:open_id,
                    name:decodeURIComponent(name),
                    gender:decodeURIComponent(gender),
                    age:age,
                    addition:decodeURIComponent(addition),
                    enter_date:date,
                    house:decodeURIComponent(house),
                    four_id:four_id,
                    face_num:face_num
                },
                type: "POST",
                dataType: "JSON",
                success: function (data) {
                    if (data == 1) {
                        swal({
                            title: '新增成功！',
                            type: 'success',
                        }).then(function () {
                            location.reload();
                        })
                    } else {
                        swal({
                            title: '新增失敗！',
                            type: 'error',
                        })
                    }
                },
                error: function (e) {
                    console.log(e);
                }
            });
        }

    //只能按一次
    var btn = $(this);
    btn.prop('disabled', true);
});
});
//endregion



//endregion