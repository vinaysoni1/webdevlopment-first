import mongoose from 'mongoose';

const tudoSchema = new mongoose.Schema({
  title: String,
  desc: String,
  isDone: Boolean

});

export const tudo = mongoose.model('tudo', tudoSchema);