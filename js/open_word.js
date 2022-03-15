//匯出成word region
$("#export_word").on('click',function(){
    swal({
        title:'請記得為Word檔加上框線！',
        imageUrl: 'image/prompt.png',
        type:'warning',                        
    }).then(function(){
        $("#word_demo").wordExport("個案資料word");
    })
    
});
//endregion
