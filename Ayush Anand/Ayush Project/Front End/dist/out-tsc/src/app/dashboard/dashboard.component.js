import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DashboardComponent = class DashboardComponent {
    constructor(service) {
        this.service = service;
        this.dash = [];
        this.dashcandi = [];
        this.dashselect = [];
        this.dashfilled = [];
        this.service.getDashboardRequire();
        this.service.getScheduledInterview();
        this.service.gettingCandidate();
        this.service.getDBCandidate();
        this.service.getFilledRequirement();
    }
    dashboard(skill) {
        return this.service.getDashboardData(skill).subscribe(data => {
            this.dash = data;
            console.log(this.dash);
        }, err => {
            console.log(err);
        }, () => {
            console.log("Dashboard required successfully");
        });
        //  this.dash.pop();
        //  console.log(this.dash);
        //  this.dash.push(req);
    }
    dashboardSched(role) {
        return this.service.getDBScheduleDetails(role).subscribe(data => {
            this.dashcandi = data;
            console.log(this.dashcandi);
        }, err => {
            console.log(err);
        }, () => {
            console.log("Candidate required success");
        });
    }
    dashboardselect(role) {
        return this.service.getDBCandidateDetails(role).subscribe(data => {
            this.dashselect = data;
            console.log(this.dashselect);
        }, err => {
            console.log(err);
        }, () => {
            console.log("Dashboard candidate selected success");
        });
    }
    dashboardFilledRequire(skill) {
        return this.service.getDBFilledRequirement(skill).subscribe(data => {
            this.dashfilled = data;
            console.log(this.dashfilled);
        }, err => {
            console.log(err);
        }, () => {
            console.log("");
        });
    }
    ngOnInit() {
    }
};
DashboardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map