import { Component } from '@angular/core';
import { RoutePath } from 'src/app/app-routing.module';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	public routes: typeof RoutePath = RoutePath;
}
