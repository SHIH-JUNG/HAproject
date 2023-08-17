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
    yearRange: "-15:+5",
    onClose: function (dateText) {
      // console.log($('#'+selector_id).val());
      // console.log(trans_to_EN(dateText));
    },
    beforeShow: function (input, inst) {
      var $this = $(this);
      var cal = inst.dpDiv;
      var outerh = $this.outerHeight();
      if ($this.offset().top > 1500) 
      {
        outerh = outerh * 8;
      }
      else if ($this.offset().top > 1200 && $this.offset().top < 1500) 
      {
          outerh = outerh * 4;
      }
      else 
      {
        outerh = outerh * 3;
      }
      console.log($this.offset().top)
      console.log(outerh)

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

$(document).ready(function () {
  //將input datepicker屬性名稱為ch_datepicker創建datepicker初始化 region
  $("input[datepicker='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
  });
  //endregion

  // 預設會議名稱
  $("#title_name").val(" 年第 次志工會議");

  $.ajax({
      type:'POST',
      url:'database/find_check_user.php',
      dataType: "JSON",
      async: false,//啟用同步請求
      success: function (data) {
          // console.log('test',data)
          for (var index in data.Id) {
              $("[id*=supervise]").append('<option value="'+data.Name[index]+'">'+data.Name[index]+'</option>');
          }
      },
    });
});

// 添加提案輸入框 region
add_proposal_contents = function() {
  var len =  $("[name='proposal_contents']").length;

  var new_id_proposal = "proposal_contents_" +  (len + 1);
  var new_id_resolution = "resolution_contents_" +  (len + 1);

  var new_str = '<tr>' +
                  '<td colspan="2">' +
                  '<textarea style="height:6em;width:100%;resize: none;font-size: 20px;" id="'+new_id_proposal+'" name="proposal_contents" placeholder="請輸入提案內容">提案'+toChinesNum((len + 1))+'、</textarea>' +
                  '</td>' + 
                '</tr>' +
                '<tr>' +
                  '<td colspan="2">' +
                    '<textarea style="height:6em;width:100%;resize: none;font-size: 20px;" id="'+new_id_resolution+'" name="resolution_contents" placeholder="請輸入決議內容">決議：</textarea><hr/>' +
                  '</td>' +
                '</tr>' + '';
  
      $("#proposal_table_last_tr").before(new_str);

}
//endregion

// 刪除最後一個提案輸入框 region
minus_proposal_contents  = function() {

  swal({
    title: "確定刪除提案"+toChinesNum($("[name='proposal_contents']").length)+"？",
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
          var len =  $("[name='proposal_contents']").length;

          // console.log($("#proposal_table tr td").children())

          $("#proposal_table tr").children()[len * 2 - 1].remove();

          $("#proposal_table tr").children()[len * 2 - 2].remove();
        }
      }
    )
    .catch(swal.noop);
}
//endregion

// 阿拉伯數字轉中文數字 region
function toChinesNum ( num ){
  let changeNum = [ '零' , '一' , '二' , '三' , '四' , '五' , '六' , '七' , '八' , '九' ]; //changeNum[0] = "零"           
  let unit = [ "" , "十" , "百" , "千" , "萬" ];     
  num = parseInt ( num );
  let getWan = ( temp ) => {   
  let strArr = temp . toString (). split ( "" ). reverse ();
  let newNum = "" ; 
  for ( var i = 0 ; i < strArr . length ; i ++) {   
    newNum = ( i == 0 && strArr [ i ] == 0 ? "" : ( i > 0 && strArr [ i ] == 0 && strArr [ i - 1 ] == 0 ? "" : changeNum [ strArr [ i ]] + ( strArr [ i ] == 0 ? unit [                         0 ] : unit [ i ]))) + newNum ;  
  }
   return newNum ;
 }
 let overWan = Math . floor ( num / 10000 );  
 let noWan = num % 10000 ; 
 if ( noWan . toString (). length < 4 ) noWan = "0" + noWan ;    
 return overWan ? getWan ( overWan ) + "萬" + getWan ( noWan ) : getWan ( num );    
}
//endregion

// 提案內容json獲取 region
get_proposal_contents = function() {

  var proposal_contents_json = [];
  
  $("[name='proposal_contents']").each(function () {
    var this_id = $(this).attr("id");
    var this_id_val = $("#"+this_id).val();

    proposal_contents_json.push({ input_id: this_id, val: this_id_val });
  });


  return proposal_contents_json;
}
//endregion

// 決議內容json獲取 region
get_resolution_contents = function() {

  var resolution_contents_json = [];
  
  $("[name='resolution_contents']").each(function () {
    var this_id = $(this).attr("id");
    var this_id_val = $("#"+this_id).val();

    resolution_contents_json.push({ input_id: this_id, val: this_id_val });
  });


  return resolution_contents_json;
}
//endregion

// 獲取應出席人員的志工編號	 region
get_attendees_seq_contents = function() {

  var attendees_seq_contents = "";
  var attendees_contents_arr = $("#expected_attendees").val();
  
  // $.each(attendees_contents_arr, function (index, value) {
  //   $.ajax({
  //     url: "database/find_volunteer_meeting_attendees_seq_contents.php",
  //     data: {
  //       attendees_name: value,
  //     },
  //     type: "POST",
  //     dataType: "JSON",
  //     async: false,
  //     success: function (data) {
  //       if (data != "") {
  //         $.each(data, function (index, value) {

  //           if(index == (data.length - 1))
  //           {
  //             attendees_seq_contents += value.volunteer_id;
  //           }
  //           else
  //           {
  //             attendees_seq_contents += value.volunteer_id + "、";
  //           }
  //         });
  //       } else {
  //         attendees_seq_contents = "";
  //       }
  //     },
  //     error: function (e) {
  //       console.log(e);
  //       notyf.alert('伺服器錯誤,無法載入');
  //     },
  //   });
  // });

  return attendees_seq_contents;
}
//endregion

//新增會議記錄region
$("#rec_add_new").on("click", function () {
   
  //判斷該量表是否含有 input[type="file"] 類型資料
  if ($('input[type="file"]').length != 0) {
    var exist_arr = check_file_exist();

    // console.log(exist_arr);
    //如果上傳的檔案檔名重複則提示使用者
    if (exist_arr.length != 0) {
      swal({
        title: exist_arr[0][1],
        text: "選擇『確認送出』覆蓋現有檔案，或是按『取消』更改檔名",
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
              submit_form_data_upload();
            }
          },
          function (dismiss) {
            if (dismiss == "cancel") {
              swal({
                title: "已取消，建議請更改檔名",
                type: "success",
              });
            }
          }
        )
        .catch(swal.noop);
    } else {
      var stau = false;

      if (check_add_rec_data_upload() != "以下為必填欄位，不能為空值!\r\n") {
        stau = false;
      } else {
        stau = true;
      }

      if (!stau) {
        swal({
          title: check_add_rec_data_upload(),
          type: "error",
        });
      } else {
        submit_form_data_upload();
      }
    }
  } else {
    return false;
  }
});
//endregion


//新增會議記錄region
submit_form_data_upload = function() {
  
  //去掉資料內前後端多餘的空白，file類型須排除，否則報錯
  $("input, textarea").each(function () {
    if ($(this).attr("type") != "file") {
      $(this).val(jQuery.trim($(this).val()));
    }
  });

  var form_data = new FormData();

  var get_meeting_files = get_files_name_value();

  $("[name='signin_file'], [name='signout_file']").each(function(index, element) {
    var meeting_files = $(this).prop("files");
    // console.log(meeting_files.length)
    
    if (meeting_files != undefined) {
      if (meeting_files.length != 0) {
        for (var i = 0; i < meeting_files.length; i++) {
          // console.log(meeting_files[i])
            form_data.append("meeting_files"+index, meeting_files[i]);
        }
      } else {
        //載入量表『無重新上傳檔案』情況下按儲存，則加入File_name供後端程式判斷
        form_data.append("File_name", JSON.stringify(get_meeting_files));
      }
    }
  });

  $("[name='meeting_file']").each(function(index, element) {
    var meeting_files = $(this).prop("files");
    // console.log(meeting_files.length)
    
    if (meeting_files != undefined) {
      if (meeting_files.length != 0) 
      {
        for (var i = 0; i < meeting_files.length; i++) {
          // console.log(meeting_files[i])
          form_data.append("meeting_files2[]", meeting_files[i]);
        }
      }
    }
  });



  var meeting_date_year_split = $("#meeting_date").val().split("年");

  var proposal_contents_json = get_proposal_contents();
  var resolution_contents_json = get_resolution_contents();

  // var attendees_seq_contents = get_attendees_seq_contents();

  form_data.append("year", meeting_date_year_split[0]);
  form_data.append("Title_name", $("#title_name").val());
  form_data.append("Meeting_date", $("#meeting_date").val());
  form_data.append("Meeting_time_start", $("#meeting_time_start").val());
  form_data.append("Meeting_time_end", $("#meeting_time_end").val());
  form_data.append("Meeting_place", $("#meeting_place").val());
  form_data.append("Expected_attendees", $("#expected_attendees").val());
  
  form_data.append("Actual_attendence", $("#actual_attendence").val());
  form_data.append("Absence", $("#absence").val());

  form_data.append("Agenda_contents", $("#agenda_contents").val());
  form_data.append("Proposal_contents", JSON.stringify(proposal_contents_json));
  form_data.append("Resolution_contents", JSON.stringify(resolution_contents_json));

  form_data.append("Review_suggest", $("#review_suggest").val());
  form_data.append("Extempore_motion", $("#extempore_motion").val());
  form_data.append("Next_meeting_date", $("#next_meeting_date").val());

  form_data.append("Attendees_seq_contents", "");

  form_data.append("signer", $("#supervise").val());
  form_data.append("title", '志工會議記錄簽核：'+$("#title_name").val());
  form_data.append("rec_date_time", split_date($("#meeting_date").val())+" 00:00");
  
  for (var pair of form_data.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }

  $.ajax({
    url: "database/add_new_upload_volunteer_meeting.php",
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
            "volunteer_meeting.php";
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
  var errorstr = "以下為必填欄位，不能為空值!\r\n";

  $(".fillin_need").each(function(index,element){

    var check_element = $(this).parent("td").siblings("td").children().children()[0];
    var check_element_name = $(this).parent("td").text();
    
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


test = function() {

}


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

    if(event.target.files.length > 1)
    {
      file_names_str += '<hr/>';
    }

    file_names_str += '<br/>';

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


//檢查檔名是否重複，提示使用者region
function check_file_exist() {
  var check_file_value1 = $('input[name="signin_file"]').prop("files");
  var check_file_value2 = $('input[name="signout_file"]').prop("files");

  var warning_str = "";
  var file_arr = [];
  var file_n = "";
  var exist_info = [];

  for (var i = 0; i < check_file_value1.length; i++) {
      file_arr.push(check_file_value1[i]["name"]);
  }

  for (var i = 0; i < check_file_value2.length; i++) {
      file_arr.push(check_file_value2[i]["name"]);
  }

  console.log(file_arr)

  $.each(file_arr, function (index, value) {
      $.ajax({
      url: "database/volunteer_meeting_file_check.php",
      data: {
          file_name: value,
      },
      type: "POST",
      dataType: "JSON",
      async: false,
      success: function (data) {
          console.log(data)
          if (data != "")
          {
              warning_str += "已有重複檔案名稱：\n" + value;

              exist_info.push([value, warning_str]);
          } else {
          warning_str = "";
          }
      },
      error: function (e) {
          console.log(e);
          notyf.alert('伺服器錯誤,無法載入');
      },
      });
  });
  return exist_info;
}
//endregion


history_back = function() {
  
  swal({
    title: "確定取消新增志工會議紀錄？",
    text: "選擇『確認』會到志工會議記錄一覽表，或是按『取消』繼續新增會議記錄",
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
          history.back();
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