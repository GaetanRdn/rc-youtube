import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'rc-coaching',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet],
    host: {
        class: 'w-full h-auto flex flex-col gap-8 p-8',
    },
    template: `<h1 class="text-3xl">Mes coachings</h1>
    <router-outlet /> `
})
export class CoachingComponent {}
