import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
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

	constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
		this.iconRegistry.addSvgIcon(
			'arrow-left',
			this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/arrow-left.svg')
		);
		this.iconRegistry.addSvgIcon(
			'arrow-right',
			this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/arrow-right.svg')
		);
	}
}
