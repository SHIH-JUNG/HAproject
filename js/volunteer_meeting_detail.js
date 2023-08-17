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
    // $("#" + selector_id).datepicker("setDate", "today");
};
//endregion
    
// 民國年轉換日期格式yyyy-dd-mm region
function split_date(date) {
return parseInt(date.split("年")[0])+1911+"-"+date.split("年")[1].split("月")[0]+"-"+date.split("年")[1].split("月")[1].split("日")[0]; 
}
//endregion



vom_id = getUrlVars()["vom_id"];
  
$(document).ready(function () {
    //將input datepicker屬性名稱為ch_datepicker創建datepicker初始化 region
    $("input[datepicker='ch_datepicker']").each(function () {
    var this_id = $(this).attr("id");
    datepicker_create(this_id);
    });
    //endregion
      
    $.ajax({
        url: "database/find_volunteer_meeting_data_detail.php",
        data: {
          vom_id: vom_id,
          // year: re_year,
        },
        type: "POST",
        dataType: "JSON",
        async: false,
        success: function (data) {
          // console.log(data);
    
          $.each(data, function (index, value) {
            // $("#vom_id").html(value.vom_id);
    
            $("#title_name").val(value.Title_name);
            $("#meeting_date").val(value.Meeting_date);
            $("#meeting_time_start").val(value.Meeting_time_start);
            $("#meeting_time_end").val(value.Meeting_time_end);
    
            $("#meeting_place").val(value.Meeting_place);
            $("#expected_attendees").val(value.Expected_attendees);
            $("#actual_attendence").val(value.Actual_attendence);
            $("#absence").val(value.Absence);
            $("#agenda_contents").val(value.Agenda_contents);

            $("#review_suggest").val(value.Review_suggest);
            $("#extempore_motion").val(value.Extempore_motion);
            $("#next_meeting_date").val(value.Next_meeting_date);
    
            $("#create_date").val(value.Create_date != "0000-00-00 00:00:00" ? value.Create_date : "");
            $("#create_name").val(value.Create_name);
            $("#update_date").val(value.Update_date != "0000-00-00 00:00:00" ? value.Update_date : "");
            $("#update_name").val(value.Update_name);

            var file_0_val = value.Signin_file_path.replace(
                "../volunteer_meeting/",
                ""
            );
            //檔案連結與圖片string
            var file_0_html =
            '<a name="signin_file' +
            '_a" href="./volunteer_meeting/' +
            file_0_val +
            '" style="text-decoration:none;color:blue;" target="_blank">' +
            '現有檔案：'+
            file_0_val +
            '<br/><img id="signin_file_img" style="vertical-align:middle;" width="auto" src="./volunteer_meeting/' +
            file_0_val +
            '"></a>';
            //寫入該input相對應的div元素中顯示
            $("#signin_file").html(file_0_html);


            var file_1_val = value.Signout_file_path.replace(
                "../volunteer_meeting/",
                ""
            );
            //檔案連結與圖片string
            var file_1_html =
            '<a name="signout_file' +
            '_a" href="./volunteer_meeting/' +
            file_1_val +
            '" style="text-decoration:none;color:blue;" target="_blank">' +
            '現有檔案：'+
            file_1_val +
            '<br/><img id="signout_file_img" style="vertical-align:middle;" width="auto" src="./volunteer_meeting/' +
            file_1_val +
            '"></a>';
            //寫入該input相對應的div元素中顯示
            $("#signout_file").html(file_1_html);

            // console.log(value.Meeting_file_path)
            
            
            // meeting_file region

            var file_2_arr = value.Meeting_file_path.replace("\[", "").replace("\]", "").replace(/\"/g, "").split(",");

            window.file_2_input_val_arr = [];

            var file_2_htmlstr = "";
            
            if(value.Meeting_file_path != "")
            {
              $.each(file_2_arr, function (i, val) {
  
                var meeting_file_path = val.replace("../", "./");
                var meeting_file_name = val.split("/");
  
                var meeting_file_val = meeting_file_name[meeting_file_name.length - 1];
  
                file_2_input_val_arr.push(val);
  
                var index = meeting_file_val.lastIndexOf(".");
                
                if(isAssetTypeAnImage(meeting_file_val.substr(index+1)))
                {
                  file_2_htmlstr += '<input class="resume_question" style="zoom: 1.5" class="form-check-input" type="radio" name="file_2_check" forms_sql_id="' + value.Id + '" value="' + i + '">'
                  + '<span>檔案' + (i + 1) + '：</span><a id="val_arr'+i+'" href="' + meeting_file_path + '" style="text-decoration:none;color:blue;" target="_blank">'
                  + meeting_file_val
                  + '</a><br/>'
                  +'<img src="' + meeting_file_path + '" id="val_arr_img'+i+'" title="'+meeting_file_val+'" width="200" height="200" class="apreview" />' 
                  +'<hr/><br/>';
                }
                else
                {
                  file_2_htmlstr += '<input class="resume_question" style="zoom: 1.5" class="form-check-input" type="radio" name="file_2_check" forms_sql_id="' + value.Id + '" value="' + i + '">'
                  + '<span>檔案' + (i + 1) + '：</span><a id="val_arr'+i+'" href="' + meeting_file_path + '" style="text-decoration:none;color:blue;" target="_blank">'
                  + meeting_file_val
                  + '</a><br/><br/>';
                }
                
              });
            }
            
            file_2_htmlstr += '<br/>'
              + '<button class="resume_question" style="color:red;margin-right:3em;margin-bottom:.5em;" type="button" onclick="selectFiles_delete();">刪除</button>'
              + '<div>※點選上面要刪除的檔案</div>'
              + '<br/><hr style="border:3px dashed blue; height:1px">'
              + '<button class="resume_question" style="color:blue;" type="button" onclick="selectFiles_insert();">新增檔案+</button><br/><div id="selected-files"><span style="color:red;">上傳檔案清單預覽：</span><br/></div>';

            $("#meeting_file").html(file_2_htmlstr);
            // endregion


            var proposal_contents_json = JSON.parse("[" +value.Proposal_contents.replace('\"\[', '\[').replace('\]\"', '\]') + "]");

            var resolution_contents_json = JSON.parse("[" +value.Resolution_contents.replace('\"\[', '\[').replace('\]\"', '\]') + "]");
            
            console.log(resolution_contents_json[0])

            $.each(proposal_contents_json[0], function (i, datan) {
                var css_str = 
                '<tr>' +
                  '<td colspan="2">' +
                  '<textarea class="vom_question" style="height:6em;width:100%;resize: none;font-size: 20px;" id="proposal_contents_'+ ( i + 1 ) +'" name="proposal_contents" placeholder="請輸入提案內容">提案'+toChinesNum(( i + 1 ))+'、</textarea>' +
                  '</td>' + 
                '</tr>' +
                '<tr>' +
                  '<td colspan="2">' +
                    '<textarea class="vom_question" style="height:6em;width:100%;resize: none;font-size: 20px;" id="resolution_contents_'+ ( i + 1 ) +'" name="resolution_contents" placeholder="請輸入決議內容"></textarea><hr/>' +
                  '</td>' +
                '</tr>' + '';
  
                $("#proposal_table_last_tr").before(css_str);

                $('#proposal_contents_'+ ( i + 1 )).val(datan.val);
            });

            $.each(resolution_contents_json[0], function (i, datan) {
              $('#resolution_contents_'+ ( i + 1 )).val(datan.val);
            });
          });
        },
        error: function (e) {
          console.log(e);
          notyf.alert('伺服器錯誤,無法載入');
        },
    });
    
    $(".vom_question").attr("disabled", true);

    imagePreview();

    tab_toggle();
});


// 檢查檔案類型是否為圖片 region
function isAssetTypeAnImage(ext) {
  return [
  'png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].
  indexOf(ext.toLowerCase()) !== -1;
}
// endregion
imagePreview = function () {
  // 图片距离鼠标的位置
  this.xOffset = 10;
  this.yOffset = -10;

  //hover([over,]out)
  //over:鼠标移到元素上要触发的函数
  //out:鼠标移出元素要触发的函数

  //鼠标悬浮的事件
  $(".apreview").hover(function (e) {
      this.t = this.title;//显示在图片下的标题
      this.title = "";    //将title置为空，不让文字悬浮提示
      this.imgSr = this.src;//图片的连接
      this.c = (this.t != "") ? "<br/>" + this.t : "";
      $("body").append("<p class='preview'><img src='" + this.imgSr + "' alt='Image preview' width='auto' height='auto' />" + this.c + "</p>");
      $(".preview")
          .css("top", (e.pageY + yOffset) + "px")
          .css("left", (e.pageX + xOffset) + "px")
          // .css("max-width", "400px")
          // .css("max-height", "400px")
          .fadeIn("fast");
  },
  function () {
      this.title = this.t;//恢复title
      $(".preview").remove();
  });


  //鼠标移动的事件，让图片随着移动
  $(".apreview").mousemove(function (e) {  
      $(".preview")
          .css("top", (e.pageY - yOffset) + "px")
          .css("left", (e.pageX + xOffset) + "px");
  });
};


// 添加提案輸入框 region
add_proposal_contents = function() {
    var len =  $("[name='proposal_contents']").length;

    var new_id_proposal = "proposal_contents_" +  (len + 1);
    var new_id_resolution = "resolution_contents_" +  (len + 1);

    var new_str = '<tr>' +
                  '<td colspan="2">' +
                  '<textarea class="vom_question" style="height:6em;width:100%;resize: none;font-size: 20px;" id="'+new_id_proposal+'" name="proposal_contents" placeholder="請輸入提案內容">提案'+toChinesNum((len + 1))+'、</textarea>' +
                  '</td>' + 
                '</tr>' +
                '<tr>' +
                  '<td colspan="2">' +
                    '<textarea class="vom_question" style="height:6em;width:100%;resize: none;font-size: 20px;" id="'+new_id_resolution+'" name="resolution_contents" placeholder="請輸入決議內容">決議：</textarea><hr/>' +
                  '</td>' +
                '</tr>' + '';

    $("#proposal_table_last_tr").before(new_str);

    
    if($("#edit_div").attr("hidden") == "hidden")
    {
        $(".vom_question").attr("disabled", false);
    }
    else
    {
        $(".vom_question").attr("disabled", true);
    }
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

// 更新會議記錄 region
rec_update = function() {
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

      if (check_rec_data_upload() != "以下為必填欄位，不能為空值!\r\n") {
        stau = false;
      } else {
        stau = true;
      }

      if (!stau) {
        swal({
          title: check_rec_data_upload(),
          type: "error",
        });
      } else {
        submit_form_data_upload();
      }
    }
  } else {
    return false;
  }
}
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
  
    for (var a = 0; a < selectedFiles.length; a++) {
      form_data.append("meeting_files2[]", selectedFiles[a]);
    }
  
    var meeting_date_year_split = $("#meeting_date").val().split("年");
  
    var proposal_contents_json = get_proposal_contents();
    var resolution_contents_json = get_resolution_contents();

    // var attendees_seq_contents = get_attendees_seq_contents();
  
    form_data.append("vom_id", vom_id);
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
      url: "database/update_volunteer_meeting_data_detail.php",
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
            title: "更新成功!",
            allowOutsideClick: false, //不可點背景關閉
          }).then(function () {
            window.location.href =
              "volunteer_meeting_detail.php?" + 
              "&vom_id=" +
              vom_id +
              "";
          });
        } else {
          swal({
            type: "error",
            title: "更新失敗!請聯絡負責人",
            allowOutsideClick: false, //不可點背景關閉
          });
        }
      },
      error: function (e) {
        swal({
          type: "error",
          title: "更新失敗!請聯絡負責人",
          allowOutsideClick: false, //不可點背景關閉
        });
        console.log(e);
      },
    });
  }
  //endregion
  
  
//檢查會議記錄的必填欄位 upload region
function check_rec_data_upload() {
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
  
  

// 刪除履歷表檔案內容 多檔案上傳 region
selectFiles_delete = function () {


  if ($("[name='file_2_check']:checked").length > 0) {
    console.log($("#val_arr" + $("[name='file_2_check']:checked").attr("value")))
    swal({
      title: "是否刪除該檔案？\n" + "檔名："+ $("#val_arr" + $("[name='file_2_check']:checked").attr("value")).text(),
      text: "確認刪除後將無法復原操作",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "確認",
      cancelButtonText: "取消",
      showConfirmButton: true,
      showCancelButton: true
    }).then(function (result) {
      if (result) {
        var file_2_sql_id = $("[name='file_2_check']:checked").attr("forms_sql_id");
        var file_2_val = $("[name='file_2_check']:checked").attr("value");

        // console.log(file_2_input_val_arr)

        var r_file_2 = file_2_input_val_arr.splice(parseInt(file_2_val), 1);

        // console.log(file_2_input_val_arr)
        // console.log(r_file_2)

        $.ajax({
          url: "database/delete_volunteer_meeting_file.php",
          type: "POST",
          data: {
            Form_sql_id: file_2_sql_id,
            Vom_id: vom_id,
            File_2_arr: file_2_input_val_arr,
            File_2_delete_index: file_2_val,
            Remove_file_2: r_file_2[0],
          },
          // dataType: "JSON",
          success: function (data) {
            // console.log(data);
            if (data == 1) {
              swal({
                type: "success",
                title: "刪除檔案成功!",
                allowOutsideClick: false, //不可點背景關閉
              }).then(function () {
                location.reload();
              });
            }

          },
          error: function (e) {
            console.log(e)
            swal({
              type: "error",
              title: "刪除檔案失敗!請聯絡負責人",
              allowOutsideClick: false, //不可點背景關閉
            });
          },
        });

      }
    }, function (dismiss) {
      if (dismiss == 'cancel') {
        swal({
          title: '已取消',
          type: 'success',
        })
      }
    }).catch(swal.noop)
  }
  else {
    swal({
      type: 'warning',
      title: '請選取要刪除的檔案!',
      allowOutsideClick: false //不可點背景關閉
    })
  }


}
//endregion

window.selectedFiles = [];
window.selectedFiles_str = "";

selectFiles_insert = function () {


  if(selectedFiles.length==0)
  {
    selected_files();
  }
  else
  {
      swal({
        title: "已經有選擇檔案，是否清空當前檔案清單，重新選取？",
        text: "目前檔案清單："+selectedFiles_str,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "確認",
        cancelButtonText: "取消",
        showConfirmButton: true,
        showCancelButton: true
      }).then(function (result) {
        if (result) {
          selected_files();
        }
      }, function (dismiss) {
        if (dismiss == 'cancel') {
          swal({
            title: '已取消',
            type: 'success',
          })
        }
      }).catch(swal.noop)
  }
    
}


selected_files = function() {
  selectedFiles = [];
  selectedFiles_str = "";
  var html = '<span style="color:red;">上傳檔案清單預覽：</span><br/>';

  $("#selected-files").html(html);

  $.FileDialog({
    "accept": "*",
    "drag_message": "將檔案拖曳至此處新增",
    "title": "載入檔案",
  }).on("files.bs.filedialog", function (event) {
    for (var a = 0; a < event.files.length; a++) {
      selectedFiles.push(event.files[a]);

      // console.log(event.files[a])

      if(a == 0)
      {
        selectedFiles_str += event.files[a].name;
      }
      else
      {
        selectedFiles_str += "," + event.files[a].name;
      }

      html += '<span style="color:red;" value="' + event.files[a].name + '">' + event.files[a].name + '</span><br/>';

      //若檔案類型為圖片則創建img元素
      var index = event.files[a].name.lastIndexOf(".");

      if(isAssetTypeAnImage(event.files[a].name.substr(index+1)))
      {
        html += '<img id="meeting_file_pre_img' + a + '" src=""/>';
      }

      if(event.files.length > 1)
      {
        html += '<hr/>';
      }

      html += '<br/>';

    }

    $("#selected-files").html(html);

    $.each(event.files, function(key,val) {
      var m_pre_img_id = $('#meeting_file_pre_img' + key);
      var index = event.files[key].name.lastIndexOf(".");
      
      if(isAssetTypeAnImage(event.files[key].name.substr(index+1)))
      {
        const fr = new FileReader();
        fr.onload = function (event) {
          // console.log(event.target.result)
          // console.log(m_pre_img_id)
          m_pre_img_id.attr('src', event.target.result);//读取的结果放入圖片
        };

        fr.readAsDataURL(event.files[key]);
      }
    });

    // $("#selected-files").html(html);
  });
}

// page reload時保持上次的頁籤狀態 region
function tab_toggle() {
  $('a[data-toggle="pill"]').on('show.bs.tab', function(e) {
      localStorage.setItem('activeTab', $(e.target).attr('href'));
  });
  // console.log(localStorage)
  var activeTab = localStorage.getItem('activeTab');
  // console.log(activeTab)
  if(activeTab){
      $('#myTab a[href="' + activeTab + '"]').tab('show');
  }
}


//取消重整region
function cancel() {
    location.reload();
}
//endregion
  
  //結案個案總表格鎖定控制region
  function vo_edit() {
    $(".vom_question").attr("disabled", false);
    $("#edit_div").attr("hidden", true);
    $("#save_div").attr("hidden", false);
  }
  function vo_cancel() {
    $(".vom_question").attr("disabled", true);
    $("#edit_div").attr("hidden", false);
    $("#save_div").attr("hidden", true);
  }
  //endregion
  
  //進入預覽WORD頁面region
  $("#preview_word").on("click", function () {
    var vom_id = getUrlVars()["vom_id"];
    //    console.log(id);
    location.href = "preview_word.php?vom_id=" + vom_id + "";
  });
  
  $("#preview_word2").on("click", function () {
    var vom_id = getUrlVars()["vom_id"];
    //    console.log(id);
    location.href = "preview_word2.php?vom_id=" + vom_id + "";
  });
  //endregion