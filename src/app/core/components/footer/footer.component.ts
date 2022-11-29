import { Component } from '@angular/core';
import { homeCarouselPartnerConfig } from '@shared/configs/carousel.config';
import { CarouselConfig } from '@shared/models/main-card.model';
import { RoutePath } from 'src/app/app-routing.module';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	public routes: typeof RoutePath = RoutePath;
	public carouselPartnerConfig!: CarouselConfig;

	constructor() {
		this.carouselPartnerConfig = homeCarouselPartnerConfig;
	}
}
