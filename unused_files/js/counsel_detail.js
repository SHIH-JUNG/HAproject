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

//datepicker創建 region
datepicker_create = function(selector_id) {

    if(selector_id.includes("birth"))
    {
        $('#'+selector_id).datepicker({
            changeYear: true,
            changeMonth: true,
            currentText: "今天",
            dateFormat:"R.mm.dd",
            showButtonPanel: true,
            yearRange: "-109:+0",
            onClose: function(dateText) {
                // console.log($('#'+selector_id).val());
                // console.log(trans_to_EN(dateText));
            }
            ,beforeShow: function(input, inst) {
                var $this = $(this);
                var cal = inst.dpDiv;
                var outerh = $this.outerHeight();
                if($this.offset().top>1200)
                {
                    outerh = outerh*4;
                }
                else
                {
                    outerh = outerh*3;
                }
                // console.log($this.offset().top)
                // console.log(outerh)
    
    
                var top = $this.offset().top - outerh;
                var left = $this.offset().left - 10;
                setTimeout(function() {
                    cal.css({
                        'top': top,
                        'left': left
                    });
                }, 10);
            }
        });
    }
    else
    {
        $('#'+selector_id).datepicker({
            changeYear: true,
            changeMonth: true,
            currentText: "今天",
            dateFormat:"R.mm.dd",
            showButtonPanel: true,
            // minDate:new Date(new Date().getFullYear() - 12, 0, 1),
            // maxDate:new Date(new Date().getFullYear() + 10, 11, 31),
            yearRange: "-80:+5",
            onClose: function(dateText) {
                // console.log($('#'+selector_id).val());
                // console.log(trans_to_EN(dateText));
            }
            ,beforeShow: function(input, inst) {
                var $this = $(this);
                var cal = inst.dpDiv;
                var outerh = $this.outerHeight();
                if($this.offset().top>1200)
                {
                    outerh = outerh*4;
                }
                else
                {
                    outerh = outerh*3;
                }
                // console.log($this.offset().top)
                // console.log(outerh)
    
    
                var top = $this.offset().top - outerh;
                var left = $this.offset().left - 10;
                setTimeout(function() {
                    cal.css({
                        'top': top,
                        'left': left
                    });
                }, 10);
            }
        });
    }
}
//endregion

//將日期轉為民國年格式111.03.07 region
trans_to_Tw =  function(endate) {
    var strAry = endate.split('-');

    if(parseInt(strAry[0]) > 1911){
        strAry[0] = parseInt(strAry[0]) - 1911;
    }

    return strAry.join(".");
}
//endregion

//將日期轉為西元年格式2022-03-07(mysql date格式) region
trans_to_EN =  function(endate) {
    var strAry = endate.split('.');

    if(parseInt(strAry[0]) < 1911){
        strAry[0] = parseInt(strAry[0]) + 1911;
    }

    return strAry.join("-");
}
//endregion

//檢查SQL撈出來的日期格式region
check_sql_date_format = function(date) {
    if(date=="0000-00-00")
    {
        date = "";
    }
    else
    {
        date  = trans_to_Tw(date);
    }

    return date;
}

var id = getUrlVars()["id"];
var counsel_id = getUrlVars()["counsel_id"];

//抓個別特定監所服務紀錄表region
$(document).ready(function(){

    $("#case_id_prestr").hide();

    load_counsel_addfirst_datas();

    $(".counsel_question").attr("disabled",true);

    //將name名稱為ch_datepicker創建datepicker初始化 region
    $("[name='ch_datepicker']").each(function(){

        var this_id = $(this).attr("id");
        datepicker_create(this_id);
    });
    //endregion


    $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
        if($(e.target).attr("id")=="home-tab")
        {
            $("#all_data").show();
        }
    })

    counsel_visit_show();

       //手動新增按鈕點擊跳出模態框
    $('#myModal').on('shown.bs.modal', function () {
        $('#trans_to_opencase').trigger('focus');
    });

});

//endregion 

// 載入監所服務紀錄表基本資料 region
load_counsel_addfirst_datas = function() {
    $.ajax({
        url: "database/find_counsel_data_detail.php",
        data:{
            Id:id,
            Counsel_id:counsel_id,
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            console.log(data)

            $.each(data,function(index,value){
                
                $("#t_sn").text(value.Counsel_id);
                $("#refferal").val(value.Refferal);
                $("#name").val(value.Name);
                $("#gender").val(value.Gender);
                $("#sexual_orientation").val(value.Sexual_orientation);

                $("#birth").val(check_sql_date_format(value.Birth));

                $("#pid").val(value.Pid);

                $("#info_name").val(value.Info_name);
                $("#info_phone").val(value.Info_phone);
                $("#address").val(value.Address);

                $("#in_prison_date").val(check_sql_date_format(value.In_prison_date));
                $("#out_prison_date").val(check_sql_date_format(value.Out_prison_date));
                $("#in_prison_date_2nd").val(check_sql_date_format(value.In_prison_date_2nd));
                $("#out_prison_date_2nd").val(check_sql_date_format(value.Out_prison_date_2nd));
                $("#in_prison_date_3rd").val(check_sql_date_format(value.In_prison_date_3rd));
                $("#out_prison_date_3rd").val(check_sql_date_format(value.Out_prison_date_3rd));

                $("#is_parole").val(value.Is_parole);
                $("#HIV_diagnosis_date").val(check_sql_date_format(value.HIV_diagnosis_date));
                $("#family_know").val(value.Family_know);
                $("#cocktail_therapy_status").val(value.Cocktail_therapy_status);
                $("#cocktail_therapy_name").val(value.Cocktail_therapy_name);

                $("#interview_date_1st").val(check_sql_date_format(value.Interview_date_1st));
                $("#interview_date_2nd").val(check_sql_date_format(value.Interview_date_2nd));
                $("#interview_date_3rd").val(check_sql_date_format(value.Interview_date_3rd));
                $("#interview_date_4th").val(check_sql_date_format(value.Interview_date_4th));
                $("#interview_date_5th").val(check_sql_date_format(value.Interview_date_5th));
                $("#interview_date_6th").val(check_sql_date_format(value.Interview_date_6th));
                $("#interview_date_7th").val(check_sql_date_format(value.Interview_date_7th));


                var file_val_sp_arr = value.Upload_path.split("\/");
                var file_val = file_val_sp_arr[file_val_sp_arr.length - 1];
                var file_val_a = value.Upload_path.replace("\.\.", "");
                //該input value寫入"檔案.檔名"
                $("input[name='upload_file']").attr("value",file_val)
                //檔案連結與圖片string
                var file_html = '<a name="upload_file_a" href=".'+file_val_a+'" style="text-decoration:none;color:blue;" target="_blank">'+file_val+'<br/></a>';
                $("#upload_file").html(file_html);

                $("#create_date").text((value.Create_date!="0000-00-00 00:00:00")?value.Create_date:"");
                $("#create_name").text(value.Create_name);
                $("#update_date").text((value.Update_date!="0000-00-00 00:00:00")?value.Update_date:"");
                $("#update_name").text(value.Update_name);
            });

            
        },
        error:function(e){
            notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
        }
    });
}
//endregion 


// 更新監所服務紀錄表基本資料 region
$("#counsel_update").on('click',function(){

var stau = false;

    if (check_updat_counsel_data() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }
    console.log(stau);

    if(!stau)
    {
        // alert(check_updat_counsel_data());
        swal({
            title:check_updat_counsel_data(),
            type:'error'
        })
    }
    else
    { 
        submit_data();
    }

});
//endregion 

// 更新監所服務紀錄表基本資料 region
submit_data = function() {
    //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
    $("input, textarea").each(function () {
        if ($(this).attr("type") != "file") {
            $(this).val(jQuery.trim($(this).val()));
        }
    });

    var form_data = new FormData();

    $("input[type='file']").each(function(index, element) {
        var counsel_file = $(this).prop("files");
        if (counsel_file != undefined) {
            if (counsel_file.length != 0) {
                for (var i = 0; i < counsel_file.length; i++) {
                form_data.append("counsel_file"+index, counsel_file[i]);
                // console.log(counsel_file[i])
                }
            } 
        }
    });

    form_data.append("Refferal", $("#refferal").val());
    form_data.append("Counsel_id", counsel_id);
    form_data.append("Id", id);
    form_data.append("Name", $("#name").val());
    form_data.append("Gender", $("#gender").val());
    form_data.append("Sexual_orientation", $("#sexual_orientation").val());
    form_data.append("Birth", trans_to_EN($("#birth").val()));
    form_data.append("Pid", $("#pid").val());
    form_data.append("Info_name", $("#info_name").val());
    form_data.append("Info_phone", $("#info_phone").val());
    form_data.append("Address", $("#address").val());
    form_data.append("In_prison_date", trans_to_EN($("#in_prison_date").val()));
    form_data.append("Out_prison_date", trans_to_EN($("#out_prison_date").val()));
    form_data.append("In_prison_date_2nd", trans_to_EN($("#in_prison_date_2nd").val()));
    form_data.append("Out_prison_date_2nd", trans_to_EN($("#out_prison_date_2nd").val()));
    form_data.append("In_prison_date_3rd", trans_to_EN($("#in_prison_date_3rd").val()));
    form_data.append("Out_prison_date_3rd", trans_to_EN($("#out_prison_date_3rd").val()));
    form_data.append("Is_parole", $("#is_parole").val());
    form_data.append("HIV_diagnosis_date", trans_to_EN($("#HIV_diagnosis_date").val()));
    form_data.append("Family_know", $("#family_know").val());
    form_data.append("Cocktail_therapy_status", $("#cocktail_therapy_status").val());
    form_data.append("Cocktail_therapy_name", $("#cocktail_therapy_name").val());


    $.ajax({                                                                                    
        url: "database/update_upload_counsel_data_detail.php",
        type: "POST",
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        async: true,
        success: function (data) {
            if(data == 1){
                swal({
                    title:'更新成功！',
                    type:'success',                        
                }).then(function(){
                    location.reload();
                }) 
            }else{
                swal({
                    title:'更新失敗！請聯絡網站維護人員',
                    type:'error',
                })
            }  
        },
        error:function(e){
            console.log(e);
            swal({
                title:'更新失敗！請聯絡網站維護人員',
                type:'error',
            })
        }
    });
}
//endregion

// 字母匹配
function dislodgeLetter(str) {
    var result;
    var reg = /[a-zA-Z]+/;  //[a-zA-Z]表示匹配字母，g表示全局匹配
    while (result = str.match(reg)) { //判断str.match(reg)是否没有字母了
      str = str.replace(result[0], ''); //替换掉字母  result[0] 是 str.match(reg)匹配到的字母
    }
    return str;
}

//監所服務紀錄表(update)的必填欄位 region
function check_updat_counsel_data()
{
    var refferal = $("#refferal").val();
    var name = $("#name").val();
    var birth = $("#birth").val();
    var pid = $("#pid").val();
    var cocktail_therapy_status = $("#cocktail_therapy_status").val();
    var cocktail_therapy_name = $("#cocktail_therapy_name").val();


    var errorstr = "";

    if (refferal == null) {
        errorstr += "未選擇矯正機關!\r\n";
    }
    if (name == null) {
        errorstr += "未填寫姓名!\r\n";
    }
    if (birth == null) {
        errorstr += "未填寫出生年月日!\r\n";
    }
    
    if (pid == null) {
        errorstr += "未填寫身分證字號!\r\n";
    }

    if (errorstr == "") {
        if (refferal.replace(/\s*/g, "") == '') {
            errorstr += "未選擇矯正機關!\r\n";
        }
        if (name.replace(/\s*/g, "") == '') {
            errorstr += "未填寫姓名!\r\n";
        }
        if (birth.replace(/\s*/g, "") == '') {
            errorstr += "未填寫出生年月日!\r\n";
        }

        if (pid.replace(/\s*/g, "") == '') {
            errorstr += "未填寫身分證字號!\r\n";
        }
        else
        {
            if(dislodgeLetter(pid).substr(0,1) != "1" && dislodgeLetter(pid).substr(0,1) != "2")
            {
                errorstr += "請輸入有效的身分證字號!\r\n";
            }
        }
        
        if(cocktail_therapy_status=="是")
        {
            if (cocktail_therapy_name.replace(/\s*/g, "") == '') {
                errorstr += "未填寫雞尾酒療法服用之藥物名稱!\r\n";
            }
        }
    }

    return errorstr;
}
//endregion



//點擊監所服務紀錄表旁邊的"+"功能 新增第n次來電 region

function addNewTag() {
    var cssString = "";
    // var herfindex = 1;
    cssString += '<li class="new_phone_rec nav-item" role="presentation">' +
        '<a class="nav-link" id="new-tab" data-toggle="pill" href="#tabx0_new" role="tab"  aria-selected="false">' +
        '<b>' + '新增訪談紀錄' + '</b>' +
        '</a>' +
        '</li>'

       if ($('.new_phone_rec').length < 1) {
            $("#open_rec").before(cssString);
        }
        reservation_rec_new();

        $(".nav-link").click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        })

        $('#myTab a[href="#tabx0_new"]').tab('show');
}
//endregion


//預約訪談(所有)region
function reservation_rec_new(){
    // $("#reservation").on("click",function(){
        //按一下按鈕新增表格region   
        var cssString3 = "";
        cssString3 +=
            '<div class="tab-pane fade" id="tabx0_new" role="tabpanel" aria-labelledby="new-tab">'+
            '<div class="col-sm-12 text-center">'+
            '<div class="table-wrap">'+
            '<div class="table-responsive">'+
            '<table style="width:auto;" class="table table-bordered">'+
                '<tr>' +
                    '<td colspan="2">個人預約訪談紀錄</td>' +
                '</tr>' +
                '<tr  style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">預約訪談時間</td>' +
                    '<td style="">'+
                        '<input id="start_date" type="date">'+
                        ' '+
                        '<select id="start_time_h">'+
                            '<option>00</option>'+
                            '<option>01</option>'+
                            '<option>02</option>'+
                            '<option>03</option>'+
                            '<option>04</option>'+
                            '<option>05</option>'+
                            '<option>06</option>'+
                            '<option>07</option>'+
                            '<option>08</option>'+
                            '<option>09</option>'+
                            '<option>10</option>'+
                            '<option>11</option>'+
                            '<option>12</option>'+
                            '<option>13</option>'+
                            '<option>14</option>'+
                            '<option>15</option>'+
                            '<option>16</option>'+
                            '<option>17</option>'+
                            '<option>18</option>'+
                            '<option>19</option>'+
                            '<option>20</option>'+
                            '<option>21</option>'+
                            '<option>22</option>'+
                            '<option>23</option>'+
                        '</select>'+
                        '<label>：</label>'+
                        '<select id="start_time_m">'+
                            '<option>00</option>'+
                            '<option>30</option>'+                                         
                        '</select>'+
                        ' '+
                        '<label>至</label>'+
                        ' '+
                        '<select id="end_time_h">'+
                            '<option>00</option>'+
                            '<option>01</option>'+
                            '<option>02</option>'+
                            '<option>03</option>'+
                            '<option>04</option>'+
                            '<option>05</option>'+
                            '<option>06</option>'+
                            '<option>07</option>'+
                            '<option>08</option>'+
                            '<option>09</option>'+
                            '<option>10</option>'+
                            '<option>11</option>'+
                            '<option>12</option>'+
                            '<option>13</option>'+
                            '<option>14</option>'+
                            '<option>15</option>'+
                            '<option>16</option>'+
                            '<option>17</option>'+
                            '<option>18</option>'+
                            '<option>19</option>'+
                            '<option>20</option>'+
                            '<option>21</option>'+
                            '<option>22</option>'+
                            '<option>23</option>'+
                        '</select>'+
                        '<label>：</label>'+
                        '<select id="end_time_m">'+
                            '<option>00</option>'+
                            '<option>30</option>'+                                         
                        '</select>'+
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">指派工作人員</td>' +
                    '<td style="">'+
                        '主：'+                                             
                            '<select class="user5" id="one_user" >'+
                                '<option value="" disabled selected hidden>請選擇工作人員</option>'+
                            '</select>'+
                        '<br>'+
                        '<br>'+
                        '副：'+
                            '<select class="user5" id="two_user">'+
                                '<option value="" disabled selected hidden>請選擇工作人員</option>'+
                            '</select>'+
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">方式</td>' +
                    '<td style="">'+
                        '<input id="location_detail" type="text">'+
                        '<br>'+
                        '<input style="zoom:1.5" name="location[]" type="radio" value="社區">社區'+
                        '<input style="zoom:1.5" name="location[]" type="radio" value="家訪">家訪'+
                        '<input style="zoom:1.5" name="location[]" type="radio" value="監所">監所'+
                        '<input style="zoom:1.5" name="location[]" type="radio" value="其他">其他：<input id="other_location" type="text" value="">'+
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;">備註</td>' +
                    '<td >'+
                        '<textarea style="height:150px;width:700px;resize: none;font-size: 20px;" name="remark" id="remark" placeholder="請輸入備註內容" ></textarea>'+
                    '</td>' +
                '</tr>' +
                '<tr>' +
                    '<td colspan="2"><div><button id="face_add" style="font-size:20px" class="btn btn-default" >新增</button> <button id="ncancel" style="font-size:20px" class="btn btn-default" onClick="cancel()">取消</button></div></td>' +
                '</tr>' +
            '</table>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>';
                    
        $("#myTabContent").append(cssString3);
        //endregion
            
        $.ajax({
            type:'POST',
            url:'database/find_check_user.php',
            dataType: "JSON",
            async: false,//啟用同步請求
            success: function (data) {
                for (var index in data.Id) {
                    $("#one_user").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                    $("#two_user").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                }
            },
        });    
        //預設值region
        $("#end_time_h").val("13");
        $("#start_time_h").val("12");
        //endregion
            
        //預約面訪懸浮視窗預設值region
        $("#start_time_h").on('change',function(){
        //    console.log(parseInt($("#start_time_h").val())+1);
            var start_time = parseInt($("#start_time_h").val())+1;
            if(start_time == 1 || start_time == 2 || start_time == 3 || start_time == 4 || start_time == 5 || start_time == 6 || start_time == 7 || start_time == 8 || start_time == 9 ){
                start_time = parseInt($("#start_time_h").val())+1;
               start_time = "0"+start_time;
            }
            if(start_time == 24){
                start_time = "00"
            }
            $("#end_time_h").val(start_time);
        });
        
        $("#start_time_m").on('change',function(){
            $("#end_time_m").val($("#start_time_m").val());
        });
        
        $("#phone_cancel").on('click',function(){
            $("#end_date").val("");
            $("#start_date").val("")
            $("#end_time_h").val("13");
            $("#start_time_h").val("12");
        });
        //endregion
        //按下face_add新增預約按鈕後 region
        $("#face_add").on('click',function(){
            var stau = false;

            if (check_open_reservation_note_value_str() != "") 
            {
                    
                stau = false;
            }
            else {
                stau = true;
            }
            console.log(stau);

            if(!stau)
            {
                swal({
                    title:check_open_reservation_note_value_str(),
                    type:'error'
                  })
            }
            else
            { 
                //抓取網址傳入行事曆
                get_url = location.href;
                //check radio
                check_creat_radio_value();
                // check_radio_value();
                // check_main_checkbox();
                var title = $("#name").val()+'('+$("#start_date").val()+')監所服務-訪談';
                var start_time = $("#start_time_h").val()+":"+$("#start_time_m").val();
                var end_time = $("#end_time_h").val()+":"+$("#end_time_m").val();
                //    console.log(title)
                //    var name =document.getElementsByName('join[]');
                //分割年月region
                var Arr=[];
                var date = $("#start_date").val();
                Arr = date.split("-"); // 根据“-”分割

                y = Arr[0];
                m = Arr[1];
                //endregion

                //將年月日時間組合region
                var start_date = $("#start_date").val()+" "+$("#start_time_h").val()+":"+$("#start_time_m").val();
                var end_date = $("#start_date").val()+" "+$("#end_time_h").val()+":"+$("#end_time_m").val();
                //endregion

                //傳送至行事曆和通知region
                    
                    
                    $.ajax({
                            url: "database/add_new_note.php",
                            data:{
                                Title:title,
                                Url:get_url,
                                Start_date:start_date,
                                End_date:end_date,
                                One_user:$("#one_user").val(),
                                Two_user:$("#two_user").val(),
                            },
                            type: "POST",
                            dataType: "JSON",
                            success: function (data) {
                                if(data == 1){
                                    swal({
                                        title:'新增成功！',
                                        type:'success',                        
                                    }).then(function(){
                                        location.reload();
                                    }) 
                                }else{
                                    swal({
                                    title:'新增失敗！',
                                    type:'error',
                                    })
                                } 
                            },
                        error:function(e){
                            swal({
                                title:'新增失敗！',
                                type:'error',
                            })
                        }
                        });
                //    //endregion


                //新增至面訪總表region
                    var counsel_id = getUrlVars()["counsel_id"];
                    $.ajax({
                            url: "database/add_new_counsel_face.php",
                            data:{
                                Counsel_id:counsel_id,
                                Name:$("#name").val(),
                                Pid:$("#pid").val(),
                                Referral:$("#refferal").val(),
                                Location:$("#location_detail").val(),
                                Location_detail:location_val,
                                Start_date:$("#start_date").val(),
                                End_date:$("#start_date").val(),
                                Start_time:start_time,
                                End_time:end_time,
                                One_user:$("#one_user").val(),
                                Two_user:$("#two_user").val(),
                                Remark:$("#remark").val(),
                            },
                            type: "POST",
                            dataType: "JSON",
                            success: function (data) {
                                if(data == 1){
                                    swal({
                                        title:'新增成功！',
                                        type:'success',                        
                                    }).then(function(){
                                        location.reload();
                                    }) 
                                }else{
                                    swal({
                                    title:'新增失敗！',
                                    type:'error',
                                    })
                                } 
                            },
                        error:function(e){
                            swal({
                                title:'新增失敗！',
                                type:'error',
                            })
                        }
                        });
                //endregion

            }
        });
        //endregion
    // });
    //endregion
}
//endregion


//檢查監所服務訪談紀錄的必填欄位region
function check_open_reservation_note_value_str()
{
    var start_date = $("#start_date").val();
    var one_user = $("#one_user").val();
    // var two_user = $("#two_user").val();
    var location_detail = $("#location_detail").val();
    var location_other = $('#other_location').val();
    var location_radio =  $("input[type=radio][name='location[]']:checked").length;
    var errorstr = "";

    if (start_date == null) {
        errorstr += "未填寫預約訪談日期!\r\n";
    }
    if (one_user == null) {
        errorstr += "未選擇主要接案工作人員!\r\n";
    }
    // if (two_user == null) {
    //     errorstr += "未選擇副接案工作人員!\r\n";
    // }
    if (location_detail == null && location_other == null) {
        errorstr += "未填寫訪談方式!\r\n";
    }
    if (location_radio <=0) {
        errorstr += "未選擇訪談方式分類!\r\n";
    }
    if (errorstr == "") {
        if (start_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫預約訪談日期!\r\n";
        }
        if (one_user.replace(/\s*/g, "") == '') {
            errorstr += "未選擇主要接案工作人員!\r\n";
        }
        // if (two_user.replace(/\s*/g, "") == '') {
        //     errorstr += "未選擇副工作人員!\r\n";
        // }
        if (location_detail.replace(/\s*/g, "") == '' && location_other.replace(/\s*/g, "") == '') {
            errorstr += "未填寫訪談方式!\r\n";
        }
    }

    return errorstr;
}
//endregion

function counsel_visit_show() {
    //印出監所服務預約訪談紀錄表格region
    var counsel_id = getUrlVars()["counsel_id"];
    //console.log(id);
    $.ajax({
        url: "database/find_counsel_face.php",
        data:{
            Counsel_id:counsel_id,
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {      
            var cssString5 = "";
            var hometabcssString5 = "";
            var Name_arr = [];
            var Location_detail_arr = [];
            var Id_arr = [];
            $.each(data,function(index,value){
                cssString5 +=
                '<div class="tab-pane fade" id="resrectabx0'+value.Id+'" role="tabpanel" aria-labelledby="new-'+value.Id+'tab">'+
                '<div class="col-sm-12 text-center">'+
                '<div class="table-wrap">'+
                '<div class="table-responsive">'+
                '<table style="width:auto;" class="table table-bordered">'+
                    '<tr>' +
                        '<td colspan="2">個人預約訪談紀錄</td>' +
                    '</tr>' +
                    '<tr  style="text-align:left">' +
                        '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">預約訪談時間</td>' +
                        '<td style="">'+
                            '<input class="question'+value.Id+'" id="start_date'+value.Id+'" type="date" value='+value.Start_date+' >'+
                            ' '+
                            '<select class="question'+value.Id+'" id="start_time_h'+value.Id+'" >'+
                                '<option>00</option>'+
                                '<option>01</option>'+
                                '<option>02</option>'+
                                '<option>03</option>'+
                                '<option>04</option>'+
                                '<option>05</option>'+
                                '<option>06</option>'+
                                '<option>07</option>'+
                                '<option>08</option>'+
                                '<option>09</option>'+
                                '<option>10</option>'+
                                '<option>11</option>'+
                                '<option>12</option>'+
                                '<option>13</option>'+
                                '<option>14</option>'+
                                '<option>15</option>'+
                                '<option>16</option>'+
                                '<option>17</option>'+
                                '<option>18</option>'+
                                '<option>19</option>'+
                                '<option>20</option>'+
                                '<option>21</option>'+
                                '<option>22</option>'+
                                '<option>23</option>'+
                            '</select>'+
                            '<label>：</label>'+
                            '<select class="question'+value.Id+'" id="start_time_m'+value.Id+'" >'+
                                '<option>00</option>'+
                                '<option>30</option>'+                                         
                            '</select>'+
                            ' '+
                            '<label>至</label>'+
                            ' '+
                            '<select class="question'+value.Id+'" id="end_time_h'+value.Id+'" >'+
                                '<option>00</option>'+
                                '<option>01</option>'+
                                '<option>02</option>'+
                                '<option>03</option>'+
                                '<option>04</option>'+
                                '<option>05</option>'+
                                '<option>06</option>'+
                                '<option>07</option>'+
                                '<option>08</option>'+
                                '<option>09</option>'+
                                '<option>10</option>'+
                                '<option>11</option>'+
                                '<option>12</option>'+
                                '<option>13</option>'+
                                '<option>14</option>'+
                                '<option>15</option>'+
                                '<option>16</option>'+
                                '<option>17</option>'+
                                '<option>18</option>'+
                                '<option>19</option>'+
                                '<option>20</option>'+
                                '<option>21</option>'+
                                '<option>22</option>'+
                                '<option>23</option>'+
                            '</select>'+
                            '<label>：</label>'+
                            '<select class="question'+value.Id+'" id="end_time_m'+value.Id+'" >'+
                                '<option>00</option>'+
                                '<option>30</option>'+                                         
                            '</select>'+
                        '</td>' +
                    '</tr>' +
                    '<tr style="text-align:left">' +
                        '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">指派工作人員</td>' +
                        '<td style="">'+
                            '主：'+                                             
                                '<select class="user2 question'+value.Id+'" id="department1'+value.Id+'one_user" >'+
                                    '<option value=""  selected hidden>請選擇工作人員</option>'+
                                '</select>'+
                            '<br>'+
                            '<br>'+
                            '副：'+
                                '<select class="user2 question'+value.Id+'" id="department2'+value.Id+'two_user" >'+
                                    '<option value=""  selected hidden>請選擇工作人員</option>'+
                                '</select>'+
                        '</td>' +
                    '</tr>' +
                    '<tr style="text-align:left">' +
                        '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">方式</td>' +
                        '<td style="">'+
                            '<input class="question'+value.Id+'" id="location_detail'+value.Id+'" type="text" value='+value.Location+' >'+
                            '<br>'+
                            '<input class="question'+value.Id+'" style="zoom:1.5" name="location'+value.Id+'[]" type="radio" value="社區" >社區'+
                            '<input class="question'+value.Id+'" style="zoom:1.5" name="location'+value.Id+'[]" type="radio" value="家訪" >家訪'+
                            '<input class="question'+value.Id+'" style="zoom:1.5" name="location'+value.Id+'[]" type="radio" value="監所" >監所'+
                            '<input class="question'+value.Id+'" style="zoom:1.5" name="location'+value.Id+'[]" type="radio" value="其他" >其他：<input class="question'+value.Id+'" id="other_location'+value.Id+'" type="text" value="" >'+
                        '</td>' +
                    '</tr>' +
                    '<tr style="text-align:left">' +
                        '<td style="text-align:right;background-color:rgb(255 201 54);border-right-color: white;">備註</td>' +
                        '<td >'+
                            '<textarea class="question'+value.Id+'" style="height:150px;width:700px;resize: none;font-size: 20px;" name="remark" id="remark'+value.Id+'" placeholder="請輸入備註內容" >'+value.Remark+'</textarea>'+
                        '</td>' +
                    '</tr>' +
                    '<tr>' +
                        '<td colspan="2">'+
                        '<div id="edit_div'+value.Id+'"><button style="font-size:20px" class="btn btn-default" onClick="edit('+value.Id+')">編輯</button></div>'+
                        '<div id="after_edit'+value.Id+'" hidden><button id="save" style="font-size:20px" class="btn btn-default" onClick="update_add_face('+value.Id+')" hidden>修改</button>'+
                        ' <button id="cancel_face" style="font-size:20px" class="btn btn-default" onClick="cancel_face('+value.Id+')" hidden>取消</button></div>'+
                        '</td>'+
                    '</tr>' +
                    '</table>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>';

                hometabcssString5 += '<li class="nav-item reservation_rec_tag" role="presentation">' +
                        '<a class="nav-link" id="new-'+value.Id+'tab" data-toggle="pill" href="#resrectabx0'+value.Id+'" role="tab"  aria-selected="true">' +
                        '<b>' + '訪談紀錄'+ (parseInt(index)+1)  + '</b>' +
                        '</a>' +
                        '</li>';

                Name_arr.push(value.Name);
                Location_detail_arr.push(value.Location_detail);
                Id_arr.push(value.Id);
            });

            
            


            $("#myTabContent").append('<br/>'+cssString5);

            $("#counsel_rec_all").after(hometabcssString5);

            $(".nav-link").click(function (e) {
                e.preventDefault();
                $(this).tab('show');
            });

            $.each(data,function(index,value){
                $(".interview_date").eq(parseInt(index)).val(trans_to_Tw(value.Start_date));
            });
            
            //測試封鎖選項
            $.each(data,function(index,value){
                $('.question'+value.Id+'').attr('disabled', true);
            });
            
            
            //用迴圈自動填入相應的值region
            $.each(data,function(index,value){
                append_user2($('#department1'+value.Id+'one_user'),$('#department2'+value.Id+'two_user')); 
                $('#department1'+value.Id+'one_user').val(value.One_user_name);
                $('#department2'+value.Id+'two_user').val(value.Two_user_name);
                append_user3($('#'+value.Id+'one_user'));
                append_user3($('#'+value.Id+'two_user'));
            });
            //endregion

                function append_user2(one_user,two_user){             
                    $.ajax({
                        type:'POST',
                        url:'database/find_check_user.php',
                        dataType: "JSON",
                        async: false,//啟用同步請求
                        success: function (data) {
                            for (var index in data.Id) {
                                $(one_user).append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');    
                                $(two_user).append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');                               
                            }
                        },
                    });
                }

                function append_user3(user){             
                    $.ajax({
                        type:'POST',
                        url:'database/find_check_user.php',
                        dataType: "JSON",
                        async: false,//啟用同步請求
                        success: function (data) {
                            for (var index in data.Id) {
                                user.append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');                                   
                            }
                        },
                    });
                }
               
            //填入預約下拉開始結束時間region
            $.each(data,function(index,value){
                var s_ArrArr=[];
                var e_ArrArr=[];
                var s_date = value.Start_time;
                var e_date = value.End_time;
                s_Arr = s_date.split(":"); // 根据“-”分割
                s_h = s_Arr[0];
                s_m = s_Arr[1];
//                console.log(value.Id);
                e_Arr = e_date.split(":"); // 根据“-”分割
                e_h = e_Arr[0];
                e_m = e_Arr[1];
                $('#start_time_h'+value.Id+'').val(s_h);
                $('#start_time_m'+value.Id+'').val(s_m);
                $('#end_time_h'+value.Id+'').val(e_h);
                $('#end_time_m'+value.Id+'').val(e_m);
            });
            //endregion
            
            
            check_radio_value_same(Name_arr,Location_detail_arr,Id_arr);

        },
        error:function(e){
            notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員');
        }
    });
//endregion
}




//檢查欄位 個人監所服務紀錄(Update) region
function check_open_phone_note_value_str2(id)
{
  var ncall_datetime =  $('#ncall_datetime'+id+'').val();
  var ninfo_name = $('#ninfo_name'+id+'').val();
  var nrelationship = $('#nrelationship'+id+'').val();
  var nphone = $('#nphone'+id+'').val();
//   var ndepartment = $('#ndepartment'+id+'').val();
  var nuser = $('#ndepartment'+id+'nuser').val();
  var nnote =$('#nnote'+id+'').val();
  var errorstr = "";

    if (ncall_datetime == null) {
        errorstr += "未填寫來電日期!\r\n";
    }
    if (ninfo_name == null) {
        errorstr += "未填寫個案姓名!\r\n";
    }
    if (nrelationship == null) {
        errorstr += "未填寫聯絡人與案主關係!\r\n";
    }
    if (nphone == null) {
        errorstr += "未填寫連絡人電話!\r\n";
    }
    if (nuser == null) {
        errorstr += "未選擇接案工作人員!\r\n";
    }
    if (nnote == null) {
        errorstr += "未填寫通話內容!\r\n";
    }
    if (errorstr == "") {
        if (ncall_datetime.replace(/\s*/g, "") == '') {
            errorstr += "未填寫來電日期!\r\n";
        }
        if (ninfo_name.replace(/\s*/g, "") == '') {
            errorstr += "未填寫個案姓名!\r\n";
        }
        if (nrelationship.replace(/\s*/g, "") == '') {
            errorstr += "未填寫聯絡人與案主關係!\r\n";
        }
        if (nphone.replace(/\s*/g, "") == '') {
            errorstr += "未填寫連絡人電話!\r\n";
        }
        if (nuser.replace(/\s*/g, "") == '') {
            errorstr += "未選擇接案工作人員!\r\n";
        }
        if (nnote.replace(/\s*/g, "") == '') {
            errorstr += "未填寫通話內容!\r\n";
        }
    }

    return errorstr;
}
//endregion

//檢查欄位 個人面訪紀錄(Update) region
function check_open_reservation_note_value_str2(id)
{
    var start_date = $('#start_date'+id+'').val();
    var one_user = $('#department1'+id+'one_user').val();
    // var two_user = $('#department2'+id+'two_user').val();
    var location_detail = $('#location_detail'+id+'').val();
    var location_other = $('#other_location'+id+'').val();
    var location_radio =  $('input[type=radio][name="location'+id+'[]"]:checked').length;
    var errorstr = "";

    if (start_date == null) {
        errorstr += "未填寫預約訪談日期!\r\n";
    }
    if (one_user == null) {
        errorstr += "未選擇主要接案工作人員!\r\n";
    }
    // if (two_user == null) {
    //     errorstr += "未選擇副工作人員!\r\n";
    // }
    if (location_detail == null && location_other == null) {
        errorstr += "未填寫面訪方式!\r\n";
    }
    if (location_radio <=0) {
        errorstr += "未選擇面訪方式分類!\r\n";
    }
    if (errorstr == "") {
        if (start_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫預約訪談日期!\r\n";
        }
        if (one_user.replace(/\s*/g, "") == '') {
            errorstr += "未選擇主要接案工作人員!\r\n";
        }
        // if (two_user.replace(/\s*/g, "") == '') {
        //     errorstr += "未選擇副工作人員!\r\n";
        // }
        if (location_detail.replace(/\s*/g, "") == '' && location_other.replace(/\s*/g, "") == '') {
            errorstr += "未填寫面訪方式!\r\n";
        }
    }

    return errorstr;
}
//endregion

//更新phone_note region
function update_phone_note(id){
    var stau = false;

    if (check_open_phone_note_value_str2(id) != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }
    console.log(stau);

    if(!stau)
    {
        // alert(check_open_phone_note_value_str2(id));
        swal({
            title:check_open_phone_note_value_str2(id),
            type:'error'
          })
    }
    else
    {
        var phone_id = getUrlVars()["phone_id"];
        //    console.log($('#ncall_datetime'+id+'').val());
        $.ajax({
            url: "database/update_personal_history.php",
            data:{
                Id:id,
                Phone_id:phone_id,
                nCall_datetime:$('#ncall_datetime'+id+'').val(),
                nInfo_Name:$('#ninfo_name'+id+'').val(),
                nRelationship_detail:$('#nrelationship'+id+'').val(),
                nR_phone:$('#nphone'+id+'').val(),
                nuser:$('#ndepartment'+id+'nuser').val(),
                nPhone_note:$('#nnote'+id+'').val(),
            },
            type: "POST",
            dataType: "JSON",
            success: function (data) {
    //            console.log(data);
                if(data == 1){
                    swal({
                        title:'更新成功！',
                        type:'success',                        
                    }).then(function(){
                            location.reload();
                    }) 
                }else{
                    swal({
                        title:'更新失敗！',
                        type:'error',
                        })
                } 
            },
            error:function(e){
                console.log(e);
                swal({
                    title:'更新失敗！',
                    type:'error',
                    })
            }
        });
    }

}
//endregion

//新增至開案個案按鈕 region
$("#trans_to_opencase_submit").on('click',function(){
    var counsel_id = getUrlVars()["counsel_id"];
    var id = getUrlVars()["id"];

    var tran_case_name = '';
    var tran_case_pid = '';
    var tran_case_phone = '';
    var tran_case_birth = '';
    var tran_case_referral = '';
    var tran_case_sex_o = '';

    if($("#open_object_type").val() == "親職兒少")
    {
        var open_case_t_sn = $("#case_id_prestr").val() + $("#open_case_t_sn").val();
    }
    else
    {
        var open_case_t_sn = $('#open_case_t_sn').val()
    }

    var stau = false;

    if (check_trans_to_opencase_value() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }
    console.log(stau);

    if(!stau)
    {
        // alert(check_trans_to_opencase_value());
        swal({
            title:check_trans_to_opencase_value(),
            type:'error'
          })
    }
    else
    {
        $.ajax({
            url: "database/find_counsel_data_detail.php",
            data:{
                Id:id,
                Counsel_id:counsel_id,
            },
            type: "POST",
            dataType: "JSON",
            async :false,
            success: function (data) {
                // console.log(data)
                tran_case_name = data[0].Name;
                tran_case_gender = data[0].Gender;
                tran_case_pid = data[0].Pid;
                tran_case_phone = data[0].Info_phone;
                tran_case_birth = data[0].Birth;
                // tran_case_referral = data[0].Referral_detail;
                tran_case_referral = data[0].Refferal;
                tran_case_sex_o = data[0].Sexual_orientation;
            },
            error:function(e){
                notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員!');
            }
        });

        window.location.href = 'phone_trans_to_opencase.php?unopen_type=counsel&id='+counsel_id.replace(/^\s+|\s+$/gm,'')+'&case_id='+open_case_t_sn.replace(/^\s+|\s+$/gm,'')+'&case_property='+$('#open_case_type').val()+'&object_type='+$('#open_object_type').val()+'&tran_case_name='+tran_case_name+'&tran_case_gender='+tran_case_gender+'&tran_case_phone='+tran_case_phone+'&tran_case_pid='+tran_case_pid+'&tran_case_birth='+tran_case_birth+'&tran_case_referral='+tran_case_referral+'&tran_case_sex_o='+tran_case_sex_o;
    }
});
//endregion


window.submit_ab_id_str = "";
$('#case_id_prestr').on('change', function() {
    
    var this_val = this.value;

    submit_ab_id_str = this_val;

    find_case_auto_id("親職兒少");
});    


// 根據服務對象類型 自動填入 開案編號 region
$('#open_object_type').on('change', function() {

    $("#open_case_t_sn").val('');
    var object_type_val = this.value;

    

    if(object_type_val == "親職兒少")
    {
        $("#case_id_prestr").show();

    }
    else
    {
        $("#case_id_prestr").hide();
    }

    find_case_auto_id(object_type_val);
});
//endregion

// 自動查詢沒使用過的編號 region
find_case_auto_id = function(object_type_val) {
    // 自動查詢沒使用過的編號
    $.ajax({
        url: "database/find_trans_automatic_id.php",
        data:{
            keyword:object_type_val,
            ab_id_str:submit_ab_id_str,
        },
        type: "POST",
        dataType: "JSON",
        async :false,
        success: function (data) {
            var case_id = 0;

            // console.log(data[0]?.Case_id)
            if(typeof(data[0]?.Case_id) != 'undefined')
            {
                case_id = data[0]?.Case_id;
            }
            else
            {
                case_id = 0;
            }
    
            
            var str_id = (parseInt(case_id)+1).toString();
           
           switch (object_type_val) {
            case '一般藥癮者':
            case '藥癮家庭':   
                    $("#open_case_t_sn").val("RE"+str_id);
                break;
            case '愛滋感染者':
                    $("#open_case_t_sn").val(str_id);
                break;

            case '親職兒少':
                    if(str_id == "NaN")
                    {
                        $("#open_case_t_sn").val("");
                    }
                    else
                    {
                        $("#open_case_t_sn").val(str_id);
                    }
                    
                break;

            default:
                    $("#open_case_t_sn").val("");
                break;
           }
        },
        error:function(e){
            console.log(e);
            notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員!');
        }
    });
}

//檢查欄位 轉案欄位 region
function check_trans_to_opencase_value()
{
    var open_case_t_sn = $('#open_case_t_sn').val();
    var open_case_type = $('#open_case_type').val();
    var open_object_type = $('#open_object_type').val();
    var caseid_repeat = check_case_isrepeat();
    var errorstr = "";


    var case_id_c_2 = "none";
    if (open_case_t_sn.replace(/\s*/g, "") != '') {

        if(open_case_t_sn.includes("RE"))
        {
            case_id_c_2 = open_case_t_sn.replace("RE", "")
        }
    }

    if (open_case_t_sn == null) {
        errorstr += "未填寫開案編號!\r\n";
    }
    if (open_case_type == null) {
        errorstr += "未選擇類別屬性!\r\n";
    }
    if (open_object_type == null) {
        errorstr += "未選擇個案類別!\r\n";
    }
    if (errorstr == "") {
        // console.log(caseid_repeat)
        if(caseid_repeat)
        {
            errorstr += "開案編號重複!!!\r\n";
        }
        if (open_case_t_sn.replace(/\s*/g, "") == '' || case_id_c_2.replace(/\s*/g, "") == '') {
            errorstr += "未填寫開案編號!\r\n";
        }
        if (open_case_type.replace(/\s*/g, "") == '') {
            errorstr += "未選擇類別屬性!\r\n";
        }
        if (open_object_type.replace(/\s*/g, "") == '') {
            errorstr += "未選擇個案類別!\r\n";
        }
    }

    return errorstr;
}
//endregion

//檢查開案編號是否重複 region
function check_case_isrepeat() {
    
    var isrepeat = false;

    if($("#open_object_type").val() == "親職兒少")
    {
        var r_case_id = $("#case_id_prestr").val() + $("#open_case_t_sn").val();
    }
    else
    {
        var r_case_id = $("#open_case_t_sn").val();
    }
    

    // console.log(r_case_id)

    $.ajax({
        url: "database/find_repeat_caseid.php",
        data: {
            Open_id:r_case_id
        },
        type: "POST",
        dataType: "JSON",
        async :false,
        success: function (data) {
            // console.log(data)
            if(data == 1)
            {
                isrepeat = true;
            }
            else
            {
                isrepeat = false;
            }
        },
        error: function (e) {
            // notyf.alert('伺服器錯誤，無法載入，請聯絡網站維護人員!');
        }
    });
    

    return isrepeat;
}
//endregion

//取消重整region
function counsel_cancel(){
    location.reload();
}
//endregion

//判斷自動生成地點、主要戒治物質radio值region
function check_creat_radio_value(){
    //取radio所有值
    var join_radio =document.getElementsByName('join[]');
    var location_radio =document.getElementsByName('location[]');

    //長度
    var join_len = join_radio.length;
    var location_len = location_radio.length;
    //宣告陣列供外部使用
    join_val= new Array();
    
    for (i = 0; i < join_len; i++)
    {
        if (join_radio[i].value != "")
        {
           join_val.push(join_radio[i].value);
        }    
    }
    for (i = 0; i < location_len; i++)
    {
        if (location_radio[i].checked == true)
        {
           location_val = location_radio[i].value;
           if(location_val == "其他"){
               location_val = $("#other_location").val();
           }
        }    
    }
}
//endregion

//判斷預約自動生成地點radio值是否相同就選取region
function check_radio_value_same(data_len,location,id){
//    console.log(data_len,location,id)
    //取radio所有值    
    for(var x in data_len){  
    //    console.log(location[x])
        var location_radio =document.getElementsByName('location'+id[x]+'[]');
    //    console.log(location_radio);
        //長度
        var location_len = location_radio.length;
        // console.log(location);
        for (i = 0; i < location_len; i++)
        {
            if (location_radio[i].value == location[x])
            {
               location_radio[i].checked = true;
            }else{
                if(location[x] =="社區" || location[x] =="家訪"|| location[x] =="監所"){
                    $('#other_location'+id[x]+'').val("");
                }else{
                    location_radio[3].checked = true;
                    $('#other_location'+id[x]+'').val(location[x]);
                }
            }
        }
    }
}
//endregion


//預約表格鎖定控制region
function edit(id){
    $('.question'+id+'').attr('disabled', false);
    $('#edit_div'+id+'').attr('hidden', true);
    $('#after_edit'+id+'').attr('hidden', false);

};
function cancel_face(id){
    $('.question'+id+'').attr('disabled', true);
    $('#edit_div'+id+'').attr('hidden', false);
    $('#after_edit'+id+'').attr('hidden', true);
};
//endregion

//監所服務總表格鎖定控制region
function counsel_edit(){
    $('.counsel_question').attr('disabled', false);
    $('#edit_div').attr('hidden', true);
    $('#save_div').attr('hidden', false);
};
//endregion

//電話總表格鎖定控制2region
function phone_edit2(id){
    $('.phone_question2'+id+'').attr('disabled', false);
    $('#edit_div2'+id+'').attr('hidden', true);
    $('#save_div2'+id+'').attr('hidden', false);
};
function phone_cancel2(id){
    $('.phone_question2'+id+'').attr('disabled', true);
    $('#edit_div2'+id+'').attr('hidden', false);
    $('#save_div2'+id+'').attr('hidden', true);
};

//endregion

//修改面訪紀錄region
function update_add_face(id){
    var counsel_id = getUrlVars()["counsel_id"];
    var stau = false;

    if (check_open_reservation_note_value_str2(id) != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }
    console.log(stau);

    if(!stau)
    {
        swal({
            title:check_open_reservation_note_value_str2(id),
            type:'error'
          })
    }
    else
    {
        start_time = $('#start_time_h'+id+'').val()+":"+$('#start_time_m'+id+'').val();
        end_time = $('#end_time_h'+id+'').val()+":"+$('#end_time_m'+id+'').val();
        
        //判斷面訪修改的radio值region
            //取radio所有值
            var location_radio =document.getElementsByName('location'+id+'[]');
    
            //長度
            var location_len = location_radio.length;
            //宣告陣列供外部使用
            
            for (i = 0; i < location_len; i++)
            {
                if (location_radio[i].checked == true)
                {
                   location_val = location_radio[i].value;
                   if(location_val == "其他"){
                       location_val = $('#other_location'+id+'').val();
                   }
                }    
            }

        $.ajax({
            url: "database/update_counsel_face.php",
            data:{
                    Id:id,
                    Counsel_id:counsel_id,  
                    Add_date:$('#start_date'+id+'').val(),
                    End_date:$('#start_date'+id+'').val(),
                    Start_time:start_time,
                    End_time:end_time,
                    One_user:$('#department1'+id+'one_user').val(),
                    Two_user:$('#department2'+id+'two_user').val(),
                    Location:$('#location_detail'+id+'').val(),
                    Location_detail:location_val,
                    Remark:$('#remark'+id+'').val(),
            },
            type: "POST",
            dataType: "JSON",
            success: function (data) {            
                if(data == 1){
                    swal({
                        title:'修改成功！',
                        type:'success',                        
                    }).then(function(){
                            location.reload();
                    }) 
                }else{
                    swal({
                        title:'修改失敗！',
                        type:'error',
                     })
                } 
            },
            error:function(e){
                swal({
                    title:'修改失敗！',
                    type:'error',
                 })
            }
        });
    }

}
//endregion

//進入預覽WORD頁面region
$("#preview_word").on('click',function(){
    var counsel_id = getUrlVars()["counsel_id"];
//    console.log(id);
    location.href = 'preview_word.php?counsel_id='+counsel_id+'';
});

$("#preview_word2").on('click',function(){
    var counsel_id = getUrlVars()["counsel_id"];
//    console.log(id);
    location.href = 'preview_word2.php?counsel_id='+counsel_id+'';
})
//endregion




