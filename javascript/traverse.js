$(document).ready(function () {
    $('span').parent().css({ "color": "red", "border": "2px solid blue" });
    $('span').parents().css({ "color": "yellow", "border": "2px solid green" });
    $('span').parents("ul").css({ "color": "pink", "border": "3px solid grey" });
    $('span').parentsUntil("ul").css({ "color": "orange", "border": "2px solid red" });
    $(".descendants").children("p.first").css({ "color": "red", "border": "2px solid red" });
    $(".descendants").find('span').css({ "color": "red", "border": "2px solid pink" });
})