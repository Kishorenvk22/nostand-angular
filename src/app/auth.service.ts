import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loginUrl = 'http://localhost:8080/api/login'; 
  private loginUserUrl='http://localhost:8080/api/user';

  private isLoggedInStatus = false;

  
  constructor(private httpclient:HttpClient) { }

  

  login(username: string, password: string): Observable<boolean> {
    const loginData = { username, password };
    return this.httpclient.post<boolean>(this.loginUrl, loginData).pipe(
      tap((response) => {
        if (response) {
          // this.isLoggedInStatus = true;
          localStorage.setItem('isLoggedIn','true');
          localStorage.setItem('username', username);
        }
      })
    );
  }

  loginUser(username:string,password:string):Observable<any>{
    return this.httpclient.post(this.loginUserUrl,{username,password})

  }

  isLoggedIn(): boolean {
    // return this.isLoggedInStatus;
    return localStorage.getItem('isLoggedIn')==='true';
  }

  getUsername():string|null{
    return localStorage.getItem('username');
  }

  logout() {
    // this.isLoggedInStatus = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');

  }
}

  

