$(document).ready(function () {
    $.get("database/get_google_sheet_links.php", function(data) {
        var links = JSON.parse(data);
        $("#google_sheet_frame").attr("src", links.sync_link);
        $("#google_sheet_url").attr("href", links.share_link);
    });
    $.ajaxSettings.async = true;
});
