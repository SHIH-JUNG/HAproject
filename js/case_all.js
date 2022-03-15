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

                //獲取相對應td字串格式
                var othercssstring = load_forms_other_row(form_name,index);

                       cssstring += 
                            '<tr name="'+form_name+'_num[]" id="'+value.Case_pid+"_"+value.Id+"_"+value.Phone_id+"_"+value.Case_id+'">'+
                                '<td>'+value.Form_Create_date+'</td>'+
                                '<td>'+value.Fillin_date+'</td>'+
                                othercssstring+
                                '<td><a href="'+value.Url+'&form_id='+value.Id+'&form_type='+value.Form_name+'">點擊進入</a></td>'+
                                '<td>'+value.Remark+'</td>'+
                            '</tr>';
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



//上傳顯示會客互動紀錄PDF region
    //按下上傳(會客互動)region
    $('#btn-upload3').on('click',function(){
            var num = document.getElementsByName('num8[]').length;
        var csstring = "";
        csstring =
            '<tr name="num8[]">'+
                '<td></td>'+
                '<td><input type="file" id="file'+num+'" name="file"></td>'+
                '<td><input type="text" id="i_remark'+num+'" ></td>'+
            '</tr>'+
            '<tr>'+
                '<td colspan="5"><button onclick="i_store('+num+')">儲存</button> <button onclick="location.reload();">取消</button></td>'+
            '</tr>'
        $("#new_store3").html(csstring);
    });

    function i_store(num){
//        console.log(num,$('#h_remark'+num).val())//1 "123"
        var file3 = document.getElementById('file'+num+'').files;
//        var form_data = new FormData($('#upload-file')[0]);
        var form_data = new FormData();
       for(var i=0; i<file3.length; i++){
            form_data.append("file3", file3[i]);
        }
        var face_id = getUrlVars()["id"];
        form_data.append('face_id', face_id);
        form_data.append('four_id', four_id);
        form_data.append('num', num);
        form_data.append('i_remark', $('#i_remark'+num).val());
    //    console.log(form_data)

        $.ajax({
            type:'POST',
            url:'database/upload_interactive.php',
            data:form_data,
            processData: false,
            contentType:false,
            cache:false,
            processData:false,
            async:true,
            success: function (data) {
    //            console.log(data)
                if(data == 1){
                    swal({
                        title:'上傳成功！',
                        type:'success',                        
                    }).then(function(){
                        location.reload();
                    }) 
                }else{
                    swal({
                        title:'上傳失敗！請聯絡負責單位',
                        type:'error',
                    })
                }
            },
        });
    }
    //endregion
//
    //顯示個案會客互動紀錄region
    function load_interactive_pdf(){
        var face_id = getUrlVars()["id"];
        $.ajax({
            url: "database/load_interactive_pdf.php",
            type: "POST",
            data:{
                face_id:face_id,
                four_id:four_id
            },
            dataType: "JSON",
            async: false,//啟用同步請求
            success: function (data) {
                var csstring = "";
                for(var index in data.path){
                    var data_name = (data.path[index]).split('/');
                    csstring +=
                        '<tr name="num8[]">'+
                            '<td>'+data.date[index]+'</td>'+
                            '<td class="text-left"><a href="'+data.path[index]+'" style="text-decoration:none;color:blue;" target="_blank"><img style="vertical-align:middle;" width="20px" src="image/PDF_file_icon.svg"> '+data_name[1]+'</a></td>'+
                            '<td><span>'+data.remark[index]+'</span></td>'+
                        '</tr>'
                }
                $("#interactive_all").append(csstring);
            },
            error: function (e) {
                    notyf.alert('伺服器錯誤,無法載入' + e);
             }
        });
    }
    //endregion
//endregion

//上傳顯示零用金紀錄PDF region
    //按下上傳(零用金)region
    $('#btn-upload4').on('click',function(){
        var num = document.getElementsByName('num9[]').length;
        var csstring = "";
        csstring =
            '<tr name="num9[]">'+
                '<td></td>'+
                '<td><input type="file" id="file'+num+'" name="file"></td>'+
                '<td><input type="text" id="c_remark'+num+'" ></td>'+
            '</tr>'+
            '<tr>'+
                '<td colspan="5"><button onclick="c_store('+num+')">儲存</button> <button onclick="location.reload();">取消</button></td>'+
            '</tr>'
        $("#new_store4").html(csstring);
    });

    function c_store(num){
        var file4 = document.getElementById('file'+num+'').files;
        var face_id = getUrlVars()["id"];
        var form_data = new FormData();
        
       for(var i=0; i<file4.length; i++){
            form_data.append("file4", file4[i]);
        }

        form_data.append('four_id', four_id);
        form_data.append('face_id', face_id);
        form_data.append('num', num);
        form_data.append('c_remark', $('#c_remark'+num).val());

        $.ajax({
            type:'POST',
            url:'database/upload_petty_cash.php',
            four_id:four_id,
            data:form_data,
            processData: false,
            contentType:false,
            cache:false,
            processData:false,
            async:true,
            success: function (data) {
    //            console.log(data)
                if(data == 1){
                    swal({
                        title:'上傳成功！',
                        type:'success',                        
                    }).then(function(){
                        location.reload();
                    }) 
                }else{
                    swal({
                        title:'上傳失敗！請聯絡負責單位',
                        type:'error',
                    })
                }
            },
        });
    }
    //endregion
//
    //顯示零用金紀錄region
    function load_petty_cash_pdf(){
        var face_id = getUrlVars()["id"];
        $.ajax({
            url: "database/load_petty_cash_pdf.php",
            type: "POST",
            data:{
                face_id:face_id,
                four_id:four_id
            },
            dataType: "JSON",
            async: false,//啟用同步請求
            success: function (data) {
                var csstring = "";
                for(var index in data.path){
                    var data_name = (data.path[index]).split('/');
                    csstring +=
                        '<tr name="num9[]">'+
                            '<td>'+data.date[index]+'</td>'+
                            '<td class="text-left"><a href="'+data.path[index]+'" style="text-decoration:none;color:blue;" target="_blank"><img style="vertical-align:middle;" width="20px" src="image/PDF_file_icon.svg"> '+data_name[1]+'</a></td>'+
                            '<td><span>'+data.remark[index]+'</span></td>'+
                        '</tr>'
                }
                $("#petty_cash_all").append(csstring);
            },

            error: function (e) {
                    notyf.alert('伺服器錯誤,無法載入' + e);
             }
        });
    }
    //endregion
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