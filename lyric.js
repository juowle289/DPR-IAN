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
        zIndex: '-1',
        });
    }
});

// todo  Search icon
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


// todo  CONTROL SONG
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById('audio');
    const playBtn = document.querySelector('.control');
    const range = document.querySelector('.range');
    const timeEl = document.querySelector('.current-time');
    const durationEl = document.querySelector('.duration');

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        } else {
            audio.pause();
            playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
    });

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        range.value = (currentTime / duration) * 100;

        const currMinute = Math.floor(currentTime / 60);
        const currSecond = Math.floor(currentTime % 60);
        const durationMinute = Math.floor(duration / 60);
        const durationSecond = Math.floor(duration % 60);

        timeEl.textContent = `${currMinute}:${currSecond.toString().padStart(2, '0')}`;
        durationEl.textContent = `-${durationMinute - currMinute}:${Math.abs(durationSecond - currSecond).toString().padStart(2, '0')}`;
    });

    range.addEventListener('input', () => {
        const duration = audio.duration;
        const value = range.value;
        audio.currentTime = (value / 100) * duration;
    });

    audio.addEventListener('loadedmetadata', () => {
        const duration = audio.duration;
        const durationMinute = Math.floor(duration / 60);
        const durationSecond = Math.floor(duration % 60);

        durationEl.textContent = `${durationMinute}:${durationSecond.toString().padStart(2, '0')}`;
    });


    // fix disk 
    const audioPlay = document.querySelector('.audio-play');
    const imgAudio = document.querySelector('.img-control');
    const imgAudioSize = document.querySelector('.img-control img');
    const contentAudio = document.querySelector('.content-control');
    const btnAudio = document.querySelector('.control');
    const timeAudio = document.querySelector('.time');
    const logoAudio = document.querySelector('.audio-play .logo');

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

            vinylDisk.style.opacity = "0";
            vinylDisk.style.marginLeft = "-3em";
            vinylDisk.style.transition = "0ms";
            pioneer.style.opacity = "0";
            pioneer.style.transform = "rotate(-45deg)";
            pioneer.style.transition = "0ms";
        }
        
        imgAudio.classList.toggle('rotateAudio');

    });
});

// todo comment 
document.addEventListener("DOMContentLoaded", () => {
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
        localStorage.setItem('cmts', JSON.stringify(cmt));
    }

    loadCmt();

});

$('#closeSpotifyIcon').on('click', function() {
    $('#spotifyIcon').hide();
    $(this).hide();
});

// todo EFFECT  
document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');

    const clLyrics = document.querySelector('.clLyrics');
    const clAbout  = document.querySelector('.clAbout');
    const clQamsA  = document.querySelector('.clQamsA');
    const clcomments = document.querySelector('.clcomments');


    window.addEventListener('scroll', function () {
        const scrollPos = window.scrollY || document.documentElement.scrollTop;
        
        if (scrollPos > 50) { // fix header 
            header.classList.add('effHeader');
        }else {
            header.classList.remove('effHeader');
        }

        if(500 < scrollPos && scrollPos < 1999) { // fix Lyric 
            clLyrics.classList.add('border');
        }else {
            clLyrics.classList.remove('border');
        }

        if(2000 < scrollPos && scrollPos < 2399) { // fix reference 
            clAbout.classList.add('border');
        }else {
            clAbout.classList.remove('border');
        }

        if(2400 < scrollPos && scrollPos < 2599 ) { //  fix title 
            clQamsA.classList.add('border');
        }else {
            clQamsA.classList.remove('border');
        }

        if(2600 < scrollPos && scrollPos < 2900) { // fix  songs
            clcomments.classList.add('border');
        }else {
            clcomments.classList.remove('border');
        }
    });
});
