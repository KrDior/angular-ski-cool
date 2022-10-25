import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-nav-slider',
	templateUrl: './nav-slider.component.html',
	styleUrls: ['./nav-slider.component.scss'],
})
export class NavSliderComponent {
	@Output() public drawerClick: EventEmitter<void> = new EventEmitter();

	constructor() {}

	public toggleDrawer(): void {
		this.drawerClick.emit();
	}
}
