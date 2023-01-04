import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LanguageList, ResortList } from '@shared/configs/form.config';
import { RoutePath } from 'src/app/app-routing.module';
import { DialogType, PopupDialogComponent } from '../popup-dialog/popup-dialog.component';

@Component({
	selector: 'app-private-booking-form',
	templateUrl: './private-booking-form.component.html',
	styleUrls: ['./private-booking-form.component.scss'],
})
export class PrivateBookingFormComponent implements OnInit {
	public routes: typeof RoutePath = RoutePath;
	public privateBookingForm!: FormGroup;
	public languages = LanguageList;
	public resorts = ResortList;

	constructor(public dialog: MatDialog) {}

	ngOnInit() {
		this.privateBookingForm = new FormGroup({
			firstName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
			lastName: new FormControl('', [Validators.required, Validators.maxLength(30)]),
			email: new FormControl('', [Validators.required, Validators.maxLength(100)]),
			phoneNumber: new FormControl('', [Validators.required]),
			language: new FormControl('', [Validators.required]),
			resort: new FormControl('', [Validators.required]),
			startDate: new FormControl('', [Validators.required]),
			endDate: new FormControl('', [Validators.required]),
		});
	}

	public checkError = (controlName: string, errorName: string) => {
		return this.privateBookingForm.controls[controlName].hasError(errorName);
	};

	public onSubmit(): void {
		for (const field in this.privateBookingForm.controls) {
			console.log(this.privateBookingForm.controls[field].value);
		}
		this.dialog.open(PopupDialogComponent, {
			data: {
				type: DialogType.BookingConfirmation,
			},
		});
	}
}
