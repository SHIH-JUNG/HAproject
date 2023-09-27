const notyf = new Notyf();

$( document ).ready(function() {

    tab_toggle();

    //手動新增按鈕點擊跳出模態框
    $('#myModal').on('shown.bs.modal', function () {
        $('#trans_to_opencase').trigger('focus');
    });

    $("#case_id_prestr").hide();

    add_user_option('user');

    $("#add_phone_rec_table").show();
    $("#add_face_rec_table").hide();

    load_face_time_picker('start_time_h');
    load_face_time_picker('end_time_h');

    add_user_option('one_user');
    add_user_option('two_user');
    add_user_option('nuser');
});

//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

var phone_id = getUrlVars()["phone_id"];

// 載入網頁時的動作 region
$(document).ready(function(){
    
    // 載入簡短服務記錄(第一筆)
    load_consult_addfirst_datas();
    
    // 載入電訪記錄表格
    load_consult_phone_rec_datas();

    //載入面訪記錄表格
    load_consult_face_rec_datas();

    // 鎖定簡短服務記錄內容
    $(".phone_question").attr("disabled",true);


    //有選取的 radio or checkbox 字會變紅 region
    $("input[type='radio']").each(function(i,n){

        if($(this).is(":checked"))
        {   
            $(".radio_label").eq(i).css("color", "red");
        }
    });

    $("input[type='checkbox']").each(function(i,n){

        if($(this).is(":checked"))
        {
            $(".ckecked_label").eq(i).css("color", "red");
        }
    });
    //endregion 

});
//endregion 

//抓簡短服務記錄 region
load_consult_addfirst_datas = function() {
    $.ajax({
        url: "database/find_consult_firstadd_data_detail.php",
        data:{
            Phone_id:phone_id,
        },
        type: "POST",
        dataType: "JSON",
        async: false,
        success: function (data) {
            $.each(data,function(index,value){
                
                var m_type_val = "";
                var m_type_other_val = "";

                $("#t_sn").text(value.Phone_id);
                $("#call_datetime").val(value.Call_datetime);
                $("#way").val(value.Way);
                $("#way_detail").val(value.Way_detail);
                $("#name").val(value.Name);
                $("#gender").val(value.Gender);
                $("#object_type").val(value.Object_type);

                if(value.M_type.includes("其他"))
                {
                    m_type_val = value.M_type.split("::")[0];
                    m_type_other_val = value.M_type.split("::")[1];
                    $("#m_type_other").val(m_type_other_val);
                }
                else
                {
                    m_type_val = value.M_type;
                }
                
                $("[name='m_type[]'][value='"+m_type_val+"']").attr('checked',true);
                
                console.log(value.M_addiction)
                
                if(value.M_addiction.includes("、"))
                {
                    if(value.M_addiction.includes("其他::"))
                    {
                        var other_split = value.M_addiction.split("其他::");
                        var main_addition_arr = other_split[0].split("、");

                        $("[name='main[]'][value='其他']").attr('checked',true);
                        $("#other_main").val(other_split[1]);
                    }
                    else
                    {
                        var main_addition_arr = value.M_addiction.split("、");
                    }
                }
                else
                {
                    if(value.M_addiction.includes("其他::"))
                    {
                        var other_split = value.M_addiction.split("其他::");

                        $("[name='main[]'][value='其他']").attr('checked',true);
                        $("#other_main").val(other_split[1]);
                    }
                    else
                    {
                        var main_addition_arr = [value.M_addiction]
                    }
                }

                if(main_addition_arr.length > 0)
                {
                    var  main_addition_arr = main_addition_arr.filter(i=>i && i.trim())
                
                    for (let index = 0; index < main_addition_arr.length; index++) {
    
                        
                        $("[name='main[]'][value='"+main_addition_arr[index]+"']").attr('checked',true);
    
                    }
                }
                
                $("#age").val(value.Age);
                $("[name='a_type[]'][value='"+value.A_detail+"']").attr('checked',true);
                $("#address").val(value.Address);
                $("[name='l_type[]'][value='"+value.L_detail+"']").attr('checked',true);

                $("#info_name").val(value.Info_Name);
                $("#relationship").val(value.Relationship_detail);
                $("[name='r_type[]'][value='"+value.R_detail+"']").attr('checked',true);

                $("#phone").val(value.R_phone);

                $("#referral").val(value.Referral);
                $("[name='ref_type[]'][value='"+value.Referral_detail+"']").attr('checked',true);
                $("#refphone").val(value.Referral_phone);
                $("#referral_name").val(value.Referral_name);

                $("[name='e_type[]'][value='"+value.Eligible+"']").attr('checked',true);
                $("#user").val(value.Assign);

                $("#note").val(value.Phone_note);

                $("#adate").text((value.Create_date!="0000-00-00 00:00:00")?value.Create_date:"");
                $("#applicant").text(value.Create_name);
                $("#udate").text((value.Update_date!="0000-00-00 00:00:00")?value.Update_date:"");
                $("#up_applicant").text(value.Update_name);
            });
        
        },
        error:function(e){
            notyf.alert('伺服器錯誤,無法載入');
        }
    });
}
//endregion 

//抓簡短服務記錄 region
load_consult_phone_rec_datas = function() {
    $.ajax({
        url: "database/find_consult_phone_rec_data_detail.php",
        data:{
            Phone_id:phone_id,
        },
        type: "POST",
        dataType: "JSON",
        // async: false,
        success: function (data) {
            
            // console.log(data)

            var cssString = "";

            $.each(data,function(index,value){
                cssString +=
                '<tr id="' +
                value.Id +
                '">' +
                '<td style="text-align:center">' +
                value.Call_datetime +
                "</td>" +
                '<td style="text-align:center">' +
                value.Info_Name +
                "</td>" +
                '<td style="text-align:center">' +
                value.Relationship_detail +
                "</td>" +
                '<td style="text-align:center">' +
                value.R_phone +
                "</td>" +
                '<td style="text-align:center">' +
                value.Assign +
                "</td>" +
                '<td style="text-align:center">' +
                value.Create_name +
                "</td>" +
                '<td style="text-align:center">' +
                value.Create_date +
                "</td>" +
                '<td style="text-align:center">' + 
                '<a class="update_btn" data-toggle="modal" rec_type_n="phone" consult_id="'+value.Id+'" style="text-decoration: underline;color:black;">查看/修改</a>' + 
                '</td>'
                "</tr>";
            });
            
            //顯示表格
            $("#call_phone_rec_view").html(cssString);

            //綁定onclick事件
            $(".update_btn").attr("onclick","show_modal(this);");
        },
        error:function(e){
            notyf.alert('伺服器錯誤,無法載入');
        }
    });
}
//endregion 


//抓簡短服務記錄 region
load_consult_face_rec_datas = function() {
    $.ajax({
        url: "database/find_consult_face_rec_data_detail.php",
        data:{
            Phone_id:phone_id,
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
                '<a class="update_btn" data-toggle="modal" rec_type_n="face" consult_id="'+value.Id+'" style="text-decoration: underline;color:black;">查看/修改</a>' + 
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


// update 簡短記錄資料 region
update_consult_data = function() {
    var stau = false;

    if (check_update_consult_data() != "") 
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
            title:check_update_consult_data(),
            type:'error'
        })
    }
    else
    { 
        var m_type_str = "";
        var main_checked_str = "";

        if($("[name='m_type[]']:checked").val() == "其他")
        {
            m_type_str = $("[name='m_type[]']:checked").val() + "::" + $("#m_type_other").val();
        }
        else if($("[name='m_type[]']:checked").length == 0)
        {
            m_type_str = "";
        }
        else
        {
            m_type_str = $("[name='m_type[]']:checked").val();
        }

        if($("[name='main[]']:checked").length > 0)
        {
            $("[name='main[]']:checked").each(function(i,n){

                var this_val = $(this).val();
    
                if(i == $("[name='main[]']:checked").length - 1)
                {
                    if(this_val == "其他")
                    {
                        main_checked_str += this_val + "::" +$("#other_main").val();
                    }
                    else
                    {
                        main_checked_str+= this_val;
                    }
                    
                }
                else
                {
                    if(this_val == "其他")
                    {
                        main_checked_str += this_val + "::" +$("#other_main").val() + "、";
                    }
                    else
                    {
                        main_checked_str+= this_val + "、";
                    }
                }
                
            });
        }
        

        var a_type = "";

        if($("[name='a_type[]']:checked").length == 0)
        {
            a_type = "";
        }
        else
        {
            a_type = $("[name='a_type[]']:checked").val();
        }

        var l_type = "";

        if($("[name='l_type[]']:checked").length == 0)
        {
            l_type = "";
        }
        else
        {
            l_type = $("[name='l_type[]']:checked").val();
        }

        var r_type = "";

        if($("[name='r_type[]']:checked").length == 0)
        {
            r_type = "";
        }
        else
        {
            r_type = $("[name='r_type[]']:checked").val();
        }

        var ref_type = "";

        if($("[name='ref_type[]']:checked").length == 0)
        {
            ref_type = "";
        }
        else
        {
            ref_type = $("[name='ref_type[]']:checked").val();
        }

        var e_type = "";

        if($("[name='e_type[]']:checked").length == 0)
        {
            e_type = "";
        }
        else
        {
            e_type = $("[name='e_type[]']:checked").val();
        }
        

        $.ajax({                                                                                    
            url: "database/update_consult_data_detail.php",
            data:{
                Phone_id:phone_id,
                Call_datetime:$("#call_datetime").val(),
                Way:$("#way").val(),
                Way_detail:$("#way_detail").val(),
                Name:$("#name").val(),
                Gender:$("#gender").val(),
                Object_type:$("#object_type").val(),
                M_type:m_type_str,
                main_radio:main_checked_str,
                Age:$("#age").val(),
                a_val:a_type,
                Address:$("#address").val(),
                l_val:l_type,
                Info_Name:$("#info_name").val(),
                Relationship_detail:$("#relationship").val(),
                r_val:r_type,
                R_phone:$("#phone").val(),
                Referral:$("#referral").val(),
                ref_val:ref_type,
                Referral_phone:$("#refphone").val(),
                Referral_name:$("#referral_name").val(),
                e_val:e_type,
                Assign:$("#user").val(),
                Phone_note:$("#note").val(),
            },
            type: "POST",
            dataType: "JSON",
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
                swal({
                    title:'更新失敗！請聯絡負責單位',
                    type:'error',
                })
                console.log(e)
            }
        });
    }
}
//endregion

//檢查欄位是否填寫完整 region
check_update_consult_data = function(){
    var call_datetime = $("#call_datetime").val();
    var way = $("#way").val();
    var way_detail = $("#way_detail").val();

    var name = $("#name").val();
    var gender = $("#gender").val();
    var object_type = $("#object_type").val();
    var user = $("#user").val();

    var errorstr = "";

    if (call_datetime == null) {
        errorstr += "未填寫來電日期!\r\n";
    }
    if (way == null) {
        errorstr += "未選擇諮詢方式!\r\n";
    }
    if(way == "面訪")
    {
        if (way_detail == null) {
            errorstr += "未選擇面訪地點!\r\n";
        }
    }
    if (name == null) {
        errorstr += "未填寫個案姓名!\r\n";
    }
    if (name == null) {
        errorstr += "未填寫個案姓名!\r\n";
    }
    if (gender == null) {
        errorstr += "未選擇性別!\r\n";
    }
    if (object_type == null) {
        errorstr += "未選擇服務對象類別!\r\n";
    }
    if (user == null) {
        errorstr += "未選擇接案工作人員!\r\n";
    }

    if (errorstr == "") {
        if (call_datetime.replace(/\s*/g, "") == '') {
            errorstr += "未填寫來電日期!\r\n";
        }
        if (way.replace(/\s*/g, "") == '') {
            errorstr += "未選擇諮詢方式!\r\n";
        }
        if(way == "面訪")
        {
            if (way_detail.replace(/\s*/g, "") == '') {
                errorstr += "未選擇面訪地點!\r\n";
            }
        }
        if (name.replace(/\s*/g, "") == '') {
            errorstr += "未填寫個案姓名!\r\n";
        }
        if (name.replace(/\s*/g, "") == '') {
            errorstr += "未填寫個案姓名!\r\n";
        }
        if (gender.replace(/\s*/g, "") == '') {
            errorstr += "未選擇性別!\r\n";
        }
        if (object_type.replace(/\s*/g, "") == '') {
            errorstr += "未選擇服務對象類別!\r\n";
        }
        if (user.replace(/\s*/g, "") == '') {
            errorstr += "未選擇接案工作人員!\r\n";
        }
    }

    return errorstr;
}
//endregion

//監聽 根據選擇 顯示新增電訪/面訪記錄表格 region
$("[name='newrec_type']").on('change',function(){

    var this_val = this.value;

    switch (this_val) {
        case"phone":
                $("#add_phone_rec_table").show();
                $("#add_face_rec_table").hide();
            break;
    
        case"reservation":
            $("#add_phone_rec_table").hide();
            $("#add_face_rec_table").show();
            break;
    }
});
// endregion

// insert 電訪/面訪記錄 region
add_new_rec = function(rec_type) {
    switch (rec_type) {
        case 'phone':
                add_consult_phone();
            break;
    
        case 'face':
                add_consult_face();
            break;
    }
}
// endregion

// insert 電訪記錄 region
add_consult_phone = function() {
    var stau = false;

    if (check_add_consult_phone_data() != "") 
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
            title:check_add_consult_phone_data(),
            type:'error'
        })
    }
    else
    { 

        $.ajax({                                                                                    
            url: "database/add_new_consult_phone_data_detail.php",
            data:{
                Phone_id:phone_id,
                Call_datetime:$("#ncall_datetime").val(),
                Way:'電訪',
                Way_detail:'',
                Info_Name:$("#ninfo_name").val(),
                Relationship_detail:$("#nrelationship").val(),
                R_phone:$("#nphone").val(),
                Assign:$("#nuser").val(),
                Phone_note:$("#nnote").val(),
            },
            type: "POST",
            dataType: "JSON",
            success: function (data) {
                if(data == 1){
                    swal({
                        title:'新增電訪記錄成功！',
                        type:'success',                        
                    }).then(function(){
                        localStorage.removeItem('activeTab');
                        location.reload();
                    }) 
                }else{
                    swal({
                        title:'新增電訪記錄失敗！請聯絡負責單位',
                        type:'error',
                    })
                }  
            },
            error:function(e){
                swal({
                    title:'新增電訪記錄失敗！請聯絡負責單位',
                    type:'error',
                })
                console.log(e)
            }
        });
    }
}
// endregion

// 檢查新增電訪記錄欄位 region
check_add_consult_phone_data = function()
{
    var call_datetime = $("#ncall_datetime").val();
    var info_name = $("#ninfo_name").val();
    var relationship = $("#nrelationship").val();
    var phone = $("#nphone").val();
    var user = $("#nuser").val();
    var note = $("#nnote").val();

    
    var errorstr = "";

    if (call_datetime == null) {
        errorstr += "未填寫來電日期!\r\n";
    }
    if (info_name == null) {
        errorstr += "未填寫聯絡人姓名!\r\n";
    }
    if (relationship == null) {
        errorstr += "未填寫聯絡人與案主關係!\r\n";
    }
    if (phone == null) {
        errorstr += "未填寫連絡人電話!\r\n";
    }
    if (user == null) {
        errorstr += "未選擇接案工作人員!\r\n";
    }
    if (note == null) {
        errorstr += "未填寫通話內容!\r\n";
    }
    if (errorstr == "") {
        if (call_datetime.replace(/\s*/g, "") == '') {
            errorstr += "未填寫來電日期!\r\n";
        }
        if (info_name.replace(/\s*/g, "") == '') {
            errorstr += "未填寫聯絡人姓名!\r\n";
        }
        if (relationship.replace(/\s*/g, "") == '') {
            errorstr += "未填寫聯絡人與案主關係!\r\n";
        }
        if (phone.replace(/\s*/g, "") == '') {
            errorstr += "未填寫連絡人電話!\r\n";
        }
        if (user.replace(/\s*/g, "") == '') {
            errorstr += "未選擇接案工作人員!\r\n";
        }
        if (note.replace(/\s*/g, "") == '') {
            errorstr += "未填寫通話內容!\r\n";
        }
    }

    return errorstr;
}
// endregion

// insert 面訪記錄 region
add_consult_face = function() {
    var stau = false;

    if (check_add_consult_face_data() != "") 
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
            title:check_add_consult_face_data(),
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
            url: "database/add_new_consult_face_data_detail.php",
            data:{
                Phone_id:phone_id,
                Call_datetime:$('#start_date').val() + " " + $('#start_time_h').val() + ":" + $('#start_time_m').val() + ":00",
                Way:'面訪',
                Way_detail:location_detail_type_str,
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
                        title:'新增面訪記錄成功！',
                        type:'success',                        
                    }).then(function(){
                        localStorage.removeItem('activeTab');
                        location.reload();
                    }) 
                }else{
                    swal({
                        title:'新增面訪記錄失敗！請聯絡負責單位',
                        type:'error',
                    })
                }  
            },
            error:function(e){
                swal({
                    title:'新增面訪記錄失敗！請聯絡負責單位',
                    type:'error',
                })
                console.log(e)
            }
        });
    }
}
// endregion

// 檢查新增面訪記錄欄位 region
check_add_consult_face_data = function()
{
    var start_date = $("#start_date").val();
    var one_user = $("#one_user").val();
    var location = $("#location").val();
    var location_detail_len = $("[name='location_detail[]']").length;
    var other_location = $("#other_location").val();

    
    var errorstr = "";

    if (start_date == null) {
        errorstr += "未填寫預約面訪日期!\r\n";
    }
    if (one_user == null) {
        errorstr += "未填寫主要的指派工作人員!\r\n";
    }
    if (location == null) {
        errorstr += "未填寫面訪方式!\r\n";
    }
    if(location_detail_len == 0) {
        errorstr += "未選擇面訪方式分類!\r\n";
    }
    if($("[name='location_detail[]']:checked").val() == "其他")
    {
        if (other_location == null) {
            errorstr += "面訪方式選擇其他時，請填寫其他面訪方式分類內容!\r\n";
        }
    }
    if (errorstr == "") {
        if (start_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫預約面訪日期!\r\n";
        }
        if (one_user.replace(/\s*/g, "") == '') {
            errorstr += "未填寫主要的指派工作人員!\r\n";
        }
        if (location.replace(/\s*/g, "") == '') {
            errorstr += "未填寫面訪方式!\r\n";
        }
        if($("[name='location_detail[]']:checked").val() == "其他")
        {
            if (other_location.replace(/\s*/g, "") == '') {
                errorstr += "面訪方式選擇其他時，請填寫其他面訪方式分類內容!\r\n";
            }
        }
    }

    return errorstr;
}
// endregion

// 載入新增面訪記錄的時間選項 region
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

// 顯示電訪/面訪記錄詳細資料modal region
show_modal = function(this_btn) {
    var get_consult_id = $(this_btn).attr("consult_id");
    var get_rec_type_n = $(this_btn).attr("rec_type_n");

    // console.log("get_consult_id", get_consult_id);
    // console.log("get_rec_type_n", get_rec_type_n);

    load_update_type_data(get_consult_id, get_rec_type_n);

    $("#update_rec_modal").modal('show');

    $("#modal_btn").attr("sql_id", get_consult_id);
    $("#modal_btn").attr("update_type", get_rec_type_n);
}
//endregion

// 查詢資料庫中的電訪/面訪記錄資料，在modal表格中載入原本的內容 region
load_update_type_data = function(consult_id, rec_type_n) {

    // console.log(consult_id, rec_type_n)
    switch (rec_type_n) {
        case "phone":
            load_update_type_phone_data(consult_id);     
            break;
    
        case "face":
            load_update_type_face_data(consult_id);      
            break;
    }

    
}
//endregion

// 載入電訪記錄內容 region
load_update_type_phone_data = function(consult_id)
{
    $.ajax({
        url: "database/find_consult_phone_rec_data_detail.php",
        data:{
            Id:consult_id,
        },
        type: "POST",
        dataType: "JSON",
        async: false,
        success: function (data) {
            // console.log(data)

            var table_html_str = "";

            table_html_str =
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;" width="30%"><i style="color:red;">※</i>來電日期</td>' +
                    '<td style="border-bottom: solid 1px;" width="70%">' +
                        '<div class="col-sm-8">' +
                            '<div class="text-left">' +
                                '<input name="u_call_datetime" type="datetime-local">' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>聯絡人姓名</td>' +
                    '<td style="border-bottom: solid 1px;">' +
                        '<div class="col-sm-8">' +
                            '<div class="text-left">' +
                                '<input name="u_info_name" type="text">' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>聯絡人與案主關係</td>' +
                    '<td style="border-bottom: solid 1px;">' +
                        '<div class="col-sm-8">' +
                            '<div class="text-left">' +
                                '<input name="u_relationship" type="text">' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>'+
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>連絡人電話</td>' +
                    '<td style="border-bottom: solid 1px;">' +
                        '<div class="col-sm-8">' +
                            '<div class="text-left">' +
                                '<input name="u_phone" type="text">' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>接案工作人員</td>' +
                    '<td style="border-bottom: solid 1px;">' +
                        '<div class="col-sm-8">' +
                            '<div class="text-left">' +
                                '<select name="u_user" id="u_user"><option value="">請選擇工作人員</option></select>' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;"><i style="color:red;">※</i>通話內容</td>' +
                    '<td style="border-bottom: solid 1px;">' +
                        '<div class="col-sm-8">' +
                            '<div class="text-left">' +
                                '<textarea style="height:150px;resize: none;font-size: 20px;" name="u_note" placeholder="請輸入通話內容"></textarea>' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">登錄日期</td>' +
                    '<td style="border-bottom: solid 1px;">' +
                        '<div class="col-sm-8">' +
                            '<div class="text-left">' +
                                '<input name="u_create_date" type="text" disabled="disabled">' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">登錄人員</td>' +
                    '<td style="border-bottom: solid 1px;">' +
                        '<div class="col-sm-8">' +
                            '<div class="text-left">' +
                                '<input name="u_create_name" type="text" disabled="disabled">' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">更新日期</td>' +
                    '<td style="border-bottom: solid 1px;">' +
                        '<div class="col-sm-8">' +
                            '<div class="text-left">' +
                                '<input name="u_update_date" type="text" disabled="disabled">' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>' +
                '<tr style="text-align:left">' +
                    '<td style="text-align:right;background-color:rgb(255 201 54);border-bottom-color: white;border-right-color: white;">更新人員</td>' +
                    '<td style="border-bottom: solid 1px;">' +
                        '<div class="col-sm-8">' +
                            '<div class="text-left">' +
                                '<input name="u_update_name" type="text" disabled="disabled">' +
                            '</div>' +
                        '</div>' +
                    '</td>' +
                '</tr>' ;

            $("#update_all_data").html(table_html_str);

            add_user_option('u_user');

            $.each(data,function(index,value){

                $('[name="u_call_datetime"]').val(value.Call_datetime);
                $('[name="u_info_name"]').val(value.Info_Name);
                $('[name="u_relationship"]').val(value.Relationship_detail);
                $('[name="u_phone"]').val(value.R_phone);
                $('[name="u_user"]').val(value.Assign);
                $('[name="u_note"]').val(value.Phone_note);
                $('[name="u_create_date"]').val(value.Create_date);
                $('[name="u_create_name"]').val(value.Create_name);
                $('[name="u_update_date"]').val(value.Update_date);
                $('[name="u_update_name"]').val(value.Update_name);
            });
            
        },
        error:function(e){
            notyf.alert('伺服器錯誤,無法載入');
            console.log(e)
        }
    });
}
//endregion

// 載入面訪記錄內容 region
load_update_type_face_data = function(consult_id)
{
    $.ajax({
        url: "database/find_consult_face_rec_data_detail.php",
        data:{
            Id:consult_id,
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

// 生成電訪/面訪的ajax送出data欄位 region
gen_submit_data = function(sql_id, update_type) {
    var datas = {};

    switch (update_type) {
        case 'phone':
            datas = {
                Phone_id:phone_id,
                Consult_id:sql_id,
                Call_datetime:$('[name="u_call_datetime"]').val(),
                Way:'電訪',
                Way_detail:'',
                Info_Name:$('[name="u_info_name"]').val(),
                Relationship_detail:$('[name="u_relationship"]').val(),
                R_phone:$('[name="u_phone"]').val(),
                Assign:$('[name="u_user"]').val(),
                Phone_note:$('[name="u_note"]').val(),
            }
            break;
    
        case 'face':

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

            datas = {
                Phone_id:phone_id,
                Consult_id:sql_id,
                Call_datetime:$('[name="u_start_date"]').val() + " " + $('[name="u_start_time_h"]').val() + ":" + $('[name="u_start_time_m"]').val() + ":00",
                Way:'面訪',
                Way_detail:u_location_detail_type_str,
                Start_date:$('[name="u_start_date"]').val(),
                End_date:$('[name="u_start_date"]').val(),
                Start_time:$('[name="u_start_time_h"]').val() + ":" + $('[name="u_start_time_m"]').val() + ":00",
                End_time:$('[name="u_end_time_h"]').val() + ":" + $('[name="u_end_time_m"]').val() + ":00",
                One_user_name:$('[name="u_one_user"]').val(),
                Two_user_name:$('[name="u_two_user"]').val(),
                Location:$('[name="u_location"]').val(),
                Location_detail:u_location_detail_type_str,
                Remark:$('[name="u_remark"]').val(),
            }
            break;
    }

    
    return datas;       
}
//endregion

// update 電訪/面訪記錄 region
update_rec_data = function(this_btn)
{
    var attr_sql_id = $(this_btn).attr("sql_id");
    var attr_update_type = $(this_btn).attr("update_type");

    // 獲取電訪/面訪的ajax送出data內容
    var get_submit_data = gen_submit_data(attr_sql_id, attr_update_type);

    // console.log(get_submit_data)
    $.ajax({                                                                                    
        url: "database/update_consult_rec_data_detail.php",
        data:get_submit_data,
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

// 依據id名稱，載入新增電訪/面訪記錄的社工人員選項 region
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
    var phone_id = getUrlVars()["phone_id"];

    var tran_case_name = '';
    var tran_case_pid = '';
    var tran_case_phone = '';
    var tran_case_birth = '';
    var tran_case_referral = '';

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
    // console.log(stau);

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
            url: "database/find_personal_data.php",
            data:{
                Phone_id:phone_id,
            },
            type: "POST",
            dataType: "JSON",
            async :false,
            success: function (data) {

                tran_case_name = data.Name[0];
                tran_case_gender = data.Gender[0];
                // tran_case_pid = data.Pid[0];
                tran_case_phone = data.R_detail[0];
                // tran_case_birth = data.Birth[0];
                tran_case_referral = data.Referral_detail[0];
            },
            error:function(e){
                notyf.alert('伺服器錯誤,無法載入開案所需資料!');
            }
        });

        // console.log(tran_case_gender)

        window.location.href = 'phone_trans_to_opencase.php?unopen_type=phone&id='+phone_id.replace(/^\s+|\s+$/gm,'')+'&case_id='+open_case_t_sn.replace(/^\s+|\s+$/gm,'')+'&case_property='+$('#open_case_type').val()+'&object_type='+$('#open_object_type').val()+'&tran_case_name='+tran_case_name+'&tran_case_gender='+tran_case_gender+'&tran_case_phone='+tran_case_phone+'&tran_case_pid=&tran_case_birth=&tran_case_referral='+tran_case_referral+'&tran_case_sex_o=';
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
function cancel(){
    location.reload();
}
//endregion


//簡短服務總表格鎖定控制 region
function phone_edit(){
    $('.phone_question').attr('disabled', false);
    $('#edit_div').attr('hidden', true);
    $('#save_div').attr('hidden', false);
};
function phone_cancel(){
    $('.phone_question').attr('disabled', true);
    $('#edit_div').attr('hidden', false);
    $('#save_div').attr('hidden', true);
};

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