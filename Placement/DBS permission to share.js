{% fetchxml Applications %}  
<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false" returntotalrecordcount="true">
  <entity name="ccl1000_application">
    <attribute name="ccl1000_studentlearnerid" />
    <attribute name="ccl1000_programmeid" />
    <attribute name="statuscode" />
    <attribute name="ccl1000_applicationid" />
    <attribute name="createdon" />
    <order attribute="createdon" descending="true" />
    <filter type="and">
	  <condition attribute="statecode" operator="eq" value="0" />
      <condition attribute="ccl1000_studentlearnerid" operator="eq" value="{{user.id}}" />
    </filter>
  </entity>
</fetch>
{% endfetchxml%} 
$(document).ready(function () {
    {% if Applications.results.total_record_count > 0 %}
    {% if Applications.results.entities[0].ccl1000_programmeid != null %}
    $("#fullname_label").parent().parent().parent().after('<tr> <td colspan="1" rowspan="1" class="clearfix cell text form-control-cell"> <div class="info"> <label for="courseofstudy" id="courseofstudy_label">Course of Study</label> </div> <div class="control"> <input name="ctl00$ContentContainer$EntityFormControl_5e27571ec546e811811d70106faae7f1$EntityFormControl_5e27571ec546e811811d70106faae7f1_EntityFormView$courseofstudy" value="{{Applications.results.entities[0].ccl1000_programmeid.name}}" maxlength="50" id="courseofstudy" class="text form-control  readonly" onchange="setIsDirty(this.id);" readonly="readonly" type="text"> </div> </td> <td colspan="1" rowspan="1" class="clearfix cell"></td> <td class="cell zero-cell"></td> </tr>');
    {% endif %}
    {% endif %}
    $("#MainContainer").show();
});