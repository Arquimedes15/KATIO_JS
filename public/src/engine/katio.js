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

        en("htmlpart", {part: this.part, canal: this.canal});

        rec.on(this.canal, (e) => {
            this.innerHTML = e;
        })

    }
}

window.customElements.define("katio-draw", reder_HTML)