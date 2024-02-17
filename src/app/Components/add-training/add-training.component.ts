import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminserviceService } from '../../services/adminservice.service';
import { response } from 'express';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrl: './add-training.component.css'
})
export class AddTrainingComponent implements OnInit{

  trainingForm: FormGroup;

  constructor(private fb: FormBuilder,private adminService:AdminserviceService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.trainingForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      grades: ['', Validators.required],
      projects:['',Validators.required]
    });
  }

  onSubmit(): void {
    if (this.trainingForm!=null && this.trainingForm.valid) {
      // Send the form data to the backend for processing
      let data=this.trainingForm.value;
      console.log('Form submitted:', data);
      this.adminService.addTraining(data).subscribe(
            (response:any)=>{
               alert("Training added successfully")
               this.trainingForm.reset()
            },
            (error:any)=>{
               console.error("something went wrong ",error)
            }
          )
    } else {
      // Form is invalid, display error message or handle accordingly
       console.error("form invalid error")
    }
  }
}
