document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        firstName,
        lastName,
        email,
        password
    };

    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = 'login.html';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html'; // Redirect to homepage or desired page
    } else {
        alert('Invalid credentials');
    }
});


function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    const user = {
        firstName: profile.getGivenName(),
        lastName: profile.getFamilyName(),
        email: profile.getEmail(),
        avatar: profile.getImageUrl()
    };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'ballroomExtravaganza.html';
}

