import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
    {
        title: String,
        assignDate: String,
        dueDate: String,
        points: Number,
        type: String,
        description: String,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    },
    { collection: "assignments" }
);

export default assignmentSchema;