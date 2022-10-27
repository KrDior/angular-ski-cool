import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NavTabComponent } from './components/nav-tab/nav-tab.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component';
import { NavSliderComponent } from './components/nav-slider/nav-slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContentComponent } from './components/home/main-content/main-content.component';
import { MainFeaturesComponent } from './components/home/main-features/main-features.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BookingComponent } from './components/booking/booking.component';
import { ContactComponent } from './components/contact/contact.component';
import { GroupLessonComponent } from './components/group-lesson/group-lesson.component';
import { PrivateLessonComponent } from './components/private-lesson/private-lesson.component';
import { RecreationComponent } from './components/recreation/recreation.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		SidenavMenuComponent,
		LayoutComponent,
		NavTabComponent,
		NavSliderComponent,
		FooterComponent,
		MainContentComponent,
		MainFeaturesComponent,
		AboutUsComponent,
		BookingComponent,
		ReviewsComponent,
		RecreationComponent,
		PrivateLessonComponent,
		GroupLessonComponent,
		ContactComponent,
		HomeComponent,
	],
	imports: [CommonModule, SharedModule, RouterModule],
	exports: [LayoutComponent, SidenavMenuComponent, NavTabComponent, NavSliderComponent, FooterComponent],
})
export class CoreModule {
	/* make sure CoreModule is imported only by the AppModule and noone else */
	constructor(@Optional() @SkipSelf() presentInParent: CoreModule) {
		if (presentInParent) {
			throw new Error('CoreModule is already loaded. Import only in AppModule');
		}
	}
}
