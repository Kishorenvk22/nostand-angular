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
    // Implement login functionality here
    console.log("Login form submitted!");
  }

  // Handle Google login (mock function for now)
  loginWithGoogle() {
    // Implement Google login logic here (e.g., using Firebase Auth or OAuth)
    console.log("Google login clicked!");
  }
}
