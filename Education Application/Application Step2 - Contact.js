$(document).ready(function () {
    $(".form-action-container-left").css("width", "100%");
    $("#btnSave").attr('style', 'float:right; margin-right:-50px');
    $("div.form-action-container-right").append($("#btnNext"));

    $("#ccl1007_sameaspermaddress_label").parent().attr('class', 'info required');

    {% assign Contact_id = user.id %}

    //Is your correspondence address the same as your permanent address? is yes
    if ($('input[name="ctl00$ContentContainer$EntityFormControl_74a08b2a7994e711810370106faaf8c1$EntityFormControl_74a08b2a7994e711810370106faaf8c1_EntityFormView$ccl1007_sameaspermaddress"]:checked').val() == 1) {
        $("#ccl1007_corrstreet1").attr("readonly", true);
        $("#ccl1007_corrstreet2").attr("readonly", true);
        $("#ccl1007_corrcounty").attr("readonly", true);
        $("#ccl1007_corrcity").attr("readonly", true);
        $("#ccl1007_corrpostcode").attr("readonly", true);
        $("#ccl1007_corr_country").parent().before("<input name='ccl1007_corr_country_replace' type='text' id='ccl1007_corr_country_replace' class='text form-control ' aria-required='true' title='ccl1007_corr_country' aria-label='ccl1007_corr_country' readonly='readonly'>");
        $("#ccl1007_corr_country").parent().hide();
        $("#ccl1007_corrcountry").attr("readonly", true);

        $("#ccl1007_corrstreet1").val($("#ccl1007_street1").val()).addClass("dirty");
        $("#ccl1007_corrstreet2").val($("#ccl1007_street2").val()).addClass("dirty");
        $("#ccl1007_corrcounty").val($("#ccl1007_county").val()).addClass("dirty");
        $("#ccl1007_corrcity").val($("#ccl1007_city").val()).addClass("dirty");
        $("#ccl1007_corrpostcode").val($("#ccl1007_postcode").val()).addClass("dirty");
        $("#ccl1007_corr_country_name").val($("#ccl1007_permcountry_name").val()).addClass("dirty");
        $("#ccl1007_corr_country").val($("#ccl1007_permcountry").val()).addClass("dirty");
        $("#ccl1007_corr_country_entityname").val($("#ccl1007_permcountry_entityname").val()).addClass("dirty");
        $("#ccl1007_corr_country").val($("#ccl1007_permcountry").val()).addClass("dirty");
        $("#ccl1007_corr_country_replace").val($("#ccl1007_permcountry_name").val()).addClass("dirty");
        $("#ccl1007_corrcountry").val($("#ccl1007_country").val()).addClass("dirty");
    }
    //Is your correspondence address the same as your permanent address? is no
    else{
        {% if Contact_id %}
        {% assign ContactRrd = entities.contact[Contact_id] %}
        if($("#ccl1007_corrstreet1").val()=="")
        $("#ccl1007_corrstreet1").val("{{ContactRrd.address1_line1}}");
        if($("#ccl1007_corrstreet2").val()=="")
        $("#ccl1007_corrstreet2").val("{{ContactRrd.address1_line2}}");
        if($("#ccl1007_corrcounty").val()=="")
        $("#ccl1007_corrcounty").val("{{ContactRrd.address1_line3}}");
        if($("#ccl1007_corrcity").val()=="")
        $("#ccl1007_corrcity").val("{{ContactRrd.address1_city}}");
        if($("#ccl1007_corr_country").val()=="")
        $("#ccl1007_corr_country_name").val("{{ContactRrd.ccl1000_country.name}}");
        $("#ccl1007_corr_country").val("{{ContactRrd.ccl1000_country.id}}");
        $("#ccl1007_corr_country_entityname").val("{{ContactRrd.ccl1000_country.logical_name}}");
        if($("#ccl1007_corrpostcode").val()=="")
        $("#ccl1007_corrpostcode").val("{{ContactRrd.address1_postalcode}}");
        {% endif %}
    }
    $("#ccl1007_sameaspermaddress_0,#ccl1007_sameaspermaddress_1").click(function () {
        //Is your correspondence address the same as your permanent address? is no
        if ($(this).val() == 0) {
            $("#ccl1007_corrstreet1").attr("readonly", false);
            // $("#ccl1007_corrstreet1").val("");
            $("#ccl1007_corrstreet2").attr("readonly", false);
            // $("#ccl1007_corrstreet2").val("");
            $("#ccl1007_corrcounty").attr("readonly", false);
            // $("#ccl1007_corrcounty").val("");
            $("#ccl1007_corrcity").attr("readonly", false);
            // $("#ccl1007_corrcity").val("");
            $("#ccl1007_corrpostcode").attr("readonly", false);
            // $("#ccl1007_corrpostcode").val("");
            $("#ccl1007_corr_country_replace").remove();
            $("#ccl1007_corr_country").parent().show();
            // $("#ccl1007_corr_country_name").val("").addClass("dirty");
            // $("#ccl1007_corr_country").val("").addClass("dirty");
            // $("#ccl1007_corr_country_entityname").val("").addClass("dirty");
            $("#ccl1007_corrcountry").attr("readonly", false);
            // $("#ccl1007_corrcountry").val("");
            {% if Contact_id %}
            {% assign ContactRrd = entities.contact[Contact_id] %}
            $("#ccl1007_corrstreet1").val("{{ContactRrd.address1_line1}}");
            $("#ccl1007_corrstreet2").val("{{ContactRrd.address1_line2}}");
            $("#ccl1007_corrcounty").val("{{ContactRrd.address1_line3}}");
            $("#ccl1007_corrcity").val("{{ContactRrd.address1_city}}");
            $("#ccl1007_corr_country_name").val("{{ContactRrd.ccl1000_country.name}}");
            $("#ccl1007_corr_country").val("{{ContactRrd.ccl1000_country.id}}");
            $("#ccl1007_corr_country_entityname").val("{{ContactRrd.ccl1000_country.logical_name}}");
            $("#ccl1007_corrpostcode").val("{{ContactRrd.address1_postalcode}}");
            {% endif %}
        }
        //Is your correspondence address the same as your permanent address? is yes
        if ($(this).val() == 1) {
            $("#ccl1007_corrstreet1").val($("#ccl1007_street1").val()).addClass("dirty");
            $("#ccl1007_corrstreet2").val($("#ccl1007_street2").val()).addClass("dirty");
            $("#ccl1007_corrcounty").val($("#ccl1007_county").val()).addClass("dirty");
            $("#ccl1007_corrcity").val($("#ccl1007_city").val()).addClass("dirty");
            $("#ccl1007_corrpostcode").val($("#ccl1007_postcode").val()).addClass("dirty");
            $("#ccl1007_corr_country_name").val($("#ccl1007_permcountry_name").val()).addClass("dirty");
            $("#ccl1007_corr_country").val($("#ccl1007_permcountry").val()).addClass("dirty");
            $("#ccl1007_corr_country_entityname").val($("#ccl1007_permcountry_entityname").val()).addClass("dirty");
            $("#ccl1007_corrcountry").val($("#ccl1007_country").val()).addClass("dirty");
            $("#ccl1007_corrstreet1").attr("readonly", true);
            $("#ccl1007_corrstreet2").attr("readonly", true);
            $("#ccl1007_corrcounty").attr("readonly", true);
            $("#ccl1007_corrcity").attr("readonly", true);
            $("#ccl1007_corrpostcode").attr("readonly", true);
            $("#ccl1007_corr_country").parent().before("<input name='ccl1007_corr_country_replace' type='text' id='ccl1007_corr_country_replace' class='text form-control ' aria-required='true' title='ccl1007_corr_country' aria-label='ccl1007_corr_country' readonly='readonly'>");
            $("#ccl1007_corr_country_replace").val($("#ccl1007_corr_country_name").val());
            $("#ccl1007_corr_country").parent().hide();
            $("#ccl1007_corrcountry").attr("readonly", true);
        }
    });

    //Set Default
    // {% assign applicationid = request.params['id'] %}
    // {% assign ccl1000_application = entities.ccl1000_application[applicationid] %}
    // {% assign firstname = ccl1000_application.ccl1007_firstname %}
    // if ("{{ccl1000_application.ccl1007_alternativephone}}") {
    //     $("#ccl1007_mobilephone").val("{{ccl1000_application.ccl1007_mobilephone}}");
    //     $("#ccl1007_alternativephone").val("{{ccl1000_application.ccl1007_alternativephone}}");
    //     $("#ccl1007_email").val("{{ccl1000_application.ccl1007_email}}").addClass("dirty");
    //     $("#ccl1007_street1").val("{{ccl1000_application.ccl1007_street1}}");
    //     $("#ccl1007_street2").val("{{ccl1000_application.ccl1007_street2}}");
    //     $("#ccl1007_city").val("{{ccl1000_application.ccl1007_city}}");
    //     $("#ccl1007_county").val("{{ccl1000_application.ccl1007_county}}");
    //     $("#ccl1007_country").val("{{ccl1000_application.ccl1007_country}}");
    //     $("#ccl1007_postcode").val("{{ccl1000_application.ccl1007_postcode}}");
    //     $("#ccl1007_corrstreet1").val("{{ccl1000_application.ccl1007_corrstreet1}}");
    //     $("#ccl1007_corrstreet2").val("{{ccl1000_application.ccl1007_corrstreet2}}");
    //     $("#ccl1007_corrcity").val("{{ccl1000_application.ccl1007_corrcity}}");
    //     $("#ccl1007_corrcounty").val("{{ccl1000_application.ccl1007_corrcounty}}");
    //     $("#ccl1007_corrcountry").val("{{ccl1000_application.ccl1007_corrcountry}}");
    //     $("#ccl1007_corrpostcode").val("{{ccl1000_application.ccl1007_corrpostcode}}");
    // }
    // else {
    //     {% assign Contact_id = user.id %}
    //     {% if Contact_id %}
    //     {% assign ContactRrd = entities.contact[Contact_id] %}
    //     if ($("#ccl1007_mobilephone").val() == "")
    //         $("#ccl1007_mobilephone").val("{{ContactRrd.mobilephone}}");
    //     if ($("#ccl1007_alternativephone").val() == "")
    //         $("#ccl1007_alternativephone").val("{{ContactRrd.telephone2}}");
    //     if ($("#ccl1007_email").val() == "")
    //         $("#ccl1007_email").val("{{ContactRrd.emailaddress1}}").addClass("dirty");
    //     if ($("#ccl1007_street1").val() == "")
    //         $("#ccl1007_street1").val("{{ContactRrd.address1_line1}}");
    //     if ($("#ccl1007_street2").val() == "")
    //         $("#ccl1007_street2").val("{{ContactRrd.address1_line2}}");
    //     if ($("#ccl1007_city").val() == "")
    //         $("#ccl1007_city").val("{{ContactRrd.address1_city}}");
    //     if ($("#ccl1007_county").val() == "")
    //         $("#ccl1007_county").val("{{ContactRrd.address1_stateorprovince}}");
    //     if ($("#ccl1007_country").val() == "")
    //         $("#ccl1007_country").val("{{ContactRrd.address1_country}}");
    //     if ($("#ccl1007_postcode").val() == "")
    //         $("#ccl1007_postcode").val("{{ContactRrd.address1_postalcode}}");
    //     if ($("#ccl1007_corrstreet1").val() == "")
    //         $("#ccl1007_corrstreet1").val("{{ContactRrd.address2_line1}}");
    //     if ($("#ccl1007_corrstreet2").val() == "")
    //         $("#ccl1007_corrstreet2").val("{{ContactRrd.address2_line2}}");
    //     if ($("#ccl1007_corrcity").val() == "")
    //         $("#ccl1007_corrcity").val("{{ContactRrd.address2_city}}");
    //     if ($("#ccl1007_corrcounty").val() == "")
    //         $("#ccl1007_corrcounty").val("{{ContactRrd.address2_stateorprovince}}");
    //     if ($("#ccl1007_corrcountry").val() == "")
    //         $("#ccl1007_corrcountry").val("{{ContactRrd.address2_country}}");
    //     if ($("#ccl1007_corrpostcode").val() == "")
    //         $("#ccl1007_corrpostcode").val("{{ContactRrd.address2_postalcode}}");
    //     {% endif %}
    // }

    SetNavStatus();

});