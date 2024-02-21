let cerr = document.querySelectorAll("#cerr")
let mod = document.querySelector("#modal-font")
document.body.style.overflow = "hidden"


cerr.forEach((e) => {
    e.addEventListener("click", () => {
        mod.style.display = "none"
        document.body.style.overflow = "auto"
    })
})

document.addEventListener("click", (e) => {
    if (e.target.id == "modal-font") {
        mod.style.display = "none"
        document.body.style.overflow = "auto"
    }
})