import model from "./model.js"

export function getResultsById(resultsId) {
    return model.findOne({ _id: resultsId });
}

export function createResult(result) {
    delete result._id;
    return model.create(result);
}

export function findResultsForQuiz(quizId, userId) {
    return model.findOne({ quiz: quizId, user: userId });
}

export function updateResult(resultId, resultUpdates) {
    return model.updateOne({ _id: resultId }, resultUpdates);
}

export function deleteResult(resultId) {
    return model.deleteOne({ _id: resultId });
}



