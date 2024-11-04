import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { HomeComponent } from './home.component';
import { CoachingOneHourComponent } from './coaching-one-hour.component';
import { CoachingOneMonthComponent } from './coaching-one-month.component';
import { ContactComponent } from './contact.component';

@Component({
  standalone: true,
  selector: 'rc-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="flex gap-4 items-center cursor-pointer border-2">
      <a class="w-10 h-10 inline-flex" (click)="currentPage.set('home')">
        <span class="bg-header-logo bg-cover bg-center w-10 h-10"></span>
        <span class="sr-only">lien pour rediriger vers la home page</span>
      </a>

      <nav class="flex items-center justify-items-center divide-x-2">
        <a class="py-2 px-4" (click)="currentPage.set('one-hour')">Coaching 1h</a>
        <a class="py-2 px-4" (click)="currentPage.set('one-month')">Coaching 1 mois</a>
        <a class="py-2 px-4" (click)="currentPage.set('contact')">Contact</a>
      </nav>
    </header>

    <main class="w-full h-full p-4 flex content-center justify-center">
      @switch (currentPage()) { @case ('one-hour') {
      <rc-coaching-one-hour />
      } @case ('one-month') {
      <rc-coaching-one-month />
      } @case ('contact') {
      <rc-contact />
      } @default {
      <rc-home />
      } }
    </main>
  `,
  imports: [HomeComponent, CoachingOneHourComponent, CoachingOneMonthComponent, ContactComponent],
})
export class AppComponent {
  currentPage: WritableSignal<'home' | 'one-hour' | 'one-month' | 'contact'> = signal('home');
}
