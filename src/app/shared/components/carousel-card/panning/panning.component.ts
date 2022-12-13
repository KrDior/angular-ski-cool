import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	ContentChildren,
	ElementRef,
	QueryList,
	ViewChild,
	ViewChildren,
} from '@angular/core';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';
import { PanningItemDirective } from '@shared/directives/panning-item.directive';

@Component({
	selector: 'app-panning-container',
	templateUrl: './panning.component.html',
	styleUrls: ['./panning.component.scss'],
})
export class PanningContainerComponent implements AfterViewInit {
	@ContentChildren(PanningItemDirective)
	public items!: QueryList<PanningItemDirective>;

	@ViewChildren('consumedItem', { read: ElementRef })
	private itemsElements!: QueryList<ElementRef>;

	@ViewChild('carouselInner')
	private carousel!: ElementRef;

	@ViewChild('wrapper')
	private wrapper!: ElementRef;

	private timing = '250ms cubic-bezier(0.33, 1, 0.68, 1)';

	private itemWidth: number = 0;

	constructor(private builder: AnimationBuilder, private changeDetectorRef: ChangeDetectorRef) {}

	get firstItemWidth() {
		return this.itemWidth;
	}

	public containerWidth = '0px';

	/**
	 * The slide that we are currently on
	 */
	private currentSlide = 0;

	get currentIndex() {
		return this.currentSlide;
	}

	public shift(shifter: number): void {
		this.shiftToIndex(this.currentSlide + shifter);
	}

	public shiftToIndex(index: number): void {
		const pageSize = this.wrapper.nativeElement.getBoundingClientRect().width;
		const shiftSize = Math.max(1, Math.floor(pageSize / this.itemWidth));
		const purposed = this.currentIndex + shiftSize;
		const itemsOnPage = Math.floor(pageSize / this.itemWidth);
		const candidate = (index + this.items.length) % this.items.length;

		if (index === -1 && this.items.length - candidate < itemsOnPage) {
			this.currentSlide = this.items.length - purposed;
		} else if (candidate + itemsOnPage > this.items.length) {
			this.currentSlide = 0;
		} else {
			this.currentSlide = candidate;
		}

		const offset = this.currentSlide * this.itemWidth;

		const myAnimation: AnimationFactory = this.builder.build([
			animate(this.timing, style({ transform: `translateX(-${offset}px)` })),
		]);
		const player: AnimationPlayer = myAnimation.create(this.carousel.nativeElement);
		player.play();
	}

	/**
	 * Does a larger scroll (or page) for the number of items displayed on the screen, minimum one
	 */
	public page(pagesToShift: any) {
		const pageSize = this.wrapper.nativeElement.getBoundingClientRect().width;
		const shiftSize = Math.max(1, Math.floor(pageSize / this.itemWidth));
		const purposed = this.currentIndex + pagesToShift * shiftSize;

		// Handle page underflow
		if (purposed < 0) {
			// Page to zero if you would underflow and aren't currentl at zero
			if (this.currentIndex !== 0) {
				return this.shiftToIndex(0);
			}
		}

		// Handle page overflow
		if (purposed >= this.items?.length) {
			// Page would overflow, but you aren't on the last element go to it
			if (this.currentIndex !== this.items?.length - 1) {
				return this.shiftToIndex(this.items?.length - 1);
			}

			// If overflowing wrap to the beginning
			return this.shiftToIndex(0);
		}

		this.shiftToIndex(purposed);
	}

	ngAfterViewInit() {
		// For some reason only here I need to add setTimeout, in my local env it's working without
		this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
		// Sets container width width generous allowance
		this.changeDetectorRef.detectChanges();
	}
}
