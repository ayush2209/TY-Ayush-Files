import { Directive , ElementRef } from '@angular/core';

@Directive({
  selector: '[appExample]'
})
export class ExampleDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.background = 'skyblue';
  }
}
