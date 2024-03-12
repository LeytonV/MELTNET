import { Component, OnInit } from '@angular/core';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home-about.component.css']
})
export class HomeComponent implements OnInit{

  constructor(public meta:Meta)
  {

  }

  ngOnInit():void
  {
    this.meta.updateTag({property: 'og:title', content: 'MELTPACK.NET | HOME'});
    this.meta.updateTag({property: 'og:image', content: 'YOUR_IMAGE'});
    this.meta.updateTag({property: 'og:url', content: 'https://meltpack.net'})
  }
}
