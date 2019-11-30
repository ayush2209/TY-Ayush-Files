import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.hide = true;
    }
    LoggedIn(form) {
        this.service.postLogin(form.value).subscribe(data => {
            console.log(data.msg);
            if (data.msg === "Please register...") {
                this.router.navigate(['./']);
                form.reset();
            }
            else {
                console.log(data.isLoggedIn);
                this.service.isLoggedIn = data.isLoggedIn;
                this.router.navigate(['./dashboard']);
                setTimeout(() => {
                    this.service.logginMsg = false;
                }, 2000);
            }
        }, err => {
            console.log(err);
        }, () => {
            console.log("login success");
        });
    }
    ngOnInit() {
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map