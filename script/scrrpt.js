window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        document.querySelector('#site-header').classList.add('header-color')

    }
    else {
        document.querySelector('#site-header').classList.remove('header-color')
    }
})
// for first fade show

let img = document.querySelector(".img-1")
let img2 = document.querySelector(".img-2")
let span1 = document.querySelector(".span-1")
let span2 = document.querySelector(".span-2")
let circleicon = document.querySelector(".sec-icon")
let circleicon2 = document.querySelector(".sec-icon-2")

function changeImg() {
    img.classList.toggle('d-none')
    img2.classList.toggle('d-none')
    span1.classList.toggle('d-none')
    span2.classList.toggle('d-none')
    circleicon.classList.toggle('span-blue')
    circleicon2.classList.toggle('span-blue')

    setTimeout("changeImg()", 10000);
}
window.onload = changeImg();


// for page down
// function scrollDown() {
//     window.scrollTo(0, 6800)
// }
// avatar card slider
let sliderLeftArrow = document.querySelector('.slider-left-arrow')
let sliderRighttArrow = document.querySelector('.slider-right-arrow')
let avatar_slide = document.querySelector('.slider')
let zero = 0;


sliderLeftArrow.addEventListener('click', () => {
    if (zero >= 0) return
    zero += 225;
    avatar_slide.style.transform = 'translate(' + zero + 'px,0)'
})

sliderRighttArrow.addEventListener('click', () => {
    let int = (avatar_slide.childElementCount - 4) * 225
    if (zero <= -int) return
    zero -= 225;
    avatar_slide.style.transform = 'translate(' + zero + 'px,0)'
})

// clinet recviwe slider
// it will make array of divs
let index = 0;
let row_div = document.querySelectorAll('.rows .row')
function review_carousal() {
    // row_div.forEach((element,ind) => {

    row_div[index].classList.remove('d-none')
    if (index == 0) {
        row_div[row_div.length - 1].classList.add('d-none')
    }
    else {
        row_div[index - 1].classList.add('d-none')

    }

    if (index < row_div.length - 1) {
        index++;
    }
    else { index = 0 }
    // });
    setTimeout("review_carousal()", 3000);
}
window.onload = review_carousal;

let left_arrow = document.querySelector('.left-arrow') 
let right_arrow = document.querySelector('.right-arrow') 

left_arrow.addEventListener('click',()=>{
    if(index < row_div ){
        console.log('rahim')
        index++; 
        
    }
})