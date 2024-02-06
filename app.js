const express = require("express")
const { createServer } = require("node:http")
const fs = require("fs")
const { Server } = require("socket.io")
const { exec } = require("node:child_process")

const app = express()
const server = createServer(app)
const io = new Server(server)



io.on("connect", (socket) => {
    socket.on("htmlpart", (msg) => {
        let busq = reder_HTML(msg.part[0])
        socket.emit(msg.canal, busq + "")
    })
})


app.use("/", express.static(__dirname + "/public/"))

server.listen(8888, () => {
    console.log("http://localhost:8888")
})

function reder_HTML(name) {
    try {

        let html = fs.readFileSync("./public/src/conponet-part/" + name + ".html")
        return html;

    } catch (error) {
        return fs.readFileSync("./public/src/conponet-part/error.html")
    }

}