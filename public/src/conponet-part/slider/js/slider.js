let slider = document.querySelector(".slider")
let but = document.querySelector(".indicator-buttons");

slider.innerHTML += `<img alt="nose" id="cal-slider-ka" src="./src/img/01.png">`
slider.innerHTML += `<img alt="nose" id="cal-slider-ka" src="./src/img/02.png">`

but.innerHTML += `<button class="indicator active">1</button>`
but.innerHTML += `<button class="indicator">2</button>`
let img = slider.querySelectorAll("img")

let index = 0;

slider.style.width = `${img.length}00%`

let nextSlider = document.querySelector(".next")
let prev = document.querySelector(".prev")

let medi = 100/img.length

nextSlider.addEventListener("click", ()=>{
    index++;
    if(index == img.length || index > img.length){
        index = 0;
        slider.style.transform = `translateX(-${0}%)`
        return
    }
    slider.style.transform = `translateX(-${medi*index}%)`
})

prev.addEventListener("click", ()=>{
    index--;
    if(index == -1 || index < -1){
        console.log(index)
        index = img.length-1;
        slider.style.transform = `translateX(-${medi*(img.length-1)}%)`
        return
    }
    slider.style.transform = `translateX(+${medi*index}%)`
})