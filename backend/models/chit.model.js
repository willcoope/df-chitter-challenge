import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
});

const chitSchema = new mongoose.Schema({
    content: {type: String, required: true},
    user: {type: userSchema, required: true},
    time: {type: Date, default: Date.now},
});

const Chit = mongoose.model("Chit", chitSchema);

export default Chit;