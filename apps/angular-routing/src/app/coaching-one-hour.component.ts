import { ChangeDetectionStrategy, Component, effect, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'rc-coaching-one-hour',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col h-auto w-full',
  },
  template: `<h1 class="text-2xl">Tu cherches un accompagnement d'1 heure ?</h1>

    <p class="text-base">{{ isRouterOutletActivated() }}</p>

    <router-outlet
      (activate)="isRouterOutletActivated.set($event)"
      (deactivate)="isRouterOutletActivated.set($event)"
    />`,
  imports: [RouterOutlet],
})
export class CoachingOneHourComponent {
  protected readonly isRouterOutletActivated: WritableSignal<unknown> = signal(null);

  log = effect(() => console.log(this.isRouterOutletActivated()));
}
