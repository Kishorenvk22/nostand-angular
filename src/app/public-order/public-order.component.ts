import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodServiceService } from '../food-service.service';


@Component({
  selector: 'app-public-order',
  templateUrl: './public-order.component.html',
  styleUrl: './public-order.component.css'
})
export class PublicOrderComponent {

  constructor(private foodservice: FoodServiceService,private route:ActivatedRoute) {
    console.log('PublicOrderComponent loaded');
  }

  addToCartItem:boolean=false;
  searchText = '';

  selectedItem: any = null; // To hold the selected item
  isModalOpen: boolean = false;

  cart: any[] = [];
  menu : any[]=[]
  
  ngOnInit() {
    // Retrieve the restaurantId from the query params
    const restaurantId = this.route.snapshot.queryParamMap.get('restaurantId');

    if (restaurantId) {
      this.loadMenuForRestaurant(restaurantId);
    }

    this.cart=this.foodservice.getcartFromLocalStorage();
  }
 

  loadMenuForRestaurant(restaurantId:string){
    if(restaurantId==='1'){
      this.menu = [
        {
          name: 'Hot Drinks',
          items: [
            { name: 'Black Chai', price: 26, imageUrl: 'images/coffee.jpg' },
            { name: 'Lemon Chai', price: 26, imageUrl: 'images/coffee.jpg' }
          ]
        },
        {
          name: 'Snacks',
          items: [
            { name: 'Sandwich', price: 50, imageUrl: 'images/coffee.jpg' },
            { name: 'Puffs', price: 26, imageUrl: 'images/coffee.jpg' },
            { name: 'Banana Cake', price: 30, imageUrl: 'images/coffee.jpg' }
          ]
        }
      ];
    }else if (restaurantId === '2') {
      this.menu = [
        {
          name: 'Main Course',
          items: [
            { name: 'Paneer noodles', price: 100, imageUrl: 'images/pasta.jpg' },
            { name: 'Mushroom noodles', price: 120, imageUrl: 'images/pasta.jpg' }
          ]
        },
        {
          name: 'Drinks',
          items: [
            { name: 'Coca Cola', price: 40, imageUrl: 'images/coke.jpg' },
            { name: 'Pepsi', price: 40, imageUrl: 'images/pepsi.jpg' }
          ]
        }
      ];
    }
  }

  openAddToCartModal(item: any) {
    this.selectedItem = { ...item, quantity: 1 }; // Clone the item and set default quantity to 1
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedItem = null;
  }
  increaseQuantity() {
    if (this.selectedItem) {
      this.selectedItem.quantity++;
    }
  }

  // Decrease quantity
  decreaseQuantity() {
    if (this.selectedItem && this.selectedItem.quantity > 1) {
      this.selectedItem.quantity--;
    }
  }

  addToCart() {
    const existingItem = this.cart.find(cartItem => cartItem.name === this.selectedItem.name);
    if (existingItem) {
      existingItem.quantity += this.selectedItem.quantity;
    } else {
      this.cart.push(this.selectedItem);
    }
    this.foodservice.updateCartData(this.cart); // Update the cart in the service
    this.closeModal();
  }

  // addItem(item: any) {
  //   const existingItems=this.cart.find(cartItem=> cartItem.name===item.name);

  //   if(existingItems){
  //     existingItems.quantity++;
  //   }
  //   else{
  //     item.quantity=1;
  //     this.cart.push(item);
  //   }
  //   // this.cart.push(item);
  //   this.foodservice.updateCartData(this.cart);
  // }
 
  clearSearch() {
    this.searchText = '';
  }


}



