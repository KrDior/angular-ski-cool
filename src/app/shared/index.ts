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
import { ArticleCenterComponent } from '@shared/components/article-center/article-center.component';
import { TextLineComponent } from '@shared/components/text-line/text-line.component';
import { AdvantageSlideComponent } from '@shared/components/advantage-slide/advantage-slide.component';
import { CarouselCardComponent } from '@shared/components/carousel-card/carousel-card.component';
import { PanningItemDirective } from '@shared/directives/panning-item.directive';
import { PanningContainerComponent } from '@shared/components/carousel-card/panning/panning.component';
import { ContactBlockComponent } from '@shared/components/contact-block/contact-block.component';

export const components: any[] = [
	PhotoCardComponent,
	ArticleCenterComponent,
	TextLineComponent,
	AdvantageSlideComponent,
	CarouselCardComponent,
	PanningContainerComponent,
	ContactBlockComponent,
];

export const directives: any[] = [PanningItemDirective];

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
