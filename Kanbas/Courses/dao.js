import model from "./model.js";
import * as enrollmentsDao from "../Enrollments/dao.js";
export function findAllCourses() {
    return model.find();
}


export function getCourseById(courseId) {
    return model.find({ course: courseId })
}

export function createCourse(course) {
    delete course._id;
    return model.create(course);
}

export function deleteCourse(courseId) {
    return model.deleteOne({_id: courseId});
}

export function updateCourse(courseId, courseUpdates) {
    return model.updateOne({ _id: courseId }, { $set: courseUpdates });
}


