$(document).ready(function () {
    $("#btnNext").appendTo($("#btnNext").parent().parent().next().children());
	  $(".form-action-container-left").css("width","100%");
	  $("#btnSave").attr('style','float:right;margin-right: -30px;');
	  
    $("#ccl1007_requireavisatostudy_label").parent().attr('class', 'info required');
    $("#ccl1007_currentpassport_label").parent().attr('class', 'info required');
    $("#ccl1007_channelislandsislemanresident_label").parent().attr('class', 'info required');
    $("#ccl1007_countryofbirthsameasnationality_label").parent().attr('class', 'info required');
    $("#ccl1007_doyouhaveindefiniteleavetoremain_label").parent().attr('class', 'info required');
    $("#ccl1007_refugeestatus_label").parent().attr('class', 'info required');
    $("#ccl1007_livinginukeufor3years_label").parent().attr('class', 'info required');
    
    if ($('input[name="ctl00$ContentContainer$EntityFormControl_7bfc37da7994e711810370106faaf8c1$EntityFormControl_7bfc37da7994e711810370106faaf8c1_EntityFormView$ccl1007_currentpassport"]:checked').val() == 0) {
        $("#ccl1000_passportnumber_label").parent().parent().hide();
        $("#ccl1007_passportcountryofissue_label").parent().parent().hide();
        $("#ccl1007_passportexpirydate_label").parent().parent().hide();
    }
    $("#ccl1007_currentpassport_0,#ccl1007_currentpassport_1").click(function () {
        if ($(this).val() == 0) {
            $("#ccl1000_passportnumber_label").parent().parent().hide();
            $("#ccl1007_passportcountryofissue_label").parent().parent().hide();
            $("#ccl1007_passportexpirydate_label").parent().parent().hide();
        }
        if ($(this).val() == 1) {
            $("#ccl1000_passportnumber_label").parent().parent().show();
            $("#ccl1007_passportcountryofissue_label").parent().parent().show();
            $("#ccl1007_passportexpirydate_label").parent().parent().show();
        }
    });

    if ($('input[name="ctl00$ContentContainer$EntityFormControl_7bfc37da7994e711810370106faaf8c1$EntityFormControl_7bfc37da7994e711810370106faaf8c1_EntityFormView$ccl1007_requireatier4visa"]:checked').val() == 0) {
        $("label[for='ApplicantVisaInformation']").parent().parent().hide();
    }
    $("#ccl1007_requireatier4visa_0,#ccl1007_requireatier4visa_1").click(function () {
        if ($(this).val() == 0) {
            $("label[for='ApplicantVisaInformation']").parent().parent().hide();
        }
        if ($(this).val() == 1) {
            $("label[for='ApplicantVisaInformation']").parent().parent().show();
        }
    });

    if ($("#ccl1007_countryofnationalityid_name").val().indexOf("United Kingdom") == -1) {
        $("#ccl1007_channelislandsislemanresident_label").parent().parent().hide();
    }
    else {
        $("#ccl1007_channelislandsislemanresident_label").parent().parent().show();
    }
    $('#ccl1007_countryofnationalityid').on('change', function () {
        if ($("#ccl1007_countryofnationalityid_name").val().indexOf("United Kingdom") == -1) {
            $("#ccl1007_channelislandsislemanresident_label").parent().parent().hide();
        }
        else {
            $("#ccl1007_channelislandsislemanresident_label").parent().parent().show();
        }
    });

    if ($('input[name="ctl00$ContentContainer$EntityFormControl_7bfc37da7994e711810370106faaf8c1$EntityFormControl_7bfc37da7994e711810370106faaf8c1_EntityFormView$ccl1007_countryofbirthsameasnationality"]:checked').val() == 1) {
        $("#ccl1007_birthcountry_label").parent().parent().hide();
        $("#ccl1007_birthcountry_name").val($("#ccl1007_countryofnationalityid_name").val());
        $("#ccl1007_birthcountry_entityname").val($("#ccl1007_countryofnationalityid_entityname").val());
        $("#ccl1007_birthcountry").val($("#ccl1007_countryofnationalityid").val());
    }
    $("#ccl1007_countryofbirthsameasnationality_0,#ccl1007_countryofbirthsameasnationality_1").click(function () {
        if ($(this).val() == 0) {
            $("#ccl1007_birthcountry_label").parent().parent().show();
        }
        if ($(this).val() == 1) {
            $("#ccl1007_birthcountry_label").parent().parent().hide();
            $("#ccl1007_birthcountry_name").val($("#ccl1007_countryofnationalityid_name").val());
            $("#ccl1007_birthcountry_entityname").val($("#ccl1007_countryofnationalityid_entityname").val());
            $("#ccl1007_birthcountry").val($("#ccl1007_countryofnationalityid").val());
        }
    });
    //Not UK EU
    if ($("#ccl1007_citizenship").val() == "890240000" || $("#ccl1007_citizenship").val() == "890240001") {
        $("#ccl1007_doyouhaveindefiniteleavetoremain_label").parent().parent().hide();
        $("#ccl1007_refugeestatus_label").parent().parent().hide();
    }

    $('#ccl1007_citizenship').on('change', function () {
        if ($("#ccl1007_citizenship").val() == "890240000" || $("#ccl1007_citizenship").val() == "890240001") {
            $("#ccl1007_doyouhaveindefiniteleavetoremain_label").parent().parent().hide();
            $("#ccl1007_refugeestatus_label").parent().parent().hide();
        }
        else {
            $("#ccl1007_doyouhaveindefiniteleavetoremain_label").parent().parent().show();
            $("#ccl1007_refugeestatus_label").parent().parent().show();
        }
    });

    if ($("#ccl1007_citizenship").val() != "890240000" && $("#ccl1007_citizenship").val() != "890240001" && $("#ccl1007_citizenship").val() != "890240001" && $('input[name="ctl00$ContentContainer$EntityFormControl_7bfc37da7994e711810370106faaf8c1$EntityFormControl_7bfc37da7994e711810370106faaf8c1_EntityFormView$ccl1007_livinginukeufor3years"]:checked').val() == 1) {
        $("#ccl1007_foreducationpurposes_label").parent().parent().show();
    }
    else {
        $("#ccl1007_foreducationpurposes_label").parent().parent().hide();
    }
    $('#ccl1007_citizenship').on('change', function () {
        if ($("#ccl1007_citizenship").val() != "890240000" && $("#ccl1007_citizenship").val() != "890240001" && $("#ccl1007_citizenship").val() != "890240001" && $('input[name="ctl00$ContentContainer$EntityFormControl_7bfc37da7994e711810370106faaf8c1$EntityFormControl_7bfc37da7994e711810370106faaf8c1_EntityFormView$ccl1007_livinginukeufor3years"]:checked').val() == 1) {
            $("#ccl1007_foreducationpurposes_label").parent().parent().show();
        }
        else {
            $("#ccl1007_foreducationpurposes_label").parent().parent().hide();
        }
    });
    $("#ccl1007_livinginukeufor3years_0,#ccl1007_livinginukeufor3years_1").click(function () {
        if ($("#ccl1007_citizenship").val() != "890240000" && $("#ccl1007_citizenship").val() != "890240001" && $("#ccl1007_citizenship").val() != "890240001" && $('input[name="ctl00$ContentContainer$EntityFormControl_7bfc37da7994e711810370106faaf8c1$EntityFormControl_7bfc37da7994e711810370106faaf8c1_EntityFormView$ccl1007_livinginukeufor3years"]:checked').val() == 1) {
            $("#ccl1007_foreducationpurposes_label").parent().parent().show();
        }
        else {
            $("#ccl1007_foreducationpurposes_label").parent().parent().hide();
        }
    });

    $("#ILRRefugeeDocument").find('.modal').eq(0).unbind("shown.bs.modal");
    $("#ILRRefugeeDocument").find('.modal').eq(0).on('shown.bs.modal',function(){
      var directurl = "https://crimsondev.microsoftcrmportals.com/_portal/modal-form-template-path/7b138792-1090-45b6-9241-8f8d96d8c372?entityformid=f5127780-a296-e711-8103-70106faa6a31&languagecode=1033&refentity=ccl1000_application";
      directurl += "&refid=" + $("#ILRRefugeeDocument", parent.document).find("div.entity-grid").eq(0).attr("data-ref-id");
      directurl += "&refrel=ccl1007_ccl1007_applicationdocument_ccl1000_appli";
      directurl += "&doctype=5cf4c3b3-1347-e811-811b-e0071b7fe041";//ILR Refugee Document
      $(this).find('iframe').attr('src', directurl);
    });
    
    SetNavStatus();

});