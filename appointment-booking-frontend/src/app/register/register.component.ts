import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('',[Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  companyName = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  register(){
    console.log(this.user);
    this.authService.registerUser(this.user).subscribe();
    window.alert("Registration successful, please log in.");
    this.router.navigate(['/login'])
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.firstName.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.lastName.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.companyName.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
