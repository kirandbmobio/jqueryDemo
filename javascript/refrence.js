$(document).ready(function () {
    $('body *').css("background-color", "yellow");
    //both class intro and demo would be pink
    $(".intro, .demo").css("background-color", "pink");
    //change first p element background color
    $("p:first").css("background-color", "blue");
    //p child of every parent 
    $("p:first-child").css("background-color", "orange");
    //
    $("div > span").css("background-color", "red");
    //animate 
    function aniDiv() {
        $("div:eq(3)").animate({ width: "50%" }, "slow");
        $("div:eq(3)").animate({ width: "100%" }, "slow", aniDiv);
    }
    aniDiv();
    $(".btn1").click(function () {
        $(":animated").css("background-color", "red");
    });
    $("p:hidden").show(3500);
    $(":empty").css("background-color", "green");
    $("#start").click(function () {
        $(".animation").animate({ height: 300 }, 1500);
        $(".animation").animate({ width: 300 }, 1500);
        $(".animation").animate({ height: 100 }, 1500);
        $(".animation").animate({ width: 100 }, 1500);
    });
    $("#stop").click(function () {
        $(".animation").clearQueue();
    });
    $(":header").css("background-color", "grey");
    $('p:contains("KiranKumar")').css("color", "red");
    $("[href]").css("color", "black");
    $("p[title|='Tomorrow']").css("background-color", "green");
    $("p[title~='You']").css("background-color", "white");
    $(":radio").wrap("<span style='background-color:grey'>");

    $(":checked").wrap('<span style="background-color:blue">');
    $("[href$='.org']").css("background-color", "pink");

    $("#start").click(function () {
        $("div").animate({ height: 300 }, 3000);
        $("div").animate({ width: 300 }, 3000);
    });
    $("#complete").click(function () {
        $("div").finish();
    });
    //Events
    $('.clickMe').bind('click', function () {
        alert("thank you for click me!");
    });
    $('.change-event').change(function () {
        alert('textbox change its text');
    })
})