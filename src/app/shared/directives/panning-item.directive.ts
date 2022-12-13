import { Directive, TemplateRef } from '@angular/core';

@Directive({
	selector: '[appPanningItem]',
})
export class PanningItemDirective {
	constructor(public tpl: TemplateRef<any>) {}
}
