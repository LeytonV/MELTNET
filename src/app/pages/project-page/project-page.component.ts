import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Project } from '../../model/Project';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects/projects.service';
import { MediaDisplayComponent } from '../../components/media-display/media-display.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [MediaDisplayComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProjectPageComponent{


  referenceProject:Project | undefined;
  projectNotFound:boolean = false;
  projectHTML:string = "";
  constructor(private http: HttpClient, public projectsService: ProjectsService, private route: ActivatedRoute)
  {
    var idParts = this.route.snapshot.paramMap.get('project')?.split('-')!;
    var projType = idParts[0];
    var projName = idParts[1];
    console.log(projType + ' ' + projName);
    this.projectsService.getproject(projType, projName, (x) =>
    {
      if(x.length != 0)
      {
        this.referenceProject = x[0];
        this.getProjectHTML();
      }
      else
      {
        this.projectNotFound = true;
      }
    })
  }

  getProjectHTML():void
  {
    this.http.get("../../../" + this.referenceProject?.resourcesPath + "/projectPage.html", {responseType: "text"}).subscribe(response => {
      this.projectHTML = response;
      console.log(this.projectHTML);
    })
  }

}
