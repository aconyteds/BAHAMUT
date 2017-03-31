import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: 'loader' })
/** Highlight the attached element in gold */
export class RemoveLoader {
  constructor(el: ElementRef) {
    console.log("Loader")
    //console.log(el);
    //el.nativeElement.remove();
  }
}
