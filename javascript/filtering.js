$(document).ready(function () {
    $('#first').click(function () {
        $("div").first().css("background-color", "yellow");
    });
    $('#last').click(function () {
        $("div").last().css("background-color", "yellow");
        $("div").first().css("background-color", "white");
    });
    $('.index').click(function () {
        let test = prompt("Please enter index number", "");
        $('p').eq(test).css({ "color": "white", "background-color": "green" });
    });
    $('.classWise').click(function () {
        $('p').filter('.intro').css({ "color": "pink", "background-color": "blue" });
    });
})