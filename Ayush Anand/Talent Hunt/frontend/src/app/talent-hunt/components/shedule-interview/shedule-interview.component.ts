import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/candidate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shedule-interview',
  templateUrl: './shedule-interview.component.html',
  styleUrls: ['./shedule-interview.component.css']
})
export class SheduleInterviewComponent implements OnInit {
  constructor(private service: CandidateService, private router: Router) { }

  ngOnInit() {
  }

  addCandidate(form: NgForm) {
    console.log(form.value);
    this.service.addCandidate(form.value).subscribe(data => {
      console.log(data);
      form.reset();
      this.service.sheduledStatus = true;
      setTimeout(() => {
        this.service.sheduledStatus = false;
      }, 3000);
      this.router.navigate(['../talent-hunt/sheduled-candidates']);
    });
  }

}
