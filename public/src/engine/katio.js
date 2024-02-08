const rec = io()
function en(canal, msg) {
    rec.emit(canal, msg)
}


class reder_HTML extends HTMLElement {
    constructor() {
        super();

        this.part;
    }

    connectedCallback() {
        this.part = this.getAttribute("part");
        this.canal = Date.now()
        this.cod

        en("htmlpart", { part: this.part, canal: this.canal });

        rec.on(this.canal, (e) => {
            this.innerHTML = e;
        })
        rec.on(this.canal + 5, (e) => {
            try {
                this.cod = eval(e)
            } catch (err) {
                console.log("error de lectura")
                console.log(e)
            }
        })

    }
}

window.customElements.define("katio-draw", reder_HTML)