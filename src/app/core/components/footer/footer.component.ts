import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RoutePath } from 'src/app/app-routing.module';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	public routes: typeof RoutePath = RoutePath;

	constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
		this.iconRegistry.addSvgIcon(
			'booking',
			this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/long_up_right.svg')
		);

		this.iconRegistry.addSvgIcon('facebook', this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/facebook.svg'));

		this.iconRegistry.addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/twitter.svg'));

		this.iconRegistry.addSvgIcon(
			'instagram',
			this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/instagram.svg')
		);
	}
}
