import { Component, DestroyRef, inject, Signal } from '@angular/core';
import { CreateUserFormComponent } from './create-user-form.component';
import { User, UserCreationPayload } from './user';
import { UsersListComponent } from './users-list.component';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import {
  CREATE_USER_REPOSITORY,
  CreateUserRepository,
  GET_ALL_USER_REPOSITORY,
  GetAllUsersRepository,
  UPDATE_USER_REPOSITORY,
  UpdateUserRepository,
} from './user.repository';

@Component({
  standalone: true,
  selector: 'rc-root',
  template: `
    <h1>Comment se passer d'un backend ✌🏼</h1>

    <rc-create-user-form (userCreated)="createUser($event)" />

    <rc-users-list [users]="users()" />
  `,
  imports: [CreateUserFormComponent, UsersListComponent],
})
export class AppComponent {
  private readonly createUserRepository: CreateUserRepository = inject(CREATE_USER_REPOSITORY);

  private readonly updateUserRepository: UpdateUserRepository = inject(UPDATE_USER_REPOSITORY);

  private readonly getAllUserRepository: GetAllUsersRepository = inject(GET_ALL_USER_REPOSITORY);

  protected users: Signal<User[]> = toSignal(this.getAllUserRepository.getAll(), {
    initialValue: [],
  });

  private readonly destroyRef: DestroyRef = inject(DestroyRef);

  createUser(user: UserCreationPayload) {
    this.createUserRepository.create(user).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(console.log);
  }
}
