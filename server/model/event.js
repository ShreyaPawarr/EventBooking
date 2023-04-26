import mongoose from "../db.js";

const EventSchema = new mongoose.Schema({
    "name":String,
    "host":String,
    "time":Date,
    "seats":Number,
    "hostId":String,
    "location":String,
    "cost":Number,
    "description":String
})

export const EventCollections = mongoose.model("events",EventSchema);

export default class Event{
    constructor({name,time,seats,host,location,cost,description}){
        this.name = name;
        this.host = host;
        this.time = time;
        this.seats = seats;
        this.location = location;
        this.cost = cost;
        this.description = description;
    }

    async save(){
        // console.log(this);
        return EventCollections.findOne(this)
        .then((result) => {
            if(result){
                console.log(result);
                return {exists:true};
            } 
            else{
                let newEvent = new EventCollections(this);
                return newEvent.save()
                .then((result) => {
                    return {exists:false,saved:true}
                })
                .catch(err => err);
            }
        })
        .catch(err => err)
    }

    static async get(id){
        if(id == 0){
            return EventCollections.find()
            .then((result) => {
                return result;
            })
            .catch(err => console.log(err))
        }else{
            EventCollections.find({_id:id})
            .then((result) => {
                return result.json();
            })
            .then((data)=>{
                return data;
            })
            .catch(err => console.log(err))
        }
    }

    static async update(event,id){
        return EventCollections.find({_id:id})
        .then((result) => {
            if(result){
                return EventCollections.replaceOne({_id:id},event)
                .then((result) => {
                    return {exists:true,updated:true};
                })
                .catch(err => err)
            }else{
                return {exists:false}
            }
        })
        .catch(err => err)
    }

    static async delete(id){
        return EventCollections.deleteOne({_id:id})
        .then((result) => {
            return {deleted:true};
        })
        .catch(err => err)
    }

    static async getEventsManager(id){
        return EventCollections.find({host:id})
        .then(
            result => {
                console.log(result);
                return result}
        )
        .catch(err => err)
    }
}