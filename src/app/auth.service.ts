import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loginUrl = 'http://localhost:8080/api/login';  

  private isLoggedInStatus = false;

  



  constructor(private httpclient:HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    const loginData = { username, password };
    return this.httpclient.post<boolean>(this.loginUrl, loginData).pipe(
      tap((response) => {
        if (response) {
          // this.isLoggedInStatus = true;
          localStorage.setItem('isLoggedIn','true');
        }
      })
    );
  }

  isLoggedIn(): boolean {
    // return this.isLoggedInStatus;
    return localStorage.getItem('isLoggedIn')==='true';
  }

  logout() {
    this.isLoggedInStatus = false;
    localStorage.removeItem('isLoggedIn');
  }
}

  

