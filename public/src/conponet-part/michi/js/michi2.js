console.log("soy js 2")

let hola2 = "wwww"

rec.emit("test01", "hola mundo")

rec.on("test01", (e)=>{
    console.log(e)
})