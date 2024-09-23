import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  getAll(): Observable<any> {
    return of([
      {
        name: 'Redin',
        firstName: 'Gaetan',
      },
      {
        name: 'Bob',
        firstName: 'Uncle',
      },
    ]);
  }
}
