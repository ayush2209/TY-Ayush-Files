import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(private service: LoginService, private router: Router) {
  }


  ngOnInit() {
  }

}

