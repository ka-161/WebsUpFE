import { Component } from '@angular/core';
import { TaskList } from '../task-list/task-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-module-list',
  imports: [TaskList, CommonModule],
  templateUrl: './module-list.html',
  styleUrl: './module-list.scss'
})
export class ModuleList {

}
