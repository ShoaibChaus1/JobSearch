import { Component, Input } from '@angular/core';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 @Input() logo!:string

 ragister=false

 image:any[]=[]

 searchText!:string

 constructor(private jobService:JobsService)
 {
   this.image=jobService.getImages()
   console.log(this.image)
 }
 


 emplr()
 {
  this.ragister=true
  console.log(this.ragister)
 }
   

 jobs()
 {
  this.ragister=false
 }

 searchJob()
{
    this.jobService.setSearchText(this.searchText)
}
}
