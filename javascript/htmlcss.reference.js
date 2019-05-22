$(document).ready(function () {
    $('.div').add('.h1').add('.p').css("background-color", "yellow");
    $("ul").children().css({ "color": "red", "border": "2px solid red" }).append('children');
    $("span").closest("ul").css({ "color": "blue", "border": "2px solid blue" }).append("closest");
    $('.content').click(function () {
        $("div").contents().filter('name').wrap('<i>kiran</i>');
    });
    $('.div').find('name').css('color', "blue");
    $("li").has("span").css("color", "yellow");

})