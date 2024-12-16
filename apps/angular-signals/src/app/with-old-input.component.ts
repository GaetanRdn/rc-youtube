import { booleanAttribute, ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'rc-with-old-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>with-input title : {{ titleWithOldWay }}</p>
    <p>with-input disabled : {{ disabled }}</p>
  `,
})
export class WithOldInputComponent {
  @Input({ required: true, alias: 'title' }) titleWithOldWay!: string;

  @Input({ transform: booleanAttribute }) disabled = false;
}
