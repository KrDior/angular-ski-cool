import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '@core/components/about-us/about-us.component';
import { BookingComponent } from '@core/components/booking/booking.component';
import { ContactComponent } from '@core/components/contact/contact.component';
import { GroupLessonComponent } from '@core/components/group-lesson/group-lesson.component';
import { HomeComponent } from '@core/components/home/home.component';
import { PageNotFoundComponent } from '@core/components/page-not-found/page-not-found.component';
import { PrivateLessonComponent } from '@core/components/private-lesson/private-lesson.component';
import { RecreationComponent } from '@core/components/recreation/recreation.component';
import { ReviewsComponent } from '@core/components/reviews/reviews.component';

export enum RoutePath {
	Home = 'home',
	AboutUs = 'about',
	PrivateLesson = 'private-lesson',
	GroupLesson = 'group-lesson',
	Recreation = 'recreation',
	Reviews = 'review',
	Contact = 'contacts',
	Booking = 'booking',
	PageNotFound = '404',
}

const routes: Routes = [
	{ path: RoutePath.Home, component: HomeComponent },
	{ path: RoutePath.AboutUs, component: AboutUsComponent },
	{ path: RoutePath.PrivateLesson, component: PrivateLessonComponent },
	{ path: RoutePath.GroupLesson, component: GroupLessonComponent },
	{ path: RoutePath.Recreation, component: RecreationComponent },
	{ path: RoutePath.Reviews, component: ReviewsComponent },
	{ path: RoutePath.Contact, component: ContactComponent },
	{ path: RoutePath.Booking, component: BookingComponent },
	{ path: RoutePath.Booking, component: BookingComponent },
	{ path: RoutePath.PageNotFound, component: PageNotFoundComponent },
	{
		path: 'after-login',
		loadChildren: () => import('./features/after-login/after-login.module').then((m) => m.AfterLoginModule),
	},
	{
		path: 'before-login',
		loadChildren: () => import('./features/before-login/before-login.module').then((m) => m.BeforeLoginModule),
	},
	{
		path: '',
		redirectTo: RoutePath.Home,
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: RoutePath.PageNotFound,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
