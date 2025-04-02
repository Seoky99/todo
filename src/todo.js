class Todo {
    constructor(id, title, description, priority, dueDate, checked=false) {
        this._id = id; 
        this._title = title; 
        this._description = description; 
        this._priority = priority; 
        this._dueDate = dueDate; 
        this._checked = checked;  
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title; 
    } 

    set title(setTitle) {
        this._title = setTitle;
    }

    get description() {
        return this._description; 
    } 

    set description(setDescription) {
        this._description = setDescription;
    }

    get priority() {
        return this._priority; 
    } 

    set priority(setPriority) {
        this._priority = setPriority;
    }

    get dueDate() {
        return this._dueDate; 
    } 

    set dueDate(setDueDate) {
        this._dueDate = setDueDate;
    }

    get checked() {
        return this._checked; 
    } 

    set checked(setChecked) {
        this._checked = setChecked;
    } 
}  

export default Todo; 