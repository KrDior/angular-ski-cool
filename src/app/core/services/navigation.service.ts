import { Observable, BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

/* just single subject to emit across application key-value pair */
export class NavigationService {
	private linkBreaks: BehaviorSubject<number[]>;
	private linkWidths: BehaviorSubject<number[]>;

	constructor() {
		this.linkBreaks = new BehaviorSubject<number[]>([]);
		this.linkWidths = new BehaviorSubject<number[]>([]);
	}

	updateLineBreaks(values: number[]): void {
		this.linkBreaks.next(values);
	}

	getLineBreaks(): Observable<number[]> {
		return this.linkBreaks.asObservable();
	}

	updateLinkWidths(values: number[]): void {
		this.linkWidths.next(values);
	}

	getLinkWidths(): Observable<number[]> {
		return this.linkWidths.asObservable();
	}
}
