import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoutePath } from 'src/app/app-routing.module';

@Component({
	selector: 'app-nav-slider',
	templateUrl: './nav-slider.component.html',
	styleUrls: ['./nav-slider.component.scss'],
})
export class NavSliderComponent {
	@Input()
	public isDesktop!: boolean | null;

	@Input()
	public isNavTabVisible!: boolean;

	@Output()
	public drawerClick: EventEmitter<void> = new EventEmitter();

	public routes: typeof RoutePath = RoutePath;

	constructor() {}

	public toggleDrawer(): void {
		this.drawerClick.emit();
	}
}
