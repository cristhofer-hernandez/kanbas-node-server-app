import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      default: "USER",
    },
    loginId: String,
    section: String,
    lastActivity: Date,
    totalActivity: String,
  },
  { collection: "users" }
);

// userSchema.set("toJSON", {
//     transform: (doc, ret) => {
//         ret.id = ret._id.toString();
//         delete ret._id;
//         delete ret.__v;
//         return ret;
//     },
// });
export default userSchema;