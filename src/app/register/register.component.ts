import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  wrong = false;
  pass = document.getElementById("pass")?.innerText
  cpass = document.getElementById("cpass")?.innerText

  constructor(private dataService: DataService,
    private userService: UserService) { }

  onSubmit() {
    if (this.wrong) {
      this.dataService.sendClickEvent();
      this.userService.addUser(this.registrationForm.value)
    }
  }
  wrongpass() {
    if (this.registrationForm.value.password === this.registrationForm.value.confirmPass) {
      this.wrong = true;
      return false;
    } else {
      return true;
    }
  }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      number: new FormControl(null, [Validators.required,]),
      gender: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      confirmPass: new FormControl(null, [Validators.required])
    });
  }
  errorMsg() {
    return this.registrationForm.controls;
  }
}
