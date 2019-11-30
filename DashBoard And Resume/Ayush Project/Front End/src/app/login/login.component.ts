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

  constructor(private service:LoginService,private router:Router) { }
  
 LoggedIn(form:NgForm){
 this.service.postLogin(form.value).subscribe(data=>{ 

console.log(data.msg);
  if(data.msg==="Please register..."){
    this.router.navigate(['./']);
    form.reset();
  }  
  else{
         console.log(data.isLoggedIn);
        this.service.isLoggedIn=data.isLoggedIn;
        
       this.router.navigate(['./dashboard']);
       setTimeout(()=>{
        this.service.logginMsg=false;
       },2000);
      
  }
 },err=>{
   console.log(err)
 },()=>{
   console.log("login success")
 })
  
  }
  
  
  ngOnInit() {
  }

}

