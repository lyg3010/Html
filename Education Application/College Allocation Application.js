$(document).ready(function () {
    $("#ccl1007_applicationid").val("{{request.params['applicationid']| xml_escape}}");
    $("#ccl1007_applicationid_entityname").val("ccl1000_application");

    ApplyChangeEvent();
    $("#ccl1007_applyforaccommodation").change(function () {
        ApplyChangeEvent();
    });

    SpouseChangeEvent();
    $("#ccl1007_areyoubringingyourspousepartnerwithyou").change(function () {
        SpouseChangeEvent();
    });


    ChildrenChangeEvent();
    $("#ccl1007_areyoubringingyourchildren").change(function () {
        ChildrenChangeEvent();
    });
    
        ApplicantApplicationChangeEvent();
    $("#ccl1007_areyoubringingyourchildren").change(function () {
        ApplicantApplicationChangeEvent();
    });


        $("#ccl1007_collegeorganisation1id").change(function () {
        var OrganisationId = $(this).val();//get the current OrganisationId
        var httpReq1 = new XMLHttpRequest();
        httpReq1.open("GET", "/organisation-json/?id=" + OrganisationId, false);
        httpReq1.setRequestHeader("Accept", "application/json");
        httpReq1.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        httpReq1.send(null);
        if (httpReq1.status == 200) {
            try {
                var Result1 = JSON.parse(httpReq1.responseText);
                // console.log(Result1);
                if (Result1.totalcount > 0) {
                    var SelfCateredAccommodationAvailable = Result1.results[0].ccl1007_selfcateredaccommodationavailable;
                    var CateredAccommodationAvailable = Result1.results[0].ccl1007_cateredaccommodationavailable;
                    // console.log("SelfCateredAccommodationAvailable:" + SelfCateredAccommodationAvailable);
                    // console.log("CateredAccommodationAvailable:" + CateredAccommodationAvailable);
                    if (SelfCateredAccommodationAvailable == "false") {
                        $("#ccl1007_cateringpreference").children('option[value="890240002"]').prop("disabled", true);
                    }
                    else {
                        $("#ccl1007_cateringpreference").children('option[value="890240002"]').prop("disabled", false);
                    }
                    if (CateredAccommodationAvailable == "false") {
                        $("#ccl1007_cateringpreference").children('option[value="890240001"]').prop("disabled", true);
                    }
                    else {
                        $("#ccl1007_cateringpreference").children('option[value="890240001"]').prop("disabled", false);
                    }
                }
            }
            catch (err) {
                alert(err.message);
            }
        }
    });

    $("#ccl1007_collegeorganisation1id").change(function () {
        if ($("#ccl1007_collegeorganisation1id").val() != "") {
            var OrganisationId = $("#ccl1007_collegeorganisation1id").val();//get the current OrganisationId
            var httpReq2 = new XMLHttpRequest();
            httpReq2.open("GET", "/organisation-json/?id=" + OrganisationId, false);
            httpReq2.setRequestHeader("Accept", "application/json");
            httpReq2.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            httpReq2.send(null);
            if (httpReq2.status == 200) {
                try {
                    var Result2 = JSON.parse(httpReq2.responseText);
                    // console.log(Result1);
                    if (Result2.totalcount > 0) {
                        var AvailableforPGApplication = Result2.results[0].ccl1007_availableforpgallocation;
                        if (AvailableforPGApplication == "false") {
                            $("#ccl1007_applyforaccommodation_0").click();
                        }
                    }
                }
                catch (err) {
                    alert(err.message);
                }
            }
            else {
                $("#ccl1007_applyforaccommodation_0").click();
            }
        }
        else {
            $("#ccl1007_applyforaccommodation_0").click();
        }
    });


    $("#ccl1007_applyforaccommodation_1").click(function () {
        if ($("#ccl1007_collegeorganisation1id").val() != "") {
            var OrganisationId = $("#ccl1007_collegeorganisation1id").val();//get the current OrganisationId
            var httpReq2 = new XMLHttpRequest();
            httpReq2.open("GET", "/organisation-json/?id=" + OrganisationId, false);
            httpReq2.setRequestHeader("Accept", "application/json");
            httpReq2.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            httpReq2.send(null);
            if (httpReq2.status == 200) {
                try {
                    var Result2 = JSON.parse(httpReq2.responseText);
                    // console.log(Result1);
                    if (Result2.totalcount > 0) {
                        var AvailableforPGApplication = Result2.results[0].ccl1007_availableforpgallocation;
                        if (AvailableforPGApplication == "false") {
                            $("#ccl1007_applyforaccommodation_0").click();
                        }
                    }
                }
                catch (err) {
                    alert(err.message);
                }
            }
            else {
                $("#ccl1007_applyforaccommodation_0").click();
            }
        }
        else {
            $("#ccl1007_applyforaccommodation_0").click();
        }
    });

    var CloseButton = $('<a/>');
    CloseButton.text('Close');
    CloseButton.attr('class', 'btn btn-primary pull-right');
    CloseButton.attr('onclick', 'javascript:history.go(-1);');

    $("#EntityFormPanel").children(".actions").append(CloseButton);
});

function ApplyChangeEvent() {

    if ($('input[name="ctl00$ctl00$ContentContainer$MainContent$EntityControls$EntityFormControl$EntityFormControl_EntityFormView$ccl1007_applyforaccommodation"]:checked').val() == 0) {
        $("#ccl1007_cateringpreference_label").parent().parent().parent().parent().parent().parent().hide();
        $("#ccl1007_roomtypepreference_label").parent().parent().parent().parent().parent().parent().hide();
        $("#ccl1007_applyforaccommodation").parent().next().show();
    }
    else {
        $("#ccl1007_cateringpreference_label").parent().parent().parent().parent().parent().parent().show();
        $("#ccl1007_roomtypepreference_label").parent().parent().parent().parent().parent().parent().show();
        $("#ccl1007_applyforaccommodation").parent().next().hide();
    }

    $("#ccl1007_contactsupervisor_0,#ccl1007_contactsupervisor_1").click(function () {
        if ($(this).val() == 0) {
            $("#ccl1007_cateringpreference_label").parent().parent().parent().parent().parent().parent().hide();
            $("#ccl1007_roomtypepreference_label").parent().parent().parent().parent().parent().parent().hide();
            $("#ccl1007_applyforaccommodation").parent().next().show();
        }
        if ($(this).val() == 1) {
            $("#ccl1007_cateringpreference_label").parent().parent().parent().parent().parent().parent().show();
            $("#ccl1007_roomtypepreference_label").parent().parent().parent().parent().parent().parent().show();
            $("#ccl1007_applyforaccommodation").parent().next().hide();
        }
    });


}






function ChildrenChangeEvent() {

    if ($('input[name="ctl00$ctl00$ContentContainer$MainContent$EntityControls$EntityFormControl$EntityFormControl_EntityFormView$ccl1007_areyoubringingyourchildren"]:checked').val() == 0) {
        $("#ccl1007_childrendetails_label").parent().parent().hide();

    }
    else {
        $("#ccl1007_childrendetails_label").parent().parent().show();
    }

    $("#ccl1007_contactsupervisor_0,#ccl1007_contactsupervisor_1").click(function () {
        if ($(this).val() == 0) {
            $("#ccl1007_childrendetails_label").parent().parent().hide();
        }
        if ($(this).val() == 1) {
            $("#ccl1007_childrendetails_label").parent().parent().show();
        }
    });


}



function SpouseChangeEvent() {

    if ($('input[name="ctl00$ctl00$ContentContainer$MainContent$EntityControls$EntityFormControl$EntityFormControl_EntityFormView$ccl1007_areyoubringingyourspousepartnerwithyou"]:checked').val() == 0) {
        $("#ccl1007_fullnameofspouse_label").parent().parent().hide();

    }
    else {
        $("#ccl1007_fullnameofspouse_label").parent().parent().show();
    }

    $("#ccl1007_contactsupervisor_0,#ccl1007_contactsupervisor_1").click(function () {
        if ($(this).val() == 0) {
            $("#ccl1007_fullnameofspouse_label").parent().parent().hide();
        }
        if ($(this).val() == 1) {
            $("#ccl1007_fullnameofspouse_label").parent().parent().show();
        }
    });


} 



function ApplicantApplicationChangeEvent() {

    if ($('input[name="ctl00$ctl00$ContentContainer$MainContent$EntityControls$EntityFormControl$EntityFormControl_EntityFormView$ccl1007_areyoubringingyourspousepartnerwithyou"]:checked').val() == 2) {
        $("#ccl1007_contactid_label").parent().parent().hide();
        $("#ccl1007_applicationid_label").parent().parent().hide();
    }
    else {
        $("#ccl1007_contactid_label").parent().parent().hide();
		$("#ccl1007_applicationid_label").parent().parent().hide();
    }

    $("#ccl1007_contactsupervisor_0,#ccl1007_contactsupervisor_1").click(function () {
        if ($(this).val() == 0) {
            $("#ccl1007_contactid_label").parent().parent().hide();
			$("#ccl1007_applicationid_label").parent().parent().hide();
        }
        if ($(this).val() == 1) {
            $("#ccl1007_contactid_label").parent().parent().hide();
			$("#ccl1007_applicationid_label").parent().parent().hide();
        }
    });


} 