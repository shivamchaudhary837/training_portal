import { Component } from '@angular/core';
import { UserServiceService } from '../../services/userservice.service';

import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private userService:UserServiceService,
    private router: Router
    ) { }

    ngOnInit(): void { }

  public user = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    role:'',
    grade:''
  }
  onSubmit() {
    console.log(this.user);
    if (this.user.username=='' || this.user.username == null) {
      alert("UserName Required!!!")
      return;
    }
    if (this.user.firstName=='' || this.user.firstName == null) {
      alert("FirstName Required!!!")
      return;
    }
    if (this.user.lastName=='' || this.user.lastName == null) {
      alert("LastName Required!!!")
      return;
    }
 


  this.userService.addUser(this.user).subscribe(
    (data)=>{
      //success
      console.log(data)
      alert("User Successfully Registered!");
      this.router.navigate(['/login']);
    },
    (error)=>{
      //error
      console.log(error)
      alert("Something Went Wrong");
    }
  )

}
}
