class Project {

    constructor(id, name) {
        this.id = id;
        this._name = name; 
        this._todoList = [];
    }

    get name() {
        return this._name; 
    }

    get todoList() {
        return this._todoList;
    }

    addTodo(todo) {
        this._todoList.push(todo);
    }

    removeTodoByID(id) {
        this._todoList = this._todoList.filter(elt => id !== elt.id);
    }
}

export default Project;