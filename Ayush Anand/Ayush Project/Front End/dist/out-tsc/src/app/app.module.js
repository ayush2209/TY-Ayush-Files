import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { CandidateDetailsComponent } from './Schedule-interview/schedule-interview.component';
import { RequirementDetailsComponent } from './Add-requirement/add-requirement.component';
import { AddedRequirementComponent } from './View-requirement/view-requirement.component';
import { SelectedCandidateComponent } from './View-schedule/view-schedule.component';
import { MaterialModule } from './shared/material.module';
// import { FilterPipe } from './filter.pipe';
import { RecruitedCandidateComponent } from './selected-candidate/selected-candidate.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AmanComponent } from './aman/aman/aman.component';
import { PipePipe } from './pipe.pipe';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            LoginComponent,
            DashboardComponent,
            HeaderComponent,
            CandidateDetailsComponent,
            RequirementDetailsComponent,
            AddedRequirementComponent,
            SelectedCandidateComponent,
            // FilterPipe,
            RecruitedCandidateComponent,
            SignUpComponent,
            AmanComponent,
            PipePipe
        ],
        imports: [
            BrowserModule,
            RouterModule.forRoot([
                { path: '', component: LoginComponent },
                { path: 'dashboard', component: DashboardComponent },
                { path: 'add-requirement', component: RequirementDetailsComponent },
                { path: 'view-requirement', component: AddedRequirementComponent },
                { path: 'schedule-interview', component: CandidateDetailsComponent },
                { path: 'view-schedule', component: SelectedCandidateComponent },
                { path: 'selected-candidate', component: RecruitedCandidateComponent },
                { path: 'signup', component: SignUpComponent }
            ]),
            HttpClientModule,
            FormsModule,
            BrowserAnimationsModule,
            MatFormFieldModule,
            MaterialModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map