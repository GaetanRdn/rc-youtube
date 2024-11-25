import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'rc-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="flex gap-4 items-center cursor-pointer border-2">
      <a class="w-10 h-10 inline-flex" routerLink="/home">
        <span class="bg-header-logo bg-cover bg-center w-10 h-10"></span>
        <span class="sr-only">lien pour rediriger vers la home page</span>
      </a>

      <nav class="flex items-center justify-items-center divide-x-2">
        <a class="py-2 px-4" routerLink="/coaching/one-hour">Coaching 1h</a>
        <a class="py-2 px-4" routerLink="/coaching/one-month">Coaching 1 mois</a>
        <a class="py-2 px-4" routerLink="/contact">Contact</a>
        <a class="py-2 px-4" routerLink="/eak">EasyAngularKit</a>
      </nav>
    </header>

    <main class="w-full h-full p-4 flex content-center justify-center">
      <router-outlet />
    </main>
  `,
  imports: [RouterOutlet, RouterLink],
})
export class AppComponent {}
