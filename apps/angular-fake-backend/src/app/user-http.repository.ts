import { inject, Injectable } from '@angular/core';
import { CreateUserRepository, GetAllUsersRepository, UpdateUserRepository } from './user.repository';
import { User, UserCreationPayload } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserHttpRepository implements CreateUserRepository, UpdateUserRepository, GetAllUsersRepository {
  private readonly httpClient: HttpClient = inject(HttpClient);

  create(payload: UserCreationPayload): Observable<User> {
    return this.httpClient.post<User>('/users', payload);
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>('/users');
  }

  update(payload: User): Observable<User> {
    return this.httpClient.put<User>('/users', payload);
  }
}
