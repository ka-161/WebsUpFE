import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskList } from './templates/task-list/task-list';
import { SubTaskList } from './templates/sub-task-list/sub-task-list';
import { ModuleList } from './templates/module-list/module-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  template: `<router-outlet></router-outlet>`
})

export class App {
  //protected readonly title = signal('WebsUpFE');
}
