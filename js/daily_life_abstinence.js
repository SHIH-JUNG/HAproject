//抓所有詢戒日常生活總表region
$.ajax({
    url: "database/find_dailylife_a.php",
    type: "POST",
    dataType: "JSON",
    async: false,//啟用同步請求
    success: function (data) {
        var cssString = "";
        for (var index in data.face_id) {
//            console.log(data.id[index])
            cssString += 
                    '<tr>' +
                        '<td>' +data.face_id[index]+ '</td>' +
                        '<td>' + data.face_date[index] + '</td>' +
                        '<td>' + data.name[index] + '</td>' +
                        '<td>' + data.gender[index] + '</td>' +
                        '<td>' + data.age[index] + '</td>' +
                        '<td>' + data.address[index] + '</td>' +
                        '<td>' + data.use_addition[index] + '</td>' +
                        '<td>' + data.addition[index] + '</td>' +
                        '<td>' + data.family[index] + '</td>' +
                        '<td>' + data.assign[index] + '</td>' +
                        '<td><a href="daily_all_abstinence.php?face_id='+data.face_id[index]+'&name='+data.name[index]+'&date='+data.face_date[index]+'&addition='+data.addition[index]+'&family='+data.family[index]+'"><button>進入</button></a></td>' +
                        '<td><button class="delete" rel="'+data.face_id[index]+'" id="'+data.id[index]+'">刪除</button></td>' +
                    '</tr>'
//            $("#face_id").append('<option value="'+data.date_RE[index]+data.face_id[index]+'">'+data.date_RE[index]+data.face_id[index]+'</option>');
        } 
        $("#daily_a").html(cssString);
//            //點擊table tr 進入詳細頁面
            $(".delete").on("click",function () {
//                console.log($(this).attr("rel"));
                var id =$(this).attr("id");
                var face_id =$(this).attr("rel");
                swal({
                    title: '確認刪除此紀錄？',
                    text: "刪除無法復原",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    allowOutsideClick: false,//不可點背景關閉
                    confirmButtonText: '確認！',
                    cancelButtonText: '取消'
                }).then(function (isConfirm) {
                    if (isConfirm) {
                        $.ajax({
                            type: 'POST',
                            url: 'database/delete_daily_life_a.php',
                            async: false,
                            data: {
                                id: id,
                                face_id:face_id
                            },
                            success: function (data) {
//                                console.log(data)
                                if (data == 1) {
                                    swal({
                                        type: 'success',
                                        title: '刪除成功!',
                                        allowOutsideClick: false //不可點背景關閉
                                    }).then(function () {
                                        location.reload();
                                    })
                                } else {
                                    swal({
                                        type: 'error',
                                        title: '刪除失敗!',
                                        allowOutsideClick: false //不可點背景關閉
                                    })
                                }
                            },
                            error: function (e) {
                                    swal({
                                        type: 'error',
                                        title: '伺服器錯誤，無法載入!',
                                        allowOutsideClick: false //不可點背景關閉
                                    })
                            }
                        });
                    }
                })            
            });
    },
    error: function (e) {
            console.log(e);
     }
});
//endregion

//table設定region
var $table = $('#tab_daily_a').DataTable({
    "ordering": false,
    "info": true,
    "paging": true,
//    "className":"cell-border",
    "lengthChange": false,
    "pageLength": 10,
    "pagingType": "simple_numbers",
    "searching": true,
    "dom":
        "<'col-sm-12'tr>"+
        "<'col-sm-6'<'text-left'i>><'col-sm-6'<'text-right'p>>",
//        "<'col-sm-12'<'text-left'B>>",
    language: {

        "sZeroRecords": "没有匹配结果",
        "sInfo": "顯示 _START_ 到 _END_ 筆資料，總共有 _TOTAL_ 筆資料",
        "sInfoEmpty": "目前共有 0 筆紀錄",
        "sInfoFiltered": "(由 _MAX_ 筆資料结果過濾)",
//        "fnInfoCallback": function (oSettings, iStart, iEnd, iMax, iTotal, sPre) {
//            $("#count_people").text("人次："+iEnd);
//            return sPre
//        },
        paginate: {
            previous: '‹上一頁',
            next:     '下一頁›'
        },
        aria: {
            paginate: {
                previous: 'Previous',
                next:     'Next'
            }
        }
    },
//    buttons: [
//        {
//            extend: 'excelHtml5',
//            title: '沐恩會談總表',
//            text:'匯出Excel'
//        },
//    ]
});
//endregion