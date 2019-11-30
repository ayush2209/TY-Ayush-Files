import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginService } from './login.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ExampleDirective } from './example.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ExampleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
