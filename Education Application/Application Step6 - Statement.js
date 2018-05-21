$(document).ready(function () {
    // $("#StatementDocument").hide();
    // $("#StatementDocument").css("border", "0px");
    // $("#StatementDocument > div.entity-grid").eq(0).on("loaded", function () {
    //     $("#StatementDocument").find("div.toolbar-actions").eq(0).removeClass("pull-right");
    //     $("#StatementDocument").find("div.toolbar-actions").eq(0).addClass("pull-left");
    //     $("#StatementDocument").find("div.grid-actions").eq(0).css("border-bottom", "none");
    //     $("#StatementDocument").find("div.view-grid").eq(0).hide();
    //     $("#StatementDocument").find("div.view-empty").eq(0).hide();
    //     $("#StatementDocument").find("div.view-loading").eq(0).hide();
    //     $("#StatementDocument").find("div.view-pagination").eq(0).hide();
    //     // $("#StatementDocument").show();
    // });

    var Instructions = "";
    {% assign record_id = request.params['id'] | xml_escape %}
    {% assign applicationRrd = entities.ccl1000_application[record_id] %}
    {% if applicationRrd != null %}
    {% if applicationRrd.ccl1000_programmeid != null %}
    {% assign courseRrd = entities.product[applicationRrd.ccl1000_programmeid.id] %}
    Instructions = "{{courseRrd.ccl1007_personalstatementinstructions| newline_to_br |strip_newlines | replace: '<br />', '\r\n'}}";
    {% endif %}
    {% endif %}

    $("#ccl1007_personalstatementinstructions").val(Instructions);
    $("#ccl1007_personalstatementinstructions").attr("readonly", "readonly")
    //document
    if ($("#ccl1007_personalstatementformat").val() == "890240000") {
        $("#ccl1007_personalstatement_label").parent().parent().hide();
        $("#StatementDocument").show();
    }
    //statement
    else if ($("#ccl1007_personalstatementformat").val() == "890240001") {
        $("#ccl1007_personalstatement_label").parent().parent().show();
        $("#StatementDocument").hide();
    }
    else{
        $("#ccl1007_personalstatement_label").parent().parent().hide();
        $("#StatementDocument").hide();
    }

    $('#ccl1007_personalstatementformat').on('change', function () {
        if ($("#ccl1007_personalstatementformat").val() == "890240000") {
            $("#ccl1007_personalstatement_label").parent().parent().hide();
            $("#StatementDocument").show();
        }
        //statement
        else if ($("#ccl1007_personalstatementformat").val() == "890240001") {
            $("#ccl1007_personalstatement_label").parent().parent().show();
            $("#StatementDocument").hide();
        }
        else{
            $("#ccl1007_personalstatement_label").parent().parent().hide();
            $("#StatementDocument").hide();
        }
    });

    $("#StatementDocument").find('.modal').eq(0).unbind("shown.bs.modal");
    $("#StatementDocument").find('.modal').eq(0).on('shown.bs.modal',function(){
      var directurl = "https://crimsondev.microsoftcrmportals.com/_portal/modal-form-template-path/7b138792-1090-45b6-9241-8f8d96d8c372?entityformid=f5127780-a296-e711-8103-70106faa6a31&languagecode=1033&refentity=ccl1000_application";
      directurl += "&refid=" + $("#StatementDocument", parent.document).find("div.entity-grid").eq(0).attr("data-ref-id");
      directurl += "&refrel=ccl1007_ccl1007_applicationdocument_ccl1000_appli";
      directurl += "&doctype=39a41dad-1347-e811-811b-e0071b7fe041";//Personal Statement
      $(this).find('iframe').attr('src', directurl);
    });


});