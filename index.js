import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import { sequelize } from "./src/modules/morrodb";


const app = express();
app.use(cors())
app.use(express.json());
dotenv.config()


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

sequelize
.sync({force:false})
.then(()=>{
    console.log('base de datos sincronizada')
})
.catch((error)=>{
    console.log(`error en la sincronizacion: ${error}`)
})


