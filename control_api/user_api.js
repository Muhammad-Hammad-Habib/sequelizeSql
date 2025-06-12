import express from "express";
import User from "../models/userModel.js";
const route = express.Router();

// Create User 
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

// update single user by id
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

// Get all users data 
route.get("/getALl_user", async (req, resp) => {
    try {
        const data = await User.findAll()
        console.log(`Get Users Data ${JSON.stringify(data)}`)
        resp.send(`Get Users Data ${JSON.stringify(data)}`)
    } catch (error) {
        console.log(`Error while getting users data ${error}`)
        resp.send(`Error while getting users data`)
    }
})

// Get single user by PK (ID)
route.get("/get_user_by_id/:id", async (req, resp) => {
    try {
        const data = await User.findByPk(req.params.id)
        console.log(`Get User Data ${JSON.stringify(data)}`)
        resp.send(`Get User Data ${JSON.stringify(data)}`)
    } catch (error) {
        console.log(`Error while getting user ${error}`)
        resp.send(`Error while getting user`)
    }
})

// Delete single user by id
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