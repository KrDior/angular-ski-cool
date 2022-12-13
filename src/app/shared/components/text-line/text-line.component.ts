import { Component, Input } from '@angular/core';
import { MainCard } from '@shared/models/main-card.model';

@Component({
	selector: 'app-text-line',
	templateUrl: './text-line.component.html',
	styleUrls: ['./text-line.component.scss'],
})
export class TextLineComponent {
	@Input()
	public text!: string;

	constructor() {}
}
