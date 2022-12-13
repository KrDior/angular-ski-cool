import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { homeCarouselPartnerConfig } from '@shared/configs/carousel.config';
import { CarouselConfig } from '@shared/models/main-card.model';
import { filter } from 'rxjs';
import { RoutePath } from 'src/app/app-routing.module';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	public routes: typeof RoutePath = RoutePath;
	public carouselPartnerConfig!: CarouselConfig;
	public isPartnersVisible: boolean = true;

	constructor(private router: Router) {
		this.carouselPartnerConfig = homeCarouselPartnerConfig;

		this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
			this.isPartnersVisible = (event as NavigationEnd).url.split('/')[1] === this.routes.Home;
		});
	}
}
