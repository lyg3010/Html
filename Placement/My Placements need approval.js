$(document).ready(function () {
    $(".entity-grid[data-selected-view='ddc54834-874e-e811-80cd-00155d003499']").on("loaded", function () {
        $('td[data-attribute="ccl1008_candidate"]').children().unbind();
        $("#MainContainer").show();
    });
    $("#PageContent").append('<a href="../all-placements-need-approval/" class="btn btn-primary">View All Students</a><br><br>'); 
});