$(document).ready(function () {
    if ($("#MessageLabel").html() == "Submission completed successfully.") {
        $("#MessageLabel").html("Thank you for submitting.");
    }
    $("#MainContainer").show();

});