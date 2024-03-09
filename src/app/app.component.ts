import { Component } from '@angular/core';
import { JobsService } from './jobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JobSearch';
  logo='../assets/images/naukri_Logo.png'

  images:any[]=[
    {
      name:"bag",
      path:'../assets/images/briefcase.png'
    },
    {
      name:"location",
      path:'../assets/images/location.png'
    }
    ,
    {
      name:'nootbook',
      path:'../assets/images/note-book.png'
    },
    {
      name:'currency',
      path:'../assets/images/exchange.png'
    },
    {
      name:'search',
      path:'../assets/images/icons8-search-50.png'
    }
  ]

  constructor(private jobs:JobsService)
  {
       jobs.addImages(this.images)
  }



}
