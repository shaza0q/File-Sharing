import express from 'express';
import router from './routes/routes.js'
import cors from 'cors';
import DBConnection from './database/db.js';;


const app =express();

app.use(cors());
app.use('/',router);
const PORT = 8050;


app.listen(PORT, async() =>{
     console.log(`Server survived on port ${PORT}`)
     console.log(`Connecting with DB`);

    await DBConnection();
     console.log(`Connected with DB`);

    });