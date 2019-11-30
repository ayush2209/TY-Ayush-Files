import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SelectedCandidateComponent = class SelectedCandidateComponent {
    // rejectedCandidate={
    //   _id:null
    // }
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.candidates = [];
        this.selectCandi = [];
        this.getCandidate();
    }
    getCandidate() {
        this.service.getCandidate().subscribe(data => {
            this.candidates = data;
        }, err => {
            console.log(err);
        }, () => {
            console.log("data got successfully");
        });
    }
    getfiteredCandidate(cname, role, fromdate, todate) {
        if (cname.value === '' && role.value === '' && fromdate.value === '' && todate.value === '') {
            this.service.getCandidate().subscribe(data => {
                this.candidates = data;
            }, err => {
                console.log(err);
            }, () => {
                console.log("data got successfully");
            });
        }
        else {
            console.log(cname.value, role.value, fromdate.value, todate.value);
            this.service.getFilteredCandidate(cname.value, role.value, fromdate.value, todate.value).subscribe(data => {
                this.candidates = data;
                console.log(data);
            }, err => {
                console.log(err);
            }, () => {
                console.log("data got successfully");
            });
        }
    }
    deleteCandidate(id) {
        this.service.rejectedCandidate(id).subscribe(data => {
            console.log(data);
            this.getCandidate();
        }, err => {
            console.log(err);
        }, () => {
            console.log("Candidate rejected successfully");
        });
    }
    selectedCandidate(id, candidate) {
        this.service.rejectedCandidate(id).subscribe(data => {
            console.log(data);
            this.selectCandidate(candidate);
        }, err => {
            console.log(err);
        }, () => {
            console.log("Candidates selected");
        });
    }
    selectCandidate(candidate) {
        this.service.postingCandidate(candidate).subscribe(candidate => {
            console.log(candidate);
            this.selectCandi = candidate;
            this.getCandidate();
            this.router.navigate(['./selected-candidate']);
        }, err => {
            console.log(err);
        }, () => {
            console.log("Candidate selected successfully");
        });
    }
    //showing details according perticular ror selection
    ngOnInit() {
    }
};
SelectedCandidateComponent = tslib_1.__decorate([
    Component({
        selector: 'app-view-schedule',
        templateUrl: './view-schedule.component.html',
        styleUrls: ['./view-schedule.component.css']
    })
], SelectedCandidateComponent);
export { SelectedCandidateComponent };
//# sourceMappingURL=view-schedule.component.js.map