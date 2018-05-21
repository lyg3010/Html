$(document).ready(function () {
    var html = '<tr id="buttontr"> <td colspan="1" rowspan="1" class="clearfix cell"> <div class="control"> <div class="modal fade" id="CrimsonModal"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button aria-label="Close" class="form-close" data-dismiss="modal" tabindex="0" title="Close" type="button"> <span aria-hidden="true">×</span> <span class="sr-only">Close</span> </button> <h1 class="modal-title" title="Reject"> <span class="fa fa-pencil-square-o" aria-hidden="true" data-original-title="" title=""></span> Reject</h1> </div> <div class="modal-body"> <div style="border-width: 0px;width: 100%;height: 543px;"> <div id="CrimsonLoading" class="form-loading" style=""> <span class="fa fa-spinner fa-spin fa-4x" aria-hidden="true" data-original-title="" title=""></span> </div> <iframe id="CrimsonIframe" style="display: none;border-width: 0px;width: 100%;height: 543px;"></iframe> </div> </div> </div> </div> </div> <a href="#" class="btn btn-primary action update-action" title="Approve" id="ApproveButton" style="float: left;">Approve</a>';
    {% if user.roles contains 'Administrators' or user.roles contains 'Academic' or user.roles contains 'Mentor' or user.roles contains 'Placement Admin' %}
    html+='<a href="#" class="btn btn-primary" title="Reject" id="RejectButton" style="float: right;">Reject</a>';
    {% endif %}
    html+='</div> </td> <td class="cell zero-cell"></td> </tr>';
    $("#ccl1008_startdate_label").parent().parent().parent().parent().append(html);
    $("#ApproveButton").click(function () {
        $("#ccl1008_approvedtimesheets", parent.document).val(getUrlParam("id"));
        sessionStorage.setItem(getUrlParam("id"), "true");
        $(".btn-approve", parent.document).click();
        $("button.close", parent.document).click();
    });
    {% if user.roles contains 'Administrators' or user.roles contains 'Academic' or user.roles contains 'Mentor' or user.roles contains 'Placement Admin' %}
    $("#RejectButton").click(function () {
        var directurl = location.origin+"/_portal/modal-form-template-path/7b138792-1090-45b6-9241-8f8d96d8c372?"
        directurl += "id=" + getUrlParam("id");
        directurl += "&entityformid=50bc931c-dc4d-e811-8121-70106faae7f1&languagecode=1033";
        $("#CrimsonIframe").attr("src", directurl);
        var datapage = "/_portal/modal-form-template-path/7b138792-1090-45b6-9241-8f8d96d8c372";
        $("#CrimsonIframe").attr("data-page", datapage);
        //$('#CrimsonModal').modal({
        //   show: true,
        //   backdrop: 'static'
        // });
        $('#CrimsonModal').modal("show");
    });
    {% endif %}
});
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}