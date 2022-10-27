import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '@core/models/menu-item.model';

@Component({
	selector: 'app-sidenav-menu',
	templateUrl: './sidenav-menu.component.html',
	styleUrls: ['./sidenav-menu.component.scss'],
})
export class SidenavMenuComponent {
	@Input()
	public menuItems!: MenuItem[];

	@Output()
	public drawerClick: EventEmitter<void> = new EventEmitter();

	constructor() {}

	public toggleDrawer(): void {
		this.drawerClick.emit();
	}
}
