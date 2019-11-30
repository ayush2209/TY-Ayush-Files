import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class SelectedCandidateComponent implements OnInit {
  candidates:any=[]
  selectCandi:any=[]
  // rejectedCandidate={
  //   _id:null
  // }
  constructor(private service:LoginService,private router:Router) {
    this.getCandidate();
  }
  getCandidate(){
    this.service.getCandidate().subscribe(data=>{
      this.candidates=data;
    },err=>{
      console.log(err);
    },()=>{
      console.log("data got successfully");
    })
  }
  getfiteredCandidate(cname,role,fromdate,todate){
    if(cname.value === '' && role.value === '' && fromdate.value=== '' && todate.value===''){
      this.service.getCandidate().subscribe(data=>{
        this.candidates=data;
      },err=>{
        console.log(err);
      },()=>{
        console.log("data got successfully");
      })
    }else{
    console.log(cname.value , role.value, fromdate.value, todate.value)
    this.service.getFilteredCandidate(cname.value,role.value,fromdate.value,todate.value).subscribe(data=>{
      this.candidates=data;
      console.log(data);
    },err=>{
      console.log(err);
    },()=>{
      console.log("data got successfully");
    })
  }
  }
  deleteCandidate(id){
    this.service.rejectedCandidate(id).subscribe(data=>{
      console.log(data);
      this.getCandidate();
    },err=>{
      console.log(err);
    },()=>{
      console.log("Candidate rejected successfully");
    })
  }
  selectedCandidate(id,candidate){
  this.service.rejectedCandidate(id).subscribe(data=>{
    console.log(data);
    this.selectCandidate(candidate);
  },err=>{
    console.log(err);
  },()=>{
    console.log("Candidates selected");
  })
  }

  
  selectCandidate(candidate){
    this.service.postingCandidate(candidate).subscribe(candidate=>{ 
    console.log(candidate);
    this.selectCandi=candidate;
     this.getCandidate();
    this.router.navigate(['./selected-candidate']);
    },err=>{
      console.log(err);
    },()=>{
      console.log("Candidate selected successfully");
    })
  }


    //showing details according perticular ror selection


  ngOnInit() {
  }

}
