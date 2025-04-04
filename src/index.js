import ApplicationLogic from "./ApplicationLogic";
import DOMLogic from "./DOMLogic";
import "./styles.css";


const app = new ApplicationLogic(); 
const dom = new DOMLogic(); 


app.loadFromStorage();

dom.setUpTodoButton(app.formSetUp.bind(app), app.getCurrentProjectID.bind(app)); 
dom.setUpProjectButton(app.createProject.bind(app), app.projects, app.setCurrentProjectID.bind(app));


app.createProject("newProject");
app.createProject("newProject2");

dom.renderSidebar(app.projects, app.setCurrentProjectID.bind(app));
dom.renderContent(app.projects[1]); 

const store = document.querySelector("#store");
store.addEventListener("click", (e) => {
    app.storeToStorage();
});

document.querySelector("#delete").addEventListener("click", (e) => app.deleteStorage());
