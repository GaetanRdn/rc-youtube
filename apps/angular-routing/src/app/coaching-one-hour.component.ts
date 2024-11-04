import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-coaching-one-hour',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-8 justify-center items-center h-screen',
  },
  template: `<h1 class="text-3xl">Tu cherches un accompagnement d'1 heure ?</h1>`,
})
export class CoachingOneHourComponent {}
