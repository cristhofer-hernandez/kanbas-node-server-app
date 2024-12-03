import Database from "../Database/index.js";

export function getQuizById(quizId) {
    console.log("This is the quizId: ", quizId)
    const { quizzes } = Database;
    const quiz = quizzes.find((quiz) => quiz._id === quizId);
    if (!quiz) {
        return;
    }
    return quiz;
}



{/* get the assignments using the api -- no reducer*/}
{/* make sure updated data is what is getting caught in the functions*/}

{/* add console logs of data you are getting or passing of a function */}
export function createQuiz(quiz) {
    const newQuiz = { ...quiz, _id: Date.now().toString() };
    Database.quizzes = [...Database.quizzes, newQuiz];
    return newQuiz;
}

export function findQuizzesForCourse(courseId) {
    const { quizzes } = Database;
    return quizzes.filter((quiz) => quiz.course === courseId);
}

export function deleteQuiz(quizId) {
    const { quizzes } = Database;
    Database.quizzes = quizzes.filter((quiz) => quiz._id !== quizId);
}

export function updateQuiz(quizId, quizUpdates) {
    const { quizzes } = Database;
    const quiz = quizzes.find((quiz) => quiz._id === quizId);
    if (!quiz) {
        return;
        // throw new Error(`Assignment with ID ${assignmentId} not found`);
    }
    Object.assign(quiz, quizUpdates);
    return quiz;
}

