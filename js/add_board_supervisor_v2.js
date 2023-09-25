const notyf = new Notyf();

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
    yearRange: "-15:+5",
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
  //將input datepicker屬性名稱為ch_datepicker創建datepicker初始化 region
  $("input[datepicker='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion

  $.ajax({
    type:'POST',
    url:'database/find_check_user.php',
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        // console.log('test',data)
        for (var index in data.Id) {
            $("[id*=supervise]").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
            $("[id*=director]").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
        }
    },
  });
});


// 民國年轉換日期格式yyyy-dd-mm region
function split_date(date) {
  return parseInt(date.split("年")[0])+1911+"-"+date.split("年")[1].split("月")[0]+"-"+date.split("年")[1].split("月")[1].split("日")[0]; 
}
//endregion


//宣告存入 file Object的空陣列
window.file_name = [];

// 顯示檔名 region
$("input[type='file']").change(function (event) {

   
  // console.log(event.target.files)
  // console.log(event.target.files.length)

  //獲取 file name名稱
  var name = $(this).attr("name");

  var file_names_str = "";

  // 顯示檔名
  $.each(event.target.files, function(key,val) {

    
    file_names_str += "檔案" + (key + 1) + "名稱：" + val.name + "<br/>";

    //若檔案類型為圖片則創建img元素
    var index = val.name.lastIndexOf(".");

    if(isAssetTypeAnImage(val.name.substr(index+1)))
    {
      file_names_str += '<img id="' + name + 'pre_img' + key + '" src=""/>';
    }

    // if(event.target.files.length > 1)
    // {
    //   file_names_str += '<hr/>';
    // }

    // file_names_str += '<br/>';

  });

  //若檔案類型為圖片則顯示圖片
  $.each(event.target.files, function(key,val) {
    var index = val.name.lastIndexOf(".");

    if(isAssetTypeAnImage(val.name.substr(index+1)))
    {
      const fr = new FileReader();
      fr.onload = function (e) {
        $('#' + name + 'pre_img' + key).attr('src', e.target.result);//读取的结果放入圖片
      };

      fr.readAsDataURL(event.target.files[key]);
    }
  });

  //預覽上傳檔名(圖片)
  $("#" + name).html(file_names_str);

});
// endregion


// 檢查檔案類型是否為圖片 region
function isAssetTypeAnImage(ext) {
  return [
  'png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].
  indexOf(ext.toLowerCase()) !== -1;
}
// endregion

// 獲取檔案的檔名、值 region
get_files_name_value = function() {

  file_name = [];
  $("input[type='file']").each(function() {

    // //獲取 檔名.檔案格式
    // var filePath = $(this).val().split("\\");

    //獲取 file name名稱
    var name = $(this).attr("name");
    
    // file_name.push({ name: name, value: filePath[filePath.length - 1] });

    if($(this).context.files.length == 1)
    {
      file_name.push({ name: name, value: $(this).context.files[0].name });
    }
    else
    {
      var files_arr = [];

      $.each($(this).context.files, function(key,val) {

        files_arr.push(val.name);
    
      });

      file_name.push({ name: name, value:files_arr});
    }

    
 });

//  console.log(file_name)

 return file_name;
}
// endregion


//檢查檔案重複，並上傳會議記錄 region
$("#rec_add_new_upload").on("click", function () {

  var stau = false;

  if (check_add_rec_data_upload() != "") 
  {
    stau = false;
  } 
  else 
  {
    stau = true;
  }

  if (!stau) 
  {
    swal({
      title: check_add_rec_data_upload(),
      type: "error",
    });
  } 
  else 
  {
    submit_form_data_upload();
  }

});
//endregion

//上傳會議記錄ajax資料格式 region
function submit_form_data_upload() 
{
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
    if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
    }
  });

  var form_data = new FormData();
  var form = $(".form").serializeArray();

  $.each(form, function (seq, element) {

    var inputs_type = $("[name='"+element.name+"']").prop("tagName");

    if(inputs_type == "TEXTAREA")
    {
      element.value = element.value.replace(/\r\n/g, ";;");
    }
  });

  if (file_name.length == 0) {
    var input_files_len = $('[type="file"]');
    var inputs_files_value = $('[type="file"]').attr("value");
    var inputs_files_name = $('[type="file"]').attr("name");

    if (inputs_files_value != undefined) {
      for (var i = 0; i < input_files_len.length; i++) {
        file_name.push({ name: inputs_files_name, value: inputs_files_value });
      }
    }

    form = form.concat(file_name);
  } else {
    form = form.concat(file_name);
  }

  $("[name='customFile1']").each(function(index, element) {
    var agenda_files = $(this).prop("files");
    // console.log(agenda_files.length)
    
    if (agenda_files != undefined) {
      if (agenda_files.length != 0) 
      {
        for (var i = 0; i < agenda_files.length; i++) {
          // console.log(agenda_files[i])
          form_data.append("agenda_files[]", agenda_files[i]);
        }
      }
    }
  });

  $("[name='customFile2']").each(function(index, element) {
    var rec_files = $(this).prop("files");
    // console.log(rec_files.length)
    
    if (rec_files != undefined) {
      if (rec_files.length != 0) 
      {
        for (var i = 0; i < rec_files.length; i++) {
          // console.log(rec_files[i])
          form_data.append("rec_files[]", rec_files[i]);
        }
      }
    }
  });

  var upload_rec_date_year_split = $("#upload_rec_date").val().split("年");

  form_data.append("year", upload_rec_date_year_split[0]);
  form_data.append("upload_content", JSON.stringify(form));
  form_data.append("title", '理監事會記錄簽核：'+$("#upload_title_name").val());
  form_data.append("rec_type", 'upload');
  form_data.append("Director",$("#upload_rec_director").val());
  form_data.append("Supervise",$("#upload_rec_supervise").val());
  form_data.append("signer", $("#upload_rec_director").val() + "、" + $("#upload_rec_supervise").val());
  form_data.append("rec_date_time", split_date($("#upload_rec_date").val())+" 00:00");

  form_data.append("RW_title", '上傳提醒：'+ $("#upload_title_name").val());
  form_data.append("RW_G_date", split_date($("#upload_agenda_date").val()));
  form_data.append("RW_R_date", split_date($("#upload_rec_date").val()));
  // for (var pair of form_data.entries()) {
  //   console.log(pair[0] + ", " + pair[1]);
  // }

  $.ajax({
    url: "database/add_new_upload_board_supervisor_v2.php",
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
            "board_supervisor_v2.php?year=" + upload_rec_date_year_split[0];
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
      swal({
        type: "error",
        title: "新增失敗!請聯絡負責人",
        allowOutsideClick: false, //不可點背景關閉
      });
      console.log(e);
    },
  });
}
//endregion

//檢查會議記錄的必填欄位 upload region
function check_add_rec_data_upload() {
  var upload_title_name = $("#upload_title_name").val();
  var upload_agenda_title_name = $("#upload_agenda_title_name").val();
  // var customFile1 = $("[name*=customFile1]").prop("files").length;
  // var customFile2 = $("[name*=customFile2]").prop("files").length;

  var upload_rec_director = $("#upload_rec_director").val();
  var upload_rec_supervise = $("#upload_rec_supervise").val();

  var errorstr = "";

  if(upload_title_name == null) {
    errorstr += "未填寫理監事會記錄標題!\r\n";
  }
  if(upload_agenda_title_name == null) {
    errorstr += "未填寫會議章程標題!\r\n";
  }
  // if(customFile1 == 0) {
  //   errorstr += "未上傳會議章程檔案!\r\n";
  // }
  // if(customFile2 == 0) {
  //   errorstr += "未上傳會議記錄檔案!\r\n";
  // }
  if (upload_rec_director == null) {
    errorstr += "未選擇主管!\r\n";
  }
  if (upload_rec_supervise == null) {
    errorstr += "未選擇執行長!\r\n";
  }
  if (errorstr == "") {
    if(upload_title_name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫理監事會記錄標題!\r\n";
    }
    if(upload_agenda_title_name.replace(/\s*/g, "") == "") {
      errorstr += "未填寫會議章程標題!\r\n";
    }
    if (upload_rec_director.replace(/\s*/g, "") == "") {
      errorstr += "未選擇主管!\r\n";
    }
    if (upload_rec_supervise.replace(/\s*/g, "") == "") {
      errorstr += "未選擇執行長!\r\n";
    }
  }

  return errorstr;
}
//endregion

// 禁止所有輸入框輸入 反斜線符號\ region
$("input, textarea").on("input", function() {
  return $(this).val($(this).val().replace(/\\/g,''));
});
//endregion