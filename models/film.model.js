import mongoose from 'mongoose';

const FilmSchema = new mongoose.Schema({
    titulo: String,
    director: String,
    anio_estreno: Number,
    genero: String,
    img: String,
});

const Film = mongoose.model('films', FilmSchema);

export { Film };