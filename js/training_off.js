//抓所有曾入住紀錄region
$(document).ready(function () {
  $.ajax({
    url: "database/find_tra_off.php",
    type: "POST",
    dataType: "JSON",
    success: function (data) {
      var cssstring = "";
      //            console.log(data)

      $.each(data, function (index, value) {
        cssstring +=
          '<tr name="num1[]">' +
          "<td>" +
          value.Name +
          "</td>" +
          '<td><a href="training_off_detail.php?name=' +
          value.Name +
          "&tra_id=" +
          value.Id +
          '">點擊進入</a></td>' +
          "</tr>";
        console.log(value.Id);
      });

      $("#tra_off_all").append(cssstring);
    },
    error: function (e) {
      console.log(e);
    },
  });
});
//endregion
