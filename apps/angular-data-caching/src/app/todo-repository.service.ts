import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

/**
 * On souhaite créer un service qui va aller récupérer des données sur une api qu'on va appeler /todos.
 *
 * - On doit avoir un getAll qui permet de récupérer la liste des données via le endpoint fournit.
 * - On doit avoir un getById qui permet de récupérer un élément par son id
 *
 * => La contrainte est de limiter le nombre d'appels HTTP.
 */

@Injectable({
  providedIn: 'root',
})
export class TodoRepositoryService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  private readonly _todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('/todos').pipe(tap((response: Todo[]) => this._todos$.next(response)));
  }

  getById(searchedId: number): Observable<Todo> {
    const todos: Todo[] = this._todos$.value;
    const found: Todo | undefined = todos.find(({ id }: Todo) => id === searchedId);

    if (found) {
      return of(found);
    }

    return this.httpClient.get<Todo>(`/todos?id=${searchedId}`);
  }
}
