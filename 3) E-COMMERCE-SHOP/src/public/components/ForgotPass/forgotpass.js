
const ForgotPassword = () => {
    let email = document.querySelector('#forgot-mail').value;
    let que_ans = document.querySelector('#sec-question').value;
    let change_pass = document.querySelector('#change-pass').value;
    let registerData = JSON.parse(localStorage.getItem('registerData')) || [];
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    let user = registerData.find(user => user.Email === email && user.SecQuestion === que_ans);

    if (user) {
        if (passRegex.test(change_pass)) {
            user.Password = change_pass;
            localStorage.setItem('registerData', JSON.stringify(registerData));
            document.querySelector('#forgot-pass-msg').style.display = 'block';
            setTimeout(() => {
                signIn();
            }, 2000);
            return;
        } else {
            document.querySelector('#forgot-pass-inc-msg').style.display = 'block';
        }
    } else {
        document.querySelector('#forgot-pass-not-msg').style.display = 'block';
    }
}
