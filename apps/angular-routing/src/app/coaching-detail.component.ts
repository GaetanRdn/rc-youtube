import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { Coaching } from './infra/coaching-in-memory.service';

@Component({
  selector: 'rc-coaching-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <h2 class="text-xl">{{ coaching().name }}</h2> `,
})
export class CoachingDetailComponent {
  protected readonly coaching: InputSignal<Coaching> = input.required();
}
