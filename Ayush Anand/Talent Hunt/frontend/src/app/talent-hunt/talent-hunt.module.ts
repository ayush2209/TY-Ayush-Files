import { HttpClientModule } from '@angular/common/http';
import { ShortListedCandidateComponent, AppCandidateRequirementsComponent } from './components/shortlisted-candidate/shortlisted-candidate.component';
import { SheduledCandidatesComponent } from './components/sheduled-candidates/sheduled-candidates.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TalentHuntRoutingModule } from './talent-hunt-routing.module';
import { TalentHuntComponent } from './talent-hunt.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../shared/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddRequirementComponent } from './components/add-requirement/add-requirement.component';
import { LoginComponent } from './components/login/login.component';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { SheduleInterviewComponent } from './components/shedule-interview/shedule-interview.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DeployedCandidateComponent } from './components/deployed-candidate/deployed-candidate.component';


@NgModule({
  declarations: [
    TalentHuntComponent,
    MainContentComponent,
    SideNavComponent,
    ToolbarComponent,
    DashboardComponent,
    AddRequirementComponent,
    LoginComponent,
    RequirementsComponent,
    SheduleInterviewComponent,
    SheduledCandidatesComponent,
    ShortListedCandidateComponent,
    SignUpComponent,
    AppCandidateRequirementsComponent,
    DeployedCandidateComponent
  ],
  imports: [
    CommonModule,
    TalentHuntRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  entryComponents: [AppCandidateRequirementsComponent]
})
export class TalentHuntModule { }
