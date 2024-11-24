import Database from "../Database/index.js";

export function getAssignmentById(assignmentId) {
    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    if (!assignment) {
        return;
    }
    return assignment;
}



{/* get the assignments using the api -- no reducer*/}
{/* make sure updated data is what is getting caught in the functions*/}

{/* add console logs of data you are getting or passing of a function */}
export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: Date.now().toString() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}

export function findAssignmentsForCourse(courseId) {
    const { assignments } = Database;
    return assignments.filter((assignment) => assignment.course === courseId);
}

export function deleteAssignment(assignmentId) {
    const { assignments } = Database;
    Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    if (!assignment) {
        return;
        // throw new Error(`Assignment with ID ${assignmentId} not found`);
    }
    Object.assign(assignment, assignmentUpdates);
    return assignment;
}

