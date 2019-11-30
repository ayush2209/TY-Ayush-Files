import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RequirementDetailsComponent = class RequirementDetailsComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.user = [];
        this.companies = [];
        this.getData();
    }
    printForm(user) {
        this.service.postData(user).subscribe(user => {
            console.log(user);
            this.user = user;
            this.router.navigate(['./view-requirement']);
            setTimeout(() => {
                this.service.addRequire = false;
            }, 2000);
        }, (err) => {
            console.log(err);
        }, () => {
            console.log("data sent successfully");
        });
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
    ngOnInit() {
    }
};
RequirementDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-add-requirement',
        templateUrl: './add-requirement.component.html',
        styleUrls: ['./add-requirement.component.css']
    })
], RequirementDetailsComponent);
export { RequirementDetailsComponent };
//# sourceMappingURL=add-requirement.component.js.map