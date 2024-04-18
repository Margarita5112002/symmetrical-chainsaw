const express = require("express")
const calificacionesServicio = require("../servicios/calificaciones")

const router = express.Router()

router.get('/', async (req, res) => {
    const califs = calificacionesServicio.getAll()
    res.json(califs)
})

module.exports = router