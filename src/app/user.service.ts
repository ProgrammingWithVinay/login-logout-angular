import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  regUser(user:any){
    let UserArray = [];
    if(localStorage.getItem("Users")){
      UserArray= JSON.parse(localStorage.getItem("Users") || '{}');
    }
    return UserArray.find((p: { email: any; password: any; }) =>p.email=== user.email && p.password=== user.password);
  }
  addUser(user:any){
    let UserArray = [];
    if(localStorage.getItem('Users')){
      UserArray= JSON.parse(localStorage.getItem("Users") || '{}');
      UserArray=[user, ...UserArray];
    }
    else{
      UserArray=[user];
    }
    localStorage.setItem('Users',JSON.stringify(UserArray))
  }

  createUser(user:any){
    return this.http.post("https://reqres.in/api/login",user);
  }
  login(email:string, password:string ) {
    return this.http.post('https://reqres.in/api/login', {email, password})
}
}
