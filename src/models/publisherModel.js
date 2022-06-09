const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const publishSchema = new mongoose.Schema({
name: String,
headQuater: String
},{timestamp: true});

module.exports = mongoose.model ('Publish',publishSchema)