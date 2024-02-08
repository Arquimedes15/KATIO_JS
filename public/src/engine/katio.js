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
        this.p = this.getAttribute("main") 
        this.canal = Date.now()
        this.cod

        if(parseInt(this.p) == 1){
            console.log("principal")
        }
        
        en("htmlpart", { part: this.part, canal: this.canal });


        rec.on(this.canal, (e) => {
            this.innerHTML = e;
        })
        rec.on(this.canal + 5, (e) => {
            try {
                this.cod = eval(e)
            } catch (err) {
                console.log("error de lectura")
            }
        })

    }
}

window.customElements.define("katio-draw", reder_HTML)