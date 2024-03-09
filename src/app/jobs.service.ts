import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jobs } from './Jobs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  images:any=[]

  searchText!:string

  private  url='http://localhost:8080/'
  constructor(private http:HttpClient) 
  { }


  addNewJob(job:Jobs)
  {
     return this.http.post(`${this.url}addJob`,job)
  }

  getAllJobs()
  {
    console.log(`http://localhost:8080/getJobs`)
    return this.http.get<Jobs[]>(`${this.url}getJobs`)
  }

  getLengthOfList()
  {
    return this.http.get(`${this.url}length`)
  }

  addImages(img:any)
  {
      this.images.push(img)
  }

  getPagesOfSize10(index:number)
  {
     return this.http.get<Jobs[]>(`${this.url}pages/${index}`)
  }

  
  searchJobs(job:string,id:number)
  {
    return this.http.get<Jobs[]>(`${this.url}search/${job}/${id}`)
  }

  getImages()
  {
    return this.images
  }

  setSearchText(SearchText:string)
  {
     this.searchText=SearchText
  }

  getSearchText()
  {
    return this.searchText
  }
}
