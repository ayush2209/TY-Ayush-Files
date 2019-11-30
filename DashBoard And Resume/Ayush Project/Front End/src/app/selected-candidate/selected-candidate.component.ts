import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-selected-candidate',
  templateUrl: './selected-candidate.component.html',
  styleUrls: ['./selected-candidate.component.css']
})
export class RecruitedCandidateComponent implements OnInit {
  requirement:any=[];
  deploycandi;
  constructor(private service:LoginService) {
    this.service.gettingCandidate();
   }
   deploy(user){
     console.log(user._id);
   this.service.getDeploymentData(user._id).subscribe(data=>{
     console.log(data);
    this.deploycandi=data.candidateid;
    console.log(this.deploycandi);
     this.requirement=data.requirements;
     console.log(this.requirement);
    
   },err=>{
     console.log(err)
   },()=>{
     console.log("Candidate deployed successfully")
   })
   }
 
   deployCand(deploy){
     console.log("deploy value is ",deploy ,this.deploycandi);
     this.service.deployCandidate(deploy._id , this.deploycandi._id).subscribe(data => {
       console.log(data);
      
     })
   }
  ngOnInit() {
  }

}
