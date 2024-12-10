import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

 

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {
  
  private cartData= new BehaviorSubject<any[]>([]);
  currentData=this.cartData.asObservable();

  private apiUrl = 'https://nostand-springboot-production.up.railway.app/api/payment';
  // private apiUrl= 'http://localhost:8080/api/payment';



  constructor(private httpclient:HttpClient){}


  createOrder(amount: number) {
    return this.httpclient.post(`${this.apiUrl}/create`, null, {
      params: { amount: amount.toString() },
      responseType: 'text',
    });
  }

  getcartFromLocalStorage():any[]{
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart):[];
  }

  updateCartData(data:any[]){
    this.cartData.next(data);
    localStorage.setItem('cart',JSON.stringify(data));
  }
  clearCartData() {
    this.cartData.next([]);
    localStorage.removeItem('cart');
    
  }

  calculateSubtotal():number{
    return this.cartData.value.reduce((total,item)=> total+item.price*item.quantity,0);
  }

  calculateGST():number{
    return this.calculateSubtotal()*0.18;
  }

  calculateTotal():number{
    // return this.calculateSubtotal()+this.calculateGST();
    const subtotal=this.calculateSubtotal();
    const gst=this.calculateGST();
    return parseFloat((subtotal+gst).toFixed(2));
  }

 
}
