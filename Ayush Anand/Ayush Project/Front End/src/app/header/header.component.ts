import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private service:LoginService,private router:Router) { }
  // logout(){
  //   localStorage.clear();
  //   this.service.UserLogin();
  //   this.router.navigate(['./login']);
  // }
  sendSignup(){
    this.router.navigate(['/signup']);
  }
  sendLogout(data){
    this.service.postLogout(data).subscribe(data=>{
      console.log(data);
      this.service.isLoggedIn=false;
      this.router.navigate(['/']);
    },err=>{
      console.log(err);
    },()=>{
      console.log("logged out");
    })
   
  }
  ngOnInit() {
  }

}
