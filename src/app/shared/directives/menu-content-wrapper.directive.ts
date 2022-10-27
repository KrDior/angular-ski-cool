import { Directive, ElementRef, Renderer2, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { MenuItem } from '@core/models/menu-item.model';
import { US_STATE_ACTIVE } from '@shared/constants/common-constants';
import { filter, Subscription } from 'rxjs';

@Directive({
	selector: '[appMenuContentWrapper]',
})
export class MenuContentWrapperDirective implements OnInit, OnDestroy {
	private urlChanges = Subscription.EMPTY;

	constructor(public elementRef: ElementRef, private renderer: Renderer2, private router: Router) {}

	@Input() item!: MenuItem;

	public ngOnInit() {
		// This is to ensure the top menu button gets active state class if a sub item is active.
		this.urlChanges = this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe((event: any) => {
				this.setTopMenuActiveRoute(event);
			});

		// This is to ensure the class gets added once the item goes from !item.visible --> item.visible.
		this.checkURL();
	}

	public focus(): void {
		this.elementRef.nativeElement.focus();
	}

	public getOffsetLeft(): number {
		return this.elementRef.nativeElement.offsetLeft;
	}

	public getOffsetWidth(): number {
		return this.elementRef.nativeElement.offsetWidth;
	}

	public ngOnDestroy() {
		this.urlChanges.unsubscribe();
	}

	private setTopMenuActiveRoute(event: NavigationEnd) {
		let remove = true;
		if (this.item?.items) {
			this.item.items.map((subitem) => {
				if ('/' + subitem.routerLink === event.url) {
					this.renderer.addClass(this.elementRef.nativeElement, US_STATE_ACTIVE);
					remove = false;
				}
			});
		}
		if (remove) {
			this.renderer.removeClass(this.elementRef.nativeElement, US_STATE_ACTIVE);
		}
	}

	private checkURL() {
		if (this.item?.items) {
			this.item.items.map((subitem) => {
				if ('/' + subitem.routerLink === this.router.url) {
					this.renderer.addClass(this.elementRef.nativeElement, US_STATE_ACTIVE);
				}
			});
		}
	}
}
