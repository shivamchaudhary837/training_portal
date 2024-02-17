import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserdashboardComponent } from './pages/userdashboard/userdashboard.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { AddTrainingComponent } from './Components/add-training/add-training.component';
import { AssignTrainingsComponent } from './Components/assign-trainings/assign-trainings.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent, 
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent, 
    pathMatch : 'full'
  },
  {
    path : '',
    component : HomepageComponent, 
    pathMatch : 'full'
  },
  {
    path : 'userDashboard',
    component : UserdashboardComponent,
    pathMatch : 'full'
  },
  {
    path : 'resetPassword',
    component : ForgetPasswordComponent, 
    pathMatch : 'full'
  },
  
 {
    path: 'admindashboard',
    component: AdmindashboardComponent,
    children: [
      {
        path: 'add-training',
        component: AddTrainingComponent,
        pathMatch: 'full'
      },
      {
        path: '',
        component: AdminHomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'assign-training',
        component: AssignTrainingsComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
