import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'rc-coaching-one-hour',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col h-auto w-full',
  },
  template: `<h1 class="text-2xl">Tu cherches un accompagnement d'1 heure ?</h1>
    <router-outlet />`,
  imports: [RouterOutlet],
})
export class CoachingOneHourComponent {}
