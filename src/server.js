const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const{pageLanding, pageStudy, pageGiveClasses, saveClasses} = require("./pages")
//configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//configurar arquivos estáticos (css, scripts, img)
server
.use(express.urlencoded({extended: true})) //receber os dados do req.body
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)
