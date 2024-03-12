import { Component, OnInit } from '@angular/core';
import { ProjectItemComponent } from '../project-item/project-item.component';
import { CollectionReference, Firestore, QueryCompositeFilterConstraint, QueryFieldFilterConstraint, and, collection, collectionData, query, where } from '@angular/fire/firestore';
import { Observable, Observer, Subject } from 'rxjs';
import { Project } from '../../model/Project';
import { ProjectsService } from '../../services/projects/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent{


  games:Project[] = [];
  tools:Project[] = [];
  others:Project[] = [];
  constructor(public projects: ProjectsService, public firestore: Firestore)
  {
    projects.getprojectsByType("games", (x) =>
    {
      this.games = x;
    });

    projects.getprojectsByType("tools", (x) =>
    {
      this.tools = x;
    });

    projects.getprojectsByType("others", (x) =>
    {
      this.others = x;
    });
  }
}
