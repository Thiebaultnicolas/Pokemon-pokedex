import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  constructor(private el:ElementRef) {
     this.settHeight(180);
     this.setBorder('#f5f5f5');
   }

  settHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
