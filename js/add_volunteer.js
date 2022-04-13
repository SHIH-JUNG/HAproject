//新增生輔紀錄region
$("#volunteer_add_new").on("click", function () {
  var stau = false;

  if (check_add_dlgrec_data() != "") {
    stau = false;
  } else {
    stau = true;
  }
  console.log(stau);

  if (!stau) {
    swal({
      title: check_add_dlgrec_data(),
      type: "error",
    });
  } else {
    $.ajax({
      url: "database/add_new_volunteer.php",
      type: "POST",
      data: {
        Id: $("#id").val(),
        Year: $("#year").val(),
        Name: $("#name").val(),
        Serv_type: $("#serv_type").val(),
        Serv_time: $("#serv_time").val(),
        Time_all: $("#time_all").val(),
        Rece_hours: $("#rece_hours").val(),
        Serv_award: $("#serv_award").val(),
        Honor_card: $("#honor_card").val(),
      },
      //            dataType: "JSON",
      success: function (data) {
        console.log(data);
        if (data == 1) {
          swal({
            type: "success",
            title: "新增成功!",
            allowOutsideClick: false, //不可點背景關閉
          }).then(function () {
            window.location.replace("volunteer.php");
          });
        } else {
          swal({
            type: "error",
            title: "新增失敗!請聯絡負責人",
            allowOutsideClick: false, //不可點背景關閉
          }).then(function () {
            window.location.replace("volunteer.php");
          });
        }
      },
      error: function (e) {
        alert("系統錯誤!");
        console.log(e);
      },
    });
  }
});
//endregion

//檢查志工紀錄的必填欄位region
function check_add_dlgrec_data() {
  var dlgrec_date = $("#year").val();

  var errorstr = "";

  if (dlgrec_date == null) {
    errorstr += "未填寫日期!\r\n";
  }
  if (errorstr == "") {
    if (dlgrec_date.replace(/\s*/g, "") == "") {
      errorstr += "未填寫日期!\r\n";
    }
  }

  return errorstr;
}
//endregion

//呼叫user方法region
// $.ajax({
//     type:'POST',
//     url:'database/find_check_user.php',
//     dataType: "JSON",
//     async: false,//啟用同步請求
//     success: function (data) {
//         for (var index in data.Id) {
//             $(".user").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
//         }
//     },
//     error:function(e){
//         console.log(e);
//     }
// });

//endregion
