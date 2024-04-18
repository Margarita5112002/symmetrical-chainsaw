const calificaciones = [
    {
        id: 1,
        alumno: "margarita",
        calificacion: 8
    },
    {
        id: 2,
        alumno: "david",
        calificacion: 7
    },
    {
        id: 3,
        alumno: "maria",
        calificacion: 10
    }
]

const getAll = () => {
    return calificaciones
}

const getById = (id) => {
    const filtered = calificaciones.filter(c => c.id === id)
    return filtered.length === 0 ? null : filtered[0]
}

module.exports = {
    getAll, getById
}