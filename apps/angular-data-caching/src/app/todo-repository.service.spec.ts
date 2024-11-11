import { TestBed } from '@angular/core/testing';

import { Todo, TodoRepositoryService } from './todo-repository.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe(TodoRepositoryService, () => {
  let service: TodoRepositoryService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: { get: jest.fn() } }],
    });
    service = TestBed.inject(TodoRepositoryService);
    httpClient = TestBed.inject(HttpClient);
  });

  it(`doit renvoyer une liste de todos lorsque l'on appelle le getAll`, () => {
    const expected: Todo[] = [];
    jest.spyOn(httpClient, 'get').mockReturnValue(of(expected));

    let result: Todo[] | null = null;
    service.getAll().subscribe((response) => (result = response));

    expect(result).toEqual(expected);
    expect(httpClient.get).toHaveBeenCalledTimes(1);
    expect(httpClient.get).toHaveBeenCalledWith('/todos');
  });

  it(`doit renvoyer un élément via son id lorsque l'on appelle le getById`, () => {
    const expected: Todo = {
      id: 1,
      title: 'test',
      completed: false,
    };
    jest.spyOn(httpClient, 'get').mockReturnValue(of(expected));

    let result: Todo | null = null;
    service.getById(1).subscribe((response: Todo) => (result = response));

    expect(result).toEqual(expected);
    expect(httpClient.get).toHaveBeenCalledWith('/todos?id=1');
    expect(httpClient.get).toHaveBeenCalledTimes(1);
  });

  it(`ne doit pas appeler le httpClient get lorsque l'on appelle le getById avec un id déjà stocké localement`, () => {
    jest.spyOn(httpClient, 'get').mockReturnValueOnce(
      of([
        {
          id: 1,
          title: 'test',
          completed: false,
        },
      ])
    );

    service.getAll().subscribe();

    service.getById(1).subscribe();

    expect(httpClient.get).toHaveBeenCalledTimes(1);
  });
});
