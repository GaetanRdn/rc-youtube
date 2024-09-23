import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreateUserPayload, User } from './user';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>('/users');
  }

  create(user: CreateUserPayload): Observable<User> {
    return this.httpClient.post<User>('/users', user);
  }
}
