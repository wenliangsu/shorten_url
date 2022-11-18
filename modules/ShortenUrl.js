const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  originalUrl: {
    type: String,
    required: true
  },
  shortenUrl: {
    type: String,
    required: true
  }
})