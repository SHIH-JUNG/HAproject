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
    dateFormat: "R.mm.dd.",
    showButtonPanel: true,
    // minDate: new Date(
    //   new Date().getFullYear() - 2,
    //   new Date().getMonth() - 3,
    //   1
    // ),
    // maxDate: new Date(new Date().getFullYear() + 3, 11, 31),
    yearRange: "-12:+5",
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
  // $("#leave_date").datepicker("setDate", "today");
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

  // 載入全部user至下拉式選單
  append_user();

});

//計算寫入資料庫的加班/補休時數 region
compute_hours = function() {
    var overtime_date = $("#overtime_date").val();
    var overtime_hours = $("#overtime_hours").val();
    var free_date = $("#free_date").val();
    var free_hours = $("#free_hours").val();

    
}
// endregion

//檢查補休日期/時數欄位 region
check_free_date = function () {
    var free_date = $("#free_date").val();
    var free_hours = $("#free_hours").val();

    var warning_str = "";

    if(free_date.trim()!="")
    {

    }
    else
    {

    }

    return warning_str;
}
// endregion

//監聽 加班/補休日期欄位值變化，計算加班/補休時數 region
$("input[overtime_date*='overtime_date']").change( function(event) {
    compute_hours();
});
// endregion

check_free_hours_status = function() {
    
}


//新增請假紀錄 region
$("#overtime_add_new").on("click", function () {
  var stau = false;

  // console.log(check_overtime_data())

  if (check_overtime_data() != "以下為必填欄位，不能為空值!\r\n") {
    stau = false;
  } else {
    stau = true;
  }
  // console.log(stau);

  if (!stau) {
    swal({
      title: check_overtime_data(),
      type: "error",
    });
  } else {
    swal({
      title: "選擇『確認送出』後，將無法再修改資料",
      text: "請再次確認欄位是否皆填寫無誤",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "確認送出",
      cancelButtonText: "取消",
      showConfirmButton: true,
      showCancelButton: true,
    })
      .then(
        function (result) {
          if (result) {
            if(check_free_hours_status())
            {
                swal({
                    title: "",
                    type: "warning",
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "確認",
                    showConfirmButton: true,
                  })
            }
            else
            {
                // console.log(check_overtime_status());
                // 若已經有加班申請審核中，則不能再次申請加班
                if(check_overtime_status())
                {
                  swal({
                    title: "目前還有加班申請審核中，時數尚未實際認列",
                    type: "warning",
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "確認",
                    showConfirmButton: true,
                  })
                }
                else
                {
                  submit_form();
                }
            }
          }
        },
        function (dismiss) {
          if (dismiss == "cancel") {
            swal({
              title: "已取消",
              type: "success",
            });
          }
        }
      )
      .catch(swal.noop);
  }
});
//endregion


//檢查是否尚有申請還在審核中 region
check_overtime_status = function() {

  var status = true;

  $.ajax({
    url: "database/find_data_overtime.php",
    data:{
      find_allow_status:true,
    },
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        
      console.log(data)

      if(data.length == 0)
      {
        status = false;
      }
      else
      {
        status = true;
      }
      
    },
    error:function(e){
        notyf.alert('伺服器錯誤,無法載入');
        console.log(e)
    }
  });

  return status;
}
//endregion

// 處理送出的值 region
function submit_form() {
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
  if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
  }
  });

  //Time Now
  var timenow = moment().format('YYYY-MM-DD');

  var rec_year = $("#overtime_date").val().split(".")[0];

  console.log(timenow);
  console.log(rec_year);

  var form_data = new FormData();

//   $("input[type='file']").each(function(index, element) {
//       var overtime_file = $(this).prop("files");

//       if (overtime_file != undefined) {
//         if (overtime_file.length != 0) {
//           for (var i = 0; i < overtime_file.length; i++) {
//             form_data.append("overtime_file"+index, overtime_file[i]);
//             // console.log(overtime_file[i])
//           }
//         } 
//       }
//   });

  // form_data.append("Resume_id", );
  // form_data.append("Resume_name", );
  form_data.append("Rec_year", rec_year);
  form_data.append("Fillin_date", timenow);

  form_data.append("Overtime_date", $("#overtime_date").val());
  form_data.append("Reason", $("#reason").val());

  form_data.append("Overtime_hours", $("#overtime_hours").val());
  form_data.append("Free_date", $("#free_date").val());
  form_data.append("Free_hours", $("#free_hours").val());



  form_data.append("Supervise",$("#supervise").val());
  form_data.append("Checker",$("#checker").val());

  // 預覽傳到後端的資料詳細內容
  // for (var pair of form_data.entries()) {
  //   console.log(pair[0] + ", " + pair[1]);
  // }


  $.ajax({
      url: "database/add_new_overtime.php",
      type: "POST",
      data: form_data,
      contentType: false,
      cache: false,
      processData: false,
      async: true,
      success: function (data) {
        console.log(data);
        if (data == 1) {
          swal({
            type: "success",
            title: "新增成功!",
            allowOutsideClick: false, //不可點背景關閉
          }).then(function () {
            window.location.href =
              "overtime.php";
          });
        } else {
          swal({
            type: "error",
            title: "新增失敗!請聯絡負責人",
            allowOutsideClick: false, //不可點背景關閉
          });
        }
      },
      error: function (e) {
          console.log(e)
          swal({
              type: "error",
              title: "新增失敗!請聯絡負責人",
              allowOutsideClick: false, //不可點背景關閉
          });
      },
    });
}
// endregion

//檢查必填欄位 region
function check_overtime_data() {
  var errorstr = "以下為必填欄位，不能為空值!\r\n";

  $(".fillin_need").each(function(index,element){

    var check_element = $(this).parent("td").siblings("td").children()[0];
    var check_element_name = $(this).parent("td").text();

    console.log($(check_element))
    console.log($(check_element).val())

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
    else if(check_element_tagname == "INPUT" && check_element_type=="radio")
    {
      var check_element_children_name = $(this).parent("td").siblings("td").children().attr("name");

      if($('[name="'+check_element_children_name+'"]:checked').length==0)
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

//呼叫user方法region
function append_user(){             
  $.ajax({
      type:'POST',
      url:'database/find_check_user.php',
      dataType: "JSON",
      async: false,//啟用同步請求
      success: function (data) {
          // console.log('test',data)
          for (var index in data.Id) {
            $("#job_agent").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            $("#supervise").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
          }
      },
  });
}
//endregion
