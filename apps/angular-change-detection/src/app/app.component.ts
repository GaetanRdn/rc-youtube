import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ParentComponent } from './parent.component';

@Component({
  standalone: true,
  selector: 'rc-root',
  template: `
    <button (click)="increment()">Click me</button>

    <p>{{ count }}</p>

    <rc-parent />
  `,
  imports: [ParentComponent],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent {
  count = 0;

  increment(): void {
    this.count += 1;
  }
}
