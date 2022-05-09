import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  error: string = "Email or password incorrect. Please try again.";
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService, private router: Router, private stateService: StateService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.loginUser(this.user).subscribe((returnedUser: User) =>{
      this.user = returnedUser

      if(this.user.id == null){
        window.alert(this.error);
        this.user.email = null;
        this.user.password = null;
      }
      else{
        localStorage.setItem("user", JSON.stringify(this.user));
        localStorage.setItem("reloadedAfterLogin", JSON.stringify(false))
        if(this.user.role === 'Company'){
          this.router.navigate(['/dashboard']);
        }
        if(this.user.role === 'Client'){
          this.router.navigate(['/client-dashboard']);
        }
      }
    })

    

  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
