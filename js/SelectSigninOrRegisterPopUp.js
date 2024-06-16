// Khai bao OBJ SelectSigninOrRegister popup
const popup_SelectSigninOrRegister = document.querySelector(".SelectSigninOrRegisterPopUp");

// khai báo nút Profile icon click
let ProfileButton = document.querySelector(".header__navbar--user .fa-user");

ProfileButton.addEventListener("click", function(event) {
    event.preventDefault();
    showPopup(popup_SelectSigninOrRegister); 
});

popup_SelectSigninOrRegister.addEventListener("click", function(event) {
    // Kiểm tra xem sự kiện click được kích hoạt từ popup_SelectSigninOrRegister hay không nếu không thì close popup
    if (event.target === event.currentTarget) {
        hidePopup(popup_SelectSigninOrRegister); 
    }
});
