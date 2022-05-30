const mongoose = require('mongoose')
const joi = require('joi')

const UserSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minLength: 6,
        required: true
    },
})

const UserModel = mongoose.model('users', UserSchema)

const addUser = (newUser) =>
    UserModel(newUser).save()
        .then(() => { return { result: 'Registration successfull', status: true } })
        .catch((error) => { return { result: error, status: false } })

// change this with an exists query
const existingEmail = (email) => UserModel.findOne({ email }).then((result) => result)


exports.User = UserModel
exports.addUser = addUser
exports.existingEmail = existingEmail