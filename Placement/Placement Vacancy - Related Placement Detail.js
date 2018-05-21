$(document).ready(function () {
    var PDFhtml = "";
    {% assign record_id = request.params['id'] | xml_escape %}
    {% assign PMVacancyRrd = entities.ccl1008_pmvacancy[record_id] %}
    {% if PMVacancyRrd != null %}
    {% for note in PMVacancyRrd.notes %}
    {% if note.notetext contains 'JobDescription' %}
    {% if note.isdocument == true %}
    //If the PM Vacancy has a PDF uploaded in CRM(This note will have a default name JobDescription),append a button to the form that point to the attachment url of JobDescription PDF
    PDFhtml += '<tr> <td colspan="1" rowspan="1" class="clearfix cell form-control-cell"> <div class="info"> <label id="placementdescription_label" readonly="readonly">Placement Description</label> </div> <div class="control"> <div> <a class="btn btn-primary" href="{{note.url}}" target="_blank">Download PDF</a> </div> </div> </td> <td class="cell zero-cell"></td> </tr>';
    {% unless forloop.last %}
    PDFhtml += '<br>';
    {% endunless %}
    {% endif %}
    {% endif %}
    {% endfor -%}
    {% endif %}
    $('table[data-name="ccl_summary_section_3"]').children('tbody').append(PDFhtml);

    //Create a custom Modal that point to a Enquiry Create Entity Form
    var html = '<tr id="buttontr"> <td colspan="1" rowspan="1" class="clearfix cell"> <div class="control"> <div class="modal fade" id="CrimsonModal"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button aria-label="Close" class="form-close" data-dismiss="modal" tabindex="0" title="Close" type="button"> <span aria-hidden="true">×</span> <span class="sr-only">Close</span> </button> <h1 class="modal-title" title="Interested"> <span class="fa fa-pencil-square-o" aria-hidden="true" data-original-title="" title=""></span> Interested</h1> </div> <div class="modal-body"> <div style="border-width: 0px;width: 100%;height: 543px;"> <div id="CrimsonLoading" class="form-loading" style=""> <span class="fa fa-spinner fa-spin fa-4x" aria-hidden="true" data-original-title="" title=""></span> </div> <iframe id="CrimsonIframe" style="display: none;border-width: 0px;width: 100%;height: 543px;"></iframe> </div> </div> </div> </div> </div>';
    html+='<a href="#" class="btn btn-primary" title="I’m Interested in this" id="InterestedButton" style="float: left;">I’m Interested in this</a>';
    html+='</div> </td> <td class="cell zero-cell"></td> </tr>';

    $("#ccl1008_addressofplacement_label").parent().parent().parent().parent().append(html);

    $("#InterestedButton").click(function () {
        var directurl = location.origin+"/_portal/modal-form-template-path/7b138792-1090-45b6-9241-8f8d96d8c372?"
        //Pass the PM Vacancy id into Enquiry Create Entity Form
        directurl += "id=" + getUrlParam("id");
        directurl += "&entityformid=786685B8-3C50-E811-8121-70106FAAE7F1&languagecode=1033";
        $("#CrimsonIframe").attr("src", directurl);
        var datapage = "/_portal/modal-form-template-path/7b138792-1090-45b6-9241-8f8d96d8c372";
        $("#CrimsonIframe").attr("data-page", datapage);
        //$('#CrimsonModal').modal({
        //   show: true,
        //   backdrop: 'static'
        // });
        $('#CrimsonModal').modal("show");
    });
});

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}