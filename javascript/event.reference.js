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
        alert(event.namespace);
    });
    $(".custom-namespace").click(function (event) {
        $(this).trigger("own.namespace1");
    });
    $(document).mousemove(function (event) {
        $(".position").text("X: " + event.pageX + ", Y: " + event.pageY);
    });
    $('.msg').mouseenter(function (event) {
        $('.msg').html('related target is' + event.relatedTarget.onmouseup);
    });
    $('.result').click(function () {
        return "Healoo THeeerrererr";
    })
    $('.result').click(function (event) {
        $('.change-result').html(event.result);
    });
    $(".stop-immediate").click(function (event) {
        event.stopImmediatePropagation();
        alert("Event handler 1 executed");

    });
    $(".stop-immediate").click(function (event) {
        alert("Event handler 2 executed");
    });
    $(".stop-immediate").click(function (event) {
        alert("Event handler 3 executed");
    });
    $('input').keydown(function (event) {
        $('.key').html("Key value is" + event.which);
    });
    $("input").focus(function () {
        $(".span").css("display", "inline").fadeOut(2000);
    });
    $(".pchange").on("click", function () {
        $(this).css("background-color", "pink");
    });
    $(".remove").click(function () {
        $(".pchange").off("click");
    });
    let obj = {
        name: 'kirankumar',
        fname: 'Dhirubhai',
        home: 'chokdi',
        test: function () {
            $(".abc").before("<br>Name: " + this.name + "<br> Father Name: " + this.fname);
        }
    }
    $('.testFun').click($.proxy(obj, "test"));
    let x = 0;
    $(window).resize(function () {
        $(".resize").text(x += 1);
    });
    $('.offset').click(function () {
        var x = $('.offsetp').offset();
        $('.offsetp').append(" TOP :" + x.top + " Left :" + x.left);
    });
    $('.offsetbtn').click(function () {
        $('.offsetParent').offsetParent().css("background-color", "red");
    })
});