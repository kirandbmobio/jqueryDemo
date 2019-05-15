$(document).ready(function () {
    $('h3').siblings().css({ "color": "red" });
    $('h2').siblings('p').css({ "color": "blue" });
    $('p').next().css({ "color": "yellow" });
    $('p').nextAll().css("color", "green");
    $('p').nextUntil('h2').css({ "color": "black" });
    $('h3').prev().css({ "color": "orange" });
})