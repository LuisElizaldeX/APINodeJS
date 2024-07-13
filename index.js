const express = require('express')
const dotenv = require('dotenv')
const app = express()

dotenv.config();

app.get("/", (req, res) => {
    res.send("Hola mundo con nodemon")
})

// Inicia el servidor web en el puerto SERVER_PORT
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Aplicación de ejemplo escuchando en el puerto ${process.env.SERVER_PORT}`)
})