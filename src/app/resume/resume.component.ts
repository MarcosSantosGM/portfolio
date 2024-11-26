import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AccordionModule,NgIf],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isworkExperieneceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isCertificationsOpen: boolean = false;
  isSkillsOpen: boolean = false;


  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle('Marcos Santos - Resume')
  }

  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute("target",'blank');
    link.setAttribute('href', '../../assets/Marcos-Santos-CV.pdf');
    link.setAttribute('download', 'Marcos-Santos-CV.pdf');
    link.click();
    link.remove();
  }
}
