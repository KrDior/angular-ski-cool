import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AfterLoginRoutingModule } from './after-login-routing.module';
import { AfterLoginComponent } from './after-login.component';

@NgModule({
	declarations: [AfterLoginComponent],
	imports: [CommonModule, AfterLoginRoutingModule, SharedModule],
})
export class AfterLoginModule {}
