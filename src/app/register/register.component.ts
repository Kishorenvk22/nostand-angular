
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValueChangeEvent } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']  
})
export class RegisterComponent implements OnInit {

  loginForm!: FormGroup;
 
  // isloggedin:boolean=false;
  

  loginError: string='';

  constructor(private fb: FormBuilder, private router: Router,private authservice : AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username : ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(12)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(7)])],
    });
  }

  onSubmit(): void{
    if(this.loginForm.invalid){
      return;
    }


    const username=this.loginForm.get('username')?.value;
    const password=this.loginForm.get('password')?.value;



    this.authservice.login(username,password).subscribe(

      (response)=>{
        if(response){
          // this.isloggedin=true;
          this.router.navigate(['/dashboard/home']);  



        }
        else {
          this.loginError = 'Login failed! Incorrect username or password.';
          // this.isloggedin=false;
        
          } 
      },
      (error) => {
        this.loginError = 'An error occurred. Please try again later.';
      }

    );


  }


  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
