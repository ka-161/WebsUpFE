import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TemplateService, Template } from '../../service/template.service';
import { TemplateList } from '../../templates/template-list/template-list';

@Component({
  selector: 'app-template-selector',
  standalone: true,
  imports: [CommonModule, TemplateService, TemplateList, Template],
  templateUrl: './template-selector.html',
  styleUrl: './template-selector.scss'
})
export class TemplateSelector {

}
