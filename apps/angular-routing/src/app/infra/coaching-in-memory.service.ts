import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type Coaching = {
  id: number;
  name: string;
};

const COACHINGS = [
  {
    id: 1,
    name: 'Code Review',
  },
  {
    id: 2,
    name: 'Prépa entretien',
  },
] as const satisfies Coaching[];

@Injectable({
  providedIn: 'root',
})
export class CoachingInMemoryService {
  get(id: number): Observable<Coaching> {
    const found = COACHINGS.find((coaching) => coaching.id === id);

    if (!found) {
      throw new Error(`Coaching with id ${id} not found`);
    }

    return of(found);
  }
}
