import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'rc-users-list',
  standalone: true,
  template: `
    <h2>Ta liste d'utilisateurs</h2>

    <ul>
      @for (user of users(); track user.id) {
      <li>{{ user.firstName }} {{ user.lastName }} - {{ user.email }}</li>
      } @empty {
      <li>Tu dois d'abord créer un utilisateur 👆🏼</li>
      }
    </ul>
  `,
  styles: `
      :host {
          ul {
              list-style-type: none;
              margin: 0;
              padding: 0;

              li {
                  padding: 0.5rem 1rem;
              }
          }
      }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  users: InputSignal<User[]> = input<User[]>([]);
}
