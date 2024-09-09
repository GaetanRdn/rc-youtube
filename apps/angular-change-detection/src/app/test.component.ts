import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rc-test',
  standalone: true,
  template: `<p>test works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {}
