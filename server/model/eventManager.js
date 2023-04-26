import mongoose from "../db.js";

const ManagerSchema = new mongoose.Schema({
    organisation:String,
    email:String,
    password:String
})

const Manager = mongoose.model('managers',ManagerSchema);


export default class EventManager{
    constructor({organisation,email,password}){
        this.organisation = organisation;
        this.email = email,
        this.password = password
    }

    async save(){
        return Manager.findOne(this)
        .then(result => {
            if(result){
                return {exists:true}
            }else{
                let newManager = new Manager(this);
                return newManager.save()
                .then(result => {
                    return {exists:false,saved:true}
                })
                .catch(err => {
                    return {exists:false,saved:false};
                })
            }
        })
        .catch(err =>{
            return "Error finding manager"
        })
    }

    static async validate(manager){
        return Manager.findOne(manager)
        .then(result => {
            if(result != undefined)
                return {exists:true}
            
            return {exists:true};
        })
        .catch(err => {
            return "Error finding manager"
        })
    }
}