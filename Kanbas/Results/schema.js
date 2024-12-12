import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    answer: String,
    correct: Number
});

const questionSchema = new mongoose.Schema({
    title: String,
    q_type: String,
    q_points: Number,
    q_description: String,
    correct_answer: Boolean,
    answer_chosen: String,
    answers: [answerSchema]
});

const schema = new mongoose.Schema(
    {
        attempts_taken: Number,
        points: Number,
        quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
        questions: [questionSchema]
    },
    { collection: "results" }
);
export default schema;