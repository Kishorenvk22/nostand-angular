import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FoodServiceService } from '../food-service.service';

declare var Razorpay:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  showLogin: boolean=false;


  constructor(private authservice:AuthService,private router:Router,private foodservice:FoodServiceService){}
  

  isusertoggleCart:boolean=false;
  istogglecartOpen:boolean=false;
  cartData:any[]=[];
  subtotal:number=0;
  gst:number=0;
  total:number=0;
  username:string='Guest User';
  showgreeting = true;
  
  // userLoggedIn:boolean=true;
  // isLoggedIn:boolean=true;
  // username:string|null='';
  
  toggleLogin() {
    this.showLogin = !this.showLogin;
    if (this.showLogin) {
      // Navigate to the child route 'login'
      // this.router.navigate(['loginforUser']);
    } else {
      // Navigate back to the parent route
      this.router.navigate(['']);
    }
  }
  closeLogin(event:MouseEvent){
    this.showLogin=false;
  }

  proceedToPayment() {
    console.log('razorpay')
    this.foodservice.createOrder(this.total).subscribe((response: any) => {
      const options = {
        key: 'rzp_test_xcoman15SogwMC', // Replace with Razorpay Key
        amount: this.total * 100,
        currency: 'INR',
        name: 'Food Project',
        description: 'Test Transaction',
        order_id: JSON.parse(response).id,
        handler: (response: any) => {
          alert('Payment Success! ' + response.razorpay_payment_id);
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const razorpay = new Razorpay(options);
      razorpay.open();
    });
  }
  ngOnInit(): void {


    setTimeout(()=>{
      this.showgreeting=false;
    },2000);

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
      

      const storedUsername=localStorage.getItem('username');
      if(storedUsername){
        this.username=storedUsername;
      }

  }
  sidebarOpen: boolean = false;

  restaurantCardOpen : boolean=false;

  preventClose(event: Event) {
    event.stopPropagation();
  }
  
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  // Kishore@2212
  
  logout():void {
    // this.sidebarOpen = !this.sidebarOpen;
    localStorage.removeItem('username')
    window.location.reload();    
    
    // localStorage.removeItem('cart');
    // this.foodservice.clearCartData();
    // this.authservice.logout();
    // this.isLoggedIn=false;
    // this.username=null;
    // this.router.navigate(['/login']);
  }
  toggleCart(){
    this.istogglecartOpen=!this.istogglecartOpen;
  }

  toggleUsercard(){
    this.isusertoggleCart=!this.isusertoggleCart;
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
