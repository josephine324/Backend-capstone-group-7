import express, { urlencoded } from 'express';
import { connectMysql } from './config/mysql.js';
import { createUser, findUser, updateUser, deleteUser } from './controllers/userController.js';

app = express();
port = 3000;

app.use(express.json())
app.use(express.urlencoded())


app.listen(port, ()=>{
    console.log(`app runnin at http://localhost:${port}`);
});