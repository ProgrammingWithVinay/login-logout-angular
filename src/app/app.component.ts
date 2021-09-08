import { Component,OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'task';
  active=true;
  home=false;
  clickEvent: Subscription;
  constructor(private dataService:DataService){
    this.clickEvent=this.dataService.getClickEvent().subscribe(()=>{
      this.status();
    })
  }

  status(){
    return[
      this.active=false,
      this.home=true
    ]
  }
}
