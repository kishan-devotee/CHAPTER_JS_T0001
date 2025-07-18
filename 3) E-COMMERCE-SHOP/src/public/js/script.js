let mainContent = document.querySelector("#mainContent");
let UserBox = document.querySelector(".User");
let RouteName = "";
let Header = document.querySelector("#header");
let Footer = document.querySelector(".section-p1");

let Render = (route) => {
    fetch(
        `/src/public/components/${route ? route : "Home"}/${route ? route : "Home"
        }.html`
    )
        .then((response) => response.text())
        .then((data) => {
            mainContent.innerHTML = "";
            mainContent.innerHTML = data;
        })
        .catch((err) => {
            console.error(err);
            mainContent.innerHTML = "Error loading page";
        });
};

// Render Route
const home = () => {
    RouteName = "Home";
    Render(RouteName);
};
const shop = () => {
    let loginCheck = JSON.parse(localStorage.getItem("LoginData"));
    if (loginCheck === null) {
        signIn();
        return;
    }
    RouteName = "Shop";
    Render(RouteName);
    fetchData(); //shop.js
};
const signUp = () => {
    RouteName = "Sign-Up";
    Render(RouteName);
};
const signIn = () => {
    RouteName = "Sign-In";
    Render(RouteName);
};
const ResetPass = () => {
    RouteName = "ResetPass";
    Render(RouteName);
};
const forgotPass = () => {
    let loginCheck = JSON.parse(localStorage.getItem("LoginData"));
    if (loginCheck === null) {
        signIn();
        return;
    }
    RouteName = "ForgotPass";
    Render(RouteName);
};
const Cart = () => {
    let loginCheck = JSON.parse(localStorage.getItem("LoginData"));
    if (loginCheck === null) {
        signIn();
        return;
    }
    RouteName = "Cart";
    Render(RouteName);
    ShowCartProduct();
};
const Checkout = () => {
    RouteName = "Checkout";
    Render(RouteName);
};

//Initial ROute
Render("Home");

let CheckUserLogin = (LoginData) => {
    if (LoginData) {
        let LoggedMail = JSON.parse(localStorage.getItem("LoginData"))[0]
            .LoginEmail;
        let registerData = JSON.parse(localStorage.getItem("registerData"));

        let UserData = registerData.find((user) => user.Email === LoggedMail);

        UserBox.innerHTML = `
        <div class="user-dropdown" id="user-box"> 
        <img class="dropdown-button" src="https://cdn-icons-png.flaticon.com/512/4323/4323091.png" height="50" alt="">
        <p class="welcomeMSG">Welcome, ${UserData.UserName}<p/>
        <div class="dropdown-content">
            <p onclick="UserLogout()">LogOut</p>
            <p onclick="ResetPass()">Reset Password</p>
        </div>
      </div>
        `;
    } else {
        UserBox.innerHTML = `<button class="signInUserButton" onclick="signIn()">Sign-In</button>`;
    }
};

let UserLogout = () => {
    localStorage.removeItem("LoginData");
    let LoginData = JSON.parse(localStorage.getItem("LoginData"));
    CheckUserLogin(LoginData);
    signIn();
};

let LoginData = JSON.parse(localStorage.getItem("LoginData"));
CheckUserLogin(LoginData);

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
