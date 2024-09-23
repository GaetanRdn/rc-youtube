import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './users-http.service';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [AsyncPipe],
  selector: 'rc-root',
  template: `<h1>EasyAngular Vidéo ✌🏼</h1>
    <ul>
      @for(user of users$ | async; track user) {
        <li>{{ user.firstName }} {{ user.name }}</li>
      }
    </ul> `,
  styles: ``,
})
export class AppComponent {
  protected users$: Observable<any> = inject(UsersService).getAll();
}