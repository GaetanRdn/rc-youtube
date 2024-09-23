import { UsersHttpService } from './users-http.service';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CreateUserPayload } from './user';

describe(UsersHttpService, () => {
  let service: UsersHttpService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersHttpService,
        {
          provide: HttpClient,
          useValue: {
            get: jest.fn(() => of([])),
            post: jest.fn((user) => of({ id: 1, ...user })),
          },
        },
      ],
    });

    service = TestBed.inject(UsersHttpService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should call right API when getAll', () => {
    // WHEN
    service.getAll().subscribe();

    // THEN
    expect(httpClient.get).toHaveBeenCalled();
    expect(httpClient.get).toHaveBeenCalledWith('/users');
  });

  it.each([
    { name: 'redin', firstName: 'gaetan' },
    {
      name: 'uncle',
      firstName: 'Bob',
    },
  ])('should call right API when create', (user: CreateUserPayload) => {
    // WHEN
    service.create(user).subscribe();

    // THEN
    expect(httpClient.post).toHaveBeenCalledWith('/users', user);
  });
});
