import { Component } from '@angular/core';
import { RoutePath } from 'src/app/app-routing.module';

@Component({
	selector: 'app-contact-block',
	templateUrl: './contact-block.component.html',
	styleUrls: ['./contact-block.component.scss'],
})
export class ContactBlockComponent {
	public routes: typeof RoutePath = RoutePath;

	constructor() {}
}
