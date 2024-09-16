import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

@Injectable()
export class TodoInMemoryService {
  private readonly todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<
    Todo[]
  >([]);

  private id = 0;

  post(todo: Omit<Todo, 'id'>): Observable<Todo> {
    const todos: Todo[] = this.todos$.value;
    const newTodo: Todo = { ...todo, id: this.id++ };
    this.todos$.next([...todos, newTodo]);

    return of(newTodo);
  }

  getAll(): Observable<Todo[]> {
    return this.todos$.asObservable();
  }

  delete(id: Todo['id']): Observable<Todo | null> {
    const todo = this.todos$.value.find((t: Todo) => t.id === id) ?? null;

    this.todos$.next(this.todos$.value.filter((t: Todo) => t.id !== id));

    return of(todo);
  }
}
