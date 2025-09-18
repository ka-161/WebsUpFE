import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-detail',
  standalone: true,
  imports: [CommonModule], 
   /*templateUrl: './template-detail.html',*/
  template:`
  <div *ngIf="template">
      <h2>{{ template.name }}</h2>
      <ul>
        <li *ngFor="let task of template.tasks">{{ task }}</li>
      </ul>
      <button (click)="useTemplate()">Use This Template</button>
    </div>
`
  /* styleUrl: './template-detail.scss'*/
})
export class TemplateDetail implements OnInit 
{ 
 template: any;

 constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router)
 {}

 ngOnInit() {
  console.log('templatedetail loade');
     const id = this.route.snapshot.paramMap.get('id');
     this.http.get(`/api/modules/${id}`).subscribe(data => this.template = data);
      }
  
  useTemplate() {
    this.http.post('/api/user-templates', { templateId: this.template._id})
    .subscribe((newModule: any) => {
      this.router.navigate(['/user-templates', newModule._id]);
    });
  }
}
