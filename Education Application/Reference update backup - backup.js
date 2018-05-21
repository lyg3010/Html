$(document).ready(function(){ 
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

  $("#ccl1007_contactpriortooffer_label").parent().attr('class', 'info required');

  $("html, body").animate({ scrollTop: $(document).height() }, 500);
  DocumentChange();
});
function DocumentChange()
{
  $("#ReferenceDocument").hide();
  $("#ReferenceDocument").css("border", "0px");
  $("#ReferenceDocument > div.entity-grid").eq(0).on("loaded", function () {
    $("#ReferenceDocument").find("div.toolbar-actions").eq(0).removeClass("pull-right");
    $("#ReferenceDocument").find("div.toolbar-actions").eq(0).addClass("pull-left");
    $("#ReferenceDocument").find("div.grid-actions").eq(0).css("border-bottom", "none");
    $("#ReferenceDocument").find("div.view-grid").eq(0).hide();
    $("#ReferenceDocument").find("div.view-empty").eq(0).hide();
    $("#ReferenceDocument").find("div.view-loading").eq(0).hide();
    $("#ReferenceDocument").find("div.view-pagination").eq(0).hide();
    $("#ReferenceDocument").show();
  });
  
  //Redirect to this entity form and append doctype to set default document type on application document create dialog
  $("#ReferenceDocument").find('.modal').eq(0).unbind("shown.bs.modal");
  $("#ReferenceDocument").find('.modal').eq(0).on('shown.bs.modal',function(){
    var directurl = "/_portal/modal-form-template-path/7b138792-1090-45b6-9241-8f8d96d8c372?entityformid=f5127780-a296-e711-8103-70106faa6a31&languagecode=1033&refentity=ccl1000_application";
    directurl += "&refid=" + $("#References", parent.document).find("div.entity-grid").eq(0).attr("data-ref-id");
    directurl += "&refrel=ccl1007_ccl1007_applicationdocument_ccl1000_appli";
    directurl += "&doctype=b6869e51-07a5-e711-810b-70106faa6a11";
    $(this).find('iframe').attr('src', directurl);
  });
}