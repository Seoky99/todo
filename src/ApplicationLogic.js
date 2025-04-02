import Project from "./project";
import Todo from "./todo";

class ApplicationLogic {

    constructor() {
        this._selectedProjectID = 0;
        let defaultProject = new Project(0, "default");
        this._projects = { 0: defaultProject };

        this._currProjectID = 1; 
        this._currTodoID = 0; 
    }

    /*
        Creates TODO with given characteristic in currentProject 
    */
    createTodo(id, title, description, priority, dueDate, checked) {
        let todo = new Todo(id, title, description, priority, dueDate, checked);
        this._currTodoID++; 

        this._projects[this._selectedProjectID].addTodo(todo);
    }

    createProject(name) {
        let proj = new Project(this._currProjectID, name); 
        this._projects[this._currProjectID] = proj;
        this._currProjectID++;  
    }

    get currentProjectID() {
        return this._currentProject; 
    }

    /*
        Check for validity
    */
    set currentProjectID(projectID) {
        this._projectID = projectID;
    }

    get projects() {
        return this._projects;
    }

    loadFromStorage() {

    }
}

export default ApplicationLogic; 