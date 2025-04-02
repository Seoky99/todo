class DOMLogic {

    constructor() {

    }

    renderSidebar(projects) {
        const sidebar = document.querySelector("div.sidebar ul");
        Object.values(projects).forEach( project => {
            const projectTab = document.createElement("li");
            projectTab.innerHTML = project.name; 
            sidebar.appendChild(projectTab);
        }
        )
    }

    renderContent(project) {
        const contentBox = document.querySelector("#content-box");

        project.todoList.forEach(todo => {
            const todoCreated = document.createElement("h1");
            todoCreated.innerHTML = todo.title + todo.description; 
            contentBox.appendChild(todoCreated);
        })
    }

}

export default DOMLogic; 