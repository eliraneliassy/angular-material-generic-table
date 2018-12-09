import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[alCellHost]'
})
export class CellHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
