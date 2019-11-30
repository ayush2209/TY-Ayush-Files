import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directives';

  constructor() {
      setTimeout(() => {
      this.flag = false;
      }, 2000);
   }
  name  = ['*ngFor = Structural Directive' , 'Anand', 'Ayush'];
  people: any[] = [
    {
      name: 'Douglas  Pace',
      age: 35,
      country: 'MARS'
    },
    {
      name: 'Mcleod  Mueller',
      age: 32,
      country: 'USA'
    },
    {
      name: 'Day  Meyers',
      age: 21,
      country: 'HK'
    },
    {
      name: 'Aguirre  Ellis',
      age: 34,
      country: 'UK'
    },
    {
      name: 'Cook  Tyson',
      age: 32,
      country: 'USA'
    }
  ];


  // ngClass
  ClassArray = ['bg-primary' , 'mt-5'];
  // ngStyle
  flag = true;
}
