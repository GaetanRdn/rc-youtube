import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  InputSignalWithTransform,
} from '@angular/core';

@Component({
  selector: 'rc-with-new-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>with-input title : {{ titleWithNewWay() }}</p>
    <p>with-input disabled : {{ disabled() }}</p>
  `,
})
export class WithNewInputComponent {
  titleWithNewWay: InputSignal<string> = input.required({ alias: 'title' });

  disabled: InputSignalWithTransform<boolean, unknown> = input(false, { transform: booleanAttribute });
}
