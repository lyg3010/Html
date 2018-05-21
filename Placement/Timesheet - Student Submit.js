$(document).ready(function () {
    setTimeout(function () {
        if ($("#MessageLabel").html() == "Submission completed successfully.") {
            $("#UpdateButton", parent.document).click();
        }
    }, 500);
    $("#UpdateButton").click();
});
