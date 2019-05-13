$(document).ready(function () {
    $('.btn').click(function () {
        $('*').hide();
    });
    $('.btn1').click(function () {
        $('#pid').hide(1000);
    });
    $('.btn2').click(function () {
        $('#pid').show(1000);
    });
    $('.btn3').click(function () {
        $('.pclass').hide(1000);
    });
    $('.btn4').click(function () {
        $('.pclass').show(1000);
    });
    $('.this').click(function () {
        $(this).hide(1000);
    });
    $('.hidehref').click(function () {
        $('[href]').hide(1000);
    });
    $('tr:even').css('background-color', "yellow");
    $('tr:odd').css('background-color', "grey");

    //events
    //double click event
    $('.dbclick').dblclick(function () {
        $(this).hide();
    })
    //mouse enter event
    $('.p1').mouseenter(function () {
        alert('you entered p1!');
    })
    $('.p1').mouseleave(function () {
        alert('you leave p1!');
    });
    $(".p1").mousedown(function () {
        alert("Mouse down over p1!");
    });
    $(".p1").mouseup(function () {
        alert("Mouse up over p1!");
    });
    //hover
    $('.hover').hover(function () {
        $(this).css('background-color', "yellow");
    }, function () {
        $(this).css('background-color', "grey");
    });
    //focus
    $('.focus').focus(function () {
        $(this).css('background-color', 'grey');
    })
    //blur
    $(".focus").blur(function () {
        $(this).css("background-color", "#ffffff");
    });
    //on event
    $(".onevent").on("click", function () {
        $(this).hide();
    });
    $("p").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function () {
            $(this).css("background-color", "lightblue");
        },
        click: function () {
            $(this).css("background-color", "yellow");
        }
    });
    //toggle
    $('.toggle').click(function () {
        $('p.toggle').toggle();
    })
    //fadein
    $('.fadein').click(function () {
        $('.div1').fadeIn();
        $('.div2').fadeIn('slow');
        $('.div3').fadeIn(2000);
    });
    //fadeout
    $('.fadeout').click(function () {
        $('.div1').fadeOut();
        $('.div2').fadeOut('slow');
        $('.div3').fadeOut(2000);
    });
    //fadetoggle
    $('.fadetoggle').click(function () {
        $('.div1').fadeToggle();
        $('.div2').fadeToggle('slow');
        $('.div3').fadeToggle(2000);

    });
    $('.fadeto').click(function () {
        $('.divcolor').fadeTo('slow', 0.15);
    })
    // $('.myname').click(function () {
    //     $('.panel').slideDown(3000);
    // });
    // $('.myname').click(function () {
    //     $('.panel').slideUp(6000);
    // });
    //slide toggle
    $('.myname').click(function () {
        $('.panel').slideToggle();
    });
    $('.animate').click(function () {
        $('.block').animate({
            left: '250px',
            opacity: 0.5,
            height: '+=200px',
            width: '+=200px'
        });
    });
    $('.divanimate').click(function () {
        let div = $('.divblock');
        div.animate({ height: '100px', opacity: 0.3 }, 'slow');
        div.animate({ width: '200px', opacity: 0.5 }, 'slow');
    })
})