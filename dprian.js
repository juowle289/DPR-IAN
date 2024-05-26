document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('video');

    const startTime = 10;

    video.addEventListener('loadedmetadata', () => {
        video.currentTime = startTime;
    });

    video.addEventListener('canplay', () => {
        video.muted = true;
        video.loop = true;
        video.play();
    });

    video.load();
});


// TODO Search 
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


// TODO SPOTIFY 

const Vietnam = document.getElementById('Vietnam');
const idiosyncrasy = document.getElementById('idiosyncrasy');
const female = document.getElementById('female');
const male = document.getElementById('male');

Vietnam.addEventListener('click', function(){
    window.open('https://open.spotify.com/playlist/4YJnIVHbU50DhkGKGWKsiv?si=e24da81abcd84fdc', '_blank');
});
idiosyncrasy.addEventListener('click', function(){
    window.open('https://open.spotify.com/playlist/5FUYKwQRiVasnuxYSd32Ti?si=66071eacc48b4804', '_blank');
});
female.addEventListener('click', function(){
    window.open('https://open.spotify.com/playlist/031gqm3DJuYIITCgJFV0oC?si=576f4b88dfec48d2', '_blank');
});
male.addEventListener('click', function(){
    window.open('https://open.spotify.com/playlist/0x9GQNsycTnRauVDsVej4l?si=445aeb8d04044393', '_blank');
});

// TODO Btn Message 
const button = document.getElementById('alertBtn');
const message = document.getElementById('alertMessage');

button.addEventListener('click', () => {

    preventDefault();

    button.style.display = 'none';
    
    message.style.display = 'block';
    message.textContent = 'Submited !';
})


// TODO Suggest   
const searchSuggest = document.getElementById('search-suggest');

const songs = [
    {
        imgSrc: 'Image-source/Collections/MoodswingsInThisOrder.jpg',
        title : 'Nerves',
        artist: 'DPR IAN',
        views : '36.2K',
        link  : 'nerves.html'
    },
    {
        imgSrc: 'Image-source/Collections/MITO.png',
        title : 'Ballroom Extravaganza',
        artist: 'DPR IAN',
        views : '611.1k',
        link  : 'ballroomExtravaganza.html'
    },
    {
        imgSrc: 'Image-source/Collections/oneOfTheGirls.jpg',
        title : 'One Of The Girls',
        artist: 'The Weeknd, JENNIE, Lily-Rose Deep',
        views : '611.1k',
        link  : 'oneOfTheGirls.html'
    },
    {
        imgSrc: 'Image-source/Collections/popular.png',
        title : 'Popular',
        artist: 'Billie Eilish',
        views : '611.1k',
        link  : 'popular.html'
    },
    {
        imgSrc: 'Image-source/Collections/hitMeHardAndSoft.jpg',
        title : 'BLUE',
        artist: 'Billie Eilish',
        views : '611.1k',
        link  : 'blue.html'
    },
    {
        imgSrc: 'Image-source/Collections/hitMeHardAndSoft.jpg',
        title : 'CHIHIRO',
        artist: 'Billie Eilish',
        views : '856.1k',
        link  : 'chihiro.html'
    },
    {
        imgSrc: 'Image-source/Collections/DrawnFM.jpg',
        title : 'Is There Someone Else',
        artist: 'The Weeknd',
        views : '611.1k',
        link  : 'isThereSomeOneElse.html'
    },
    {
        imgSrc: 'Image-source/Collections/Dear-Melancholy.jpg',
        title : 'I Was Never There',
        artist: 'The Weeknd, Gesaffelstein',
        views : '611.1k',
        link  : '#'
    },
    {
        imgSrc: 'Image-source/Collections/DearInsanity.jpg',
        title : 'Violet Crazy',
        artist: 'DPR IAN',
        views : '611.1k',
        link  : 'VioletCrazy.html'
    },
    {
        imgSrc: 'Image-source/Collections/starboy.jpg',
        title : 'Die For You',
        artist: 'The Weeknd',
        views : '611.1k',
        link  : '#'
    },
    {
        imgSrc: 'Image-source/Collections/starboy.jpg',
        title : 'Starboy',
        artist: 'The Weeknd',
        views : '611.1k',
        link  : '#'
    },
    {
        imgSrc: 'Image-source/Collections/MoodswingsInThisOrder.jpg',
        title : 'So Beautiful',
        artist: 'DPR IAN',
        views : '611.1k',
        link  : '#'
    },

];

searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase();

    searchSuggest.innerHTML = '';

    if(query) {
        const filterSong = songs.filter(song => song.title.toLowerCase().includes(query));

        filterSong.forEach(song => {
            const songElement = document.createElement('div');
            songElement.classList.add('suggestion-item');
            songElement.innerHTML = `
                <img src="${song.imgSrc}">
            <div>
                <p class= "title" >${song.title}</p>
                <p class= "artist">${song.artist}</p>
                <p class= "views" >${song.views} views</p>
            </div>
            `;
            songElement.addEventListener('click', () => {
                window.location.href = song.link; // fix chuyển hướng tới link
            });
            searchSuggest.appendChild(songElement);
        });
    }
});

// TODO sự kiện cho icon search 
document.querySelector('label i.fa-magnifying-glass').addEventListener('click', () => {
    const query = searchBox.value.toLowerCase();
    const toSong = songs.find(song => song.title.toLowerCase() === query);
    if(toSong) {
        window.location.href = toSong.link;
    }
} );

// TODO Log in && Sign up 

const logIn  = document.getElementById('logIn');
const signUp = document.getElementById('signUp');




// fix EFFECT  
document.addEventListener('DOMContentLoaded', function () {
    const header       = document.getElementById('header');
    const playList     = document.querySelector('.play-list');
    const titleLarge   = document.querySelector('.title-large');
    const reference    = document.querySelector('.reference');
    const titleSongs   = document.getElementById('songs');
    const videos       = document.querySelector('.videos');
    const titleContact = document.getElementById('contact');

    const clfeatured = document.querySelector('.clfeatured');
    const clnews     = document.querySelector('.clnews');
    const clsongs    = document.querySelector('.clsongs');

    window.addEventListener('scroll', function () {
        const scrollPos = window.scrollY || document.documentElement.scrollTop;
        
        if (scrollPos > 100) { // fix header 
            header.classList.add('effHeader');
        }else {
            header.classList.remove('effHeader');
        }

        if(scrollPos > 500) { // fix play-list 
            playList.classList.add('toPos');
            titleLarge.classList.add('toPos');
        }else {
            playList.classList.remove('toPos');
            titleLarge.classList.remove('toPos');
        }

        if(scrollPos > 1400) { // fix reference 
            reference.classList.add('leftPos');
        }else {
            reference.classList.remove('leftPos');
        }

        if(scrollPos > 2100) { // fix title 
            titleSongs.classList.add('reveal');
            titleContact.classList.add('reveal');
        }else {
            titleSongs.classList.remove('reveal');
            titleContact.classList.remove('reveal');
        }

        if(scrollPos > 2300) { // fix  songs
            videos.classList.add('toPos');
        }else {
            videos.classList.remove('toPos');
        }
    });
});
