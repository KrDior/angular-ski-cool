import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule, MatCommonModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { PhotoCardComponent } from '@shared/components/photo-card/photo-card.component';

export const components: any[] = [PhotoCardComponent];

export const directives: any[] = [];

export const pipes: any[] = [];

export const materialModules: any[] = [
	MatTabsModule,
	MatSidenavModule,
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
	MatListModule,
	MatMenuModule,
	MatFormFieldModule,
	MatInputModule,
	MatExpansionModule,
	MatRippleModule,
	MatCommonModule,
];
