import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-template-detail',
  standalone: true,
  imports: [CommonModule],
/*  templateUrl: './user-template-detail.html',*/
template: `
@if (userTemplate) {
<!-- userTemplate here: referring to variable not component - holds data returned from backend-->
<div>
  <h2>{{ userTemplate.name }}</h2>

@for (module of userTemplate.modules; track module.name) {
<h3>{{ module.name }}</h3>
    <ul>
@for (task of module.tasks; track task.title) {
  <li>
  {{ task.title }}
  <ul>
    @for (subtask of task.subtasks, track subtask.title) {
      <li>
      {{ subtask.title }}
    </li>
    }
  </ul>
</li>
  }
 </ul>
}
</div>
} @else {
  <p>loading template... </p>
}
`
})

export class UserTemplateDetail implements OnInit {
//  module: any; - not a module
userTemplate: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() { 
    const id = this.route.snapshot.paramMap.get('id');
//this.http.get(`/api/user-modules/${id}`).subscribe(data => this.module = data);
 this.http.get(`/api/user-templates/${id}`).subscribe(data => {
  this.userTemplate = data;
 });
  }
}

/**  styleUrl: './user-module-detail.scss'*/
