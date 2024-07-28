$(document).ready(function() {
    // Hover Act Btn About-Song
    $('.act-abtSong').hover(function(){
        $(this).addClass('hover-act-abtSong')
    }, 

    function(){
        $(this).removeClass('hover-act-abtSong')
    });
    
    // Click Act Btn About-Song
    $('#btnAbtSong').on('click', function(){
        $(this).html($(this).html() === 'Expand' ? 'Collapse' : 'Expand');

        $('#actIcon').css({
            transition: '350ms ease',
            transform: $(this).html() === 'Expand' ? 'rotate(0deg)' : 'rotate(180deg)'
        });

        $('.about_songP').toggleClass('expanded');

        $('.act-abtSong').css({
            marginTop: $(this).html() === 'Collapse' ? '22.5em' : '0em',
        });
    });

    // Hover Act Popular Song
    $('.scroll > i').hover(function(){
        $(this).toggleClass('hover-act-ppSong')
    });
    $('.comprehensive').hover(function(){
        $(this).toggleClass('hover-act-ppSong')
    });

    // Act Chevron Popular Song
    const wrapperPPSong = $('.wrapper_ppsong');
    const songHoriz = $('.song_horizontal');
    const chevronL = $('.bi-chevron-left');
    const chevronR = $('.bi-chevron-right');

    let currentIndex = 0;
    let sizePPSong = 4; let mobileSizePPSong = 2;
    let totalItems = songHoriz.length;

    if ($(window).width() <= 768) {
        sizePPSong = mobileSizePPSong;
    }

    chevronL.on('click', function() {
        currentIndex -= sizePPSong;
        if (currentIndex < 0) {
            currentIndex = totalItems - sizePPSong;
        }
        wrapperPPSong.animate({
            scrollLeft : currentIndex * songHoriz.width()
        }, 500);
    });

    chevronR.on('click', function() {
        currentIndex += sizePPSong;
        if (currentIndex >= totalItems) {
            currentIndex = 0;
        }
        wrapperPPSong.animate({
            scrollLeft: currentIndex * songHoriz.width()
        }, 500);
    });

    // Hover .song_horizontal 
    songHoriz.hover(
        function(){
            $(this).css({
                transition: '350ms ease',
                transform: 'translateY(-.5em)'
            });
        },function(){
            $(this).css({
                transform: 'translateY(0)'
            });
        }
    );

    $('.album_horizontal').hover(
        function(){
            $(this).css({
                transition: '350ms ease',
                transform: 'translateY(-.5em)'
            });
        },function(){
            $(this).css({
                transform: 'translateY(0)'
            });
        }
    );

    $('.recommended_horizontal').hover(
        function(){
            $(this).css({
                transition: '350ms ease',
                transform: 'translateY(-.5em)'
            });
        },function(){
            $(this).css({
                transform: 'translateY(0)'
            });
        }
    );

    // Hover icon Links Artist
    $('.links_artist table i').hover(
        function(){
            $(this).css({
                transform: 'scale(1.2)'
            });
        }, function(){
            $(this).css({
                transform: 'scale(1)'
            });
        }
    );
});
