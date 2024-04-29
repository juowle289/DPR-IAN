const button = document.getElementById('alertBtn');
const message = document.getElementById('alertMessage');

button.addEventListener('click', () => {
    // Ngăn chuyển hướng
    event.preventDefault();

    // Thông báo
    button.style.display = 'none';
    
    message.style.display = 'block';
    message.textContent = 'Submited !';
})

// TODO: SPOTIFY 

var Vietnam = document.getElementById('Vietnam');
var idiosyncrasy = document.getElementById('idiosyncrasy');
var female = document.getElementById('female');
var male = document.getElementById('male');

Vietnam.addEventListener('click', function(){
    window.open('https://open.spotify.com/playlist/4YJnIVHbU50DhkGKGWKsiv?si=e24da81abcd84fdc', '_blank');
})
idiosyncrasy.addEventListener('click', function(){
    window.open('https://open.spotify.com/playlist/5FUYKwQRiVasnuxYSd32Ti?si=b45cdeaed3dc4652', '_blank');
})
female.addEventListener('click', function(){
    window.open('https://open.spotify.com/playlist/031gqm3DJuYIITCgJFV0oC?si=892cf851cbd646e1', '_blank');
})
male.addEventListener('click', function(){
    window.open('https://open.spotify.com/playlist/0x9GQNsycTnRauVDsVej4l?si=445aeb8d04044393', '_blank');
})

