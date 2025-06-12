import express from 'express'
import sequelize from './config/connectDb.js';
import './models/userModel.js';
import route from './control_api/user_api.js';
const app = express();
app.use(express.json());
const port = 5000;
app.use("/", route)


// sequelize.sync({alter: true})
//     .then((res) => {
//         console.log("created Databasse"+ res)
//     }).catch((err) => {
//         console.log("ERROR", err)
//     })



app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
}) 