import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RecruitedCandidateComponent = class RecruitedCandidateComponent {
    constructor(service) {
        this.service = service;
        this.requirement = [];
        this.service.gettingCandidate();
    }
    deploy(user) {
        console.log(user._id);
        this.service.getDeploymentData(user._id).subscribe(data => {
            console.log(data);
            this.deploycandi = data.candidateid;
            console.log(this.deploycandi);
            this.requirement = data.requirements;
            console.log(this.requirement);
        }, err => {
            console.log(err);
        }, () => {
            console.log("Candidate deployed successfully");
        });
    }
    deployCand(deploy) {
        console.log("deploy value is ", deploy, this.deploycandi);
        this.service.deployCandidate(deploy._id, this.deploycandi._id).subscribe(data => {
            console.log(data);
        });
    }
    ngOnInit() {
    }
};
RecruitedCandidateComponent = tslib_1.__decorate([
    Component({
        selector: 'app-selected-candidate',
        templateUrl: './selected-candidate.component.html',
        styleUrls: ['./selected-candidate.component.css']
    })
], RecruitedCandidateComponent);
export { RecruitedCandidateComponent };
//# sourceMappingURL=selected-candidate.component.js.map