import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    fullname : {
        type: String,
        // required: [true, "Fullname is required"],
    },
    email : {
        type: String,
        // required: [true, "Email is required"],
        // unique: true,
    },
    password: {
        type: String,
        // required: [true, "Password is required"],
    }
});

const Users = mongoose.model('User', UserSchema);

export default Users;
