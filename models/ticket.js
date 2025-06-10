import mongoose from "mongoose";
import { type } from "os";

const ticketSchema = new mongoose.Schema({
    title : String,
    description : String,
    status : {
        type : String,
        default : "TODO"
    },
    createdBy : {
        type : mongoose.Schema.ObjectId,
        ref : "User"
    },
    assignTo : {
        type : mongoose.Schema.ObjectId,
        ref : "User",
        default : null
    },
    priority: String,
    deadline : String,
    helpfulNotes : String,
    relatedSkills : [String],
    createdAt : {
        type : Date,
        default : Date.now

    }
});


export default mongoose.model("Ticket", ticketSchema);