import ApplicationLogic from "./ApplicationLogic";
import DOMLogic from "./DOMLogic";
import "./styles.css";

const app = new ApplicationLogic(); 
const dom = new DOMLogic(); 

app.loadFromStorage();

dom.setUpTodoButton(app.formSetUp.bind(app), app.getCurrentProject.bind(app), app.todoHandlers.bind(app)); 
dom.setUpProjectButton(app.createProject.bind(app), app.projects, app.getCurrentProjectID.bind(app), app.setCurrentProjectID.bind(app), app.todoHandlers.bind(app));

dom.renderSidebar(app.projects, app.getCurrentProjectID.bind(app), app.setCurrentProjectID.bind(app), app.todoHandlers.bind(app));
dom.renderContent(app.projects[0], app.todoHandlers.bind(app)); 

console.log(app.todoHandlers());

const store = document.querySelector("#store");
store.addEventListener("click", (e) => {
    app.storeToStorage();
});

document.querySelector("#delete").addEventListener("click", (e) => app.deleteStorage());
