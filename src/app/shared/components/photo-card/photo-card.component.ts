import { Component, Input } from '@angular/core';
import { MainCard } from '@shared/models/main-card.model';

@Component({
	selector: 'app-photo-card',
	templateUrl: './photo-card.component.html',
	styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent {
	@Input()
	public cardConfig!: MainCard;

	constructor() {}
}
