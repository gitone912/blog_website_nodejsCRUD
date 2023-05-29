import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
    fullname : {type: String, required: true},
    username : {type: String, required: true, unique: true},
    email : {type: String, required: true, unique: true},
    password : {type:String, required: true},
    date_created : {type: Date, default: Date.now}
})

const Account = mongoose.model("Account",accountSchema)

export default Account