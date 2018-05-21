$(document).ready(function () {
    var PDFhtml = "";
    {% assign record_id = request.params['id'] | xml_escape %}
    {% assign PlacementMatchRrd = entities.ccl1008_pmvacancymatch[record_id] %}
    {% if PlacementMatchRrd != null %}
    {% if PlacementMatchRrd.ccl1008_pmvacancyid != null %}
    {% assign PMVacancyRrd = entities.ccl1008_pmvacancy[PlacementMatchRrd.ccl1008_pmvacancyid.id] %}
    {% if PMVacancyRrd != null %}
    {% if PMVacancyRrd.ccl1008_placementblockid != null %}
    {% assign PlacementBlockRrd = entities.ccl1008_pmplacementblock[PMVacancyRrd.ccl1008_placementblockid.id] %}
    {% if PlacementBlockRrd != null %}
        $("#ccl1008_candidateid_label").parent().parent().parent().after(
        $($.parseHTML(
            '<tr>'+
            '    <td colspan="1" rowspan="1" class="clearfix cell text form-control-cell">'+
            '        <div class="info">'+
            '            <label for="StartDate" id="StartDate_label" title="Start Date" readonly="readonly">Start Date</label>'+
            '        </div>'+
            '        <div class="control">'+
            '            <div class="form-control" readonly="readonly">'+
            '                <p>{{PlacementBlockRrd.ccl1008_startdate | date: 'd MMM yyyy'}}</p>'+
            '            </div>'+
            '        </div>'+
            '    </td>'+
            '    <td class="cell zero-cell"></td>'+
            '</tr>'+
            '<tr>'+
            '    <td colspan="1" rowspan="1" class="clearfix cell text form-control-cell">'+
            '        <div class="info">'+
            '            <label for="EndDate" id="EndDate_label" title="End Date" readonly="readonly">End Date</label>'+
            '        </div>'+
            '        <div class="control">'+
            '            <div class="form-control" readonly="readonly">'+
            '                <p>{{PlacementBlockRrd.ccl1008_enddate | date: 'd MMM yyyy'}}</p>'+
            '            </div>'+
            '        </div>'+
            '    </td>'+
            '    <td class="cell zero-cell"></td>'+
            '</tr>'
        , document, true)));
    {% endif %}
    {% endif %}
    {% if PMVacancyRrd.ccl1008_clientcontactid != null %}
    {% assign ContactRrd = entities.contact[PMVacancyRrd.ccl1008_clientcontactid.id] %}
    {% if ContactRrd != null %}
    document.getElementById("PMVacancyQuickView").onload = function () {
        $("#PMVacancyQuickView").contents().find("#ccl1008_clientcontactid_label").parent().parent().parent().after(
        $($.parseHTML(
            '<tr>'+
            '    <td colspan="1" rowspan="1" class="clearfix cell text form-control-cell">'+
            '        <div class="info">'+
            '            <label for="emailaddress1" id="emailaddress1_label" title="First e-mail address for the contact." readonly="readonly">Email</label>'+
            '        </div>'+
            '        <div class="control">'+
            '            <div class="form-control" readonly="readonly">'+
            '                <a class="text-primary" style="cursor: pointer;" href="mailto:{{ContactRrd.emailaddress1}}">{{ContactRrd.emailaddress1}}</a>'+
            '            </div>'+
            '        </div>'+
            '    </td>'+
            '    <td class="cell zero-cell"></td>'+
            '</tr>'
        , document, true)));
    };
    {% endif %}
    {% endif %}
    {% for note in PMVacancyRrd.notes %}
    {% if note.notetext contains 'JobDescription' %}
    {% if note.isdocument == true %}
    PDFhtml += '<tr> <td colspan="1" rowspan="1" class="clearfix cell form-control-cell"> <div class="info"> <label id="placementdescription_label" readonly="readonly">Placement Description</label> </div> <div class="control"> <div> <a class="btn btn-primary" href="{{note.url}}" target="_blank">Download PDF</a> </div> </div> </td> <td class="cell zero-cell"></td> </tr>';
    {% unless forloop.last %}
    PDFhtml += '<br>';
    {% endunless %}
    {% endif %}
    {% endif %}
    {% endfor -%}
    {% endif %}
    {% endif %}
    {% endif %}
    $('table[data-name="ccl_general"]').children('tbody').append(PDFhtml);
});