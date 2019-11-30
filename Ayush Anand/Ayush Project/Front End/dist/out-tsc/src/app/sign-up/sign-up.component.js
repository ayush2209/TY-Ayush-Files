import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SignUpComponent = class SignUpComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.hide = true;
    }
    signingUp(form) {
        this.service.postSignUp(form.value).subscribe(data => {
            console.log(data.msg);
            if (data.msg === "User already exists") {
                this.router.navigate(['/signup']);
                form.reset();
            }
            else {
                this.router.navigate(['/']);
            }
        }, err => {
            console.log(err);
        }, () => {
            console.log("Sign up success");
        });
    }
    ngOnInit() {
    }
};
SignUpComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sign-up',
        templateUrl: './sign-up.component.html',
        styleUrls: ['./sign-up.component.css']
    })
], SignUpComponent);
export { SignUpComponent };
//# sourceMappingURL=sign-up.component.js.map