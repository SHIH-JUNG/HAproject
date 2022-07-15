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
            // console.log(data)
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
    
    add_screening_keywords();
});
//endregion

// 查詢資料庫中的篩檢類別和篩檢結果，並添加到網頁前端下拉式選單中region
function add_screening_keywords() {

    $("#screening_type").empty();

    $("#screening_results").empty();

    $.ajax({
        url: "database/find_screening_keywords.php",
        data:{
            keyword:"screening_type_keywords",
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            $("#screening_type").append('<option value="">所有</option>');
            $.each(data,function(index,value){
                $("#screening_type").append('<option value="'+value.screening_type+'">'+value.screening_type+'</option>');
            });
        },
        error:function(e){
            console.log(e);
        }
    });

    $.ajax({
        url: "database/find_screening_keywords.php",
        data:{
            keyword:"screening_result_keywords",
        },
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            $("#screening_results").append('<option value="">所有</option>');
            $.each(data,function(index,value){
                $("#screening_results").append('<option value="'+value.screening_result+'">'+value.screening_result+'</option>');
            });
        },
        error:function(e){
            console.log(e);
        }
    });
}
//endregion


// 新增篩檢類別和篩檢結果至資料庫，並刷新添加到網頁前端下拉式選單中region
$("#add_screening_type_btn").on('click',function(){

    if($("#add_screening_type").val()=="")
    {
        return false;
    }
    else
    {
        $.ajax({
            url: "database/add_screening_keywords.php",
            data:{
                keyword:"screening_type",
                add_keyword:$("#add_screening_type").val()
            },
            type: "POST",
            dataType: "JSON",
            success: function (data) {
                if(data == 1){
                    add_screening_keywords();
                    $("#add_screening_type").val('');
                    swal({
                        type: 'success',
                        title: '新增成功!',
                        allowOutsideClick: false //不可點背景關閉
                        })
                }else{
                    swal({
                        type: 'error',
                        title: '新增失敗!請聯絡負責人',
                        allowOutsideClick: false //不可點背景關閉
                        })
                }  
            },
            error:function(e){
                console.log(e);
                alert("系統錯誤!");
            }
        });
    }
});


$("#add_screening_results_btn").on('click',function(){
    if($("#add_screening_results").val()=="")
    {
        return false;
    }
    else
    {
        $.ajax({
            url: "database/add_screening_keywords.php",
            data:{
                keyword:"screening_result",
                add_keyword:$("#add_screening_results").val()
            },
            type: "POST",
            dataType: "JSON",
            success: function (data) {
                if(data == 1){
                    add_screening_keywords();
                    $("#add_screening_results").val('');
                    swal({
                        type: 'success',
                        title: '新增成功!',
                        allowOutsideClick: false //不可點背景關閉
                        })
                }else{
                    swal({
                        type: 'error',
                        title: '新增失敗!請聯絡負責人',
                        allowOutsideClick: false //不可點背景關閉
                        })
                }  
            },
            error:function(e){
                console.log(e);
                alert("系統錯誤!");
            }
        });
    }
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

    var tran_case_name = '';
    var tran_case_pid = '';
    var tran_case_phone = '';
    var tran_case_birth = '';
    var tran_case_referral = '';

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
            url: "database/find_screening_data_detail.php",
            data:{
                Screening_id:screening_id,
            },
            type: "POST",
            dataType: "JSON",
            async :false,
            success: function (data) {
                // console.log(data)
                tran_case_name = data.Name[0];
                tran_case_gender = data.Gender[0];
                // tran_case_pid = data.Pid[0];
                tran_case_phone = data.Phone[0];
                // tran_case_birth = data.Birth[0];
                // tran_case_referral = data.Referral_detail[0];
            },
            error:function(e){
                console.log("error");
            }
        });

        window.location.href = 'phone_trans_to_opencase.php?unopen_type=screening&id='+screening_id.replace(/^\s+|\s+$/gm,'')+'&case_id='+$('#open_case_t_sn').val().replace(/^\s+|\s+$/gm,'')+'&case_property='+$('#open_case_type').val()+'&object_type='+$('#open_object_type').val()+'&tran_case_name='+tran_case_name+'&tran_case_gender='+tran_case_gender+'&tran_case_phone='+tran_case_phone+'&tran_case_pid=&tran_case_birth=&tran_case_referral=';
    }
});
//endregion

// 根據服務對象類型 自動填入 開案編號 region
$('#open_object_type').on('change', function() {

    $("#open_case_t_sn").val('');
    var object_type_val = this.value;

    $.ajax({
        url: "database/find_trans_automatic_id.php",
        data:{
            keyword:object_type_val,
        },
        type: "POST",
        dataType: "JSON",
        async :false,
        success: function (data) {
           console.log(data)
           var str_id = (parseInt(data[0].Case_id)+1).toString();

           
           switch (object_type_val) {
            case '一般藥癮者':
            case '藥癮家庭':   
                    $("#open_case_t_sn").val("RE"+str_id);
                break;
            case '愛滋感染者':
            case '親職兒少':
                    $("#open_case_t_sn").val(str_id);
                break;
            default:
                    $("#open_case_t_sn").val("");
                break;
           }
        },
        error:function(e){
            console.log(e);
        }
    });
});
//endregion

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

    var r_case_id = $("#open_case_t_sn").val().replace(/^\s*|\s*$/g,"");

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
            console.log(e);
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


