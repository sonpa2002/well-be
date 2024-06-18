
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
