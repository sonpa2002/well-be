// Khai bao OBJ RegisterPopUp popup
const popup_RegisterPopUp = document.querySelector(".RegisterPopUp");

// khai báo button Register click
let RegisterButton = document.querySelector(".SOR_PopUpContent .Register");
// khai báo nút close Register popup
let RegisterPopUpClose = document.querySelector(".RegisterPopUpContent__title i");
// khai báo alredy have account span
let LinkSignin = document.querySelector(".RegisterPopUpContent__HaveAccount");


const RegisterpasswordInput = document.querySelector(".RegisterPopUpContent__password--custom input");
const toggleRegisterPasswordIcon = document.querySelector(".RegisterPopUpContent__password--custom i");
const RegisterConfirmpasswordInput = document.querySelector(".RegisterPopUpContent__confirmpassword--custom input");
const toggleRegisterConfirmPasswordIcon = document.querySelector(".RegisterPopUpContent__confirmpassword--custom i");

function toggleRegisterPassword() {
    if (RegisterpasswordInput.type === "password") {
        RegisterpasswordInput.type = "text";
        toggleRegisterPasswordIcon.setAttribute("class","fa-regular fa-eye-slash");
    } else {
        RegisterpasswordInput.type = "password";
        toggleRegisterPasswordIcon.setAttribute("class","fa-regular fa-eye");
    }
    RegisterpasswordInput.focus();
}
function toggleRegisterConfirmPassword() {
    if (RegisterConfirmpasswordInput.type === "password") {
        RegisterConfirmpasswordInput.type = "text";
        toggleRegisterConfirmPasswordIcon.setAttribute("class","fa-regular fa-eye-slash");
    } else {
        RegisterConfirmpasswordInput.type = "password";
        toggleRegisterConfirmPasswordIcon.setAttribute("class","fa-regular fa-eye");
    }
    RegisterConfirmpasswordInput.focus();
}

RegisterButton.addEventListener("click", function(event) {
    event.preventDefault();
    showPopup(popup_RegisterPopUp);
});
RegisterPopUpClose.addEventListener("click", function(event) {
    event.preventDefault();
    hidePopup(popup_RegisterPopUp);
});

RegisterpasswordInput.addEventListener("focus", function() {
    toggleRegisterPasswordIcon.style.color = "#31735E";
});
RegisterpasswordInput.addEventListener("blur", function() {
    toggleRegisterPasswordIcon.style.color = "rgba(49, 115, 94, 0.2)";
});
toggleRegisterPasswordIcon.addEventListener("click", toggleRegisterPassword);

RegisterConfirmpasswordInput.addEventListener("focus", function() {
    toggleRegisterConfirmPasswordIcon.style.color = "#31735E";
});
RegisterConfirmpasswordInput.addEventListener("blur", function() {
    toggleRegisterConfirmPasswordIcon.style.color = "rgba(49, 115, 94, 0.2)";
});
toggleRegisterConfirmPasswordIcon.addEventListener("click", toggleRegisterConfirmPassword);

LinkSignin.addEventListener("click", function(event) {
    event.preventDefault();
    hidePopup(popup_RegisterPopUp);
    showPopup(popup_SigninPopUp);
});