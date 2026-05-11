import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    title: String,
    desc: String,
    isDone: Boolean
});

export const Test = mongoose.model('Test', testSchema);