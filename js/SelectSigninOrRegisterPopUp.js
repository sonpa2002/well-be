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
