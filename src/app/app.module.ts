import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button'

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PublicOrderComponent } from './public-order/public-order.component';
import { AdmincontrolComponent } from './admincontrol/admincontrol.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, RouterOutlet } from '@angular/router';

// import { RestaurantsDetailsComponent } from './restaurants-details/restaurants-details.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    PublicOrderComponent,
    AdmincontrolComponent,
    NavbarComponent,
    RegisterComponent,
    // RestaurantsDetailsComponent,
    SearchFilterPipe,
    HomeComponent,
    LoginComponent
    // RouterOutlet
  ],
  imports: [
    
    // ReactiveFormsModule,
    // RouterModule,
    FormsModule,
    // NgModel,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserModule,
    HttpClientModule,
    // HttpClient,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterOutlet
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
