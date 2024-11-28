import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FoodServiceService } from '../food-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{


  constructor(private authservice:AuthService,private router:Router,private foodservice:FoodServiceService){}
  

  istogglecartOpen:boolean=true;
  cartData:any[]=[];
  subtotal:number=0;
  gst:number=0;
  total:number=0;
  


  ngOnInit(): void {
    this.foodservice.currentData.subscribe((data: any[])=>
      {
        this.cartData=data;
        console.log('Updated Array in Component B:', this.cartData.length); 
        console.log(this.cartData);

        //Reciept Details

        this.subtotal=this.foodservice.calculateSubtotal();
        this.gst=this.foodservice.calculateGST();
        this.total=this.foodservice.calculateTotal();

      });
       // Log the data to console

  }
  sidebarOpen: boolean = false;

  restaurantCardOpen : boolean=false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout() {
    localStorage.removeItem('cart');
    this.foodservice.clearCartData();
    this.authservice.logout();
    this.router.navigate(['/login']);
  }
  toggleCart(){
    this.istogglecartOpen=!this.istogglecartOpen;
  }

  increaseQuantity(item:any){
    item.quantity++;
    this.updatecart();
  }

  decreaseQuantity(item:any){
    if(item.quantity>1){
      item.quantity--;
    }
    else if(item.quantity===1){
      this.cartData=this.cartData.filter(cartitem=> cartitem!==item);
    }
    this.updatecart();


  }

  updatecart(){
    this.foodservice.updateCartData(this.cartData);
    this.subtotal=this.foodservice.calculateSubtotal();
    this.gst=this.foodservice.calculateGST();
    this.total=this.foodservice.calculateTotal();

  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
}
