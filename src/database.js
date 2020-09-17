import mongoose from 'mongoose';
import { MONGODB_URI } from './config';

mongoose
    .connect(MONGODB_URI,{
        //opciones de biblioteca 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }) // direccion
    .then((db) => console.log('Db is connected')) //saber si te conectas
    .catch((err) => console.error(err))

    //para heroku añadir la URL de la BD
