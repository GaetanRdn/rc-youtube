import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-coaching-one-hour',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col h-auto w-full',
  },
  template: `<h1 class="text-2xl">Tu cherches un accompagnement d'1 heure ?</h1>`,
})
export class CoachingOneHourComponent {}
