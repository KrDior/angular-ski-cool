import * as shared from '@shared/index';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
	declarations: [...shared.components, ...shared.directives, ...shared.pipes],
	imports: [
		CommonModule,
		...shared.materialModules,
		TranslateModule.forChild({}),
		RouterModule.forChild([]),
		FormsModule,
		ReactiveFormsModule,
		NgxMatIntlTelInputComponent,
	],
	exports: [...shared.components, ...shared.directives, ...shared.pipes, ...shared.materialModules],
	providers: [MatDatepickerModule],
})
export class SharedModule {}
