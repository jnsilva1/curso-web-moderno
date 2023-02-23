import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef<HTMLElement>) {
    el.nativeElement.style.color = '#e35e6b';
  }

}
