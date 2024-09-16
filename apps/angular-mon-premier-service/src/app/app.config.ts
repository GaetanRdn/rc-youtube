import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { TodoInMemoryService } from './todo-in-memory.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    TodoInMemoryService,
  ],
};
