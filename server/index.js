import express from 'express';
import router from './routes/routes.js'
import cors from 'cors';
import DBConnection from './database/db.js';;


const app =express();

app.use(cors());
app.use('/',router);
const PORT = 8050;

DBConnection();
app.listen(PORT, () => console.log(`Server survived on port ${PORT}`));