import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
hide=true;
  constructor(private service:LoginService,private router:Router) { }
  signingUp(form:NgForm){
  this.service.postSignUp(form.value).subscribe(data=>{
    console.log(data.msg)
    if(data.msg==="User already exists"){
      this.router.navigate(['/signup']);
      form.reset();
    }else{
      this.router.navigate(['/']);
    }
  },err=>{
    console.log(err);
  },()=>{
    console.log("Sign up success");
  });

  }
  
  
  ngOnInit() {
  }

}
