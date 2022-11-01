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
				break;

			case ButtonConfigType.Stroked:
				this.renderer.addClass(this.elementRef.nativeElement, 'stroked-btn');
				break;
			default:
				break;
		}
	}
}
