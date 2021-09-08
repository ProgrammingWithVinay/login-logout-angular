import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { UserService } from '../user.service';
import { FormControl,FormGroup,Validators} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm= new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  constructor(private http: HttpClient,
    private dataService:DataService,
    private userService:UserService) { }
  onSubmit(data: any) {
   
    //this link doesnot working properly
    //this.http.post('https://reqres.in/api/login',JSON.stringify(data.value))
    this.http.post('https://jsonplaceholder.typicode.com/posts',data.value).subscribe((result) => {
      this.dataService.sendClickEvent();
      console.log(data.value);
      const token=this.userService.regUser(data.value)
      if(token){
        localStorage.setItem('token',token.email)
      }
      else{

      }
    })
  }

  ngOnInit(): void {
  }
  get f(){
    return this.loginForm.controls;
  }
}
