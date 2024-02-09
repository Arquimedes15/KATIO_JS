const express = require("express");
const { createServer } = require("node:http");
const fs = require("fs");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

let web_componet = [];

io.on("connect", (socket) => {
    socket.on("htmlpart", (msg) => {
        let busq = web_componet.findIndex(i=> i.name == msg.part[0]);
        //let scrip = js_bus(msg.part[0]);
        socket.emit(msg.canal/2, web_componet[busq].css);
        socket.emit(msg.canal, web_componet[busq].html);
        socket.emit(msg.canal + 5, web_componet[busq].js);
    })

    socket.on("test01", (e) => {
        console.log(e);
        socket.emit("test01", "Todo OK");
    })

    socket.on("reload", (e)=>{
        web_componet = []
        load_component()
    })
})


app.use("/", express.static(__dirname + "/public/"));

server.listen(8888, () => {
    console.log("http://localhost:8888");
})

class Componet_web {
    constructor(html, js, css, name) {
        this.name = name;
        this.html = html;
        this.js = js;
        this.css = css;
    }
}


function reder_HTML(dir) {
    try {
        return fs.readFileSync(dir);

    } catch (error) {
        return fs.readFileSync("error");
    }

}

function js_bus(dir) {
    //tambien style css
    try {
        let dirfile = fs.readdirSync(dir)
        let scrip = ""

        for (let x = 0; x < dirfile.length; x++) {
            scrip += fs.readFileSync(dir + dirfile[x]) + "\n"
        }
        return scrip
    } catch (err) {
        return ''
    }
}

function load_component() {
    let dir = `./public/src/conponet-part/`;
    let files = fs.readdirSync(dir);

    for (let x = 0; x < files.length; x++) {
        let html = reder_HTML(`${dir}${files[x]}/${files[x]}.html`)
        let js = js_bus(`${dir}${files[x]}/js/`);
        let style = js_bus(`${dir}${files[x]}/style/`)
        
        web_componet.push(new Componet_web(html+"",js,style, files[x]))
    }
}

load_component();