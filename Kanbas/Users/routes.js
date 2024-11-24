import * as dao from "./dao.js";
import * as courseDao from "../Courses/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";
import {findCoursesForEnrolledUser} from "../Courses/dao.js";

export default function UserRoutes(app) {
    const createUser = (req, res) => { };
    const deleteUser = (req, res) => { };
    const findAllUsers = (req, res) => { };
    const findUserById = (req, res) => {
        const userId = req.params.userId;
        const userUpdates = req.body;
        dao.updateUser(userId, userUpdates);
        const currentUser = dao.findUserById(userId);
        req.session["currentUser"] = currentUser;
        res.json(currentUser);
    };
    const updateUser = (req, res) => {
        const userId = req.params.userId;
        const userUpdates = req.body;
        dao.updateUser(userId, userUpdates);
        const currentUser = dao.findUserById(userId);
        req.session["currentUser"] = currentUser;
        res.json(currentUser);
    };

    const signup = (req, res) => {
        const user = dao.findUserByUsername(req.body.username);
        if (user) {
            res.status(400).json(
                { message: "Username already in use" });
            return;
        }
        const currentUser = dao.createUser(req.body);
        req.session["currentUser"] = currentUser;
        res.json(currentUser);

    };
    const signin = (req, res) => {
        const { username, password } = req.body;
        const currentUser = dao.findUserByCredentials(username, password);
        if (currentUser) {
            req.session["currentUser"] = currentUser;
            res.json(currentUser);
        } else {
            res.status(401).json({ message: "Unable to login. Try again later." });
        }
    };



    const profile = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (!currentUser) {
            res.sendStatus(401);
            return;
        }
        res.json(currentUser);
    };

    const signout = (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };

    const createCourse = (req, res) => {
        const userId = req.params.userId;
        // const currentUser = req.session["currentUser"];
        console.log(userId, "hello")
        const newCourse = courseDao.createCourse(req.body);
        console.log(newCourse)
        enrollmentsDao.enrollUserInCourse(userId, newCourse._id);
        res.json(newCourse);
    };

    const findCoursesForEnrolledUser = (req, res) => {
        let { userId } = req.params;
        if (userId === "current") {
            const currentUser = req.session["currentUser"];
            if (!currentUser) {
                res.sendStatus(401);
                return;
            }
            userId = currentUser._id;
        }
        const courses = courseDao.findCoursesForEnrolledUser(userId);
        res.json(courses);
    };

    const enrollUserInCourse = (req, res) => {
        const userId = req.params.userId;
        const courseId = req.body.courseId;
        console.log(courseId);
        enrollmentsDao.enrollUserInCourse(userId, courseId);
        const courses = courseDao.findCoursesForEnrolledUser(userId);
        res.json(courses);
    }

    const unenrollUserInCourse = (req, res) => {
        const userId = req.params.userId;
        const courseId = req.body.courseId;
        console.log(courseId);
        enrollmentsDao.unenrollUserInCourse(userId, courseId);
        const courses = courseDao.findCoursesForEnrolledUser(userId);
        res.json(courses);
    }

    app.post("/api/users", createUser);
    app.get("/api/users", findAllUsers);
    app.get("/api/users/:userId", findUserById);
    app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);
    app.post("/api/users/:userId/enroll", enrollUserInCourse);
    app.post("/api/users/:userId/unenroll", unenrollUserInCourse);
    app.put("/api/users/:userId", updateUser);
    app.post("/api/users/signup", signup);
    app.post("/api/users/signin", signin);
    app.post("/api/users/signout", signout);
    app.post("/api/users/profile", profile);
    app.post("/api/users/:userId/create/courses", createCourse);
    app.delete("/api/users/:userId", deleteUser);
}
