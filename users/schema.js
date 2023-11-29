import mongoose from "mongoose";

const schema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String },
    role: { type: String, enum: ["STUDENT", "FACULTY", "ADMIN", "USER"], default: "USER" },
    dob: Date,
    firstName: String,
    lastName: String
},
    { collection: "users" }
);

export default schema;