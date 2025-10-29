const comicsController ={}

comicsController.getComics = (req, res) => {
    res.json({mensaje: "Hola Mundo!"})
}

module.exports = comicsController