import { ChangeDetectionStrategy, Component, inject, input, numberAttribute, Signal } from '@angular/core';
import { Coaching, CoachingInMemoryService } from './infra/coaching-in-memory.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'rc-coaching-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <h2 class="text-xl">{{ coaching()?.name }}</h2> `,
})
export class CoachingDetailComponent {
  id = input.required({ transform: numberAttribute });

  private readonly coachingRepository: CoachingInMemoryService = inject(CoachingInMemoryService);

  protected readonly coaching: Signal<Coaching | undefined> = toSignal(
    toObservable(this.id).pipe(switchMap((id: number) => this.coachingRepository.get(id)))
  );
}
