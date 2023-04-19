import mongoose from "../db.js";

const TicketSchema = new mongoose.Schema({
    name:String,
    user:String,
    eventId:String,
    cost:Number,
    valid:Boolean,
    cancelled:Boolean,
    userId:String
})

const Tickets = mongoose.model('tickets',TicketSchema);


export default class Ticket{
    constructor({name,user,eventId,cost,userId}){
        this.name = name;
        this.user = user;
        this.eventId = eventId;
        this.cost = cost;
        this.valid = true;
        this.cancelled = false;
        this.userId = userId
    }

    async save(){
        return Tickets.findOne(this)
        .then(result1 => {
            if(result1){
                // console.log("first");
                // console.log(result1);
                return {ticketId:result1._id};
            }else{
                let ticket = new Tickets(this);
                return ticket.save()
                .then(result => {
                    // console.log("Second");
                    // console.log(result._id);
                    return {exists:false,saved:true,ticketId:result._id}
                })
                .catch(err =>  {return {exists:false,saved:false,reason:"Error saving to DB"}}) 
            }
        })
        .catch(err =>  {return {exists:false,saved:false,reason:"Error saving to DB"}})  
    }

    static async getTickets(id){
        return Tickets.find({userId:id})
        .then(result => result)
        .catch(err => err);
    }

    static async cancelEvent(id){
        return Tickets.updateMany({eventId:id},{cancelled:true})
        .then(result => {return {updated:true}})
        .catch(err => {return {updated:false,reason:"Couldn't Update DB"}})
    }
}