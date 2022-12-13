import { Component, Input } from '@angular/core';
import { CarouselConfig } from '@shared/models/main-card.model';
import { RoutePath } from 'src/app/app-routing.module';

@Component({
	selector: 'app-carousel-card',
	templateUrl: './carousel-card.component.html',
	styleUrls: ['./carousel-card.component.scss'],
})
export class CarouselCardComponent {
	@Input()
	public carouselConfig!: CarouselConfig;

	public routes: typeof RoutePath = RoutePath;

	constructor() {}
}
