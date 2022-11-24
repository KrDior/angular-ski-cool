import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export enum DialogType {
	GroupBooking = 'GroupBooking',
}

@Component({
	selector: 'app-popup-dialog',
	templateUrl: './popup-dialog.component.html',
	styleUrls: ['./popup-dialog.component.scss'],
})
export class PopupDialogComponent {
	public types = DialogType;

	constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
