import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class UserServiceService {
  

  constructor(
    private http:HttpClient
    ) { }

   
  //add user
  public addUser(user:any){
    return this.http.post(`${baseUrl}/users/register`,user)
  }
  
  //login User
  public loginUser(user:any){
    return this.http.post(`${baseUrl}/users/login`,user);
  }

  //get userbyId
  public getUserbyId(id:any){
    return this.http.get(`${baseUrl}/users/getUserById`+id)
  }

  //delelete userById
  public deleteUserbyId(id:any){
    return this.http.get(`${baseUrl}/users/deleteUserById`+id)
  }

  //get all users
  public getAllUsers(){
    return this.http.get(`${baseUrl}/users/allUsers`)
  }

  //reset password
  public resetPassword(resetPassword:any){
    return this.http.put(`${baseUrl}/users/reset-password`,resetPassword);
  }

}

