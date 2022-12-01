//取得url id值region
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
//endregion

$(document).ready(function () {

    // 顯示各期零用金紀錄、兒少單據、轉帳資料 region
    $.ajax({
        url: "database/find_leave_rule_table.php",
        type: "POST",
        dataType: "JSON",
        success: function (data) {
            // console.log(data);
            var cssStr = "";
            
            // console.log(data[0].Rule_table_json)
            var leave_rule_arr = data[0].Rule_table_json.replace("\[","").replace("\]","").split(",");

            // console.log(typeof leave_rule_arr)
            // console.log(leave_rule_arr)

            $.each(leave_rule_arr, function (index, value) {

                // console.log(index)
                // console.log(value)

                var rule_str = "";
                
                if(index == 0)
                {
                    rule_str = "6個月至未滿1年";
                }
                else
                {
                    rule_str = "滿第"+ index +"年";
                }

        
                cssStr = '<tr id="tr'+index+'">' +
                '<td style="text-align:center;border-right: 1px solid #111;">'+'<span>'+rule_str+'</span>'+'</td>' + 
                '<td style="text-align:center;">'+'<input value="'+value.replace("\"", "")+'" type="text" id="leave_num'+index+'" class="leave_rule_question">'+'</td>' + 
                '</tr>';

                $("#leave_rule_table_tbody").append(cssStr);
            });


            $("input[name='tr_update']").each(function(index) {
                $(this).on("click", function(){
                    // For the mammal value
                    var mammalKey = $(this).attr('value'); 
                    $("input[name*='tr_update']").prop('checked',false);
                    $("#tr_update"+mammalKey).prop('checked',true);
                });
            });

            $(".leave_rule_question").attr("disabled",true);

        },
        error: function (e) {
            swal({
            type: "error",
            title: "系統錯誤!請聯絡負責人",
            allowOutsideClick: false, //不可點背景關閉
            }).then(function () {
            history.back();
            });
        },
    });
    //endregion
});


update_rule = function() {


    swal({
        title: "確定要修改特休規則表的內容？",
        text: "選擇『確認』將修改當前規則，並且將無法復原",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "確認",
        cancelButtonText: "取消",
        showConfirmButton: true,
        showCancelButton: true,
      })
        .then(
          function (result) {
            if (result) {
             
                var update_leave_rule_arr = [];

                $("[id*='leave_num']").each(function(){
                    var rule_input = $(this).val(); // This is the jquery object of the input, do what you will
                    update_leave_rule_arr.push(parseInt(rule_input));
                });
            
                var update_leave_rule = JSON.parse(JSON.stringify(update_leave_rule_arr));

                console.log(update_leave_rule)    
                console.log(typeof update_leave_rule)
            
                $.ajax({
                    url: "database/update_leave_rule_table_data.php",
                    type: "POST",
                    data: {
                        rule_arr:update_leave_rule,
                    },
                    //            dataType: "JSON",
                    success: function (data) {
                      console.log(data);
                      if (data == 1) {
                        swal({
                          type: "success",
                          title: "更新成功!",
                          allowOutsideClick: false, //不可點背景關閉
                        }).then(function () {
                            location.reload();
                        });
                      } else {
                        swal({
                          type: "error",
                          title: "更新失敗!請聯絡負責人",
                          allowOutsideClick: false, //不可點背景關閉
                        });
                      }
                    },
                    error: function () {
                      swal({
                        type: "error",
                        title: "更新失敗!請聯絡負責人",
                        allowOutsideClick: false, //不可點背景關閉
                      });
                    },
                });
            }
          }
        )
        .catch(swal.noop);

   
}


//篩檢總表格鎖定控制region
function leave_rule_edit(){
    $('.leave_rule_question').attr('disabled', false);
    $('#edit_div').attr('hidden', true);
    $('#save_div').attr('hidden', false);
};
function leave_rule_cancel(){
    $('.leave_rule_question').attr('disabled', true);
    $('#edit_div').attr('hidden', false);
    $('#save_div').attr('hidden', true);
};
//endregion
