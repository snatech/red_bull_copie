
const positions = [-100, 0, 100, 200]

const slides = document.querySelectorAll("header #content div")

function slideFunct() {
    slides.forEach((slide)=>{
        slide.setAttribute("numero", (slide.getAttribute("numero")-1+4)%4)
        // slide.style.transform = "translateX("+positions[slide.getAttribute("numero")]+"%)"
    })

    update()
}

function update() {
    slides.forEach((slide)=>{
        slide.style.transform = "translateX("+positions[slide.getAttribute("numero")]+"%)"
    })
}


setInterval(slideFunct, 3000);