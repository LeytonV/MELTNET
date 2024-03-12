import { Injectable } from '@angular/core';
import { Project } from '../../model/Project';
import { CollectionReference, Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(public firestore: Firestore) { }

  projectThumbnailURL(project:Project):string
  {
    return project.resourcesPath + '/' + project.thumbnail;
  }

  projectCoverURL(project:Project):string
  {
    return project.resourcesPath + '/' + project.cover;
  }

  getprojectsByType(type:string, func: (n: Project[]) => void):void
  {
    const q = query(collection(this.firestore, type) as CollectionReference<Project>);
    var projects:Observable<Project[]> = collectionData(q);

    projects.subscribe((x) => func(x));
  }

  getproject(type:string, name:string, func: (n: Project[]) => void):void
  {
    const q = query(collection(this.firestore, type + 's') as CollectionReference<Project>, where("name", "==", name));
    var projects:Observable<Project[]> = collectionData(q);

    projects.subscribe((x) => func(x));
  }
}
