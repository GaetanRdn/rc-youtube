import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeComponent } from './home.component';
import { CoachingOneHourComponent } from './coaching-one-hour.component';
import { CoachingOneMonthComponent } from './coaching-one-month.component';
import { ContactComponent } from './contact.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'rc-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="flex gap-4 items-center cursor-pointer border-2">
      <a class="w-10 h-10 inline-flex">
        <span class="bg-header-logo bg-cover bg-center w-10 h-10"></span>
        <span class="sr-only">lien pour rediriger vers la home page</span>
      </a>

      <nav class="flex items-center justify-items-center divide-x-2">
        <a class="py-2 px-4">Coaching 1h</a>
        <a class="py-2 px-4">Coaching 1 mois</a>
        <a class="py-2 px-4">Contact</a>
      </nav>
    </header>

    <main class="w-full h-full p-4 flex content-center justify-center">
      <router-outlet />
    </main>
  `,
  imports: [HomeComponent, CoachingOneHourComponent, CoachingOneMonthComponent, ContactComponent, RouterOutlet],
})
export class AppComponent {}
