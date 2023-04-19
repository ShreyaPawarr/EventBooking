import mongoose from "../db.js";
import { EventCollections } from "./event.js";
import { addTicket } from "../routes/ticket.js";

const UserSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    password:String,
    wallet:Number,
    tickets:[String]
})

const UserCollection = mongoose.model('users',UserSchema);


export default class User{
    constructor({name,age,email,password}){
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
        this.wallet = 0; 
        this.tickets = [];
    }

    async add(){
        return UserCollection.findOne(this)
        .then(result => {
            if(result){
                // console.log("User found");
                return {exists:true}
            }else{
                let newUser = new UserCollection(this);
                return newUser.save()
                .then(
                    result => {
                        return {exists:false,saved:true};
                    } 
                ).catch(
                    err => {
                        return {exists:false,saved:false}
                    }
                )
            }
        })
        .catch(err => "Couldn't Save")
    }

    static async update(user,id){
        return UserCollection.updateOne({_id:id},user)
        .then(
            result => {return {updated:true}}
        )
        .catch(
            err => {return {updated:false}}
        )
    }
    static async addTickets(userId,eventId){
        return EventCollections.findOneAndUpdate({_id:eventId},{$inc:{seats:-1}})
        .then((result1) => {
            // console.log(result1);
            return UserCollection.findOne({_id:userId})
            .then(async result=> {
                // console.log(result);
                if(result.wallet >= result1.cost){
                    return addTicket({
                        name:result1.name,
                        user:result.name,
                        eventId:eventId,
                        cost:result1.cost,
                        userId:userId
                    })
                    .then(ticket1 => {
                        // console.log(result1.cost);
                        // console.log(ticket1);
                        return UserCollection.updateOne({_id:userId},{$push:{tickets:ticket1._id},$inc:{wallet:-result1.cost}})
                        .then(result => {
                            console.log("Successful");
                            return {eventUpdated:true,ticketUpdated:true}
                        })
                        .catch(
                            err => {return {eventUpdated:true,ticketUpdated:false}}
                        )
                    })
                }else{
                    console.log("Not enough money");
                    await EventCollections.updateOne({_id:result1._id},{$inc:{seats:1}});
                    return {eventUpdated:false,ticketUpdated:false,reason:"Not enough credits"};
                }
            })
            .catch(err => 
                {
                    return {eventUpdated:false,ticketUpdated:false,reason:"Error Updating user"}
                })
            
        })
        .catch(err => {return {eventUpdated:false,ticketUpdated:false,reason:"Error Updating Event"}})
    }

    static async addMoney(userId,amt){
        return UserCollection.updateOne({_id:userId},{$inc:{wallet:amt}})
        .then((result) => {
            return {moneyAdded:true};
        })
        .catch(err => {console.log(err); return {moneyAdded:false}})
    }

    static async get(user){
        return UserCollection.findOne(user)
        .then((result) => {
            if(result)
                return {exists:true,data:result};
            else
                return {exists:false};
        })
        .catch(err => err)
    }

}