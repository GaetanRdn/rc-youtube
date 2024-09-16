import { Todo, TodoInMemoryService } from './todo-in-memory.service';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

describe(TodoInMemoryService, () => {
  let service: TodoInMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoInMemoryService],
    });

    service = TestBed.inject(TodoInMemoryService);
  });

  it.each([
    {
      title: 'Valider les tests de service',
      completed: false,
    },
    {
      title: 'Second tour',
      completed: true,
    },
  ])(
    'doit renvoyer un todo avec un id lors du post %j',
    async (payload: Omit<Todo, 'id'>) => {
      // WHEN
      const newTodo: Todo = await firstValueFrom(service.post(payload));

      // THEN
      expect(newTodo.title).toEqual(payload.title);
      expect(newTodo.completed).toEqual(payload.completed);
      expect(newTodo.id).toBeTruthy();
    }
  );
});
