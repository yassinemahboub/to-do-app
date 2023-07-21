import { setupTabs, generateProjectMarkup, generateTaskMarkup, colorPriority, handleDeleteTask } from "./src/dom.js";

// Get DOM elements
const openNewProjectBtn = document.querySelector("#open-project-form-btn");
const closeNewProjectBtn = document.querySelector("#cancel-project-btn");
const newProjectForm = document.querySelector(".project-input");
const openNewTaskBtn = document.querySelector("#open-task-form-btn");
const cancelNewTaskBtn = document.querySelector("#cancel-task-btn");
const newTaskForm = document.querySelector(".task-input");
const createProjectForm = document.querySelector("#new-project");
const createTaskForm = document.querySelector("#new-task");
const allTasksEl = document.querySelector("#all-tasks");

// 1. EVENT: Add New Project
openNewProjectBtn.addEventListener("click", () => {
  newProjectForm.style.display = "flex";
});

closeNewProjectBtn.addEventListener("click", () => {
  newProjectForm.style.display = "none";
});

// 2. EVENT: Add New Task
openNewTaskBtn.addEventListener("click", () => {
  newTaskForm.style.display = "flex";
});

cancelNewTaskBtn.addEventListener("click", () => {
  newTaskForm.style.display = "none";
});

// 3. EVENT: New Project Created
function addNewProject() {
  createProjectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get Input Value
    const projectName = document.querySelector("#project-name").value;

    // Create HTML
    const projectHTML = generateProjectMarkup(projectName);

    // Create a temporary container to hold the parsed HTML
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = projectHTML;

    // Get the first child element (the li element) from the temporary container
    const projectElement = tempContainer.firstElementChild;

    // Append the project element to the parent element
    const parentEl = document.querySelector("#all-projects-container");
    parentEl.appendChild(projectElement);

    // Hide Form
    newProjectForm.style.display = "none";
  });
}

// Save tasks to Local Storage
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  // Retrieve tasks from Local Storage
  function getTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  }

// 4. EVENT: New Task Created
function addNewTask() {
  createTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get All Input Values
    const taskName = document.querySelector("#task-name-input").value;
    const taskDate = document.querySelector("#task-date-input").value;
    const taskPriority = document.querySelector("#priority").value;

    // Create HTML
    const taskHTML = generateTaskMarkup(taskName, taskDate, taskPriority);

    // Create a temporary container to hold the parsed HTML
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = taskHTML;

    // Get the first child element (the li element) from the temporary container
    const taskElement = tempContainer.firstElementChild;

    // Append the project element to the parent element
    const parentEl = document.querySelector("#all-tasks");
    parentEl.appendChild(taskElement);

    // Update tasks in Local Storage
    const tasks = getTasksFromLocalStorage();
    tasks.push({
      name: taskName,
      date: taskDate,
      priority: taskPriority,
    });
    saveTasksToLocalStorage(tasks);

    // Update Color
    colorPriority();

    // Hide Form
    newTaskForm.style.display = "none";
  });
}

// 5. EVENT: Task Deleted
allTasksEl.addEventListener("click", (event) => {
  const clickedElement = event.target;

  // Check if the clicked element is the delete button
  if (clickedElement.classList.contains("fa-trash-can")) {
    handleDeleteTask(clickedElement);
  }
});

// PAGE LOAD CONTENT
addNewProject();
addNewTask();

document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  colorPriority();

  // Get tasks from Local Storage on DOM load
  const tasks = getTasksFromLocalStorage();

  // Update the DOM with retrieved tasks
  tasks.forEach((task) => {
    const taskHTML = generateTaskMarkup(task.name, task.date, task.priority);
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = taskHTML;
    const taskElement = tempContainer.firstElementChild;
    const parentEl = document.querySelector("#all-tasks");
    parentEl.appendChild(taskElement);
  });
});
