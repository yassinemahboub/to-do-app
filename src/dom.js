export function setupTabs() {
    const tabs = document.querySelectorAll(".tabs__button");
    const tabContents = document.querySelectorAll(".tabs__content");
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabId = tab.dataset.forTab;
        const targetContent = document.querySelector(`[data-tab="${tabId}"]`);
  
        tabs.forEach(tabItem => tabItem.classList.remove('tabs__button--active'));
        tabContents.forEach(contentItem => contentItem.classList.remove('tabs__content--active'));
  
        tab.classList.add('tabs__button--active');
        targetContent.classList.add('tabs__content--active');
      });
    });
  }


export function generateProjectMarkup(project) {
  return `
    <li data-for-tab="6" class="tabs__button"><i class="fa-solid fa-folder-closed"></i>${project}<span><i class="fa-regular fa-trash-can"></i></span></li>`;
}

export function generateTaskMarkup(title, dueDate, priority) {
  return `<div class="task-item">
          <div class="task-info">
            <div class="checkbox-container">
              <input type="checkbox" id="task-checkbox">
            </div>
              <h5 id="task-title">${title}</h5> <!-- This task title -->
              <span>${dueDate}</span> <!-- This the date -->
              <span class="${priority} id="color-priority">${priority}</span> <!-- This the priority -->
          </div>
          
            <div class="action-wrapper">
              <button type="button" id="modify-task-btn"><i class="fa-solid fa-pen-to-square"></i></button> <!-- This is the edit button. It should open the initial task form to change the content -->
              <button type="button" id="delete-task-btn"><i class="fa-solid fa-trash-can"></i></button> <!-- This is the button to delete completely the task from the project-->
            </div>
          </div>`
}


export function colorPriority() {
  const colorEl = document.querySelector("#color-priority");

  const priority = colorEl.textContent.toLowerCase();



  // Add the appropriate class based on the priority
  if (priority == "high") {
    colorEl.classList.add("high");
  } else if (priority == "medium") {
    colorEl.classList.add("medium");
  } else if (priority == "low") {
    colorEl.classList.add("low");
  }
}
export function handleDeleteTask(deleteBtn) {
  const taskItem = deleteBtn.closest(".task-item");
  if (taskItem) {
    taskItem.remove();
  }
}