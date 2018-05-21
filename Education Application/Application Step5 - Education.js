$(document).ready(function () {
    // if ($("#ccl1007_portalstep6").val() != "890240000")
    //     $("#ccl1007_portalstep6").val('890240000').addClass("dirty");
    $("#ccl1007_englishlanguagetestwithin2years_label").parent().attr('class', 'info required');

    //move language not list to last
    var lastoption = $("#ccl1007_nativelanguageid option[value='d49a5bbc-1745-e811-8120-70106faa6a31']");
    $("#ccl1007_nativelanguageid option[value='d49a5bbc-1745-e811-8120-70106faa6a31']").remove();
    $("#ccl1007_nativelanguageid").append(lastoption);


    if ($("#ccl1007_nativelanguageid").val() != "d49a5bbc-1745-e811-8120-70106faa6a31") {
        $("#ccl1007_languageother_label").parent().parent().hide();
    }

    $('#ccl1007_nativelanguageid').on('change', function () {
        if ($("#ccl1007_nativelanguageid").val() != "d49a5bbc-1745-e811-8120-70106faa6a31") {
            $("#ccl1007_languageother_label").parent().parent().hide();
        }
        else {
            $("#ccl1007_languageother_label").parent().parent().show();
        }
    });

    if ($('input[name="ctl00$ContentContainer$EntityFormControl_e432f3a49296e711810370106faaf8c1$EntityFormControl_e432f3a49296e711810370106faaf8c1_EntityFormView$ccl1007_englishlanguagetestwithin2years"]:checked').val() == 0) {
        $("#ccl1007_englishlanguagetesttaken_label").parent().parent().hide();
        $("#ccl1007_englishlanguagetesttakenother_label").parent().parent().hide();
        $("#ccl1007_overalltestscorelevel_label").parent().parent().hide();
        $("#ccl1007_listening_label").parent().parent().hide();
        $("#ccl1007_reading_label").parent().parent().hide();
        $("#ccl1007_writing_label").parent().parent().hide();
        $("#ccl1007_speaking_label").parent().parent().hide();
        $("#ccl1007_readingwriting_label").parent().parent().hide();
        $("#ccl1007_speakinglistening_label").parent().parent().hide();
        $("#ccl1007_ukvitestnumber_label").parent().parent().hide();
        $("#ccl1007_testcompletiondate_label").parent().parent().hide();
        $("#ccl1007_dateofintentedtest_label").parent().parent().show();
    }
    else {
        // IELTS
        // UKVI IELTS
        // TOEFL iBT
        // Pearson Academic (PTE)
        if ($("#ccl1007_englishlanguagetesttaken").val() == "890240000" || $("#ccl1007_englishlanguagetesttaken").val() == "890240001" || $("#ccl1007_englishlanguagetesttaken").val() == "890240002" || $("#ccl1007_englishlanguagetesttaken").val() == "890240004") {
            $("#ccl1007_listening_label").parent().parent().show();
            $("#ccl1007_reading_label").parent().parent().show();
            $("#ccl1007_writing_label").parent().parent().show();
            $("#ccl1007_speaking_label").parent().parent().show();
        }
        else {
            $("#ccl1007_listening_label").parent().parent().hide();
            $("#ccl1007_reading_label").parent().parent().hide();
            $("#ccl1007_writing_label").parent().parent().hide();
            $("#ccl1007_speaking_label").parent().parent().hide();
        }
        //Trinity
        if ($("#ccl1007_englishlanguagetesttaken").val() == "890240003") {
            $("#ccl1007_readingwriting_label").parent().parent().show();
            $("#ccl1007_speakinglistening_label").parent().parent().show();
        }
        else {
            $("#ccl1007_readingwriting_label").parent().parent().hide();
            $("#ccl1007_speakinglistening_label").parent().parent().hide();
        }
        //UKVI IELTS
        if ($("#ccl1007_englishlanguagetesttaken").val() == "890240001") {
            $("#ccl1007_ukvitestnumber_label").parent().parent().show();
        }
        else {
            $("#ccl1007_ukvitestnumber_label").parent().parent().hide();
        }
        //other
        if ($("#ccl1007_englishlanguagetesttaken").val() == "890240005") {
            $("#ccl1007_englishlanguagetesttakenother_label").parent().parent().show();
        }
        else {
            $("#ccl1007_englishlanguagetesttakenother_label").parent().parent().hide();
        }

        if ($("#ccl1007_englishlanguagetesttaken").val() == "890240005" || $("#ccl1007_englishlanguagetesttaken").val() == "") {
            $("#ccl1007_overalltestscorelevel_label").parent().parent().hide();
        }
        else {
            $("#ccl1007_overalltestscorelevel_label").parent().parent().show();
        }
        $("#ccl1007_dateofintentedtest_label").parent().parent().hide();
    }
    $("#ccl1007_englishlanguagetestwithin2years_0,#ccl1007_englishlanguagetestwithin2years_1").click(function () {
        if ($(this).val() == 0) {
            $("#ccl1007_englishlanguagetesttaken_label").parent().parent().hide();
            $("#ccl1007_englishlanguagetesttakenother_label").parent().parent().hide();
            $("#ccl1007_overalltestscorelevel_label").parent().parent().hide();
            $("#ccl1007_listening_label").parent().parent().hide();
            $("#ccl1007_reading_label").parent().parent().hide();
            $("#ccl1007_writing_label").parent().parent().hide();
            $("#ccl1007_speaking_label").parent().parent().hide();
            $("#ccl1007_readingwriting_label").parent().parent().hide();
            $("#ccl1007_speakinglistening_label").parent().parent().hide();
            $("#ccl1007_ukvitestnumber_label").parent().parent().hide();
            $("#ccl1007_testcompletiondate_label").parent().parent().hide();
            $("#ccl1007_dateofintentedtest_label").parent().parent().show();
        }
        if ($(this).val() == 1) {
            $("#ccl1007_englishlanguagetesttaken_label").parent().parent().show();
            // IELTS
            // UKVI IELTS
            // TOEFL iBT
            // Pearson Academic (PTE)
            if ($("#ccl1007_englishlanguagetesttaken").val() == "890240000" || $("#ccl1007_englishlanguagetesttaken").val() == "890240001" || $("#ccl1007_englishlanguagetesttaken").val() == "890240002" || $("#ccl1007_englishlanguagetesttaken").val() == "890240004") {
                $("#ccl1007_listening_label").parent().parent().show();
                $("#ccl1007_reading_label").parent().parent().show();
                $("#ccl1007_writing_label").parent().parent().show();
                $("#ccl1007_speaking_label").parent().parent().show();
            }
            else {
                $("#ccl1007_listening_label").parent().parent().hide();
                $("#ccl1007_reading_label").parent().parent().hide();
                $("#ccl1007_writing_label").parent().parent().hide();
                $("#ccl1007_speaking_label").parent().parent().hide();
            }
            //Trinity
            if ($("#ccl1007_englishlanguagetesttaken").val() == "890240003") {
                $("#ccl1007_readingwriting_label").parent().parent().show();
                $("#ccl1007_speakinglistening_label").parent().parent().show();
            }
            else {
                $("#ccl1007_readingwriting_label").parent().parent().hide();
                $("#ccl1007_speakinglistening_label").parent().parent().hide();
            }
            //UKVI IELTS
            if ($("#ccl1007_englishlanguagetesttaken").val() == "890240001") {
                $("#ccl1007_ukvitestnumber_label").parent().parent().show();
            }
            else {
                $("#ccl1007_ukvitestnumber_label").parent().parent().hide();
            }
            //other
            if ($("#ccl1007_englishlanguagetesttaken").val() == "890240005") {
                $("#ccl1007_englishlanguagetesttakenother_label").parent().parent().show();
            }
            else {
                $("#ccl1007_englishlanguagetesttakenother_label").parent().parent().hide();
            }

            if ($("#ccl1007_englishlanguagetesttaken").val() == "890240005" || $("#ccl1007_englishlanguagetesttaken").val() == "") {
                $("#ccl1007_overalltestscorelevel_label").parent().parent().hide();
            }
            else {
                $("#ccl1007_overalltestscorelevel_label").parent().parent().show();
            }
            $("#ccl1007_testcompletiondate_label").parent().parent().show();
            $("#ccl1007_dateofintentedtest_label").parent().parent().hide();
        }
    });

    $('#ccl1007_englishlanguagetesttaken').on('change', function () {
        if ($("#ccl1007_englishlanguagetesttaken").val() != "890240005") {
            $("#ccl1007_englishlanguagetesttakenother_label").parent().parent().hide();
        }
        else {
            $("#ccl1007_englishlanguagetesttakenother_label").parent().parent().show();
        }
    });

    $('#ccl1007_englishlanguagetesttaken').on('change', function () {
        // IELTS
        // UKVI IELTS
        // TOEFL iBT
        // Pearson Academic (PTE)
        if ($("#ccl1007_englishlanguagetesttaken").val() == "890240000" || $("#ccl1007_englishlanguagetesttaken").val() == "890240001" || $("#ccl1007_englishlanguagetesttaken").val() == "890240002" || $("#ccl1007_englishlanguagetesttaken").val() == "890240004") {
            $("#ccl1007_listening_label").parent().parent().show();
            $("#ccl1007_reading_label").parent().parent().show();
            $("#ccl1007_writing_label").parent().parent().show();
            $("#ccl1007_speaking_label").parent().parent().show();
        }
        else {
            $("#ccl1007_listening_label").parent().parent().hide();
            $("#ccl1007_reading_label").parent().parent().hide();
            $("#ccl1007_writing_label").parent().parent().hide();
            $("#ccl1007_speaking_label").parent().parent().hide();
        }
        //Trinity
        if ($("#ccl1007_englishlanguagetesttaken").val() == "890240003") {
            $("#ccl1007_readingwriting_label").parent().parent().show();
            $("#ccl1007_speakinglistening_label").parent().parent().show();
        }
        else {
            $("#ccl1007_readingwriting_label").parent().parent().hide();
            $("#ccl1007_speakinglistening_label").parent().parent().hide();
        }
        //UKVI IELTS
        if ($("#ccl1007_englishlanguagetesttaken").val() == "890240001") {
            $("#ccl1007_ukvitestnumber_label").parent().parent().show();
        }
        else {
            $("#ccl1007_ukvitestnumber_label").parent().parent().hide();
        }
        //other
        if ($("#ccl1007_englishlanguagetesttaken").val() == "890240005") {
            $("#ccl1007_englishlanguagetesttakenother_label").parent().parent().show();
        }
        else {
            $("#ccl1007_englishlanguagetesttakenother_label").parent().parent().hide();
        }

        if ($("#ccl1007_englishlanguagetesttaken").val() == "890240005" || $("#ccl1007_englishlanguagetesttaken").val() == "") {
            $("#ccl1007_overalltestscorelevel_label").parent().parent().hide();
        }
        else {
            $("#ccl1007_overalltestscorelevel_label").parent().parent().show();
        }
    });

    SetNavStatus();

});