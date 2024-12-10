import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  // constructor(private authService: AuthService, private router: Router) {}

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean {
  //   if (this.authService.isLoggedIn()) {
  //     return true;  
  //   }

 
  //   this.router.navigate(['/login']);
  //   return false;
  // }
}
