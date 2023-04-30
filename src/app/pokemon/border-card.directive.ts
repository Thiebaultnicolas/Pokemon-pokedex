import { Directive, ElementRef, HostListener, Input, } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

   private initialColor: string = '#f5f5f5';
   private defaultColor: string = '#009688';
   private defaultHeight: number = 155;

  constructor(private el:ElementRef) {
     this.setBorder(this.initialColor);
     this.settHeight(this.defaultHeight);
   }

   @Input('pkmnBorderCard') borderColor: string; // alias


   @HostListener('mouseenter') onMouseEnter () {
     this.setBorder(this.borderColor || this.defaultColor);
   }

   @HostListener('mouseleave') onMouseLeave () {
    this.setBorder(this.initialColor);
   }

  settHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

 private setBorder (color: string) {
  let border = 'solid 4px ' + color;
  this.el.nativeElement.style.border = border;
 }

}
