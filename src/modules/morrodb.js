import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
 process.env.DB_NAME,
 process.env.DB_USERNAME,
 process.env.DB_PASSWORD,
 {
    host: process.env.DB_HOST,
    dialect: "mysql"
 })

sequelize.authenticate()
.then(() => console.log('DB connected'))
.catch((error)=>{
    console.log('DB connection failed')
})