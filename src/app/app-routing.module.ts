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
import { SignUpComponent } from './sign-up/sign-up.component';
// import { RestaurantsDetailsComponent } from './restaurants-details/restaurants-details.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: NavbarComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        children: [
          {
            path: 'signUp',
            component: SignUpComponent,
          },
        ],
      },
      {
        path: 'loginforUser',
        component: LoginComponent,
      },
      {
        path: 'public-order',
        component: PublicOrderComponent,
      },
    ],
  },
  { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard/home' }, // Fallback for unknown routes
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
