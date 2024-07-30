
document.addEventListener('DOMContentLoaded', () => {
    const inputUsername = document.getElementById('su-userName');
    const inputPassword = document.getElementById('su-password');
    const inputComfirmPS = document.getElementById('su-confirm-password');
    const iconRevealPw = document.getElementById('revealPw');

    const iconCheckUsername = document.getElementById('iconCheckUsername');
    const iconCheckPassword = document.getElementById('iconCheckPassword');

    inputUsername.addEventListener('input', () => {
        if (inputUsername.value.split("").length > 5) {
            inputUsername.style.border = ".1em solid #17b000";
            iconCheckUsername.style.display=  "inline";
        }else {
            inputUsername.style.border = ".1em solid #ddd";
            iconCheckUsername.style.display=  "none";
        }
    });

    inputPassword.addEventListener('input', () => {
        const pw = inputPassword.value;
        const upperCase = /[A-Z]/.test(pw);
        const number = /\d/.test(pw);
        const specialChar = /[~!@#$%^&*()_+,.?{}|<>:"']/.test(pw);
        
        const valid = pw.length > 12 && upperCase && number && specialChar;

        if (valid) {
            inputPassword.style.border = ".1em solid #17b000";
            iconCheckPassword.style.display = "inline";
        }else {
            inputPassword.style.border = ".1em solid #ddd";
            iconCheckPassword.style.display = "none";
        }
    });

    iconRevealPw.addEventListener('click', () => {
        if (inputPassword.type == "password") {
            inputPassword.type = "text";
            iconRevealPw.classList.replace("fa-eye","fa-eye-slash");
        }else {
            inputPassword.type = "password";
            iconRevealPw.classList.replace("fa-eye-slash", "fa-eye");
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        const scrPos = window.scrollY || document.documentElement.scrollTop;

        if (scrPos > 1) {
            header.classList.add('hidden');
        }else {
            header.classList.remove('hidden');
        }
    });
});

$(document).ready(function() {
    // Hàm để xử lý sự kiện đăng ký
    $('#signup-form').submit(function(event) {
        event.preventDefault();
        
        var username = $('#su-userName').val();
        var email = $('#su-email').val();
        var password = $('#su-password').val();
        var confirmPassword = $('#su-confirm-password').val();
        
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        
        // Lưu thông tin người dùng vào localStorage
        var users = JSON.parse(localStorage.getItem('users')) || [];
        var userExists = users.some(function(user) {
            return user.username === username;
        });
        
        if (userExists) {
            alert("Username already exists!");
            return;
        }
        
        users.push({ username: username, email: email, password: password });
        localStorage.setItem('users', JSON.stringify(users));
        
        alert("Sign up successful!");
        window.location.href = 'login.html';
    });
    
    // Hàm để xử lý sự kiện đăng nhập
    $('#login-form').submit(function(event) {
        event.preventDefault();
        
        var username = $('#lg-username').val();
        var password = $('#lg-password').val();
        
        // Kiểm tra thông tin đăng nhập
        var users = JSON.parse(localStorage.getItem('users')) || [];
        var user = users.find(function(user) {
            return user.username === username && user.password === password;
        });
        
        if (user) {
            alert("Login successful!");
            window.location.href = 'dprian.html';
        } else {
            alert("Invalid username or password!");
        }

        let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser) {
            // Update header to show logged-in user's name
            $('#signUp').remove();
            $('#logIn').replaceWith(`<li id="userGreeting">Hello, ${loggedInUser.username}</li>`);
        }
    });
});
