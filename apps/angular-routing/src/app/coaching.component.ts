import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'rc-coaching',
  standalone: true,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  template: `<h1 class="text-3xl">Mes coachings</h1>
    <router-outlet /> `,
})
export class CoachingComponent {}
