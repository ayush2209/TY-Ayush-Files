import { MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule, MatListModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
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
  exports : [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class MaterialModule { }
