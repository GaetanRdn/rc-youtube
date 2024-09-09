import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-child',
  standalone: true,
  template: `<p>child works!</p>
    {{ log() }} `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  log(): string {
    console.log('hey child');
    return '';
  }
}
