import { Component, OnInit, DoCheck } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css']
})

export class CandidateDetailsComponent implements OnInit, DoCheck {
  constructor(private service: LoginService, private router: Router) {
    this.getInterview();
    this.selectRow('id');
  }
 candidate: any = [];
// schdeule interview posting
interview: any = [];

// incoming interview details sotred in getinterviewData array
// tslint:disable-next-line: member-ordering
getInterviewData: any = [];
// select perticular row
rowData: any = [];

   schduleInterview(interview) {
     console.log(interview);
     this.service.postInterview(interview).subscribe(data => {
       console.log(data);
       this.interview = data;
       setTimeout( () => {
        this.service.interview = false;
       }, 2000);
     }, err => {
       console.log('Interview Created');
     });
   }
   getInterview() {
     this.service.getInterview().subscribe(getData => {
       this.getInterviewData = getData;
       console.log(this.getInterviewData);
     }, err => {
       console.log(err);
     } , () => {
       console.log('Got Interview');
     });
   }
   selectRow(id) {
    console.log(id);
    this.service.getPerticularData(id).subscribe(result => {
      this.rowData = result;
      console.log(this.rowData);
      console.log(this.rowData.name);
      console.log(this.rowData.clientname);
      console.log(this.rowData.email);
    });
      //  this.router.navigate(['./view-schedule']);
  }

  // sbumit evaluation model function
  submitEvaluation() {
    console.log('Evaluiated');
  }


// filter the data
   filterData(interviewnamefilter, skills) {
    if (interviewnamefilter.value === '' && skills.value === '') {
      this.service.getInterview().subscribe(data => {
        this.interview = data;
      });
    } else {
      console.log(interviewnamefilter.value);
      this.service.getFilterData(interviewnamefilter.value).subscribe(filterData => {
        this.getInterviewData = filterData;
        console.log(filterData);
        // console.log("Interview ",this.interview);
      }, err => {
        console.log(err);
      }, () => {
        console.log('Filtered');
      });
    }
   }


   printCandidate(candidate) {
    this.service.postCandidate(candidate).subscribe(user => {
      console.log(user);
      this.candidate = user;
      this.router.navigate(['./view-schedule']);
      setTimeout(() => {
       this.service.addCandidate = false;
      }, 2000);
    }, err => {
      console.log(err);
    }, () => {
      console.log('Candidate selected successfully');
    });
  }

  ngOnInit() {
  }
  ngDoCheck(): void {
  }
}
