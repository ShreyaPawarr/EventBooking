import express from "express"
import { eventRouter } from "./routes/event.js";
import bodyParser from "body-parser";
import { userRouter } from "./routes/user.js";
import { ManagerRouter } from "./routes/eventManager.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(ManagerRouter)
app.use(eventRouter);
app.use(userRouter);

app.listen(process.env.PORT || 3000,(err) => {
    if(err)
        console.log(err);
    else
        console.log(`Server running at port ${process.env.PORT || 3000}`);
});