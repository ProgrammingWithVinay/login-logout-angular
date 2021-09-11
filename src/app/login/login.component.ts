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

  invalidCre=false
  email!: string;
  password!: string;

  loginForm= new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  router: any;

  constructor(private http: HttpClient,
    private dataService:DataService,
    private userService:UserService) { }
  

  onSubmit(data: any) {
    const token=this.userService.regUser(data.value);
    const val = this.loginForm.value;
    if(token){
      // localStorage.setItem('token',token.email)
      console.log("log in Sucessful");
      this.dataService.sendClickEvent();

      //on https://reqres.in/api/login getting an error user not found

      // if (val.email && val.password) {
      //   this.userService.login(val.email, val.password)
      //       .subscribe(
      //           () => {
      //               console.log("User is logged in")
      //           }
      //       );
    //}

      // let url = "https://reqres.in/api/login"
      // this.http.post(url,JSON.parse(data.value)).toPromise().then((data:any)=>{
      //   console.log(data)
      //})

       
      this.http.post('https://jsonplaceholder.typicode.com/posts',data.value).subscribe((result) => {

        console.log("data Poasted");
     })
    }
    else{
      console.log("log in not Sucessful");
      this.invalidCre=true;

    }
  }

  ngOnInit(): void {
  }
  get f(){
    return this.loginForm.controls;
  }
}

function Jdata(Jdata: any) {
  throw new Error('Function not implemented.');
}

function subscribe(arg0: (response: any) => void) {
  throw new Error('Function not implemented.');
}

