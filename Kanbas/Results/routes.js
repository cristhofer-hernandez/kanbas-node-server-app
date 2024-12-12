import * as resultsDao from "./dao.js";
import * as quizzesDao from "../Quizzes/dao.js";
export default function ResultRoutes(app) {
    app.get("/api/results/:resultId", async (req, res) => {
        const { resultId } = req.params;
        const status = await resultsDao.getResultsById(resultId);
        res.send(status);
    });

    app.put("/api/results/:resultId", async (req, res) => {
        const { resultId } = req.params;
        const resultUpdates = req.body;
        const status = await resultsDao.updateResult(resultId, resultUpdates);
        res.send(status);
    });

    app.get("/api/results/:quizId/:userId/results", async (req, res) => {
        const { quizId, userId } = req.params;
        const results = await resultsDao.findResultsForQuiz(quizId, userId);
        res.json(results);
    });

    app.delete("/api/quizzes/:resultId", async (req, res) => {
        const { resultId } = req.params;
        const status = await quizzesDao.deleteQuiz(resultId);
        res.send(status);
    });
}
