import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  showLogin: boolean = false;

  constructor(private authservice: AuthService,private router:Router){}

  onLogin():void{
    if(this.username && this.password){
    this.authservice.loginUser(this.username,this.password).subscribe(
      (response)=>{
        localStorage.setItem('username',response.username);
        window.location.reload();    
      },
      (error) => {
        console.error('Login failed', error);  // Handle error if login fails
      }
    )
    }
    else {
      console.log("Username and password are required.");
    }
  }

  onSubmit() {
    console.log("Login form submitted!");
  }

  loginWithGoogle() {
    console.log("Google login clicked!");
  }
}
