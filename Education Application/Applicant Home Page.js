$(document).ready(function () {

    var applicationArray = new Array();
    {% fetchxml matchedApplication %}
    <fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false" returntotalrecordcount="true">
        <entity name="ccl1000_application">
            <attribute name="ccl1000_applicationid" />
            <filter type="and">
                <filter type="or">
                    <condition attribute="ccl1007_feestatus" operator="eq" value="890240000" />
                    <condition attribute="ccl1007_feestatus" operator="null" />
                </filter>
                <condition attribute="statecode" operator="eq" value="0" />
            </filter>
        </entity>
    </fetch>
    {% endfetchxml %}

    {% for citem in matchedApplication.results.entities %}
    applicationArray.push("{{citem.ccl1000_applicationid}}");
    {% endfor %}

    var defaultstatus = "";
    {% fetchxml fetchdefaultstatus %}
    <fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">
        <entity name="ccl_parameters">
            <attribute name="ccl1007_defaultsavedstatusid" />
            <filter type="and">
                <condition attribute="statecode" operator="eq" value="0" />
            </filter>
        </entity>
    </fetch>
    {% endfetchxml %}
    {% for citem in fetchdefaultstatus.results.entities %}
    defaultstatus = "{{citem.ccl1007_defaultsavedstatusid.id}}";
    {% endfor %}

    $("div.entity-grid.entitylist[data-selected-view='a4ca06fb-729e-e711-8104-70106faaf8c1']").parent().find("div.modal-delete").each(function () {
        $(this).find("div.modal-dialog").find("div.modal-content").find("div.modal-body").text("Are you sure you want to cancel this record?");
    });

    $("div.entity-grid.entitylist[data-selected-view='a4ca06fb-729e-e711-8104-70106faaf8c1']").on("loaded", function () {
        if ($("tr[data-entity='ccl1000_application']").length > 0) {
            var httpReq = new XMLHttpRequest();
            httpReq.open("GET", "/applicationstatus-search", false);
            httpReq.setRequestHeader("Accept", "application/json");
            httpReq.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            httpReq.send(null);
            if (httpReq.status == 200) {
                try {
                    var StatusResult = JSON.parse(httpReq.responseText);
                    $("tr[data-entity='ccl1000_application']").each(function () {
                        if ($(this).children('[data-attribute="ccl1007_portalapplicationstatusid"]').data("value") && $(this).children('[data-attribute="ccl1007_portalapplicationstatusid"]').data("value")['Id']) {
                            var statusId = $(this).children('[data-attribute="ccl1007_portalapplicationstatusid"]').data("value")['Id'];

                            if (defaultstatus.toLowerCase() == statusId.toLowerCase()) { //This button should be available for all submitted applications (Portal Application Status <> value of Default Draft Status parameter)
                                $(this).children('td:last').children().children('ul').children('li').eq(14).hide();//View Application History
                            }

                            // var httpReq = new XMLHttpRequest();
                            // httpReq.open("GET", "/applicationstatus-search/?id=" + statusId, false);
                            // httpReq.setRequestHeader("Accept", "application/json");
                            // httpReq.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                            // httpReq.send(null);
                            // if (httpReq.status == 200) {
                            // try {
                            for (var i = 0; i < StatusResult.results.length; i++) {
                                if (StatusResult.results[i].id == statusId) {
                                    var Result = StatusResult.results[i];
                                    break;
                                }
                            }


                            // var Result = JSON.parse(httpReq.responseText);
                            if (Result.ccl1007_applicantacceptreject == 'false') {
                                $(this).children('td:last').children().children('ul').children('li').eq(1).hide();//Accept
                                $(this).children('td:last').children().children('ul').children('li').eq(2).hide();//Reject
                            }
                            if (Result.ccl1007_statuscategory != '890240005') {//Draft Status
                                $(this).children('td:last').children().children('ul').children('li').eq(3).hide();//Resume
                                $(this).children('td:last').children().children('ul').children('li').eq(5).hide();//Cancel Application
                            }
                            if (Result.ccl1007_statuscategory != '890240001' && Result.ccl1007_statuscategory != '890240005')//Closed/Draft Status
                            {
                                $(this).children('td:last').children().children('ul').children('li').eq(11).show();//View Applicant Withdrawal Reason
                            } else {
                                $(this).children('td:last').children().children('ul').children('li').eq(11).hide();//View Applicant Withdrawal Reason
                            }
                            if (Result.ccl1007_statuscategory == '890240005') {//Draft Status
                                $(this).children('td:last').children().children('ul').children('li').eq(0).hide();//View
                                $(this).children('td:last').children().children('ul').children('li').eq(9).hide();//Submit Deferral Request
                                $(this).children('td:last').children().children('ul').children('li').eq(10).hide();//Submit Change of Programme Request
                                $(this).children('td:last').children().children('ul').children('li').eq(12).hide();// View Documents
                            }
                            if (Result.ccl1007_statuscategory != '890240003')//offer status
                            {
                                $(this).children('td:last').children().children('ul').children('li').eq(4).hide();//View Conditions
                            }
                            else {
                                $(this).children('td:last').children().children('ul').children('li').eq(4).hide();//View Conditions

                                var ApplicationId = $(this).attr("data-id");//get the current application record id in application entity list . it is also the application tr id
                                var httpReq1 = new XMLHttpRequest();
                                httpReq1.open("GET", "/application-concession/?id=" + ApplicationId, false);
                                httpReq1.setRequestHeader("Accept", "application/json");
                                httpReq1.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                                httpReq1.send(null);
                                if (httpReq1.status == 200) {
                                    try {
                                        var Result1 = JSON.parse(httpReq1.responseText);
                                        if (Result1.totalcount > 0) {
                                            $(this).children('td:last').children().children('ul').children('li').eq(4).show();//View Conditions
                                        }
                                    }
                                    catch (err) {
                                        alert(err.message);
                                    }
                                }

                                var httpReq2 = new XMLHttpRequest();
                                httpReq2.open("GET", "/application-condition/?id=" + ApplicationId, false);
                                httpReq2.setRequestHeader("Accept", "application/json");
                                httpReq2.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                                httpReq2.send(null);
                                if (httpReq2.status == 200) {
                                    try {
                                        var Result2 = JSON.parse(httpReq2.responseText);
                                        if (Result2.totalcount > 0) {
                                            $(this).children('td:last').children().children('ul').children('li').eq(4).show();//View Conditions
                                        }
                                    }
                                    catch (err) {
                                        alert(err.message);
                                    }
                                }
                            }
                            // }
                            // catch (err) {
                            //     alert(err.message);
                            // }
                            // }
                        }
                        //Set View Fee Status Review visible
                        if ($(this).data('id')) {
                            var applicationid = $(this).data('id');
                            var index = applicationArray.indexOf(applicationid);
                            if (index >= 0) {
                                $(this).children('td:last').children().children('ul').children('li').eq(7).hide();//View Fee Status
                            }
                        }
                        //Show/Hide Request Pre Sessional
                        var httpReq1 = new XMLHttpRequest();
                        httpReq1.open("GET", "/application-details-json-page/?id=" + $(this).attr("data-id"), false);
                        httpReq1.setRequestHeader("Accept", "application/json");
                        httpReq1.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                        httpReq1.send(null);
                        if (httpReq1.status == 200) {
                            try {
                                var Result1 = JSON.parse(httpReq1.responseText);
                                if (Result1.programmeid) {
                                    $(this).children('td:last').children().children('ul').children('li').eq(8).show();
                                }
                                else {
                                    $(this).children('td:last').children().children('ul').children('li').eq(8).hide();
                                }
                            }
                            catch (err) {
                                alert(err.message);
                            }
                        }
                        //Show Hide View CAS Information
                        if (!$(this).children('[data-th="CAS Information Confirmed"]').data("value") && $(this).children('[data-th="Current CAS"]').data("value")) {
                            //Modify View CAS URl
                            var hrefUrl = $(this).children('td:last').children().children('ul').children('li').eq(13).children('a').attr('href');
                            hrefUrl = hrefUrl.substring(14, 0) + $(this).children('[data-th="Current CAS"]').data("value")['Id'];
                            $(this).children('td:last').children().children('ul').children('li').eq(13).children('a').attr('href', hrefUrl);
                        }
                        else {
                            $(this).children('td:last').children().children('ul').children('li').eq(13).hide();//View CAS Information
                        }
                    });

                }
                catch (err) {
                    alert(err.message);
                }
            }
        }
    });

    $("#interviews-div").on("loaded", function () {
        if ($("tr[data-entity='ccl1000_interview']").length > 0) {
            $("tr[data-entity='ccl1000_interview']").each(function () {
                if (($(this).children('[data-attribute="statuscode"]').text() == "New") || ($(this).children('[data-attribute="statuscode"]').text() == "Invited")) {
                    $(this).children('td:last').children().children('ul').children('li').eq(0).show();
                    $(this).children('td:last').children().children('ul').children('li').eq(1).show();
                }
                else {
                    $(this).children('td:last').children().children('ul').children('li').eq(0).hide();
                    $(this).children('td:last').children().children('ul').children('li').eq(1).hide();
                }
            });
        }
    });

    $("#offers-div").on("loaded", function () {
        $('td[data-attribute="ccl1007_documenturl"]').each(function () {
            $(this).html("<a target='_blank' href='/download-document/?id=" + $(this).parent().data("id") + "'>/download-document/?id=" + $(this).parent().data("id") + "</a>");
        });
    });
});