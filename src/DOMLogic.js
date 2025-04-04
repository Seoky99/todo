class DOMLogic {

    constructor() {

    }

    renderSidebar(projects, setProjectID) {
        const sidebar = document.querySelector("div.sidebar ul");
        sidebar.replaceChildren();
        Object.values(projects).forEach( project => {
            const li = document.createElement("li");
            const projectTab = document.createElement("button");
            
            projectTab.innerHTML = project.name; 
            projectTab.addEventListener("click", e => {
                this.renderContent(project)
                setProjectID(project.id);
            }); 

            sidebar.appendChild(projectTab);
        }
        )
    }

    renderContent(project) {
        const contentBox = document.querySelector("#content-box");
        contentBox.replaceChildren();

        project.todoList.forEach(todo => {
            contentBox.appendChild(this.createTodo(todo));
        })
    }

    createTodo(todo) {
        const todoCreated = document.createElement("div");
        todoCreated.classList = `todo ${todo.priority}`;

        const name = document.createElement("p");
        name.innerHTML = todo.title; 
        name.classList = "name";
        todoCreated.appendChild(name);

        const date = document.createElement("p");
        date.innerHTML = todo.dueDate; 
        date.classList = "date";
        todoCreated.appendChild(date);

        const editButton = document.createElement("button");
        editButton.classList = "edit";
        todoCreated.appendChild(editButton);
        
        const delButton = document.createElement("button");
        delButton.classList = "del";
        todoCreated.appendChild(delButton);

        return todoCreated; 
    }

    setUpTodoButton(formSetUp, currentProjectID) {
        const dialog = document.querySelector("#todoDialog");
        const todoButton = document.querySelector("#add");
        const submitButton = document.querySelector("#form-confirm");
        const cancelButton = document.querySelector("#form-cancel");
        const form = document.querySelector(".add-form");

        todoButton.addEventListener("click", e => dialog.showModal());
        cancelButton.addEventListener("click", e => {
            e.preventDefault(); 
            dialog.close(); 
        });
        submitButton.addEventListener("click", e => {
            e.preventDefault();
            formSetUp(form, submitButton); 
            dialog.close();
            this.renderContent(currentProjectID());
        });
    } 

    setUpProjectButton(handleAddProject, projects, setProjectID) {
        const projButton = document.querySelector("#project-button");
 
        projButton.addEventListener("click", (e) => {
            const inputValue = document.querySelector("form #proj-name").value;
            e.preventDefault();

            handleAddProject(inputValue);
            this.renderSidebar(projects, setProjectID);
        })
    }
}

export default DOMLogic; 