let d = document
let slider = d.querySelector('.slider')
let currentSlide = 0
let numSlide = slider.children.length

function nextSlide(){
    if(currentSlide === numSlide - 1){
        let position = 0
        slider.style.transform = 'transitionX(-' + position + 'px)'
        currentSlide = 0
    }else{
        let position = (currentSlide+1)*600
        slider.style.transform = 'translateX(-' + position + 'px)'
        currentSlide += 1
    }
}

function previousSlide(){
    if(currentSlide === 0){
        let position = (numSlide-1) * 600
        slider.style.transform = 'transitionX(+' + position + 'px)'
    }
    let position = (currentSlide+1) *600
    slider.style.transform = 'translateX(-' + position + 'px)'
    currentSlide -= 1
}