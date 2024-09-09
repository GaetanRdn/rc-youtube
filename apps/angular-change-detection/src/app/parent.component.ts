import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'rc-parent',
  standalone: true,
  template: `parent works!
    {{ log() }}
    <rc-child />`,
  imports: [ChildComponent],
})
export class ParentComponent {
  log(): string {
    console.log('hey parent');
    return '';
  }
}
