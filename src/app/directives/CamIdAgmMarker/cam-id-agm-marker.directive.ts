import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[camIdAgmMarker]',
  exportAs: 'camIdAgmMarker, [camIdAgmMarker]',
})
export class CamIdAgmMarkerDirective {
  @Input()
  camId: string;

  constructor(private el: ElementRef) { }

}
