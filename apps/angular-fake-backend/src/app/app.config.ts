import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { CREATE_USER_REPOSITORY, GET_ALL_USER_REPOSITORY, UPDATE_USER_REPOSITORY } from './user.repository';
import { provideHttpClient } from '@angular/common/http';
import { UserHttpRepository } from './user-http.repository';
import { UserInMemoryRepository } from './user-in-memory.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    {
      provide: CREATE_USER_REPOSITORY,
      useClass: UserHttpRepository,
    },
    {
      provide: UPDATE_USER_REPOSITORY,
      useClass: UserInMemoryRepository,
    },
    {
      provide: GET_ALL_USER_REPOSITORY,
      useClass: UserHttpRepository,
    },
  ],
};
