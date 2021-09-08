import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logout=false
  login=true
  constructor() { }
  logOut(){
    return [localStorage.removeItem('token'),this.logout=true,this.login=false]
  }

  ngOnInit(): void {
  }

}
