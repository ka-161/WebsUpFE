# WebsUpFE

# General Naming Guidelines (Angular)

| Item         | Convention                          | Example                          |
|--------------|--------------------------------------|----------------------------------|
| **Component**| `PascalCase` for class name, `kebab-case` for file name | `TaskListComponent` → `task-list.component.ts` |
| **Service**  | `PascalCase` + `Service` suffix      | `TaskService` → `task.service.ts` |
| **Module**   | `PascalCase` + `Module` suffix       | `TaskModule` → `task.module.ts`   |
| **Selector** | `kebab-case` with prefix             | `app-task-list`                  |
| **Interface**| `PascalCase` (optionally `I` prefix) | `Task` or `ITask`                 |
| **Variable** | `camelCase`                          | `taskList`, `subTaskCount`        |
| **Folder**   | `kebab-case`                         | `task-list/`, `shared/`           |





**********************
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

