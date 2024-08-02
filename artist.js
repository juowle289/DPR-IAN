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

    // Hover .song_horizontal 
    $('.song_horizontal').hover(
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
