import * as dotenv from 'dotenv';
import mongoose from "mongoose"
dotenv.config();

mongoose.connect(`mongodb://arshdeep0220:${process.env.DBPASS}@ac-poymgry-shard-00-00.ladvrn9.mongodb.net:27017,ac-poymgry-shard-00-01.ladvrn9.mongodb.net:27017,ac-poymgry-shard-00-02.ladvrn9.mongodb.net:27017/?ssl=true&replicaSet=atlas-zfj74m-shard-0&authSource=admin&retryWrites=true&w=majority`,{ useNewUrlParser: true })
.then((result) => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log(err);
});

export default mongoose;





