$(document).ready(function(){ 
  ReferenceTypeChangeEvent();   
  $("#ccl1007_referencetype").change(function()
  {     
   ReferenceTypeChangeEvent(); 
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

function ReferenceTypeChangeEvent() 
{
  if($("#ccl1007_referencetype").val() == "890240000")   
  {     
    $("#ccl1007_reference").parent().parent().parent().show();
    $("#AttachFile").parent().parent().parent().show();
  }
  else if($("#ccl1007_referencetype").val() == "890240001") 
  {     
    $("#ccl1007_reference").parent().parent().parent().hide();
    $("#AttachFile").parent().parent().parent().hide();
  }
  else if($("#ccl1007_referencetype").val() =='') 
  {     
    $("#ccl1007_reference").parent().parent().parent().show();
    $("#AttachFile").parent().parent().parent().show();
  }
} 