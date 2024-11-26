import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_models/Projects';
import { Tag } from '../_models/tags';
import { NgFor } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent,NgFor, CollapseModule,FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  java: boolean = false;
  javascript: boolean = false;
  springboot: boolean = false;
  filtering: boolean = false;

  projects = {} as Project[];

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Marcos Santos - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  filter(){
    let filterTags: Tag[] = [];
    if (this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if (this.java){
      filterTags.push(Tag.JAVA);
    }
    if (this.springboot){
      filterTags.push(Tag.SPRINGBOOT);
    }
    if (this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }

    if(this.typescript || this.angular || this.java ||  this.springboot || this.javascript){
      this.filtering = true;
    }else{
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectByFilter(filterTags);
  }

  ResetFilters(){
    this.angular = false;
    this.java = false;
    this.springboot = false;
    this.typescript = false;
    this.javascript = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}
