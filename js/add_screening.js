$(document).ready(function(){

    add_screening_keywords();
});

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
                swal({
                    type: "error",
                    title: "新增失敗!請聯絡負責人",
                    allowOutsideClick: false, //不可點背景關閉
                });
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
                swal({
                    type: "error",
                    title: "新增失敗!請聯絡負責人",
                    allowOutsideClick: false, //不可點背景關閉
                });
            }
        });
    }
});
//endregion

//新增篩檢資料region
$("#screening_add_new").on('click',function(){

//分割年月region
var Arr=[];
var date = $("#reservation_date").val();
Arr = date.split("-"); // 根据“-”分割

y = Arr[0];
m = Arr[1];
console.log("Arr[0]"+y);
console.log("Arr[1]"+m);
//endregion

//處理年齡分類region
check_age_type_radio();
//endregion
    var stau = false;

    if (check_add_screening_data() != "") 
    {
            
        stau = false;
    }
    else {
        stau = true;
    }
    console.log(stau);

    if(!stau)
    {
        // alert(check_add_screening_data());
        swal({
            title:check_add_screening_data(),
            type:'error'
          })
    }
    else
    { 
        $.ajax({
            url: "database/add_new_screening.php",
            type: "POST",
            data:{
                Reservation_date:$("#reservation_date").val(),
                Reservation_time:$("#reservation_time").val(),
                Name:$("#name").val(),
                Age:$("#age").val(),
                a_val:a_val,
                Phone:$("#phone").val(),
                Gender:$("#gender").val(),
                Sexual_orientation: $("#sexual_orientation").val(),
                Screening_type:$("#screening_type").val(),
                Screening_results:$("#screening_results").val(),
                Interview_content:$("#interview_content").val(),
                Remark:$("#remark").val(),
                Reagent_seq:$("#reagent_seq").val(),
                Amount:$("#amount").val(),
                date_y:y,
                date_m:m,
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
                            window.location.replace("screening.php"); 
                        })
                }else{
                    swal({
                        type: 'error',
                        title: '新增失敗!請聯絡負責人',
                        allowOutsideClick: false //不可點背景關閉
                        })
                        // .then(function () {
                        //     window.location.replace("screening.php"); 
                        // })
                }  
            },
                error: function () {
                    swal({
                        type: "error",
                        title: "新增失敗!請聯絡負責人",
                        allowOutsideClick: false, //不可點背景關閉
                    });
                }
        });
    }

        
});
//endregion


//判斷年齡分類region
function check_age_type_radio(){
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
        }else{
            a_val= "";
        }    
    }
    
    console.log(a_val);
}
//endregion

//檢查篩檢者資料的必填欄位region
function check_add_screening_data()
{
    var reservation_date = $("#reservation_date").val();
    var reservation_time = $("#reservation_time").val();
    var name = $("#name").val();
    var phone = $("#phone").val();
    var gender = $("#gender").val();
    var sexual_orientation = $("#sexual_orientation").val();
    var screening_type = $("#screening_type").val();
    var screening_results = $("#screening_results").val();

    var age = $("#age").val();
    var age_radio =  $("input[type=radio][name='a_type[]']:checked").length;
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
    if(age !=null || age!="")
    {
        if (age_radio <=0) {
            errorstr += "未選擇年齡分類!\r\n";
        }
    }
    if (errorstr == "") {
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


//呼叫user方法region           
        $.ajax({
            type:'POST',
            url:'database/find_check_user.php',
            dataType: "JSON",
            async: false,//啟用同步請求
            success: function (data) {
                for (var index in data.Id) {
                    $(".user").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
                }
            },
            error:function(e){
                console.log(e);
            }
        });

//endregion

