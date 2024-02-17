import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
 
  
  apiUrl:string='http://localhost:8080/'
  
  

  constructor(
    private http:HttpClient
  ) { }

  assignTrainingToUser(selectedUser: number, selectedTraining: number) {
    let data={selectedUser,selectedTraining};
    return this.http.post(this.apiUrl,data);
 }
  addTraining(data: any) {

    return this.http.post(this.apiUrl+'training/register-training',this.apiUrl)
   }
   
  getTrainings() {
    return this.http.get(this.apiUrl)
  }
  public loginadmin(admin:any){
    return this.http.post(`${baseUrl}/admin/admin-login`,admin)
  }
}
