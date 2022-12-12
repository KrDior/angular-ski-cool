import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LanguageList, ResortList, DisciplineList, NatureOfRequestList } from '../group-booking-form/group-form.config';

export enum DialogType {
	GroupBooking = 'GroupBooking',
	Contact = 'Contact',
}

@Component({
	selector: 'app-popup-dialog',
	templateUrl: './popup-dialog.component.html',
	styleUrls: ['./popup-dialog.component.scss'],
})
export class PopupDialogComponent implements OnInit {
	public types = DialogType;
	public contactForm!: FormGroup;
	public languages = LanguageList;
	public resorts = ResortList;
	public natureOfRequest = NatureOfRequestList;

	constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) {}

	ngOnInit() {
		this.contactForm = new FormGroup({
			firstName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
			lastName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
			email: new FormControl('', [Validators.required, Validators.maxLength(200)]),
			phoneNumber: new FormControl('', [Validators.required]),
			language: new FormControl('', [Validators.required]),
			natureOfRequest: new FormControl('', [Validators.required]),
			otherRequirement: new FormControl('', [Validators.maxLength(500)]),
		});
	}

	public onSubmitContact(): void {
		for (const field in this.contactForm.controls) {
			console.log(this.contactForm.controls[field].value);
		}
	}

	public checkError = (controlName: string, errorName: string) => {
		return this.contactForm.controls[controlName].hasError(errorName);
	};

	public closePopup(): void {
		this.dialog.closeAll();
	}
}
