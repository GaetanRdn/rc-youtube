import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'rc-with-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p>with-input title : {{ titleWithOldWay }}</p>`,
})
export class WithInputComponent {
  @Input() titleWithOldWay: string | undefined;
}
