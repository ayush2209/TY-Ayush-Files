import { Component, OnInit, DoCheck } from '@angular/core';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, DoCheck {
  hide = true;
  pass;
  confirmPass;
  match = false;
  passDiabled = true;

  constructor(public service: LoginService) {}
  ngOnInit() {
  }

  loginData(form) {
    console.log(form.value);
    this.service.postSignUp(form.value);
  }

  ngDoCheck() {
    if ((this.pass && this.confirmPass) !== undefined) {
      if (this.pass !== this.confirmPass) {
        this.match = true;
        this.passDiabled = true;
      } else {
        this.match = false;
        this.passDiabled = false;
      }
    }
  }



}



