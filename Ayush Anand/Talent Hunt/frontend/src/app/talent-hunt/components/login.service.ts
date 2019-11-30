import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  backendURL = 'http://localhost:4000';
  signUpmsg = false;

  constructor(private http: HttpClient, public router: Router) {
  }

  postSignUp(userDetails) {
    console.log('service' , userDetails);
    this.http.post<any>(`${this.backendURL}/postSignUp`, userDetails).subscribe(data => {
      console.log(data);
      this.signUpmsg = true;
      setTimeout(() => {
        this.signUpmsg = false;
      }, 10000);
      this.router.navigate(['../talent-hunt/sign-in']);
    });
  }
}
