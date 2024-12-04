import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmincontrolComponent } from './admincontrol/admincontrol.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { PublicOrderComponent } from './public-order/public-order.component';
import { RegisterComponent } from './register/register.component';
import { RestaurantsDetailsComponent } from './restaurants-details/restaurants-details.component';
// import { RestaurantsDetailsComponent } from './restaurants-details/restaurants-details.component';



const routes: Routes = [
  {
    path: 'login', component: RegisterComponent // Default route for login
  },
  {
    path: 'dashboard', component: NavbarComponent, canActivate: [AuthGuard], children: [
      {
        path: 'home', component: HomeComponent  // Home page after login
      },
      {
        path: 'public-order', component: PublicOrderComponent  // Public Order page
      }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', redirectTo: 'login' }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
