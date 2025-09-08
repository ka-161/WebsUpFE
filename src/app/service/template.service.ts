import { Injectable } from '@angular/core';

export interface Template{
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private templates: Template[] = [
{    id: 1, name: 'Starter Template', description: 'Simple daily tasks' },
{    id: 2, name: 'Team Tracker', description: 'Simple daily tasks' },
{    id: 3, name: 'Starter Template', description: 'Simple daily tasks' },
  ];

  getTemplates(): Template[]{
    return this.templates;
  }
}
