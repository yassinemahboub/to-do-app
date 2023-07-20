export class Project {
    constructor(name) {
      this.name = name;
      this.todos = [];
    }
  }


export function createProject(name) {
    return new Project(name);
  }