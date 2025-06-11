import express from "express";
import User from "../models/userModel.js";
const route = express.Router();

route.post("/create_user", (req, resp) => {
    User.create(req.body)
        .then((res) => {
            console.log(`User created successfully & id = ${res.id}`)
            resp.send(`User created successfully & id =  ${res.id}`)
        })
        .catch((err) => {
            console.log(`Error while creating user ${err}`)
            resp.send(`Error while creating user`)
        })
})

route.put("/update_user/:id", async (req, resp) => {
    try {
        const data = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        console.log(`User updated successfully ${data[0]}`)
        resp.send(`User updated successfully ${data[0]}`)
    } catch (error) {
        console.log(`Error while update user ${error}`)
        resp.send(`Error while update user`)
    }
})

route.delete("/delete_user/:id", async (req, resp) => {
    try {
        const data = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        console.log(`User Delete successfully ${data}`)
        resp.send(`User Delete successfully ${data}`)
    } catch (error) {
        console.log(`Error while Deleted user ${error}`)
        resp.send(`Error while Deleted user`)
    }
})

export default route