import express from 'express'
import { myConnection } from './dbConnection.js';
import { Film } from './models/film.model.js';
const app = express()
const port = 4000

myConnection();

app.use(express.json())

app.get('/films', async (req, res) => {
    const films = await Film.find();
    res.json(films);
})

app.post('/film', async (req, res) => {
    const newFilm = req.body;
    const saveFilm = new Film(newFilm);
    await saveFilm.save();
    res.json({ message: 'La pelicula se ha agregado correctamente' })
})

app.get('/film/:id', async (req, res) => {
    const filmId = req.params.id;
    const film = await Film.findById(filmId);
    if (!film) {
        return res.status(404).send('Pelicula no encontrada')
    }
    console.log(film);
    res.json(film)
})

app.delete('/film/:id', async (req, res) => {
    const filmId = req.params.id;
    await Film.findByIdAndDelete(filmId);
    res.json({ message: 'La pelicula fue eliminada con exito' })
})

app.patch('/film/:id', async (req, res) => {
    const filmId = req.params.id;
    const updateFilm = req.body;
    await Film.findByIdAndUpdate(filmId, updateFilm);
    res.json({ message: 'La pelicula fue modificada correctamente' })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})





