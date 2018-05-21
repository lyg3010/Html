$(document).ready(function () {
    $("#ccl1007_sharemedicaldetails_label").parent().attr('class', 'info required');
    $("#ccl1007_medicalconditiondetails_label").parent().attr('class', 'info required');

    // $("#ccl1007_medicalconditionid_label").next().next().css("float","right").css("margin-top","-23px").css("margin-right","284px");
    $("#ccl1007_medicalconditionid_label").css("float","none");
    
    //move No known disability to first
    var firstoption = $("#ccl1007_medicalconditionid option[value='bd230a15-5345-e811-8120-70106faa6a31']");
    $("#ccl1007_medicalconditionid option[value='bd230a15-5345-e811-8120-70106faa6a31']").remove();
    $("#ccl1007_medicalconditionid").children().eq(0).after(firstoption);

    if ($("#ccl1007_medicalconditionid").val() == "bd230a15-5345-e811-8120-70106faa6a31" || $("#ccl1007_medicalconditionid").val() == "") {
        $("#ccl1007_medicalconditiondetails_label").parent().parent().hide();
    }
    else
    {
        CreateValidatorNew("ccl1007_medicalconditiondetails","Please provide Medical Condition Details");
    }

    $('#ccl1007_medicalconditionid').on('change', function () {
        if ($("#ccl1007_medicalconditionid").val() == "bd230a15-5345-e811-8120-70106faa6a31" || $("#ccl1007_medicalconditionid").val() == "") {
            $("#ccl1007_medicalconditiondetails_label").parent().parent().hide();
            RemoveValidator("ccl1007_medicalconditiondetails");
        }
        else {
            $("#ccl1007_medicalconditiondetails_label").parent().parent().show();
            CreateValidatorNew("ccl1007_medicalconditiondetails","Please provide Medical Condition Details");
        }
    });
});

function CreateValidatorNew(fieldid, msg) {
    if (window.jQuery) {
        (function ($) {
            if (typeof (Page_Validators) === 'undefined') return;
            for (i = 0; i < Page_Validators.length; i++) {
                if (Page_Validators[i].id == fieldid+ "Validator")
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