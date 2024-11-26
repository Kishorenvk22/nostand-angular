import { Component } from '@angular/core';
import { FoodServiceService } from '../food-service.service';




@Component({
  selector: 'app-admincontrol',
  templateUrl: './admincontrol.component.html',
  styleUrl: './admincontrol.component.css'
})
export class AdmincontrolComponent {


  restaurants = [
    {
      category: 'Italian Restaurants',
      logoUrl:'images/italianLogo.png'
    },
    {
      category: 'Chinese Restaurants',
      logoUrl:'images/chineseLogo.png'

    },
    {
      category: 'Indian Restaurants',
      logoUrl:'images/SouthIndianLogo.png'

    },
    {
      category: 'Fast Food',
      logoUrl:'images/fastfoodLogo.png'

    }
  ];
}
