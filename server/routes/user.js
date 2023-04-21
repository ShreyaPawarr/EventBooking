import express from "express"
import User from "../model/user.js";
import mongoose from "../db.js";
const router = express.Router();


router.get("/validate",(req,res) => {
    User.get(req.body)
    .then(
        result => {res.json(result)}
    )
    .catch(err => console.log(err))
})

router.post("/addUser",(req,res) => {
    let user = new User(req.body);
    user.add().then(result => res.json(result)).catch(err => err)
})

router.put("/updateUser",(req,res) => {

})

router.put("/addTicket/:event/:user",(req,res) => {
    let eventId = new mongoose.Types.ObjectId(req.params.event);
    let userId = new mongoose.Types.ObjectId(req.params.user);
    // console.log(eventId);
    User.addTickets(userId,eventId).then((result) => {res.json(result)}).catch(err => err)
})

router.put("/addMoney/:user",(req,res) => {
    let userId = req.params.user;
    let amt = req.body.amount;
    User.addMoney(userId,amt).then(result => res.json(result)).catch(err => err)
})

export {router as userRouter};
