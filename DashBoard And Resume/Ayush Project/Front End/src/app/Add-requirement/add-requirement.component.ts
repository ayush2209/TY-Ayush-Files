import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-requirement',
  templateUrl: './add-requirement.component.html',
  styleUrls: ['./add-requirement.component.css']
})
export class RequirementDetailsComponent implements OnInit {
  user:any=[];
  companies:any=[];
  constructor(private service:LoginService,private router:Router) {
    this.getData();
   }
  printForm(user){
    this.service.postData(user).subscribe(user=>{
      console.log(user);
      this.user=user;
      this.router.navigate(['./view-requirement']);
      setTimeout(()=>{
        this.service.addRequire=false;
       },2000);
    },(err)=>{
      console.log(err);
    },()=>{
      console.log("data sent successfully");
    })
  }
  getData(){
    this.service.getData().subscribe(data=>{
      this.companies=data;
    },err=>{
      console.log(err);
    },()=>{
      console.log("data got successfully");
    })
  }
  ngOnInit() {
  }

}
