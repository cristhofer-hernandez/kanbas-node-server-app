import model from "./model.js"

export function getQuizById(quizId) {
    return model.findOne({ _id: quizId });
}

export function createQuiz(quiz) {
    delete quiz._id;
    return model.create(quiz);
}

export function findQuizzesForCourse(courseId) {
    return model.find({ course: courseId });
}


export function deleteQuiz(quizId) {
    return model.deleteOne({ _id: quizId });
}

export function updateQuiz(quizId, quizUpdates) {
    return model.updateOne({ _id: quizId }, quizUpdates);
}


