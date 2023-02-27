const express = require("express");
const app = express();

const path = require("path");

//recursos publicos // debe buscar en la carpeta public
app.use(express.static("public"));


const port = process.env.PORT || 3000;



app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname,"./views/index.html"))
});

app.get("/contacto", function(req, res){
    res.sendFile(path.resolve(__dirname,"./views/contacto.html"))
});



app.listen(port, function(){
    console.log("servidor corriendo " + port)
});

