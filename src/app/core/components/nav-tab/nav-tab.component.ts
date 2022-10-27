import {
	Component,
	ChangeDetectionStrategy,
	AfterViewInit,
	ChangeDetectorRef,
	Input,
	ViewChild,
	ViewChildren,
	OnDestroy,
	QueryList,
	ElementRef,
} from '@angular/core';

import { ViewportRuler } from '@angular/cdk/scrolling';
import { RoutePath } from 'src/app/app-routing.module';
import { MenuItem } from '@core/models/menu-item.model';
import { Subscription } from 'rxjs';
import { MenuContentWrapperDirective } from '@shared/directives/menu-content-wrapper.directive';
import { US_STATE_ACTIVE, US_STATE_ACTIVE_SUB } from '@shared/constants/common-constants';

export type Position = 'flex-end' | 'center' | 'flex-start' | 'space-around';

@Component({
	selector: 'app-nav-tab',
	templateUrl: './nav-tab.component.html',
	styleUrls: ['./nav-tab.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavTabComponent implements AfterViewInit, OnDestroy {
	public routes: typeof RoutePath = RoutePath;

	@Input()
	public menuItems!: MenuItem[];

	// Space out the items that are visible still
	@Input()
	public space = false;

	// If you want to customize the "more" button
	@Input()
	public moreMenuItem!: MenuItem;

	// Position the main menu block, not the items
	@Input()
	public position: Position = 'center';

	@ViewChildren(MenuContentWrapperDirective)
	public linkWrappers!: QueryList<MenuContentWrapperDirective>;

	@ViewChild('tabListContainer')
	public tabListContainer!: ElementRef;

	@ViewChild('moreButton')
	public moreButton!: ElementRef;

	public uiStateActive = US_STATE_ACTIVE;
	public uiStateActiveSub = US_STATE_ACTIVE_SUB;

	// We start with it true so we can measure the button width
	public showMoreButton = true;
	public moreButtonWidth = 0;
	public moreItemCount = 0;

	//Measures the total space needed to show every link (linkW = LinkW + PrevLinkW).
	public linkWidths = [] as any;

	//Break points widths to show next available item as screen size grows, order matters.
	//(e.g. if availabespace > breakpoint, show it and then remove it from the list).
	public linkBreaks = [] as any;
	public resize = Subscription.EMPTY;

	constructor(private viewportRuler: ViewportRuler, private changeDetectorRef: ChangeDetectorRef) {}

	public ngAfterViewInit() {
		this.linkWidths = [];
		const resize = this.viewportRuler.change();
		const realign = () => {
			this.updateNav();
		};

		// Defer the first call in order to allow for slower browsers to lay out the elements.
		// This helps in cases where the user lands directly on a page with paginated tabs.
		typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(realign) : realign();
		this.resize = resize.subscribe(realign);
	}

	public ngOnDestroy() {
		this.resize.unsubscribe();
	}

	public updateNav() {
		// Measure the 'more' button width; the width can change when using the counter.
		if (this.moreButtonWidth === 0 || typeof this.moreButton !== 'undefined') {
			this.moreButtonWidth = this.moreButton.nativeElement.offsetWidth;
		}

		//The available space needs to be account for the space the More button takes up.
		const availableSpace = this.tabListContainer.nativeElement.offsetWidth - this.moreButtonWidth - 100;

		//Update the menu items when the nav loads.
		if (this.linkWidths.length === 0) {
			//Measure each menulink's width and save it.
			this.linkWrappers.map((val, index) => {
				if (this.linkWidths.length === 0) {
					this.linkWidths.push(val.getOffsetWidth());
				} else {
					this.linkWidths.push(val.getOffsetWidth() + this.linkWidths[index - 1]);
				}

				//Update the menu items that are overflowing.
				if (this.linkWidths[index] > availableSpace) {
					this.menuItems[index].visible = false;
					this.linkBreaks.push(this.linkWidths[index]);
				}
			});

			//Check if the menu button should be shown.
			if (this.linkBreaks.length < 1) {
				this.showMoreButton = false;
			} else {
				this.showMoreButton = true;
				this.moreItemCount = this.linkBreaks.length;
			}

			//Update the view.
			this.changeDetectorRef.detectChanges();
		} else {
			//All of this code below only runs if the viewport changes.

			//Check if the available space is less than the next smallest breakpoint (e.g. hide the next item).
			if (availableSpace < this.linkWidths[this.linkWrappers.length - 1]) {
				this.hideLinks(availableSpace);

				//Show the more button if it is not already shown.
				if (!this.showMoreButton) {
					this.showMoreButton = true;
				}

				//Update the count and then the view.
				this.moreItemCount = this.linkBreaks.length;
				this.changeDetectorRef.detectChanges();
			} else {
				//As the viewport grows we need to ensure the next item shows, order matters.
				//We need to ensure the smalles breakpoint is always checked first (e.g. the next
				//list item).

				this.linkBreaks.reverse();

				//Check if the viewport should show the next item as it grows.
				if (availableSpace > this.linkBreaks[this.linkBreaks.length - 1]) {
					this.showLinks(availableSpace);

					//Update the viewport.
					this.moreItemCount = this.linkBreaks.length;
					this.changeDetectorRef.detectChanges();
				}
				// Hide the more button if link break list is empty.
				if (this.linkBreaks.length < 1) {
					this.showMoreButton = false;
					this.changeDetectorRef.detectChanges();
				}
			}
		}
	}

	// We iterate through the list of items because changes in the viewport
	// aren't always iterative (e.g. portrait to landscape). We must always
	// assume then that the change could have affected the next N items vs
	// the next item.

	public hideLinks(availableSpace: number) {
		this.linkBreaks = [];

		this.linkWidths.map((val: number, index: any) => {
			if (availableSpace < val) {
				this.linkBreaks.push(val);
				this.menuItems[index].visible = false;
			}
		});
	}

	public showLinks(availableSpace: number) {
		const breaks = [...this.linkBreaks];

		breaks.reverse().map((val) => {
			if (availableSpace > val) {
				this.linkBreaks.pop();
				this.menuItems[this.linkWidths.indexOf(val)].visible = true;
			}
		});
	}
}
