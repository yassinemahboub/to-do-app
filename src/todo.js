export class Todo {
    constructor(title, description, dueDate, priority, notes, checklist) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes || '';
      this.checklist = checklist || [];
      this.completed = false;
    }
  }

export function createTodo(title, description, dueDate, priority, notes, checklist) {
    return new Todo(title, description, dueDate, priority, notes, checklist);
  }