//行事曆設定region
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
      locale: 'zh-tw',
      headerToolbar: {
        left: 'prev today next',
        center: 'title',
        right: 'dayGridMonth timeGridWeek'
      },        
      eventTimeFormat: {
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false,
          hour12: false,
        },
//      windowResize: function(arg) {
//      },
//      handleWindowResize:true,
      aspectRatio: 2,
      displayEventEnd: false , 
      dayMaxEvents: false, // for all non-TimeGrid views   
      navLinks: false, // can click day/week names to navigate views
      businessHours: true, // display business hours
//      editable:true,
      selectable: true,
      buttonText: {
          today: '今天',
          month: '一月顯示',
          week: '一週顯示',
//          list:'待辦事項'
        },
      dateClick: function(info) {        
        $('#add').modal('show');        
        $("#start").val(info.dateStr+" 12:00");
        $("#end").val(info.dateStr+" 13:00");
        Cookies.set('dateval', info.dateStr);
      },
      eventClick:function(info) { 
          window.db_name = info.event.extendedProps.database_name;
          window.db_id = info.event.extendedProps.db_id;
          window.authority_num = info.event.extendedProps.authority_num;
        //   console.log(db_name)
        //   console.log(db_id)
          var start = moment(info.event.start).format("YYYY-MM-DD HH:mm");
          var end = moment(info.event.end).format("YYYY-MM-DD HH:mm");
//          console.log(info.event.allDay);//true or false
          $('#update_delete').modal('show');
          $("#up_title").val(info.event.title);
          $("#site").attr('href',info.event.extendedProps.description);
        //   if((info.event.extendedProps.description).substr(0,7) == "http://"){
          if((info.event.extendedProps.description).includes(".php")){
              $("#btn").attr('hidden',false);
          }else{
              $("#btn").attr('hidden',true);
          }
          
            $("#up_description").val(info.event.extendedProps.description);

          
            if(start != "Invalid date")
            {
                $("#up_start").val(start);
            }
            if(end != "Invalid date")
            {
                $("#up_end").val(end);
            }
          
          
              
          
          //發佈人region
          $.ajax({
                url: "database/find_publisher.php",
                data: {
                    id:info.event.id,
                },
                type: "POST",
                success: function (data) {
                    $("#publisher").text(data);
                }
            });
          //endregion
          
          //刪除事件region
            $("#up_delete").click(function(){
                swal({
                    title: '確定刪除？',
                    type: 'warning',
                    showCancelButton: true, 
                    confirmButtonText: '確定', 
                    cancelButtonText: '取消',
                }).then(function() {
                    if(db_name == "" || db_name == "announcement")
                    {
                        $.ajax({
                            url: "database/delete_note.php",
                            data: {
                                id:info.event.id,
                                db_name:db_name,
                                db_id:db_id,
                            },
                            type: "POST",
                            success: function (data) {
                                // console.log(data);
                                if(data == 1){
                                    swal({
                                        title:'刪除成功！',
                                        type:'success',                        
                                    }).then(function(){
                                        formreload();
                                    }) 
                                }else{
                                    swal({
                                      title:'刪除失敗！請聯絡網站維護人員',
                                      type:'error',
                                     })
                                }                            
                            }
                        });  
                    }
                    else
                    {
                        swal({
                            title:'此行事曆事件不可刪除',
                            type:'warning',
                        })
                    }
                    
                    }, function(dismiss) {
                      // dismiss的值可以是'cancel', 'overlay',
                      // 'close', 'timer'
                      if (dismiss === 'cancel') {
                            swal({
                                title:'已取消',
                                type:'info',
                            })
                      }
                  })  
            });
          //endregion
          
          //更新事件region
            $("#up_note").click(function(){
//                console.log($("#up_description").val(),$("#up_title").val(),$("#up_start").val(),info.event.id);
                if($("#up_title").val() != ""){
                    swal({
                        title: '確定要修改？',
                        type: 'warning',
                        showCancelButton: true, 
                        confirmButtonText: '確定', 
                        cancelButtonText: '取消',
                    }).then(function() {
                        $.ajax({
                            url: "database/update_note.php",
                            data: {
                                id:info.event.id,
                                title:$("#up_title").val(),
                                description:$("#up_description").val(),
                                start:$("#up_start").val(),
                                end:$("#up_end").val(),
                                db_name:db_name,
                                db_id:db_id,
                                authority_num:authority_num,
                            },
                            type: "POST",
                            success: function (data) {
                                // console.log(data)
                                if(data == 1){
                                    swal({
                                        title:'修改成功！',
                                        type:'success',                        
                                    }).then(function(){
                                        formreload();
                                    }) 
                                }else{
                                    swal({
                                      title:'修改失敗！請聯絡網站維護人員',
                                      type:'error',
                                     })
                                }                            
                            }
                        });  
                        }, function(dismiss) {
                          // dismiss的值可以是'cancel', 'overlay',
                          // 'close', 'timer'
                          if (dismiss === 'cancel') {
                                swal({
                                    title:'已取消',
                                    type:'info',
                                })
                          }
                      })
                }else{
                    swal({
                        title:'請填寫完整！',
                        type:'error',
                    })
                }  
            });
          //endregion
      },       
      events: "database/get_note.php",
    });
    calendar.render();
    
});
//endregion

//是否勾選全天(未啟用)region
//$("#all").change(function(){
//    if(this.checked){
//        $("#end_time").css("display","");
//        $('#start')[0].type ='date';
//        $('#end')[0].type ='date';
//        $("#start").val(document.cookie);
//        $("#end").val(document.cookie);        
//    }else{
//        $("#end_time").css("display","none");
//        $('#start')[0].type ='datetime-local';
//        $("#start").val(document.cookie+"T00:00");
//    }
//});
//endregion

//新增行事曆活動region
$("#add_new_note").click(function(){
//    console.log($("#end").val(),$("#start").val())
    if($("#title").val() != ""){
//        console.log("OK");
        $.ajax({
            url: "database/add_new_note.php",
            data: {
                Title:$("#title").val(),
                Url: "",
                Description:$("#description").val(),
                Start_date:$("#start").val(),
                End_date:$("#end").val(),
                One_user: "",
                Two_user: "",
            },
            type: "POST",
            success: function (data) {
                // console.log(data)
                
                if (data == 1) {
                  swal({
                    title: "新增成功！",
                    type: "success",
                  }).then(function () {
                    location.reload();
                  });
                } else {
                  swal({
                    title: "新增失敗！請聯絡網站維護人員",
                    type: "error",
                  });
                }
              },
              error: function (e) {
                // console.log("錯誤"+e);
                swal({
                    title: "新增失敗！請聯絡網站維護人員",
                    type: "error",
                  });
              },
        });   
    }else{
//        console.log("NO");
        swal({
            title:'請填寫完整！',
            type:'error',
            })
    }
});
//endregion

//重新整理region
function formreload(){
    
    location.reload();
}
//endregion

//取消後清除文字框region
function cancel(){
    $("#title").val("");
    $("#description").val("");
}
//endregion

//24小時制region
  $( function() {    
    $('.form_datetime').datetimepicker({
        language:  'zh-TW',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 1,
        
    });
  } );
//endregion

//選擇時間自動+1小時region
$("#start").on("change",function(){
    var datetimev = $("#start").val();
    var timev = datetimev.split(' ');
    var hourv = timev[1].split(':');
    var houradd = parseInt(hourv[0])+1;
    if(houradd == '1' || houradd == '2' || houradd == '3' || houradd == '4' || houradd == '5' || houradd == '6' || houradd == '7' || houradd == '8' || houradd == '9'){
        $("#end").val(Cookies.get('dateval')+" "+'0'+houradd+':'+hourv[1]);
    }else if(houradd == '24'){
        $("#end").val(Cookies.get('dateval')+' 00:'+hourv[1]);
    }else{
        $("#end").val(Cookies.get('dateval')+" "+houradd+':'+hourv[1]);
    }
    
//    console.log(Cookies.get('dateval'));
//var date = $("#start").data("datetimepicker").getDate(),
//    formatted = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours + ":" + date.getMinutes() + ":" + date.getSeconds();
//    console.log($('#start').data("DateTimePicker").date());
//   console.log(houradd);
});
//endregion