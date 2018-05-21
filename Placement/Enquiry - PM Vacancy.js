$(document).ready(function () {
    if ($("#MessageLabel").html() == "Your Enquiry has been sent to the placements team.") {
        //If the form has been submitted and Enquiry has been created,show the CrimsonIframe to show the portal success message.
        $("#CrimsonIframe", parent.document).show();
        $("#CrimsonLoading", parent.document).hide();   
        setTimeout(function () {
            //After 2 seconds we close the modal.
            $("#CrimsonIframe", parent.document).hide();
            $("#CrimsonLoading", parent.document).show(); 
            $("button.close", parent.parent.document).click();        
        }, 2000);       
    }
    var Detail = "";
    {% assign record_id = request.params['id'] | xml_escape %}
    {% assign PMVacancyRrd = entities.ccl1008_pmvacancy[record_id] %}
    {% if PMVacancyRrd != null %}
    Detail += "Student {{user.fullname}}";
    Detail += " is interested in the Placement Vacancy : ";
    Detail += "{{PMVacancyRrd.ccl1008_name}} with ID {{record_id}}.";
    {% endif %}
    //fill the enquirydetail with the student full name and PM Vacancy's name and id
    $("#ccl1008_enquirydetails").val(Detail).addClass("dirty");
    $("#CrimsonIframe", parent.document).show();
    $("#InsertButton").click();        
});
