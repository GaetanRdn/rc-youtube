import { ChangeDetectionStrategy, Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Coaching, CoachingInMemoryService } from './infra/coaching-in-memory.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'rc-coaching-one-hour',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col h-auto w-full',
  },
  template: `<h1 class="text-2xl">Tu cherches un accompagnement d'1 heure ?</h1>

    @if (!isRouterOutletActivated()) { @let coaching = existingCoachings()[random()] ;
    <button
      class="self-start text-base border border-black hover:bg-black/15 cursor-pointer rounded-3xl px-8 py-4"
      (click)="selectCoaching(coaching)"
    >
      {{ coaching.name }}
    </button>
    }
    <router-outlet (activate)="isRouterOutletActivated.set(true)" />`,
  imports: [RouterOutlet],
})
export class CoachingOneHourComponent {
  protected readonly isRouterOutletActivated: WritableSignal<boolean> = signal(false);

  protected readonly existingCoachings: Signal<Coaching[]> = toSignal(inject(CoachingInMemoryService).getAll(), {
    initialValue: [],
  });

  private readonly stopRandom$: Subject<void> = new Subject();

  protected readonly random = toSignal(
    interval(100).pipe(
      map(() => Math.floor(Math.random() * this.existingCoachings().length)),
      takeUntil(this.stopRandom$)
    ),
    { initialValue: 0 }
  );

  private readonly router: Router = inject(Router);

  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  protected selectCoaching({ id }: Coaching): Promise<boolean> {
    this.stopRandom$.next();

    return this.router.navigate([`${id}`], {
      relativeTo: this.activatedRoute,
    });
  }
}
