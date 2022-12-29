import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ButtonConfigType } from '@shared/models/button-config-types';

@Directive({
	selector: '[appButtonConfig]',
})
export class ButtonConfigDirective implements OnInit {
	@Input() type!: string;

	constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

	ngOnInit() {
		switch (this.type) {
			case ButtonConfigType.Flat:
				this.renderer.addClass(this.elementRef.nativeElement, 'flat-btn');
				break;
			case ButtonConfigType.Stroked:
				this.renderer.addClass(this.elementRef.nativeElement, 'stroked-btn');
				break;
			case ButtonConfigType.Transparent:
				this.renderer.addClass(this.elementRef.nativeElement, 'transparent-btn');
				break;
			case ButtonConfigType.TransparentLight:
				this.renderer.addClass(this.elementRef.nativeElement, 'transparent-light-btn');
				break;
			default:
				break;
		}
	}
}
