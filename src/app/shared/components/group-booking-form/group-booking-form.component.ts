import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DisciplineList, LanguageList, LessonList, ResortList } from './group-form.config';

@Component({
	selector: 'app-group-booking-form',
	templateUrl: './group-booking-form.component.html',
	styleUrls: ['./group-booking-form.component.scss'],
})
export class GroupBookingFormComponent implements OnInit {
	public messageDetails = 'Your Details';

	public groupBookingForm!: FormGroup;

	public languages = LanguageList;
	public resorts = ResortList;
	public disciplines = DisciplineList;
	public lessons = LessonList;

	constructor() {}

	ngOnInit() {
		this.groupBookingForm = new FormGroup({
			shopName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
			shopAddress: new FormControl('', [Validators.required, Validators.maxLength(200)]),

			firstName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
			lastName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
			email: new FormControl('', [Validators.required, Validators.maxLength(200)]),
			phoneNumber: new FormControl('', [Validators.required]),
			language: new FormControl('', [Validators.required]),
			resort: new FormControl('', [Validators.required]),
			discipline: new FormControl('', [Validators.required]),
			lessonFocus: new FormControl(''),
			startDate: new FormControl('', [Validators.required]),
			endDate: new FormControl('', [Validators.required]),
			childNumber: new FormControl('', [Validators.required, Validators.maxLength(200)]),
			adultNumber: new FormControl('', [Validators.required, Validators.maxLength(200)]),
			lessonDuration: new FormControl('', [Validators.required, Validators.maxLength(200)]),
			instructor: new FormControl('', [Validators.required, Validators.maxLength(200)]),
			otherRequirement: new FormControl('', [Validators.maxLength(500)]),

			cardNumber: new FormControl('', [Validators.required, Validators.maxLength(200)]),
			expiration: new FormControl('', [Validators.required, Validators.maxLength(200)]),
			cvv: new FormControl('', [Validators.required, Validators.maxLength(200)]),
			cardName: new FormControl('', [Validators.required, Validators.maxLength(200)]),
		});
	}

	public checkError = (controlName: string, errorName: string) => {
		return this.groupBookingForm.controls[controlName].hasError(errorName);
	};

	public onSubmit(): void {
		for (const field in this.groupBookingForm.controls) {
			console.log(this.groupBookingForm.controls[field].value);
		}
	}
}
