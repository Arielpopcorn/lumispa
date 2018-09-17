let d = document
let slider = d.querySelector('.slider')
let currentSlide = 0
let numSlides = slider.children.length
let leftButton = d.querySelector('.left')
let rightButton = d.querySelector('.right')

function nextSlide(){
    if(currentSlide === numSlides - 1){
        let position = 0
        slider.style.transform = 'translateX(-' + position + 'px)'
        currentSlide = 0
    } else {
        let position = (currentSlide + 1) * 600
        slider.style.transform = 'translateX(-' + position + 'px)'
        currentSlide += 1
    }
    
}

function prevSlide(){
    if(currentSlide === 0){
        console.log('if')
        let position = (numSlides - 1) * 600
        slider.style.transform = 'translateX(-' + position + 'px)'
        currentSlide = numSlides - 1
        // do something else go to lastSlide
    } else {
        console.log('else', currentSlide)
        let position = (currentSlide - 1) * 600
        slider.style.transform = 'translateX(-' + position + 'px)'
        currentSlide -= 1
    }
}

leftButton.addEventListener('click', prevSlide)
rightButton.addEventListener('click', nextSlide)