import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../model/Project';
import { ProjectsService } from '../../services/projects/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css'
})
export class ProjectItemComponent{

  @Input()
  referenceProject:Project | undefined

  constructor(public projectsService:ProjectsService, public _router: Router)
  {

  }

  get getThumbnail():string
  {
    return this.projectsService.projectThumbnailURL(this.referenceProject!);
  }

  openProject():void
  {
    this._router.navigateByUrl('projects/' + this.referenceProject?.projectType + '-' + this.referenceProject?.name);
  }
}
