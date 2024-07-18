document.addEventListener('DOMContentLoaded', (event) => {
    const video = $('#video');
    const startTime = 10;

    video.on('loadedmetadata', function() {
        video[0].currentTime = startTime;
    });

    // video.on('canplay', function() {
    //     video[0].muted = true;
    //     video[0].loop = true;
    //     video[0].play();
    // });

    video.load();
});


// TODO Search icon 

$('#search').on('change', function() {
    $(this).is(':checked') ? 
      $('#search-box').css({
        backgroundColor: '#eff0f3',
        marginRight: '0em',
        width: '10em',
        transition: '350ms',
        padding: '0 0.6em 0',
      }) : 
      $('#search-box').css({
        width: '0',
        backgroundColor: '#0000',
        marginRight: '-1.15em',
        padding: '0',
        transition: '350ms',
      });
});

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
    boxShadow: '-10em 0px 10px rgba(0, 0, 0, 0.6)',
    zIndex: '20'
    });
} else {
    barsIcon.css({
    transform: 'rotate(0deg)',
    color: '#fff',
    });

    bars.css({
    transform: 'translateX(0em)',
    opacity: '0',
    boxShadow: 'none',
    zIndex: '1',
    });
}
});

// TODO audio swiper-slide 


// todo nav audio 
$(document).ready(function(){
    const $audio = $('#audio');
    const $range = $('#range');
    const $playBtn = $('#playBtn');
    
    $range.css({
        'transform': 'rotate(180deg)'
    });

    $playBtn.on('click', function(){
        if ($audio[0].paused) {
            $audio[0].play();
            $(this).html('<i class="bi bi-pause-circle"></i>');
        }else {
            $audio[0].pause();
            $(this).html('<i class="bi bi-play-circle"></i>')
        }
    });

    $audio.on('timeupdate', function() {
        const duration = $audio[0].duration;
        const currentTime = $audio[0].currentTime;
        const value = (currentTime / duration) * 100;
        $range.val(value);
    });

    $range.on('input', function() {
        const duration = $audio[0].duration;
        const value = $(this).val();
        $audio[0].currentTime = (value / 100) * duration;
    });
});



// TODO SPOTIFY 

$('#Vietnam').on('click', function() {
window.open('https://open.spotify.com/playlist/4YJnIVHbU50DhkGKGWKsiv?si=e24da81abcd84fdc', '_blank');
});

$('#idiosyncrasy').on('click', function() {
window.open('https://open.spotify.com/playlist/5FUYKwQRiVasnuxYSd32Ti?si=66071eacc48b4804', '_blank');
});

$('#female').on('click', function() {
window.open('https://open.spotify.com/playlist/031gqm3DJuYIITCgJFV0oC?si=576f4b88dfec48d2', '_blank');
});

$('#male').on('click', function() {
window.open('https://open.spotify.com/playlist/0x9GQNsycTnRauVDsVej4l?si=445aeb8d04044393', '_blank');
});

// TODO Btn Message 
const button = $('#alertBtn');
const message = $('#alertMessage');

button.on('click', function(event) {
    event.preventDefault();
    button.hide();
    message.show().text('Submited !');
});


// TODO Suggest   
const searchSuggest = $('#search-suggest');

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
];

// TODO sự kiện tìm kiếm 

$('#search-box').on('input', function() {
    const query = $(this).val().toLowerCase();

    searchSuggest.empty();

    if(query) {
        const filterSong = songs.filter(song => song.title.toLowerCase().includes(query));

        filterSong.forEach(song => {
            const songElement = $('<div>').addClass('suggestion-item');
            songElement.html(`
                <img src="${song.imgSrc}">
                <div>
                    <p class="title">${song.title}</p>
                    <p class="artist">${song.artist}</p>
                    <p class="views">${song.views}</p>
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
    const query = searchBox.val().toLowerCase();
    const toSong = songs.find(song => song.title.toLowerCase() === query);
    if(toSong) {
        window.location.href = toSong.link;
    }
});

// TODO Log in && Sign up 

const $logIn = $('#logIn');
const $signUp = $('#signp');


// Fix EFFECT
$(window).on('scroll', function() {
    const scrollPos = $(window).scrollTop();

    if (scrollPos > 50) {
        $('#header').addClass('effHeader');
    } else {
        $('#header').removeClass('effHeader');
    }

    if (600 < scrollPos && scrollPos < 1449) {
        $('.play-list').addClass('toPos');
        $('.title-large').addClass('toPos');
        $('.clfeatured').addClass('border');
    } else {
        $('.clfeatured').removeClass('border');
    }

    if (1450 < scrollPos && scrollPos < 2099) {
        $('.reference').addClass('leftPos');
        $('.clnews').addClass('border');
    } else {
        $('.clnews').removeClass('border');
    }

    if (scrollPos > 2100) {
        $('#songs').addClass('reveal');
        $('#contact').addClass('reveal');
        $('.videos').addClass('toPos');
        $('.clsongs').addClass('border');
    } else {
        $('.clsongs').removeClass('border');
    }
});
