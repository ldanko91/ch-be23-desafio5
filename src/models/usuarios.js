import mongoose from "mongoose";

const userCollection ='users'
const userSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email: String,
    age: String,
    password:String,
    role: {
        type:String,
        default: "User"
    }
})
const userModel= mongoose.model(userCollection,userSchema)
export default userModel;