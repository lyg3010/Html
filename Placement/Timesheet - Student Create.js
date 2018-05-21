{% fetchxml Parameters %}  
<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false" returntotalrecordcount="true">
  <entity name="ccl_parameters">
    <attribute name="ccl_parametersid" />
    <attribute name="ccl1008_placementinprogressstatus" />
    <order attribute="ccl1008_placementinprogressstatus" descending="false" />
    <filter type="and">
      <condition attribute="statecode" operator="eq" value="0" />
    </filter>
  </entity>
</fetch>
{% endfetchxml%} 
{% if Parameters.results.total_record_count > 0 %}
{% fetchxml StudentPlacements %}  
<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false" returntotalrecordcount="true">
  <entity name="ccl1008_pmplacement">
    <attribute name="ccl1008_pmplacementid" />
    <attribute name="ccl1008_name" />
    <order attribute="createdon" descending="true" />
    <filter type="and">
      <condition attribute="ccl1008_candidate" operator="eq" value="{{user.id}}" />
      <condition attribute="ccl1008_placementdate" operator="on-or-before" value="{{now}}" />
      <condition attribute="ccl1008_placementenddate" operator="on-or-after" value="{{now}}" /> 
      <condition attribute="ccl1008_placementstatus" operator="eq" value="{{Parameters.results.entities.first.ccl1008_placementinprogressstatus.id}}" />
      <condition attribute="statecode" operator="eq" value="0" />
    </filter>
  </entity>
</fetch>
{% endfetchxml%} 
{% endif %}

$(document).ready(function () {
    $("#statuscode_label").parent().next().children().eq(0).html("Draft"); 
    {% if Parameters.results.total_record_count > 0 %}//get Placement In Progress Status from parameter
    {% if StudentPlacements.results.total_record_count > 0 %}//get the latest In Progress Student Placements
    //Set the look up value
    $("#ccl1008_placementid_name").val("{{StudentPlacements.results.entities.first.ccl1008_name}}");
    $("#ccl1008_placementid_entityname").val("{{StudentPlacements.results.entities.first.logical_name}}");
    $("#ccl1008_placementid").val("{{StudentPlacements.results.entities.first.id}}");
    //hide the look up field and show a read only replacement
    $("#ccl1008_placementid").parent().before("<input name='ccl1008_placementid_replace' type='text' id='ccl1008_placementid_replace' class='text form-control ' disabled='disabled' aria-required='true' title='ccl1008_placementid' aria-label='ccl1008_placementid' readonly='readonly'>");
    $("#ccl1008_placementid_replace").val($("#ccl1008_placementid_name").val());
    $("#ccl1008_placementid").parent().hide();
    {% else %}
    alert("There is no matched placement!");
    CloseCreateWindow();
    {% endif %}
    {% else %}
    alert("There is no Placement In Progress Status on Parameter!");
    CloseCreateWindow();
    {% endif %}


      //   //Add the help text
      //   $('.description').each(function () {
      //     var text = $(this).text();
      //     $(this).hide();
      //     $(this).next().children(":last-child").after('<span title="' + text + '" class="glyphicon glyphicon-question-sign" style="font-size:15px;margin-left:5px;margin-top:2px"></span> ');
      // });
      // $('.glyphicon').tooltip();
});
function CloseCreateWindow()
{
    if($(window.parent.document).find("button.close").length > 0) {
        $(window.parent.document).find("button.close:first").click();
    }
}