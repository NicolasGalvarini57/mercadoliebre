const express = require("express");
const app = express();

const path = require("path");

//recursos publicos // debe buscar en la carpeta public
app.use(express.static("public"));


app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname,"./views/index.html"))
});


app.listen(3030, function(){
    console.log("servidor corriendo")
});

