import { TalentHuntComponent } from './talent-hunt.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddRequirementComponent } from './components/add-requirement/add-requirement.component';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { SheduleInterviewComponent } from './components/shedule-interview/shedule-interview.component';
import { SheduledCandidatesComponent } from './components/sheduled-candidates/sheduled-candidates.component';
import { ShortListedCandidateComponent } from './components/shortlisted-candidate/shortlisted-candidate.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DeployedCandidateComponent } from './components/deployed-candidate/deployed-candidate.component';


const routes: Routes = [
  {
    path : '',
    component : TalentHuntComponent,
    children : [
      {
        path : '',
        component : MainContentComponent
      },
      {
        path : 'dashboard',
        component : DashboardComponent
      },
      {
        path : 'add-requirement',
        component : AddRequirementComponent
      },
      {
        path : 'requirements',
        component : RequirementsComponent
      },
      {
        path : 'shedule-interview',
        component : SheduleInterviewComponent
      },
      {
        path : 'sheduled-candidates',
        component : SheduledCandidatesComponent
      },
      {
        path : 'shortlisted-candidate',
        component : ShortListedCandidateComponent
      },
      {
        path : 'sign-in',
        component : LoginComponent
      },
      {
        path : 'sign-up',
        component : SignUpComponent
      },
      {
        path: 'deployed-candidates',
        component : DeployedCandidateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentHuntRoutingModule { }
