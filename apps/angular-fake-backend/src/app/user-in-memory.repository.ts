import { Injectable } from '@angular/core';
import { CreateUserRepository, GetAllUsersRepository, UpdateUserRepository } from './user.repository';
import { User, UserCreationPayload } from './user';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserInMemoryRepository implements CreateUserRepository, UpdateUserRepository, GetAllUsersRepository {
  private users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  private id = 1;

  update(payload: User): Observable<User> {
    return of(payload);
  }

  create(payload: UserCreationPayload): Observable<User> {
    const users = this.users$.value;
    const newUser: User = { ...payload, id: this.id++ };

    this.users$.next([...users, newUser]);

    return of(newUser);
  }

  getAll(): Observable<User[]> {
    return this.users$.asObservable();
  }
}
