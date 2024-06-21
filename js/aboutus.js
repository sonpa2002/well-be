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

// NEWS SLICK ----------------------------------------------------------------
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



const sliderItems = [
    document.querySelector('.sliderMain .Item1'),
    document.querySelector('.sliderMain .Item2'),
    document.querySelector('.sliderMain .Item3'),
    document.querySelector('.sliderMain .Item4')
];
var arraySlider = ["sliderMain__smallItem Item1", "sliderMain__smallItem Item2", "sliderMain__smallItem Item3", "sliderMain__smallItem Item4"];
var animateTime = 0.40; var IntervalTime = 1.00; var IntervalSliderID = 0; var previousRandom = null;
// console.log(Math.floor(IntervalTime*1000));
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

fireSlider(0.4, 1.00, ["A","B","C","D","E","F","G"], "ChangePhoto");