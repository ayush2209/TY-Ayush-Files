import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatInputModule,
  MatTableModule,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatDialogModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';


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
    MatTableModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule
  ],
})
export class MaterialModule { }
