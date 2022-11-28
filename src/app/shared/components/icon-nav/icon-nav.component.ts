import { Component, Input } from '@angular/core';
import { IconNavConfig } from '@shared/models/main-card.model';

@Component({
	selector: 'app-icon-nav',
	templateUrl: './icon-nav.component.html',
	styleUrls: ['./icon-nav.component.scss'],
})
export class IconNavComponent {
	@Input()
	public iconNavConfig!: IconNavConfig;
}
