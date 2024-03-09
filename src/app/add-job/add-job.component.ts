import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Jobs } from '../Jobs';
import { JobsService } from '../jobs.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.css'
})
export class AddJobComponent {

  Job: Jobs =
    {
      jobId: 0,
      jobTitle: '',
      companyName: '',
      jobExperiance: '',
      jobSalary: 0,
      jobLocation: '',
      jobDescription: '',
      jobSkills: []

    }


  skills: string[] = [];

  myForm: FormGroup;

  
  mform: any;

  constructor(private jobService: JobsService, private fb: FormBuilder, private fb1: FormBuilder) {


    this.myForm = this.fb.group({
      jobTitle: ["", [Validators.required, Validators.minLength(8)]],
      companyName: ["", [Validators.required, Validators.minLength(8)]],
      jobExperiance: [0, [Validators.required]],
      jobSalary: [0, [Validators.required]],
      jobLocation: ["", [Validators.required,]],
      jobDescription: ["", [Validators.required,]]

    })

    this.mform = this.fb.group(
      {
        jobSkills: ["", [Validators.required]]
      }
    )
  }

  addSkill() {

    console.log()

    let skill: string = this.mform.value['jobSkills']
    this.skills.push(skill);
    skill = '';
    this.Job.jobSkills = this.skills
    console.log(this.Job.jobSkills)
    this.mform.reset()

  }

  addJob() {
    this.Job.jobTitle = this.myForm.value['jobTitle']
    this.Job.companyName = this.myForm.value['companyName']
    this.Job.jobDescription = this.myForm.value['jobDescription']
    this.Job.jobExperiance = this.myForm.value['jobExperiance']
    this.Job.jobSalary = this.myForm.value['jobSalary']
    this.Job.jobLocation = this.myForm.value['jobLocation']

    console.log(this.Job)
    console.log(this.Job.jobTitle)
    console.log(this.myForm)
    this.skills=[]
    if (this.myForm.valid) {
      this.jobService.addNewJob(this.Job).subscribe((data) => {
        console.log(data)
      })
      this.myForm.reset()
     

    }
  }

}
