var popup_z_index = 99;
var domain =  window.location.origin.toString() + "/";
// Function to display the popup
function showPopup(popup) {
    popup_z_index++;
    popup.style.zIndex = popup_z_index.toString();
    popup.style.display = "block";
}

// Function to display the popup no back ground (dialog)
function showPopupNoBackground(popup) {
    popup_z_index++;
    popup.style.zIndex = popup_z_index.toString();
    popup.style.display = "flex";
}

// Function to hide the popup
function hidePopup(popup) {
    popup_z_index--;
    popup.style.display = "none";
}

// hàm add một cookie
function setCookie(cookieName, cookieValue, expirationDays) {
    // Tính toán ngày hết hạn của cookie
    var d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();

    // Thiết lập cookie
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}
// Hàm để xóa một cookie đã thiết lập
function deleteCookie(cookieName) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
// Hàm để lấy giá trị của một cookie
function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// REGISTER 

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


// SELECTPAGE

// Khai bao OBJ SelectPagePopUp popup
const popup_SelectPagePopUp = document.querySelector(".SelectPage_PopUpContent");

// khai báo WELL BE Select
let WellbeSelect = document.querySelector('.header__navbar--content a[href="/index.html"]');

WellbeSelect.addEventListener("mouseenter", function(event) {
    event.preventDefault();
    let position_WellbeSelect = WellbeSelect.getBoundingClientRect();
    let SelectPage_PopUpContent_Left = (position_WellbeSelect.left - 14).toFixed(2);
    let SelectPage_PopUpContent_Top = (position_WellbeSelect.top + 65).toFixed(2);

    let SelectPage_PopUpContent = document.querySelector(".SelectPage_PopUpContent");
    SelectPage_PopUpContent.style.top = SelectPage_PopUpContent_Top + "px";
    SelectPage_PopUpContent.style.left = SelectPage_PopUpContent_Left + "px";
    showPopupNoBackground(popup_SelectPagePopUp);
});

WellbeSelect.addEventListener("mouseleave", function(event) {
    event.preventDefault();
    if (!popup_SelectPagePopUp.matches(':hover')) {
        hidePopup(popup_SelectPagePopUp); 
    }
});
popup_SelectPagePopUp.addEventListener("mouseleave", function(event) {
    event.preventDefault();
    if (!WellbeSelect.matches(':hover')) {
        hidePopup(popup_SelectPagePopUp); 
    }
});

// SIGNIN SELECT----------------------------------------------------------------

// Khai bao OBJ SelectSigninOrRegister popup
const popup_SelectSigninOrRegister = document.querySelector(".SelectSigninOrRegisterPopUp");

// khai báo nút Profile icon click
let ProfileButton = document.querySelector(".header__navbar--user .fa-user");

ProfileButton.addEventListener("click", function(event) {
    event.preventDefault();
    let position_profileButton = ProfileButton.getBoundingClientRect();
    let SOR_PopUpContent = document.querySelector(".SOR_PopUpContent");
    let SOR_PopUpContent_Left = (position_profileButton.left - 10).toFixed(2);
    let SOR_PopUpContent_Top = (position_profileButton.top + 40).toFixed(2);
    SOR_PopUpContent.style.top=SOR_PopUpContent_Top + "px";
    SOR_PopUpContent.style.left=SOR_PopUpContent_Left + "px";
    showPopup(popup_SelectSigninOrRegister); 
});

popup_SelectSigninOrRegister.addEventListener("click", function(event) {
    // Kiểm tra xem sự kiện click được kích hoạt từ popup_SelectSigninOrRegister hay không nếu không thì close popup
    if (event.target === event.currentTarget) {
        hidePopup(popup_SelectSigninOrRegister); 
    }
});


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