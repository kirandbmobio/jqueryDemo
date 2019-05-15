$(document).ready(function () {
    $("#btn1").click(function () {
        alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function () {
        alert("HTML: " + $("#test").html());
    });
    $('#submit').click(function () {
        $('#name').append(" " + $('#fname').val());
        $('#password').append(" " + $('#pass').val());
    });
    $('#link').click(function () {
        let google = $('#google').attr('href');
        $('#clicklink').append(" " + google);
        $('#google').attr("href", "jquery.com");
        let jquery = $('#google').attr('href');
        $('#updatedLink').append(" " + jquery);
    });
    $('#remove').click(function () {
        $('.child').empty();
    });
    $('#changeColor').click(function () {
        $('p').addClass('blue');
    });
    $('#bgcolor').click(function () {
        $('body').toggleClass('bgcolor blue');
    });
    $('#css').click(function () {
        $('#setCss').css({ "background-color": "pink", "font-size": "150%" });
    });
    $('.dimension').click(function () {
        let txt = "";
        txt += "Height of div:" + $('.div1').height() + "<br>";
        txt += "Width of div:" + $('.div1').width() + "<br>";
        txt += "Inner height of div:" + $('.div1').innerHeight() + "<br>";
        txt += "Outer height of div:" + $('.div1').outerHeight();
        $('.div1').html(txt);
    });
    $(".dimension1").click(function () {
        $(".div1").width(500).height(500);
    });
    $(".docwind").click(function () {
        var txt = "";
        txt += "Document width/height: " + $(document).width();
        txt += "x" + $(document).height() + "\n";
        txt += "Window width/height: " + $(window).width();
        txt += "x" + $(window).height();
        alert(txt);
    });
})