import * as shared from '@shared/index';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [...shared.components, ...shared.directives, ...shared.pipes],
	imports: [CommonModule, ...shared.materialModules],
	exports: [...shared.components, ...shared.directives, ...shared.pipes, ...shared.materialModules],
})
export class SharedModule {}
