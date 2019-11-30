import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-requirement',
  templateUrl: './view-requirement.component.html',
  styleUrls: ['./view-requirement.component.css']
})
export class AddedRequirementComponent implements OnInit {
  companies:any=[]
  user:any=[]
  selectedRequirement={
    _id:null,
     cname:null,
     skill:null,
     minexp:null,
     maxexp:null,
     salary:null,
     location:null,
     position:null
  }
  constructor(private service:LoginService,private router:Router) {this.getData() }
  ngOnInit() {
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
  selectRequirement(requirement){
 console.log(requirement);
 this.selectedRequirement=requirement;
  }
  updateRequirement(data){
   this.service.updateRequirement(data).subscribe(requirement=>{
     console.log(requirement);
     this.getData();
   },err=>{
     console.log(err);
   },()=>{
     console.log("Requirement updated successfully");
   });
  }
  deleteRequirement(id){
    this.service.deleteRequirement(id).subscribe(data=>{
      this.getData();
      console.log(data);
    },err=>{
      console.log(err);
    },()=>{
      console.log("Requirement deleted success");
    });
   
  }
}
