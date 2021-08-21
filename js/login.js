const submitButton = document.getElementById('login-button').addEventListener('click', function () {
    // get user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get user password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // check if credintials are valid 
    if (userEmail == 'admin@ub.com' && userPassword == 'admin') {
        window.location.href = 'banking.html';
    }
    else {
        window.alert('Wrong Credintials! :(')
    }
});