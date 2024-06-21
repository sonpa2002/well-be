
// add active button ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
const buttons = document.querySelectorAll('.section__btndiv .Button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
});

// carousel ----------------------------------------------------------------

$(document).ready(function(){
$('.slick__carousel').on('init', function(event, slick){
    // Add custom content to each dot
    $('.slick-dots li').each(function(index){
        $(this).find('button').html('<span class="custom-dot"></span>');
    });
});

$('.slick__carousel').slick({
    slidesToShow: 4,
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
    {
        breakpoint: 1400,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 1000,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }
]
});
});


$(document).ready(function(){
$('.news__slick--carousel').on('init', function(event, slick){
    // Add custom content to each dot
    $('.slick-dots li').each(function(index){
        $(this).find('button').html('<span class="custom-dot"></span>');
    });
});

$('.news__slick--carousel').slick({
    slidesToShow: 3,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }
    ]
});
});


$(document).ready(function(){
$('.partner__slick--component').on('init', function(event, slick){
    // Add custom content to each dot
    $('.slick-dots li').each(function(index){
        $(this).find('button').html('<span class="custom-dot"></span>');
    });
});

$('.partner__slick--component').slick({
    slidesToShow: 6,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
    ]
});
});

// Header navbar ----------------------------------------------------------------
const burger = document.querySelector('.header__navbar--burger');
const navbar = document.querySelector('.header__navbar--content');

burger.addEventListener('click', function(){
    navbar.classList.add('active');
})

const closeBtn = document.querySelector('.close__btn')
closeBtn.addEventListener('click', function(){
    navbar.classList.remove('active');
})

// SLIDER MAIN ----------------------------------------------------------------

const sliderItems = [
    document.querySelector('.sliderMain .Item1'),
    document.querySelector('.sliderMain .Item2'),
    document.querySelector('.sliderMain .Item3'),
    document.querySelector('.sliderMain .Item4')
];
var arraySlider = ["sliderMain__smallItem Item1", "sliderMain__smallItem Item2", "sliderMain__smallItem Item3", "sliderMain__smallItem Item4"];
var animateTime = 0.40; var IntervalTime = 1.00; var IntervalSliderID = 0; var previousRandom = null;
// console.log(Math.floor(IntervalTime*1000));

let adsCourseHeight =  sliderItems[1].querySelector('div .ads-course').getBoundingClientRect().height;
console.log(adsCourseHeight);
for (let i = 0; i < sliderItems.length; i++) {
    let adsCourseobj =  sliderItems[i].querySelector('div .ads-course');
    adsCourseobj.style.maxHeight =adsCourseHeight.toFixed(2) + "px";
    adsCourseobj.style.minHeight =adsCourseHeight.toFixed(2) + "px";
    sliderItems[i].querySelector('div').setAttribute("class", "ads-slider");
}

function CustomSlider(SetAnimateTime, SetIntervalTime){
    animateTime = SetAnimateTime; IntervalTime = SetIntervalTime;

    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].style.animationDuration = (animateTime.toFixed(2) + "s");
    }
}
function fireSlider(SetAnimateTime, SetIntervalTime, arrPhoto, animateStyle){
    CustomSlider(SetAnimateTime, SetIntervalTime);
    if(animateStyle === "ChangePhoto"){
        if(arrPhoto.length > 1){
            let nextPhoto = 0;
            let sliderItemImg;
            IntervalSliderID = setInterval(function (){

                let takeSliderItem = sliderItems.shift();
                sliderItems.push(takeSliderItem);
        
                for (let i = 0; i < sliderItems.length; i++) {
                    sliderItems[i].setAttribute("class", arraySlider[i]);
                }

                for (let i = 0; i < sliderItems.length; i++) {
                    sliderItemImg = sliderItems[i].querySelector('img');
                    sliderItemImg.setAttribute('src', sliderItemImg.getAttribute("src").replace(/[A-G][1-4]\.jpg/g, (`${arrPhoto[nextPhoto]}${i==0 ? 4 : i}.jpg`)));
                }
                nextPhoto++;
                if(nextPhoto >= arrPhoto.length){
                    nextPhoto = 0;
                }
            }, Math.floor(IntervalTime*1000))
        }
        else if(arrPhoto.length === 1){
            let sliderItemImg;
            for (let i = 0; i < sliderItems.length; i++) {
                sliderItemImg = sliderItems[i].querySelector('img');
                sliderItemImg.setAttribute('src', sliderItemImg.getAttribute("src").replace(/[A-G][1-4]\.jpg/g, (`${arrPhoto[0]}${i + 1}.jpg`)));
            }
            IntervalSliderID = setInterval(function (){
                let takeSliderItem = sliderItems.shift();
                sliderItems.push(takeSliderItem);
        
                for (let i = 0; i < sliderItems.length; i++) {
                    sliderItems[i].setAttribute("class", arraySlider[i]);
                }
            }, Math.floor(IntervalTime*1000))
        }
        else
        {
            IntervalSliderID = setInterval(function (){
                let takeSliderItem = sliderItems.shift();
                sliderItems.push(takeSliderItem);
        
                for (let i = 0; i < sliderItems.length; i++) {
                    sliderItems[i].setAttribute("class", arraySlider[i]);
                }
            }, Math.floor(IntervalTime*1000))
        }
    }
    else if(animateStyle === "ChangePhoto-Random"){
        if(arrPhoto.length > 1){
            let choosePhoto = getRandomElement(arrPhoto);
            let sliderItemImg;
            IntervalSliderID = setInterval(function (){

                let takeSliderItem = sliderItems.shift();
                sliderItems.push(takeSliderItem);
        
                for (let i = 0; i < sliderItems.length; i++) {
                    sliderItems[i].setAttribute("class", arraySlider[i]);
                }

                for (let i = 0; i < sliderItems.length; i++) {
                    sliderItemImg = sliderItems[i].querySelector('img');
                    sliderItemImg.setAttribute('src', sliderItemImg.getAttribute("src").replace(/[A-G][1-4]\.jpg/g, (`${arrPhoto[choosePhoto]}${i==0 ? 4 : i}.jpg`)));
                }
                choosePhoto = getRandomElement(arrPhoto);
            }, Math.floor(IntervalTime*1000))
        }
        else if(arrPhoto.length === 1){
            let sliderItemImg;
            for (let i = 0; i < sliderItems.length; i++) {
                sliderItemImg = sliderItems[i].querySelector('img');
                sliderItemImg.setAttribute('src', sliderItemImg.getAttribute("src").replace(/[A-G][1-4]\.jpg/g, (`${arrPhoto[0]}${i + 1}.jpg`)));
            }
            IntervalSliderID = setInterval(function (){
                let takeSliderItem = sliderItems.shift();
                sliderItems.push(takeSliderItem);
        
                for (let i = 0; i < sliderItems.length; i++) {
                    sliderItems[i].setAttribute("class", arraySlider[i]);
                }
            }, Math.floor(IntervalTime*1000))
        }
        else
        {
            IntervalSliderID = setInterval(function (){
                let takeSliderItem = sliderItems.shift();
                sliderItems.push(takeSliderItem);
        
                for (let i = 0; i < sliderItems.length; i++) {
                    sliderItems[i].setAttribute("class", arraySlider[i]);
                }
            }, Math.floor(IntervalTime*1000))
        }
    }
    else if(animateStyle === "Default"){
        let divAds;
        if(arrPhoto.length > 0){
            let sliderItemImg;
            for (let i = 0; i < sliderItems.length; i++) {
                sliderItemImg = sliderItems[i].querySelector('img');
                sliderItemImg.setAttribute('src', sliderItemImg.getAttribute("src").replace(/[A-G][1-4]\.jpg/g, (`${arrPhoto[0]}${i + 1}.jpg`)));
            }
        }
        IntervalSliderID = setInterval(function (){
            let takeSliderItem = sliderItems.shift();
            sliderItems.push(takeSliderItem);
    
            for (let i = 0; i < sliderItems.length; i++) {
                sliderItems[i].setAttribute("class", arraySlider[i]);
                if(i === 2){
                    divAds = sliderItems[i].querySelector('div');
                    divAds.setAttribute("class", "ads-slider-active");
                }
                else{
                    divAds = sliderItems[i].querySelector('div');
                    divAds.setAttribute("class", "ads-slider");
                }
            }
        }, Math.floor(IntervalTime*1000))
    }

}
function stopSlider(){
    clearInterval(IntervalSliderID);
}
function getRandomElement(arr) {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * arr.length);
    } while (randomIndex === previousRandom);
    previousRandom = randomIndex;
    return randomIndex;
}
// fireSlider(0.4, 1.00, ["A","B","C","D","E","F","G"], "ChangePhoto");


fireSlider(0.4, 1.00, ["F"], "Default");


// POPUP----------------------------------------------------------------
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

