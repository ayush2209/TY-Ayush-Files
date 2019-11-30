import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AddedRequirementComponent = class AddedRequirementComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.companies = [];
        this.user = [];
        this.selectedRequirement = {
            _id: null,
            cname: null,
            skill: null,
            minexp: null,
            maxexp: null,
            salary: null,
            location: null,
            position: null
        };
        this.getData();
    }
    ngOnInit() {
    }
    getData() {
        this.service.getData().subscribe(data => {
            this.companies = data;
        }, err => {
            console.log(err);
        }, () => {
            console.log("data got successfully");
        });
    }
    selectRequirement(requirement) {
        console.log(requirement);
        this.selectedRequirement = requirement;
    }
    updateRequirement(data) {
        this.service.updateRequirement(data).subscribe(requirement => {
            console.log(requirement);
            this.getData();
        }, err => {
            console.log(err);
        }, () => {
            console.log("Requirement updated successfully");
        });
    }
    deleteRequirement(id) {
        this.service.deleteRequirement(id).subscribe(data => {
            this.getData();
            console.log(data);
        }, err => {
            console.log(err);
        }, () => {
            console.log("Requirement deleted success");
        });
    }
};
AddedRequirementComponent = tslib_1.__decorate([
    Component({
        selector: 'app-view-requirement',
        templateUrl: './view-requirement.component.html',
        styleUrls: ['./view-requirement.component.css']
    })
], AddedRequirementComponent);
export { AddedRequirementComponent };
//# sourceMappingURL=view-requirement.component.js.map