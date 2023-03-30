//datepicker創建 region
datepicker_create = function (selector_id) {
  if (selector_id == "birth") {
    $("#" + selector_id).datepicker({
      changeYear: true,
      changeMonth: true,
      currentText: "今天",
      dateFormat: "R.mm.dd",
      showButtonPanel: true,
      yearRange: "-109:+0",
      onClose: function (dateText) {
        console.log($("#" + selector_id).val());
        console.log(trans_to_EN(dateText));
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
  } else {
    $("#" + selector_id).datepicker({
      changeYear: true,
      changeMonth: true,
      currentText: "今天",
      dateFormat: "R.mm.dd",
      showButtonPanel: true,
      minDate: new Date(new Date().getFullYear(), new Date().getMonth() - 3, 1),
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
  }
};
//endregion

//將日期轉為民國年格式111.03.07 region
trans_to_Tw = function (endate) {
  var strAry = endate.split(".");

  if (parseInt(strAry[0]) > 1911) {
    strAry[0] = parseInt(strAry[0]) - 1911;
  }

  return strAry.join(".");
};
//endregion

//將日期轉為西元年格式2022-03-07(mysql date格式) region
trans_to_EN = function (endate) {
  var strAry = endate.split(".");

  if (parseInt(strAry[0]) < 1911) {
    strAry[0] = parseInt(strAry[0]) + 1911;
  }

  return strAry.join("-");
};
//endregion

$(document).ready(function () {
  //將input name名稱為ch_datepicker創建datepicker初始化 region
  $("input[name='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion

  append_user();
});

// 存放檔案名稱
window.file_name = [];

// 新增員工履歷 region
$("#program_plan_form").validator().on("submit", function (e) {
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

  var date_year_split = $("#date").val().split("年");
  
  var get_program_plan_files = get_files_name_value();


  $("input[type='file']").each(function(index, element) {
    var program_plan_files = $(this).prop("files");
    // console.log(program_plan_files.length)
    
    if (program_plan_files != undefined) {
      if (program_plan_files.length != 0) {
        for (var i = 0; i < program_plan_files.length; i++) {
          form_data.append("program_plan_files"+index, program_plan_files[i]);
          // console.log(program_plan_files[i])
        }
      } else {
        //載入量表『無重新上傳檔案』情況下按儲存，則加入File_name供後端程式判斷
        form_data.append("File_name", JSON.stringify(get_program_plan_files));
      }
    }
  });

  form_data.append("Date", $("#date").val());
  form_data.append("Plan_name", $("#plan_name").val());
  form_data.append("File_year", date_year_split[0]);


  for (var pair of form_data.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }

  $.ajax({
    url: "database/add_new_program_plan_user_datas.php",
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
          window.location.href = "program_plan.php";
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
