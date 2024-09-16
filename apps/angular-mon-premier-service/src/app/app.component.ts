import { Component, inject } from '@angular/core';
import { TodoInMemoryService } from './todo-in-memory.service';

@Component({
  standalone: true,
  selector: 'rc-root',
  template: ``,
  styles: ``,
  providers: [TodoInMemoryService],
})
export class AppComponent {
  private todoService: TodoInMemoryService = inject(TodoInMemoryService);
}
