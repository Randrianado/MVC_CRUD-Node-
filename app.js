import express from 'express';
import router from './Routes/UserRoutes.js';

const app=express();
const port=8000;

app.use(express.json());
app.use('/api',router);

//une fonction qui lance l'application dans un navigateur
app.listen(port,()=>{
    console.log(`L'application est démarée sur le port http://localhost:${port}`)
})