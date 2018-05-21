$(document).ready(function() {
  $("#ApplicationDocument").hide();
  $("#ApplicationDocument").css("border", "0px");
  $("#ApplicationDocument > div.entity-grid").eq(0).on("loaded", function () {
    $("#ApplicationDocument").find("div.toolbar-actions").eq(0).removeClass("pull-right");
    $("#ApplicationDocument").find("div.toolbar-actions").eq(0).addClass("pull-left");
    $("#ApplicationDocument").find("div.grid-actions").eq(0).css("border-bottom", "none");
    $("#ApplicationDocument").find("div.view-grid").eq(0).hide();
    $("#ApplicationDocument").find("div.view-empty").eq(0).hide();
    $("#ApplicationDocument").find("div.view-loading").eq(0).hide();
    $("#ApplicationDocument").find("div.view-pagination").eq(0).hide();
    $("#ApplicationDocument").show();
  });
  
  //Adding field level help text 
  $("head").append("<link>");
  var css = $("head").children(":last");
  css.attr({
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  });

  $('.description').each(function() {
    var text = $(this).text();
    $(this).hide();
    $(this).next().children(":last-child").after('<span title="' + text + '" class="fa fa-question-circle-o" style="font-size:15px;margin-left:5px;margin-top:2px"></span> ');
  });
  $('.fa').tooltip();
});

$(document).ready(function(){ 
  TypeChangeEvent();
  //Check has selected note  
  {% assign actionrequsetid = request.params['id'] %}
	{% assign actionrequset = entities.ccl1007_actionrequest[actionrequsetid] %}
	{% if actionrequset.ccl1007_sourceid %}
	{% assign sourceid = actionrequset.ccl1007_sourceid.id %}
	{% assign source = entities.ccl1007_applicationprerequisite[sourceid] %}  
	{% assign isrequired=source.ccl1007_isrequired %}
	var required="{{isrequired}}";
	if(required=="true"&&$("#ccl1007_type").val()==890240000)//Action Request Type Equals "Document Upload"
	{
	$("#AttachFileLabel").parent().attr("class","info required");
	if (window.jQuery) {
	(function ($) {
      if (typeof (Page_Validators) == 'undefined') return;
      // Create new validator
      var newValidator = document.createElement('span');
      newValidator.style.display = "none";
      newValidator.id = "attachfileValidator";
      newValidator.controltovalidate = "AttachFile";
      newValidator.errormessage = "AttachFile is a required field.";
      newValidator.validationGroup = ""; // Set this if you have set ValidationGroup on the form
      newValidator.initialvalue = "";
      newValidator.evaluationfunction = function () {
        if ($("#AttachFile").get(0).files&&$("#AttachFile").get(0).files[0]) 
		{
		return true;
		}
		else
		{
		return false;
		}
      };
 
      // Add the new validator to the page validators array:
      Page_Validators.push(newValidator);
 
      // Wire-up the click event handler of the validation summary link
   }(window.jQuery));
}
	}
	{% endif %}
  	
  $("#ccl1007_type").change(function()
  {     
   TypeChangeEvent(); 
  });

  var doctypeid = $('#ccl1007_documenttypeid').val();
    //Redirect to this entity form and append doctype to set default document type on application document create dialog
    $("#ApplicationDocument").find('.modal').eq(0).unbind("shown.bs.modal");
    $("#ApplicationDocument").find('.modal').eq(0).on('shown.bs.modal',function(){
      var directurl = "/_portal/modal-form-template-path/7b138792-1090-45b6-9241-8f8d96d8c372?entityformid=f5127780-a296-e711-8103-70106faa6a31&languagecode=1033&refentity=ccl1000_application";
      directurl += "&refid=" + "{{request.params['id']}}";
      directurl += "&refrel=ccl1007_ccl1007_actionrequest_ccl1007_applicationdocument_ActionRequest";
      directurl += "&doctype="+doctypeid;
      $(this).find('iframe').attr('src', directurl);
    });
});

function TypeChangeEvent() 
{
 if($("#ccl1007_type").val() =='')
  {     
    $("#ccl1007_datecompletedapproved_description").parent().parent().parent().hide();
    $("#ccl1007_documenttypeid").parent().parent().parent().hide();
    $("#ccl1007_dateuploaded_description").parent().parent().parent().hide();
    $("#ccl1007_completed_0").parent().parent().parent().hide();
  }
  else if($("#ccl1007_type").val() == "890240000")   
  {     
    $("#ccl1007_documenttypeid").parent().parent().parent().show();
    $("#ccl1007_dateuploaded_description").parent().parent().parent().show();
	$("#ccl1007_datecompletedapproved_description").parent().parent().parent().show();
	$("#ccl1007_completed_0").parent().parent().parent().hide();
	$('#ccl1007_datecompletedapproved_label').text('Date Approved');
  }
 
  else if($("#ccl1007_type").val() == "890240001") 
  {     
    $("#ccl1007_documenttypeid").parent().parent().parent().hide();
    $("#ccl1007_dateuploaded_description").parent().parent().parent().hide();
	$("#ccl1007_datecompletedapproved_description").parent().parent().parent().show();
	$("#ccl1007_completed_0").parent().parent().parent().show();
	$('#ccl1007_datecompletedapproved_label').text('Date Completed');
  }
}