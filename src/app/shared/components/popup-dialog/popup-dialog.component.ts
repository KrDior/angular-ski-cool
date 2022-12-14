import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LanguageList, NatureOfRequestList, ResortList } from '@shared/configs/form.config';
import { RoutePath } from 'src/app/app-routing.module';

export enum DialogType {
	Contact = 'Contact',
	Person = 'Person',
	PrivateBooking = 'PrivateBooking',
	GroupBooking = 'GroupBooking',
	Feedback = 'Feedback',
	FeedbackThank = 'FeedbackThank',
	BookingConfirmation = 'BookingConfirmation',
}

@Component({
	selector: 'app-popup-dialog',
	templateUrl: './popup-dialog.component.html',
	styleUrls: ['./popup-dialog.component.scss'],
})
export class PopupDialogComponent implements OnInit {
	public types = DialogType;
	public contactForm!: FormGroup;
	public feedbackForm!: FormGroup;
	public languages = LanguageList;
	public resorts = ResortList;
	public natureOfRequest = NatureOfRequestList;
	public files: File[] = [];
	public routes: typeof RoutePath = RoutePath;

	constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private snackBar: MatSnackBar) {}

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

		this.feedbackForm = new FormGroup({
			firstNameFeedback: new FormControl('', [Validators.required, Validators.maxLength(100)]),
			lastNameFeedback: new FormControl('', [Validators.required, Validators.maxLength(100)]),
			emailFeedback: new FormControl('', [Validators.required, Validators.maxLength(200)]),
			phoneNumberFeedback: new FormControl(''),
			inviteLink: new FormControl('', [Validators.required]),
			messageFeedback: new FormControl('', [Validators.required, Validators.maxLength(500)]),
		});
	}

	public onSubmitContact(): void {
		for (const field in this.contactForm.controls) {
			console.log(this.contactForm.controls[field].value);
		}
	}

	public onSubmitFeedback(): void {
		for (const field in this.feedbackForm.controls) {
			console.log(this.feedbackForm.controls[field].value);
		}
		this.closePopup();
		this.dialog.open(PopupDialogComponent, {
			data: {
				type: DialogType.FeedbackThank,
			},
		});
	}

	public checkError = (formName: FormGroup, controlName: string, errorName: string) => {
		return formName.controls[controlName].hasError(errorName);
	};

	public closePopup(): void {
		this.dialog.closeAll();
	}

	public onFileChange(event: any) {
		const fileList = event?.target?.files || (event as File[]);
		this.files = Object.keys(fileList).map((key) => fileList[key]);
		this.snackBar.open('Successfully uploaded!', 'Close', {
			duration: 2000,
		});
	}

	public deleteFromArray(index: number) {
		this.files.splice(index, 1);
	}
}
