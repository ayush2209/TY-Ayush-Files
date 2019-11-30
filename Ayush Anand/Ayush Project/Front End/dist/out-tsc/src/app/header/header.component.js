import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    // logout(){
    //   localStorage.clear();
    //   this.service.UserLogin();
    //   this.router.navigate(['./login']);
    // }
    sendSignup() {
        this.router.navigate(['/signup']);
    }
    sendLogout(data) {
        this.service.postLogout(data).subscribe(data => {
            console.log(data);
            this.service.isLoggedIn = false;
            this.router.navigate(['/']);
        }, err => {
            console.log(err);
        }, () => {
            console.log("logged out");
        });
    }
    ngOnInit() {
    }
};
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map