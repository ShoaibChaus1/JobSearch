import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './AllJobs/content.component';
import { AddJobComponent } from './add-job/add-job.component';

const routes: Routes = [
  { 
    path:"", component:ContentComponent
   },
   {
    path:'addJob', component:AddJobComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
