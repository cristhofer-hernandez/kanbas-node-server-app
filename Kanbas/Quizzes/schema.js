import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    answer: String,
    correct: Boolean
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
        name: String,
        type: String,
        group: String,
        shuffle: Boolean,
        timed: Boolean,
        minutes: Number,
        multiple_attempts: Boolean,
        attempts_allowed: Number,
        due_date: String,
        assign_date: String,
        available_date: String,
        until_date: String,
        points: Number,
        show_correct_answers: Boolean,
        one_question_at_a_time: Boolean,
        lock_questions: Boolean,
        webcam_required: Boolean,
        access_code: String,
        published: Boolean,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        description: String,
        questions: [questionSchema]
    },
    { collection: "quizzes" }
);
export default schema;