// $(document).ready(function() {
// todo Hamburger
$('#hamburger-label').on('click', function() {
    const bars = $('.bars');
    const barsIcon = $('#bars-icon');
    const hbgCheckbox = $('#hamburger');
    
    if (hbgCheckbox.is(':checked')) {
        barsIcon.css({
        transform: 'rotate(180deg)',
        color: '#feec93',
        });
    
        bars.css({
        transform: 'translateX(-15em)',
        opacity: '1',
        boxShadow: '-19em 0em 10px rgba(0, 0, 0, 0.6)',
        zIndex: '20'
        });

        // Remove scroll event Header
        if($(window).width() <= 768){
            $(window).off('scroll');
        }
    } else {
        barsIcon.css({
        transform: 'rotate(0deg)',
        color: '#fff',
        });
    
        bars.css({
        transform: 'translateX(0em)',
        opacity: '0',
        boxShadow: 'none',
        zIndex: '-1',
        });
        
        if($(window).width() <= 768){
            var valueScrollTop = 0;
            
            $(window).scroll(function() {
                const scrollPos = $(window).scrollTop();
                
                if (scrollPos > valueScrollTop) {
                    // Cuộn lên
                    $('header').removeClass('effHeader');
                    $('header').css({
                        transform: 'translateY(-100%)',
                        transition: '400ms ease',
                    });
                    // $('header').slideUp({
                        // duration: 500,
                        // easing: 'swing'
                    // });
                } else {
                    // Cuộn xuống
                    $('header').addClass('effHeader');
                    $('header').css({
                        transform: 'translateY(0)',
                    });
            
                    // $('header').slideDown({
                        // duration: 500,
                        // easing: 'swing'
                    // });
                }
                
                valueScrollTop = scrollPos;
            });
        }
    }
});


if($(window).width() <= 768){
    var valueScrollTop = 0;
    
    $(window).scroll(function() {
        const scrollPos = $(window).scrollTop();
        
        if (scrollPos > valueScrollTop) {
            // Cuộn lên
            $('header').removeClass('effHeader');
            $('header').css({
                transform: 'translateY(-100%)',
                transition: '400ms ease',
            });
            // $('header').slideUp({
                // duration: 500,
                // easing: 'swing'
            // });
        } else {
            // Cuộn xuống
            $('header').addClass('effHeader');
            $('header').css({
                transform: 'translateY(0)',
            });
    
            // $('header').slideDown({
                // duration: 500,
                // easing: 'swing'
            // });
        }
        
        valueScrollTop = scrollPos;
    });
}

//todo  Search icon
const search = document.getElementById('search');
const searchBox = document.getElementById('search-box');

search.addEventListener('change', function(){
    if(this.checked) {
        searchBox.style.display = "block";
        searchBox.style.backgroundColor = "#eff0f3";
        searchBox.style.marginRight = "0em";
        searchBox.style.width = "10em";
        searchBox.style.transition = "350ms";
        searchBox.style.padding = "0 0.6em 0";
        searchBox.style.position = "relative";
    }else {
        searchBox.style.width = "0";
        searchBox.style.backgroundColor = "#0000";
        searchBox.style.marginRight = "-1.15em";
        searchBox.style.padding = "0";
        searchBox.style.transition = "350ms";
    }
});


// TODO Suggest   
const searchSuggest = $('#search-suggest');

const artists = [
    {
        avtArtist : 'Image-source/Artist/mtp-avtArtist.jpg',
        nameArtist: 'Sơn Tùng M-TP',
        link      : 'Son-Tung-MTP.html' 
    },
    {
        avtArtist : 'Image-source/Artist/TheWeeknd-avtArtist.jpg',
        nameArtist: 'The Weeknd',
        link      : 'The-Weeknd.html' 
    },
    {
        avtArtist : 'Image-source/Artist/billieEilish-avtArtist.jpg',
        nameArtist: 'Billie Eilish',
        link      : '#' 
    },
    {
        avtArtist : 'Image-source/Artist/DPRIAN-avtartist.jpg',
        nameArtist: 'DPR IAN',
        link      : '#' 
    },
];

const songs = [
    {
        imgSrc: 'Image-source/Collections/MoodswingsInThisOrder.jpg',
        title : 'Nerves',
        artist: 'DPR IAN',
        views : '162.9K',
        link  : 'nerves.html'
    },
    {
        imgSrc: 'Image-source/Collections/MITO.png',
        title : 'Ballroom Extravaganza',
        artist: 'DPR IAN',
        views : '611.1K',
        link  : 'ballroomExtravaganza.html'
    },
    {
        imgSrc: 'Image-source/Collections/Chungtacuatuonglai.jpg',
        title : 'Chúng Ta Của Tương Lai',
        artist: 'Sơn Tùng M-TP',
        views : '6.3M',
        link  : 'chungTaCuaTuongLai.html'
    },
    {
        imgSrc: 'Image-source/Collections/hayTraoChoAnh.jpg',
        title : 'Hãy Trao Cho Anh',
        artist: 'Sơn Tùng M-TP',
        views : '270M',
        link  : 'hayTraoChoAnh.html'
    },
    {
        imgSrc: 'Image-source/Collections/oneOfTheGirls.jpg',
        title : 'One Of The Girls',
        artist: 'The Weeknd, JENNIE, Lily-Rose Deep',
        views : '1.1M',
        link  : 'oneOfTheGirls.html'
    },
    {
        imgSrc: 'Image-source/Collections/afterHours.jpg',
        title : 'After Hours',
        artist: 'The Weeknd',
        views : '212M',
        link  : 'afterHours.html'
    },
    {
        imgSrc: 'Image-source/Collections/popular.png',
        title : 'Popular',
        artist: 'The Weeknd',
        views : '619.1K',
        link  : 'popular.html'
    },
    {
        imgSrc: 'Image-source/Collections/hitMeHardAndSoft.jpg',
        title : 'BLUE',
        artist: 'Billie Eilish',
        views : '611.1K',
        link  : 'blue.html'
    },
    {
        imgSrc: 'Image-source/Collections/hitMeHardAndSoft.jpg',
        title : 'CHIHIRO',
        artist: 'Billie Eilish',
        views : '856.1K',
        link  : '#'
    },
    {
        imgSrc: 'Image-source/Collections/DrawnFM.jpg',
        title : 'Is There Someone Else',
        artist: 'The Weeknd',
        views : '830.7K',
        link  : '#'
    },
    {
        imgSrc: 'Image-source/Collections/Dear-Melancholy.jpg',
        title : 'I Was Never There',
        artist: 'The Weeknd, Gesaffelstein',
        views : '1.5M',
        link  : '#'
    },
    {
        imgSrc: 'Image-source/Collections/DearInsanity.jpg',
        title : 'Violet Crazy',
        artist: 'DPR IAN',
        views : '611.1K',
        link  : 'VioletCrazy.html'
    },
    {
        imgSrc: 'Image-source/Collections/starboy.jpg',
        title : 'Die For You',
        artist: 'The Weeknd',
        views : '4.3M',
        link  : '#'
    },
    {
        imgSrc: 'Image-source/Collections/starboy.jpg',
        title : 'Starboy',
        artist: 'The Weeknd',
        views : '8.9M',
        link  : '#'
    },
    {
        imgSrc: 'Image-source/Collections/MoodswingsInThisOrder.jpg',
        title : 'So Beautiful',
        artist: 'DPR IAN',
        views : '90.1K',
        link  : '#'
    },
    {
        imgSrc: 'Image-source/Collections/theColorViolet.jpg',
        title : 'The Color Violet',
        artist: 'Tory Lanez',
        views : '31M',
        link  : 'theColorViolet.html'
    },
];

// TODO sự kiện tìm kiếm 

$('#search-box').on('input', function() {
    const query = $(this).val().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    searchSuggest.empty();

    if(query) {
        const filterSong = songs.filter(song => song.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(query));

        const filterArist = artists.filter(artist => artist.nameArtist.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(query));

        filterArist.forEach(artist => {
            const artistElement = $('<div>').addClass('suggestion-item');
            artistElement.html(`
                <img src="${artist.avtArtist}" class="avtArtistSugg">    
                <div>
                    <span class="title">${artist.nameArtist}</span>
                    <span class="artist">
                    Artist 
                    <i class="bi bi-dot"></i>
                    Pop<span>
                </div>
            `);
            artistElement.on('click', function() {
                window.location.href = artist.link;
            });
            searchSuggest.append(artistElement);
        });
        
        filterSong.forEach(song => {
            const songElement = $('<div>').addClass('suggestion-item');
            songElement.html(`
                <img src="${song.imgSrc}">
                <div>
                    <span class="title">${song.title}</span>
                    <span class="artist">${song.artist}</span>
                    <span class="views"><i class="bi bi-eye"></i> ${song.views}</span>
                </div>
            `);
            songElement.on('click', function() {
                window.location.href = song.link;
            });
            searchSuggest.append(songElement);
        });

    }
});


$('label i.fa-magnifying-glass').on('click', function() {
    searchSuggest.toggle();
    const query = searchBox.val().toLowerCase();
    const toSong = songs.find(song => song.title.toLowerCase() === query);
    if(toSong) {
        window.location.href = toSong.link;
    }
});

// todo  CONTROL SONG
const $audio = $('#audio');
const $playBtn = $('.control');
const $range = $('.range');
const $timeEl = $('.current-time');
const $durationEl = $('.duration');

$playBtn.on('click', () => {
    if ($audio[0].paused) {
        $audio[0].play();
        $playBtn.html('<i class="bi bi-pause-fill"></i>');
    } else {
        $audio[0].pause();
        $playBtn.html('<i class="bi bi-play-fill"></i>');
    }
});

$audio.on('timeupdate', () => {
    const currentTime = $audio[0].currentTime;
    const duration = $audio[0].duration;
    $range.val((currentTime / duration) * 100);

    const currMinute = Math.floor(currentTime / 60);
    const currSecond = Math.floor(currentTime % 60);
    const durationMinute = Math.floor(duration / 60);
    const durationSecond = Math.floor(duration % 60);

    $timeEl.text(`${currMinute}:${currSecond.toString().padStart(2, '0')}`);
    $durationEl.text(`${durationMinute - currMinute}:${Math.abs(durationSecond - currSecond).toString().padStart(2, '0')}`);
});

$range.on('input', () => {
    const duration = $audio[0].duration;
    const value = $range.val();
    $audio[0].currentTime = (value / 100) * duration;
});

$audio.on('loadedmetadata', () => {
    const duration = $audio[0].duration;
    const durationMinute = Math.floor(duration / 60);
    const durationSecond = Math.floor(duration % 60);

    $durationEl.text(`${durationMinute}:${durationSecond.toString().padStart(2, '0')}`);
});

// todo  disk 
const audioPlay = document.querySelector('.audio-play');
const imgAudio = document.querySelector('.img-control');
const imgAudioSize = document.querySelector('.img-control img');
const contentAudio = document.querySelector('.content-control');
const btnAudio = document.querySelector('.control');
const timeAudio = document.querySelector('.time');
const logoAudio = document.querySelector('.audio-play .logo');
const fullScreen =document.querySelector('.full-screen');

const vinylDisk = document.getElementById('vinylMusicDisk');
const pioneer = document.getElementById('pioneer');


imgAudio.addEventListener('click', () => {
    if (imgAudioSize.style.width == "3.125em" || imgAudio.style.width == '') {

        audioPlay.style.backdropFilter = "none";
        audioPlay.style.boxShadow = "none";
        audioPlay.style.background = "none";
        audioPlay.style.border = "none";
        audioPlay.style.left = "3em";
        audioPlay.style.width = "10%";
        audioPlay.style.transition = "350ms";
        
        imgAudio.style.width = "fit-content";
        imgAudio.style.borderRadius = "50%";
        imgAudio.style.boxShadow = ".1em .2em .8em rgba(0, 0, 0, .25)";
        imgAudio.style.transition = "550ms";

        imgAudioSize.style.width = "4em";
        imgAudioSize.style.height = "4em";
        imgAudioSize.style.borderRadius = "50%";
        imgAudioSize.style.transition = "550ms";

        contentAudio.style.display = "none";
        btnAudio.style.display = "none";
        timeAudio.style.display = "none";
        logoAudio.style.display = "none";
        fullScreen.style.display = "none";

        vinylDisk.style.opacity = "1";
        vinylDisk.style.marginLeft = "-2.7em";
        vinylDisk.style.transition = "550ms";
        vinylDisk.style.transitionDelay = "200ms";
        pioneer.style.opacity = "1";
        pioneer.style.transform = "rotate(-30deg)";
        pioneer.style.transition = "550ms";
        pioneer.style.transitionDelay = "350ms";
    }else {
        audioPlay.style.backdropFilter = "blur(10px)";
        audioPlay.style.boxShadow = ".1em .2em .8em rgba(0, 0, 0, .25)";
        audioPlay.style.background = "rgba(255, 255, 255, .3)";
        audioPlay.style.border = ".1em solid #000";
        audioPlay.style.left = "10%";
        audioPlay.style.width = "calc(90% - 10%)";

        imgAudio.style.width = "23em";
        imgAudio.style.borderRadius = "0";
        imgAudio.style.boxShadow = "none";
        
        imgAudioSize.style.width = "3.125em";
        imgAudioSize.style.height = "3.125em";
        imgAudioSize.style.borderRadius = "0";

        contentAudio.style.display = "flex";
        btnAudio.style.display = "flex";
        timeAudio.style.display = "flex";
        logoAudio.style.display = "flex";
        fullScreen.style.display = "flex";

        vinylDisk.style.opacity = "0";
        vinylDisk.style.marginLeft = "-3em";
        vinylDisk.style.transition = "0ms";
        pioneer.style.opacity = "0";
        pioneer.style.transform = "rotate(-45deg)";
        pioneer.style.transition = "0ms";
    }
    
    imgAudio.classList.toggle('rotateAudio');

});

// todo full screen
let isFullScreen = false;

$('.full-screen').on('click', function() {
  if (!isFullScreen) {
    $('.full-screen').html('<i class="fa-solid fa-down-left-and-up-right-to-center"></i>');
    $('.img-control').css({
        width: '100%',
        pointerEvents: 'none',
        touchAction: 'none',
    });

    $('.img-control img').css({
      width: '8em',
      height: '8em',
    });

    $('.audio-play').css({
        position: 'fixed',
        bottom: '0',
        left: '0',
        padding: '60vh 5% 0 5%',
        width: '100%',
        height: '100vh',
        margin: '0 0 0 0',
        flexWrap: 'wrap',
        color: '#fff',
        transition: '1s ease-in',
        background: 
        'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.8) 80%), url("Image-source/Artist/mtp-coverimg2.jpg") no-repeat center/cover',
    });

    $('.audio-play .control').css({
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    });

    $('.content-control').css({
        fontSize: '1.2em',
    });
    $('#nameSong-control').css({
        fontWeight: 'bold',
        fontSize: '1.3em',
    });
    $('.content-control a').css({
        color: '#fff',
        transition: '1s ease-in',
    });

    $('<style>').text('input[type="range"]::-webkit-slider-thumb {background: #fff;}').appendTo('head');
    $('<style>').text('input[type="range"]::-webkit-slider-runnable-track {background: #fff;}').appendTo('head');

    $('.audio-play .logo').css({
        marginTop: '-6%',
        transition: '1s ease-in',
    });

    $('.full-screen').css({
        width: '100%',
        padding: '1% 0',
        display: 'flex',
        justifyContent: 'end',
    });

    $('header, footer, main, nav').hide();

    isFullScreen = true;

  } else {

    $('.full-screen').html('<i class="fa-solid fa-up-right-and-down-left-from-center"></i>');
    $('.img-control').css({
        width: '23em',
        pointerEvents: 'all',
        touchAction: 'none',
    });

    $('.img-control img').css({
      width: '3.125em',
      height: '3.125em',
    });

    $('.audio-play').css({
        position: 'fixed',
        // inset: 'none',
        bottom: '6%',
        left: '10%',
        padding: '.3em',
        width: 'calc(90% - 10%)',
        height: '4em',
        margin: 'initial',
        flexWrap: 'initial',
        color: 'initial',
        transition: 'initial',
        background: 'var(--opac-white)',
    });

    $('.audio-play .control').css({
        width: 'initial',
        justifyContent: 'none',
    });

    $('.content-control').css({
        fontSize: 'initial',
    });
    $('#nameSong-control').css({
        fontWeight: 'initial',
        fontSize: 'initial',
    });
    $('.content-control a').css({
        color: '#000',
    });

    $('<style>').text('input[type="range"]::-webkit-slider-thumb {background: #000;}').appendTo('head');
    $('<style>').text('input[type="range"]::-webkit-slider-runnable-track {background: #000;}').appendTo('head');

    $('.audio-play .logo').css({
        marginTop: '0',
    });

    $('.full-screen').css({
        width: 'fit-content',
        padding: '0',
        justifyContent: 'none',
    });

    $('header, footer, main, nav').show();

    isFullScreen = false;
  }
});
if ($(window).width() <= 768) {
    $('.full-screen').css({
        pointerEvents: 'none',
    });
}

// todo comment 
    const cmtContainer = document.getElementById('cmt-container');
    const cmtInput = document.getElementById('cmt-input');
    const cmtSubmit = document.getElementById('cmt-submit');

    function showCmt(text) {
        const cmtEl = document.createElement('div');
        cmtEl.classList.add('comment');
        cmtEl.textContent = text;
        cmtContainer.appendChild(cmtEl);
    }
    
    function loadCmt() {
        const cmts = JSON.parse(localStorage.getItem('cmts')) || [];
        cmts.forEach(showCmt);
    }

    cmtSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        
        const cmtText = cmtInput.value.trim();

        if (cmtText !== '') {
            showCmt(cmtText);
                saveCmt(cmtText); // save comment 
            cmtInput.value = '';
        }
    });

    function saveCmt(cmt) {
        const cmts = JSON.parse(localStorage.getItem('cmts')) || [];
        cmts.push(cmt);
        localStorage.setItem('cmts', JSON.stringify(cmts));
    }
    loadCmt();

$('#closeSpotifyIcon').on('click', function() {
    $('#spotifyIcon').hide();
    $(this).hide();
});

// todo Q&A 
$('.summary-title').on('click', function () {
    $(this).css({
        background: $(this).css('background-color') === 'rgb(255, 255, 255)' ? '#000' : '#fff',
        color: $(this).css('background-color') === 'rgb(255, 255, 255)' ? '#eff0f3' : '#000'
    });
    $(this).find('i').css({
        transform: $(this).find('i').css('transform') === 'matrix(1, 0, 0, 1, 0, 0)' ? 'rotate(-90deg)' : 'rotate(0deg)',
    })
});

// border header-menu
$(window).on('scroll', function () {
    $('header').toggleClass('effHeader', $(window).scrollTop() > 50);

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

setTimeout(function() {
    $('.loader').fadeOut(500, function() {
        $(this).remove();
    });
}, 600);
// });