import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmincontrolComponent } from './admincontrol/admincontrol.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { PublicOrderComponent } from './public-order/public-order.component';
import { RegisterComponent } from './register/register.component';
import { RestaurantsDetailsComponent } from './restaurants-details/restaurants-details.component';
// import { RestaurantsDetailsComponent } from './restaurants-details/restaurants-details.component';



const routes: Routes = [
  
  {
    path: 'dashboard', component: NavbarComponent, children: [
      {
        path: 'home', component: HomeComponent  // Home page after login
        
      },
      {
        path: 'loginforUser', component: LoginComponent 
      },
      {
        path: 'public-order', component: PublicOrderComponent  // Public Order page
      }
    ]
  },
  { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
  // { path: '**', redirectTo: 'login' }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
