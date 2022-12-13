import { Component, Input } from '@angular/core';
import { AdvantageSlide } from '@shared/models/main-card.model';

@Component({
	selector: 'app-advantage-slide',
	templateUrl: './advantage-slide.component.html',
	styleUrls: ['./advantage-slide.component.scss'],
})
export class AdvantageSlideComponent {
	@Input()
	public homeAdvantageSlideConfig!: AdvantageSlide[];

	@Input()
	public message!: string;

	constructor() {}
}
