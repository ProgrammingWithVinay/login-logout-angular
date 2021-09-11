import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logout=false
  login=true
  constructor(private location: Location) { 
    
  }
  logOut(){
    return [localStorage.removeItem('token'),this.logout=true,this.login=false]
  }

  ngOnInit(): void {
    this.location.subscribe(currentLocation => {
      if (currentLocation.url === '*/home*') {
          window.onpopstate = function (event) {
              history.go(1);
          }
      }
    });
  }

}
