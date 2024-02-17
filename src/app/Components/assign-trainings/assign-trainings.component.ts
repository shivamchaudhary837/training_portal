import { Component } from '@angular/core';
import { UserServiceService } from '../../services/userservice.service';
import { AdminserviceService } from '../../services/adminservice.service';

@Component({
  selector: 'app-assign-trainings',
  templateUrl: './assign-trainings.component.html',
  styleUrl: './assign-trainings.component.css'
})
export class AssignTrainingsComponent {
  users: any[] = [];
  trainings: any[] = [];
  selectedUser: number = 0;
  selectedTraining: number = 0;

  constructor(private userService: UserServiceService, private adminService: AdminserviceService) { }

  ngOnInit(): void {
    this.loadUsers();
    this.loadTrainings();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe( (users:any) => {
      this.users = users;
    });
  }

  loadTrainings(): void {
    this.adminService.getTrainings().subscribe((trainings:any) => {
      this.trainings = trainings;
    });
  }

  assignTraining(): void {
    if (this.selectedUser && this.selectedTraining) {
      // Send HTTP request to assign training to user
      this.adminService.assignTrainingToUser(this.selectedUser, this.selectedTraining)
        .subscribe(
          (res) => {
          //success('Training assigned successfully!');
          // Optionally, update the UI or reset form fields
          alert("Training Assigned Successfully")
          this.selectedUser = 0;
          this.selectedTraining = 0;
        }, (error) => {
          //this.toastr.error('Failed to assign training. Please try again later.');
          console.error('Error assigning training:', error);
        });

    } else {
      console.error('Error3 assigning training:');
      //warning('Please select both user and training to assign.');
    }
  }
}
