import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  showLogin: boolean = false;
  loginError:String='';

  constructor(private authservice: AuthService,private router:Router){}

  ngOnInit() {
    console.log('login Loaded');
  }
  closeLogin() {
    this.router.navigate(['/dashboard/home']);
  }
  onLogin():void{
    if(this.username && this.password){
    this.authservice.loginUser(this.username,this.password).subscribe(
      (response)=>{
        localStorage.setItem('username',response.username);
        window.location.reload();    
      },
      (error) => {
        this.loginError='Incorrect username or password';
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
