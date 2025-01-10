import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OtpService } from '../otp.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {

formData = {
    name: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  enteredOtp = '';
  otpSent = false;

  constructor(private router:Router, private otpService: OtpService) {}

  sendOtp() {
    if (this.formData.mobile) {
      this.otpService.sendOtp(this.formData.mobile).subscribe(
        (response) => {
          if(response){
          alert('OTP sent successfully to your mobile number.');
          this.otpSent = true;
          }
        }
      );
    } else {
      alert('Please provide a valid mobile number.');
    }
  }

  verifyOtp() {
    if (this.enteredOtp) {
      this.otpService.verifyOtp(this.enteredOtp).subscribe(
        (response) => {
          if (response === 'OTP validated sucessfully') {
            alert('Registration successful!');
            // Logic to save user details or redirect
          } else {
            alert('Invalid OTP. Please try again.');
          }
        },
        (error) => {
          console.log(error);
          alert('Failed to verify OTP. Please try again.');
        }
      );
    } else {
      alert('Please enter the OTP sent to your mobile.');
    }
  }


  ngOnInit() {
    console.log('signUp Loaded');
  }
  closeModal() {
    
    this.router.navigate(['/dashboard/home']);
  }
  closeLogin(event:MouseEvent){
    this.closeModal();  
  }
  preventClose(event: Event) {
    event.stopPropagation();
  }
}
