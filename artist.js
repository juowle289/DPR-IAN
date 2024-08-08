$(document).ready(function() {
    // Hover Act Btn About-Song
    $('.act-abtSong, .act-abtArtist').hover(function(){
        $(this).addClass('hover-act-abtSong')
    }, 

    function(){
        $(this).removeClass('hover-act-abtSong')
    });
    
    // Click Act Btn About-Song
    $('#btnAbtSong').on('click', function(){
        $(this).html($(this).html() === 'Expand' ? 'Collapse' : 'Expand');

        $('.bi-caret-down-fill').css({
            transition: '350ms ease',
            transform: $(this).html() === 'Expand' ? 'rotate(0deg)' : 'rotate(180deg)'
        });

        $('.about_songP').toggleClass('expandAbtSong');
        $('.about_songImg').toggle();

        $('.act-abtSong').css({
            marginTop: $(this).html() === 'Collapse' ? '22.5em' : '0em',
        });
    });

    // Click Act Btn About-Artist
    $('#btnAbtArtist').on('click', function(){
        $(this).html($(this).html() === 'Expand' ? 'Collapse' : 'Expand');

        $('.bi-caret-down-fill').css({
            transition: '350ms ease',
            transform: $(this).html() === 'Expand' ? 'rotate(0deg)' : 'rotate(180deg)'
        });

        $('.about_artistP').toggleClass('expandAbtSong');
        $('.about_artistImg').toggle();

        $('.act-abtArtist').css({
            marginTop: $(this).html() === 'Collapse' ? '22.5em' : '0em',
        });
    });

    if ($(window).width() <= 768) {

        $('#btnAbtSong').on('click', function() {
            $('.about_songP').toggleClass('expandAbtSong_mobile');
            
            $('.act-abtSong').css({
                position:$(this).html() === 'Collapse' ? 'fixed' : 'relative',
                bottom: '2em',
                zIndex : '101',
            });
        });
        
        $('#btnAbtArtist').on('click', function() {
            $('.about_artistP').toggleClass('expandAbtSong_mobile');
            
            $('.act-abtArtist').css({
                position:$(this).html() === 'Collapse' ? 'fixed' : 'relative',
                bottom: '2em',
                zIndex : '101',
            });
        });  

        
    }

    // Hover Act Popular Song
    $('.scroll > i').hover(function(){
        $(this).toggleClass('hover-act-ppSong')
    });
    $('.comprehensive').hover(function(){
        $(this).toggleClass('hover-act-ppSong')
    });

    // Act Chevron Popular Song
    let currentIndexPPSong = 0;
    let sizePPSong = 4; let mobileSizePPSong = 2;
    let totalItemsPPSong = $('.song_horizontal').length;

    if ($(window).width() <= 768) {
        sizePPSong = mobileSizePPSong;
    }

    $('.chevronPPsongL').on('click', function() {
        currentIndexPPSong -= sizePPSong;
        if (currentIndexPPSong < 0) {
            currentIndexPPSong = totalItemsPPSong - sizePPSong;
        }
        $('.wrapper_ppsong').animate({
            scrollLeft : currentIndexPPSong * $('.song_horizontal').width()
        }, 500);
    });

    $('.chevronPPsongR').on('click', function() {
        currentIndexPPSong += sizePPSong;
        if (currentIndexPPSong >= totalItemsPPSong) {
            currentIndexPPSong = 0;
        }
        $('.wrapper_ppsong').animate({
            scrollLeft: currentIndexPPSong * $('.song_horizontal').width()
        }, 500);
    });

    // Act Chevron Albums
    let currentIndexAlbums = 0;
    let sizeAlbums = 6;
    let totalItemsAlbums = $('.album_horizontal').length;

    $('.chevronAlbumL').on('click', function() {
        currentIndexAlbums -= sizeAlbums;
        if (currentIndexAlbums < 0) {
            currentIndexAlbums = totalItemsAlbums - sizeAlbums;
        }
        $('.wrapper_album').animate({
            scrollLeft : currentIndexAlbums * $('.album_horizontal').width()
        }, 500);
    });

    $('.chevronAlbumR').on('click', function() {
        currentIndexAlbums += sizeAlbums;
        if (currentIndexAlbums >= totalItemsAlbums) {
            currentIndexAlbums = 0;
        }
        $('.wrapper_album').animate({
            scrollLeft: currentIndexAlbums * $('.album_horizontal').width()
        }, 500);
    });


    let currentIndexRecommended = 0;
    let sizeRecommended = 6;
    let totalItemsRecommended = $('.recommended_horizontal').length;

    $('.chevronRecommendedL').on('click', function() {
        currentIndexRecommended -= sizeRecommended;
        if (currentIndexRecommended < 0) {
            currentIndexRecommended = totalItemsRecommended - sizeRecommended;
        }
        $('.wrapper_recommended').animate({
            scrollLeft : currentIndexRecommended * $('.recommended_horizontal').width()
        }, 500);
    });

    $('.chevronRecommendedR').on('click', function() {
        currentIndexRecommended += sizeRecommended;
        if (currentIndexRecommended >= totalItemsRecommended) {
            currentIndexRecommended = 0;
        }
        $('.wrapper_recommended').animate({
            scrollLeft: currentIndexRecommended * $('.recommended_horizontal').width()
        }, 500);
    });

    // Hover Element - Horizontal 
    $('.song_horizontal, .album_horizontal, .recommended_horizontal').hover(
        function(){
            $(this).css({
                transition: '350ms ease',
                transform: 'translateY(-.5em)',
                border: 'var(--border-main)',
            });
        },function(){
            $(this).css({
                transform: 'translateY(0)',
                border: 'var(--border-gray)',
            });
        }
    );
    if ($(window).width() <= 768) {
        $('.song_horizontal, .album_horizontal, .recommended_horizontal').hover(
            function(){
                $(this).css({
                    transition: '350ms ease',
                    transform: 'none'
                });
            },function(){
                $(this).css({
                    transform: 'none'
                });
            }
        );

        
    }

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

    // border header-menu
    $(window).on('scroll', function () {
        var scrollPos = $(document).scrollTop();
        var windowHeight = $(window).height();
        var middleOfWindow = scrollPos + windowHeight / 2;

        $('.header-menu li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));

            if (refElement.position().top <= middleOfWindow && refElement.position().top + refElement.height() > scrollPos) {
                $('.header-menu li').removeClass('active');
                currLink.parent().addClass('active');
            } else {
                currLink.parent().removeClass('active');
            }
        });
    });
});
