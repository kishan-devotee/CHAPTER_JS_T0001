let correction = document.querySelector("#Forname");
let corMail = document.querySelector("#corMail");
let corPass = document.querySelector("#corPass");
let corConfPass = document.querySelector("#corConfPass");
let btn = document.querySelector("#FormBtn");

let RegisterData = localStorage.getItem("Data") || [];

const FormSubmit = (event) => {
  event.preventDefault();
  let UserName = document.querySelector("#Username").value;
  let Password = document.querySelector("#password").value;
  let Email = document.querySelector("#mail").value;
  let ConfPass = document.querySelector("#ConfirmPass").value;
  let SecQuestion = document.querySelector("#SecQuestion").value;

  let Data = {
    UserName,
    Email,
    Password,
    SecQuestion,
  };
  RegisterData.push(Data);
  localStorage.setItem("registerData", JSON.stringify(RegisterData));
  UserName = "";
  Password = "";
  Email = "";
  ConfPass = "";
  SecQuestion = "";
  signIn();
};

let Validate = (Validators) => {
  Validators.style.display = "block";
};

const getUsername = () => {
  let UserName = document.querySelector("#Username").value;
  let Validators = document.querySelector("#forUsername");
  const UsernameRegex = /^[a-zA-Z\s]+$/;
  if (UserName.length < 3 || !UsernameRegex.test(UserName)) {
    Validate(Validators);
  } else {
    Validators.style.display = "none";
  }
};

const validateEmail = () => {
  let mail = document.querySelector("#mail").value;
  let Validators = document.querySelector("#forEmail");
  const EmailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!EmailRegex.test(mail)) {
    Validate(Validators);
  } else {
    Validators.style.display = "none";
  }
};

let passStore = "";
const validatePass = () => {
  let password = document.querySelector("#password").value;
  let Validators = document.querySelector("#forPass");
  const PassRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  if (!PassRegex.test(password)) {
    Validate(Validators);
  } else {
    Validators.style.display = "none";
    passStore = password;
  }
};

const confirmPass = () => {
  let confPass = document.querySelector("#ConfirmPass").value;
  let Validators = document.querySelector("#ConfPass");
  if (confPass !== passStore || confPass == "") {
    Validate(Validators);
  } else {
    Validators.style.display = "none";
  }
};
