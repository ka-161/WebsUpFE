import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-template-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-template-detail.html',
})
export class UserTemplateDetail implements OnInit {
  userTemplate: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`/api/user-templates/${id}`).subscribe(data => {
      this.userTemplate = data;
    });
  }

trackByModuleName(index: number, module: any): string {
    return module.name;
  }

  trackByTaskTitle(index: number, task: any): string {
    return task.title;
  }

  trackBySubtaskTitle(index: number, subtask: any): string {
    return subtask.title;
  }

}
