import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-module-detail',
  standalone: true,
  imports: [CommonModule],
/*  templateUrl: './user-module-detail.html',*/
template: `
<div *ngIf="module">
<h2>{{ module.name }}</h2>
    <ul>
<li *ngFor="let task of module.tasks">{{ task }}</li>
    </ul>
</div>
`
})

export class UserModuleDetail implements OnInit {
  module: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() { 
    const id = this.route.snapshot.paramMap.get('id');
this.http.get(`/api/user-modules/${id}`).subscribe(data => this.module = data);
   }
}

/**  styleUrl: './user-module-detail.scss'*/
