import { Component, Input } from '@angular/core';
import { Project } from '../../model/Project';

@Component({
  selector: 'app-media-display',
  standalone: true,
  imports: [],
  templateUrl: './media-display.component.html',
  styleUrl: './media-display.component.css'
})
export class MediaDisplayComponent
{
  @Input()
  project:Project | undefined;

  viewIndex:number = 0;

  get CurrentImage():string
  {
    return this.project?.resourcesPath + "/media/" + this.project!.mediaURLS[this.viewIndex]!;
  }

  nextImage()
  {
    this.viewIndex++;
    if(this.viewIndex == this.project!.mediaURLS.length)
    {
      this.viewIndex = 0;
    }
    console.log(this.viewIndex);
  }

  previousImage()
  {
    this.viewIndex--;
    if(this.viewIndex < 0)
    {
      this.viewIndex = this.project!.mediaURLS.length - 1;
    }
    console.log(this.viewIndex);
  }
}
