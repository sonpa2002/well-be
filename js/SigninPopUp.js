// Khai bao OBJ SigninPopUp popup
const popup_SigninPopUp = document.querySelector(".SigninPopUp");

// khai báo nút Signin click
let SigninButton = document.querySelector(".SOR_PopUpContent .Signin");
// khai báo nút Signin close popup
let SigninPopUpClose = document.querySelector(".SigninPopUpContent__title i");
// khai báo dont have account span
let LinkCreateAcc = document.querySelector(".SigninPopUpContent__NoAccount");


const passwordInput = document.querySelector(".SigninPopUpContent__password--custom input");
const togglePasswordIcon = document.querySelector(".SigninPopUpContent__password--custom i");

function togglePassword() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordIcon.setAttribute("class","fa-regular fa-eye-slash");
    } else {
        passwordInput.type = "password";
        togglePasswordIcon.setAttribute("class","fa-regular fa-eye");
    }
    passwordInput.focus();
}
passwordInput.addEventListener("focus", function() {
    togglePasswordIcon.style.color = "#31735E";
});
passwordInput.addEventListener("blur", function() {
    togglePasswordIcon.style.color = "rgba(49, 115, 94, 0.2)";
});

togglePasswordIcon.addEventListener("click", togglePassword);

SigninButton.addEventListener("click", function(event) {
    event.preventDefault();
    showPopup(popup_SigninPopUp);
});
SigninPopUpClose.addEventListener("click", function(event) {
    event.preventDefault();
    hidePopup(popup_SigninPopUp);
});
LinkCreateAcc.addEventListener("click", function(event) {
    event.preventDefault();
    hidePopup(popup_SigninPopUp);
    showPopup(popup_RegisterPopUp);
});