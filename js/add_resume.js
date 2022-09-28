//datepicker創建 region
datepicker_create = function (selector_id) {
  $("#" + selector_id).datepicker({
    changeYear: true,
    changeMonth: true,
    currentText: "今天",
    dateFormat: "R年mm月dd日",
    showButtonPanel: true,
    minDate: new Date(
      new Date().getFullYear() - 2,
      new Date().getMonth() - 3,
      1
    ),
    maxDate: new Date(new Date().getFullYear() + 3, 11, 31),
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
  $("#" + selector_id).datepicker("setDate", "today");
};
//endregion

// 民國年轉換日期格式yyyy-dd-mm region
function split_date(date) {
  return parseInt(date.split("年")[0])+1911+"-"+date.split("年")[1].split("月")[0]+"-"+date.split("年")[1].split("月")[1].split("日")[0]; 
}
//endregion

test = function() {
//   file_name = [];
//   $("input[type='file']").each(function() {
//     //獲取 檔名.檔案格式
//     var filePath = $(this).val().split("\\");
//     //獲取 file name名稱
//     var name = $(this).attr("name");
    
//     file_name.push({ name: name, value: filePath[filePath.length - 1] });
//  });
//  console.log(file_name)

// var form_data = new FormData();

// $("input[type='file']").each(function(index, element) {
//   var resume_files = $(this).prop("files");
//   console.log(resume_files.length)
  
//   if (resume_files != undefined) {
//     if (resume_files.length != 0) {
//       for (var i = 0; i < resume_files.length; i++) {
//         form_data.append("resume_files"+index, resume_files[i]);
//         console.log(resume_files[i])
//       }
//     } else {
//       //載入量表『無重新上傳檔案』情況下按儲存，則加入File_name供後端程式判斷
//       form_data.append("File_name", get_resume_files);
//     }
//   }
// });
 

//   var get_resume_files = get_files_name_value();

//   form_data.append("File_name", JSON.stringify(get_resume_files));

//   for (var pair of form_data.entries()) {
//     console.log(pair[0] + ", " + pair[1]);
//   }

}

$(document).ready(function () {
  //將input name名稱為ch_datepicker創建datepicker初始化 region
  $("input[name='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion

});

// 存放檔案名稱
window.file_name = [];

// 新增員工履歷 region
$("#resume_form").validator().on("submit", function (e) {
  if (e.isDefaultPrevented()) {
    return false;
  } else {
    submit_form();
  }
  e.preventDefault();
}); 
//endregion


function submit_form() {
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
    if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
    }
  });
  var form_data = new FormData();

  var entry_date_year_split = $("#entry_date").val().split("年");
  
  var get_resume_files = get_files_name_value();


  $("input[type='file']").each(function(index, element) {
    var resume_files = $(this).prop("files");
    // console.log(resume_files.length)
    
    if (resume_files != undefined) {
      if (resume_files.length != 0) {
        for (var i = 0; i < resume_files.length; i++) {
          form_data.append("resume_files"+index, resume_files[i]);
          // console.log(resume_files[i])
        }
      } else {
        //載入量表『無重新上傳檔案』情況下按儲存，則加入File_name供後端程式判斷
        form_data.append("File_name", JSON.stringify(get_resume_files));
      }
    }
  });

  form_data.append("Account", $("#account").val());
  form_data.append("Name", $("#user_name").val());
  form_data.append("Password", $("#user_password").val());
  form_data.append("Email", $("#email").val());
  form_data.append("Entry_date", $("#entry_date").val());
  form_data.append("On_or_off",$("#on_or_off").val());
  form_data.append("Remark",$("#remark").val());
  form_data.append("File_year",entry_date_year_split[0]);

  // for (var pair of form_data.entries()) {
  //   console.log(pair[0] + ", " + pair[1]);
  // }

  $.ajax({
    url: "database/add_new_resume_user_datas.php",
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
          window.location.href = "resume.php";
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
      console.log(e);
      swal({
        type: "error",
        title: "新增失敗!請聯絡負責人",
        allowOutsideClick: false, //不可點背景關閉
      });
    },
  });
}


// 顯示檔名 region
$("input[type='file']").change(function (event) {
  //獲取 檔名.檔案格式
  var filePath = $(this).val().split("\\");
  //獲取 file name名稱
  var name = $(this).attr("name");

  //創建臨時檔案連結
  // var tmppath = URL.createObjectURL(event.target.files[0]);

  //預覽上傳檔名
  $("#" + name).html("檔名：" + filePath[filePath.length - 1]);

});
// endregion



// 獲取檔案的檔名、值 region
get_files_name_value = function() {

  file_name = [];
  $("input[type='file']").each(function() {
    //獲取 檔名.檔案格式
    var filePath = $(this).val().split("\\");
    //獲取 file name名稱
    var name = $(this).attr("name");
    
    file_name.push({ name: name, value: filePath[filePath.length - 1] });
 });

 return file_name;
}
// endregion
