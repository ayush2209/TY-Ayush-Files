import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  requirements;
  filledRequirements;
  sheduledCandidates;
  selectedCandidates;

  constructor(private service: DashboardService) {
    this.getRequirementsDetails();
    this.getfilledRequirements();
    this.getsheduledCandidates();
    this.getSelectedCandidates();
  }

  ngOnInit() {
  }

  getRequirementsDetails() {
    this.service.getDashBoardRequirements().subscribe(data => {
      this.requirements = data;
    });
  }

  getfilledRequirements() {
    this.service.getDashBoardfilledRequirements().subscribe(data => {
      this.filledRequirements = data;
    });
  }

  getsheduledCandidates() {
    this.service.getDashBoardSheduledCandidate().subscribe(data => {
      this.sheduledCandidates = data;
    });
  }

  getSelectedCandidates() {
    this.service.getDashBoardSelectedCandidate().subscribe(data => {
      this.selectedCandidates = data;
    });
  }

  getRequirementsBasedStack(requirement) {
    console.log(requirement._id);
    this.service.getRequirementsBasedStack(requirement._id).subscribe(data => {
      console.log(data);
    });
  }

  getfilledRequirementsBasedClientName(requirement) {
    console.log(requirement._id);
    this.service.getfilledRequirementsBasedClientName(requirement._id).subscribe(data => {
      console.log(data);
    });
  }
}
