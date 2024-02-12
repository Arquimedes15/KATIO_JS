const rec = io()
function en(canal, msg) {
    rec.emit(canal, msg)
}

function NumRa(min, max) {
    return Math.random() * (max - min) + min;
}

import Setting from "../../config.js";
import Katio from "../../lib/katio_lib.js";


const k = new Katio()
const setting = new Setting();

document.querySelector("title").textContent = setting.name

class reder_HTML extends HTMLElement {
    constructor() {
        super();

        this.part;
    }

    connectedCallback() {
        this.part = this.getAttribute("part");
        this.p = this.getAttribute("main")
        this.l = this.getAttribute("global")
        this.ra = NumRa(1, 10000);//un cero mas para solucionar la vida
        this.canal = Date.now() + this.ra;
        this.cod

        if (parseInt(this.p) == 1) {
            console.log("principal")
        }

        en("htmlpart", { part: this.part, canal: this.canal });
        rec.on(this.canal / 2, (e) => {
            this.innerHTML = ""
            let st = `<style>${e}</style>`
            this.innerHTML += st;

        })
        rec.on(this.canal, (e) => {
            this.innerHTML += e;
        })
        rec.on(this.canal + 5, (e) => {
            try {
                if (parseInt(this.l) == 1) {
                    let s = document.createElement('script')
                    s.textContent = e;
                    document.body.appendChild(s);
                } else {
                    this.cod = eval(e)
                }
            } catch (err) {
                console.log("error de lectura")
            }
        })

    }
}

window.customElements.define("katio-draw", reder_HTML)