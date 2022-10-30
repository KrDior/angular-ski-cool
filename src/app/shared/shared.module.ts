import * as shared from '@shared/index';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [...shared.components, ...shared.directives, ...shared.pipes],
	imports: [CommonModule, ...shared.materialModules, TranslateModule.forChild({}), RouterModule.forChild([])],
	exports: [...shared.components, ...shared.directives, ...shared.pipes, ...shared.materialModules],
})
export class SharedModule {}
