//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

//抓個別特定篩檢紀錄表region
$(document).ready(function(){

    $('#myModal').on('shown.bs.modal', function () {
        $('#trans_to_opencase').trigger('focus');
    });

    var screening_id = getUrlVars()["screening_id"];
    $.ajax({
        url: "database/find_screening_data_detail.php",
        data:{
            Screening_id:screening_id,
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            console.log(data)
            // append_user();

            check_radio(data.A_detail[0]);

            $("#t_sn").html(data.Screening_id[0]);
            $("#reservation_date").val(data.Reservation_date[0]);
            $("#reservation_time").val(data.Reservation_time[0]);

            $("#name").val(data.Name[0]);
            $("#age").val(data.Age[0]);
            $("#phone").val(data.Phone[0]);
            $("#gender").val(data.Gender[0]);

            $("#sexual_orientation").val(data.Sexual_orientation[0]);
            $("#screening_type").val(data.Screening_type[0]);
            $("#screening_results").val(data.Screening_results[0]);
            $("#interview_content").val(data.Interview_content[0]);

            $("#remark").val(data.Remark[0]);
            $("#reagent_seq").val(data.Reagent_seq[0]);
            $("#amount").val(data.Amount[0]);

            $("#adate").html(data.Create_date[0]);
            $("#applicant").html(data.Create_name[0]);
            $("#udate").html(data.Update_date[0]);
            $("#up_applicant").html(data.Update_name[0]);
        },
        error:function(e){
            console.log("error");
        }
    });
    $(".screening_question").attr("disabled",true);
});

//endregion  

//判斷radio是否有值，就選取region
function check_radio(a_detail){
    //取radio所有值
    var a_radio =document.getElementsByName('a_type[]');
   
    //長度
    var a_len = a_radio.length;
    
   
    for (i = 0; i < a_len; i++)
    {
        if (a_radio[i].value == a_detail)
        {
           a_radio[i].checked = true;
    //        console.log(w_val)
        }    
    }
}
//endregion

//endregion


//更新篩檢紀錄表基本資料region
$("#screening_update").on('click',function(){

var screening_id = getUrlVars()["screening_id"];


//判斷是否勾選傳入陣列或radio勾選 region
check_radio_value();
//endregion

var stau = false;

    if (check_updat_screening_data() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }
    console.log(stau);

    if(!stau)
    {
        // alert(check_updat_screening_data());
        swal({
            title:check_updat_screening_data(),
            type:'error'
          })
    }
    else
    { 
        $.ajax({                                                                                    
            url: "database/update_screening_data_detail.php",
            data:{
                Screening_id:screening_id,
                Reservation_date:$("#reservation_date").val(),
                Reservation_time:$("#reservation_time").val(),
                Name:$("#name").val(),
                Age:$("#age").val(),
                a_val:a_val,
                Gender:$("#gender").val(),
                Phone:$("#phone").val(),
                Sexual_orientation:$("#sexual_orientation").val(),
                Screening_type:$("#screening_type").val(),
                Screening_results:$("#screening_results").val(),
                Interview_content:$("#interview_content").val(),
                Remark:$("#remark").val(),
                Reagent_seq:$("#reagent_seq").val(),
                Amount:$("#amount").val(),
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
                        title:'修改失敗！請聯絡負責單位',
                        type:'error',
                    })
                }  
            },
            error:function(e){
                console.log(e);
            }
        });
    }

});

//篩檢紀錄表(update)的必填欄位 region
function check_updat_screening_data()
{
    var reservation_date = $("#reservation_date").val();
    var reservation_time = $("#reservation_time").val();
    var name = $("#name").val();
    var age = $("#age").val();
    var age_radio =  $("input[type=radio][name='a_type[]']:checked").length;
    var phone = $("#phone").val();
    var screening_type = $("#screening_type").val();

    var errorstr = "";

    if (reservation_date == null) {
        errorstr += "未填寫預約篩檢日期!\r\n";
    }
    if (reservation_time == null) {
        errorstr += "未填寫預約篩檢時段!\r\n";
    }
    if (name == null) {
        errorstr += "未填寫篩檢者姓名!\r\n";
    }
    if (phone == null) {
        errorstr += "未填寫篩檢者聯絡電話!\r\n";
    }
    // if (gender == null) {
    //     errorstr += "未填寫篩檢者性別!\r\n";
    // }
    // if (sexual_orientation == null) {
    //     errorstr += "未填寫篩檢者性向!\r\n";
    // }
    if (screening_type == null) {
        errorstr += "未填寫篩檢類型!\r\n";
    }
    // if (screening_results == null) {
    //     errorstr += "未填寫篩檢結果!\r\n";
    // }
    if (errorstr == "") {
        if(age !=null || age!="")
        {
            if (age_radio <=0) {
                errorstr += "未選擇年齡分類!\r\n";
            }
        }
        if (age_radio > 0) {
            if(age ==null || age=="")
            {
                errorstr += "未填寫年齡!\r\n";
            }
        }
        if (reservation_date.replace(/\s*/g, "") == '') {
            errorstr += "未填寫預約篩檢日期!\r\n";
        }
        if (reservation_time.replace(/\s*/g, "") == '') {
            errorstr += "未填寫預約篩檢時段!\r\n";
        }
        if (name.replace(/\s*/g, "") == '') {
            errorstr += "未填寫篩檢者姓名!\r\n";
        }
        if (phone.replace(/\s*/g, "") == '') {
            errorstr += "未填寫篩檢者聯絡電話!\r\n";
        }
        // if (gender.replace(/\s*/g, "") == '') {
        //     errorstr += "未填寫篩檢者性別!\r\n";
        // }
        // if (sexual_orientation.replace(/\s*/g, "") == '') {
        //     errorstr += "未填寫篩檢者性向!\r\n";
        // }
        if (screening_type.replace(/\s*/g, "") == '') {
            errorstr += "未填寫篩檢類型!\r\n";
        }
    }

    return errorstr;
}
//endregion

//判斷radio值region
function check_radio_value(){
    //取radio所有值
    var a_radio =document.getElementsByName('a_type[]');
    
    //長度
    var a_len = a_radio.length;
   
    
    
    for (i = 0; i < a_len; i++)
    {
        if (a_radio[i].checked == true)
        {
           a_val = a_radio[i].value;
            break;
    //        console.log(w_val)
        }else{
            a_val= "";
        }    
    }
    // console.log(a_val);
}
//endregion

//新增至開案個案按鈕 region
$("#trans_to_opencase_submit").on('click',function(){
    var screening_id = getUrlVars()["screening_id"];


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
        window.location.href = 'phone_trans_to_opencase.php?screening_id='+screening_id.replace(/^\s+|\s+$/gm,'')+'&case_id='+$('#open_case_t_sn').val().replace(/^\s+|\s+$/gm,'')+'&case_property='+$('#open_case_type').val()+'';
    }
});
//endregion

//檢查欄位 個人面訪紀錄(Update) region
function check_trans_to_opencase_value()
{
    var open_case_t_sn = $('#open_case_t_sn').val();
    var open_case_type = $('#open_case_type').val();
    var errorstr = "";

    // if (open_case_t_sn == null) {
    //     errorstr += "未填寫開案編號!\r\n";
    // }
    if (open_case_type == null) {
        errorstr += "未選擇個案屬性!\r\n";
    }
    if (errorstr == "") {
        // if (open_case_t_sn.replace(/\s*/g, "") == '') {
        //     errorstr += "未填寫開案編號!\r\n";
        // }
        if (open_case_type.replace(/\s*/g, "") == '') {
            errorstr += "未選擇個案屬性!\r\n";
        }
    }

    return errorstr;
}
//endregion

//取消重整region
function cancel(){
    location.reload();
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

//篩檢總表格鎖定控制region
function screening_edit(){
    $('.screening_question').attr('disabled', false);
    $('#edit_div').attr('hidden', true);
    $('#save_div').attr('hidden', false);
};
function screening_cancel(){
    $('.screening_question').attr('disabled', true);
    $('#edit_div').attr('hidden', false);
    $('#save_div').attr('hidden', true);
};
//endregion



//進入預覽WORD頁面region
$("#preview_word").on('click',function(){
    var screening_id = getUrlVars()["screening_id"];
//    console.log(id);
    location.href = 'preview_word.php?screening_id='+screening_id+'';
});

$("#preview_word2").on('click',function(){
    var screening_id = getUrlVars()["screening_id"];
//    console.log(id);
    location.href = 'preview_word2.php?screening_id='+screening_id+'';
})
//endregion


