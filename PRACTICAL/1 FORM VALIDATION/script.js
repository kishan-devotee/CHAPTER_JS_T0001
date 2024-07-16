let btn = document.querySelector('#FormBtn')
let correction = document.querySelector('#Forname')
let corMail = document.querySelector('#corMail')
let corPass = document.querySelector('#corPass')
let corConfPass = document.querySelector('#corConfPass')

const FormSubmit = (event) => {

    event.preventDefault();
    document.querySelector("#Username").value = "";
    document.querySelector('#password').value = "";
    document.querySelector("#mail").value = "";
    document.querySelector('#ConfirmPass').value = "";
    correction.style.display = "none";
    corMail.style.display = "none";
    corPass.style.display = "none";
    corConfPass.style.display = "none";
    btn.style.cursor = 'no-drop'
    btn.style.backgroundColor = 'rgb(143, 178, 255)'
    alert('data submitted')

}

const getUsername = () => {
    let UserName = document.querySelector("#Username").value
    let Validators = document.querySelector('#forUsername')
    const UsernameRegex = /^[a-zA-Z\s]+$/;
    if (UserName.length < 3 || !(UsernameRegex.test(UserName))) {
        Validators.style.display = 'block'
        btn.setAttribute('disable', 'disable')
        btn.style.cursor = 'no-drop'
        btn.style.backgroundColor = 'rgb(143, 178, 255)'
        correction.style.display = 'none'
    } else {
        Validators.style.display = 'none'
        correction.style.display = 'block'
        btn.style.backgroundColor = 'rgb(47, 113, 255)'
        btn.style.cursor = 'pointer'
    }
}

const validateEmail = () => {
    let mail = document.querySelector("#mail").value
    let Validators = document.querySelector('#forEmail')
    const EmailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!(EmailRegex.test(mail))) {
        Validators.style.display = 'block'
        btn.setAttribute('disable', 'disable')
        btn.style.cursor = 'no-drop'
        btn.style.backgroundColor = 'rgb(143, 178, 255)'
        corMail.style.display = 'none'
    } else {
        Validators.style.display = 'none'
        btn.style.backgroundColor = 'rgb(47, 113, 255)'
        btn.style.cursor = 'pointer'
        corMail.style.display = 'block'
    }
}

let passStore = '';
const validatePass = () => {
    let password = document.querySelector('#password').value
    let Validators = document.querySelector('#forPass')
    const PassRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!(PassRegex.test(password))) {
        Validators.style.display = 'block'
        btn.setAttribute('disable', 'disable')
        btn.style.cursor = 'no-drop'
        btn.style.backgroundColor = 'rgb(143, 178, 255)'
        corPass.style.display = 'none'
    } else {
        Validators.style.display = 'none'
        passStore = password;
        btn.style.backgroundColor = 'rgb(47, 113, 255)'
        btn.style.cursor = 'pointer'
        corPass.style.display = 'block'
    }
}

const confirmPass = () => {
    let confPass = document.querySelector('#ConfirmPass').value
    let Validators = document.querySelector('#ConfPass')
    if (confPass !== passStore || confPass == "") {
        Validators.style.display = 'block'
        btn.setAttribute('disable', 'disable')
        btn.style.cursor = 'no-drop'
        btn.style.backgroundColor = 'rgb(143, 178, 255)'
        corConfPass.style.display = 'none'
    } else {
        Validators.style.display = 'none'
        btn.style.backgroundColor = 'rgb(47, 113, 255)'
        btn.style.cursor = 'pointer'
        corConfPass.style.display = 'block'
    }
}
