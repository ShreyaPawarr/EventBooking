import express from "express"
import EventManager from "../model/eventManager.js";

const router = express.Router();

router.get("/validate/manager",(req,res) => {
    let manager = req.body;

    EventManager.validate(manager)
    .then(result => res.json(result))
    .catch(err => res.send(err));
})

router.post("/manager",(req,res) => {
    let newManager = new EventManager(req.body);

    newManager.save()
    .then(result => res.json(result))
    .catch(err => res.send(err));
})

export {router as ManagerRouter}