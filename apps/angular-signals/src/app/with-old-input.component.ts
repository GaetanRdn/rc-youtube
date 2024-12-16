import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'rc-with-old-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p>with-input title : {{ titleWithOldWay }}</p>`,
})
export class WithOldInputComponent {
  @Input() titleWithOldWay: string | undefined;
}
