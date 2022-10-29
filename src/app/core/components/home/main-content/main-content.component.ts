import { Component } from '@angular/core';
import { homeCardConfig } from '@shared/configs/home-card-config';
import { MainCard } from '@shared/models/main-card.model';

@Component({
	selector: 'app-main-content',
	templateUrl: './main-content.component.html',
	styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {
	public cardConfig!: MainCard[];

	constructor() {
		this.cardConfig = homeCardConfig;
	}
}
