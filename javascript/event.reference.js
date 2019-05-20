$(document).ready(function () {
    $(".current-target").click(function (event) {
        alert(event.currentTarget === this);
    });
    $("p").each(function (i) {
        $(this).on("click", { x: i }, function (event) {
            alert("The " + $(this).index() + ". paragraph has data: " + event.data.x);
        });
    });
    $(".delegate-event").on("click", ".change-color", function (event) {
        $(event.delegateTarget).css("background-color", "pink");
    });
    $("a").click(function (event) {
        event.preventDefault();
        alert("Was preventDefault() called: " + event.isDefaultPrevented());
    });
    $(".propogation").click(function (event) {
        event.stopImmediatePropagation();
        alert("Was event.stopImmediatePropagation() called: " + event.isImmediatePropagationStopped());
    });
    $(".custom-namespace").on("own.namespace1", function (event) {
        console.log(event);
        alert(event.namespace);
    });
    $(".custom-namespace").click(function (event) {
        $(this).trigger("own.namespace1");
    })

});