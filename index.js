require("dotenv").config()
const express = require("express")
const cors = require("cors")
const califRouter = require("./routes/calificaciones")

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/calificaciones', califRouter)

app.listen(process.env.PORT, () => {
    console.log(`servidor escuchando en puerto ${process.env.PORT}`)
})