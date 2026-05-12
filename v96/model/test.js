import mongoose, { Types } from "mongoose";

const testSchema = new mongoose.Schema({
    title: {Types:String, require:true, default:" Hello Dosto!!"},
    desc: String,
    isDone: Boolean,
    Days: Number
});

export const Test = mongoose.model('Test', testSchema);