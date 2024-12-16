import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WithOldOutputComponent } from './with-old-output.component';

@Component({
  selector: 'rc-root',
  imports: [WithOldOutputComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col justify-center items-center w-screen h-screen',
  },
  template: `
    <h1 class="text-2xl font-bold">Welcome in angular-signals project</h1>

    <rc-with-old-output (actionChanged)="incrementOldCounter()" />

    <p>Old Counter : {{ oldCounter }}</p>
  `,
})
export class AppComponent {
  protected oldCounter = 0;

  incrementOldCounter(): void {
    this.oldCounter += 1;
  }
}
