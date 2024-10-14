import { User, UserCreationPayload } from './user';
import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';

export interface CreateUserRepository {
  create(payload: UserCreationPayload): Observable<User>;
}

export interface UpdateUserRepository {
  update(payload: User): Observable<User>;
}

export interface GetAllUsersRepository {
  getAll(): Observable<User[]>;
}

export const CREATE_USER_REPOSITORY: InjectionToken<CreateUserRepository> = new InjectionToken<CreateUserRepository>(
  'CREATE_USER_REPOSITORY'
);
export const UPDATE_USER_REPOSITORY: InjectionToken<UpdateUserRepository> = new InjectionToken<UpdateUserRepository>(
  'UPDATE_USER_REPOSITORY'
);
export const GET_ALL_USER_REPOSITORY: InjectionToken<GetAllUsersRepository> = new InjectionToken<GetAllUsersRepository>(
  'GET_ALL_USER_REPOSITORY'
);
