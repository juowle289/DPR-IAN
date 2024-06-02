document.addEventListener('DOMContentLoaded', () => {
    const inputUsername = document.getElementById('lg-userName');
    const inputPassword = document.getElementById('lg-password');
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