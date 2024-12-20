import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'nostand-angular';

 constructor(private authservice: AuthService){}

 isLoading: boolean = true; // Initially show the preloader

  ngOnInit() {
    // Set a delay of 3 seconds (3000 milliseconds)
    setTimeout(() => {
      this.isLoading = false;
    }, 1100);
  }
  
}