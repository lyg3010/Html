$(document).ready(function () {
    //Set default document type by parameter 'doctype' and readonly
    {% if request.params.doctype %}
    {% assign documenttype = entities.ccl1000_documenttype[request.params.doctype] %}
    {% if documenttype %}
    $("#ccl1007_documenttypeid_entityname").attr("value", "{{documenttype.logical_name}}");
    $("#ccl1007_documenttypeid").attr("value", "{{documenttype.id}}");
    $("#ccl1007_documenttypeid_name").attr("value", "{{documenttype['ccl1000_name']}}");
    //$("#ccl1007_documenttypeid").parent().find("div.input-group-btn").hide();
    $("#ccl1007_documenttypeid").parent().before("<input name='ccl1007_documenttypeid_replace' type='text' id='ccl1007_documenttypeid_replace' class='text form-control ' aria-required='true' title='ccl1007_documenttypeid' aria-label='ccl1007_documenttypeid' readonly='readonly'>");
    $("#ccl1007_documenttypeid").parent().hide();
    $("#ccl1007_documenttypeid_replace").val("{{documenttype['ccl1000_name']}}");
    {% endif %}
    {% endif %}
    //Adding field level help text
    $("head").append("<link>");
    var css = $("head").children(":last");
    css.attr({
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    });

    $('.description').each(function () {
        var text = $(this).text();
        $(this).hide();
        $(this).next().children(":last-child").after('<span title="' + text + '" class="fa fa-question-circle-o" style="font-size:15px;margin-left:5px;margin-top:2px"></span> ');
    });
    $('.fa').tooltip();

    // $('#InsertButton').click(function(){
    //     if(Page_ClientValidate('')){
    //     setTimeout(function () {
    //         $(".form-close",parent.document).click();
    //      }, 500);  
    //     }
    // });

    setTimeout(function () {
        $("#CrimsonIframe", parent.document).show();
        $("#CrimsonLoading", parent.document).hide();
    }, 500);

    if ($("#MessageLabel").html() == "Submission completed successfully.") {
        $(".form-close", parent.document).click();
        $("#CrimsonIframe", parent.document).hide();
        $("#CrimsonLoading", parent.document).show();
    }

});
