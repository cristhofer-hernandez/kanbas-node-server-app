import * as quizzesDao from "./dao.js";
import * as resultsDao from "../Results/dao.js"
import {findResultsForQuiz} from "../Results/dao.js";
export default function QuizRoutes(app) {
    app.get("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await quizzesDao.getQuizById(quizId);
        res.send(status);
    });

    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await quizzesDao.deleteQuiz(quizId);
        res.send(status);
    });

    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
        res.send(status);
    });

    app.get("/api/quizzes/:quizId/:userId/results", async (req, res) => {
        const { quizId, userId } = req.params;
        const results = await resultsDao.findResultsForQuiz(quizId, userId);
        res.json(results);
    });

    app.post("/api/quizzes/:quizId/:userId/results", async (req, res) => {
        const { quizId, userId } = req.params;
        const result = {
            ...req.body,
            quiz: quizId,
            user: userId,
        };
        console.log("Requesting courseId:", quizId);
        const newResult = await resultsDao.createResult(result);
        res.send(newResult);
    });


}
