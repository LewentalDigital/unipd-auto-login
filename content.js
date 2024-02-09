if (window.location.href === "https://stem.elearning.unipd.it/login/index.php") {
    var ssoLogin = document.querySelector("#region-main > div > div > div > div > div > div.col-sm-12.col-lg-5.col-right > div.col-right-content > div:nth-child(5) > div.potentialidplist.mt-3 > div > a");

    ssoLogin.style.background = "red";
    ssoLogin.click();
}

var inputNome = document.getElementById("j_username_js");
var inputPassword = document.getElementById("password");
var radioBtn = document.getElementById("radio2");
var loginBtn = document.getElementById("login_button_js");
var loginForm = document.getElementById("user-login-form");

setTimeout(() => {
    radioBtn.checked = true;
    inputNome.value = "nome.cognome";
    inputPassword.focus();
    loginBtn.style.background = "red";
    //loginBtn.click(); // non funziona
}, 100);
