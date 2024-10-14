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
  protected users: User[] = [
    { id: 1, lastName: 'Redin', firstName: 'Gaetan', email: 'rg@y.com' },
    {
      id: 2,
      lastName: 'Paulo',
      firstName: 'Paulo',
      email: 'mp@y.com',
    },
  ];

  // protected users: User[] = [];

  createUser(user: UserCreationPayload) {
    // TODO
  }
}
