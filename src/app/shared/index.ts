import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRippleModule, MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { PhotoCardComponent } from '@shared/components/photo-card/photo-card.component';
import { ArticleCenterComponent } from '@shared/components/article-center/article-center.component';
import { TextLineComponent } from '@shared/components/text-line/text-line.component';
import { AdvantageSlideComponent } from '@shared/components/advantage-slide/advantage-slide.component';
import { CarouselCardComponent } from '@shared/components/carousel-card/carousel-card.component';
import { PanningItemDirective } from '@shared/directives/panning-item.directive';
import { PanningContainerComponent } from '@shared/components/carousel-card/panning/panning.component';
import { ContactBlockComponent } from '@shared/components/contact-block/contact-block.component';
import { ButtonConfigDirective } from '@shared/directives/button-config.directive';
import { GroupBookingFormComponent } from '@shared/components/group-booking-form/group-booking-form.component';
import { PopupDialogComponent } from '@shared/components/popup-dialog/popup-dialog.component';

export const components: any[] = [
	PhotoCardComponent,
	ArticleCenterComponent,
	TextLineComponent,
	AdvantageSlideComponent,
	CarouselCardComponent,
	PanningContainerComponent,
	ContactBlockComponent,
	GroupBookingFormComponent,
	PopupDialogComponent,
];

export const directives: any[] = [PanningItemDirective, ButtonConfigDirective];

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
	MatSelectModule,
	MatDatepickerModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatDialogModule,
];
