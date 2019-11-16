import { Directive, ViewContainerRef, ViewChild } from "@angular/core";

@Directive({
  selector: '[appRef]'
})
export class RefDirective {
  constructor(public containerRef: ViewContainerRef) {
  }
}