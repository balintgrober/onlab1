import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(){
    this.authService.registerUser(this.user).subscribe();
  }

}
