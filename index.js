// Librerías
const express = require('express'), 
    router = express.Router(), 
    app = express(),
    path = require('path');

// Ajustes
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

//rutas
app.use(require("./routes/index.js"));

// archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

app.listen( process.env.PORT || 3000, () => console.log("Servidor iniciado en el puerto: " + app.get("port")) );