import ApplicationLogic from "./ApplicationLogic";
import DOMLogic from "./DOMLogic";
import "./styles.css";


const app = new ApplicationLogic(); 
const dom = new DOMLogic(); 

dom.setUpTodoButton(app.formSetUp.bind(app), app.getCurrentProjectID.bind(app)); 
dom.setUpProjectButton(app.createProject.bind(app), app.projects, app.setCurrentProjectID.bind(app));


app.createProject("newProject");
app.createProject("newProject2");
/*app.createTodo(3, "hi", "whatup", "high", 2, true);
app.createTodo(4, "hi", "whatup", "medium", 2, true);
app.createTodo(5, "hi", "whatup", "low", 2, false); */
dom.renderSidebar(app.projects, app.setCurrentProjectID.bind(app));
dom.renderContent(app.projects[1]); 

