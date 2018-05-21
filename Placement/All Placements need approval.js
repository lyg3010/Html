$(document).ready(function () {
    $(".entity-grid[data-selected-view='b78b7a5e-2337-e811-80cd-00155d003499']").on("loaded", function () {
        $('td[data-attribute="ccl1008_candidate"]').children().unbind();
        $("#MainContainer").show();
    });
    $("#PageContent").append('<a href="../my-placements-need-approval/" class="btn btn-primary">View only my Students</a><br><br>');
    
});