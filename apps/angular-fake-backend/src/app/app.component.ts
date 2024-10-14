import { Component } from '@angular/core';
import { CreateUserFormComponent } from './create-user-form.component';
import { User, UserCreationPayload } from './user';
import { UsersListComponent } from './users-list.component';

@Component({
  standalone: true,
  selector: 'rc-root',
  template: `
    <h1>Comment se passer d'un backend ✌🏼</h1>

    <rc-create-user-form (userCreated)="createUser($event)" />

    <rc-users-list [users]="users" />
  `,
  imports: [CreateUserFormComponent, UsersListComponent],
})
export class AppComponent {
  protected users: User[] = [];

  createUser(user: UserCreationPayload) {
    // TODO
  }
}
