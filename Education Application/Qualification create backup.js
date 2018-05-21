$(document).ready(function () {
    QualificationLevelChangeEvent();
    $("#ccl2002_qualificationlevel").change(function () {
        QualificationLevelChangeEvent();
    });

    //Adding field level help text 
    $("head").append("<link>");
    var css = $("head").children(":last");
    css.attr({
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    });

    $('.description').each(function () {
        var text = $(this).text();
        $(this).hide();
        $(this).next().children(":last-child").after('<span title="' + text + '" class="fa fa-question-circle-o" style="font-size:15px;margin-left:5px;margin-top:2px"></span> ');
    });
    $('.fa').tooltip();
});


function QualificationLevelChangeEvent() {
    if ($("#ccl2002_qualificationlevel").val() == '803280009') {
        $("#ccl2002_otherqualificationlevel").parent().parent().parent().show();
    }
    else {
        $("#ccl2002_otherqualificationlevel").parent().parent().parent().hide();
    }
}

