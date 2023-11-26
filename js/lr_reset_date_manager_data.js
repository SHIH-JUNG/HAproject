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
            //console.log(data[0].reset_date.replaceAll('/',''));
            var cssStr = "";
            var resetDate = data[0].reset_date.split("/");
            cssStr = '<span>每年特休重製時間： </span><input value='+resetDate[1]+' type="text" id="resetMonth" size=2><span> 月 </span><input value='+
            resetDate[2]+' type="text" id="resetDay" size=2><span> 日 </span><span> 上午6:00</span>';
            $("#resetDate").append(cssStr);

        },
        error: function (e) {
            swal({
            type: "error",
            title: "系統錯誤！請聯絡網站維護人員",
            allowOutsideClick: false, //不可點背景關閉
            }).then(function () {
            history.back();
            });
        },
    });
    //endregion
});


// 更新規則內容 region
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
                var today = new Date()
                var resetDate = today.getFullYear() + '/' +  $("#resetMonth").val() + '/' + $("#resetDay").val();
                console.log((resetDate.replaceAll('/','')));
                if(parseInt(resetDate.replaceAll('/',''))-parseInt(today.getFullYear()+(today.getMonth()+1) + today.getDate())<0){
                    resetDate = (today.getFullYear()+1) + '/' +  $("#resetMonth").val() + '/' + $("#resetDay").val();
                }
                console.log(resetDate);
                console.log(today.getFullYear()+''+(today.getMonth()+1) + today.getDate());
                
                $.ajax({
                    url: "database/Update_lr_reset_date_manager.php",
                    type: "POST",
                    data: {
                        rest_date:resetDate,
                    },
                    //            dataType: "JSON",
                    success: function (data) {
                      //console.log(data);
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
                          title: "更新失敗！請聯絡網站維護人員",
                          allowOutsideClick: false, //不可點背景關閉
                        });
                      }
                    },
                    error: function () {
                      swal({
                        type: "error",
                        title: "更新失敗！請聯絡網站維護人員",
                        allowOutsideClick: false, //不可點背景關閉
                      });
                    },
                });
            }
          }
        )
        .catch(swal.noop);
}
//endregion


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
