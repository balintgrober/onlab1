import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appointment-booking-frontend';

  constructor(){
    if(localStorage.getItem("user") === null){
      localStorage.setItem("user", JSON.stringify(new User()));
    }
  }

}
