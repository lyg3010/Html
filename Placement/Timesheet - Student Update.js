$(document).ready(function () {
    //hide the look up field and show a read only replacement
    $("#ccl1008_placementid").parent().before("<input name='ccl1008_placementid_replace' type='text' id='ccl1008_placementid_replace' class='text form-control ' disabled='disabled' aria-required='true' title='ccl1008_placementid' aria-label='ccl1008_placementid' readonly='readonly'>");
    $("#ccl1008_placementid_replace").val($("#ccl1008_placementid_name").val());
    $("#ccl1008_placementid").parent().hide();

    // //Add the help text
    // $('.description').each(function () {
    //     var text = $(this).text();
    //     $(this).hide();
    //     $(this).next().children(":last-child").after('<span title="' + text + '" class="glyphicon glyphicon-question-sign" style="font-size:15px;margin-left:5px;margin-top:2px"></span> ');
    // });
    // $('.glyphicon').tooltip();

    var html = '<tr id="buttontr"> <td colspan="1" rowspan="1" class="clearfix cell"> <div class="control"> <div class="modal fade" id="CrimsonModal"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button aria-label="Close" class="form-close" data-dismiss="modal" tabindex="0" title="Close" type="button"> <span aria-hidden="true">×</span> <span class="sr-only">Close</span> </button> <h1 class="modal-title" title="Submitting"> </span>Submitting</h1> </div> <div class="modal-body"> <div style="border-width: 0px;width: 100%;height: 543px;"> <div id="CrimsonLoading" class="form-loading" style=""> <span class="fa fa-spinner fa-spin fa-4x" aria-hidden="true" data-original-title="" title=""></span> </div> <iframe id="CrimsonIframe" style="display: none;border-width: 0px;width: 100%;height: 543px;"></iframe> </div> </div> </div> </div> </div>';
    html+='<a href="#" class="btn btn-primary" title="Submit" id="SubmitButton" style="float: right;">Submit</a>';
    html+='</div> </td> <td class="cell zero-cell"></td> </tr>';

    $("#ccl1008_startdate_label").parent().parent().parent().parent().append(html);
    //Create a modal point to a Timesheet Update Entity Form that will update the current status to submit

    //move the submit button to right place
    $("#UpdateButton").parent().parent().next().children().eq(0).append($("#SubmitButton"));

    $("#SubmitButton").click(function () {
        var directurl = location.origin+"/_portal/modal-form-template-path/7b138792-1090-45b6-9241-8f8d96d8c372?"
        //Pass the Timesheet id into Timesheet Update Entity Form
        directurl += "id=" + getUrlParam("id");
        directurl += "&entityformid=DB68F9BB-D651-E811-8124-70106FAAD2F1&languagecode=1033";
        $("#CrimsonIframe").attr("src", directurl);
        var datapage = "/_portal/modal-form-template-path/7b138792-1090-45b6-9241-8f8d96d8c372";
        $("#CrimsonIframe").attr("data-page", datapage);
        $('#CrimsonModal').modal("show");
    });

    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
});

