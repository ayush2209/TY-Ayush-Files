import { Component, OnInit, NgZone } from '@angular/core';
const MAX_WIDTH_BREAKPOINT = 720;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = window.matchMedia(`(max-width: ${MAX_WIDTH_BREAKPOINT}px)`);

  links = [ {
    name : 'DashBoard',
    url : 'dashboard'
  },
  {
    name : 'Add Requirement',
    url : 'add-requirement'
  },
  {
    name : 'Requirements',
    url : 'requirements'
  },
  {
    name : 'Shedule Interview',
    url : 'shedule-interview'
  },
  {
    name : 'Sheduled Candidates',
    url : 'sheduled-candidates'
  },
  {
    name : 'Shortlisted Candidates',
    url : 'shortlisted-candidate'
  },
  {
    name : 'DeployedCandidate',
    url : 'deployed-candidates'
  }
];

  constructor() {
   }

  ngOnInit() {
  }

  isScreenSmall() {
    return this.mediaMatcher.matches;
  }

}
