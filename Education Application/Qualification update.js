$(document).ready(function () {

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


    ChangeType();
    $('#ccl1007_typeofqualification').on('change', function () {
        ChangeType();
    });


    if ($('input[name="ctl00$ContentContainer$MainContent$EntityFormControl$EntityFormControl_EntityFormView$ccl1007_cannotfindinstitution"]:checked').val() == 0) {
        $("#ccl1007_institutionother_label").parent().parent().hide();
    }
    $("#ccl1007_cannotfindinstitution_0,#ccl1007_cannotfindinstitution_1").click(function () {
        if ($(this).val() == 0) {
            $("#ccl1007_institutionother_label").parent().parent().hide();
        }
        if ($(this).val() == 1) {
            $("#ccl1007_institutionother_label").parent().parent().show();
        }
    });

    //move Other to last
    var lastoption = $("#ccl1007_qualificationid option[value='b9c22834-7445-e811-8120-70106faa6a31']");
    $("#ccl1007_qualificationid option[value='b9c22834-7445-e811-8120-70106faa6a31']").remove();
    $("#ccl1007_qualificationid").append(lastoption);

    if ($("#ccl1007_qualificationid").val() != "b9c22834-7445-e811-8120-70106faa6a31") {
        $("#ccl1007_qualificationother_label").parent().parent().hide();
    }

    $('#ccl1007_qualificationid').on('change', function () {
        if ($("#ccl1007_qualificationid").val() != "b9c22834-7445-e811-8120-70106faa6a31") {
            $("#ccl1007_qualificationother_label").parent().parent().hide();
        }
        else {
            $("#ccl1007_qualificationother_label").parent().parent().show();
        }
    });

    //move Other to last
    var lastoption = $("#ccl1007_subjectid option[value='f3dd5384-7445-e811-8120-70106faa6a31']");
    $("#ccl1007_subjectid option[value='f3dd5384-7445-e811-8120-70106faa6a31']").remove();
    $("#ccl1007_subjectid").append(lastoption);

    if ($("#ccl1007_subjectid").val() != "f3dd5384-7445-e811-8120-70106faa6a31") {
        $("#ccl1007_subjectother_label").parent().parent().hide();
    }

    $('#ccl1007_subjectid').on('change', function () {
        if ($("#ccl1007_subjectid").val() != "f3dd5384-7445-e811-8120-70106faa6a31") {
            $("#ccl1007_subjectother_label").parent().parent().hide();
        }
        else {
            $("#ccl1007_subjectother_label").parent().parent().show();
        }
    });

    $("#ccl1007_completedqualification_0,#ccl1007_completedqualification_1").click(function () {
        if ($(this).val() == 0) {
            $("#ccl1007_gradepointaverage_label").parent().parent().hide();
            $("#ccl1007_expectedgradepointaverage_label").parent().parent().show();
            $("#ccl1007_ukdegreeclassid_label").parent().parent().hide();
            $("#ccl1007_expectedukdegreeclassid_label").parent().parent().show();
            $("#ccl2002_dateachieved_label").parent().parent().hide();
            $("#ccl2002_dateachieved_label").parent().removeAttr('class', 'info required');
            RemoveValidator("ccl2002_dateachieved");
            $("#ccl1007_expectedawarddate_label").parent().parent().show();
            $("#ccl1007_expectedawarddate_label").parent().attr('class', 'info required');
            CreateValidatorNew("ccl1007_expectedawarddate", "Expected Award Date is required.");
        }
        if ($(this).val() == 1) {
            $("#ccl1007_gradepointaverage_label").parent().parent().show();
            $("#ccl1007_expectedgradepointaverage_label").parent().parent().hide();
            $("#ccl1007_ukdegreeclassid_label").parent().parent().show();
            $("#ccl1007_expectedukdegreeclassid_label").parent().parent().hide();
            $("#ccl2002_dateachieved_label").parent().parent().show();
            $("#ccl2002_dateachieved_label").parent().attr('class', 'info required');
            CreateValidatorNew("ccl2002_dateachieved", "Qualification Award Date is required.");
            $("#ccl1007_expectedawarddate_label").parent().parent().hide();
            $("#ccl1007_expectedawarddate_label").parent().removeAttr('class', 'info required');
            RemoveValidator("ccl1007_expectedawarddate");
        }
    });

});

function CreateValidatorNew(fieldid, msg) {
    if (window.jQuery) {
        (function ($) {
            if (typeof (Page_Validators) === 'undefined') return;
            for (i = 0; i < Page_Validators.length; i++) {
                if (Page_Validators[i].id == fieldid + "Validator")
                    return;
            }
            var newValidator = document.createElement('span');
            newValidator.style.display = "none";
            newValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
            newValidator.initialvalue = "";
            newValidator.id = fieldid + "Validator";
            newValidator.controltovalidate = fieldid;
            newValidator.errormessage = msg;
            newValidator.evaluationfunction = function () {
                var value = $("#" + fieldid).val();
                if (value === null || value === "") { return false; } else { return true; }
            }
            Page_Validators.push(newValidator);

        }(window.jQuery));
    }
}
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

function RemoveValidator(fieldid) {
    if (window.jQuery) {
        (function ($) {
            if (typeof (Page_Validators) == 'undefined') return;
            var removeid = fieldid + "Validator"
            for (i = 0; i < Page_Validators.length; i++) {
                if (Page_Validators[i].id == removeid)
                    Page_Validators.remove(i);
            }
        }(window.jQuery));
    }
}


function ChangeType() {
    //academic
    if ($("#ccl1007_typeofqualification").val() == "890240000") {

        $("#ccl1007_completedqualification_label").parent().parent().show();
        $("#ccl1007_countryofstudyid_label").parent().parent().show();
        $("#ccl1007_institutionid_label").parent().parent().show();
        $("#ccl1007_cannotfindinstitution_label").parent().parent().show();
        // $("#ccl1007_institutionother_label").parent().parent().show();
        $("#ccl1007_qualificationid_label").parent().parent().show();
        // $("#ccl1007_qualificationother_label").parent().parent().show();
        $("#ccl1007_subjectid_label").parent().parent().show();
        // $("#ccl1007_subjectother_label").parent().parent().show();
        $("#ccl1007_startdate_label").parent().parent().show();
        $("#ccl1007_enddate_label").parent().parent().show();
        $("#ccl1007_gradepointaverage_label").parent().parent().show();
        $("#ccl1007_expectedgradepointaverage_label").parent().parent().show();
        $("#ccl1007_ukdegreeclassid_label").parent().parent().show();
        $("#ccl1007_expectedukdegreeclassid_label").parent().parent().show();
        $("#ccl1007_languageinstruction_label").parent().parent().show();
        $("#ccl2002_dateachieved_label").parent().parent().show();
        $("#ccl2002_dateachieved_label").html("Qualification Award Date");
        $("#ccl1007_expectedawarddate_label").parent().parent().show();
        $("#ccl2002_subjectqualificationname_label").parent().parent().hide();
        $("#ccl1007_awardingbody_label").parent().parent().hide();

        if ($('input[name="ctl00$ContentContainer$MainContent$EntityFormControl$EntityFormControl_EntityFormView$ccl1007_cannotfindinstitution"]:checked').val() == 0) {
            $("#ccl1007_institutionother_label").parent().parent().hide();
        }
        else {
            $("#ccl1007_institutionother_label").parent().parent().show();
        }

        if ($("#ccl1007_qualificationid").val() != "b9c22834-7445-e811-8120-70106faa6a31") {
            $("#ccl1007_qualificationother_label").parent().parent().hide();
        }
        else {
            $("#ccl1007_qualificationother_label").parent().parent().show();
        }

        if ($("#ccl1007_subjectid").val() != "f3dd5384-7445-e811-8120-70106faa6a31") {
            $("#ccl1007_subjectother_label").parent().parent().hide();
        }
        else {
            $("#ccl1007_subjectother_label").parent().parent().show();
        }

        if ($('input[name="ctl00$ContentContainer$MainContent$EntityFormControl$EntityFormControl_EntityFormView$ccl1007_completedqualification"]:checked').val() == 0) {
            $("#ccl1007_gradepointaverage_label").parent().parent().hide();
            $("#ccl1007_expectedgradepointaverage_label").parent().parent().show();
            $("#ccl1007_ukdegreeclassid_label").parent().parent().hide();
            $("#ccl1007_expectedukdegreeclassid_label").parent().parent().show();
            $("#ccl2002_dateachieved_label").parent().parent().hide();
            $("#ccl2002_dateachieved_label").parent().removeAttr('class', 'info required');
            RemoveValidator("ccl2002_dateachieved");
            $("#ccl1007_expectedawarddate_label").parent().parent().show();
            $("#ccl1007_expectedawarddate_label").parent().attr('class', 'info required');
            CreateValidatorNew("ccl1007_expectedawarddate", "Expected Award Date is required.");
        }
        else {
            $("#ccl1007_gradepointaverage_label").parent().parent().show();
            $("#ccl1007_expectedgradepointaverage_label").parent().parent().hide();
            $("#ccl1007_ukdegreeclassid_label").parent().parent().show();
            $("#ccl1007_expectedukdegreeclassid_label").parent().parent().hide();
            $("#ccl2002_dateachieved_label").parent().parent().show();
            $("#ccl2002_dateachieved_label").parent().attr('class', 'info required');
            CreateValidatorNew("ccl2002_dateachieved", "Qualification Award Date is required.");
            $("#ccl1007_expectedawarddate_label").parent().parent().hide();
            $("#ccl1007_expectedawarddate_label").parent().removeAttr('class', 'info required');
            RemoveValidator("ccl1007_expectedawarddate");
        }  

        $("#ccl1007_completedqualification_label").parent().attr('class', 'info required');
        $("#ccl1007_countryofstudyid_label").parent().attr('class', 'info required');
        $("#ccl1007_institutionid_label").parent().attr('class', 'info required');
        $("#ccl1007_startdate_label").parent().attr('class', 'info required');
        $("#ccl1007_enddate_label").parent().attr('class', 'info required');
        $("#ccl1007_languageinstruction_label").parent().attr('class', 'info required');
        // $("#ccl2002_dateachieved_label").parent().attr('class', 'info required');
        // $("#ccl1007_expectedawarddate_label").parent().attr('class', 'info required');

        // CreateValidatorNew("ccl1007_completedqualification", "Completed Qualification is required.");
        CreateValidatorNew("ccl1007_countryofstudyid", "Country of Study is required.");
        CreateValidatorNew("ccl1007_institutionid", "University / College / Institution is required.");
        CreateValidatorNew("ccl1007_startdate", "Dates of attendance: From is required.");
        CreateValidatorNew("ccl1007_enddate", "Dates of attendance: To is required.");
        CreateValidatorNew("ccl1007_languageinstruction", "What was the language of instruction? is required.");
        // CreateValidatorNew("ccl2002_dateachieved", "Qualification Award Date is required.");
        // CreateValidatorNew("ccl1007_expectedawarddate", "Expected Award Date is required.");
    }
    //Professional
    else if ($("#ccl1007_typeofqualification").val() == "890240001") {
        $("#ccl1007_completedqualification_label").parent().parent().hide();
        $("#ccl1007_countryofstudyid_label").parent().parent().hide();
        $("#ccl1007_institutionid_label").parent().parent().hide();
        $("#ccl1007_cannotfindinstitution_label").parent().parent().hide();
        $("#ccl1007_institutionother_label").parent().parent().hide();
        $("#ccl1007_qualificationid_label").parent().parent().hide();
        $("#ccl1007_qualificationother_label").parent().parent().hide();
        $("#ccl1007_subjectid_label").parent().parent().hide();
        $("#ccl1007_subjectother_label").parent().parent().hide();
        $("#ccl1007_startdate_label").parent().parent().hide();
        $("#ccl1007_enddate_label").parent().parent().hide();
        $("#ccl1007_gradepointaverage_label").parent().parent().hide();
        $("#ccl1007_expectedgradepointaverage_label").parent().parent().hide();
        $("#ccl1007_ukdegreeclassid_label").parent().parent().hide();
        $("#ccl1007_expectedukdegreeclassid_label").parent().parent().hide();
        $("#ccl1007_languageinstruction_label").parent().parent().hide();
        $("#ccl2002_dateachieved_label").parent().parent().show();
        $("#ccl2002_dateachieved_label").html("Date Awarded");
        $("#DateFormatValidatorccl2002_dateachieved").html("");
        $("#ccl1007_expectedawarddate_label").parent().parent().hide();
        $("#ccl2002_subjectqualificationname_label").parent().parent().show();
        $("#ccl1007_awardingbody_label").parent().parent().show();

        $("#ccl1007_completedqualification_label").parent().removeAttr('class', 'info required');
        $("#ccl1007_countryofstudyid_label").parent().removeAttr('class', 'info required');
        $("#ccl1007_institutionid_label").parent().removeAttr('class', 'info required');
        $("#ccl1007_startdate_label").parent().removeAttr('class', 'info required');
        $("#ccl1007_enddate_label").parent().removeAttr('class', 'info required');
        $("#ccl1007_languageinstruction_label").parent().removeAttr('class', 'info required');
        $("#ccl2002_dateachieved_label").parent().removeAttr('class', 'info required');
        $("#ccl1007_expectedawarddate_label").parent().removeAttr('class', 'info required');

        RemoveValidator("ccl1007_completedqualification");
        RemoveValidator("ccl1007_countryofstudyid");
        RemoveValidator("ccl1007_institutionid");
        RemoveValidator("ccl1007_startdate");
        RemoveValidator("ccl1007_enddate");
        RemoveValidator("ccl1007_languageinstruction");
        RemoveValidator("ccl2002_dateachieved");
        RemoveValidator("ccl1007_expectedawarddate");
    }
    else {
        $("#ccl1007_completedqualification_label").parent().parent().hide();
        $("#ccl1007_countryofstudyid_label").parent().parent().hide();
        $("#ccl1007_institutionid_label").parent().parent().hide();
        $("#ccl1007_cannotfindinstitution_label").parent().parent().hide();
        $("#ccl1007_institutionother_label").parent().parent().hide();
        $("#ccl1007_qualificationid_label").parent().parent().hide();
        $("#ccl1007_qualificationother_label").parent().parent().hide();
        $("#ccl1007_subjectid_label").parent().parent().hide();
        $("#ccl1007_subjectother_label").parent().parent().hide();
        $("#ccl1007_startdate_label").parent().parent().hide();
        $("#ccl1007_enddate_label").parent().parent().hide();
        $("#ccl1007_gradepointaverage_label").parent().parent().hide();
        $("#ccl1007_expectedgradepointaverage_label").parent().parent().hide();
        $("#ccl1007_ukdegreeclassid_label").parent().parent().hide();
        $("#ccl1007_expectedukdegreeclassid_label").parent().parent().hide();
        $("#ccl1007_languageinstruction_label").parent().parent().hide();
        $("#ccl2002_dateachieved_label").parent().parent().hide();
        $("#ccl1007_expectedawarddate_label").parent().parent().hide();
        $("#ccl2002_subjectqualificationname_label").parent().parent().hide();
        $("#ccl1007_awardingbody_label").parent().parent().hide();

        $("#ccl1007_completedqualification_label").parent().removeAttr('class', 'info required');
        $("#ccl1007_countryofstudyid_label").parent().removeAttr('class', 'info required');
        $("#ccl1007_institutionid_label").parent().removeAttr('class', 'info required');
        $("#ccl1007_startdate_label").parent().removeAttr('class', 'info required');
        $("#ccl1007_enddate_label").parent().removeAttr('class', 'info required');
        $("#ccl1007_languageinstruction_label").parent().removeAttr('class', 'info required');
        $("#ccl2002_dateachieved_label").parent().removeAttr('class', 'info required');
        $("#ccl1007_expectedawarddate_label").parent().removeAttr('class', 'info required');

        RemoveValidator("ccl1007_completedqualification");
        RemoveValidator("ccl1007_countryofstudyid");
        RemoveValidator("ccl1007_institutionid");
        RemoveValidator("ccl1007_startdate");
        RemoveValidator("ccl1007_enddate");
        RemoveValidator("ccl1007_languageinstruction");
        RemoveValidator("ccl2002_dateachieved");
        RemoveValidator("ccl1007_expectedawarddate");
    }

}
