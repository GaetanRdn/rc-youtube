import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-coaching-one-month',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-8 justify-center items-center h-screen',
  },
  template: `<h1 class="text-3xl">Tu as besoin d'un accompagnement d'1 mois ?</h1>`,
})
export class CoachingOneMonthComponent {}
