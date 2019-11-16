import { Directive, ElementRef, Renderer2, OnInit, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[courseProgres]'
})
export class CourseProgresDirective implements OnInit {

  @HostBinding('style.background') back
  @HostBinding('style.height') height

  @Input('courseProgres') heightValue

  constructor(private el: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.height = this.heightValue + '%'
    if (this.heightValue < 50) {
      this.back = '#ef5350'
    } else if (this.heightValue == 100) {
      this.back = '#ffc107'
    } else {
      this.back = '#26c6da'
    }
  }

}
