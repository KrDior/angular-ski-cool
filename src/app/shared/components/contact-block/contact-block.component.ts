import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RoutePath } from 'src/app/app-routing.module';

@Component({
	selector: 'app-contact-block',
	templateUrl: './contact-block.component.html',
	styleUrls: ['./contact-block.component.scss'],
})
export class ContactBlockComponent {
	public routes: typeof RoutePath = RoutePath;

	constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
		this.iconRegistry.addSvgIcon(
			'booking',
			this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/long_up_right.svg')
		);
	}
}
