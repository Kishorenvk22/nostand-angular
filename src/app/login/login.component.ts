import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  showLogin: boolean = false;

  onSubmit() {
    console.log("Login form submitted!");
  }

  loginWithGoogle() {
    console.log("Google login clicked!");
  }
}
