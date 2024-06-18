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