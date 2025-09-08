import { Component } from '@angular/core';
import { SubTaskList } from '../sub-task-list/sub-task-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [SubTaskList, CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {

}
