$(document).ready(function () {
    $("#btnNext").appendTo($("#btnNext").parent().parent().next().children());
    $(".form-action-container-left").css("width", "100%");
    $("#btnSave").attr('style', 'float:right;margin-right: -30px;');

    $("#ccl1007_criminalconvictions_label").parent().attr('class', 'info required');

    $("#ccl1007_title").append("<option value='Other'>Other</option>");
    $("#ccl1007_titleother_label").parent().parent().hide();
    $('#ccl1007_title').change(function () {
        if ($(this).val() == 'Other') {
            $("#ccl1007_titleother_label").parent().parent().show();
        }
        else {
            $("#ccl1007_titleother_label").parent().parent().hide();
            $("#ccl1007_titleother").val("");
        }
    })

    {% assign Contact_id = user.id %}
    {% if Contact_id %}
    {% assign ContactRrd = entities.contact[Contact_id] %}
    // if ($("#ccl1007_firstname").val() == "")
    //     $("#ccl1007_firstname").val("{{ContactRrd.firstname}}").addClass("dirty");
    // if ($("#ccl1007_middlename").val() == "")
    //     $("#ccl1007_middlename").val("{{ContactRrd.middlename}}").addClass("dirty");
    // if ($("#ccl1007_lastname").val() == "")
    //     $("#ccl1007_lastname").val("{{ContactRrd.lastname}}").addClass("dirty");
    // if ($("#ccl1007_title").val() == "")
    //     $("#ccl1007_title").val("{{ContactRrd.ccl1000_title.value}}").addClass("dirty");
    // $("#ccl1007_dateofbirth").next().data("DateTimePicker").date(moment("{{ContactRrd.birthdate}}"));
    if ($("#ccl1007_gender").val() == "")
        $("#ccl1007_gender").val("{{ContactRrd.gendercode.value| plus: 99999999}}").addClass("dirty");
    {% endif %}

    $('#ccl1007_westernname').attr("readonly", "readonly");
    var westernname = "";
    if ($("#ccl1007_firstname").val() != "") {
        westernname += $("#ccl1007_firstname").val();
        westernname += " ";
    }
    if ($("#ccl1007_middlename").val() != "") {
        westernname += $("#ccl1007_middlename").val();
        westernname += " ";
    }
    if ($("#ccl1007_lastname").val() != "") {
        westernname += $("#ccl1007_lastname").val();
    }
    $("#ccl1007_westernname").val(westernname);
    $('#ccl1007_firstname,#ccl1007_middlename,#ccl1007_lastname').change(function () {
        var westernname = "";
        if ($("#ccl1007_firstname").val() != "") {
            westernname += $("#ccl1007_firstname").val();
            westernname += " ";
        }
        if ($("#ccl1007_middlename").val() != "") {
            westernname += $("#ccl1007_middlename").val();
            westernname += " ";
        }
        if ($("#ccl1007_lastname").val() != "") {
            westernname += $("#ccl1007_lastname").val();
        }
        $("#ccl1007_westernname").val(westernname);
    })

    $("#ccl1007_criminalconvictions").parent().after("<div id='ConvictionInfo' style='display: none;'>Durham to provide Criminal Convictions Content here.</div>");
    if ($('input[name="ctl00$ContentContainer$EntityFormControl_fb54de296e94e711810370106faaf8c1$EntityFormControl_fb54de296e94e711810370106faaf8c1_EntityFormView$ccl1007_criminalconvictions"]:checked').val() == 1) { $("#ConvictionInfo").show(); }
    $("#ccl1007_criminalconvictions_0,#ccl1007_criminalconvictions_1").click(function () {
        if ($(this).val() == 0) {
            $("#ConvictionInfo").hide();
        }
        if ($(this).val() == 1) {
            $("#ConvictionInfo").show();
        }
    });

    if ($('input[name="ctl00$ContentContainer$EntityFormControl_fb54de296e94e711810370106faaf8c1$EntityFormControl_fb54de296e94e711810370106faaf8c1_EntityFormView$ccl1007_authoriseonbehalf"]:checked').val() == 1) {
        $("#ccl1007_nameofauthorisedperson").parent().parent().show();
        $("#ccl1007_authorisedpersonrelationship").parent().parent().show();
        $("#ccl1007_authorisedpersonemail").parent().parent().show();
    }
    else {
        $("#ccl1007_nameofauthorisedperson").parent().parent().hide();
        $("#ccl1007_authorisedpersonrelationship").parent().parent().hide();
        $("#ccl1007_authorisedpersonemail").parent().parent().hide();
    }
    $("#ccl1007_authoriseonbehalf_0,#ccl1007_authoriseonbehalf_1").click(function () {
        if ($(this).val() == 0) {
            $("#ccl1007_nameofauthorisedperson").parent().parent().hide();
            $("#ccl1007_authorisedpersonrelationship").parent().parent().hide();
            $("#ccl1007_authorisedpersonemail").parent().parent().hide();
            $("#ccl1007_nameofauthorisedperson").val("");
            $("#ccl1007_authorisedpersonrelationship").val("");
            $("#ccl1007_authorisedpersonemail").val("");
        }
        if ($(this).val() == 1) {
            $("#ccl1007_nameofauthorisedperson").parent().parent().show();
            $("#ccl1007_authorisedpersonrelationship").parent().parent().show();
            $("#ccl1007_authorisedpersonemail").parent().parent().show();
        }
    });

    //   var newValidator = document.createElement('span');
    //   newValidator.style.display = "none";
    //   newValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
    //   newValidator.initialvalue = "";
    //   newValidator.id = "ccl1007_criminalconvictions_1" + "Validator";
    //   newValidator.controltovalidate = "ccl1007_criminalconvictions_1";
    //   newValidator.errormessage = "ccl1007_criminalconvictions is a required field.";
    //   newValidator.evaluationfunction = function () {
    //       var value = $("#ccl1007_criminalconvictions_1").prop("checked");
    //       if (value === null || value === false) { return false; } else { return true; }
    //   }
    //   Page_Validators.push(newValidator);
    //   $("#ccl1007_criminalconvictions_label").parent().attr('class', 'info required');

    if ($('input[name="ctl00$ContentContainer$EntityFormControl_fb54de296e94e711810370106faaf8c1$EntityFormControl_fb54de296e94e711810370106faaf8c1_EntityFormView$ccl1007_applyingviaagent"]:checked').val() == 0) {
        $("#ccl1000_agencyinternational_label").parent().parent().hide();
        $("#ccl1000_agencyinternational_label").parent().removeAttr('class', 'info required');
        RemoveValidator("ccl1000_agencyinternational");
        $("#ccl1000_agencyinternational").val("");
        $("#ccl1000_agencyinternational_name").val("");
        $("#ccl1000_agencyinternational_entityname").val("");            

        $("#ccl1007_agentaddressline1_label").parent().parent().hide();
        $("#ccl1007_agentaddressline1_label").parent().removeAttr('class', 'info required');
        RemoveValidator("ccl1007_agentaddressline1");
        $("#ccl1007_agentaddressline1").val("");

        $("#ccl1007_agentaddressline2_label").parent().parent().hide();
        $("#ccl1007_agentaddressline2_label").parent().removeAttr('class', 'info required');
        RemoveValidator("ccl1007_agentaddressline2");
        $("#ccl1007_agentaddressline2").val("");

        $("#ccl1007_agentaddressline3_label").parent().parent().hide();
        $("#ccl1007_agentaddressline3_label").parent().removeAttr('class', 'info required');
        RemoveValidator("ccl1007_agentaddressline3");
        $("#ccl1007_agentaddressline3").val("");

        $("#ccl1007_agentcitystate_label").parent().parent().hide();
        $("#ccl1007_agentcitystate_label").parent().removeAttr('class', 'info required');
        RemoveValidator("ccl1007_agentcitystate");
        $("#ccl1007_agentcitystate").val("");

        $("#ccl1007_agentpostcodezip_label").parent().parent().hide();
        $("#ccl1007_agentpostcodezip_label").parent().removeAttr('class', 'info required');
        RemoveValidator("ccl1007_agentpostcodezip");
        $("#ccl1007_agentpostcodezip").val("");

        $("#ccl1007_agentcountry_label").parent().parent().hide();
        $("#ccl1007_agentcountry_label").parent().removeAttr('class', 'info required');
        RemoveValidator("ccl1007_agentcountry");
        $("#ccl1007_agentcountry").val("");

        $("#ccl1007_agentemailaddress_label").parent().parent().hide();
        $("#ccl1007_agentemailaddress_label").parent().removeAttr('class', 'info required');
        RemoveValidator("ccl1007_agentemailaddress");
        $("#ccl1007_agentemailaddress").val("");
    }
    else {
        $("#ccl1000_agencyinternational_label").parent().parent().show();
        $("#ccl1000_agencyinternational_label").parent().attr('class', 'info required');
        CreateValidatorNew("ccl1000_agencyinternational", "ccl1000_agencyinternational is required.");
        $("#ccl1007_agentaddressline1_label").parent().parent().show();
        $("#ccl1007_agentaddressline1_label").parent().attr('class', 'info required');
        CreateValidatorNew("ccl1007_agentaddressline1", "ccl1007_agentaddressline1 is required.");
        $("#ccl1007_agentaddressline2_label").parent().parent().show();
        $("#ccl1007_agentaddressline2_label").parent().attr('class', 'info required');
        CreateValidatorNew("ccl1007_agentaddressline2", "ccl1007_agentaddressline2 is required.");
        $("#ccl1007_agentaddressline3_label").parent().parent().show();
        $("#ccl1007_agentaddressline3_label").parent().attr('class', 'info required');
        CreateValidatorNew("ccl1007_agentaddressline3", "ccl1007_agentaddressline3 is required.");
        $("#ccl1007_agentcitystate_label").parent().parent().show();
        $("#ccl1007_agentcitystate_label").parent().attr('class', 'info required');
        CreateValidatorNew("ccl1007_agentcitystate", "ccl1007_agentcitystate is required.");
        $("#ccl1007_agentpostcodezip_label").parent().parent().show();
        $("#ccl1007_agentpostcodezip_label").parent().attr('class', 'info required');
        CreateValidatorNew("ccl1007_agentpostcodezip", "ccl1007_agentpostcodezip is required.");
        $("#ccl1007_agentcountry_label").parent().parent().show();
        $("#ccl1007_agentcountry_label").parent().attr('class', 'info required');
        CreateValidatorNew("ccl1007_agentcountry", "ccl1007_agentcountry is required.");
        $("#ccl1007_agentemailaddress_label").parent().parent().show();
        $("#ccl1007_agentemailaddress_label").parent().attr('class', 'info required');
        CreateValidatorNew("ccl1007_agentemailaddress", "ccl1007_agentemailaddress is required.");
    }
    $("#ccl1007_applyingviaagent_0,#ccl1007_applyingviaagent_1").click(function () {
        if ($(this).val() == 0) {
            $("#ccl1000_agencyinternational_label").parent().parent().hide();
            $("#ccl1000_agencyinternational_label").parent().removeAttr('class', 'info required');
            RemoveValidator("ccl1000_agencyinternational");
            $("#ccl1000_agencyinternational").val("");
            $("#ccl1000_agencyinternational_name").val("");
            $("#ccl1000_agencyinternational_entityname").val("");            

            $("#ccl1007_agentaddressline1_label").parent().parent().hide();
            $("#ccl1007_agentaddressline1_label").parent().removeAttr('class', 'info required');
            RemoveValidator("ccl1007_agentaddressline1");
            $("#ccl1007_agentaddressline1").val("");

            $("#ccl1007_agentaddressline2_label").parent().parent().hide();
            $("#ccl1007_agentaddressline2_label").parent().removeAttr('class', 'info required');
            RemoveValidator("ccl1007_agentaddressline2");
            $("#ccl1007_agentaddressline2").val("");

            $("#ccl1007_agentaddressline3_label").parent().parent().hide();
            $("#ccl1007_agentaddressline3_label").parent().removeAttr('class', 'info required');
            RemoveValidator("ccl1007_agentaddressline3");
            $("#ccl1007_agentaddressline3").val("");

            $("#ccl1007_agentcitystate_label").parent().parent().hide();
            $("#ccl1007_agentcitystate_label").parent().removeAttr('class', 'info required');
            RemoveValidator("ccl1007_agentcitystate");
            $("#ccl1007_agentcitystate").val("");

            $("#ccl1007_agentpostcodezip_label").parent().parent().hide();
            $("#ccl1007_agentpostcodezip_label").parent().removeAttr('class', 'info required');
            RemoveValidator("ccl1007_agentpostcodezip");
            $("#ccl1007_agentpostcodezip").val("");

            $("#ccl1007_agentcountry_label").parent().parent().hide();
            $("#ccl1007_agentcountry_label").parent().removeAttr('class', 'info required');
            RemoveValidator("ccl1007_agentcountry");
            $("#ccl1007_agentcountry").val("");

            $("#ccl1007_agentemailaddress_label").parent().parent().hide();
            $("#ccl1007_agentemailaddress_label").parent().removeAttr('class', 'info required');
            RemoveValidator("ccl1007_agentemailaddress");
            $("#ccl1007_agentemailaddress").val("");
        }
        if ($(this).val() == 1) {
            $("#ccl1000_agencyinternational_label").parent().parent().show();
            $("#ccl1000_agencyinternational_label").parent().attr('class', 'info required');
            CreateValidatorNew("ccl1000_agencyinternational", "ccl1000_agencyinternational is required.");
            $("#ccl1007_agentaddressline1_label").parent().parent().show();
            $("#ccl1007_agentaddressline1_label").parent().attr('class', 'info required');
            CreateValidatorNew("ccl1007_agentaddressline1", "ccl1007_agentaddressline1 is required.");
            $("#ccl1007_agentaddressline2_label").parent().parent().show();
            $("#ccl1007_agentaddressline2_label").parent().attr('class', 'info required');
            CreateValidatorNew("ccl1007_agentaddressline2", "ccl1007_agentaddressline2 is required.");
            $("#ccl1007_agentaddressline3_label").parent().parent().show();
            $("#ccl1007_agentaddressline3_label").parent().attr('class', 'info required');
            CreateValidatorNew("ccl1007_agentaddressline3", "ccl1007_agentaddressline3 is required.");
            $("#ccl1007_agentcitystate_label").parent().parent().show();
            $("#ccl1007_agentcitystate_label").parent().attr('class', 'info required');
            CreateValidatorNew("ccl1007_agentcitystate", "ccl1007_agentcitystate is required.");
            $("#ccl1007_agentpostcodezip_label").parent().parent().show();
            $("#ccl1007_agentpostcodezip_label").parent().attr('class', 'info required');
            CreateValidatorNew("ccl1007_agentpostcodezip", "ccl1007_agentpostcodezip is required.");
            $("#ccl1007_agentcountry_label").parent().parent().show();
            $("#ccl1007_agentcountry_label").parent().attr('class', 'info required');
            CreateValidatorNew("ccl1007_agentcountry", "ccl1007_agentcountry is required.");
            $("#ccl1007_agentemailaddress_label").parent().parent().show();
            $("#ccl1007_agentemailaddress_label").parent().attr('class', 'info required');
            CreateValidatorNew("ccl1007_agentemailaddress", "ccl1007_agentemailaddress is required.");
        }
    });

    $("#ccl1000_agencyinternational").change(function () {
        if ($("#ccl1000_agencyinternational").val() != "") {
            var httpReq = new XMLHttpRequest();
            httpReq.open("GET", "/organisation-json?id=" + $("#ccl1000_agencyinternational").val(), false);
            httpReq.setRequestHeader("Accept", "application/json");
            httpReq.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            httpReq.send(null);
            if (httpReq.status == 200) {
                var OrganisationDetails = JSON.parse(httpReq.responseText);
                $("#ccl1007_agentaddressline1").val(OrganisationDetails.results[0].address1_line1).addClass("dirty");
                $("#ccl1007_agentaddressline2").val(OrganisationDetails.results[0].address1_line2).addClass("dirty");
                $("#ccl1007_agentaddressline3").val(OrganisationDetails.results[0].address1_line3).addClass("dirty");
                $("#ccl1007_agentcitystate").val(OrganisationDetails.results[0].address1_city).addClass("dirty");
                $("#ccl1007_agentpostcodezip").val(OrganisationDetails.results[0].address1_postalcode).addClass("dirty");
                $("#ccl1007_agentcountry").val(OrganisationDetails.results[0].address1_country).addClass("dirty");
                $("#ccl1007_agentemailaddress").val(OrganisationDetails.results[0].emailaddress1).addClass("dirty");
            }
        }
    });
    if ($("#ccl1007_firstname").val() != "" && $("#ccl1007_knownas").val() == "") {
        $("#ccl1007_knownas").val($("#ccl1007_firstname").val());
    }


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