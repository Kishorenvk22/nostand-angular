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
  // restaurants = [
  //   {
  //     id:1,
  //     category: 'Italian Restaurants',
  //     logoUrl:'images/italianLogo.png',
  //     rating: 4,
     
  //   },
  //   {
  //     id:2,
  //     category: 'Chinese Restaurants',
  //     logoUrl:'images/chineseLogo.png',
  //     rating: 3,
  //  },
  //   {
  //     id:3,
  //     category: 'Indian Restaurants',
  //     logoUrl:'images/SouthIndianLogo.png',
  //     rating: 2,

  //   },
  //   {
  //     id:4,
  //     category: 'Fast Food',
  //     logoUrl:'images/fastfoodLogo.png',
  //     rating: 4,

  //   }
  // ];
  restaurants = [
    {
      id: 1,
      name: 'Asia Seven',
      category: 'Chinese Restaurants',
      imageUrl: 'images/asiaSeven.png',
      cuisine: 'Chinese, Biryani',
      rating: 4.4,
      deliveryTime: '25-30 mins'
    },
    {
      id: 2,
      name: 'BurgerKing',
      category: 'Arabian Restaurants',
      imageUrl: 'images/Burgerking.png',
      cuisine: 'Arabian, Indian, Grill',
      rating: 4.5,
      deliveryTime: '45-50 mins'
    },
    {
      id: 3,
      name: 'KFC',
      category: 'FriedChicken',
      imageUrl: 'images/kfc.png',
      cuisine: 'Friedchicken, Burger',
      rating: 4.3,
      deliveryTime: '30-40 mins'
    },
    {
      id: 4,
      name: 'Pizza-Hut',
      category: 'pizza',
      imageUrl: 'images/pizzahut.png',
      cuisine: 'Pizza, Nachos',
      rating: 4.3,
      deliveryTime: '30-40 mins'
    },
    {
      id: 5,
      name: 'Momos',
      category: 'Momo',
      imageUrl: 'images/momos.png',
      cuisine: 'Momos',
      rating: 4.3,
      deliveryTime: '30-40 mins'
    },
    {
      id: 6,
      name: 'Dominos',
      category: 'Pizza',
      imageUrl: 'images/dominos.png',
      cuisine: 'Pizza,Chicken Fiesta,Garlic-Bread',
      rating: 4.3,
      deliveryTime: '30-40 mins'
    },
    {
      id: 7,
      name: 'Writers cafe',
      category: 'Snacks',
      imageUrl: 'images/writerscafe.png',
      cuisine: 'Fast Food, Snacks',
      rating: 4.3,
      deliveryTime: '30-40 mins'
    }
  ];

  
}
