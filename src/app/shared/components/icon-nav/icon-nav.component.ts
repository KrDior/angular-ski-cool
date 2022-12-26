import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IconNavConfig } from '@shared/models/main-card.model';
import { PopupDialogComponent, DialogType } from '../popup-dialog/popup-dialog.component';

@Component({
	selector: 'app-icon-nav',
	templateUrl: './icon-nav.component.html',
	styleUrls: ['./icon-nav.component.scss'],
})
export class IconNavComponent {
	@Input()
	public iconNavConfig!: IconNavConfig;

	constructor(public dialog: MatDialog, private router: Router) {}

	public onClickButton(): void {
		if (this.iconNavConfig?.routerLink) {
			this.router.navigate([this.iconNavConfig?.routerLink]);
		}

		if (this.iconNavConfig?.clickAction?.actionType === 'popup') {
			this.dialog.open(PopupDialogComponent, {
				data: {
					type: this.iconNavConfig.clickAction.type as DialogType,
				},
			});
		}
	}
}
