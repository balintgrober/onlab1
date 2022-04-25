import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = new User();
  isLoggedin = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    if(this.user.id != null){
      this.isLoggedin = true;
    }
  }

  logout(){
    sessionStorage.setItem("user", JSON.stringify(new User()));
    this.isLoggedin = false;
    this.router.navigate(['']);
  }

}
