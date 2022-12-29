const notyf = new Notyf();

//取得url id值region
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      vars[key] = value;
    }
  );
  return vars;
}
//endregion

//datepicker創建 region
datepicker_create = function (selector_id) {
  $("#" + selector_id).datepicker({
    changeYear: true,
    changeMonth: true,
    currentText: "今天",
    dateFormat: "R年mm月dd日",
    showButtonPanel: true,
    // minDate: new Date(
    //   new Date().getFullYear() - 2,
    //   new Date().getMonth() - 3,
    //   1
    // ),
    // maxDate: new Date(new Date().getFullYear() + 3, 11, 31),
    yearRange: "-15:+2",
    onClose: function (dateText) {
      // console.log($('#'+selector_id).val());
      // console.log(trans_to_EN(dateText));
    },
    beforeShow: function (input, inst) {
      var $this = $(this);
      var cal = inst.dpDiv;
      var outerh = $this.outerHeight();
      if ($this.offset().top > 1200) {
        outerh = outerh * 4;
      } else {
        outerh = outerh * 3;
      }
      // console.log($this.offset().top)
      // console.log(outerh)

      var top = $this.offset().top - outerh;
      var left = $this.offset().left - 10;
      setTimeout(function () {
        cal.css({
          top: top,
          left: left,
        });
      }, 10);
    },
  });
  $("#leave_date").datepicker("setDate", "today");
};
//endregion

// 民國年轉換日期格式yyyy-dd-mm region
function split_date(date) {
  return parseInt(date.split("年")[0])+1911+"-"+date.split("年")[1].split("月")[0]+"-"+date.split("年")[1].split("月")[1].split("日")[0]; 
}
//endregion

$(document).ready(function () {
  //將input name名稱為ch_datepicker創建datepicker初始化 region
  $("input[name='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion

  //顯示剩餘可補休的時數
  load_remain_hours();
});

load_remain_hours = function() {

  window.r_annual_hours = 0;
  window.r_comp_hours = 0;


  $.ajax({
    url: "database/find_day_off_remain_hours.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
      r_annual_hours = data[0].Annual_hours;
      

    },
    error:function(e){
        notyf.alert('伺服器錯誤,無法載入');
        console.log(e)
    }
});


  $("#offset_hours_hit").html();


}

//檢查SQL撈出來的日期格式region
check_sql_date_format = function (date) {
  if (date == "0000-00-00") {
    date = "";
  } else {
    date = trans_to_Tw(date);
  }

  return date;
};

test1 = function () {
  
};

//新增請假紀錄 region
$("#day_off_add_new").on("click", function () {
  var stau = false;

  var day_off_name = $("#name").val();

  if (check_day_off_data() != "") {
    stau = false;
  } else {
    stau = true;
  }
  console.log(stau);

  if (!stau) {
    swal({
      title: check_day_off_data(),
      type: "error",
    });
  } else {
    $.ajax({
      url: "database/add_new_day_off.php",
      type: "POST",
      data: {
        // Id: $("#id").val(),
        Name: $("#name").val(),
        Overtime_date: trans_to_EN($("#overtime_date").val()),
        Reason: $("#reason").val(),
        Hours: $("#hours").val(),
        Makeup_date: trans_to_EN($("#makeup_date").val()),
        Makeup_hours: $("#makeup_hours").val(),
        // Create_date: $("#create_date").val(),
        // Create_name: $("#create_name").val(),
        // Update_date: $("#update_date").val(),
        // Update_name: $("#update_name").val(),
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
            window.location.replace("day_off.php");
          });
        } else {
          swal({
            type: "error",
            title: "新增失敗!請聯絡負責人",
            allowOutsideClick: false, //不可點背景關閉
          }).then(function () {
            window.location.replace("day_off.php");
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

//檢查必填欄位 region
function check_day_off_data() {
  var errorstr = "以下為必填欄位，不能為空值!\r\n";

  $(".fillin_need").each(function(index,element){

    var check_element = $(this).parent("td").siblings("td").children()[0];
    var check_element_name = $(this).parent("td").text();

    // console.log($(check_element).val())

    var check_element_tagname = $(check_element).prop("tagName");
    var check_element_type = $(check_element).attr("type");

    if(check_element_tagname == "INPUT" && check_element_type=="file")
    {
      var file_len = $(check_element).prop("files").length;

      if(file_len == 0)
      {
        errorstr += check_element_name.replace("※", "") + "\r\n";
      }
    }
    else
    {
      if($(check_element).val() == null || $(check_element).val().replace(/\s*/g, "") == "")
      {
        errorstr += check_element_name.replace("※", "") + "\r\n";
      }
    }    
  });

  return errorstr;
}
//endregion

// // 呼叫user方法region
// $.ajax({
//   type: "POST",
//   url: "database/find_check_user.php",
//   dataType: "JSON",
//   async: false, //啟用同步請求
//   success: function (data) {
//     for (var index in data.Id) {
//       $(".user").append(
//         '<option value="' +
//           data.Name[index] +
//           '">' +
//           data.Name[index] +
//           "</option>"
//       );
//     }
//   },
//   error: function (e) {
//     console.log(e);
//   },
// });

// endregion
