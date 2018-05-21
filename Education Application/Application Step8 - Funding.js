$(document).ready(function () {
    $("#EntityFormControl_a432f2c54445e811812070106faa6a31_EntityFormView").css("min-height","420px");

    $("#ccl1007_scholarshipappliedfor_label").parent().attr('class', 'info required');

    if ($("#ccl1007_portalstep9").val() != "890240000")
        $("#ccl1007_portalstep9").val('890240000').addClass("dirty");

    if ($('input[name="ctl00$ContentContainer$EntityFormControl_a432f2c54445e811812070106faa6a31$EntityFormControl_a432f2c54445e811812070106faa6a31_EntityFormView$ccl1007_scholarshipappliedfor"]:checked').val() == 0) {
        $("#ccl1007_scholarshipawarddate_label").parent().parent().parent().parent().parent().parent().hide();
    }
    $("#ccl1007_scholarshipappliedfor_0,#ccl1007_scholarshipappliedfor_1").click(function () {
        if ($(this).val() == 0) {
            $("#ccl1007_scholarshipawarddate_label").parent().parent().parent().parent().parent().parent().hide();
        }
        if ($(this).val() == 1) {
            $("#ccl1007_scholarshipawarddate_label").parent().parent().parent().parent().parent().parent().show();
        }
    });

        //move Other to last
        var lastoption = $("#ccl1000_scholarshipid option[value='ab825856-4845-e811-8120-70106faa6a31']");
        $("#ccl1000_scholarshipid option[value='ab825856-4845-e811-8120-70106faa6a31']").remove();
        $("#ccl1000_scholarshipid").append(lastoption);
    
        if ($("#ccl1000_scholarshipid").val() != "ab825856-4845-e811-8120-70106faa6a31") {
            $("#ccl1007_scholarshipother_label").parent().parent().hide();
        }
    
        $('#ccl1000_scholarshipid').on('change', function () {
            if ($("#ccl1000_scholarshipid").val() != "ab825856-4845-e811-8120-70106faa6a31") {
                $("#ccl1007_scholarshipother_label").parent().parent().hide();
            }
            else {
                $("#ccl1007_scholarshipother_label").parent().parent().show();
            }
        });


});