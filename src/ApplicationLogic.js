import Project from "./project";
import Todo from "./todo";

class ApplicationLogic {

    constructor() {
        this._selectedProjectID = 0;
        
        this._projects = {}; 

        this._currProjectID = 0; 
        this._currTodoID = 0; 
    }

    /*
        Creates TODO with given characteristic in currentProject 
    */
    createTodo(title, description, priority, dueDate, checked) {
        let todo = new Todo(this._currTodoID, title, description, priority, dueDate, checked);
        this._currTodoID++; 

        this._projects[this._selectedProjectID].addTodo(todo);
    }

    deleteTodo(id) {
        console.log(this._projects);
        this._projects[this._selectedProjectID].removeTodoByID(id);
        console.log(this._projects);
    }

    todoHandlers() {
        //edit, delete, toggle 
        return { delete: this.deleteTodo.bind(this) };
    }

    formSetUp(form, submitButton) {
        const formData = Object.fromEntries(new FormData(form, submitButton));

        let { title, description, date, priority } = formData; 
        this.createTodo(title, description, priority, date, false);
    }

    createProject(name) {
        let proj = new Project(this._currProjectID, name); 
        this._projects[this._currProjectID] = proj;
        this._currProjectID++;  
    }

    getCurrentProject() {
        return this._projects[this._selectedProjectID]; 
    }

    getCurrentProjectID() {
        return this._selectedProjectID;
    } 

    setCurrentProjectID(val) {
        this._selectedProjectID = val;
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

    storeToStorage() {
        localStorage.setItem("projects", JSON.stringify(this._projects));
        localStorage.setItem("currProjectID", this._currProjectID);
        localStorage.setItem("currTodoID", this._currTodoID);
    }

    loadFromStorage() {

        if (localStorage.getItem("projects") !== null) {

        let projects = JSON.parse(localStorage.getItem("projects"));
        let newProjects = {}; 

        for (let projectKey in projects) {

            let { _id:id, _name:name, _todoList:todoList } = projects[projectKey];
            let newProject = new Project(id, name);

            for (let todo of todoList) {
                let { _id:id, _title:title, _description:description, _dueDate:dueDate, _priority:priority, _checked:checked } = todo; 

                let newTodo = new Todo(id, title, description, priority, dueDate, checked); 
                newProject.addTodo(newTodo);
            }

            newProjects[id] = newProject; 
        }
        
        this._projects = newProjects; 
        this._currProjectID = localStorage.getItem("currProjectID");
        this._currTodoID = localStorage.getItem("currTodoID"); 
        } else {
            this.createProject("My First Project!");
        }
    }

    deleteStorage() {
        localStorage.clear();
    }
}

export default ApplicationLogic; 