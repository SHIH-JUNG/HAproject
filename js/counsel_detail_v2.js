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

    
    load_face_time_picker('start_time_h');
    load_face_time_picker('end_time_h');

    add_user_option('one_user');
    add_user_option('two_user');

    // 載入監所服務記錄(第一筆)
    load_counsel_addfirst_datas();

    //載入訪談記錄表格
    load_counsel_face_rec_datas();

    // 鎖定監所服務記錄內容
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

       //手動新增按鈕點擊跳出模態框
    $('#myModal').on('shown.bs.modal', function () {
        $('#trans_to_opencase').trigger('focus');
    });
});
//endregion 

// 載入監所服務記錄表基本資料 region
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
            notyf.alert('伺服器錯誤,無法載入');
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
    else 
    {
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
                    title:'更新失敗！請聯絡負責單位',
                    type:'error',
                })
            }  
        },
        error:function(e){
            console.log(e);
            swal({
                title:'更新失敗！請聯絡負責單位',
                type:'error',
            })
        }
    });
}
//endregion
    
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

//抓監所服務訪談記錄 region
load_counsel_face_rec_datas = function() {
    $.ajax({
        url: "database/find_counsel_face_rec_data_detail.php",
        data:{
            Counsel_id:counsel_id,
        },
        type: "POST",
        dataType: "JSON",
        async: false,
        success: function (data) {
            
            // console.log(data)

            var cssString = "";

            $.each(data,function(index,value){

                var assign_name_str = "";

                if(value.Two_user_name != "")
                {
                    assign_name_str = value.One_user_name + "、" + value.Two_user_name;
                }
                else
                {
                    assign_name_str = value.One_user_name;
                }

                var location_detail_type_str = "";

                if(value.Location_detail.includes("其他::"))
                {
                    location_detail_type_str = value.Location_detail.split("其他::")[1];
                }
                else
                {
                    location_detail_type_str = value.Location_detail;
                }

                cssString +=
                '<tr id="' +
                value.Id +
                '">' +
                '<td style="text-align:center">' +
                value.Start_date + " " +
                value.Start_time + "至" + value.End_time +
                "</td>" +
                '<td style="text-align:center">' +
                assign_name_str +
                "</td>" +
                '<td style="text-align:center">' +
                value.Location + "," + location_detail_type_str +
                "</td>" +
                '<td style="text-align:center">' +
                value.Remark +
                "</td>" +
                '<td style="text-align:center">' +
                value.Create_name +
                "</td>" +
                '<td style="text-align:center">' +
                value.Create_date +
                "</td>" +
                '<td style="text-align:center">' + 
                '<a class="update_btn" data-toggle="modal" rec_type_n="face" counsel_v_id="'+value.Id+'" style="text-decoration: underline;color:black;">查看/修改</a>' + 
                '</td>'
                "</tr>";
            });
            
            //顯示表格
            $("#call_face_rec_view").html(cssString);

            //綁定onclick事件
            $(".update_btn").attr("onclick","show_modal(this);");
        },
        error:function(e){
            notyf.alert('伺服器錯誤,無法載入');
        }
    });
}
//endregion 

// insert 訪談記錄 region
add_counsel_face = function() {
    var stau = false;

    if (check_add_counsel_face_data() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }
    // console.log(stau);

    if(!stau)
    {
        swal({
            title:check_add_counsel_face_data(),
            type:'error'
        })
    }
    else
    { 
        var location_detail_type_str = "";

        if($("[name='location_detail[]']:checked").val() == "其他")
        {
            location_detail_type_str = $("[name='location_detail[]']:checked").val() + "::" + $('#other_location').val();
        }
        else if($("[name='location_detail[]']:checked").length == 0)
        {
            location_detail_type_str = "";
        }
        else
        {
            location_detail_type_str = $("[name='location_detail[]']:checked").val();
        }

        $.ajax({                                                                                    
            url: "database/add_new_counsel_face_data_detail.php",
            data:{
                Counsel_id:counsel_id,
                Start_date:$('#start_date').val(),
                End_date:$('#start_date').val(),
                Start_time:$('#start_time_h').val() + ":" + $('#start_time_m').val() + ":00",
                End_time:$('#end_time_h').val() + ":" + $('#end_time_m').val() + ":00",
                One_user_name:$('#one_user').val(),
                Two_user_name:$('#two_user').val(),
                Location:$('#location').val(),
                Location_detail:location_detail_type_str,
                Remark:$('#remark').val(),
            },
            type: "POST",
            dataType: "JSON",
            success: function (data) {
                if(data == 1){
                    swal({
                        title:'新增訪談記錄成功！',
                        type:'success',                        
                    }).then(function(){
                        localStorage.removeItem('activeTab');
                        location.reload();
                    }) 
                }else{
                    swal({
                        title:'新增訪談記錄失敗！請聯絡負責單位',
                        type:'error',
                    })
                }  
            },
            error:function(e){
                swal({
                    title:'新增訪談記錄失敗！請聯絡負責單位',
                    type:'error',
                })
                console.log(e)
            }
        });
    }
}
// endregion

// 檢查新增訪談記錄欄位 region
check_add_counsel_face_data = function()
{
    var start_date = $("#start_date").val();
    var one_user = $("#one_user").val();
    var location = $("#location").val();
    var location_detail_len = $("[name='location_detail[]']").length;
    var other_location = $("#other_location").val();

    
    var errorstr = "";

    if (start_date == null) {
        errorstr += "未填寫預約訪談日期!\r\n";
    }
    if (one_user == null) {
        errorstr += "未填寫主要的指派工作人員!\r\n";
    }
    if (location == null) {
        errorstr += "未填寫訪談方式!\r\n";
    }
    if(location_detail_len == 0) {
        errorstr += "未選擇訪談方式分類!\r\n";
    }
    if($("[name='location_detail[]']:checked").val() == "其他")
    {
        if (other_location == null) {
            errorstr += "訪談方式選擇其他時，請填寫其他訪談方式分類內容!\r\n";
        }
    }
    if (errorstr == "") {
        if (start_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫預約訪談日期!\r\n";
        }
        if (one_user.replace(/\s*/g, "") == '') {
            errorstr += "未填寫主要的指派工作人員!\r\n";
        }
        if (location.replace(/\s*/g, "") == '') {
            errorstr += "未填寫訪談方式!\r\n";
        }
        if($("[name='location_detail[]']:checked").val() == "其他")
        {
            if (other_location.replace(/\s*/g, "") == '') {
                errorstr += "訪談方式選擇其他時，請填寫其他訪談方式分類內容!\r\n";
            }
        }
    }

    return errorstr;
}
// endregion

// 載入新增訪談記錄的時間選項 region
load_face_time_picker = function(element_id) {
    for (let index = 8; index <= 20; index++) {
        $("#" + element_id).append('<option value="'+LeadingZero(index, 2)+'">'+LeadingZero(index, 2)+'</option>');
    }
}
//endregion

// 給#update_btn綁定onclick事件 region
$(document).on("click", ".update_btn", function() {
    var $parent = $(this).parent();

    $("#update_rec_modal").on("shown.bs.modal", function () {
        $parent.children().trigger("focus");
    });
});
//endregion

// 顯示訪談記錄詳細資料modal region
show_modal = function(this_btn) {
    var get_counsel_v_id = $(this_btn).attr("counsel_v_id");

    // console.log("get_counsel_v_id", get_counsel_v_id);

    load_update_type_face_data(get_counsel_v_id);

    $("#update_rec_modal").modal('show');

    $("#modal_btn").attr("sql_id", get_counsel_v_id);
}
//endregion

// 載入面訪記錄內容 region
load_update_type_face_data = function(counsel_v_id)
{
    $.ajax({
        url: "database/find_counsel_face_rec_data_detail.php",
        data:{
            Id:counsel_v_id,
        },
        type: "POST",
        dataType: "JSON",
        async: false,
        success: function (data) {
            // console.log(data)

            var table_html_str = "";

            table_html_str =
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" width="30%"><i style="color:red;">※</i>預約面訪時間</td>' +
                    '<td style="border-bottom: solid 1px;" width="70%">' +
                        '<div class="col-sm-8">' +
                            '<div class="text-left">' +
                                '<input name="u_start_date" type="date">' +
                                '<select name="u_start_time_h" id="u_start_time_h"></select>' +
                                '<label>：</label>' +
                                '<select name="u_start_time_m">' +
                                    '<option>00</option>' +
                                    '<option>30</option>' +
                                '</select>' +
                                '<label>至</label>' +
                                '<select name="u_end_time_h" id="u_end_time_h"></select>' +
                                '<label>：</label>' +
                                '<select name="u_end_time_m">' +
                                    '<option>00</option>' +
                                    '<option>30</option>' +
                                '</select>' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">指派工作人員</td>' +
                    '<td style="border-bottom: solid 1px;">' +
                        '<div class="col-sm-8">' +
                            '<div class="text-left">' +
                                '主：<select name="u_one_user" id="u_one_user">' +
                                '<option value="">請選擇工作人員</option>' +
                                    '</select>' +
                                    '<br><br>' +
                                '副：<select name="u_two_user" id="u_two_user">' +
                                    '<option value="">請選擇工作人員</option>' +
                                    '</select>' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>方式</td>' +
                    '<td style="border-bottom: solid 1px;">' +
                        '<div class="col-sm-12">' +
                            '<div class="text-left">' +
                                '<input name="u_location" type="text"><br>' +
                                '<input style="zoom:1.5" name="u_location_detail[]" type="radio" value="社區">社區' +
                                '<input style="zoom:1.5" name="u_location_detail[]" type="radio" value="家訪">家訪' +
                                '<input style="zoom:1.5" name="u_location_detail[]" type="radio" value="監所">監所' +
                                '<input style="zoom:1.5" name="u_location_detail[]" type="radio" value="快樂聯盟">快樂聯盟' +
                                '<input style="zoom:1.5" name="u_location_detail[]" type="radio" value="其他">其他：' +
                                '<input name="u_other_location" type="text" value="">' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>'+
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">備註</td>' +
                    '<td style="border-bottom: solid 1px;">' +
                        '<div class="col-sm-8">' +
                            '<div class="text-left">' +
                                '<textarea style="height:150px;width:700px;resize: none;font-size: 20px;" name="u_remark" placeholder="請輸入備註內容"></textarea>' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">登錄日期</td>' +
                    '<td style="border-bottom: solid 1px;">' +
                        '<div class="col-sm-8">' +
                            '<div class="text-left">' +
                                '<input name="u_create_date2" type="text" disabled="disabled">' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">登錄人員</td>' +
                    '<td style="border-bottom: solid 1px;">' +
                        '<div class="col-sm-8">' +
                            '<div class="text-left">' +
                                '<input name="u_create_name2" type="text" disabled="disabled">' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">更新日期</td>' +
                    '<td style="border-bottom: solid 1px;">' +
                        '<div class="col-sm-8">' +
                            '<div class="text-left">' +
                                '<input name="u_update_date2" type="text" disabled="disabled">' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">更新人員</td>' +
                    '<td style="border-bottom: solid 1px;">' +
                        '<div class="col-sm-8">' +
                            '<div class="text-left">' +
                                '<input name="u_update_name2" type="text" disabled="disabled">' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>' ;

            $("#update_all_data").html(table_html_str);

            load_face_time_picker('u_start_time_h');
            load_face_time_picker('u_end_time_h');
            add_user_option('u_one_user');
            add_user_option('u_two_user');

            $.each(data,function(index,value){

                $('[name="u_start_date"]').val(value.Start_date);

                var u_start_time_h = value.Start_time.split(':')[0];
                var u_start_time_m = value.Start_time.split(':')[1];
                var u_end_time_h = value.End_time.split(':')[0];
                var u_end_time_m = value.End_time.split(':')[1];

                $('[name="u_start_time_h"]').val(u_start_time_h);
                $('[name="u_start_time_m"]').val(u_start_time_m);
                $('[name="u_end_time_h"]').val(u_end_time_h);
                $('[name="u_end_time_m"]').val(u_end_time_m);
                $('[name="u_one_user"]').val(value.One_user_name);
                $('[name="u_two_user"]').val(value.Two_user_name);

                $('[name="u_location"]').val(value.Location);
                if(value.Location_detail.includes("其他::"))
                {
                    var other_location = value.Location_detail.split("::");

                    $("[name='u_location_detail[]'][value='其他']").attr('checked',true);
                    $('[name="u_other_location"]').val(other_location[1]);
                } 
                else 
                {
                    $("[name='u_location_detail[]'][value='"+value.Location_detail+"']").attr('checked',true);
                }
                

                $('[name="u_remark"]').val(value.Remark);

                $('[name="u_create_date2"]').val(value.Create_date);
                $('[name="u_create_name2"]').val(value.Create_name);
                $('[name="u_update_date2"]').val(value.Update_date);
                $('[name="u_update_name2"]').val(value.Update_name);
            });            
        },
        error:function(e){
            notyf.alert('伺服器錯誤,無法載入');
            console.log(e)
        }
    });
}
//endregion

// update 電訪/面訪記錄 region
update_rec_data = function(this_btn)
{
    var attr_sql_id = $(this_btn).attr("sql_id");

    var u_location_detail_type_str = "";

    if($("[name='u_location_detail[]']:checked").val() == "其他")
    {
        u_location_detail_type_str = $("[name='u_location_detail[]']:checked").val() + "::" + $('[name="u_other_location"]').val();
    }
    else if($("[name='u_location_detail[]']:checked").length == 0)
    {
        u_location_detail_type_str = "";
    }
    else
    {
        u_location_detail_type_str = $("[name='u_location_detail[]']:checked").val();
    }

    // console.log(u_location_detail_type_str)

    $.ajax({                                                                                    
        url: "database/update_counsel_rec_data_detail.php",
        data:{
            Consult_v_id:attr_sql_id,
            Start_date:$('[name="u_start_date"]').val(),
            End_date:$('[name="u_start_date"]').val(),
            Start_time:$('[name="u_start_time_h"]').val() + ":" + $('[name="u_start_time_m"]').val() + ":00",
            End_time:$('[name="u_end_time_h"]').val() + ":" + $('[name="u_end_time_m"]').val() + ":00",
            One_user_name:$('[name="u_one_user"]').val(),
            Two_user_name:$('[name="u_two_user"]').val(),
            Location:$('[name="u_location"]').val(),
            Location_detail:u_location_detail_type_str,
            Remark:$('[name="u_remark"]').val(),
        },
        type: "POST",
        // dataType: "JSON",
        success: function (data) {
            console.log(data)
            if(data == 1){
                swal({
                    title:'更新成功！',
                    type:'success',                        
                }).then(function(){
                    location.reload();
                }) 
            }else{
                swal({
                    title:'更新失敗！請聯絡負責單位',
                    type:'error',
                })
            }  
        },
        error:function(e){
            swal({
                title:'更新失敗！請聯絡負責單位',
                type:'error',
            })
            console.log(e)
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

// 依據id名稱，載入新增訪談記錄的社工人員選項 region
add_user_option = function(element_id)
{
    $.ajax({
        type:'POST',
        url:'database/find_check_user.php',
        dataType: "JSON",
        async: false,//啟用同步請求
        success: function (data) {
            // console.log('test',data)
            for (var index in data.Id) {
                $("#"+element_id).append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            }
        },
    });
}
//endregion

// 字串補零 region
function LeadingZero( code, dataLength){
    var str = Array(10).join('0') + code;
    return str.slice(0 - dataLength)
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
                notyf.alert('伺服器錯誤,無法載入開案所需資料!');
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
            notyf.alert('伺服器錯誤,無法載入開案所需資料!');
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
            // notyf.alert('伺服器錯誤,無法載入開案所需資料!');
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

//監所服務總表格鎖定控制region
function counsel_edit(){
    $('.counsel_question').attr('disabled', false);
    $('#edit_div').attr('hidden', true);
    $('#save_div').attr('hidden', false);
};
//endregion


