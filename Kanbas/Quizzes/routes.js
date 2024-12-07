import * as quizzesDao from "./dao.js";
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

    // app.get("/api/quizzes/:quizId/quizzes", (req, res) => {
    //     const { courseId } = req.params;
    //     const quizzes = quizzesDao.findQuestionsForQuiz(courseId);
    //     res.json(quizzes);
    // });
}
