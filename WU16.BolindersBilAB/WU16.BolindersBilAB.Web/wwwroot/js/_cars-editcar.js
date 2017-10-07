﻿$(function () {
    $(".existing-images").sortable({
        handle: 'i.move-image',
        tolerance: -200
    });

    $(".open-close-eximg").on("click", function (e) {
        $(".existing-images").toggle();
        if ($(".open-close-eximg").children("i.fa").hasClass("fa-chevron-up")) {
            $(".open-close-eximg").children("i.fa").removeClass("fa-chevron-up").addClass("fa-chevron-down");
        }
        else {
            $(".open-close-eximg").children("i.fa").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        }
    });

    $(".remove-image").on("click", function (e) {
        if (confirm('Bekräfta borttagning')) {
            $(e.target).parent(".ex-img-container").remove();
        }
    })
});