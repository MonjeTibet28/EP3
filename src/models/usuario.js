import { Schema, model } from "mongoose";

import brcrypt from 'bcryptjs'

const userSchema = new Schema({
    nombre: String,
    apellido: String,
    email: {type: String, unique: true},
    password: String
})


userSchema.methods.encryptPassword = async function(password) {
    const salt = await brcrypt.genSalt(10)
    return await brcrypt.hash(password, salt)
};

userSchema.methods.validPassword = async function(password) {
    return await brcrypt.compare(password, this.password)
};

export default model('User', userSchema)