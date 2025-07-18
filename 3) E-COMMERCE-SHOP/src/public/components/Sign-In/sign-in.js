const LoginUser = () => {
  let LoginEmail = document.querySelector(".LoginEmail").value;
  let LoginPass = document.querySelector(".LoginPass").value;
  let InvalidLogin = document.querySelector(".InvalidLogin");

  let users = JSON.parse(localStorage.getItem("registerData")) || [];

  let user = users.some(
    (user) => user.Email === LoginEmail && user.Password === LoginPass
  );
  console.log("Found user:", user);

  if (user) {
    let LoginUserData = [
      {
        LoginEmail,
        LoginPass,
      },
    ];
    localStorage.setItem("LoginData", JSON.stringify(LoginUserData));
    let LoginData = JSON.parse(localStorage.getItem("LoginData"));
    CheckUserLogin(LoginData);

    home();
  } else {
    InvalidLogin.style.display = "block";
  }
};
