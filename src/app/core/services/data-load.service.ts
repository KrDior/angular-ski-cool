import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { PersonCard, personCardConfig } from '@shared/configs/person-card.config';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataLoadService {
	constructor(private http: HttpClient) {}

	public getInstructorsData(): Observable<PersonCard[]> {
		return of(personCardConfig);
	}
}
