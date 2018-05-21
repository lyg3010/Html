$(document).ready(function () {
    $(".entity-grid").on("loaded", function () {
        if ($("#ccl1007_portalstep5").val() != "890240000")
            $("#ccl1007_portalstep5").val('890240000').addClass("dirty");
        SetNavStatus();
    });

    $("div.entity-grid.entitylist[data-selected-view='36791f72-ce92-e711-8103-70106faa6a31']").on("loaded", function () {
        $("a[aria-label='Name']").eq(0).click();
    });

});