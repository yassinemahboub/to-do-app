import { Todo, createTodo } from "./src/todo.js"
import { Project, createProject  } from "./src/project.js"
import { setupTabs } from "./src/dom.js";



//  EVENT LISTENERS


// 1. EVENT: Add New Project

const openNewProjectBtn = document.querySelector("#open-project-form-btn");
const closeNewProjectBtn = document.querySelector("#cancel-project-btn");
const newProjectForm = document.querySelector(".project-input");

openNewProjectBtn.addEventListener("click", () => {
    newProjectForm.style.display = "flex";
})

closeNewProjectBtn.addEventListener("click", () => {
    newProjectForm.style.display = "none";
})

// 2. EVENT: Add New Task

const openNewTaskBtn = document.querySelector("#open-task-form-btn")
const cancelNewTaskBtn = document.querySelector("#cancel-task-btn");
const newTaskForm =  document.querySelector(".task-input");

openNewTaskBtn.addEventListener("click", () => {
    newTaskForm.style.display = "flex";
})

cancelNewTaskBtn.addEventListener("click", () => {
    newTaskForm.style.display = "none";
})

// TABS 


document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
  });


