import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Jobs } from '../Jobs';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit 
{

  images:any=[]
  Jobs:Jobs[]=[]
  bag!:string
  location!:string
  nootbook!:String
  length!:any

  currentPageIndex:number=10
  itemsPerPage:number=10
  startIndex!:number
  endIndex!:number
  len:number=this.length
  searchText!:string
  index=0


  constructor(private jobService:JobsService )
  {
    this.images=jobService.getImages()
    console.log(this.images)
    this.bag=this.images[0][0].path

  }

 

  ngOnInit(): void {

    console.log("Jobs ")

    this.jobService.getPagesOfSize10(this.index).subscribe((data)=>{
      this.Jobs=data;
      console.log(data) })
 
      this.jobService.getLengthOfList().subscribe((data)=>
      {
        this.length=data
      })

  }

  makePages():void
  {
    const startIndex:number = this.currentPageIndex * this.itemsPerPage;
      const endIndex:number = Math.min(startIndex + this.itemsPerPage,100);
 
     console.log(startIndex +" "+endIndex ,this.length,this.itemsPerPage)
  }

  incr()
  {
    this.index++
    console.log(this.index)

    this.jobService.getPagesOfSize10(this.index).subscribe((data)=>this.Jobs=data)
  }

  decr()
  {
     this.index--
     console.log(this.index)
     this.jobService.getPagesOfSize10(this.index).subscribe((data)=>this.Jobs=data)
  }
  
  search()
  {
    
    console.log("Content search",this.searchText)
  }

  searchJob()
  {

    this.searchText=this.jobService.getSearchText()
    console.log(this.searchText)
    if(this.searchText!=null)
    {
      this.jobService.searchJobs(this.searchText,this.index).subscribe((data)=>
  {
    this.Jobs=data
  })
    }

    else
    {
      this.jobService.getPagesOfSize10(this.index).subscribe((data)=>{
        this.Jobs=data;
        console.log(data) })
    }
    

  }


}
