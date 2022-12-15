import mongoose from "mongoose";

const Schema = mongoose.Schema;

const JournalSchema = new Schema({
    title: {type: String, unique: true, required: true},
    image: {type: String, required: true},
    description: {type: Boolean, default: false},
    activationLink: {type: String},
    birthDate: {type: String, required: true},
    name: {type: String, required: true},
    phone: {type: String,  required: true},
})

const Journal = mongoose.model("Journal", JournalSchema);

export default Journal;