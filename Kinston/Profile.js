$(document).ready(function () {
    var contacttext = $('<p/>');
    contacttext.text("Select all that apply.");
    $("#ContentContainer_MainContent_MainContent_ContentBottom_MarketingOptionsPanel").children().eq(0).children().eq(0).after(contacttext);

    
    //$(".section-title").append('<a id="editinterests" href="/my-interests/" style="float: right;" class="btn btn-primary" data-role="button" data-theme="a">Edit Interests</a>');
    $('a[data-role=button]').button();

    $("#ProfileFormView").prepend('<a id="editdetails"  href="https://osis.kingston.ac.uk/urd/sits.urd/run/siw_lgn" target="_blank" class="btn btn-primary" data-role="button" style="float: right;" data-theme="a">Edit details in OSiS</a>');
    $("#ProfileFormView").prev().children().children().append($("#editdetails"))
    $('a[data-role=button]').button();

    $("#ccl3046_kapoints_label").after('<span title="These are your provisional KA points." class="fa fa fa-question-circle" style="font-size:15px;margin-left:5px;margin-top:2px"</span>');//fa-question-circle-o

    $("<link>")
        .attr({
            rel: "stylesheet",
            type: "text/css",
            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        })
        .appendTo("#ccl3046_kapoints_label");
    $("<link>")
        .attr({
            rel: "stylesheet",
            type: "text/css",
            href: "/css/glyphicons-font-awesome-migrate.min.css"
        })
        .appendTo("#ccl3046_kapoints_label");
        

    $("div.checkbox").each(function () {
        $(this).addClass("checkbox-primary");
        var input = $(this).children("label:first-child").children("span:first-child").children("input:first-child");
        input.parent().parent().attr("for", input.attr("id"));
        $(this).prepend(input);
    });

    //$("#ContentContainer_MainContent_MainContent_ContentBottom_marketFax").hide();
    //alert(navigator.onLine);
    $("#Interests").children().children().children().children("thead").children("tr").children("th").children("a").hide();

    /*
    $(".list-group-item[aria-label='Change Password']").hide();
    $(".list-group-item[aria-label='Change Email']").hide();
    $("a[title='Confirm Email']").parent().parent().hide();
    */
    $(".list-group-item[aria-label='Change Password']").hide();


    /*$.ajax({
        url: '/' + new Date().getTime() + '.html',
        dataType: 'jsonp',
        timeout: 5000,
        error: function(xhr) {
          if (xhr.status == 404) {
            //internet connection working
          } else {
          //internet is down (xhr.status == 0)
            $(".entity-grid[data-selected-view='49a898ee-1685-4d70-b604-de7d4de63e00']").hide().after(localStorage.getItem("Entity-Grid-Interest"));
            $(".view-loading.message.text-center").hide();
          }
        }
      });
    
      $(".entity-grid[data-selected-view='49a898ee-1685-4d70-b604-de7d4de63e00']").on("loaded", function() {
    
        //if(window.navigator.onLine==true){
        //localStorage.setItem("Entity-Grid-Interest",$(".entity-grid[data-selected-view='756fd81e-13f5-e711-80cc-00155d00328a']").prop("outerHTML").replace("opacity: 0;","").replace("entity-grid subgrid",""));
        // }
        $.ajax({
          url: '/' + new Date().getTime() + '.html',
          dataType: 'jsonp',
          timeout: 5000,
          error: function(xhr) {
            if (xhr.status == 404) {
              //internet connection working
              localStorage.setItem("Entity-Grid-Interest", $(".entity-grid[data-selected-view='49a898ee-1685-4d70-b604-de7d4de63e00']").prop("outerHTML").replace("opacity: 0;", "").replace("entity-grid subgrid", ""));
            } else {
              //internet is down (xhr.status == 0)
            }
          }
        });
    
        if ('serviceWorker' in navigator) {
          console.log('CLIENT: service worker registration in progress.');
          navigator.serviceWorker.register('/serviceworker9.js').then(function() {
            console.log('CLIENT: service worker registration complete.');
          }, function() {
            console.log('CLIENT: service worker registration failure.');
          });
        } else {
          console.log('CLIENT: service worker is not supported.');
        }
      });*/

    {% fetchxml AllInterests %}
    <fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true" returntotalrecordcount="true">
        <entity name="ccl1000_interests">
            <attribute name="ccl1000_interestsid" />
            <attribute name="ccl1000_name" />
            <order attribute="ccl1000_name" descending="false" />
            <filter type="and">
                <condition attribute="statecode" operator="eq" value="0" />
            </filter>
        </entity>
    </fetch>
    {% endfetchxml %}

    var myinterests = $("#ccl3046_myinterests").val();

    var checkboxhtml = "<div class=\"row col-md-12 col-xs-12 col-sm-12 col-lg-12\">";
    {% for interest in AllInterests.results.entities %}
    var interestid = "{{interest.ccl1000_interestsid}}";
    var interestname = "{{interest.ccl1000_name}}";
    checkboxhtml += "<div class=\"col-md-6 col-xs-12 col-sm-6 col-lg-6\"><div class=\"bigcheckbox bigcheckbox-primary\">";
    checkboxhtml += "<input id='" + interestid + "' onclick=\"SetInterest(this)\" type=\"checkbox\" ";
    if (myinterests.indexOf(interestid) >= 0) {
        checkboxhtml += "checked='checked'";
    }
    checkboxhtml += " />";
    checkboxhtml += "<label for='" + interestid + "'>" + interestname + "</label>";
    checkboxhtml += "</div></div>";
    {% endfor -%}
    checkboxhtml += "</div>";
    $("table[data-name='tab_2_section_1']").parent().append("<span class=\"xrm-attribute-value\">Select your interests by clicking on the boxes below.</span>");
    $("table[data-name='tab_2_section_1']").parent().append(checkboxhtml);

    //Student/Learner = Contact and Enrolment Status = Current
    {% fetchxml EnrolmentStatus %}
    <fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true" returntotalrecordcount="true">
        <entity name="ccl1000_recruitmentstatus">
            <attribute name="ccl1000_recruitmentstatusid" />
            <attribute name="ccl1000_name" />
            <order attribute="ccl1000_name" descending="false" />
            <filter type="and">
                <condition attribute="ccl1000_name" operator="eq" value="Current" />
            </filter>
        </entity>
    </fetch>
    {% endfetchxml %}
    {% if EnrolmentStatus.results.total_record_count > 0 %}
    {% fetchxml Enrolments %}
    <fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true" returntotalrecordcount="true">
        <entity name="ccl1000_enrolment">
            <attribute name="ccl1000_programmeid" />
            <attribute name="ccl1000_enrolmentid" />
            <attribute name="ccl1000_name" />
            <attribute name="ccl1000_departmentid" />
            <order attribute="ccl1000_name" descending="false" />
            <filter type="and">
                <condition attribute="statecode" operator="eq" value="0" />
                <condition attribute="ccl1000_studentlearnerid" operator="eq" value="{{user.id}}" />
                <condition attribute="ccl1000_enrolmentstatusid" operator="eq" uiname="Current" uitype="ccl1000_recruitmentstatus" value="{{EnrolmentStatus.results.entities.first.ccl1000_recruitmentstatusid}}" />
            </filter>
        </entity>
    </fetch>
    {% endfetchxml %}
    {% if Enrolments.results.total_record_count > 0 %}
    //console.log("{{Enrolments.results.entities.first.ccl1000_programmeid.name}}");
    $("#ccl1000_courseid_name").val("{{Enrolments.results.entities.first.ccl1000_programmeid.name}}");
    $("#ccl1000_courseid_name").parent().children(".text-muted").hide();
    {% if Enrolments.results.entities.first.ccl1000_departmentid != null %}
    {% assign record_id = Enrolments.results.entities.first.ccl1000_departmentid.id %}
    {% assign departmentRrd = entities.ccl1000_department[record_id] %}
    {% if departmentRrd != null %}
    {% if departmentRrd.ccl3007_faculty != null %}
    $("#ccl3046_facultyid_name").val("{{departmentRrd.ccl3007_faculty.name}}");
    $("#ccl3046_facultyid_name").parent().children(".text-muted").hide();
    {% endif %}
    {% endif %}
    {% endif %}
    {% endif %}
    {% endif %}
});

function SetInterest(item) {
    var seletedinterests = "";
    $("div.bigcheckbox").each(function () {
        var attr = $(this).children("input:first-child").attr("checked");
        if (typeof attr !== typeof undefined && attr !== false) {
            if (seletedinterests == "") {
                seletedinterests += $(this).children("input:first-child").attr("id");
            }
            else {
                seletedinterests += "," + $(this).children("input:first-child").attr("id");
            }
        }
    });
    $("#ccl3046_myinterests").val(seletedinterests);
}