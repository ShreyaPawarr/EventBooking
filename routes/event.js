import express from "express"
import Event from "../model/event.js";
import Ticket from "../model/ticket.js";

const router = express.Router();

router.get("/event/:id",(req,res) => {
    let id = req.params.id;
    Event.get(id).then(result => {
        res.json(result)
    }).catch(err => console.log(err))
})

router.post("/event",(req,res) => {
    // console.log(req.body);
    let newEvent = new Event(req.body);
    newEvent.save().then(result => {
        if(result.exists)
            res.send("Event already exists")
        else if(result.saved)
            res.send("Event saved successfully")
    }).catch(err => err);
});

router.put("/event/:id",(req,res) =>{
    Event.update(req.body,id).then(result => console.log(result)).catch(err => err)
});

router.delete("/event/:id",(req,res) => {
    const id = req.params.id;
    Ticket.cancelEvent(id)
    .then(result1 => {
        return Event.delete(id)
        .then(result => {
            return res.json({result,result1});
        })
    .catch(err => res.send(err))
    })
})

router.get("/manager/events/:id",(req,res) => {
    let managerId = req.params.id;
    
    Event.getEventsManager(managerId)
    .then(result =>  res.json(result))
    .catch(err => err)
}) 

export {router as eventRouter}