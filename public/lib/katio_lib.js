export default class KATIO_LIB {
    constructor() {
        this.name = "KATIO_LIB"
        this.version = "0.0.0.1"
    }

    msg(msg, a) {
        if (a != "") {
            alert(msg)
        } else {
            console.log(msg)
        }
    }

    iclick(elem, func){
        document.querySelector(elem).addEventListener("click", ()=>{
            let cod = eval(func)
        })
    }
    mlclick(elem, func){
        let d  = document.querySelectorAll(elem)
        d.forEach((e)=>{
            e.addEventListener(func)
        })
    }


}