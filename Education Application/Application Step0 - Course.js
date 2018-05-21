$(document).ready(function () {
    $("#btnNext").appendTo($("#btnNext").parent().parent().next().children());
    $("#btnSave").attr('style', '');

    var coursetype = "";

    {% assign record_id = request.params['id'] | xml_escape %}
    {% assign applicationRrd = entities.ccl1000_application[record_id] %}
    {% if applicationRrd != null %}
    {% if applicationRrd.ccl1000_programmeid != null %}
    {% assign courseRrd = entities.product[applicationRrd.ccl1000_programmeid.id] %}
    coursetype = "{{courseRrd.ccl1000_levelofstudy.label}}";

    {% if courseRrd.ccl1000_modeofattendance != null %}
    $("#ccl1007_modeofstudyid_name").val("{{courseRrd.ccl1000_modeofattendance.name}}");
    $("#ccl1007_modeofstudyid_entityname").val("{{courseRrd.ccl1000_modeofattendance.logical_name}}");
    $("#ccl1007_modeofstudyid").val("{{courseRrd.ccl1000_modeofattendance.id}}");
    {% endif %}

    var httpReq = new XMLHttpRequest();
    httpReq.open("GET", "/course-session-json/?id={{courseRrd.id}}", false);
    httpReq.setRequestHeader("Accept", "application/json");
    httpReq.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    httpReq.send(null);
    if (httpReq.status == 200) {
        var Result = JSON.parse(httpReq.responseText);
        if (Result.totalcount > 0) {
            var ccl1000_academicyearid = $("#ccl1000_academicyearid").val();
            $("#ccl1000_academicyearid").empty();
            $("#ccl1000_academicyearid").append("<option value=''></option>");
            var new_arr = [];
            for (var i = 0; i < Result.results.length; i++) {
                if (Result.results[i].ccl1000_academicyearid != "") {
                    var items = Result.results[i].ccl1000_academicyearid;
                    if ($.inArray(items, new_arr) == -1) {
                        new_arr.push(items);
                        $("#ccl1000_academicyearid").append("<option value='" + Result.results[i].ccl1000_academicyearid + "'>" + Result.results[i].ccl1000_academicyear + "</option>");
                    }
                }
            }
            $("#ccl1000_academicyearid").val(ccl1000_academicyearid);
        }
    }

    {% endif %}
    {% endif %}

    if (coursetype == "PGR") {
        $("#ccl1007_intakeid_label").parent().parent().show();
        $("#ccl1007_fieldofstudy_label").parent().parent().show();
        CreateValidator("ccl1007_fieldofstudy", "Field of Study is a required field.");
        $("#ccl1007_fieldofstudy_label").parent().attr('class', 'info required');
        $("#ccl1007_contactsupervisor_label").parent().parent().show();
        $("#ccl1007_intendedsupervisor_label").parent().parent().show();
        $("#ccl1007_supervisorsdepartment_label").parent().parent().show();
    }
    else {
        $("#ccl1007_intakeid_label").parent().parent().hide();
        $("#ccl1007_fieldofstudy_label").parent().parent().hide();
        $("#ccl1007_contactsupervisor_label").parent().parent().hide();
        $("#ccl1007_intendedsupervisor_label").parent().parent().hide();
        $("#ccl1007_supervisorsdepartment_label").parent().parent().hide();
    }

    $("#ccl1007_modeofstudyid").parent().before("<textarea name='ccl1007_modeofstudyid_replace' type='text' id='ccl1007_modeofstudyid_replace' class='text form-control ' disabled='disabled' aria-required='true' title='ccl1007_modeofstudyid' aria-label='ccl1007_modeofstudyid' readonly='readonly'>");
    $("#ccl1007_modeofstudyid_replace").val($("#ccl1007_modeofstudyid_name").val());
    $("#ccl1007_modeofstudyid").parent().hide();

    if ($('input[name="ctl00$ContentContainer$EntityFormControl_1a7c5668973ce811812570106faa6a11$EntityFormControl_1a7c5668973ce811812570106faa6a11_EntityFormView$ccl1007_contactsupervisor"]:checked').val() == 1) {
        $("#ccl1007_intendedsupervisor_label").parent().parent().show();
        $("#ccl1007_supervisorsdepartment_label").parent().parent().show();
    }
    else {
        $("#ccl1007_intendedsupervisor_label").parent().parent().hide();
        $("#ccl1007_supervisorsdepartment_label").parent().parent().hide();
    }

    $("#ccl1007_contactsupervisor_0,#ccl1007_contactsupervisor_1").click(function () {
        if ($(this).val() == 0) {
            $("#ccl1007_intendedsupervisor_label").parent().parent().hide();
            $("#ccl1007_supervisorsdepartment_label").parent().parent().hide();
        }
        if ($(this).val() == 1) {
            $("#ccl1007_intendedsupervisor_label").parent().parent().show();
            $("#ccl1007_supervisorsdepartment_label").parent().parent().show();
        }
    });

    $("#ccl1007_intakeid").html("<option value='' label=' '> </option>");

    var httpReq = new XMLHttpRequest();
    httpReq.open("GET", "/pgr-intake-json?id={{applicationRrd.ccl1000_academicyearid.id}}", false);
    httpReq.setRequestHeader("Accept", "application/json");
    httpReq.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    httpReq.send(null);
    if (httpReq.status == 200) {
        var Details = JSON.parse(httpReq.responseText);
        var optionhtml = "";
        for (var i = 0; i < Details.results.length; i++) {
            optionhtml += "<option value='" + Details.results[i].ccl1007_pgrintakeid + "'>" + Details.results[i].ccl1007_name + "</option>";
        }
        $("#ccl1007_intakeid").append(optionhtml);
    }
});
