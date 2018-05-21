if ($("#MessageLabel").html() == "Submission completed successfully.") {
    //$(".form-close", parent.document).click();
    sessionStorage.setItem(getUrlParam("id"), "true");
    top.location.href=top.location.href;
    $("button.close", parent.parent.document).click();
    $("#CrimsonIframe", parent.document).hide();
    $("#CrimsonLoading", parent.document).show();
    
}
$(document).ready(function () {
    setTimeout(function () {
        $("#CrimsonIframe", parent.document).show();
        $("#CrimsonLoading", parent.document).hide();
    }, 500);

    if ($("#MessageLabel").html() == "Submission completed successfully.") {
        //$(".form-close", parent.document).click();
        sessionStorage.setItem(getUrlParam("id"), "true");
        top.location.href=top.location.href;
        //$("button.close", parent.parent.document).click();
        $("#CrimsonIframe", parent.document).hide();
        $("#CrimsonLoading", parent.document).show();
        
    }

});
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}