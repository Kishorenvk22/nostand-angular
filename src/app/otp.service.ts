import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  private baseUrl = 'http://localhost:8080/api/otp'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  sendOtp(phoneNumber: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/sendOtp`, null, { params: { phoneNumber },
    responseType: 'text' });
  }

  verifyOtp(otp: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/verifyOtp`, null, { params: { Otp: otp },
    responseType: 'text' });
  }
}
