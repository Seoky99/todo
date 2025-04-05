class Project {

    constructor(id, name) {
        this._id = id;
        this._name = name; 
        this._todoList = [];
    }

    get name() {
        return this._name; 
    }

    get todoList() {
        return this._todoList;
    }

    get id() {
        return this._id;
    }

    addTodo(todo) {
        this._todoList.push(todo);
    }

    removeTodoByID(id) {
        this._todoList = this._todoList.filter(elt => id !== elt.id);
    }

    editTodoByID(id, title, description, priority, dueDate, checked) {
        let foundTodo = this._todoList.find(x => x.id === id);
        foundTodo.title = title; 
        foundTodo.description = description; 
        foundTodo.priority = priority; 
        foundTodo.dueDate = dueDate; 
        foundTodo.checked = checked; 
    }
}

export default Project;