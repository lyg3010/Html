$(document).ready(function () {
    CreateStartDateValidatorNew("ccl1008_date","Timesheet Line Date should after the Start Date on the Timesheet.");
});

function CreateStartDateValidatorNew(fieldid, msg) {
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
                if (moment($("#ccl1008_date").val()) < moment($("#ccl1008_startdate", window.parent.document).val())) 
                { return false; } 
                else 
                { return true; }
            }
            Page_Validators.push(newValidator);

        }(window.jQuery));
    }
}
