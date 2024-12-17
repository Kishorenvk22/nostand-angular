import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  constructor(private router:Router){}


  ngOnInit() {
    console.log('HomeComponent Loaded');
  }
  restaurants = [
    {
      id:1,
      category: 'Italian Restaurants',
      logoUrl:'images/italianLogo.png',
      rating: 4,
     
    },
    {
      id:2,
      category: 'Chinese Restaurants',
      logoUrl:'images/chineseLogo.png',
      rating: 3,
   },
    {
      id:3,
      category: 'Indian Restaurants',
      logoUrl:'images/SouthIndianLogo.png',
      rating: 2,

    },
    {
      id:4,
      category: 'Fast Food',
      logoUrl:'images/fastfoodLogo.png',
      rating: 4,

    }
  ];


}
