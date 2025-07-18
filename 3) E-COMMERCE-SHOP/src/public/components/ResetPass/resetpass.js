
    const ResetPassword = () => {
        let validationMsg = document.querySelector('#reset-pass-msg')
        let compareMsg = document.querySelector('#reset-pass-compare-msg')
        let suc_msg = document.querySelector('#reset-suc')
        let newPass = document.querySelector('#newPass').value
        let confPass = document.querySelector('#confPass').value
        const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        let LoginUser = JSON.parse(localStorage.getItem('LoginData'))[0].LoginEmail
        let registerData = JSON.parse(localStorage.getItem('registerData'));       

        let userData = registerData.find(user => user.Email === LoginUser);
        console.log(userData);
        if (!passRegex.test(newPass)) {
            validationMsg.style.display = 'block';
            return;
        }
        
        if (newPass !== confPass) {
            compareMsg.style.display = 'block';
            return;
        }
        
        userData.Password = newPass;
        localStorage.setItem('registerData', JSON.stringify(registerData));
        UserLogout()
        suc_msg.style.display = 'block';
        setTimeout(() => {
            signIn()
        }, 2000);
    };