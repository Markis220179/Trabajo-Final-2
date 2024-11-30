import mongoose from 'mongoose';

const uri = "mongodb://127.0.0.1:27017/filmDB";

export function myConnection() {
    mongoose.connect(uri)
        .then(() => {
            console.log('Conectado a la base de datos 🎉');
        })
        .catch((err) => {
            console.error('Error al conectar a la base de datos:', err);
        })
}
