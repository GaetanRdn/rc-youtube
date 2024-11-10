import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-coaching-one-month',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-8 h-auto',
  },
  template: `<h1 class="text-2xl">Tu as besoin d'un accompagnement d'1 mois ?</h1>`,
})
export class CoachingOneMonthComponent {}
