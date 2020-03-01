const slideWrapper = document.querySelector('.slide-wrapper');
const nav_0 = document.querySelector('.nav__0');
const nav_1 = document.querySelector('.nav__1');
const nav_2 = document.querySelector('.nav__2');
let touchStartY;
let touchEndY;
let currentSlide = 0;

const update = function (currentSlide) {
    nav_0.style.backgroundColor = 'white';
    nav_1.style.backgroundColor = 'white';
    nav_2.style.backgroundColor = 'white';
    slideWrapper.style.transform = `translateY(-${currentSlide * 768}px)`;
    document.querySelector('.nav__' + currentSlide).style.backgroundColor = '#f78b1f';

    if (currentSlide == 2) {
        document.getElementById('scroll-down').style.opacity = 0;
        document.getElementById('scroll-down').style.display = "none";
    } else if (currentSlide == 1) {
        document.getElementById('scroll-down').style.opacity = 0;
        document.getElementById('scroll-down').style.display = "fixed"
    } else if (currentSlide == 0) {
        document.getElementById('scroll-down').style.opacity = 1;
        document.getElementById('scroll-down').style.display = "fixed"
    }


}

window.addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
})

window.addEventListener('touchend', e => {
    touchEndY = e.changedTouches[0].clientY;
    if (touchStartY - touchEndY > 50 && currentSlide <= 1) {
        currentSlide += 1;
        update(currentSlide);
    }
    if (touchStartY - touchEndY < -50 && currentSlide >= 1) {
        currentSlide -= 1;
        update(currentSlide);
    }
    // console.log(currentSlide);
})



let sliderRange = document.querySelector("input"),
    blockShown = document.querySelector("output"),
    section1998 = document.getElementById("year1998"),
    section2009 = document.getElementById("year2009"),
    section2016 = document.getElementById("year2016");

sliderRange.addEventListener(
    "input",
    () => {
        console.log(sliderRange.value)
        if (sliderRange.value <= "166") {
            document.getElementById("year1998").style.transition = '2s'
            document.getElementById("year2009").style.transition = '2s'
            document.getElementById("year2016").style.transition = '2s'
            section1998.style.marginLeft = "50px"
            section1998.style.opacity = "1"
            section2009.style.marginLeft = "1050px"
            section2009.style.opacity = "0"
            section2016.style.marginLeft = "2050px"
            section2016.style.opacity = "0"
        } else if (sliderRange.value <= "232") {
            document.getElementById("year1998").style.transition = '2s'
            document.getElementById("year2009").style.transition = '2s'
            document.getElementById("year2016").style.transition = '2s'
            section1998.style.marginLeft = "-1000px"
            section1998.style.opacity = "0"
            section2009.style.marginLeft = "50px"
            section2009.style.opacity = "1"
            section2016.style.marginLeft = "1050px"
            section2016.style.opacity = "0"
        } else if (sliderRange.value <= "300") {
            document.getElementById("year1998").style.transition = '2s'
            document.getElementById("year2009").style.transition = '2s'
            document.getElementById("year2016").style.transition = '2s'
            section1998.style.marginLeft = "-2000px"
            section1998.style.opacity = "0"
            section2009.style.marginLeft = "-1000px"
            section2009.style.opacity = "0"
            section2016.style.marginLeft = "50px"
            section2016.style.opacity = "1"
        }
    },
    false
);