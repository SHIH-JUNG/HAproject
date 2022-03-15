$('.bmi').on('keyup change', function () {
    var BMI = $("#weight").val() / (($("#height").val()*$("#height").val())/10000);
//    console.log(BMI.toFixed(1))
    $("#BMI").html(BMI.toFixed(1))
});

//$('.mintime').on('keyup change', function () {
//    var minweek = $("#minute").val() / (($("#height").val()*$("#height").val())/10000);
////    console.log(BMI.toFixed(1))
//    $("#BMI").html(BMI.toFixed(1))
//});