import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  user:any
  
  constructor(private dataService:DataService,
    private userService:UserService) { }

    onSubmit(){
    console.log(this.registrationForm.value)
    this.dataService.sendClickEvent();
    this.userService.addUser(this.registrationForm.value)
  }

  ngOnInit(): void {
    this.registrationForm=new FormGroup({
      name: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      number: new FormControl(null,[Validators.required,]),
      gender: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required]),
      confirmPass: new FormControl(null,[Validators.required])
    });
   }
 errorMsg(){
  return this.registrationForm.controls;
}
}
