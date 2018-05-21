
$(document).ready(function () {
    Page_ClientValidate('');
    $("#submitbutton").appendTo($("#submitbutton").parent().parent().next().children());
    $(".form-action-container-left").css("width", "100%");
    $("#btnSave").attr('style', 'float:right;margin-right: -30px;');
    EnableSubmit();

    $('#ccl1007_declarationconfirmation').change(function () {
        $("#ccl1007_declarationconfirmation").removeClass("dirty");
        if ($("#ccl1007_declarationconfirmation").is(":checked") && Page_ClientValidate('')) {
            $("#ccl1007_portalstep10").val('890240000');
        }
        else {
            $("#ccl1007_portalstep10").val('');
        }
        SetNavStatus();
        EnableSubmit();
    });


    $("#submitbutton").click(function () {
        SetCookie('Submitted', 1);
        $("#btnSave").click();
    });

    //initiateSetNavStatus();
    if ($("#ccl1007_declarationconfirmation").is(":checked") && Page_ClientValidate('')) {
        $("#ccl1007_portalstep10").val('890240000');
    } else {
        $("#ccl1007_portalstep10").val('');
    }
    SetNavStatus();


});
function SetCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]); return null;

}
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
function EnableSubmit() {
    var enablesubmit = true;
    for (var i = 1; i < 11; i++) {
        if ($("#ccl1007_portalstep" + i).val() != 890240000)
            enablesubmit = false;
    }
    if (!$("#ccl1007_declarationconfirmation").is(":checked")) {
        enablesubmit = false;
    }
    if (enablesubmit) {
        $("#submitbutton").attr('disabled', false);
    }
    else {
        $("#submitbutton").attr('disabled', true);
    }
}　