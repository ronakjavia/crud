const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [20, 'Name must be less than 20 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
})

const User = mongoose.model('user', userSchema)

module.exports = User
