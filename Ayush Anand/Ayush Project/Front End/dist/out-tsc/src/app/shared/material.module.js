import * as tslib_1 from "tslib";
import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib_1.__decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            MatButtonModule,
            MatIconModule,
            MatSidenavModule,
            MatToolbarModule,
            MatListModule,
            MatFormFieldModule,
            MatInputModule,
        ],
        exports: [
            MatButtonModule,
            MatIconModule,
            MatSidenavModule,
            MatToolbarModule,
            MatListModule,
            MatFormFieldModule,
            MatInputModule
        ],
    })
], MaterialModule);
export { MaterialModule };
//# sourceMappingURL=material.module.js.map